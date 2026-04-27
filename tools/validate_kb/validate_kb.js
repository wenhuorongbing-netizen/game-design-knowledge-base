#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(process.argv[2] || process.cwd());
const kbRoot = path.join(repoRoot, "kb");
const reportPath = path.join(repoRoot, "VALIDATION_REPORT.md");
const jsonReportPath = path.join(repoRoot, "VALIDATION_REPORT.json");
const migrationExceptionsReportPath = path.join(repoRoot, "MIGRATION_EXCEPTIONS_REPORT.md");

const SOURCE_BASIS = new Set([
  "open_fulltext",
  "official_metadata",
  "user_legal_file",
  "user_manual_note",
  "user_manual_quote",
  "derived_from_user_note",
  "derived_from_public_metadata",
  "metadata_only",
  "unsupported_draft"
]);

const CONFIDENCE = new Set([
  "verified",
  "strong",
  "medium",
  "weak",
  "unsupported_draft",
  "user_interpretation",
  "ai_hypothesis"
]);

const REQUIRED_FILES = [
  "kb/00_governance/LEGAL_SOURCE_POLICY.md",
  "kb/00_governance/SOURCE_BASIS_ENUM.md",
  "kb/00_governance/CONFIDENCE_MODEL.md",
  "kb/01_sources/sources.json",
  "kb/01_sources/SOURCE_AUDIT_REPORT.md",
  "kb/01_sources/high_risk_quarantine.md",
  "kb/02_ontology/MASTER_TAXONOMY.md",
  "kb/02_ontology/ENTITY_MODEL.md",
  "kb/02_ontology/RELATIONSHIP_MODEL.md",
  "kb/02_ontology/ontology.json",
  "kb/03_works/works.json",
  "kb/03_works/WORK_REGISTRY.md",
  "kb/05_cards/card_schema.json",
  "kb/06_lenses/lens_schema.json",
  "kb/07_workflows/workflow_pack_schema.json",
  "kb/11_import_export/markdown_frontmatter_schema.md",
  "kb/11_import_export/json_schema_plan.md",
  "kb/12_quality/COVERAGE_MATRIX.md",
  "kb/12_quality/HALLUCINATION_AUDIT.md",
  "tools/validate_kb/validate_kb.js",
  "KB_PROJECT_STATE.md",
  "IMPLEMENTATION_LOG.md",
  "TODO.md"
];

const ENTITY_DIRS = [
  ["kb/04_dossiers/draft", "BookDossier"],
  ["kb/04_dossiers/verified", "BookDossier"],
  ["kb/05_cards/concept_cards", "ConceptCard"],
  ["kb/05_cards/framework_cards", "FrameworkCard"],
  ["kb/05_cards/quote_cards", "QuoteCard"],
  ["kb/05_cards/comparison_cards", "ComparisonCard"],
  ["kb/05_cards/application_cards", "ApplicationCard"],
  ["kb/05_cards/checklist_cards", "ChecklistCard"],
  ["kb/05_cards/prompt_cards", "PromptCard"],
  ["kb/05_cards/exercise_cards", "Exercise"],
  ["kb/05_cards/anti_pattern_cards", "KnowledgeCard"],
  ["kb/05_cards/case_study_cards", "KnowledgeCard"],
  ["kb/06_lenses/cards", "DesignLens"],
  ["kb/07_lessons/lesson_cards", "Lesson"],
  ["kb/08_workflows/packs", "WorkflowPack"],
  ["kb/08_workflows/exercises", "Exercise"],
  ["kb/08_workflows/prompts", "PromptTemplate"]
];

const ID_FIELDS = [
  "id",
  "source_document_id",
  "dossier_id",
  "chapter_node_id",
  "card_id",
  "lens_id",
  "lesson_id",
  "workflow_id",
  "exercise_id",
  "prompt_id",
  "claim_id",
  "work_id",
  "edge_id"
];

const issues = [];
const acceptedExceptions = [];
const ids = new Map();

function rel(filePath) {
  return path.relative(repoRoot, filePath).replace(/\\/g, "/");
}

function add(severity, rule, file, message) {
  issues.push({ severity, rule, file: file ? rel(file) : "", message });
}

function accept(rule, file, message) {
  acceptedExceptions.push({ rule, file: file ? rel(file) : "", message });
}

function exists(relativePath) {
  return fs.existsSync(path.join(repoRoot, relativePath));
}

function readJson(filePath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    add("P0", "invalid_json", filePath, error.message);
    return fallback;
  }
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function frontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  return match ? match[1] : "";
}

function scalar(fm, key) {
  const match = fm.match(new RegExp(`^${key}:\\s*(.*)$`, "m"));
  if (!match) return "";
  return match[1].trim().replace(/^["']|["']$/g, "");
}

function inlineArray(fm, key) {
  const raw = scalar(fm, key);
  if (!raw.startsWith("[") || !raw.endsWith("]")) return raw ? [raw] : [];
  return raw
    .slice(1, -1)
    .split(",")
    .map((part) => part.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function registerId(id, filePath) {
  if (!id) return;
  if (ids.has(id)) {
    add("P0", "duplicate_id", filePath, `Duplicate id '${id}' also seen in ${ids.get(id)}`);
  } else {
    ids.set(id, rel(filePath));
  }
}

function firstId(fm) {
  for (const field of ID_FIELDS) {
    const value = scalar(fm, field);
    if (value) return value;
  }
  return "";
}

function loadCoreJson() {
  const sources = readJson(path.join(kbRoot, "01_sources", "sources.json"), { source_documents: [] });
  const works = readJson(path.join(kbRoot, "03_works", "works.json"), { works: [] });
  const ontology = readJson(path.join(kbRoot, "02_ontology", "ontology.json"), { phase_groups: [], domains: [] });
  const relationships = readJson(path.join(kbRoot, "11_import_export", "export", "all_relationships.json"), { relationships: [] });
  const allEntities = readJson(path.join(kbRoot, "11_import_export", "export", "all_entities.json"), { entities: [] });
  const searchIndex = readJson(path.join(kbRoot, "11_import_export", "export", "search_index.json"), { documents: [] });
  const claimGraph = readJson(path.join(kbRoot, "05_cards", "claim_graph.json"), { claims: [] });
  return { sources, works, ontology, relationships, allEntities, searchIndex, claimGraph };
}

function validateRequiredFiles() {
  for (const relativePath of REQUIRED_FILES) {
    if (!exists(relativePath)) {
      add("P0", "missing_required_file", path.join(repoRoot, relativePath), "Required P0 file is missing.");
    }
  }
}

function validateJsonRegistries(core) {
  for (const source of core.sources.source_documents ?? core.sources.sources ?? []) {
    const id = source.source_document_id || source.id;
    registerId(id, path.join(kbRoot, "01_sources", "sources.json"));
    if (!source.source_basis) add("P0", "missing_source_basis", path.join(kbRoot, "01_sources", "sources.json"), `Source ${id} is missing source_basis.`);
    if (source.source_basis && !SOURCE_BASIS.has(source.source_basis)) add("P0", "invalid_source_basis", path.join(kbRoot, "01_sources", "sources.json"), `Source ${id} has invalid source_basis ${source.source_basis}.`);
    if (source.risk_level === "high" && source.ingestion_status !== "metadata_only_quarantined") {
      add("P0", "high_risk_not_quarantined", path.join(kbRoot, "01_sources", "sources.json"), `High-risk source ${id} is not metadata_only_quarantined.`);
    }
    if (source.risk_level === "high" && (source.allowed_operations ?? []).some((op) => ["generate_summary", "generate_embeddings"].includes(op))) {
      add("P0", "high_risk_unsafe_allowed_operation", path.join(kbRoot, "01_sources", "sources.json"), `High-risk source ${id} allows unsafe operation.`);
    }
  }

  for (const work of core.works.works ?? []) {
    const id = work.work_id || work.id;
    registerId(id, path.join(kbRoot, "03_works", "works.json"));
    if (!work.source_basis) add("P0", "missing_source_basis", path.join(kbRoot, "03_works", "works.json"), `Work ${id} is missing source_basis.`);
    if (!work.confidence) add("P0", "missing_confidence", path.join(kbRoot, "03_works", "works.json"), `Work ${id} is missing confidence.`);
    if (work.source_basis && !SOURCE_BASIS.has(work.source_basis)) add("P0", "invalid_source_basis", path.join(kbRoot, "03_works", "works.json"), `Work ${id} has invalid source_basis.`);
    if (work.confidence && !CONFIDENCE.has(work.confidence)) add("P0", "invalid_confidence", path.join(kbRoot, "03_works", "works.json"), `Work ${id} has invalid confidence.`);
    if (work.ingestion_status === "metadata_only_quarantined" && !["metadata_only", "unsupported_draft"].includes(work.source_basis)) {
      add("P0", "high_risk_source_used_as_summary_basis", path.join(kbRoot, "03_works", "works.json"), `Work ${id} is quarantined but uses ${work.source_basis}.`);
    }
  }
}

function validateMarkdownEntities() {
  for (const [relativeDir, inferredType] of ENTITY_DIRS) {
    const dir = path.join(repoRoot, relativeDir);
    for (const filePath of walk(dir).filter((file) => file.endsWith(".md"))) {
      if (path.basename(filePath).toLowerCase() === "readme.md") {
        accept("placeholder_readme_in_entity_folder", filePath, "README placeholder is ignored as a KB entity.");
        continue;
      }
      const text = fs.readFileSync(filePath, "utf8");
      const fm = frontmatter(text);
      if (!fm) {
        add("P0", "missing_frontmatter", filePath, "Entity markdown is missing YAML frontmatter.");
        continue;
      }
      const id = firstId(fm);
      registerId(id, filePath);
      if (!id) add("P0", "missing_id", filePath, "Entity is missing id or typed id field.");
      if (!scalar(fm, "entity_type")) {
        accept("missing_entity_type_in_legacy_generated_file", filePath, `entity_type missing; importer infers ${inferredType} from typed IDs and folder routing.`);
      }
      const sourceBasis = scalar(fm, "source_basis");
      const confidence = scalar(fm, "confidence");
      if (!sourceBasis) add("P0", "missing_source_basis", filePath, "Entity missing source_basis.");
      else if (!SOURCE_BASIS.has(sourceBasis)) add("P0", "invalid_source_basis", filePath, `Invalid source_basis ${sourceBasis}.`);
      if (!confidence) add("P0", "missing_confidence", filePath, "Entity missing confidence.");
      else if (!CONFIDENCE.has(confidence)) add("P0", "invalid_confidence", filePath, `Invalid confidence ${confidence}.`);
      const workLinkStatus = scalar(fm, "work_link_status");
      const evidenceGap = scalar(fm, "evidence_gap") || scalar(fm, "evidence_gap_reason");
      if (inferredType.includes("Card") && !inlineArray(fm, "related_works").length && !["PromptCard", "ChecklistCard"].includes(inferredType) && !(workLinkStatus === "not_applicable" && evidenceGap)) {
        add("warning", "card_without_related_work", filePath, "Card has no related_works.");
      }
      if (inferredType === "DesignLens" && !/diagnostic_questions:\s*\[|## Diagnostic Questions/i.test(`${fm}\n${text}`)) {
        add("P0", "lens_without_questions", filePath, "Lens has no diagnostic questions.");
      }
      if (inferredType === "WorkflowPack" && !inlineArray(fm, "output_artifacts").length) {
        add("P0", "workflow_without_output_artifact", filePath, "Workflow has no output_artifacts.");
      }
    }
  }
}

function validateClaims(core) {
  for (const claim of core.claimGraph.claims ?? []) {
    const id = claim.claim_id || claim.id || "unknown";
    registerId(id, path.join(kbRoot, "05_cards", "claim_graph.json"));
    if (!claim.source_basis) add("P0", "missing_source_basis", path.join(kbRoot, "05_cards", "claim_graph.json"), `Claim ${id} missing source_basis.`);
    if (!claim.confidence) add("P0", "missing_confidence", path.join(kbRoot, "05_cards", "claim_graph.json"), `Claim ${id} missing confidence.`);
    if (claim.confidence === "verified" && !(claim.evidence_refs ?? []).length) {
      add("P0", "verified_claim_without_evidence", path.join(kbRoot, "05_cards", "claim_graph.json"), `Claim ${id} is verified without evidence.`);
    }
  }
}

function validateRelationships(core) {
  const valid = new Set();
  for (const entity of core.allEntities.entities ?? []) valid.add(entity.id);
  for (const phase of core.ontology.phase_groups ?? []) valid.add(phase.phase_id);
  for (const domain of core.ontology.domains ?? []) valid.add(domain.domain_id);
  for (const work of core.works.works ?? []) valid.add(work.work_id);
  for (const source of core.sources.source_documents ?? []) valid.add(source.source_document_id);
  for (const edge of core.relationships.relationships ?? []) {
    if (edge.source_entity_id && !valid.has(edge.source_entity_id)) {
      add("P0", "broken_relationship_link", path.join(kbRoot, "11_import_export", "export", "all_relationships.json"), `Missing source node ${edge.source_entity_id}.`);
    }
    if (edge.target_entity_id && !valid.has(edge.target_entity_id)) {
      add("P0", "broken_relationship_link", path.join(kbRoot, "11_import_export", "export", "all_relationships.json"), `Missing target node ${edge.target_entity_id}.`);
    }
  }
}

function validateSearchSafety(core) {
  for (const doc of core.searchIndex.documents ?? []) {
    const excerpt = String(doc.body_excerpt_safe || "");
    const isQuarantined = doc.status === "metadata_only_quarantined" || doc.source_basis === "metadata_only";
    if (isQuarantined && excerpt && !excerpt.startsWith("[not applicable") && !excerpt.startsWith("[suppressed")) {
      add("P0", "high_risk_source_used_as_summary_basis", path.join(kbRoot, "11_import_export", "export", "search_index.json"), `Metadata-only document ${doc.id} has a body excerpt.`);
    }
  }
}

function validateRepoWideHighRiskArtifacts() {
  const files = walk(repoRoot).filter((file) => /\.(json|js|md|txt)$/i.test(file));
  for (const filePath of files) {
    const relative = rel(filePath);
    if (relative.includes("50-game-design-masters-kb/raw/private-library/extracted/") && filePath.endsWith(".json")) {
      add("P0", "high_risk_body_artifact_present", filePath, "Private-library extracted JSON artifact remains in repository.");
    }
    if (relative === "knowledge/kb-portal/data.js" || relative === "knowledge/kb-portal/content.js") {
      const text = fs.readFileSync(filePath, "utf8");
      if (/private-library\/extracted|private-library\\\\extracted/.test(text)) {
        add("P0", "portal_links_private_extracted_artifact", filePath, "Portal data links to private extracted artifacts.");
      }
      if (/"preview_text"\s*:|\"sample_sections\"\s*:/.test(text)) {
        add("P0", "portal_contains_body_extraction_fields", filePath, "Portal data contains body extraction fields.");
      }
      if (/(z-library|z-lib|1lib|Anna).{0,160}\.(pdf|epub)|\.(pdf|epub).{0,160}(z-library|z-lib|1lib|Anna)/i.test(text)) {
        add("P0", "portal_links_high_risk_source_file", filePath, "Portal data contains high-risk source filename/link.");
      }
    }
  }
}

function writeReports() {
  const counts = issues.reduce((acc, issue) => {
    acc[issue.severity] = (acc[issue.severity] || 0) + 1;
    return acc;
  }, {});
  const p0Count = counts.P0 || 0;
  const passMeaning =
    p0Count === 0
      ? acceptedExceptions.length
        ? "P0 safety gate passed; structural polish remains incomplete while accepted exceptions exist."
        : "P0 safety gate passed; no accepted migration exceptions remain."
      : "P0 safety gate failed.";
  const releaseInterpretation =
    p0Count === 0
      ? acceptedExceptions.length
        ? "Validation PASS means the draft/source-governed KB safety gate passed. It does not mean the repository is structurally perfect while accepted migration exceptions remain."
        : "Validation PASS means the draft/source-governed KB safety gate passed and no accepted migration exceptions remain."
      : "Validation FAIL means P0 issues must be fixed before release.";
  const lines = [
    "# Validation Report",
    "",
    `Generated at: ${new Date().toISOString()}`,
    `Repository: \`${repoRoot}\``,
    "",
    "## Summary",
    "",
    `- P0 issues: ${p0Count}`,
    `- P1 issues: ${counts.P1 || 0}`,
    `- warnings: ${counts.warning || 0}`,
    `- accepted exceptions: ${acceptedExceptions.length}`,
    `- result: ${p0Count === 0 ? "PASS" : "FAIL"}`,
    `- pass meaning: ${passMeaning}`,
    "",
    "## Release Interpretation",
    "",
    releaseInterpretation,
    "",
    "## Rules Covered",
    "",
    "- missing id",
    "- duplicate id",
    "- missing entity_type",
    "- missing source_basis",
    "- missing confidence",
    "- invalid source_basis",
    "- invalid confidence",
    "- broken relationship link",
    "- high-risk source used as summary basis",
    "- card without related work",
    "- lens without questions",
    "- workflow without output artifact",
    "- verified claim without evidence",
    "- legacy high-risk body artifact scan",
    "- unsafe portal data scan",
    "",
    "## Issues",
    "",
    "| Severity | Rule | File | Message |",
    "|---|---|---|---|"
  ];
  for (const issue of issues) {
    lines.push(`| ${issue.severity} | ${issue.rule} | \`${issue.file}\` | ${issue.message.replace(/\|/g, "\\|")} |`);
  }
  if (!issues.length) lines.push("| pass | none |  | No issues found. |");
  lines.push(
    "",
    "## Accepted Exceptions",
    "",
    "| Rule | File | Message |",
    "|---|---|---|"
  );
  for (const exception of acceptedExceptions) {
    lines.push(`| ${exception.rule} | \`${exception.file}\` | ${exception.message.replace(/\|/g, "\\|")} |`);
  }
  if (!acceptedExceptions.length) lines.push("| none |  | No accepted exceptions. |");

  const exceptionCounts = acceptedExceptions.reduce((acc, exception) => {
    acc[exception.rule] = (acc[exception.rule] || 0) + 1;
    return acc;
  }, {});
  const migrationLines = [
    "# Migration Exceptions Report",
    "",
    `Generated at: ${new Date().toISOString()}`,
    `Repository: \`${repoRoot}\``,
    "",
    "## Verdict",
    "",
    "- P0 safety gate: PASS if `VALIDATION_REPORT.md` reports 0 P0 issues.",
    `- accepted exceptions: ${acceptedExceptions.length}`,
    acceptedExceptions.length
      ? "- structural perfection: incomplete until these exceptions are repaired."
      : "- structural perfection: no accepted migration exceptions remain.",
    "",
    "## Meaning",
    "",
    exceptionCounts.missing_entity_type_in_legacy_generated_file
      ? "Accepted exceptions are explicit migration debt, not hidden success. Some records are allowed because the importer can infer entity types from folder routing and typed IDs, but future structural hardening should add explicit `entity_type` frontmatter to the affected Markdown files."
      : exceptionCounts.placeholder_readme_in_entity_folder
        ? "Accepted exceptions are explicit migration debt, not hidden success. The remaining exceptions are README placeholders inside entity folders; they are ignored as KB entities but still tracked for structural cleanliness."
        : "No accepted migration exceptions remain.",
    "",
    "## Counts By Rule",
    "",
    "| Rule | Count |",
    "|---|---:|"
  ];
  for (const [rule, count] of Object.entries(exceptionCounts).sort((a, b) => a[0].localeCompare(b[0]))) {
    migrationLines.push(`| ${rule} | ${count} |`);
  }
  if (!acceptedExceptions.length) migrationLines.push("| none | 0 |");
  migrationLines.push("", "## Required Follow-Up", "");
  if (exceptionCounts.missing_entity_type_in_legacy_generated_file) {
    migrationLines.push("- Add explicit `entity_type` frontmatter to legacy generated Markdown files.");
  }
  if (exceptionCounts.placeholder_readme_in_entity_folder) {
    migrationLines.push("- Decide whether README placeholders in entity folders should remain documented exceptions or move outside entity folders.");
  }
  if (!acceptedExceptions.length) {
    migrationLines.push("- No migration-exception follow-up is required. Continue normal validation before future releases.");
  } else {
    migrationLines.push(
      "- Keep remaining exceptions as P1 structural polish, not P0 source-governance blockers.",
      "- Do not describe the repository as structurally perfect until this report is empty."
    );
  }
  migrationLines.push("", "## Exceptions", "", "| Rule | File | Message |", "|---|---|---|");
  for (const exception of acceptedExceptions) {
    migrationLines.push(`| ${exception.rule} | \`${exception.file}\` | ${exception.message.replace(/\|/g, "\\|")} |`);
  }
  if (!acceptedExceptions.length) migrationLines.push("| none |  | No accepted exceptions. |");

  fs.writeFileSync(reportPath, `${lines.join("\n")}\n`, "utf8");
  fs.writeFileSync(migrationExceptionsReportPath, `${migrationLines.join("\n")}\n`, "utf8");
  fs.writeFileSync(jsonReportPath, JSON.stringify({ generated_at: new Date().toISOString(), counts, issues, accepted_exceptions: acceptedExceptions }, null, 2), "utf8");
  console.log(`${p0Count === 0 ? "PASS" : "FAIL"}: ${p0Count} P0 issue(s), ${counts.warning || 0} warning(s).`);
  console.log(`Report: ${reportPath}`);
  process.exitCode = p0Count === 0 ? 0 : 1;
}

validateRequiredFiles();
const core = loadCoreJson();
validateJsonRegistries(core);
validateMarkdownEntities();
validateClaims(core);
validateRelationships(core);
validateSearchSafety(core);
validateRepoWideHighRiskArtifacts();
writeReports();
