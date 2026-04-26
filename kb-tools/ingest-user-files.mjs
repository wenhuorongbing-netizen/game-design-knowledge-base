import fs from "node:fs";
import path from "node:path";
import {
  ensureDir,
  fileSize,
  incomingRoot,
  loadJson,
  nowIso,
  parseUserFileName,
  rawRoot,
  registryRoot,
  relativeToRepo,
  sha256File,
  slugify,
  userSuppliedRoot,
  writeJson
} from "./_common.mjs";
import { loadKnowledgeRegistry } from "./_library.mjs";

ensureDir(userSuppliedRoot);

const works = loadKnowledgeRegistry().works;
const sources = loadJson(path.join(registryRoot, "sources.json"), []);
const privateBookManifest = loadJson(path.join(rawRoot, "private-library", "manifest.json"), { entries: [], ignored: [] });
const supportedExtensions = new Set(
  sources.find((source) => source.id === "local-user")?.allowed_file_types?.map((value) => `.${value}`) ??
    [".pdf", ".epub", ".md", ".txt", ".json"]
);

function loadSidecar(target) {
  const extension = path.extname(target);
  const sidecarPath = target.slice(0, -extension.length) + ".meta.json";
  if (!fs.existsSync(sidecarPath)) {
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(sidecarPath, "utf8"));
  } catch {
    return null;
  }
}

function scoreWorkMatch(work, parsed, sidecar) {
  if (sidecar?.work_id && sidecar.work_id === work.id) {
    return 1000;
  }
  const workTitle = slugify(work.title);
  const workAuthors = slugify((work.authors ?? []).join(" "));
  const parsedTitle = slugify(sidecar?.title ?? parsed.title);
  const parsedAuthor = slugify(sidecar?.author ?? parsed.author);
  let score = 0;
  if (parsedTitle && workTitle === parsedTitle) {
    score += 500;
  } else if (parsedTitle && workTitle.includes(parsedTitle)) {
    score += 200;
  } else if (parsedTitle && parsedTitle.includes(workTitle)) {
    score += 150;
  }
  if (parsedAuthor && workAuthors.includes(parsedAuthor)) {
    score += 120;
  }
  if ((sidecar?.isbn ?? "") && (work.isbn ?? "") && sidecar.isbn === work.isbn) {
    score += 400;
  }
  return score;
}

const entries = [];
const ignored = [];

function buildDiscoveredEntry(absolutePath) {
  const fileName = path.basename(absolutePath);
  const extension = path.extname(fileName).toLowerCase();
  const parsed = parseUserFileName(fileName);
  const sidecar = loadSidecar(absolutePath);
  const candidateScores = works
    .map((work) => ({
      work_id: work.id,
      score: scoreWorkMatch(work, parsed, sidecar)
    }))
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score);
  const bestMatch = candidateScores[0];

  return {
    file_name: fileName,
    relative_path: relativeToRepo(absolutePath),
    extension,
    size_bytes: fileSize(absolutePath),
    sha256: sha256File(absolutePath),
    ingested_at: nowIso(),
    parsed_author: sidecar?.author ?? parsed.author,
    parsed_title: sidecar?.title ?? parsed.title,
    parsed_meta: sidecar?.meta ?? parsed.meta,
    matched_work_id: sidecar?.work_id ?? (bestMatch?.score >= 200 ? bestMatch.work_id : ""),
    match_score: bestMatch?.score ?? 0,
    candidate_work_ids: candidateScores.slice(0, 5).map((item) => item.work_id),
    sidecar,
    source_scope: "incoming-user-supplied",
    source_review_status: "accepted",
    provenance_label: "user_provided_file",
    provenance_flags: [],
    review_notes: []
  };
}

for (const fileName of fs.readdirSync(userSuppliedRoot)) {
  const absolutePath = path.join(userSuppliedRoot, fileName);
  const stat = fs.statSync(absolutePath);
  if (stat.isDirectory()) {
    continue;
  }
  const extension = path.extname(fileName).toLowerCase();
  if (fileName === "manifest.json" || (extension === ".json" && fileName.endsWith(".meta.json"))) {
    continue;
  }
  if (!supportedExtensions.has(extension)) {
    ignored.push({
      file_name: fileName,
      relative_path: relativeToRepo(absolutePath),
      reason: "Unsupported extension"
    });
    continue;
  }
  entries.push(buildDiscoveredEntry(absolutePath));
}

for (const entry of privateBookManifest.entries ?? []) {
  if (!supportedExtensions.has(entry.extension)) {
    ignored.push({
      file_name: entry.file_name,
      relative_path: entry.relative_path,
      reason: "Unsupported extension"
    });
    continue;
  }
  entries.push({
    file_name: entry.file_name,
    relative_path: entry.relative_path,
    extension: entry.extension,
    size_bytes: entry.size_bytes,
    sha256: entry.sha256,
    ingested_at: nowIso(),
    parsed_author: "",
    parsed_title: entry.cleaned_name,
    parsed_meta: "",
    matched_work_id: entry.matched_work_id ?? "",
    match_score: entry.match_score ?? 0,
    candidate_work_ids: entry.candidate_work_ids ?? [],
    sidecar: null,
    source_scope: entry.source_scope ?? "knowledge-root-loose",
    source_review_status: entry.source_review_status ?? "accepted",
    provenance_label: entry.provenance_label ?? "user_provided_file",
    provenance_flags: entry.provenance_flags ?? [],
    review_notes: entry.review_notes ?? [],
    discovery_notes: [
      entry.match_strategy ? `match_strategy:${entry.match_strategy}` : "",
      ...(entry.duplicate_group?.length ? [`duplicate_group:${entry.duplicate_group.length}`] : [])
    ].filter(Boolean)
  });
}

const dedupedEntries = [...entries]
  .reduce((map, entry) => {
    const key = entry.relative_path;
    if (!map.has(key)) {
      map.set(key, entry);
    }
    return map;
  }, new Map())
  .values();

const finalEntries = [...dedupedEntries].sort((left, right) => left.file_name.localeCompare(right.file_name));

writeJson(path.join(userSuppliedRoot, "manifest.json"), {
  generated_at: nowIso(),
  supported_extensions: [...supportedExtensions].sort(),
  entries: finalEntries,
  ignored
});

console.log(
  `user-file ingest complete: ${finalEntries.length} supported files, ${finalEntries.filter((entry) => entry.matched_work_id).length} matched to known works, ${ignored.length} ignored`
);
