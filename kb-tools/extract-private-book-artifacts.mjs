import path from "node:path";
import {
  ensureDir,
  kbRoot,
  loadJson,
  nowIso,
  rawRoot,
  reportsRoot,
  writeJson,
  writeText
} from "./_common.mjs";

const userManifest = loadJson(path.join(kbRoot, "incoming", "user-supplied", "manifest.json"), {
  entries: []
});
const extractRoot = path.join(rawRoot, "private-library", "extracted");
const extractManifestPath = path.join(rawRoot, "private-library", "extract-manifest.json");
const reportPath = path.join(reportsRoot, "private-book-extraction.md");

ensureDir(extractRoot);
ensureDir(reportsRoot);

const extractableEntries = (userManifest.entries ?? []).filter((entry) =>
  [".pdf", ".epub"].includes(entry.extension)
);

const entries = extractableEntries.map((entry) => ({
  relative_path: entry.relative_path,
  matched_work_id: entry.matched_work_id ?? "",
  extraction_status: "blocked_pending_legal_sidecar",
  artifact_relative_path: "",
  warnings: [
    "P0 source-governance gate: private source body processing is disabled until a legal sidecar explicitly allows AI processing."
  ]
}));

writeJson(extractManifestPath, {
  generated_at: nowIso(),
  policy: "metadata_only_for_private_or_high_risk_sources",
  entries
});

const lines = [
  "# Private Book Extraction Disabled",
  "",
  `Generated at: ${nowIso()}`,
  "",
  "Private PDF/EPUB body processing is disabled for the Game Design Knowledgebase P0 release gate.",
  "",
  "Allowed operation: metadata registration only.",
  "Blocked operations: body extraction, chapter summaries, long quotations, embeddings, and source-body-derived cards.",
  "",
  "To enable body-level processing later, add a legal sidecar confirming lawful access and explicit AI processing permission, then implement a separate audited importer.",
  "",
  "## Blocked Entries",
  "",
  ...entries.map((entry) => `- \`${entry.relative_path}\` -> ${entry.extraction_status}`)
];

writeText(reportPath, `${lines.join("\n").trim()}\n`);

console.log(`private-book extraction disabled: ${entries.length} file(s) blocked pending legal sidecar`);
