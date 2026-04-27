import fs from "node:fs";
import path from "node:path";
import { openSeedBundles } from "./_bundles.mjs";
import {
  ensureDir,
  fetchBuffer,
  fetchText,
  fileExists,
  fileSize,
  loadJson,
  nowIso,
  openWebRoot,
  registryRoot,
  relativeToRepo,
  requireLegacyToolOptIn,
  sha256File,
  writeJson,
  writeText
} from "./_common.mjs";

requireLegacyToolOptIn("kb-tools/sync-open-sources.mjs");

const refresh = process.argv.includes("--refresh");
const manifestPath = path.join(openWebRoot, "manifest.json");
const previousManifest = loadJson(manifestPath, { resources: [] });
const previousByPath = new Map(previousManifest.resources.map((item) => [item.relative_path, item]));
const sources = loadJson(path.join(registryRoot, "sources.json"), []);

function findSourceByUrl(url) {
  const target = new URL(url);
  return sources.find((source) => {
    if (!source.base_url) {
      return false;
    }
    const base = new URL(source.base_url);
    const targetHost = target.hostname.replace(/^www\./, "");
    const baseHost = base.hostname.replace(/^www\./, "");
    return targetHost === baseHost || targetHost.endsWith(`.${baseHost}`);
  });
}

const resources = [];
const errors = [];
let downloadCount = 0;
let reuseCount = 0;

ensureDir(openWebRoot);

for (const [bundleId, entries] of Object.entries(openSeedBundles)) {
  for (const entry of entries) {
    const target = path.join(openWebRoot, entry.path);
    const relativePath = relativeToRepo(target);
    const source = findSourceByUrl(entry.url);
    if (!source || source.acquisition_policy !== "open_fulltext_fetch") {
      errors.push({
        bundle_id: bundleId,
        url: entry.url,
        message: "Source is not whitelisted for open_fulltext_fetch."
      });
      continue;
    }

    ensureDir(path.dirname(target));

    let status = "reused";
    let fetchedAt = previousByPath.get(relativePath)?.fetched_at ?? "";
    if (!fileExists(target) || refresh) {
      const existedBefore = fileExists(target);
      try {
        const extension = path.extname(target).toLowerCase();
        if (extension === ".html" || extension === ".htm" || extension === ".txt" || extension === ".md") {
          const text = await fetchText(entry.url, { delayMs: source.rate_limit_ms ?? 500 });
          writeText(target, text);
        } else {
          const buffer = await fetchBuffer(entry.url, { delayMs: source.rate_limit_ms ?? 500 });
          fs.writeFileSync(target, buffer);
        }
        status = existedBefore ? "refreshed" : "downloaded";
        fetchedAt = nowIso();
        downloadCount += 1;
      } catch (error) {
        errors.push({
          bundle_id: bundleId,
          url: entry.url,
          relative_path: relativePath,
          message: error.message
        });
        continue;
      }
    } else {
      reuseCount += 1;
    }

    resources.push({
      bundle_id: bundleId,
      source_id: source.id,
      url: entry.url,
      relative_path: relativePath,
      resource_kind: entry.resource_kind,
      file_name: path.basename(target),
      extension: path.extname(target).toLowerCase().replace(/^\./, ""),
      size_bytes: fileSize(target),
      sha256: sha256File(target),
      fetched_at: fetchedAt || nowIso(),
      status
    });
  }
}

resources.sort((left, right) => left.relative_path.localeCompare(right.relative_path));

const bundles = Object.keys(openSeedBundles).map((bundleId) => ({
  id: bundleId,
  expected_count: openSeedBundles[bundleId].length,
  actual_count: resources.filter((resource) => resource.bundle_id === bundleId).length
}));

writeJson(manifestPath, {
  generated_at: nowIso(),
  refresh,
  bundles,
  resources,
  errors
});

console.log(
  `open-source sync complete: ${resources.length} resources, ${downloadCount} downloaded/refreshed, ${reuseCount} reused, ${errors.length} errors`
);

if (errors.length > 0 && resources.length === 0) {
  process.exitCode = 1;
}
