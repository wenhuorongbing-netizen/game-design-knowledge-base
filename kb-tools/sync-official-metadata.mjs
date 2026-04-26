import path from "node:path";
import {
  ensureDir,
  extractBookLikeMetadata,
  fetchText,
  fileExists,
  loadJson,
  nowIso,
  officialMetadataRoot,
  readText,
  registryRoot,
  relativeToRepo,
  sanitizeFileName,
  writeJson,
  writeText
} from "./_common.mjs";
import { loadKnowledgeRegistry } from "./_library.mjs";

const refresh = process.argv.includes("--refresh");
const manifestPath = path.join(officialMetadataRoot, "manifest.json");
const previousManifest = loadJson(manifestPath, { records: [] });
const previousByKey = new Map();
for (const record of previousManifest.records ?? []) {
  for (const page of record.pages ?? []) {
    previousByKey.set(`${record.work_id}::${page.url}`, page);
  }
}

const sources = loadJson(path.join(registryRoot, "sources.json"), []);
const works = loadKnowledgeRegistry().works;

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

function buildSnapshotName(url, index) {
  const targetUrl = new URL(url);
  const basis = sanitizeFileName(`${targetUrl.hostname}${targetUrl.pathname}`.replace(/\//g, "-")).slice(0, 80);
  return `${String(index + 1).padStart(2, "0")}-${basis || "metadata"}.html`;
}

ensureDir(officialMetadataRoot);

const records = [];
const errors = [];
let fetchedCount = 0;
let reusedCount = 0;

for (const work of works) {
  const urls = [...new Set([work.canonical_url, ...(work.official_links ?? [])].filter(Boolean))];
  const pages = [];

  for (const [index, url] of urls.entries()) {
    const source = findSourceByUrl(url);
    if (!source) {
      errors.push({
        work_id: work.id,
        url,
        message: "No matching registered source."
      });
      continue;
    }
    if (!["open_fulltext_fetch", "open_metadata_fetch", "official_metadata_only"].includes(source.acquisition_policy)) {
      continue;
    }

    const target = path.join(officialMetadataRoot, work.id, buildSnapshotName(url, index));
    const relativePath = relativeToRepo(target);
    let html = "";
    let status = "reused";
    let fetchedAt = previousByKey.get(`${work.id}::${url}`)?.fetched_at ?? "";

    if (!fileExists(target) || refresh) {
      const existedBefore = fileExists(target);
      try {
        html = await fetchText(url, { delayMs: source.rate_limit_ms ?? 900 });
        writeText(target, html);
        status = existedBefore ? "refreshed" : "downloaded";
        fetchedAt = nowIso();
        fetchedCount += 1;
      } catch (error) {
        errors.push({
          work_id: work.id,
          url,
          message: error.message
        });
        continue;
      }
    } else {
      html = readText(target);
      reusedCount += 1;
    }

    const metadata = extractBookLikeMetadata(html, url);
    pages.push({
      url,
      source_id: source.id,
      relative_path: relativePath,
      fetched_at: fetchedAt || nowIso(),
      status,
      metadata
    });
  }

  records.push({
    work_id: work.id,
    title: work.title,
    access_mode: work.access_mode,
    pages
  });
}

writeJson(manifestPath, {
  generated_at: nowIso(),
  refresh,
  records,
  errors
});

console.log(
  `official-metadata sync complete: ${records.reduce((sum, record) => sum + record.pages.length, 0)} pages, ${fetchedCount} fetched/refreshed, ${reusedCount} reused, ${errors.length} errors`
);
