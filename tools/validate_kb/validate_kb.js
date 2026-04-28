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

const LEGAL_EVIDENCE_SOURCE_BASIS = new Set([
  "open_fulltext",
  "official_metadata",
  "user_legal_file",
  "user_manual_note",
  "user_manual_quote",
  "derived_from_user_note",
  "derived_from_public_metadata"
]);

const INSUFFICIENT_VERIFIED_EVIDENCE_BASIS = new Set([
  "metadata_only",
  "unsupported_draft",
  "ai_hypothesis"
]);

const LEGAL_SIDECAR_ACCESS_BASIS = new Set([
  "owned_physical_copy",
  "purchased_ebook",
  "library_access",
  "official_open_access",
  "publisher_permission",
  "author_permission",
  "public_domain",
  "other"
]);

const LEGAL_SIDECAR_APPROVAL_STATUS = new Set([
  "pending_review",
  "approved_metadata_only",
  "approved_user_notes_only",
  "approved_full_processing",
  "rejected",
  "expired"
]);

const USER_MANUAL_NOTE_TYPES = new Set([
  "chapter_note",
  "concept_note",
  "reading_reflection",
  "method_note",
  "comparison_note",
  "project_application_note"
]);

const USER_MANUAL_NOTE_STATUS = new Set([
  "draft",
  "review_needed",
  "accepted_user_note",
  "rejected"
]);

const USER_MANUAL_QUOTE_STATUS = new Set([
  "draft",
  "accepted_user_quote",
  "needs_review",
  "rejected"
]);

const MANUAL_QUOTE_MAX_WORDS = 80;
const MANUAL_QUOTE_WARN_WORDS = 40;
const CLAIM_PROMOTION_LEVELS = new Set([
  "unsupported_draft",
  "ai_hypothesis",
  "user_interpretation",
  "weak",
  "medium",
  "strong",
  "verified"
]);
const CLAIM_PROMOTION_LEVEL_RANK = {
  unsupported_draft: 0,
  ai_hypothesis: 1,
  user_interpretation: 2,
  weak: 3,
  medium: 4,
  strong: 5,
  verified: 6
};
const STRONG_PROMOTION_TARGETS = new Set(["strong", "verified"]);
const CLAIM_PROMOTION_REVIEW_DECISIONS = new Set([
  "accept",
  "approved",
  "reject",
  "rejected",
  "defer",
  "deferred",
  "needs_more_evidence",
  "blocked"
]);
const ACCEPTED_EVIDENCE_SCOPE_ALIGNMENT = new Set([
  "within_evidence_scope",
  "matches_evidence_scope",
  "narrower_than_evidence_scope"
]);

const REQUIRED_FILES = [
  "kb/00_governance/LEGAL_SOURCE_POLICY.md",
  "kb/00_governance/SOURCE_BASIS_ENUM.md",
  "kb/00_governance/CONFIDENCE_MODEL.md",
  "kb/01_sources/sources.json",
  "kb/01_sources/SOURCE_AUDIT_REPORT.md",
  "kb/01_sources/high_risk_quarantine.md",
  "kb/01_sources/USER_REQUIRED_EVIDENCE.md",
  "kb/02_ontology/MASTER_TAXONOMY.md",
  "kb/02_ontology/ENTITY_MODEL.md",
  "kb/02_ontology/RELATIONSHIP_MODEL.md",
  "kb/02_ontology/ontology.json",
  "kb/03_works/works.json",
  "kb/03_works/WORK_REGISTRY.md",
  "kb/05_cards/card_schema.json",
  "kb/06_lenses/lens_schema.json",
  "kb/08_workflows/workflow_pack_schema.json",
  "kb/11_import_export/markdown_frontmatter_schema.md",
  "kb/11_import_export/json_schema_plan.md",
  "kb/12_quality/COVERAGE_MATRIX.md",
  "kb/12_quality/HALLUCINATION_AUDIT.md",
  "kb/13_evidence/README.md",
  "kb/13_evidence/EVIDENCE_INTAKE_PLAN.md",
  "kb/13_evidence/EVIDENCE_REF_SCHEMA.md",
  "kb/13_evidence/CLAIM_PROMOTION_WORKFLOW.md",
  "kb/13_evidence/EVIDENCE_GAP_REGISTER.md",
  "kb/13_evidence/PRIORITY_EVIDENCE_BACKLOG.md",
  "kb/13_evidence/EVIDENCE_VALIDATION_RULES.md",
  "kb/13_evidence/sidecars/source_sidecar_template.yaml",
  "kb/13_evidence/sidecars/README.md",
  "kb/13_evidence/sidecars/SIDECAR_REVIEW_GUIDE.md",
  "kb/13_evidence/sidecars/SIDECAR_STATUS_INDEX.md",
  "kb/13_evidence/reports/SIDECAR_AUDIT_REPORT.md",
  "kb/13_evidence/manual_notes/README.md",
  "kb/13_evidence/manual_notes/user_manual_note_template.md",
  "kb/13_evidence/manual_notes/user_manual_note_example_stub.md",
  "kb/13_evidence/manual_quotes/README.md",
  "kb/13_evidence/manual_quotes/user_manual_quote_template.md",
  "kb/13_evidence/manual_quotes/user_manual_quote_example_stub.md",
  "kb/13_evidence/promotion_requests/promotion_request_template.md",
  "kb/13_evidence/promotion_requests/example_promotion_request_stub.md",
  "kb/13_evidence/reviews/promotion_review_template.md",
  "kb/13_evidence/reviews/example_promotion_review_stub.md",
  "kb/13_evidence/reports/CLAIM_PROMOTION_AUDIT.md",
  "kb/13_evidence/reports/UNSUPPORTED_CLAIMS_INDEX.md",
  "kb/13_evidence/reports/VERIFIED_CLAIMS_INDEX.md",
  "kb/13_evidence/reports/MANUAL_NOTE_INTAKE_REPORT.md",
  "kb/13_evidence/reports/MANUAL_QUOTE_AUDIT_REPORT.md",
  "kb/13_evidence/schemas/legal_sidecar.schema.json",
  "kb/13_evidence/schemas/user_manual_note.schema.json",
  "kb/13_evidence/schemas/user_manual_quote.schema.json",
  "kb/13_evidence/schemas/open_source_reference.schema.json",
  "kb/13_evidence/schemas/official_metadata_reference.schema.json",
  "kb/13_evidence/schemas/evidence_ref.schema.json",
  "kb/13_evidence/schemas/claim_promotion_request.schema.json",
  "kb/13_evidence/schemas/claim_promotion_review.schema.json",
  "kb/13_evidence/schemas/evidence_gap.schema.json",
  "kb/13_evidence/schemas/evidence_intake_batch.schema.json",
  "kb/13_evidence/schemas/evidence_audit_report.schema.json",
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
  ["kb/08_workflows/prompts", "PromptTemplate"],
  ["kb/09_project_overlays/overlays", "ProjectOverlay"],
  ["kb/09_project_overlays/playtest_logs", "PlaytestLog"],
  ["kb/13_evidence/sidecars", "LegalSidecar"],
  ["kb/13_evidence/manual_notes", "UserManualNote"],
  ["kb/13_evidence/manual_quotes", "UserManualQuote"],
  ["kb/13_evidence/open_sources", "OpenSourceReference"],
  ["kb/13_evidence/evidence_refs", "EvidenceRef"],
  ["kb/13_evidence/evidence_gaps", "EvidenceGap"],
  ["kb/13_evidence/batches", "EvidenceIntakeBatch"],
  ["kb/13_evidence/promotion_requests", "ClaimPromotionRequest"],
  ["kb/13_evidence/reviews", "ClaimPromotionReview"],
  ["kb/13_evidence/reports", "EvidenceAuditReport"]
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
  "project_overlay_id",
  "playtest_log_id",
  "claim_id",
  "sidecar_id",
  "note_id",
  "manual_note_id",
  "quote_id",
  "manual_quote_id",
  "open_source_reference_id",
  "official_metadata_reference_id",
  "evidence_ref_id",
  "claim_promotion_request_id",
  "claim_promotion_review_id",
  "evidence_gap_id",
  "evidence_intake_batch_id",
  "evidence_audit_report_id",
  "work_id",
  "edge_id"
];

const issues = [];
const acceptedExceptions = [];
const ids = new Map();

const ROOT_REPORT_FILES = [
  "GITHUB_TRUTH_SYNC_REPORT.md",
  "KB_ACCEPTANCE_REVIEW.md",
  "UPDATED_KB_ACCEPTANCE_REVIEW.md",
  "DIRECTION_DRIFT_AUDIT.md",
  "GAP_BACKLOG.md",
  "KB_PROJECT_STATE.md",
  "TODO.md",
  "NEXT_DEVELOPMENT_PLAN.md",
  "UPDATED_VALIDATION_REPORT.md",
  "UPDATED_SOURCE_GOVERNANCE_AUDIT.md",
  "EVIDENCE_PHASE_1_RELEASE_REPORT.md",
  "EVIDENCE_PHASE_1_AUDIT.md",
  "EVIDENCE_PHASE_2_ROADMAP.md"
];

const GENERATED_REPORT_SCAN_EXCLUSIONS = new Set([
  "VALIDATION_REPORT.md",
  "MIGRATION_EXCEPTIONS_REPORT.md"
]);

const DIRECTION_DRIFT_TERMS = [
  "bookos",
  "automated book notes library",
  "reading sessions",
  "reading session",
  "reading progress",
  "personal book library crud",
  "personal book library",
  "user authentication",
  "user auth",
  "forum crud",
  "vue/spring/mysql",
  "vue / spring / mysql",
  "full-stack web app",
  "full stack web app",
  "full-stack app",
  "full stack app"
];

const ACTIVE_INSTRUCTION_TERMS = [
  "build",
  "implement",
  "create",
  "add",
  "develop",
  "scaffold",
  "make",
  "support",
  "use",
  "建立",
  "构建",
  "开发",
  "实现",
  "新增",
  "搭建"
];

const NEGATION_OR_DEPRECATION_TERMS = [
  "do not",
  "don't",
  "must not",
  "never",
  "not ",
  "not:",
  "is not",
  "out of scope",
  "deprecated",
  "not active",
  "do_not_touch",
  "ignore",
  "forbidden",
  "禁止",
  "不要",
  "不是",
  "不得",
  "非活动",
  "已废弃"
];

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

function readTextIfExists(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
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

function yamlLikeFields(text) {
  const lines = [];
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    if (/^[A-Za-z0-9_]+:\s*/.test(line)) lines.push(line);
  }
  return lines.join("\n");
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
    if (source.allowed_for_ai_processing === true && !(source.legal_sidecar_ids ?? []).length) {
      add("P0", "source_ai_processing_without_sidecar", path.join(kbRoot, "01_sources", "sources.json"), `Source ${id} allows AI processing without linked legal_sidecar_ids.`);
    }
    if (source.risk_level === "high" && (source.allowed_operations ?? []).includes("process_full_text") && !(source.legal_sidecar_ids ?? []).length) {
      add("P0", "high_risk_process_full_text_without_explicit_sidecar_approval", path.join(kbRoot, "01_sources", "sources.json"), `High-risk source ${id} allows process_full_text without linked sidecar.`);
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
    const isEvidenceDir = relativeDir.replace(/\\/g, "/").startsWith("kb/13_evidence/");
    for (const filePath of walk(dir).filter((file) => [".md", ".yaml", ".yml"].includes(path.extname(file).toLowerCase()))) {
      if (path.basename(filePath).toLowerCase() === "readme.md") {
        if (isEvidenceDir) continue;
        accept("placeholder_readme_in_entity_folder", filePath, "README placeholder is ignored as a KB entity.");
        continue;
      }
      const lowerName = path.basename(filePath).toLowerCase();
      if (isEvidenceDir && (lowerName.includes("template") || lowerName.includes("example") || lowerName.includes("guide") || lowerName.includes("index") || lowerName.includes("backlog") || lowerName.includes("sidecar_audit_report") || lowerName.includes("manual_note_intake_report") || lowerName.includes("manual_quote_audit_report") || lowerName.includes("claim_promotion_audit") || lowerName.includes("game_feel_evidence_pilot") || lowerName.includes("game_feel_evidence_gap_report") || lowerName.includes("game_feel_entity_audit") || lowerName.includes("meaningful_decisions_evidence_pilot") || lowerName.includes("rules_mechanics_evidence_gap_report") || lowerName.includes("meaningful_decisions_entity_audit") || lowerName.includes("systems_economy_playtest_evidence_pilot") || lowerName.includes("project_overlay_evidence_gap_report") || lowerName.includes("playtest_log_evidence_gap_report") || lowerName.includes("systems_economy_entity_audit") || lowerName.includes("evidence_navigation_report") || lowerName.includes("evidence_search_export_report") || lowerName.includes("evidence_portal_audit"))) {
        continue;
      }
      const text = fs.readFileSync(filePath, "utf8");
      const fm = path.extname(filePath).toLowerCase() === ".md" ? frontmatter(text) : yamlLikeFields(text);
      if (!fm) {
        add("P0", "missing_frontmatter", filePath, "Entity file is missing YAML frontmatter or YAML fields.");
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
    if ((claim.status === "verified") !== (claim.confidence === "verified")) {
      add("P0", "claim_status_confidence_conflict", path.join(kbRoot, "05_cards", "claim_graph.json"), `Claim ${id} status/confidence conflict; verified claims must use both status and confidence verified.`);
    }
    if (claim.confidence === "verified" && !(claim.evidence_refs ?? []).length) {
      add("P0", "verified_claim_without_evidence", path.join(kbRoot, "05_cards", "claim_graph.json"), `Claim ${id} is verified without evidence.`);
    }
  }
}

function entityById(core) {
  const byId = new Map();
  for (const entity of core.allEntities.entities ?? []) {
    if (entity.id) byId.set(entity.id, entity);
  }
  for (const claim of core.claimGraph.claims ?? []) {
    const id = claim.claim_id || claim.id;
    if (id && !byId.has(id)) byId.set(id, { ...claim, id, entity_type: "Claim" });
  }
  for (const source of core.sources.source_documents ?? []) {
    const id = source.source_document_id || source.id;
    if (id && !byId.has(id)) byId.set(id, { ...source, id, entity_type: "SourceDocument", raw: source });
  }
  for (const work of core.works.works ?? []) {
    const id = work.work_id || work.id;
    if (id && !byId.has(id)) byId.set(id, { ...work, id, entity_type: "GameDesignWork", raw: work });
  }
  return byId;
}

function isVerifiedRecord(record) {
  return record && (record.status === "verified" || record.confidence === "verified");
}

function statusValue(record) {
  return String(record?.raw?.approval_status || record?.approval_status || record?.status || "").toLowerCase();
}

function isPendingSidecar(record) {
  return ["pending", "pending_review", "waiting_for_review", "rejected", "blocked", "expired"].includes(statusValue(record));
}

function isApprovedEvidenceStatus(record) {
  return ["approved", "accepted", "validated", "verified", "usable_for_verified", "legal_access_confirmed", "approved_metadata_only", "approved_user_notes_only", "approved_full_processing"].includes(statusValue(record));
}

function arrayValue(record, key) {
  const raw = record?.raw || record || {};
  const value = raw[key];
  if (value === undefined || value === null || value === "") return [];
  return Array.isArray(value) ? value : [value];
}

function isWithinEvidenceScope(raw) {
  return raw.within_evidence_scope === true ||
    raw.within_evidence_scope === "true" ||
    ACCEPTED_EVIDENCE_SCOPE_ALIGNMENT.has(String(raw.evidence_scope_alignment || ""));
}

function treatsLocalObservationAsUniversal(raw) {
  return raw.treat_as_universal_doctrine === true ||
    raw.treats_observation_as_universal_doctrine === true ||
    raw.universal_doctrine === true ||
    String(raw.observation_scope || "").toLowerCase() === "universal" ||
    String(raw.generalization_scope || "").toLowerCase() === "universal";
}

function scopeValue(raw) {
  return String(raw.entity_scope || raw.claim_scope || raw.evidence_scope || raw.observation_scope || "").toLowerCase();
}

function isProjectScope(raw) {
  return ["project_overlay", "project_specific", "local_project"].includes(scopeValue(raw));
}

function isPlaytestScope(raw) {
  return ["playtest_log", "playtest_specific", "local_playtest"].includes(scopeValue(raw));
}

function hasOwn(raw, key) {
  return Object.prototype.hasOwnProperty.call(raw || {}, key);
}

function hasPlaytestEvidenceSeparation(raw) {
  return ["observed_facts", "participant_quotes", "tester_interpretations", "design_hypotheses", "design_decisions", "next_actions"].every((field) => hasOwn(raw, field));
}

function isSampleRecord(entity) {
  const raw = entity?.raw || {};
  return String(entity?.id || "").includes("sample") || arrayValue({ raw }, "tags").includes("sample");
}

function validatesAsLegalEvidenceBasis(record) {
  return Boolean(record) && LEGAL_EVIDENCE_SOURCE_BASIS.has(record.source_basis) && record.confidence !== "ai_hypothesis";
}

function validateEvidence(core) {
  const byId = entityById(core);
  const evidenceRefs = (core.allEntities.entities ?? []).filter((entity) => entity.entity_type === "EvidenceRef");
  const legalSidecars = (core.allEntities.entities ?? []).filter((entity) => entity.entity_type === "LegalSidecar");

  for (const evidence of evidenceRefs) {
    const raw = evidence.raw || evidence;
    const id = evidence.evidence_ref_id || raw.evidence_ref_id || evidence.id;
    for (const field of ["evidence_ref_id", "evidence_type", "source_basis", "confidence", "evidence_scope"]) {
      const value = field in evidence ? evidence[field] : raw[field];
      if (value === undefined || value === null || value === "") {
        add("P0", "evidence_ref_missing_required_field", path.join(kbRoot, "13_evidence"), `EvidenceRef ${id || "unknown"} is missing ${field}.`);
      }
    }
    if (evidence.source_basis && !SOURCE_BASIS.has(evidence.source_basis)) {
      add("P0", "invalid_source_basis", path.join(kbRoot, "13_evidence"), `EvidenceRef ${id} has invalid source_basis ${evidence.source_basis}.`);
    }
    if (evidence.confidence && !CONFIDENCE.has(evidence.confidence)) {
      add("P0", "invalid_confidence", path.join(kbRoot, "13_evidence"), `EvidenceRef ${id} has invalid confidence ${evidence.confidence}.`);
    }
    if (INSUFFICIENT_VERIFIED_EVIDENCE_BASIS.has(evidence.source_basis) && isApprovedEvidenceStatus(evidence)) {
      add("P0", "approved_evidence_ref_without_legal_basis", path.join(kbRoot, "13_evidence"), `EvidenceRef ${id} cannot be approved with source_basis ${evidence.source_basis}.`);
    }

    const referencedIds = [
      ...arrayValue(evidence, "supports_entity_ids"),
      ...arrayValue(evidence, "supports_claim_ids"),
      ...arrayValue(evidence, "source_document_id"),
      ...arrayValue(evidence, "work_id"),
      ...arrayValue(evidence, "sidecar_id"),
      ...arrayValue(evidence, "manual_note_id"),
      ...arrayValue(evidence, "manual_quote_id"),
      ...arrayValue(evidence, "open_source_reference_id"),
      ...arrayValue(evidence, "official_metadata_reference_id")
    ].filter(Boolean);
    for (const targetId of referencedIds) {
      if (!byId.has(String(targetId))) {
        add("P0", "evidence_ref_broken_reference", path.join(kbRoot, "13_evidence"), `EvidenceRef ${id} points to missing entity ${targetId}.`);
      }
    }

    const sidecarId = raw.sidecar_id;
    const sidecar = sidecarId ? byId.get(String(sidecarId)) : null;
    const manualQuote = raw.manual_quote_id ? byId.get(String(raw.manual_quote_id)) : null;
    const manualQuoteSidecar = manualQuote?.raw?.sidecar_id ? byId.get(String(manualQuote.raw.sidecar_id)) : null;
    for (const claimId of arrayValue(evidence, "supports_claim_ids")) {
      const claim = byId.get(String(claimId));
      if (isVerifiedRecord(claim)) {
        if (!LEGAL_EVIDENCE_SOURCE_BASIS.has(evidence.source_basis) || evidence.confidence === "ai_hypothesis") {
          add("P0", "insufficient_evidence_supports_verified_claim", path.join(kbRoot, "13_evidence"), `EvidenceRef ${id} cannot support verified claim ${claimId}.`);
        }
        if (sidecar && isPendingSidecar(sidecar)) {
          add("P0", "pending_sidecar_supports_verified_claim", path.join(kbRoot, "13_evidence"), `EvidenceRef ${id} uses pending/rejected sidecar ${sidecarId} for verified claim ${claimId}.`);
        }
        if (manualQuote && manualQuoteSidecar && isPendingSidecar(manualQuoteSidecar)) {
          add("P0", "pending_quote_sidecar_supports_verified_claim", path.join(kbRoot, "13_evidence"), `EvidenceRef ${id} uses manual quote ${manualQuote.id} with pending sidecar for verified claim ${claimId}.`);
        }
      }
    }

    const sourceDocId = raw.source_document_id;
    const sourceDoc = sourceDocId ? byId.get(String(sourceDocId)) : null;
    const sourceRaw = sourceDoc?.raw || sourceDoc || {};
    if (sourceRaw.risk_level === "high" && isApprovedEvidenceStatus(evidence) && !(evidence.source_basis === "user_legal_file" && sidecar && !isPendingSidecar(sidecar))) {
      add("P0", "high_risk_source_used_beyond_allowed_operations", path.join(kbRoot, "13_evidence"), `EvidenceRef ${id} tries to approve high-risk source ${sourceDocId} without approved legal sidecar.`);
    }
  }

  for (const request of (core.allEntities.entities ?? []).filter((entity) => entity.entity_type === "ClaimPromotionRequest")) {
    const raw = request.raw || request;
    const requestId = request.claim_promotion_request_id || raw.claim_promotion_request_id || request.id;
    const targetClaimIds = arrayValue(request, "target_claim_ids");
    const evidenceRefIds = arrayValue(request, "evidence_ref_ids");
    const proposedConfidence = String(raw.proposed_confidence || request.proposed_confidence || "");
    if (!targetClaimIds.length) {
      add("P0", "promotion_request_missing_target_claim", path.join(kbRoot, "13_evidence", "promotion_requests"), `ClaimPromotionRequest ${requestId} must target at least one claim.`);
    }
    if (!evidenceRefIds.length) {
      add("P0", "promotion_request_missing_evidence_ref", path.join(kbRoot, "13_evidence", "promotion_requests"), `ClaimPromotionRequest ${requestId} must include at least one evidence_ref_id.`);
    }
    if (!raw.reviewer && !request.reviewer) {
      add("P0", "promotion_request_missing_reviewer", path.join(kbRoot, "13_evidence", "promotion_requests"), `ClaimPromotionRequest ${requestId} lacks reviewer.`);
    }
    if (!raw.rationale && !raw.promotion_rationale && !request.rationale) {
      add("P0", "promotion_request_missing_rationale", path.join(kbRoot, "13_evidence", "promotion_requests"), `ClaimPromotionRequest ${requestId} lacks rationale.`);
    }
    if (!CLAIM_PROMOTION_LEVELS.has(proposedConfidence)) {
      add("P0", "invalid_promotion_target_confidence", path.join(kbRoot, "13_evidence", "promotion_requests"), `ClaimPromotionRequest ${requestId} has invalid proposed_confidence ${proposedConfidence || "missing"}.`);
    }
    for (const claimId of targetClaimIds) {
      const claim = byId.get(String(claimId));
      if (!claim || claim.entity_type !== "Claim") {
        add("P0", "promotion_request_references_missing_claim", path.join(kbRoot, "13_evidence", "promotion_requests"), `ClaimPromotionRequest ${requestId} references missing claim ${claimId}.`);
      }
    }
    for (const evidenceId of evidenceRefIds) {
      const evidence = byId.get(String(evidenceId));
      if (!evidence || evidence.entity_type !== "EvidenceRef") {
        add("P0", "promotion_request_references_missing_evidence_ref", path.join(kbRoot, "13_evidence", "promotion_requests"), `ClaimPromotionRequest ${requestId} references missing EvidenceRef ${evidenceId}.`);
        continue;
      }
      if (STRONG_PROMOTION_TARGETS.has(proposedConfidence) && (!validatesAsLegalEvidenceBasis(evidence) || INSUFFICIENT_VERIFIED_EVIDENCE_BASIS.has(evidence.source_basis))) {
        add("P0", "promotion_request_insufficient_evidence_basis", path.join(kbRoot, "13_evidence", "promotion_requests"), `ClaimPromotionRequest ${requestId} cannot promote to ${proposedConfidence} using EvidenceRef ${evidenceId} with source_basis ${evidence.source_basis}.`);
      }
    }
    if (STRONG_PROMOTION_TARGETS.has(proposedConfidence) && !isWithinEvidenceScope(raw)) {
      add("P0", "promotion_request_beyond_evidence_scope", path.join(kbRoot, "13_evidence", "promotion_requests"), `ClaimPromotionRequest ${requestId} tries to promote beyond explicit evidence scope.`);
    }
  }

  for (const review of (core.allEntities.entities ?? []).filter((entity) => entity.entity_type === "ClaimPromotionReview")) {
    const raw = review.raw || review;
    const reviewId = review.claim_promotion_review_id || raw.claim_promotion_review_id || review.id;
    const requestId = raw.request_id || raw.claim_promotion_request_id || review.request_id;
    const request = requestId ? byId.get(String(requestId)) : null;
    if (!request || request.entity_type !== "ClaimPromotionRequest") {
      add("P0", "promotion_review_references_missing_request", path.join(kbRoot, "13_evidence", "reviews"), `ClaimPromotionReview ${reviewId} references missing request ${requestId || "missing"}.`);
    }
    if (!raw.reviewer && !review.reviewer) {
      add("P0", "promotion_review_missing_reviewer", path.join(kbRoot, "13_evidence", "reviews"), `ClaimPromotionReview ${reviewId} lacks reviewer.`);
    }
    if (!raw.decision_rationale && !raw.rationale && !review.decision_rationale) {
      add("P0", "promotion_review_missing_rationale", path.join(kbRoot, "13_evidence", "reviews"), `ClaimPromotionReview ${reviewId} lacks decision_rationale.`);
    }
    const decision = String(raw.decision || review.decision || "");
    if (!CLAIM_PROMOTION_REVIEW_DECISIONS.has(decision)) {
      add("P0", "invalid_promotion_review_decision", path.join(kbRoot, "13_evidence", "reviews"), `ClaimPromotionReview ${reviewId} has invalid decision ${decision || "missing"}.`);
    }
    const approvedConfidence = String(raw.approved_confidence || "");
    if (approvedConfidence && !CLAIM_PROMOTION_LEVELS.has(approvedConfidence)) {
      add("P0", "invalid_promotion_review_confidence", path.join(kbRoot, "13_evidence", "reviews"), `ClaimPromotionReview ${reviewId} has invalid approved_confidence ${approvedConfidence}.`);
    }
    if (request && approvedConfidence && CLAIM_PROMOTION_LEVEL_RANK[approvedConfidence] > CLAIM_PROMOTION_LEVEL_RANK[String(request.raw?.proposed_confidence || request.proposed_confidence || "unsupported_draft")]) {
      add("P0", "promotion_review_exceeds_requested_scope", path.join(kbRoot, "13_evidence", "reviews"), `ClaimPromotionReview ${reviewId} approves beyond request scope.`);
    }
  }

  for (const quote of (core.allEntities.entities ?? []).filter((entity) => entity.entity_type === "UserManualQuote")) {
    const raw = quote.raw || quote;
    if (quote.source_basis !== "user_manual_quote") {
      add("P0", "manual_quote_invalid_source_basis", path.join(kbRoot, "13_evidence", "manual_quotes"), `UserManualQuote ${quote.id} must use source_basis user_manual_quote.`);
    }
    if (!USER_MANUAL_QUOTE_STATUS.has(raw.status || quote.status)) {
      add("P0", "manual_quote_invalid_status", path.join(kbRoot, "13_evidence", "manual_quotes"), `UserManualQuote ${quote.id} has invalid status ${raw.status || quote.status}.`);
    }
    if (raw.user_provided !== true && raw.user_confirms_quote_supplied !== true) {
      add("P0", "manual_quote_not_explicitly_user_provided", path.join(kbRoot, "13_evidence", "manual_quotes"), `UserManualQuote ${quote.id} is not explicitly user-provided.`);
    }
    if (!raw.quote_id && !raw.manual_quote_id) {
      add("P0", "manual_quote_missing_quote_id", path.join(kbRoot, "13_evidence", "manual_quotes"), `UserManualQuote ${quote.id} is missing quote_id.`);
    }
    if (!raw.work_id || !byId.has(String(raw.work_id))) {
      add("P0", "manual_quote_references_missing_work", path.join(kbRoot, "13_evidence", "manual_quotes"), `UserManualQuote ${quote.id} references nonexistent work_id ${raw.work_id || "missing"}.`);
    }
    if (!raw.source_document_id || !byId.has(String(raw.source_document_id))) {
      add("P0", "manual_quote_references_missing_source", path.join(kbRoot, "13_evidence", "manual_quotes"), `UserManualQuote ${quote.id} references nonexistent source_document_id ${raw.source_document_id || "missing"}.`);
    }
    if (!raw.quote_length_words && raw.quote_length_words !== 0) {
      add("P0", "manual_quote_missing_quote_length", path.join(kbRoot, "13_evidence", "manual_quotes"), `UserManualQuote ${quote.id} is missing quote_length_words.`);
    }
    const quoteLength = Number(raw.quote_length_words || 0);
    if (quoteLength > MANUAL_QUOTE_MAX_WORDS) {
      add("P0", "manual_quote_too_long", path.join(kbRoot, "13_evidence", "manual_quotes"), `UserManualQuote ${quote.id} has ${quoteLength} words; max is ${MANUAL_QUOTE_MAX_WORDS}.`);
    } else if (quoteLength > MANUAL_QUOTE_WARN_WORDS) {
      add("warning", "manual_quote_near_length_limit", path.join(kbRoot, "13_evidence", "manual_quotes"), `UserManualQuote ${quote.id} has ${quoteLength} words; review before use.`);
    }
    if (raw.automated_extraction === true || raw.generated_from_source_body === true || ["auto", "automated_extraction", "source_body_extraction"].includes(String(raw.extraction_method || "").toLowerCase())) {
      add("P0", "manual_quote_automated_extraction", path.join(kbRoot, "13_evidence", "manual_quotes"), `UserManualQuote ${quote.id} must never be derived from automated extraction.`);
    }
    const sourceDoc = raw.source_document_id ? byId.get(String(raw.source_document_id)) : null;
    const sidecar = raw.sidecar_id ? byId.get(String(raw.sidecar_id)) : null;
    if (sourceDoc?.raw?.risk_level === "high" && ["strong", "verified"].includes(quote.confidence) && (!sidecar || isPendingSidecar(sidecar))) {
      add("P0", "high_risk_quote_requires_sidecar_review", path.join(kbRoot, "13_evidence", "manual_quotes"), `UserManualQuote ${quote.id} from high-risk source requires sidecar review before strong or verified use.`);
    }
  }

  for (const note of (core.allEntities.entities ?? []).filter((entity) => entity.entity_type === "UserManualNote")) {
    const raw = note.raw || note;
    if (note.source_basis !== "user_manual_note") {
      add("P0", "manual_note_invalid_source_basis", path.join(kbRoot, "13_evidence", "manual_notes"), `UserManualNote ${note.id} must use source_basis user_manual_note.`);
    }
    if (note.confidence !== "user_interpretation") {
      add("P0", "manual_note_not_marked_user_interpretation", path.join(kbRoot, "13_evidence", "manual_notes"), `UserManualNote ${note.id} must use confidence user_interpretation.`);
    }
    if (!USER_MANUAL_NOTE_TYPES.has(raw.note_type)) {
      add("P0", "manual_note_invalid_note_type", path.join(kbRoot, "13_evidence", "manual_notes"), `UserManualNote ${note.id} has invalid note_type ${raw.note_type || "missing"}.`);
    }
    if (!USER_MANUAL_NOTE_STATUS.has(raw.status || note.status)) {
      add("P0", "manual_note_invalid_status", path.join(kbRoot, "13_evidence", "manual_notes"), `UserManualNote ${note.id} has invalid status ${raw.status || note.status}.`);
    }
    if (!raw.note_id && !raw.manual_note_id) {
      add("P0", "manual_note_missing_note_id", path.join(kbRoot, "13_evidence", "manual_notes"), `UserManualNote ${note.id} is missing note_id.`);
    }
    if (!raw.work_id || !byId.has(String(raw.work_id))) {
      add("P0", "manual_note_references_missing_work", path.join(kbRoot, "13_evidence", "manual_notes"), `UserManualNote ${note.id} references nonexistent work_id ${raw.work_id || "missing"}.`);
    }
    if (raw.source_document_id && !byId.has(String(raw.source_document_id))) {
      add("P0", "manual_note_references_missing_source", path.join(kbRoot, "13_evidence", "manual_notes"), `UserManualNote ${note.id} references nonexistent source_document_id ${raw.source_document_id}.`);
    }
  }

  for (const sidecar of legalSidecars) {
    const raw = sidecar.raw || sidecar;
    const required = [
      "sidecar_id",
      "source_document_id",
      "work_id",
      "user_confirms_legal_access",
      "access_basis",
      "allowed_for_ai_processing",
      "allowed_operations",
      "prohibited_operations",
      "high_risk_marker_review",
      "private_or_public",
      "citation_preference",
      "user_supplied_notes_path",
      "user_supplied_quotes_path",
      "reviewer",
      "approval_status",
      "review_date",
      "expiration_date",
      "notes"
    ];
    for (const field of required) {
      if (!(field in raw) || raw[field] === undefined || raw[field] === null) {
        add("P0", "sidecar_missing_required_field", path.join(kbRoot, "13_evidence", "sidecars"), `LegalSidecar ${sidecar.id} is missing ${field}.`);
      }
    }
    if (!LEGAL_SIDECAR_ACCESS_BASIS.has(raw.access_basis)) {
      add("P0", "invalid_sidecar_access_basis", path.join(kbRoot, "13_evidence", "sidecars"), `LegalSidecar ${sidecar.id} has invalid access_basis ${raw.access_basis}.`);
    }
    if (!LEGAL_SIDECAR_APPROVAL_STATUS.has(raw.approval_status)) {
      add("P0", "invalid_sidecar_approval_status", path.join(kbRoot, "13_evidence", "sidecars"), `LegalSidecar ${sidecar.id} has invalid or missing approval_status ${raw.approval_status}.`);
    }
    const sourceDoc = raw.source_document_id ? byId.get(String(raw.source_document_id)) : null;
    const work = raw.work_id ? byId.get(String(raw.work_id)) : null;
    if (!sourceDoc) add("P0", "sidecar_references_missing_source", path.join(kbRoot, "13_evidence", "sidecars"), `LegalSidecar ${sidecar.id} references nonexistent source_document_id ${raw.source_document_id}.`);
    if (!work) add("P0", "sidecar_references_missing_work", path.join(kbRoot, "13_evidence", "sidecars"), `LegalSidecar ${sidecar.id} references nonexistent work_id ${raw.work_id}.`);
    const sourceRaw = sourceDoc?.raw || sourceDoc || {};
    if (raw.approval_status === "approved_full_processing" && (!raw.reviewer || !raw.review_date)) {
      add("P0", "sidecar_defaults_to_full_processing", path.join(kbRoot, "13_evidence", "sidecars"), `LegalSidecar ${sidecar.id} uses approved_full_processing without explicit reviewer and review_date.`);
    }
    if (sourceRaw.risk_level === "high" && raw.approval_status === "approved_full_processing" && !raw.reviewer) {
      add("P0", "high_risk_full_processing_without_reviewer", path.join(kbRoot, "13_evidence", "sidecars"), `LegalSidecar ${sidecar.id} claims full processing for high-risk source without reviewer.`);
    }
    if (sourceRaw.risk_level === "high" && arrayValue(sidecar, "allowed_operations").includes("process_full_text") && raw.approval_status !== "approved_full_processing") {
      add("P0", "high_risk_process_full_text_without_explicit_sidecar_approval", path.join(kbRoot, "13_evidence", "sidecars"), `LegalSidecar ${sidecar.id} allows process_full_text for high-risk source without approved_full_processing.`);
    }
  }

  for (const source of core.sources.source_documents ?? []) {
    const sourceId = source.source_document_id || source.id;
    const sidecarIds = source.legal_sidecar_ids ?? [];
    for (const sidecarId of sidecarIds) {
      const sidecar = byId.get(String(sidecarId));
      if (!sidecar || sidecar.entity_type !== "LegalSidecar") {
        add("P0", "source_references_missing_sidecar", path.join(kbRoot, "01_sources", "sources.json"), `Source ${sourceId} references missing LegalSidecar ${sidecarId}.`);
      }
    }
    if (source.risk_level === "high" && (source.allowed_operations ?? []).includes("process_full_text")) {
      const hasApprovedFullProcessing = sidecarIds
        .map((sidecarId) => byId.get(String(sidecarId)))
        .some((sidecar) => sidecar?.entity_type === "LegalSidecar" && sidecar.raw?.approval_status === "approved_full_processing" && Boolean(sidecar.raw?.reviewer));
      if (!hasApprovedFullProcessing) {
        add("P0", "high_risk_process_full_text_without_explicit_sidecar_approval", path.join(kbRoot, "01_sources", "sources.json"), `High-risk source ${sourceId} allows process_full_text without approved_full_processing sidecar and reviewer.`);
      }
    }
  }

  for (const overlay of (core.allEntities.entities ?? []).filter((entity) => entity.entity_type === "ProjectOverlay")) {
    const raw = overlay.raw || overlay;
    if (String(raw.entity_scope || "") !== "project_overlay") {
      add("P0", "project_overlay_missing_project_scope", path.join(kbRoot, "09_project_overlays"), `ProjectOverlay ${overlay.id} must declare entity_scope: project_overlay.`);
    }
    if (treatsLocalObservationAsUniversal(raw)) {
      add("P0", "project_overlay_observation_treated_as_universal_doctrine", path.join(kbRoot, "09_project_overlays"), `ProjectOverlay ${overlay.id} treats a project-local observation as universal doctrine.`);
    }
    if (isSampleRecord(overlay) && (overlay.source_basis !== "unsupported_draft" || overlay.confidence !== "unsupported_draft")) {
      add("P0", "sample_project_overlay_not_unsupported_draft", path.join(kbRoot, "09_project_overlays"), `Sample ProjectOverlay ${overlay.id} must remain unsupported_draft.`);
    }
  }

  for (const playtest of (core.allEntities.entities ?? []).filter((entity) => entity.entity_type === "PlaytestLog")) {
    const raw = playtest.raw || playtest;
    if (String(raw.entity_scope || "") !== "playtest_log") {
      add("P0", "playtest_log_missing_playtest_scope", path.join(kbRoot, "09_project_overlays"), `PlaytestLog ${playtest.id} must declare entity_scope: playtest_log.`);
    }
    if (!hasPlaytestEvidenceSeparation(raw)) {
      add("P0", "playtest_log_missing_observation_separation", path.join(kbRoot, "09_project_overlays"), `PlaytestLog ${playtest.id} must distinguish observed_facts, participant_quotes, tester_interpretations, design_hypotheses, design_decisions, and next_actions.`);
    }
    if (treatsLocalObservationAsUniversal(raw)) {
      add("P0", "playtest_observation_treated_as_universal_doctrine", path.join(kbRoot, "09_project_overlays"), `PlaytestLog ${playtest.id} treats a playtest-local observation as universal doctrine.`);
    }
    if (isSampleRecord(playtest) && (playtest.source_basis !== "unsupported_draft" || playtest.confidence !== "unsupported_draft")) {
      add("P0", "sample_playtest_log_not_unsupported_draft", path.join(kbRoot, "09_project_overlays"), `Sample PlaytestLog ${playtest.id} must remain unsupported_draft.`);
    }
  }

  for (const claim of core.claimGraph.claims ?? []) {
    const claimId = claim.claim_id || claim.id || "unknown";
    const relatedIds = [
      ...arrayValue(claim, "related_entities"),
      ...arrayValue(claim, "related_project_overlays"),
      ...arrayValue(claim, "project_overlay_ids"),
      ...arrayValue(claim, "related_playtest_logs"),
      ...arrayValue(claim, "playtest_log_ids")
    ];
    const hasProjectOverlayLink = claim.project_id || claim.project_overlay_id || relatedIds.some((id) => byId.get(String(id))?.entity_type === "ProjectOverlay" || String(id).startsWith("project_overlay_"));
    const hasPlaytestLogLink = claim.playtest_log_id || relatedIds.some((id) => byId.get(String(id))?.entity_type === "PlaytestLog" || String(id).startsWith("playtest_log_"));
    if (hasProjectOverlayLink && claim.entity_scope !== "project_overlay") {
      add("P0", "project_specific_claim_missing_project_overlay_scope", path.join(kbRoot, "05_cards", "claim_graph.json"), `Project-specific claim ${claimId} must declare entity_scope: project_overlay.`);
    }
    if (hasPlaytestLogLink && claim.entity_scope !== "playtest_log") {
      add("P0", "playtest_specific_claim_missing_playtest_log_scope", path.join(kbRoot, "05_cards", "claim_graph.json"), `Playtest-specific claim ${claimId} must declare entity_scope: playtest_log.`);
    }
    if (claim.confidence !== "verified" && claim.status !== "verified") continue;
    const refs = claim.evidence_refs ?? [];
    if (!refs.length) {
      add("P0", "verified_claim_without_evidence", path.join(kbRoot, "05_cards", "claim_graph.json"), `Verified claim ${claimId} has no evidence_refs.`);
      continue;
    }
    for (const refId of refs) {
      const evidence = byId.get(String(refId));
      if (!evidence || evidence.entity_type !== "EvidenceRef") {
        add("P0", "verified_claim_missing_legal_evidence_ref", path.join(kbRoot, "05_cards", "claim_graph.json"), `Verified claim ${claimId} references missing/non-EvidenceRef ${refId}.`);
        continue;
      }
      if (!LEGAL_EVIDENCE_SOURCE_BASIS.has(evidence.source_basis) || evidence.confidence === "ai_hypothesis") {
        add("P0", "metadata_only_supports_verified_claim", path.join(kbRoot, "05_cards", "claim_graph.json"), `Verified claim ${claimId} is supported by insufficient evidence_ref ${refId}.`);
      }
      const evidenceRaw = evidence.raw || evidence;
      if ((isProjectScope(evidenceRaw) || isPlaytestScope(evidenceRaw)) && !isProjectScope(claim) && !isPlaytestScope(claim) && !claim.promotion_review_id && !claim.claim_promotion_review_id) {
        add("P0", "project_evidence_supports_verified_general_claim_without_review", path.join(kbRoot, "05_cards", "claim_graph.json"), `Verified general claim ${claimId} uses project/playtest evidence ${refId} without promotion review and narrowed scope.`);
      }
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

function isSafeDeprecatedRebuildStub(text) {
  const normalized = text.toLowerCase();
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  return (
    lines.length <= 40 &&
    normalized.includes("deprecated instruction stub") &&
    normalized.includes("this file is not active") &&
    normalized.includes("kb_rebuild_instruction.md") &&
    normalized.includes("game design knowledgebase") &&
    normalized.includes("do not build") &&
    normalized.includes("docs/deprecated")
  );
}

function lineLooksLikeActiveDirectionInstruction(line) {
  const normalized = line.toLowerCase();
  if (!DIRECTION_DRIFT_TERMS.some((term) => normalized.includes(term))) return false;
  if (NEGATION_OR_DEPRECATION_TERMS.some((term) => normalized.includes(term))) return false;
  return ACTIVE_INSTRUCTION_TERMS.some((term) => {
    if (/[\u4e00-\u9fff]/.test(term)) return normalized.includes(term);
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`\\b${escaped}\\b`, "i").test(normalized);
  });
}

function validateDirectionDrift() {
  const rebuildPath = path.join(repoRoot, "rebuild_instruction.md");
  const rebuildText = readTextIfExists(rebuildPath);
  const unsafeRootRebuild = Boolean(rebuildText) && !isSafeDeprecatedRebuildStub(rebuildText);

  if (unsafeRootRebuild) {
    add(
      "P0",
      "active_direction_drift_instruction",
      rebuildPath,
      "Root rebuild_instruction.md exists and is not a safe deprecated stub pointing to KB_REBUILD_INSTRUCTION.md."
    );
  }

  for (const entry of fs.readdirSync(repoRoot, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    if (GENERATED_REPORT_SCAN_EXCLUSIONS.has(entry.name)) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (![".md", ".txt"].includes(ext)) continue;
    const filePath = path.join(repoRoot, entry.name);
    if (entry.name === "rebuild_instruction.md" && rebuildText && isSafeDeprecatedRebuildStub(rebuildText)) continue;

    const text = readTextIfExists(filePath);
    const lines = text.split(/\r?\n/);
    for (let index = 0; index < lines.length; index += 1) {
      if (lineLooksLikeActiveDirectionInstruction(lines[index])) {
        add(
          "P0",
          "active_direction_drift_instruction",
          filePath,
          `Line ${index + 1} appears to contain active app/product build instructions: ${lines[index].trim()}`
        );
      }
    }
  }

  if (fs.existsSync(rebuildPath)) {
    for (const relativePath of ROOT_REPORT_FILES) {
      const reportPath = path.join(repoRoot, relativePath);
      const text = readTextIfExists(reportPath);
      if (!text) continue;
      if (/rebuild_instruction\.md[\s\S]{0,120}(absent|missing|does not exist|removed|is absent)/i.test(text)) {
        add(
          "P0",
          "report_file_state_contradiction",
          reportPath,
          "Report claims root rebuild_instruction.md is absent/removed, but the file exists."
        );
      }
    }
  }
}

function extractAcceptedExceptionCount(filePath) {
  const text = readTextIfExists(filePath);
  if (!text) return null;
  const match = text.match(/accepted exceptions:\s*(\d+)/i);
  return match ? Number(match[1]) : null;
}

function validateReportConsistency() {
  const validationMdPath = path.join(repoRoot, "VALIDATION_REPORT.md");
  const migrationMdPath = path.join(repoRoot, "MIGRATION_EXCEPTIONS_REPORT.md");
  const validationJsonPath = path.join(repoRoot, "VALIDATION_REPORT.json");
  const validationMdCount = extractAcceptedExceptionCount(validationMdPath);
  const migrationMdCount = extractAcceptedExceptionCount(migrationMdPath);

  if (validationMdCount !== null && migrationMdCount !== null && validationMdCount !== migrationMdCount) {
    add(
      "P0",
      "report_exception_count_contradiction",
      migrationMdPath,
      `MIGRATION_EXCEPTIONS_REPORT.md says accepted exceptions = ${migrationMdCount}, but VALIDATION_REPORT.md says ${validationMdCount}.`
    );
  }

  if (fs.existsSync(validationJsonPath)) {
    try {
      const json = JSON.parse(fs.readFileSync(validationJsonPath, "utf8"));
      const jsonCount = Array.isArray(json.accepted_exceptions) ? json.accepted_exceptions.length : null;
      if (jsonCount !== null && validationMdCount !== null && jsonCount !== validationMdCount) {
        add(
          "P0",
          "report_exception_count_contradiction",
          validationJsonPath,
          `VALIDATION_REPORT.json has ${jsonCount} accepted exceptions, but VALIDATION_REPORT.md says ${validationMdCount}.`
        );
      }
    } catch (error) {
      add("P0", "invalid_json", validationJsonPath, `Could not parse VALIDATION_REPORT.json: ${error.message}`);
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
    "- evidence_ref required fields",
    "- evidence_ref broken links",
    "- metadata_only cannot support verified claims",
    "- unsupported_draft cannot support verified claims",
    "- pending sidecar cannot support verified claims",
    "- user_manual_quote explicit user-provided flag",
    "- user_manual_quote source_basis and status",
    "- user_manual_quote work/source/length requirements",
    "- user_manual_quote length threshold",
    "- user_manual_quote automated extraction block",
    "- user_manual_note source_basis and user_interpretation confidence",
    "- user_manual_note type/status/work requirements",
    "- high-risk source evidence-operation boundary",
    "- legal sidecar required fields",
    "- legal sidecar source/work references",
    "- sidecar approval status enum",
    "- no sidecar default full processing",
    "- source AI processing requires sidecar",
    "- high-risk process_full_text requires approved sidecar",
    "- claim status/confidence conflict",
    "- promotion request reviewer and rationale",
    "- promotion request evidence references and target claims",
    "- promotion request evidence-scope alignment",
    "- promotion review reviewer and rationale",
    "- promotion review request link and decision enum",
    "- project overlay local observation boundary",
    "- playtest local observation boundary",
    "- legacy high-risk body artifact scan",
    "- unsafe portal data scan",
    "- active root direction-drift instruction scan",
    "- report consistency scan",
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
  fs.writeFileSync(
    jsonReportPath,
    JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        summary: {
          p0_issues: p0Count,
          p1_issues: counts.P1 || 0,
          warnings: counts.warning || 0,
          accepted_exceptions: acceptedExceptions.length,
          result: p0Count === 0 ? "PASS" : "FAIL",
          pass_meaning: passMeaning
        },
        counts,
        issues,
        accepted_exceptions: acceptedExceptions
      },
      null,
      2
    ),
    "utf8"
  );
  console.log(`${p0Count === 0 ? "PASS" : "FAIL"}: ${p0Count} P0 issue(s), ${counts.warning || 0} warning(s).`);
  console.log(`Report: ${reportPath}`);
  process.exitCode = p0Count === 0 ? 0 : 1;
}

validateRequiredFiles();
const core = loadCoreJson();
validateJsonRegistries(core);
validateMarkdownEntities();
validateClaims(core);
validateEvidence(core);
validateRelationships(core);
validateSearchSafety(core);
validateRepoWideHighRiskArtifacts();
validateDirectionDrift();
validateReportConsistency();
writeReports();
