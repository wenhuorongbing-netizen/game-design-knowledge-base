import fs from "node:fs";
import path from "node:path";
import {
  ensureDir,
  fileSize,
  knowledgeRoot,
  loadJson,
  nowIso,
  rawRoot,
  relativeToRepo,
  requireLegacyToolOptIn,
  reportsRoot,
  sha256File,
  slugify,
  stripMarkdown,
  writeJson,
  writeText
} from "./_common.mjs";
import { loadKnowledgeRegistry } from "./_library.mjs";

requireLegacyToolOptIn("kb-tools/discover-private-books.mjs");

const privateLibraryRoot = path.join(rawRoot, "private-library");
const manifestPath = path.join(privateLibraryRoot, "manifest.json");
const reportPath = path.join(reportsRoot, "private-library-audit.md");
const works = loadKnowledgeRegistry().works;

ensureDir(privateLibraryRoot);
ensureDir(reportsRoot);

const supportedExtensions = new Set([".pdf", ".epub", ".txt", ".md"]);
const ignoredNames = new Set(["rebuild_instruction.md"]);

const manualPatterns = [
  { pattern: /art of game design/i, workId: "the-art-of-game-design" },
  { pattern: /game design reader/i, workId: "the-game-design-reader" },
  { pattern: /game design workshop/i, workId: "game-design-workshop" },
  { pattern: /game mechanics/i, workId: "game-mechanics-advanced-game-design" },
  { pattern: /game feel/i, workId: "game-feel" },
  { pattern: /level up/i, workId: "level-up" },
  { pattern: /the aesthetic of play/i, workId: "the-aesthetic-of-play" },
  { pattern: /play matters/i, workId: "play-matters" },
  { pattern: /theory of fun|a theory of fun/i, workId: "a-theory-of-fun-for-game-design" },
  { pattern: /challenges for game designers/i, workId: "challenges-for-game-designers" },
  { pattern: /characteristics of games/i, workId: "characteristics-of-games" },
  { pattern: /advanced game design/i, workId: "advanced-game-design-a-systems-approach" }
];

const stopWords = new Set([
  "the",
  "a",
  "an",
  "and",
  "of",
  "to",
  "for",
  "edition",
  "second",
  "third",
  "fourth",
  "fifth",
  "book",
  "books",
  "guide",
  "press",
  "sk",
  "lib",
  "z",
  "library",
  "zlibrary",
  "zlib",
  "1lib",
  "etc",
  "author",
  "mit",
  "pdf",
  "epub"
]);

function tokenize(value) {
  return slugify(value)
    .split("-")
    .filter((token) => token && token.length > 1 && !stopWords.has(token));
}

function cleanLooseBookName(fileName) {
  const extension = path.extname(fileName);
  let value = path.basename(fileName, extension);
  value = value.replace(/[_]+/g, " ");
  value = value.replace(/\b(z-?library|1lib|z-lib)\b/gi, " ");
  value = value.replace(/\((?:z-?library|1lib|z-lib|imusti|A K Peters|CRC Press|The MIT Press)[^)]*\)/gi, " ");
  value = value.replace(/\([^)]*?\.sk[^)]*\)/gi, " ");
  value = value.replace(/\([^)]*?author[^)]*\)/gi, " ");
  value = value.replace(/\s+--\s+/g, " ");
  value = value.replace(/\s+/g, " ").trim();
  return value;
}

function scoreHeuristicMatch(work, cleanedName) {
  const candidateSlug = slugify(cleanedName);
  const titleSlug = slugify(work.title);
  const titleTokens = tokenize(work.title);
  const authorTokens = tokenize((work.authors ?? []).join(" "));
  const candidateTokens = tokenize(cleanedName);
  const candidateSet = new Set(candidateTokens);

  let score = 0;
  if (candidateSlug === titleSlug) {
    score += 1000;
  } else if (candidateSlug.includes(titleSlug)) {
    score += 700;
  } else if (titleSlug.includes(candidateSlug) && candidateSlug.length > 10) {
    score += 400;
  }

  const titleOverlap = titleTokens.filter((token) => candidateSet.has(token));
  const authorOverlap = authorTokens.filter((token) => candidateSet.has(token));
  const overlapRatio = titleTokens.length > 0 ? titleOverlap.length / titleTokens.length : 0;
  score += titleOverlap.length * 45;
  score += authorOverlap.length * 20;

  if (overlapRatio >= 0.9 && titleTokens.length >= 4) {
    score += 180;
  } else if (overlapRatio >= 0.75 && titleTokens.length >= 5) {
    score += 120;
  }

  if (/anthology/i.test(cleanedName) && work.id === "rules-of-play") {
    score -= 300;
  }

  return score;
}

function assessSourceReview(fileName, matchStrategy, matchScore) {
  const provenanceFlags = [];
  if (/anna.?s archive/i.test(fileName)) {
    provenanceFlags.push("anna_archive_name");
  }
  if (/z-?library|1lib|z-lib/i.test(fileName)) {
    provenanceFlags.push("mirror_library_name");
  }
  if (/it-ebooks/i.test(fileName)) {
    provenanceFlags.push("mirror_watermark_name");
  }

  const reviewNotes = [];
  if (provenanceFlags.length > 0) {
    reviewNotes.push("file name suggests a third-party mirror or repost source");
  }
  if (matchStrategy === "heuristic" && matchScore < 700) {
    reviewNotes.push("heuristic match below high-confidence threshold");
  }

  return {
    provenance_flags: provenanceFlags,
    provenance_label: provenanceFlags.length > 0 ? "third_party_mirror_inferred" : "user_provided_file",
    source_review_status: "pending_review",
    review_notes: reviewNotes
  };
}

function matchByManualPattern(fileName) {
  for (const item of manualPatterns) {
    if (item.pattern.test(fileName)) {
      return item.workId;
    }
  }
  return "";
}

const entries = [];
const ignored = [];

for (const entry of fs.readdirSync(knowledgeRoot, { withFileTypes: true })) {
  if (!entry.isFile()) {
    continue;
  }
  if (ignoredNames.has(entry.name)) {
    continue;
  }
  const extension = path.extname(entry.name).toLowerCase();
  if (!supportedExtensions.has(extension)) {
    ignored.push({
      file_name: entry.name,
      relative_path: relativeToRepo(path.join(knowledgeRoot, entry.name)),
      reason: "Unsupported extension"
    });
    continue;
  }

  const absolutePath = path.join(knowledgeRoot, entry.name);
  const cleanedName = cleanLooseBookName(entry.name);
  const manualMatch = matchByManualPattern(cleanedName);
  const candidates = works
    .map((work) => ({
      work_id: work.id,
      score: manualMatch === work.id ? 2000 : scoreHeuristicMatch(work, cleanedName)
    }))
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score);
  const best = candidates[0];
  const matchedWorkId = best && best.score >= 650 ? best.work_id : "";
  const sourceReview = assessSourceReview(entry.name, manualMatch ? "manual-pattern" : best ? "heuristic" : "none", best?.score ?? 0);

  entries.push({
    file_name: entry.name,
    relative_path: relativeToRepo(absolutePath),
    extension,
    size_bytes: fileSize(absolutePath),
    sha256: sha256File(absolutePath),
    discovered_at: nowIso(),
    source_scope: "knowledge-root-loose",
    cleaned_name: cleanedName,
    matched_work_id: matchedWorkId,
    match_strategy: manualMatch ? "manual-pattern" : best ? "heuristic" : "none",
    match_score: best?.score ?? 0,
    candidate_work_ids: candidates.slice(0, 5).map((item) => item.work_id),
    provenance_flags: sourceReview.provenance_flags,
    provenance_label: sourceReview.provenance_label,
    source_review_status: sourceReview.source_review_status,
    review_notes: sourceReview.review_notes
  });
}

const bySha = new Map();
for (const entry of entries) {
  const current = bySha.get(entry.sha256) ?? [];
  current.push(entry.relative_path);
  bySha.set(entry.sha256, current);
}

for (const entry of entries) {
  const duplicates = bySha.get(entry.sha256) ?? [];
  entry.duplicate_group = duplicates.length > 1 ? duplicates : [];
}

entries.sort((left, right) => left.file_name.localeCompare(right.file_name));

writeJson(manifestPath, {
  generated_at: nowIso(),
  source_root: relativeToRepo(knowledgeRoot),
  supported_extensions: [...supportedExtensions].sort(),
  stats: {
    file_count: entries.length,
    matched_count: entries.filter((entry) => entry.matched_work_id).length,
    unmatched_count: entries.filter((entry) => !entry.matched_work_id).length,
    duplicate_count: entries.filter((entry) => entry.duplicate_group.length > 0).length,
    review_required_count: entries.filter((entry) => entry.source_review_status !== "accepted").length
  },
  entries,
  ignored
});

const lines = [];
lines.push("# 私有书源审计");
lines.push("");
lines.push(`- 生成时间：${nowIso()}`);
lines.push(`- 发现文件：${entries.length}`);
lines.push(`- 已匹配 works：${entries.filter((entry) => entry.matched_work_id).length}`);
lines.push(`- 未匹配：${entries.filter((entry) => !entry.matched_work_id).length}`);
lines.push(`- 重复文件：${entries.filter((entry) => entry.duplicate_group.length > 0).length}`);
lines.push("");
lines.push("## 已匹配");
lines.push("");
for (const entry of entries.filter((item) => item.matched_work_id)) {
  lines.push(`- \`${entry.file_name}\` -> \`${entry.matched_work_id}\``);
}
lines.push("");
lines.push("## 未匹配");
lines.push("");
const unmatched = entries.filter((item) => !item.matched_work_id);
if (unmatched.length === 0) {
  lines.push("- 无");
} else {
  for (const entry of unmatched) {
    lines.push(`- \`${entry.file_name}\``);
  }
}
lines.push("");
lines.push("## 重复");
lines.push("");
const duplicateLeaders = entries.filter(
  (entry, index, list) =>
    entry.duplicate_group.length > 0 &&
    list.findIndex((item) => item.sha256 === entry.sha256) === index
);
if (duplicateLeaders.length === 0) {
  lines.push("- 无");
} else {
  for (const entry of duplicateLeaders) {
    lines.push(`- ${entry.duplicate_group.map((item) => `\`${item}\``).join(" / ")}`);
  }
}

writeText(reportPath, `${lines.join("\n").trim()}\n`);

console.log(
  `private-book discovery complete: ${entries.length} files, ${entries.filter((entry) => entry.matched_work_id).length} matched, ${unmatched.length} unmatched`
);
