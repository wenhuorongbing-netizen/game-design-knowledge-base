import path from "node:path";
import {
  indexesRoot,
  kbRoot,
  loadJson,
  nowIso,
  requireLegacyToolOptIn,
  reportsRoot,
  writeText
} from "./_common.mjs";
import { loadNormalizedCards, loadNormalizedWorks } from "./_library.mjs";

requireLegacyToolOptIn("kb-tools/report-rebuild-progress.mjs");

const works = loadNormalizedWorks();
const cards = loadNormalizedCards();
const libraryIndex = loadJson(path.join(indexesRoot, "library-index.json"), { stats: {}, items: [] });
const privateManifest = loadJson(path.join(kbRoot, "raw", "private-library", "manifest.json"), { entries: [] });
const extractManifest = loadJson(path.join(kbRoot, "raw", "private-library", "extract-manifest.json"), { entries: [] });
const officialManifest = loadJson(path.join(kbRoot, "raw", "official-metadata", "manifest.json"), { errors: [] });

function countCards(kind) {
  return cards.filter((card) => card.card_kind === kind).length;
}

const privateEntries = privateManifest.entries ?? [];
const extractEntries = extractManifest.entries ?? [];
const matchedPrivate = privateEntries.filter((entry) => entry.matched_work_id);
const reviewRequired = privateEntries.filter((entry) => entry.source_review_status !== "accepted");
const successfulExtracts = extractEntries.filter((entry) => ["ok", "reused"].includes(entry.extraction_status));
const extractedWorks = works.filter((work) => work.private_extract_count > 0);

const lines = [];
lines.push("# KB Rebuild Progress V2");
lines.push("");
lines.push(`- Generated at: ${nowIso()}`);
lines.push(`- Works: ${works.length}`);
lines.push(`- Cards: ${cards.length}`);
lines.push(`- Searchable items: ${libraryIndex.items?.length ?? 0}`);
lines.push("");
lines.push("## Phase 0 - Freeze and Spec");
lines.push("");
lines.push("- Spec created: `knowledge/50-game-design-masters-kb/catalog/06-kb-rebuild-spec-v2.md`");
lines.push("- Goal locked: move from hand-curated summary shelf to evidence-based, knowledge-first reading and research system.");
lines.push("");
lines.push("## Phase 1 - Private Book Discovery");
lines.push("");
lines.push(`- Private files discovered under \`knowledge/\`: ${privateEntries.length}`);
lines.push(`- Matched to known works: ${matchedPrivate.length}`);
lines.push(`- Still requiring provenance review: ${reviewRequired.length}`);
lines.push("- Output manifests:");
lines.push("  - `raw/private-library/manifest.json`");
lines.push("  - `reports/private-library-audit.md`");
lines.push("");
lines.push("## Phase 2 - Extraction Artifact Layer");
lines.push("");
lines.push(`- Extraction artifacts created or reused: ${successfulExtracts.length}`);
lines.push(`- Works with at least one private extract: ${extractedWorks.length}`);
lines.push("- Output artifacts:");
lines.push("  - `raw/private-library/extracted/*.json`");
lines.push("  - `raw/private-library/extract-manifest.json`");
lines.push("  - `reports/private-book-extraction.md`");
lines.push("");
lines.push("## Phase 3 - Work Layer Rewrite");
lines.push("");
lines.push(`- Works upgraded with knowledge positioning: ${works.filter((work) => (work.knowledge_domains ?? []).length > 0).length}`);
lines.push(`- Works carrying TOC preview: ${works.filter((work) => (work.primary_toc_preview ?? []).length > 0).length}`);
lines.push(`- Works carrying source review notes: ${works.filter((work) => (work.source_review_notes ?? []).length > 0).length}`);
lines.push("- Core upgrade: commercial books are no longer shallow entries only; they now carry extract-aware positioning, structure, provenance, and local artifact links.");
lines.push("");
lines.push("## Phase 4 - Derived Knowledge Cards");
lines.push("");
lines.push(`- Book entry cards: ${countCards("book_entry")}`);
lines.push(`- Book positioning notes: ${countCards("book_positioning_note")}`);
lines.push(`- Chapter map notes: ${countCards("chapter_map_note")}`);
lines.push(`- Evidence notes: ${countCards("evidence_note")}`);
lines.push(`- Concept seed notes: ${countCards("concept_seed_note")}`);
lines.push(`- Comparison notes: ${countCards("comparison_note")}`);
lines.push("- This is the main content-layer rebuild: books now produce reusable secondary knowledge objects instead of staying as isolated files.");
lines.push("");
lines.push("## Phase 5 - Knowledge-First Portal");
lines.push("");
lines.push("- Portal default mode switched back to `All Items`.");
lines.push("- `Context Workspace` and `Project Profile` remain available, but are collapsed under `Workspace Tools` so knowledge browsing is the primary entry flow again.");
lines.push("- Use-case packs remain in the portal, but they no longer dominate the default landing mode.");
lines.push("");
lines.push("## Remaining Risks");
lines.push("");
if (reviewRequired.length > 0) {
  lines.push(`- ${reviewRequired.length} private files still have mirror/repost-style provenance signals and should be treated as private analysis sources only.`);
}
if ((officialManifest.errors ?? []).length > 0) {
  for (const error of officialManifest.errors) {
    lines.push(`- Official metadata fetch issue: ${error.work_id} -> ${error.message}`);
  }
}
if (reviewRequired.length === 0 && (officialManifest.errors ?? []).length === 0) {
  lines.push("- No material rebuild blockers remain.");
}
lines.push("");
lines.push("## Next Upgrade Targets");
lines.push("");
lines.push("- Replace more hand-written summaries with extract-backed evidence notes for the remaining commercial books.");
lines.push("- Turn high-signal concept seeds into reusable concept cards instead of leaving them as seeds only.");
lines.push("- Add automated UI smoke tests for the portal, because the browsing and workspace layers are now both non-trivial.");

writeText(path.join(reportsRoot, "rebuild-progress-v2.md"), `${lines.join("\n").trim()}\n`);

console.log("rebuild progress report complete");
