#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
const KB_DIR = path.join(ROOT, "kb");
const IO_DIR = path.join(KB_DIR, "11_import_export");
const SCHEMA_DIR = path.join(IO_DIR, "schemas");
const EXPORT_DIR = path.join(IO_DIR, "export");
const TODAY = new Date().toISOString().slice(0, 10);

const SOURCE_BASIS = [
  "open_fulltext",
  "official_metadata",
  "user_legal_file",
  "user_manual_note",
  "user_manual_quote",
  "derived_from_user_note",
  "derived_from_public_metadata",
  "metadata_only",
  "unsupported_draft"
];

const CONFIDENCE = [
  "verified",
  "strong",
  "medium",
  "weak",
  "unsupported_draft",
  "user_interpretation",
  "ai_hypothesis"
];

const STRONG_SOURCE_BASIS = new Set([
  "open_fulltext",
  "official_metadata",
  "user_legal_file",
  "user_manual_note",
  "user_manual_quote",
  "derived_from_user_note"
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

const SAFE_BODY_SOURCE_BASIS = new Set([
  "open_fulltext",
  "official_metadata",
  "user_legal_file",
  "user_manual_note",
  "user_manual_quote",
  "derived_from_user_note",
  "derived_from_public_metadata",
  "unsupported_draft"
]);

const EVIDENCE_ENTITY_TYPES = new Set([
  "LegalSidecar",
  "UserManualNote",
  "UserManualQuote",
  "OpenSourceReference",
  "OfficialMetadataReference",
  "EvidenceRef",
  "ClaimPromotionRequest",
  "ClaimPromotionReview",
  "EvidenceGap",
  "EvidenceIntakeBatch",
  "EvidenceAuditReport"
]);

const KNOWLEDGE_ENTITY_TYPES = new Set([
  "BookDossier",
  "ChapterNode",
  "ConceptCard",
  "FrameworkCard",
  "QuoteCard",
  "ComparisonCard",
  "ApplicationCard",
  "ChecklistCard",
  "PromptCard",
  "DesignLens",
  "Lesson",
  "Exercise",
  "WorkflowPack",
  "PromptTemplate",
  "ProjectOverlay",
  "PlaytestLog",
  "ForumThreadTemplate",
  "Claim",
  ...EVIDENCE_ENTITY_TYPES
]);

const ENTITY_SCAN_DIRS = [
  { dir: "04_dossiers/draft", defaultType: "BookDossier" },
  { dir: "04_dossiers/verified", defaultType: "BookDossier" },
  { dir: "05_cards/concept_cards", defaultType: "ConceptCard" },
  { dir: "05_cards/framework_cards", defaultType: "FrameworkCard" },
  { dir: "05_cards/quote_cards", defaultType: "QuoteCard" },
  { dir: "05_cards/comparison_cards", defaultType: "ComparisonCard" },
  { dir: "05_cards/application_cards", defaultType: "ApplicationCard" },
  { dir: "05_cards/checklist_cards", defaultType: "ChecklistCard" },
  { dir: "05_cards/prompt_cards", defaultType: "PromptCard" },
  { dir: "05_cards/exercise_cards", defaultType: "Exercise" },
  { dir: "05_cards/anti_pattern_cards", defaultType: "KnowledgeCard" },
  { dir: "05_cards/case_study_cards", defaultType: "KnowledgeCard" },
  { dir: "06_lenses/cards", defaultType: "DesignLens" },
  { dir: "07_lessons/lesson_cards", defaultType: "Lesson" },
  { dir: "08_workflows/packs", defaultType: "WorkflowPack" },
  { dir: "08_workflows/exercises", defaultType: "Exercise" },
  { dir: "08_workflows/prompts", defaultType: "PromptTemplate" },
  { dir: "09_project_overlays/overlays", defaultType: "ProjectOverlay" },
  { dir: "09_project_overlays/playtest_logs", defaultType: "PlaytestLog" },
  { dir: "13_evidence/sidecars", defaultType: "LegalSidecar" },
  { dir: "13_evidence/manual_notes", defaultType: "UserManualNote" },
  { dir: "13_evidence/manual_quotes", defaultType: "UserManualQuote" },
  { dir: "13_evidence/open_sources", defaultType: "OpenSourceReference" },
  { dir: "13_evidence/evidence_refs", defaultType: "EvidenceRef" },
  { dir: "13_evidence/evidence_gaps", defaultType: "EvidenceGap" },
  { dir: "13_evidence/batches", defaultType: "EvidenceIntakeBatch" },
  { dir: "13_evidence/promotion_requests", defaultType: "ClaimPromotionRequest" },
  { dir: "13_evidence/reviews", defaultType: "ClaimPromotionReview" },
  { dir: "13_evidence/reports", defaultType: "EvidenceAuditReport" }
];

const ID_FIELDS = [
  "id",
  "source_document_id",
  "dossier_id",
  "chapter_node_id",
  "card_id",
  "lens_id",
  "lesson_id",
  "exercise_id",
  "workflow_id",
  "prompt_id",
  "project_overlay_id",
  "playtest_log_id",
  "forum_thread_template_id",
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
  "packet_id",
  "evidence_audit_report_id",
  "work_id",
  "domain_id",
  "phase_id",
  "artifact_id"
];

const TYPE_BY_CARD_TYPE = {
  concept_card: "ConceptCard",
  framework_card: "FrameworkCard",
  quote_card: "QuoteCard",
  comparison_card: "ComparisonCard",
  application_card: "ApplicationCard",
  checklist_card: "ChecklistCard",
  prompt_card: "PromptCard",
  exercise_card: "Exercise",
  anti_pattern_card: "KnowledgeCard",
  case_study_card: "KnowledgeCard"
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function readJson(relPath, fallback = null) {
  const filePath = path.join(KB_DIR, relPath);
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(readText(filePath));
}

function writeJson(relPath, value) {
  const filePath = path.join(KB_DIR, relPath);
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2) + "\n", "utf8");
}

function writeText(relPath, value) {
  const filePath = path.join(KB_DIR, relPath);
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, value.trimEnd() + "\n", "utf8");
}

function slug(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "") || "untitled";
}

function unquote(value) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function splitInlineArray(value) {
  const body = value.trim().slice(1, -1).trim();
  if (!body) return [];
  const result = [];
  let current = "";
  let quote = null;
  for (let i = 0; i < body.length; i += 1) {
    const ch = body[i];
    if ((ch === '"' || ch === "'") && body[i - 1] !== "\\") {
      quote = quote === ch ? null : quote || ch;
      current += ch;
      continue;
    }
    if (ch === "," && !quote) {
      result.push(parseScalar(current.trim()));
      current = "";
      continue;
    }
    current += ch;
  }
  if (current.trim()) result.push(parseScalar(current.trim()));
  return result;
}

function parseScalar(raw) {
  const value = raw.trim();
  if (!value) return "";
  if (value === "[]") return [];
  if (value === "{}") return {};
  if (value.startsWith("[") && value.endsWith("]")) return splitInlineArray(value);
  if (value === "null") return null;
  if (value === "true") return true;
  if (value === "false") return false;
  if (/^-?\d+$/.test(value)) return Number(value);
  return unquote(value);
}

function parseFrontmatter(markdown) {
  if (!markdown.startsWith("---")) {
    return { frontmatter: null, body: markdown };
  }
  const end = markdown.indexOf("\n---", 3);
  if (end === -1) {
    return { frontmatter: null, body: markdown };
  }
  const raw = markdown.slice(3, end).trim();
  const body = markdown.slice(end + 4).replace(/^\r?\n/, "");
  const data = {};
  for (const line of raw.split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match) continue;
    data[match[1]] = parseScalar(match[2]);
  }
  return { frontmatter: data, body };
}

function extractSections(body, entity) {
  const safe = canIncludeBodyExcerpt(entity);
  const sections = [];
  const lines = body.split(/\r?\n/);
  let current = null;
  for (const line of lines) {
    const match = line.match(/^(#{1,4})\s+(.+)$/);
    if (match) {
      if (current) sections.push(current);
      current = { heading_level: match[1].length, heading: match[2].trim(), excerpt_safe: "" };
      continue;
    }
    if (current && safe && current.excerpt_safe.length < 600) {
      const cleaned = line.trim();
      if (cleaned) current.excerpt_safe += (current.excerpt_safe ? " " : "") + cleaned;
    }
  }
  if (current) sections.push(current);
  if (!safe) {
    return sections.map((section) => ({ ...section, excerpt_safe: "[suppressed: metadata-only or quarantined source boundary]" }));
  }
  return sections.map((section) => ({
    ...section,
    excerpt_safe: section.excerpt_safe.slice(0, 600)
  }));
}

function canIncludeBodyExcerpt(entity) {
  if (!SAFE_BODY_SOURCE_BASIS.has(entity.source_basis)) return false;
  if (entity.source_basis === "metadata_only") return false;
  const text = JSON.stringify(entity.raw || {}).toLowerCase();
  if (text.includes("metadata_only_quarantined")) return false;
  if (text.includes("high_risk_source")) return false;
  return true;
}

function firstNonEmpty(...values) {
  for (const value of values) {
    if (Array.isArray(value)) {
      if (value.length) return value;
      continue;
    }
    if (value !== undefined && value !== null && value !== "") return value;
  }
  return undefined;
}

function asArray(value) {
  if (value === undefined || value === null || value === "") return [];
  return Array.isArray(value) ? value : [value];
}

function cleanArray(value) {
  return [...new Set(asArray(value).filter((item) => item !== undefined && item !== null && String(item).trim() !== "").map((item) => String(item).trim()))];
}

function hasWorkLinkException(entity) {
  return (
    entity.raw?.work_link_status === "not_applicable" &&
    cleanArray(entity.raw.related_works).length === 0 &&
    Boolean(entity.raw?.evidence_gap || entity.raw?.evidence_gap_reason)
  );
}

function inferMarkdownEntityType(frontmatter, defaultType) {
  if (frontmatter.entity_type) return frontmatter.entity_type;
  if (frontmatter.card_type && TYPE_BY_CARD_TYPE[frontmatter.card_type]) return TYPE_BY_CARD_TYPE[frontmatter.card_type];
  if (frontmatter.lens_id) return "DesignLens";
  if (frontmatter.lesson_id) return "Lesson";
  if (frontmatter.exercise_id) return "Exercise";
  if (frontmatter.workflow_id) return "WorkflowPack";
  if (frontmatter.prompt_id) return "PromptTemplate";
  if (frontmatter.dossier_id) return "BookDossier";
  return defaultType || "KnowledgeEntity";
}

function getEntityId(raw) {
  for (const field of ID_FIELDS) {
    if (raw[field]) return String(raw[field]);
  }
  return null;
}

function normalizeEntity(raw, options = {}) {
  const id = getEntityId(raw) || options.fallbackId;
  const entityType = options.entityType || raw.entity_type || "KnowledgeEntity";
  const domains = cleanArray(firstNonEmpty(raw.domains, raw.domain ? [raw.domain] : [], raw.main_domain ? [raw.main_domain, ...(raw.secondary_domains || [])] : []));
  const phaseGroups = cleanArray(raw.phase_groups);
  const evidenceRefs = cleanArray(firstNonEmpty(raw.evidence_refs, raw.evidence_ids, []));
  const relatedEntities = cleanArray([
    ...asArray(raw.related_entities),
    ...asArray(raw.related_works),
    ...asArray(raw.related_dossiers),
    ...asArray(raw.related_concepts),
    ...asArray(raw.related_cards),
    ...asArray(raw.related_lenses),
    ...asArray(raw.related_lessons),
    ...asArray(raw.related_claims),
    ...asArray(raw.prerequisite_lessons),
    ...asArray(raw.next_lessons),
    ...asArray(raw.AI_prompt_templates),
    ...asArray(raw.exercise_ids),
    ...asArray(raw.source_documents),
    ...asArray(raw.source_ids),
    ...asArray(raw.supports_entity_ids),
    ...asArray(raw.supports_claim_ids),
    ...asArray(raw.source_document_id),
    ...asArray(raw.work_id),
    ...asArray(raw.sidecar_id),
    ...asArray(raw.note_id),
    ...asArray(raw.manual_note_id),
    ...asArray(raw.quote_id),
    ...asArray(raw.manual_quote_id),
    ...asArray(raw.open_source_reference_id),
    ...asArray(raw.official_metadata_reference_id),
    ...asArray(raw.evidence_ref_ids),
    ...asArray(raw.claim_promotion_request_id),
    ...evidenceRefs
  ]);
  const normalized = {
    id,
    entity_type: entityType,
    title: String(firstNonEmpty(raw.title, raw.normalized_title, raw.name, id) || id),
    status: String(firstNonEmpty(raw.status, raw.ingestion_status, raw.dossier_status, "draft")),
    source_basis: String(firstNonEmpty(raw.source_basis, "unsupported_draft")),
    confidence: String(firstNonEmpty(raw.confidence, raw.risk_level === "high" ? "weak" : "unsupported_draft")),
    phase_groups: phaseGroups,
    domains,
    tags: cleanArray(firstNonEmpty(raw.tags, raw.source_origin_flags, raw.category ? [raw.category] : [])),
    related_entities: relatedEntities,
    evidence_refs: evidenceRefs,
    created_at: String(firstNonEmpty(raw.created_at, TODAY)),
    updated_at: String(firstNonEmpty(raw.updated_at, raw.updated_date, TODAY)),
    version: String(firstNonEmpty(raw.version, "0.1.0")),
    source_path: options.sourcePath || null,
    raw
  };
  if (normalized.entity_type === "DesignLens") {
    normalized.diagnostic_questions_count = asArray(raw.diagnostic_questions).length;
    normalized.target_artifact_type = String(firstNonEmpty(raw.target_artifact_type, "game_design_artifact"));
    normalized.related_cards = cleanArray(raw.related_cards);
    normalized.review_output_format = cleanArray(firstNonEmpty(raw.review_output_format, raw.recommended_outputs, []));
  }
  if (normalized.entity_type === "WorkflowPack") {
    normalized.required_inputs = cleanArray(raw.required_inputs);
    normalized.output_artifacts = cleanArray(raw.output_artifacts);
    normalized.estimated_time = String(firstNonEmpty(raw.estimated_time, ""));
    normalized.quality_gate = firstNonEmpty(raw.quality_gate, raw.quality_checklist, []);
  }
  if (normalized.entity_type === "PromptTemplate") {
    normalized.guardrails = cleanArray(raw.guardrails);
    normalized.expected_output_format = cleanArray(raw.expected_output_format);
  }
  if (normalized.entity_type === "Lesson") {
    normalized.level = String(firstNonEmpty(raw.level, ""));
    normalized.related_cards = cleanArray(raw.related_cards);
    normalized.related_lenses = cleanArray(raw.related_lenses);
    normalized.practical_exercise = String(firstNonEmpty(raw.practical_exercise, ""));
  }
  if (normalized.entity_type === "Exercise") {
    normalized.difficulty = String(firstNonEmpty(raw.difficulty, ""));
    normalized.expected_output = String(firstNonEmpty(raw.expected_output, ""));
    normalized.related_lesson = String(firstNonEmpty(raw.related_lesson, ""));
  }
  if (["ConceptCard", "FrameworkCard", "QuoteCard", "ComparisonCard", "ApplicationCard", "ChecklistCard", "PromptCard", "KnowledgeCard"].includes(normalized.entity_type)) {
    normalized.card_type = String(firstNonEmpty(raw.card_type, ""));
    normalized.output_artifacts = cleanArray(raw.output_artifacts);
  }
  if (normalized.entity_type === "BookDossier") {
    normalized.work_id = String(firstNonEmpty(raw.work_id, ""));
  }
  if (normalized.entity_type === "EvidenceRef") {
    normalized.evidence_ref_id = String(firstNonEmpty(raw.evidence_ref_id, raw.id, ""));
    normalized.evidence_type = String(firstNonEmpty(raw.evidence_type, ""));
    normalized.evidence_scope = String(firstNonEmpty(raw.evidence_scope, ""));
    normalized.supports_entity_ids = cleanArray(raw.supports_entity_ids);
    normalized.supports_claim_ids = cleanArray(raw.supports_claim_ids);
  }
  if (normalized.entity_type === "LegalSidecar") {
    normalized.sidecar_id = String(firstNonEmpty(raw.sidecar_id, raw.id, ""));
    normalized.approval_status = String(firstNonEmpty(raw.approval_status, raw.legal_review_status, raw.status, ""));
  }
  if (normalized.entity_type === "UserManualNote") {
    normalized.note_id = String(firstNonEmpty(raw.note_id, raw.manual_note_id, raw.id, ""));
    normalized.manual_note_id = String(firstNonEmpty(raw.manual_note_id, raw.note_id, raw.id, ""));
    normalized.user_provided = Boolean(firstNonEmpty(raw.user_provided, raw.user_confirms_note_supplied, false));
    normalized.note_type = String(firstNonEmpty(raw.note_type, ""));
    normalized.user_interpretation = String(firstNonEmpty(raw.user_interpretation, ""));
  }
  if (normalized.entity_type === "UserManualQuote") {
    normalized.quote_id = String(firstNonEmpty(raw.quote_id, raw.manual_quote_id, raw.id, ""));
    normalized.manual_quote_id = String(firstNonEmpty(raw.manual_quote_id, raw.quote_id, raw.id, ""));
    normalized.user_provided = Boolean(firstNonEmpty(raw.user_provided, raw.user_confirms_quote_supplied, false));
    normalized.quote_length_words = Number(firstNonEmpty(raw.quote_length_words, 0));
  }
  if (normalized.entity_type === "OpenSourceReference") {
    normalized.open_source_reference_id = String(firstNonEmpty(raw.open_source_reference_id, raw.id, ""));
    normalized.url = String(firstNonEmpty(raw.url, raw.source_url, ""));
  }
  if (normalized.entity_type === "OfficialMetadataReference") {
    normalized.official_metadata_reference_id = String(firstNonEmpty(raw.official_metadata_reference_id, raw.id, ""));
    normalized.url = String(firstNonEmpty(raw.url, raw.source_url, ""));
  }
  if (normalized.entity_type === "ClaimPromotionRequest") {
    normalized.claim_promotion_request_id = String(firstNonEmpty(raw.claim_promotion_request_id, raw.id, ""));
    normalized.target_claim_ids = cleanArray(raw.target_claim_ids);
    normalized.evidence_ref_ids = cleanArray(raw.evidence_ref_ids);
    normalized.proposed_confidence = String(firstNonEmpty(raw.proposed_confidence, ""));
    normalized.requested_by = String(firstNonEmpty(raw.requested_by, ""));
    normalized.reviewer = String(firstNonEmpty(raw.reviewer, ""));
    normalized.rationale = String(firstNonEmpty(raw.rationale, raw.promotion_rationale, ""));
    normalized.evidence_scope_alignment = String(firstNonEmpty(raw.evidence_scope_alignment, ""));
    normalized.within_evidence_scope = Boolean(firstNonEmpty(raw.within_evidence_scope, false));
  }
  if (normalized.entity_type === "ClaimPromotionReview") {
    normalized.claim_promotion_review_id = String(firstNonEmpty(raw.claim_promotion_review_id, raw.id, ""));
    normalized.request_id = String(firstNonEmpty(raw.request_id, raw.claim_promotion_request_id, ""));
    normalized.decision = String(firstNonEmpty(raw.decision, ""));
    normalized.reviewer = String(firstNonEmpty(raw.reviewer, ""));
    normalized.decision_rationale = String(firstNonEmpty(raw.decision_rationale, raw.rationale, ""));
    normalized.evidence_ref_ids = cleanArray(raw.evidence_ref_ids);
    normalized.approved_confidence = String(firstNonEmpty(raw.approved_confidence, ""));
  }
  if (normalized.entity_type === "EvidenceGap") {
    normalized.evidence_gap_id = String(firstNonEmpty(raw.evidence_gap_id, raw.id, ""));
    normalized.affected_entity_ids = cleanArray(raw.affected_entity_ids);
    normalized.affected_claim_ids = cleanArray(raw.affected_claim_ids);
  }
  if (normalized.entity_type === "EvidenceIntakeBatch") {
    normalized.evidence_intake_batch_id = String(firstNonEmpty(raw.evidence_intake_batch_id, raw.packet_id, raw.id, ""));
    normalized.packet_id = String(firstNonEmpty(raw.packet_id, raw.evidence_intake_batch_id, raw.id, ""));
    normalized.batch_items = cleanArray(raw.batch_items);
    normalized.intake_status = String(firstNonEmpty(raw.intake_status, "not_submitted"));
    normalized.source_documents_referenced = cleanArray(raw.source_documents_referenced);
    normalized.works_referenced = cleanArray(raw.works_referenced);
    normalized.legal_sidecars_included = cleanArray(raw.legal_sidecars_included);
    normalized.manual_notes_included = cleanArray(raw.manual_notes_included);
    normalized.manual_quotes_included = cleanArray(raw.manual_quotes_included);
    normalized.project_overlays_included = cleanArray(raw.project_overlays_included);
    normalized.playtest_logs_included = cleanArray(raw.playtest_logs_included);
  }
  if (normalized.entity_type === "EvidenceAuditReport") {
    normalized.evidence_audit_report_id = String(firstNonEmpty(raw.evidence_audit_report_id, raw.id, ""));
    normalized.audit_scope = String(firstNonEmpty(raw.audit_scope, ""));
  }
  return normalized;
}

function summaryFor(entity) {
  const raw = entity.raw || {};
  const value = firstNonEmpty(
    raw.one_sentence_summary,
    raw.one_sentence_purpose,
    raw.purpose,
    raw.use_case,
    raw.opening_question,
    raw.claim_text,
    raw.legal_status_summary,
    raw.notes,
    entity.title
  );
  return Array.isArray(value) ? value.join(" ") : String(value || "");
}

function safeExcerptFor(entity, sections) {
  if (!canIncludeBodyExcerpt(entity)) return "[suppressed: metadata-only or quarantined source boundary]";
  const joined = sections.map((section) => section.excerpt_safe).filter(Boolean).join(" ");
  return joined.slice(0, 800);
}

function listEntityFiles(relDir) {
  const dir = path.join(KB_DIR, relDir);
  if (!fs.existsSync(dir)) return [];
  const isEvidenceDir = relDir.replace(/\\/g, "/").startsWith("13_evidence/");
  return fs.readdirSync(dir)
    .filter((name) => [".md", ".yaml", ".yml"].includes(path.extname(name).toLowerCase()))
    .filter((name) => name.toLowerCase() !== "readme.md")
    .filter((name) => {
      const lower = name.toLowerCase();
      if (!isEvidenceDir) return true;
      return !lower.includes("template") && !lower.includes("example") && !lower.includes("guide") && !lower.includes("index") && !lower.includes("backlog") && !lower.includes("sidecar_audit_report") && !lower.includes("first_manual_notes_intake_report") && !lower.includes("first_manual_quote_intake_report") && !lower.includes("first_claim_promotion_requests_report") && !lower.includes("first_project_overlay_intake_report") && !lower.includes("manual_note_intake_report") && !lower.includes("manual_quote_audit_report") && !lower.includes("claim_promotion_audit") && !lower.includes("game_feel_evidence_pilot") && !lower.includes("game_feel_evidence_gap_report") && !lower.includes("game_feel_entity_audit") && !lower.includes("meaningful_decisions_evidence_pilot") && !lower.includes("rules_mechanics_evidence_gap_report") && !lower.includes("meaningful_decisions_entity_audit") && !lower.includes("systems_economy_playtest_evidence_pilot") && !lower.includes("project_overlay_evidence_gap_report") && !lower.includes("playtest_log_evidence_gap_report") && !lower.includes("systems_economy_entity_audit") && !lower.includes("evidence_navigation_report") && !lower.includes("evidence_search_export_report") && !lower.includes("evidence_portal_audit") && !lower.includes("phase_2_readiness_report") && !lower.includes("user_evidence_dependency_report");
    })
    .filter((name) => !name.toLowerCase().endsWith("_template.md"))
    .filter((name) => !name.toLowerCase().endsWith("-template.md"))
    .filter((name) => name.toLowerCase() !== "project_overlay_template.md")
    .map((name) => path.join(dir, name));
}

function parseYamlLike(text) {
  const data = {};
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match) continue;
    data[match[1]] = parseScalar(match[2]);
  }
  return data;
}

function collectMarkdownEntities(issues) {
  const entities = [];
  for (const scan of ENTITY_SCAN_DIRS) {
    for (const filePath of listEntityFiles(scan.dir)) {
      const content = readText(filePath);
      const isMarkdown = path.extname(filePath).toLowerCase() === ".md";
      const { frontmatter, body } = isMarkdown
        ? parseFrontmatter(content)
        : { frontmatter: parseYamlLike(content), body: "" };
      if (!frontmatter) {
        issues.push(issue("warning", "missing_frontmatter", path.relative(ROOT, filePath), "Entity candidate has no YAML frontmatter or YAML fields."));
        continue;
      }
      const entityType = inferMarkdownEntityType(frontmatter, scan.defaultType);
      const fallbackId = `${slug(entityType)}_${slug(path.basename(filePath, ".md"))}`;
      const entity = normalizeEntity(frontmatter, {
        entityType,
        fallbackId,
        sourcePath: path.relative(ROOT, filePath).replace(/\\/g, "/")
      });
      entity.body_sections = extractSections(body, entity);
      entity.summary = summaryFor(entity);
      entity.body_excerpt_safe = safeExcerptFor(entity, entity.body_sections);
      entities.push(entity);
    }
  }
  return entities;
}

function collectJsonEntities() {
  const entities = [];
  const sources = readJson("01_sources/sources.json", {});
  for (const src of sources.source_documents || []) {
    const entity = normalizeEntity(src, {
      entityType: "SourceDocument",
      fallbackId: src.source_document_id,
      sourcePath: "kb/01_sources/sources.json"
    });
    entity.summary = src.legal_status_summary || src.recommended_user_action || src.notes || src.normalized_title || "";
    entity.body_sections = [];
    entity.body_excerpt_safe = "[not applicable: source registry metadata only]";
    entities.push(entity);
  }

  const works = readJson("03_works/works.json", {});
  for (const work of works.works || []) {
    const entity = normalizeEntity(work, {
      entityType: "GameDesignWork",
      fallbackId: work.work_id,
      sourcePath: "kb/03_works/works.json"
    });
    entity.summary = work.notes || work.legal_status_summary || work.title || "";
    entity.body_sections = [];
    entity.body_excerpt_safe = "[not applicable: work registry metadata only]";
    entities.push(entity);
  }

  const claims = readJson("05_cards/claim_graph.json", {});
  for (const claim of claims.claims || []) {
    const entity = normalizeEntity(claim, {
      entityType: "Claim",
      fallbackId: claim.claim_id,
      sourcePath: "kb/05_cards/claim_graph.json"
    });
    entity.title = claim.claim_id;
    entity.summary = claim.claim_text || "";
    entity.body_sections = [];
    entity.body_excerpt_safe = claim.source_basis === "metadata_only" ? "[suppressed: metadata-only]" : claim.claim_text || "";
    entities.push(entity);
  }

  const ontology = readJson("02_ontology/ontology.json", {});
  for (const phase of ontology.phase_groups || []) {
    const entity = normalizeEntity({
      ...phase,
      title: phase.name,
      source_basis: "official_metadata",
      confidence: "strong",
      status: "active",
      domains: phase.domain_ids || [],
      tags: ["phase_group"]
    }, {
      entityType: "PhaseGroup",
      fallbackId: phase.phase_id,
      sourcePath: "kb/02_ontology/ontology.json"
    });
    entity.summary = phase.purpose || "";
    entity.body_sections = [];
    entity.body_excerpt_safe = phase.purpose || "";
    entities.push(entity);
  }
  for (const domain of ontology.domains || []) {
    const entity = normalizeEntity({
      ...domain,
      title: domain.name,
      source_basis: "official_metadata",
      confidence: "strong",
      status: "active",
      phase_groups: domain.phase_ids || [],
      tags: ["domain"]
    }, {
      entityType: "Domain",
      fallbackId: domain.domain_id,
      sourcePath: "kb/02_ontology/ontology.json"
    });
    entity.summary = domain.name || "";
    entity.body_sections = [];
    entity.body_excerpt_safe = domain.name || "";
    entities.push(entity);
  }

  return entities;
}

function inheritDossierRouting(entities) {
  const works = new Map(entities.filter((e) => e.entity_type === "GameDesignWork").map((e) => [e.id, e]));
  for (const entity of entities) {
    if (entity.entity_type !== "BookDossier") continue;
    const workId = entity.raw.work_id;
    const work = works.get(workId);
    if (!work) continue;
    if (!entity.phase_groups.length) entity.phase_groups = [...work.phase_groups];
    if (!entity.domains.length) entity.domains = [...work.domains];
    entity.inherited_routing_from_work = workId;
  }
}

function promptTemplateFallbackRouting(entities, phaseNames) {
  for (const entity of entities) {
    if (entity.entity_type !== "PromptTemplate") continue;
    if (!entity.domains.length) entity.domains = ["prompt_engineering_game_design"];
    if (!entity.phase_groups.length) entity.phase_groups = phaseNames;
    entity.inferred_routing = "PromptTemplate default routing from Prompt 9 importer";
  }
}

function inheritExerciseRouting(entities) {
  const lessons = new Map(entities.filter((e) => e.entity_type === "Lesson").map((e) => [e.id, e]));
  for (const entity of entities) {
    if (entity.entity_type !== "Exercise") continue;
    const lesson = lessons.get(entity.raw.related_lesson);
    if (!lesson) continue;
    if (!entity.domains.length) entity.domains = [...lesson.domains];
    if (!entity.phase_groups.length) entity.phase_groups = [...lesson.phase_groups];
    entity.inherited_routing_from_lesson = lesson.id;
  }
}

function addCompatibilityDomainNodes(entities) {
  const known = new Set(entities.filter((e) => e.entity_type === "Domain").map((e) => e.id));
  const needed = new Set();
  for (const entity of entities) {
    for (const domain of entity.domains || []) {
      if (domain && !known.has(domain)) needed.add(domain);
    }
  }
  for (const domainId of needed) {
    entities.push({
      id: domainId,
      entity_type: "Domain",
      title: domainId.replace(/_/g, " "),
      status: "active",
      source_basis: "official_metadata",
      confidence: "weak",
      phase_groups: [],
      domains: [],
      tags: ["compatibility_domain", "legacy_domain_vocab"],
      related_entities: [],
      evidence_refs: [],
      created_at: TODAY,
      updated_at: TODAY,
      version: "0.1.0",
      source_path: "generated_by_importer",
      raw: { domain_id: domainId, compatibility_note: "Created from referenced legacy domain vocabulary during Prompt 9 import." },
      summary: "Compatibility domain node generated from older KB domain vocabulary.",
      body_sections: [],
      body_excerpt_safe: ""
    });
  }
}

function issue(severity, rule, entityId, message, extra = {}) {
  return { severity, rule, entity_id: entityId || null, message, ...extra };
}

function createSchemas() {
  const universalRequired = [
    "id",
    "entity_type",
    "title",
    "status",
    "source_basis",
    "confidence",
    "phase_groups",
    "domains",
    "tags",
    "related_entities",
    "evidence_refs",
    "created_at",
    "updated_at",
    "version"
  ];
  const baseProps = {
    id: { type: "string", minLength: 1 },
    entity_type: { type: "string", minLength: 1 },
    title: { type: "string", minLength: 1 },
    status: { type: "string", minLength: 1 },
    source_basis: { type: "string", enum: SOURCE_BASIS },
    confidence: { type: "string", enum: CONFIDENCE },
    phase_groups: { type: "array", items: { type: "string" } },
    domains: { type: "array", items: { type: "string" } },
    tags: { type: "array", items: { type: "string" } },
    related_entities: { type: "array", items: { type: "string" } },
    evidence_refs: { type: "array", items: { type: "string" } },
    created_at: { type: "string" },
    updated_at: { type: "string" },
    version: { type: "string" },
    summary: { type: "string" },
    body_excerpt_safe: { type: "string" },
    source_path: { type: ["string", "null"] },
    raw: { type: "object" }
  };
  const schema = (title, entityType, requiredExtra, propsExtra = {}) => ({
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: `gdkb.${slug(entityType)}.schema.v1`,
    title,
    type: "object",
    additionalProperties: true,
    required: [...universalRequired, ...requiredExtra],
    properties: {
      ...baseProps,
      entity_type: { const: entityType },
      ...propsExtra
    }
  });
  return {
    "source_document.schema.json": schema("GDKB SourceDocument", "SourceDocument", [], {
      original_filename: { type: "string" },
      risk_level: { enum: ["low", "medium", "high", "unknown"] },
      ingestion_status: { type: "string" },
      legal_sidecar_ids: { type: "array", items: { type: "string" } },
      sidecar_review_status: { type: "string" },
      allowed_for_ai_processing: { type: ["boolean", "string"] },
      allowed_operations: { type: "array", items: { type: "string" } },
      prohibited_operations: { type: "array", items: { type: "string" } }
    }),
    "work.schema.json": schema("GDKB GameDesignWork", "GameDesignWork", [], {
      author_names: { type: "array", items: { type: "string" } },
      work_type: { type: "string" },
      canonical_status: { type: "string" }
    }),
    "dossier.schema.json": schema("GDKB BookDossier", "BookDossier", ["work_id"], {
      work_id: { type: "string" },
      legal_status: { type: "string" },
      ingestion_status: { type: "string" },
      dossier_status: { type: "string" },
      user_notes_available: { type: ["boolean", "string"] }
    }),
    "card.schema.json": {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "gdkb.knowledge-card.schema.v1",
      title: "GDKB KnowledgeCard Family",
      type: "object",
      additionalProperties: true,
      required: [...universalRequired, "card_type", "output_artifacts"],
      properties: {
        ...baseProps,
        entity_type: { enum: ["ConceptCard", "FrameworkCard", "QuoteCard", "ComparisonCard", "ApplicationCard", "ChecklistCard", "PromptCard", "KnowledgeCard", "Exercise"] },
        card_type: { type: "string" },
        aliases: { type: "array", items: { type: "string" } },
        one_sentence_summary: { type: "string" },
        related_works: { type: "array", items: { type: "string" } },
        related_lenses: { type: "array", items: { type: "string" } },
        when_to_use: { type: "array", items: { type: "string" } },
        output_artifacts: { type: "array", items: { type: "string" } }
      }
    },
    "lens.schema.json": schema("GDKB DesignLens", "DesignLens", ["diagnostic_questions_count", "target_artifact_type", "related_cards", "review_output_format"], {
      diagnostic_questions_count: { type: "integer", minimum: 1 },
      target_artifact_type: { type: "string" },
      related_cards: { type: "array", items: { type: "string" } },
      review_output_format: { type: "array", items: { type: "string" } }
    }),
    "lesson.schema.json": schema("GDKB Lesson", "Lesson", ["level", "related_cards", "related_lenses", "practical_exercise"], {
      level: { enum: ["beginner", "intermediate", "advanced", "professional"] },
      related_cards: { type: "array", items: { type: "string" } },
      related_lenses: { type: "array", items: { type: "string" } },
      practical_exercise: { type: "string" }
    }),
    "exercise.schema.json": schema("GDKB Exercise", "Exercise", ["difficulty", "expected_output"], {
      difficulty: { type: "string" },
      expected_output: { type: "string" },
      related_lesson: { type: "string" }
    }),
    "workflow_pack.schema.json": schema("GDKB WorkflowPack", "WorkflowPack", ["required_inputs", "output_artifacts", "estimated_time", "quality_gate"], {
      required_inputs: { type: "array", items: { type: "string" } },
      output_artifacts: { type: "array", items: { type: "string" } },
      estimated_time: { type: "string" },
      quality_gate: { type: ["string", "array"] }
    }),
    "prompt_template.schema.json": schema("GDKB PromptTemplate", "PromptTemplate", ["guardrails", "expected_output_format"], {
      guardrails: { type: "array", items: { type: "string" }, minItems: 1 },
      expected_output_format: { type: "array", items: { type: "string" } }
    }),
    "project_overlay.schema.json": schema("GDKB ProjectOverlay", "ProjectOverlay", ["project_id", "entity_scope"], {
      project_id: { type: "string" },
      entity_scope: { type: "string", enum: ["project_overlay"] },
      linked_workflows: { type: "array", items: { type: "string" } },
      design_decisions: { type: "array", items: { type: "string" } },
      playtest_logs: { type: "array", items: { type: "string" } }
    }),
    "playtest_log.schema.json": schema("GDKB PlaytestLog", "PlaytestLog", ["project_id", "playtest_log_id", "entity_scope", "observed_facts", "participant_quotes", "tester_interpretations", "design_hypotheses", "design_decisions", "next_actions"], {
      project_id: { type: "string" },
      playtest_log_id: { type: "string" },
      entity_scope: { type: "string", enum: ["playtest_log"] },
      test_question: { type: "string" },
      tested_artifact: { type: "string" },
      participant_profile: { type: "string" },
      evidence_gap: { type: "string" },
      related_workflows: { type: "array", items: { type: "string" } },
      related_lenses: { type: "array", items: { type: "string" } },
      observed_findings: { type: "array", items: { type: "string" } },
      observed_facts: { type: "array", items: { type: "string" } },
      participant_quotes: { type: "array", items: { type: "string" } },
      tester_interpretations: { type: "array", items: { type: "string" } },
      design_hypotheses: { type: "array", items: { type: "string" } },
      design_decisions: { type: "array", items: { type: "string" } },
      next_actions: { type: "array", items: { type: "string" } }
    }),
    "legal_sidecar.schema.json": schema("GDKB LegalSidecar", "LegalSidecar", ["sidecar_id", "source_document_id", "work_id", "access_basis", "allowed_operations", "prohibited_operations", "approval_status"], {
      sidecar_id: { type: "string" },
      source_document_id: { type: "string" },
      work_id: { type: "string" },
      access_basis: { enum: ["owned_physical_copy", "purchased_ebook", "library_access", "official_open_access", "publisher_permission", "author_permission", "public_domain", "other"] },
      approval_status: { enum: ["pending_review", "approved_metadata_only", "approved_user_notes_only", "approved_full_processing", "rejected", "expired"] },
      user_confirms_legal_access: { type: ["boolean", "string"] },
      allowed_for_ai_processing: { type: ["boolean", "string"] },
      allowed_operations: { type: "array", items: { type: "string" } },
      prohibited_operations: { type: "array", items: { type: "string" } },
      high_risk_marker_review: { type: "string" },
      private_or_public: { enum: ["private", "public"] },
      citation_preference: { type: "string" },
      user_supplied_notes_path: { type: "string" },
      user_supplied_quotes_path: { type: "string" },
      reviewer: { type: "string" },
      review_date: { type: "string" },
      expiration_date: { type: "string" }
    }),
    "user_manual_note.schema.json": schema("GDKB UserManualNote", "UserManualNote", ["note_id", "work_id", "title", "note_type", "location", "user_summary", "user_interpretation", "user_questions", "related_concepts", "related_cards", "related_lenses", "related_workflows"], {
      note_id: { type: "string" },
      manual_note_id: { type: "string" },
      user_provided: { type: "boolean" },
      user_confirms_note_authored: { type: ["boolean", "string"] },
      note_type: { enum: ["chapter_note", "concept_note", "reading_reflection", "method_note", "comparison_note", "project_application_note"] },
      location: { type: "string" },
      user_summary: { type: "string" },
      user_interpretation: { type: "string" },
      user_questions: { type: "array", items: { type: "string" } },
      related_concepts: { type: "array", items: { type: "string" } },
      related_cards: { type: "array", items: { type: "string" } },
      related_lenses: { type: "array", items: { type: "string" } },
      related_workflows: { type: "array", items: { type: "string" } },
      work_id: { type: "string" },
      source_document_id: { type: "string" }
    }),
    "user_manual_quote.schema.json": schema("GDKB UserManualQuote", "UserManualQuote", ["quote_id", "work_id", "source_document_id", "quote_text", "quote_length_words", "location", "user_commentary", "why_it_matters", "related_concepts", "related_cards"], {
      quote_id: { type: "string" },
      manual_quote_id: { type: "string" },
      user_provided: { type: "boolean" },
      quote_text: { type: "string" },
      quote_length_words: { type: ["integer", "number", "string"] },
      location: { type: "string" },
      user_commentary: { type: "string" },
      why_it_matters: { type: "string" },
      related_concepts: { type: "array", items: { type: "string" } },
      related_cards: { type: "array", items: { type: "string" } },
      work_id: { type: "string" },
      source_document_id: { type: "string" }
    }),
    "open_source_reference.schema.json": schema("GDKB OpenSourceReference", "OpenSourceReference", ["open_source_reference_id", "url"], {
      open_source_reference_id: { type: "string" },
      url: { type: "string" },
      access_date: { type: "string" },
      license: { type: "string" }
    }),
    "official_metadata_reference.schema.json": schema("GDKB OfficialMetadataReference", "OfficialMetadataReference", ["official_metadata_reference_id", "url"], {
      official_metadata_reference_id: { type: "string" },
      url: { type: "string" },
      access_date: { type: "string" },
      publisher_or_platform: { type: "string" }
    }),
    "evidence_ref.schema.json": schema("GDKB EvidenceRef", "EvidenceRef", ["evidence_ref_id", "evidence_type", "evidence_scope", "supports_entity_ids", "supports_claim_ids"], {
      evidence_ref_id: { type: "string" },
      evidence_type: { type: "string" },
      evidence_scope: { type: "string" },
      source_document_id: { type: "string" },
      work_id: { type: "string" },
      sidecar_id: { type: "string" },
      manual_note_id: { type: "string" },
      manual_quote_id: { type: "string" },
      open_source_reference_id: { type: "string" },
      official_metadata_reference_id: { type: "string" },
      supports_entity_ids: { type: "array", items: { type: "string" } },
      supports_claim_ids: { type: "array", items: { type: "string" } },
      limitations: { type: ["string", "array"] },
      reviewer: { type: "string" }
    }),
    "claim_promotion_request.schema.json": schema("GDKB ClaimPromotionRequest", "ClaimPromotionRequest", ["claim_promotion_request_id", "target_claim_ids", "evidence_ref_ids", "proposed_confidence", "reviewer", "rationale"], {
      claim_promotion_request_id: { type: "string" },
      target_claim_ids: { type: "array", items: { type: "string" } },
      evidence_ref_ids: { type: "array", items: { type: "string" } },
      proposed_confidence: { type: "string" },
      requested_by: { type: "string" },
      reviewer: { type: "string" },
      rationale: { type: "string" },
      evidence_scope_alignment: { type: "string" },
      within_evidence_scope: { type: "boolean" }
    }),
    "claim_promotion_review.schema.json": schema("GDKB ClaimPromotionReview", "ClaimPromotionReview", ["claim_promotion_review_id", "request_id", "decision", "reviewer", "decision_rationale"], {
      claim_promotion_review_id: { type: "string" },
      request_id: { type: "string" },
      decision: { type: "string" },
      reviewer: { type: "string" },
      decision_rationale: { type: "string" },
      evidence_ref_ids: { type: "array", items: { type: "string" } },
      approved_confidence: { type: "string" },
      limitations: { type: ["string", "array"] }
    }),
    "evidence_gap.schema.json": schema("GDKB EvidenceGap", "EvidenceGap", ["evidence_gap_id", "affected_entity_ids", "affected_claim_ids"], {
      evidence_gap_id: { type: "string" },
      affected_entity_ids: { type: "array", items: { type: "string" } },
      affected_claim_ids: { type: "array", items: { type: "string" } },
      required_source_basis: { type: "array", items: { type: "string" } },
      recommended_fix: { type: "string" }
    }),
    "evidence_intake_batch.schema.json": schema("GDKB EvidenceIntakeBatch", "EvidenceIntakeBatch", ["evidence_intake_batch_id", "packet_id", "submitted_by", "submission_date", "intended_scope", "intake_status"], {
      evidence_intake_batch_id: { type: "string" },
      packet_id: { type: "string" },
      submitted_by: { type: "string" },
      submission_date: { type: "string" },
      intended_scope: { type: "string" },
      source_documents_referenced: { type: "array", items: { type: "string" } },
      works_referenced: { type: "array", items: { type: "string" } },
      legal_sidecars_included: { type: "array", items: { type: "string" } },
      manual_notes_included: { type: "array", items: { type: "string" } },
      manual_quotes_included: { type: "array", items: { type: "string" } },
      project_overlays_included: { type: "array", items: { type: "string" } },
      playtest_logs_included: { type: "array", items: { type: "string" } },
      user_confirms_notes_are_user_authored: { type: ["boolean", "string"] },
      user_confirms_quotes_are_user_provided: { type: ["boolean", "string"] },
      user_confirms_no_copied_chapter_text: { type: ["boolean", "string"] },
      user_confirms_no_long_quotations: { type: ["boolean", "string"] },
      user_confirms_no_ai_generated_summaries_from_private_source_bodies: { type: ["boolean", "string"] },
      user_confirms_high_risk_files_remain_metadata_only_unless_sidecar_permits_otherwise: { type: ["boolean", "string"] },
      reviewer: { type: "string" },
      intake_status: { enum: ["not_submitted", "received", "blocked_missing_user_confirmation", "blocked_source_governance", "accepted_for_validation", "accepted_partial", "rejected"] },
      batch_items: { type: "array", items: { type: "string" } },
      audit_report_id: { type: "string" }
    }),
    "evidence_audit_report.schema.json": schema("GDKB EvidenceAuditReport", "EvidenceAuditReport", ["evidence_audit_report_id", "audit_scope"], {
      evidence_audit_report_id: { type: "string" },
      audit_scope: { type: "string" },
      finding_count: { type: ["integer", "number", "string"] },
      violation_count: { type: ["integer", "number", "string"] }
    }),
    "relationship.schema.json": {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "gdkb.relationship.schema.v1",
      title: "GDKB Relationship Edge",
      type: "object",
      additionalProperties: true,
      required: ["edge_id", "relationship_type", "source_entity_id", "target_entity_id", "evidence_required", "evidence_ids", "source_basis", "confidence", "created_at"],
      properties: {
        edge_id: { type: "string", minLength: 1 },
        relationship_type: { type: "string", minLength: 1 },
        source_entity_id: { type: "string", minLength: 1 },
        target_entity_id: { type: "string", minLength: 1 },
        evidence_required: { type: "boolean" },
        evidence_ids: { type: "array", items: { type: "string" } },
        source_basis: { type: "string", enum: SOURCE_BASIS },
        confidence: { type: "string", enum: CONFIDENCE },
        created_at: { type: "string" }
      }
    }
  };
}

function validateWithSchema(entity, schemas, issues) {
  const schemaNameByType = {
    SourceDocument: "source_document.schema.json",
    GameDesignWork: "work.schema.json",
    BookDossier: "dossier.schema.json",
    ConceptCard: "card.schema.json",
    FrameworkCard: "card.schema.json",
    QuoteCard: "card.schema.json",
    ComparisonCard: "card.schema.json",
    ApplicationCard: "card.schema.json",
    ChecklistCard: "card.schema.json",
    PromptCard: "card.schema.json",
    KnowledgeCard: "card.schema.json",
    DesignLens: "lens.schema.json",
    Lesson: "lesson.schema.json",
    Exercise: "exercise.schema.json",
    WorkflowPack: "workflow_pack.schema.json",
    PromptTemplate: "prompt_template.schema.json",
    ProjectOverlay: "project_overlay.schema.json",
    PlaytestLog: "playtest_log.schema.json",
    LegalSidecar: "legal_sidecar.schema.json",
    UserManualNote: "user_manual_note.schema.json",
    UserManualQuote: "user_manual_quote.schema.json",
    OpenSourceReference: "open_source_reference.schema.json",
    OfficialMetadataReference: "official_metadata_reference.schema.json",
    EvidenceRef: "evidence_ref.schema.json",
    ClaimPromotionRequest: "claim_promotion_request.schema.json",
    ClaimPromotionReview: "claim_promotion_review.schema.json",
    EvidenceGap: "evidence_gap.schema.json",
    EvidenceIntakeBatch: "evidence_intake_batch.schema.json",
    EvidenceAuditReport: "evidence_audit_report.schema.json"
  };
  const schema = schemas[schemaNameByType[entity.entity_type]];
  if (!schema) return;
  for (const field of schema.required || []) {
    const value = field in entity ? entity[field] : entity.raw ? entity.raw[field] : undefined;
    const prop = schema.properties ? schema.properties[field] : null;
    const requiresItems = prop && typeof prop.minItems === "number" && prop.minItems > 0;
    if (value === undefined || value === null || value === "" || (requiresItems && Array.isArray(value) && value.length === 0)) {
      issues.push(issue("warning", "schema_missing_required_field", entity.id, `Missing required schema field: ${field}`, { field, schema: schema.$id }));
    }
  }
}

function isApprovedStatus(value) {
  return [
    "approved",
    "accepted",
    "validated",
    "verified",
    "usable_for_verified",
    "legal_access_confirmed",
    "approved_metadata_only",
    "approved_user_notes_only",
    "approved_full_processing"
  ].includes(String(value || "").toLowerCase());
}

function isPendingOrRejectedStatus(value) {
  return [
    "pending",
    "pending_review",
    "waiting_for_review",
    "rejected",
    "blocked",
    "expired"
  ].includes(String(value || "").toLowerCase());
}

function isVerifiedEntity(entity) {
  return entity && (entity.status === "verified" || entity.confidence === "verified");
}

function validatesAsLegalEvidenceBasis(entity) {
  return LEGAL_EVIDENCE_SOURCE_BASIS.has(entity.source_basis) && entity.confidence !== "ai_hypothesis";
}

function isWithinEvidenceScope(raw) {
  return raw.within_evidence_scope === true || raw.within_evidence_scope === "true" || ACCEPTED_EVIDENCE_SCOPE_ALIGNMENT.has(String(raw.evidence_scope_alignment || ""));
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
  const scope = scopeValue(raw);
  return ["project_overlay", "project_specific", "local_project"].includes(scope);
}

function isPlaytestScope(raw) {
  const scope = scopeValue(raw);
  return ["playtest_log", "playtest_specific", "local_playtest"].includes(scope);
}

function hasOwn(raw, key) {
  return Object.prototype.hasOwnProperty.call(raw || {}, key);
}

function hasPlaytestEvidenceSeparation(raw) {
  return ["observed_facts", "participant_quotes", "tester_interpretations", "design_hypotheses", "design_decisions", "next_actions"].every((field) => hasOwn(raw, field));
}

function isSampleRecord(entity) {
  const raw = entity.raw || {};
  return String(entity.id || "").includes("sample") || cleanArray(raw.tags || entity.tags).includes("sample");
}

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
const STRONG_PROMOTION_TARGETS = new Set(["strong", "verified"]);
const CLAIM_PROMOTION_LEVEL_RANK = {
  unsupported_draft: 0,
  ai_hypothesis: 1,
  user_interpretation: 2,
  weak: 3,
  medium: 4,
  strong: 5,
  verified: 6
};
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

function validateEntities(entities, schemas) {
  const issues = [];
  const seen = new Map();
  const byId = new Map(entities.map((entity) => [entity.id, entity]));
  for (const entity of entities) {
    if (!entity.id) {
      issues.push(issue("error", "missing_id", null, "Entity has no stable ID.", { source_path: entity.source_path }));
      continue;
    }
    if (seen.has(entity.id)) {
      issues.push(issue("error", "duplicate_id", entity.id, `Duplicate entity ID also seen at ${seen.get(entity.id)}.`, { source_path: entity.source_path }));
    } else {
      seen.set(entity.id, entity.source_path || entity.entity_type);
    }
    if (KNOWLEDGE_ENTITY_TYPES.has(entity.entity_type)) {
      if (!entity.source_basis) issues.push(issue("error", "missing_source_basis", entity.id, "Knowledge entity is missing source_basis."));
      if (!entity.confidence) issues.push(issue("error", "missing_confidence", entity.id, "Knowledge entity is missing confidence."));
      if (!SOURCE_BASIS.includes(entity.source_basis)) issues.push(issue("error", "invalid_source_basis", entity.id, `Invalid source_basis: ${entity.source_basis}`));
      if (!CONFIDENCE.includes(entity.confidence)) issues.push(issue("error", "invalid_confidence", entity.id, `Invalid confidence: ${entity.confidence}`));
    }
    if ((entity.status === "verified" || entity.confidence === "verified") && (!STRONG_SOURCE_BASIS.has(entity.source_basis) || !entity.evidence_refs.length)) {
      issues.push(issue("error", "unsupported_verified_claim", entity.id, "Verified content requires strong source_basis and evidence_refs."));
    }
    if (entity.entity_type === "SourceDocument" && entity.raw.risk_level === "high") {
      const allowed = new Set(entity.raw.allowed_operations || []);
      if (allowed.has("generate_summary") || allowed.has("generate_embeddings") || entity.source_basis !== "metadata_only") {
        issues.push(issue("error", "high_risk_source_used_as_summary_basis", entity.id, "High-risk source has unsafe allowed operations or non-metadata source_basis."));
      }
    }
    if (entity.entity_type === "SourceDocument") {
      const sidecarIds = cleanArray(entity.raw.legal_sidecar_ids);
      const allowed = new Set(entity.raw.allowed_operations || []);
      if (entity.raw.allowed_for_ai_processing === true && !sidecarIds.length) {
        issues.push(issue("error", "source_ai_processing_without_sidecar", entity.id, "Source allows AI processing without linked legal_sidecar_ids."));
      }
      if (entity.raw.risk_level === "high" && allowed.has("process_full_text")) {
        const approved = sidecarIds
          .map((id) => byId.get(id))
          .some((sidecar) => sidecar?.entity_type === "LegalSidecar" && sidecar.raw?.approval_status === "approved_full_processing" && Boolean(sidecar.raw?.reviewer));
        if (!approved) {
          issues.push(issue("error", "high_risk_process_full_text_without_explicit_sidecar_approval", entity.id, "High-risk source allows process_full_text without approved_full_processing sidecar and reviewer."));
        }
      }
    }
    if (["ConceptCard", "FrameworkCard", "ApplicationCard", "ChecklistCard", "PromptCard"].includes(entity.entity_type) && !asArray(entity.raw.related_works).length && !hasWorkLinkException(entity)) {
      issues.push(issue("warning", "card_without_related_work", entity.id, "Card has no related_works."));
    }
    if (entity.entity_type === "DesignLens" && !asArray(entity.raw.diagnostic_questions).length) {
      issues.push(issue("error", "lens_without_diagnostic_questions", entity.id, "DesignLens has no diagnostic_questions."));
    }
    if (entity.entity_type === "WorkflowPack" && !asArray(entity.raw.output_artifacts).length) {
      issues.push(issue("error", "workflow_without_output_artifact", entity.id, "WorkflowPack has no output_artifacts."));
    }
    if (entity.entity_type === "Lesson" && !entity.raw.practical_exercise && !asArray(entity.raw.exercise_ids).length) {
      issues.push(issue("error", "lesson_without_exercise", entity.id, "Lesson has neither practical_exercise nor exercise_ids."));
    }
    if (entity.entity_type === "PromptTemplate" && !asArray(entity.raw.guardrails).length) {
      issues.push(issue("error", "prompt_without_guardrails", entity.id, "PromptTemplate has no guardrails."));
    }
    if (entity.entity_type === "Claim") {
      const statusIsVerified = entity.status === "verified";
      const confidenceIsVerified = entity.confidence === "verified";
      if (statusIsVerified !== confidenceIsVerified) {
        issues.push(issue("error", "claim_status_confidence_conflict", entity.id, "Claim status and confidence conflict; verified claims must use both status: verified and confidence: verified."));
      }
    }
    if (entity.entity_type === "EvidenceRef") {
      const raw = entity.raw || {};
      for (const field of ["evidence_ref_id", "evidence_type", "evidence_scope"]) {
        if (!raw[field] && !entity[field]) issues.push(issue("error", "evidence_ref_missing_required_field", entity.id, `EvidenceRef is missing ${field}.`));
      }
      if (INSUFFICIENT_VERIFIED_EVIDENCE_BASIS.has(entity.source_basis)) {
        for (const claimId of cleanArray(raw.supports_claim_ids)) {
          const claim = byId.get(claimId);
          if (isVerifiedEntity(claim)) {
            issues.push(issue("error", "insufficient_evidence_supports_verified_claim", entity.id, `EvidenceRef with ${entity.source_basis} cannot support verified claim ${claimId}.`));
          }
        }
      }
      if (!validatesAsLegalEvidenceBasis(entity) && isApprovedStatus(entity.status)) {
        issues.push(issue("error", "approved_evidence_ref_without_legal_basis", entity.id, "Approved EvidenceRef requires legal evidence source_basis and non-ai_hypothesis confidence."));
      }
      const referencedIds = [
        ...cleanArray(raw.supports_entity_ids),
        ...cleanArray(raw.supports_claim_ids),
        ...cleanArray(raw.source_document_id),
        ...cleanArray(raw.work_id),
        ...cleanArray(raw.sidecar_id),
        ...cleanArray(raw.manual_note_id),
        ...cleanArray(raw.manual_quote_id),
        ...cleanArray(raw.open_source_reference_id),
        ...cleanArray(raw.official_metadata_reference_id)
      ];
      for (const refId of referencedIds) {
        if (refId && !byId.has(refId)) {
          issues.push(issue("error", "evidence_ref_broken_reference", entity.id, `EvidenceRef points to missing entity ${refId}.`));
        }
      }
      const sidecar = raw.sidecar_id ? byId.get(raw.sidecar_id) : null;
      const manualQuote = raw.manual_quote_id ? byId.get(raw.manual_quote_id) : null;
      const manualQuoteSidecar = manualQuote?.raw?.sidecar_id ? byId.get(manualQuote.raw.sidecar_id) : null;
      if (sidecar && isPendingOrRejectedStatus(sidecar.raw?.approval_status || sidecar.status)) {
        for (const claimId of cleanArray(raw.supports_claim_ids)) {
          if (isVerifiedEntity(byId.get(claimId))) {
            issues.push(issue("error", "pending_sidecar_supports_verified_claim", entity.id, `Pending/rejected sidecar ${raw.sidecar_id} cannot support verified claim ${claimId}.`));
          }
        }
      }
      if (manualQuote && manualQuoteSidecar && isPendingOrRejectedStatus(manualQuoteSidecar.raw?.approval_status || manualQuoteSidecar.status)) {
        for (const claimId of cleanArray(raw.supports_claim_ids)) {
          if (isVerifiedEntity(byId.get(claimId))) {
            issues.push(issue("error", "pending_quote_sidecar_supports_verified_claim", entity.id, `Manual quote ${manualQuote.id} has pending/rejected sidecar and cannot support verified claim ${claimId}.`));
          }
        }
      }
      const sourceDoc = raw.source_document_id ? byId.get(raw.source_document_id) : null;
      if (sourceDoc?.raw?.risk_level === "high" && isApprovedStatus(entity.status) && !(entity.source_basis === "user_legal_file" && sidecar && isApprovedStatus(sidecar.raw?.approval_status || sidecar.status))) {
        issues.push(issue("error", "high_risk_source_used_beyond_allowed_operations", entity.id, "High-risk source cannot support approved evidence without an approved legal sidecar and user_legal_file basis."));
      }
    }
    if (entity.entity_type === "ClaimPromotionRequest") {
      const raw = entity.raw || {};
      const targetClaimIds = cleanArray(raw.target_claim_ids);
      const evidenceRefIds = cleanArray(raw.evidence_ref_ids);
      if (!targetClaimIds.length) {
        issues.push(issue("error", "promotion_request_missing_target_claim", entity.id, "ClaimPromotionRequest must target at least one claim."));
      }
      if (!evidenceRefIds.length) {
        issues.push(issue("error", "promotion_request_missing_evidence_ref", entity.id, "ClaimPromotionRequest must include at least one evidence_ref_id."));
      }
      if (!raw.reviewer && !entity.reviewer) {
        issues.push(issue("error", "promotion_request_missing_reviewer", entity.id, "ClaimPromotionRequest must name a human reviewer gate."));
      }
      if (!raw.rationale && !raw.promotion_rationale && !entity.rationale) {
        issues.push(issue("error", "promotion_request_missing_rationale", entity.id, "ClaimPromotionRequest must explain why promotion is justified."));
      }
      const proposedConfidence = String(raw.proposed_confidence || entity.proposed_confidence || "");
      if (!CLAIM_PROMOTION_LEVELS.has(proposedConfidence)) {
        issues.push(issue("error", "invalid_promotion_target_confidence", entity.id, `Invalid proposed_confidence: ${proposedConfidence || "missing"}.`));
      }
      for (const claimId of targetClaimIds) {
        const claim = byId.get(claimId);
        if (!claim || claim.entity_type !== "Claim") {
          issues.push(issue("error", "promotion_request_references_missing_claim", entity.id, `ClaimPromotionRequest references missing claim ${claimId}.`));
        }
      }
      for (const evidenceId of evidenceRefIds) {
        const evidence = byId.get(evidenceId);
        if (!evidence || evidence.entity_type !== "EvidenceRef") {
          issues.push(issue("error", "promotion_request_references_missing_evidence_ref", entity.id, `ClaimPromotionRequest references missing EvidenceRef ${evidenceId}.`));
          continue;
        }
        if (STRONG_PROMOTION_TARGETS.has(proposedConfidence) && (!validatesAsLegalEvidenceBasis(evidence) || INSUFFICIENT_VERIFIED_EVIDENCE_BASIS.has(evidence.source_basis))) {
          issues.push(issue("error", "promotion_request_insufficient_evidence_basis", entity.id, `Promotion to ${proposedConfidence} cannot use EvidenceRef ${evidenceId} with source_basis ${evidence.source_basis}.`));
        }
      }
      if (STRONG_PROMOTION_TARGETS.has(proposedConfidence) && !isWithinEvidenceScope(raw)) {
        issues.push(issue("error", "promotion_request_beyond_evidence_scope", entity.id, "Promotion to strong/verified requires explicit evidence_scope_alignment within or narrower than the evidence."));
      }
    }
    if (entity.entity_type === "ClaimPromotionReview") {
      const raw = entity.raw || {};
      const requestId = raw.request_id || raw.claim_promotion_request_id || entity.request_id;
      const request = requestId ? byId.get(requestId) : null;
      if (!request || request.entity_type !== "ClaimPromotionRequest") {
        issues.push(issue("error", "promotion_review_references_missing_request", entity.id, `ClaimPromotionReview references missing request ${requestId || "missing"}.`));
      }
      if (!raw.reviewer && !entity.reviewer) {
        issues.push(issue("error", "promotion_review_missing_reviewer", entity.id, "ClaimPromotionReview must name a reviewer."));
      }
      if (!raw.decision_rationale && !raw.rationale && !entity.decision_rationale) {
        issues.push(issue("error", "promotion_review_missing_rationale", entity.id, "ClaimPromotionReview must include decision_rationale."));
      }
      const decision = String(raw.decision || entity.decision || "");
      if (!CLAIM_PROMOTION_REVIEW_DECISIONS.has(decision)) {
        issues.push(issue("error", "invalid_promotion_review_decision", entity.id, `Invalid ClaimPromotionReview decision: ${decision || "missing"}.`));
      }
      const approvedConfidence = String(raw.approved_confidence || "");
      if (approvedConfidence && !CLAIM_PROMOTION_LEVELS.has(approvedConfidence)) {
        issues.push(issue("error", "invalid_promotion_review_confidence", entity.id, `Invalid approved_confidence: ${approvedConfidence}.`));
      }
      if (request && approvedConfidence && CLAIM_PROMOTION_LEVEL_RANK[approvedConfidence] > CLAIM_PROMOTION_LEVEL_RANK[String(request.raw?.proposed_confidence || request.proposed_confidence || "unsupported_draft")]) {
        issues.push(issue("error", "promotion_review_exceeds_requested_scope", entity.id, "ClaimPromotionReview cannot approve a confidence level above the request target."));
      }
    }
    if (entity.entity_type === "ProjectOverlay") {
      const raw = entity.raw || {};
      if (String(raw.entity_scope || "") !== "project_overlay") {
        issues.push(issue("error", "project_overlay_missing_project_scope", entity.id, "ProjectOverlay evidence must declare entity_scope: project_overlay."));
      }
      if (treatsLocalObservationAsUniversal(raw)) {
        issues.push(issue("error", "project_overlay_observation_treated_as_universal_doctrine", entity.id, "ProjectOverlay observations must remain project-scoped unless promoted through reviewed evidence."));
      }
      if (isSampleRecord(entity) && (entity.source_basis !== "unsupported_draft" || entity.confidence !== "unsupported_draft")) {
        issues.push(issue("error", "sample_project_overlay_not_unsupported_draft", entity.id, "Sample ProjectOverlay records must remain unsupported_draft and cannot be evidence."));
      }
    }
    if (entity.entity_type === "PlaytestLog") {
      const raw = entity.raw || {};
      if (String(raw.entity_scope || "") !== "playtest_log") {
        issues.push(issue("error", "playtest_log_missing_playtest_scope", entity.id, "PlaytestLog evidence must declare entity_scope: playtest_log."));
      }
      if (!hasPlaytestEvidenceSeparation(raw)) {
        issues.push(issue("error", "playtest_log_missing_observation_separation", entity.id, "PlaytestLog must distinguish observed_facts, participant_quotes, tester_interpretations, design_hypotheses, design_decisions, and next_actions."));
      }
      if (treatsLocalObservationAsUniversal(raw)) {
        issues.push(issue("error", "playtest_observation_treated_as_universal_doctrine", entity.id, "Playtest observations must not be treated as universal doctrine without additional evidence."));
      }
      if (isSampleRecord(entity) && (entity.source_basis !== "unsupported_draft" || entity.confidence !== "unsupported_draft")) {
        issues.push(issue("error", "sample_playtest_log_not_unsupported_draft", entity.id, "Sample PlaytestLog records must remain unsupported_draft and cannot be evidence."));
      }
    }
    if (entity.entity_type === "Claim") {
      const raw = entity.raw || {};
      const relatedIds = cleanArray([
        ...asArray(entity.related_entities),
        ...asArray(raw.related_entities),
        ...asArray(raw.related_project_overlays),
        ...asArray(raw.project_overlay_ids),
        ...asArray(raw.related_playtest_logs),
        ...asArray(raw.playtest_log_ids)
      ]);
      const hasProjectOverlayLink = raw.project_id || raw.project_overlay_id || relatedIds.some((id) => byId.get(id)?.entity_type === "ProjectOverlay" || String(id).startsWith("project_overlay_"));
      const hasPlaytestLogLink = raw.playtest_log_id || relatedIds.some((id) => byId.get(id)?.entity_type === "PlaytestLog" || String(id).startsWith("playtest_log_"));
      if (hasProjectOverlayLink && raw.entity_scope !== "project_overlay") {
        issues.push(issue("error", "project_specific_claim_missing_project_overlay_scope", entity.id, "Project-specific claims must declare entity_scope: project_overlay."));
      }
      if (hasPlaytestLogLink && raw.entity_scope !== "playtest_log") {
        issues.push(issue("error", "playtest_specific_claim_missing_playtest_log_scope", entity.id, "Playtest-specific claims must declare entity_scope: playtest_log."));
      }
      if (isVerifiedEntity(entity) && !isProjectScope(raw) && !isPlaytestScope(raw)) {
        for (const evidenceId of cleanArray(entity.evidence_refs)) {
          const evidence = byId.get(evidenceId);
          const evidenceRaw = evidence?.raw || evidence || {};
          if ((isProjectScope(evidenceRaw) || isPlaytestScope(evidenceRaw)) && !raw.promotion_review_id && !raw.claim_promotion_review_id) {
            issues.push(issue("error", "project_evidence_supports_verified_general_claim_without_review", entity.id, `Verified general claim uses project/playtest evidence ${evidenceId} without promotion review and narrowed scope.`));
          }
        }
      }
    }
    if (entity.entity_type === "LegalSidecar") {
      const raw = entity.raw || {};
      for (const field of ["sidecar_id", "source_document_id", "work_id", "user_confirms_legal_access", "access_basis", "allowed_for_ai_processing", "allowed_operations", "prohibited_operations", "high_risk_marker_review", "private_or_public", "citation_preference", "user_supplied_notes_path", "user_supplied_quotes_path", "reviewer", "approval_status", "review_date", "expiration_date", "notes"]) {
        if (!(field in raw) || raw[field] === undefined || raw[field] === null) {
          issues.push(issue("error", "sidecar_missing_required_field", entity.id, `LegalSidecar is missing ${field}.`));
        }
      }
      if (!LEGAL_SIDECAR_ACCESS_BASIS.has(raw.access_basis)) {
        issues.push(issue("error", "invalid_sidecar_access_basis", entity.id, `Invalid LegalSidecar access_basis: ${raw.access_basis}`));
      }
      if (!LEGAL_SIDECAR_APPROVAL_STATUS.has(raw.approval_status)) {
        issues.push(issue("error", "invalid_sidecar_approval_status", entity.id, `Invalid LegalSidecar approval_status: ${raw.approval_status || "missing"}`));
      }
      const sourceDoc = raw.source_document_id ? byId.get(raw.source_document_id) : null;
      const work = raw.work_id ? byId.get(raw.work_id) : null;
      if (!sourceDoc) issues.push(issue("error", "sidecar_references_missing_source", entity.id, `LegalSidecar references nonexistent source_document_id ${raw.source_document_id}.`));
      if (!work) issues.push(issue("error", "sidecar_references_missing_work", entity.id, `LegalSidecar references nonexistent work_id ${raw.work_id}.`));
      if (raw.approval_status === "approved_full_processing" && (!raw.reviewer || !raw.review_date)) {
        issues.push(issue("error", "sidecar_defaults_to_full_processing", entity.id, "approved_full_processing requires explicit reviewer and review_date; no sidecar may default to full processing."));
      }
      if (sourceDoc?.raw?.risk_level === "high" && raw.approval_status === "approved_full_processing" && !raw.reviewer) {
        issues.push(issue("error", "high_risk_full_processing_without_reviewer", entity.id, "High-risk source sidecar claims full processing without reviewer."));
      }
      if (sourceDoc?.raw?.risk_level === "high" && cleanArray(raw.allowed_operations).includes("process_full_text") && raw.approval_status !== "approved_full_processing") {
        issues.push(issue("error", "high_risk_process_full_text_without_explicit_sidecar_approval", entity.id, "High-risk sidecar allows process_full_text without approved_full_processing status."));
      }
    }
    if (entity.entity_type === "UserManualNote") {
      const raw = entity.raw || {};
      if (entity.source_basis !== "user_manual_note") {
        issues.push(issue("error", "manual_note_invalid_source_basis", entity.id, "UserManualNote must use source_basis user_manual_note."));
      }
      if (entity.confidence !== "user_interpretation") {
        issues.push(issue("error", "manual_note_not_marked_user_interpretation", entity.id, "UserManualNote cannot be treated as source claim unless confidence is user_interpretation."));
      }
      if (!USER_MANUAL_NOTE_TYPES.has(raw.note_type)) {
        issues.push(issue("error", "manual_note_invalid_note_type", entity.id, `Invalid UserManualNote note_type: ${raw.note_type || "missing"}.`));
      }
      if (!USER_MANUAL_NOTE_STATUS.has(raw.status || entity.status)) {
        issues.push(issue("error", "manual_note_invalid_status", entity.id, `Invalid UserManualNote status: ${raw.status || entity.status || "missing"}.`));
      }
      if (!raw.note_id && !raw.manual_note_id) {
        issues.push(issue("error", "manual_note_missing_note_id", entity.id, "UserManualNote is missing note_id."));
      }
      if (!raw.work_id || !byId.has(raw.work_id)) {
        issues.push(issue("error", "manual_note_references_missing_work", entity.id, `UserManualNote references nonexistent work_id ${raw.work_id || "missing"}.`));
      }
      if (raw.source_document_id && !byId.has(raw.source_document_id)) {
        issues.push(issue("error", "manual_note_references_missing_source", entity.id, `UserManualNote references nonexistent source_document_id ${raw.source_document_id}.`));
      }
    }
    if (entity.entity_type === "UserManualQuote") {
      const raw = entity.raw || {};
      if (entity.source_basis !== "user_manual_quote") {
        issues.push(issue("error", "manual_quote_invalid_source_basis", entity.id, "UserManualQuote must use source_basis user_manual_quote."));
      }
      if (!USER_MANUAL_QUOTE_STATUS.has(raw.status || entity.status)) {
        issues.push(issue("error", "manual_quote_invalid_status", entity.id, `Invalid UserManualQuote status: ${raw.status || entity.status || "missing"}.`));
      }
      if (!raw.quote_id && !raw.manual_quote_id) {
        issues.push(issue("error", "manual_quote_missing_quote_id", entity.id, "UserManualQuote is missing quote_id."));
      }
      if (!raw.work_id || !byId.has(raw.work_id)) {
        issues.push(issue("error", "manual_quote_references_missing_work", entity.id, `UserManualQuote references nonexistent work_id ${raw.work_id || "missing"}.`));
      }
      if (!raw.source_document_id || !byId.has(raw.source_document_id)) {
        issues.push(issue("error", "manual_quote_references_missing_source", entity.id, `UserManualQuote references nonexistent source_document_id ${raw.source_document_id || "missing"}.`));
      }
      if (!raw.quote_length_words && raw.quote_length_words !== 0) {
        issues.push(issue("error", "manual_quote_missing_quote_length", entity.id, "UserManualQuote is missing quote_length_words."));
      }
      const quoteLength = Number(raw.quote_length_words || 0);
      if (quoteLength > MANUAL_QUOTE_MAX_WORDS) {
        issues.push(issue("error", "manual_quote_too_long", entity.id, `UserManualQuote has ${quoteLength} words; max is ${MANUAL_QUOTE_MAX_WORDS}.`));
      } else if (quoteLength > MANUAL_QUOTE_WARN_WORDS) {
        issues.push(issue("warning", "manual_quote_near_length_limit", entity.id, `UserManualQuote has ${quoteLength} words; review before use.`));
      }
      if (raw.user_provided !== true && raw.user_confirms_quote_supplied !== true) {
        issues.push(issue("error", "manual_quote_not_explicitly_user_provided", entity.id, "UserManualQuote must be explicitly user-provided."));
      }
      if (raw.automated_extraction === true || raw.generated_from_source_body === true || ["auto", "automated_extraction", "source_body_extraction"].includes(String(raw.extraction_method || "").toLowerCase())) {
        issues.push(issue("error", "manual_quote_automated_extraction", entity.id, "UserManualQuote must never be derived from automated source-body extraction."));
      }
      const sourceDoc = raw.source_document_id ? byId.get(raw.source_document_id) : null;
      const sidecar = raw.sidecar_id ? byId.get(raw.sidecar_id) : null;
      if (sourceDoc?.raw?.risk_level === "high" && ["strong", "verified"].includes(entity.confidence) && (!sidecar || isPendingOrRejectedStatus(sidecar.raw?.approval_status || sidecar.status))) {
        issues.push(issue("error", "high_risk_quote_requires_sidecar_review", entity.id, "Manual quote from high-risk source requires sidecar review before strong or verified use."));
      }
    }
    if (KNOWLEDGE_ENTITY_TYPES.has(entity.entity_type) && entity.entity_type !== "PromptTemplate" && !EVIDENCE_ENTITY_TYPES.has(entity.entity_type)) {
      if (!entity.phase_groups.length) issues.push(issue("warning", "missing_phase_group", entity.id, "Entity has no phase_groups."));
      if (!entity.domains.length) issues.push(issue("warning", "missing_domain", entity.id, "Entity has no domains."));
    }
    validateWithSchema(entity, schemas, issues);
  }
  return issues;
}

function edgeId(type, source, target) {
  return `edge_${slug(type)}_${slug(source)}__${slug(target)}`.slice(0, 220);
}

function relation(type, source, target, sourceEntity, evidenceRequired = false, evidenceIds = []) {
  return {
    edge_id: edgeId(type, source, target),
    relationship_type: type,
    source_entity_id: source,
    target_entity_id: target,
    evidence_required: evidenceRequired,
    evidence_ids: cleanArray(evidenceIds),
    source_basis: sourceEntity.source_basis || "unsupported_draft",
    confidence: sourceEntity.confidence || "unsupported_draft",
    created_at: TODAY
  };
}

function buildGraph(entities) {
  const issues = [];
  const byId = new Map(entities.map((entity) => [entity.id, entity]));
  const ontology = readJson("02_ontology/ontology.json", {});
  const phaseNameToId = new Map((ontology.phase_groups || []).map((phase) => [phase.name, phase.phase_id]));
  const relationships = [];
  const artifactNodes = new Map();

  function addArtifact(label, sourceEntity) {
    const id = `artifact_${slug(label)}`;
    if (!byId.has(id) && !artifactNodes.has(id)) {
      artifactNodes.set(id, {
        id,
        entity_type: "Artifact",
        title: String(label),
        status: "draft",
        source_basis: sourceEntity.source_basis || "unsupported_draft",
        confidence: sourceEntity.confidence || "unsupported_draft",
        phase_groups: [...sourceEntity.phase_groups],
        domains: [...sourceEntity.domains],
        tags: ["generated_deliverable_target"],
        related_entities: [sourceEntity.id],
        evidence_refs: [],
        created_at: TODAY,
        updated_at: TODAY,
        version: "0.1.0",
        source_path: "generated_by_importer",
        raw: { artifact_label: label },
        summary: "Generated artifact node used as a graph target for workflow, exercise, or prompt deliverables.",
        body_sections: [],
        body_excerpt_safe: ""
      });
    }
    return id;
  }

  function add(type, source, target, sourceEntity, evidenceRequired = false, evidenceIds = []) {
    if (!target) return;
    if (!byId.has(target) && !artifactNodes.has(target)) {
      issues.push(issue("warning", "broken_relationship_link", source, `Target entity does not exist: ${target}`, { relationship_type: type, target_entity_id: target }));
      return;
    }
    relationships.push(relation(type, source, target, sourceEntity, evidenceRequired, evidenceIds));
  }

  for (const entity of entities) {
    for (const phase of entity.phase_groups || []) {
      const target = phaseNameToId.get(phase) || phase;
      add("belongs_to_phase", entity.id, target, entity, false);
    }
    for (const domain of entity.domains || []) {
      add("belongs_to_domain", entity.id, domain, entity, false);
    }
    for (const workId of cleanArray(entity.raw.related_works)) add("belongs_to_work", entity.id, workId, entity, false);
    for (const workId of cleanArray(entity.raw.source_work_ids)) add("belongs_to_work", entity.id, workId, entity, false);
    if (entity.raw.work_id && entity.entity_type !== "GameDesignWork") add("belongs_to_work", entity.id, entity.raw.work_id, entity, false);
    for (const dossierId of cleanArray(entity.raw.related_dossiers)) add("related_to", entity.id, dossierId, entity, false);
    for (const cardId of cleanArray([...asArray(entity.raw.related_cards), ...asArray(entity.raw.related_concepts), ...asArray(entity.raw.key_concepts)])) add("related_to", entity.id, cardId, entity, false);
    for (const lensId of cleanArray(entity.raw.related_lenses)) add("related_to", entity.id, lensId, entity, false);
    for (const lessonId of cleanArray([...asArray(entity.raw.related_lessons), ...asArray(entity.raw.related_lesson)])) add("related_to", entity.id, lessonId, entity, false);
    for (const lessonId of cleanArray(entity.raw.prerequisite_lessons)) add("has_prerequisite", entity.id, lessonId, entity, false);
    for (const lessonId of cleanArray(entity.raw.next_lessons)) add("related_to", entity.id, lessonId, entity, false);
    for (const claimId of cleanArray(entity.raw.related_claims)) add("related_to", entity.id, claimId, entity, false);
    for (const sourceId of cleanArray([...asArray(entity.raw.source_documents), ...asArray(entity.raw.source_ids)])) {
      if (entity.entity_type === "GameDesignWork") {
        add("belongs_to_work", sourceId, entity.id, entity, false);
      } else {
        add("cites", entity.id, sourceId, entity, true, entity.evidence_refs);
      }
    }
    for (const evidenceId of cleanArray(entity.evidence_refs)) add("cites", entity.id, evidenceId, entity, true, [evidenceId]);
    for (const promptId of cleanArray(entity.raw.AI_prompt_templates)) add("contains", entity.id, promptId, entity, false);
    for (const output of cleanArray([...asArray(entity.raw.output_artifacts), ...asArray(entity.raw.expected_output), ...asArray(entity.raw.design_deliverable)])) {
      const artifactId = addArtifact(output, entity);
      add("produces_deliverable", entity.id, artifactId, entity, false);
    }
    if (entity.entity_type === "Claim") {
      for (const cardId of cleanArray(entity.raw.related_cards)) add("related_to", entity.id, cardId, entity, false);
      for (const conceptId of cleanArray(entity.raw.related_concepts)) add("related_to", entity.id, conceptId, entity, false);
      for (const supportId of cleanArray(entity.raw.supports)) add("supports", entity.id, supportId, entity, true, entity.evidence_refs);
      for (const challengeId of cleanArray(entity.raw.challenges)) add("challenges", entity.id, challengeId, entity, true, entity.evidence_refs);
      for (const contradictionId of cleanArray(entity.raw.contradicted_by)) add("contradicts", contradictionId, entity.id, entity, true, entity.evidence_refs);
    }
    if (entity.entity_type === "EvidenceRef") {
      for (const targetId of cleanArray(entity.raw.supports_entity_ids)) {
        add("supports", entity.id, targetId, entity, true, [entity.id]);
        add("evidence_for", entity.id, targetId, entity, true, [entity.id]);
        add("supported_by", targetId, entity.id, entity, true, [entity.id]);
      }
      for (const targetId of cleanArray(entity.raw.supports_claim_ids)) {
        add("supports", entity.id, targetId, entity, true, [entity.id]);
        add("evidence_for", entity.id, targetId, entity, true, [entity.id]);
        add("supported_by", targetId, entity.id, entity, true, [entity.id]);
      }
      for (const targetId of cleanArray([...asArray(entity.raw.challenges_entity_ids), ...asArray(entity.raw.challenges_claim_ids), ...asArray(entity.raw.evidence_against_claim_ids)])) {
        add("challenges", entity.id, targetId, entity, true, [entity.id]);
        add("evidence_against", entity.id, targetId, entity, true, [entity.id]);
        add("challenged_by", targetId, entity.id, entity, true, [entity.id]);
      }
      for (const sourceId of cleanArray([
        ...asArray(entity.raw.source_document_id),
        ...asArray(entity.raw.work_id),
        ...asArray(entity.raw.sidecar_id),
        ...asArray(entity.raw.manual_note_id),
        ...asArray(entity.raw.manual_quote_id),
        ...asArray(entity.raw.open_source_reference_id),
        ...asArray(entity.raw.official_metadata_reference_id)
      ])) {
        add("cites", entity.id, sourceId, entity, true, [entity.id]);
      }
    }
    if (entity.entity_type === "ClaimPromotionRequest") {
      for (const claimId of cleanArray(entity.raw.target_claim_ids)) {
        add("applies_to", entity.id, claimId, entity, true, entity.raw.evidence_ref_ids);
        add("promoted_from", entity.id, claimId, entity, true, entity.raw.evidence_ref_ids);
      }
      for (const evidenceId of cleanArray(entity.raw.evidence_ref_ids)) {
        add("cites", entity.id, evidenceId, entity, true, [evidenceId]);
        add("supported_by", entity.id, evidenceId, entity, true, [evidenceId]);
      }
      for (const gapId of cleanArray(entity.raw.evidence_gap_ids)) add("blocked_by_evidence_gap", entity.id, gapId, entity, true, entity.raw.evidence_ref_ids);
    }
    if (entity.entity_type === "ClaimPromotionReview") {
      for (const requestId of cleanArray([entity.raw.request_id, entity.raw.claim_promotion_request_id])) {
        add("validates", entity.id, requestId, entity, true, entity.raw.evidence_ref_ids);
        add("reviewed_by", requestId, entity.id, entity, true, entity.raw.evidence_ref_ids);
      }
      for (const evidenceId of cleanArray(entity.raw.evidence_ref_ids)) add("cites", entity.id, evidenceId, entity, true, [evidenceId]);
    }
    if (entity.entity_type === "EvidenceGap") {
      for (const targetId of cleanArray([...asArray(entity.raw.affected_entity_ids), ...asArray(entity.raw.affected_claim_ids)])) add("challenges", entity.id, targetId, entity, false);
    }
    if (entity.entity_type === "ProjectOverlay") {
      for (const targetId of cleanArray([...asArray(entity.raw.general_kb_entities_applied), ...asArray(entity.raw.applied_claim_ids), ...asArray(entity.raw.applied_card_ids)])) {
        add("applies_in_project", targetId, entity.id, entity, true, entity.evidence_refs);
      }
    }
    if (entity.entity_type === "PlaytestLog") {
      for (const targetId of cleanArray([...asArray(entity.raw.observed_claim_ids), ...asArray(entity.raw.tested_claim_ids), ...asArray(entity.raw.related_claims)])) {
        add("observed_in_playtest", targetId, entity.id, entity, true, entity.evidence_refs);
      }
    }
  }

  const artifactEntities = [...artifactNodes.values()];
  for (const artifact of artifactEntities) byId.set(artifact.id, artifact);

  const unique = new Map();
  for (const edge of relationships) {
    if (!unique.has(edge.edge_id)) unique.set(edge.edge_id, edge);
  }
  return {
    entities: [...entities, ...artifactEntities],
    relationships: [...unique.values()],
    issues
  };
}

function manualQuoteSearchSafe(entity) {
  if (entity.entity_type !== "UserManualQuote") return true;
  const raw = entity.raw || {};
  return (
    raw.source_basis === "user_manual_quote" &&
    raw.user_provided === true &&
    raw.status === "accepted_user_quote" &&
    !raw.automated_extraction &&
    !raw.generated_from_source_body &&
    Number(raw.quote_length_words || 0) > 0 &&
    Number(raw.quote_length_words || 0) <= MANUAL_QUOTE_MAX_WORDS
  );
}

function entityScopeForSearch(entity) {
  const raw = entity.raw || {};
  const explicit = String(raw.entity_scope || entity.entity_scope || "").toLowerCase();
  if (["project_overlay", "playtest_log", "general_kb", "draft_scaffold"].includes(explicit)) return explicit;
  if (entity.entity_type === "ProjectOverlay") return "project_overlay";
  if (entity.entity_type === "PlaytestLog") return "playtest_log";
  if (entity.source_basis === "unsupported_draft" || entity.confidence === "unsupported_draft" || entity.status === "draft") return "draft_scaffold";
  return "general_kb";
}

function isVerifiedForSearch(entity) {
  return entity.status === "verified" || entity.confidence === "verified";
}

function evidenceGapCountForSearch(entity) {
  const raw = entity.raw || {};
  let count = cleanArray(raw.evidence_gap_ids).length;
  if (raw.evidence_gap || raw.evidence_gap_reason) count += 1;
  if (!cleanArray(entity.evidence_refs).length && !isVerifiedForSearch(entity) && KNOWLEDGE_ENTITY_TYPES.has(entity.entity_type)) count += 1;
  return count;
}

function evidenceStatusForSearch(entity) {
  const evidenceRefs = cleanArray(entity.evidence_refs);
  if (isVerifiedForSearch(entity)) return evidenceRefs.length ? "verified_with_evidence" : "verified_missing_evidence";
  if (entity.source_basis === "metadata_only" || entity.status === "metadata_only_quarantined") return "metadata_only";
  if (entity.source_basis === "unsupported_draft" || entity.confidence === "unsupported_draft") return evidenceRefs.length ? "draft_with_evidence_refs" : "unsupported_draft_no_evidence";
  if (evidenceRefs.length) return "evidence_attached_review_needed";
  if (evidenceGapCountForSearch(entity) > 0) return "evidence_gap_open";
  return "evidence_status_unknown";
}

function promotionStatusForSearch(entity) {
  const raw = entity.raw || {};
  if (entity.entity_type === "ClaimPromotionRequest") return String(raw.status || raw.approval_status || "promotion_request_draft");
  if (entity.entity_type === "ClaimPromotionReview") return String(raw.decision || "promotion_review_pending");
  if (isVerifiedForSearch(entity)) return "verified";
  if (cleanArray(entity.evidence_refs).length) return "review_required";
  return "blocked_no_evidence";
}

function buildSearchIndex(entities) {
  return entities
    .filter((entity) => !["Artifact"].includes(entity.entity_type))
    .filter((entity) => manualQuoteSearchSafe(entity))
    .map((entity) => ({
      id: entity.id,
      entity_type: entity.entity_type,
      title: entity.title,
      summary: summaryFor(entity),
      body_excerpt_safe: entity.body_excerpt_safe || "",
      domains: entity.domains || [],
      phase_groups: entity.phase_groups || [],
      tags: entity.tags || [],
      related_works: cleanArray(entity.raw.related_works || (entity.entity_type === "BookDossier" ? [entity.raw.work_id] : [])),
      confidence: entity.confidence,
      source_basis: entity.source_basis,
      status: entity.status,
      evidence_status: evidenceStatusForSearch(entity),
      is_verified: isVerifiedForSearch(entity),
      has_evidence_refs: cleanArray(entity.evidence_refs).length > 0,
      evidence_gap_count: evidenceGapCountForSearch(entity),
      entity_scope: entityScopeForSearch(entity),
      related_evidence_refs: cleanArray(entity.evidence_refs),
      promotion_status: promotionStatusForSearch(entity),
      evidence_gap: entity.raw.evidence_gap || entity.raw.evidence_gap_reason || ""
    }));
}

function writeDocsAndSchemas(schemas) {
  ensureDir(SCHEMA_DIR);
  for (const [fileName, schema] of Object.entries(schemas)) {
    fs.writeFileSync(path.join(SCHEMA_DIR, fileName), JSON.stringify(schema, null, 2) + "\n", "utf8");
  }

  writeText("11_import_export/markdown_frontmatter_schema.md", `
# Markdown Frontmatter Schema

## Purpose

Markdown remains the canonical authoring format for human-readable KB objects. YAML frontmatter is the machine contract that lets GDKB import, validate, link, search, and graph the knowledge base.

This standard applies to entity Markdown files, not general index files. Templates may show placeholder values, but concrete entity files must use stable IDs.

## Universal Fields

Every Markdown entity must include:

| Field | Type | Required | Meaning |
|---|---|---:|---|
| \`id\` | string | yes | Universal stable ID. Existing files may use entity-specific IDs during migration, but Prompt 9 exports normalize them into \`id\`. |
| \`entity_type\` | enum | yes | Entity type such as \`ConceptCard\`, \`DesignLens\`, \`Lesson\`, or \`WorkflowPack\`. |
| \`title\` | string | yes | Human-readable title. |
| \`status\` | string | yes | Draft, needs_evidence, metadata_shell, verified, retired, quarantined, or another controlled workflow state. |
| \`source_basis\` | enum | yes | Legal/provenance basis from \`SOURCE_BASIS_ENUM.md\`. |
| \`confidence\` | enum | yes | Confidence from \`CONFIDENCE_MODEL.md\`. |
| \`phase_groups\` | string[] | yes | One or more of the eight production phase groups, unless the entity is only a raw SourceDocument. |
| \`domains\` | string[] | yes | Cross-domain routing IDs. |
| \`tags\` | string[] | yes | Controlled tags plus optional local tags. Empty array is allowed only for intake objects. |
| \`related_entities\` | string[] | yes | Explicit cross-links to other KB entity IDs. |
| \`evidence_refs\` | string[] | yes | Evidence IDs or source refs. Empty array is allowed only for draft/metadata objects. |
| \`created_at\` | date string | yes | Creation date. |
| \`updated_at\` | date string | yes | Last update date. |
| \`version\` | string | yes | Semantic or local version, for example \`0.1.0\`. |

## Source Basis And Confidence Enums

\`source_basis\` must be one of:

${SOURCE_BASIS.map((item) => `- \`${item}\``).join("\n")}

\`confidence\` must be one of:

${CONFIDENCE.map((item) => `- \`${item}\``).join("\n")}

## Entity-Specific Required Fields

### SourceDocument

- \`source_document_id\`
- \`original_filename\`
- \`normalized_title\`
- \`risk_level\`
- \`ingestion_status\`
- \`legal_sidecar_ids\`
- \`sidecar_review_status\`
- \`allowed_for_ai_processing\`
- \`allowed_operations\`
- \`prohibited_operations\`

### GameDesignWork

- \`work_id\`
- \`author_names\`
- \`work_type\`
- \`main_domain\`
- \`secondary_domains\`
- \`phase_groups\`
- \`canonical_status\`
- \`source_documents\`
- \`legal_status_summary\`
- \`ingestion_status\`

### BookDossier

- \`dossier_id\`
- \`work_id\`
- \`legal_status\`
- \`ingestion_status\`
- \`dossier_status\`
- \`user_notes_available\`

### ChapterNode

- \`chapter_node_id\`
- \`work_id\`
- \`dossier_id\`
- \`chapter_title\`
- \`chapter_order\`
- \`chapter_status\`

### ConceptCard

- \`card_id\`
- \`card_type: concept_card\`
- \`aliases\`
- \`one_sentence_summary\`
- \`related_works\`
- \`related_lenses\`
- \`when_to_use\`
- \`output_artifacts\`

### FrameworkCard

- \`card_id\`
- \`card_type: framework_card\`
- \`required_inputs\`
- \`output_artifacts\`
- \`related_works\`
- \`related_lenses\`

### QuoteCard

- \`card_id\`
- \`card_type: quote_card\`
- \`quote_source_id\`
- \`locator\`
- \`quote_length_words\`
- \`usage_limits\`

Quote cards are allowed only for \`user_manual_quote\`, \`open_fulltext\`, or \`user_legal_file\`.

### ComparisonCard

- \`card_id\`
- \`card_type: comparison_card\`
- \`compared_entities\`
- \`comparison_basis\`
- \`evidence_refs\`

### ApplicationCard

- \`card_id\`
- \`card_type: application_card\`
- \`project_context_required\`
- \`when_to_use\`
- \`output_artifacts\`

### ChecklistCard

- \`card_id\`
- \`card_type: checklist_card\`
- \`checklist_items_count\`
- \`quality_gate\`
- \`output_artifacts\`

### PromptCard

- \`card_id\`
- \`card_type: prompt_card\`
- \`AI_prompt_hooks\`
- \`guardrails\`
- \`expected_output_format\`

### DesignLens

- \`lens_id\`
- \`diagnostic_questions_count\`
- \`target_artifact_type\`
- \`related_cards\`
- \`review_output_format\`

### Lesson

- \`lesson_id\`
- \`level\`
- \`learning_objectives\`
- \`related_cards\`
- \`related_lenses\`
- \`practical_exercise\`
- \`design_deliverable\`

### Exercise

- \`exercise_id\`
- \`difficulty\`
- \`estimated_time\`
- \`solo_or_group\`
- \`expected_output\`
- \`evaluation_rubric\`
- \`related_lesson\`

### WorkflowPack

- \`workflow_id\`
- \`required_inputs\`
- \`output_artifacts\`
- \`estimated_time\`
- \`quality_gate\`
- \`AI_prompt_templates\`

### PromptTemplate

- \`prompt_id\`
- \`use_case\`
- \`required_context\`
- \`user_inputs\`
- \`guardrails\`
- \`prompt_text\`
- \`expected_output_format\`

### ProjectOverlay

- \`project_overlay_id\`
- \`project_id\`
- \`linked_workflows\`
- \`design_decisions\`
- \`playtest_logs\`
- \`general_kb_entities_applied\`

### EvidenceRef

- \`evidence_ref_id\`
- \`evidence_type\`
- \`evidence_scope\`
- \`source_basis\`
- \`confidence\`
- \`supports_entity_ids\`
- \`supports_claim_ids\`
- \`limitations\`
- \`reviewer\`

\`metadata_only\`, \`unsupported_draft\`, and \`ai_hypothesis\` cannot support verified claims.

### LegalSidecar

- \`sidecar_id\`
- \`source_document_id\`
- \`work_id\`
- \`user_confirms_legal_access\`
- \`access_basis\`
- \`allowed_for_ai_processing\`
- \`allowed_operations\`
- \`prohibited_operations\`
- \`high_risk_marker_review\`
- \`private_or_public\`
- \`citation_preference\`
- \`user_supplied_notes_path\`
- \`user_supplied_quotes_path\`
- \`approval_status\`
- \`reviewer\`
- \`review_date\`
- \`expiration_date\`
- \`notes\`

Pending sidecars cannot promote or verify claims.

### UserManualNote

- \`note_id\`
- \`work_id\`
- \`source_document_id\`
- \`sidecar_id\`
- \`note_type\`
- \`location\`
- \`user_summary\`
- \`user_interpretation\`
- \`user_questions\`
- \`related_concepts\`
- \`related_cards\`
- \`related_lenses\`
- \`related_workflows\`

Manual notes must use \`source_basis: user_manual_note\` and \`confidence: user_interpretation\`.

### UserManualQuote

- \`quote_id\`
- \`work_id\`
- \`source_document_id\`
- \`sidecar_id\`
- \`quote_text\`
- \`quote_length_words\`
- \`location\`
- \`user_commentary\`
- \`why_it_matters\`
- \`related_concepts\`
- \`related_cards\`
- \`user_provided\`
- \`automated_extraction\`
- \`generated_from_source_body\`

Manual quotes must use \`source_basis: user_manual_quote\`, must be explicitly user-provided, and must not exceed 80 words.

Manual quotes must be explicitly user-provided and should remain short.

### ClaimPromotionRequest

- \`claim_promotion_request_id\`
- \`target_claim_ids\`
- \`evidence_ref_ids\`
- \`proposed_confidence\`
- \`requested_by\`
- \`reviewer\`
- \`rationale\`
- \`evidence_scope_alignment\`
- \`within_evidence_scope\`
- \`evidence_gap_ids\`

### ClaimPromotionReview

- \`claim_promotion_review_id\`
- \`request_id\`
- \`decision\`
- \`reviewer\`
- \`decision_rationale\`
- \`evidence_ref_ids\`
- \`approved_confidence\`
- \`limitations\`

### ForumThreadTemplate

- \`forum_thread_template_id\`
- \`thread_type\`
- \`opening_prompt\`
- \`required_context\`
- \`quality_rules\`
- \`expected_replies\`

## Migration Rule

Earlier Prompt 5 to Prompt 8 files often use entity-specific IDs such as \`card_id\`, \`lens_id\`, or \`workflow_id\` instead of universal \`id\`. The Prompt 9 importer normalizes those fields into \`id\` without rewriting the authored files. Future hand-authored entities should include both \`id\` and the entity-specific ID until migration is complete.
`);

  writeText("11_import_export/json_schema_plan.md", `
# JSON Schema Plan

## Purpose

The JSON schemas define the normalized GDKB import shape. They do not replace the older Prompt 4 to Prompt 8 schemas; they sit above them as the cross-entity data contract.

## Generated Schema Files

- \`schemas/source_document.schema.json\`
- \`schemas/work.schema.json\`
- \`schemas/dossier.schema.json\`
- \`schemas/card.schema.json\`
- \`schemas/lens.schema.json\`
- \`schemas/lesson.schema.json\`
- \`schemas/exercise.schema.json\`
- \`schemas/workflow_pack.schema.json\`
- \`schemas/prompt_template.schema.json\`
- \`schemas/project_overlay.schema.json\`
- \`schemas/playtest_log.schema.json\`
- \`schemas/legal_sidecar.schema.json\`
- \`schemas/user_manual_note.schema.json\`
- \`schemas/user_manual_quote.schema.json\`
- \`schemas/open_source_reference.schema.json\`
- \`schemas/official_metadata_reference.schema.json\`
- \`schemas/evidence_ref.schema.json\`
- \`schemas/claim_promotion_request.schema.json\`
- \`schemas/claim_promotion_review.schema.json\`
- \`schemas/evidence_gap.schema.json\`
- \`schemas/evidence_intake_batch.schema.json\`
- \`schemas/evidence_audit_report.schema.json\`
- \`schemas/relationship.schema.json\`

## Validation Layers

1. Parse validation: JSON files must parse and Markdown frontmatter must parse.
2. Universal field validation: \`id\`, \`entity_type\`, \`source_basis\`, \`confidence\`, status, routing, links, dates, and version.
3. Entity-specific validation: required fields per entity type.
4. Governance validation: source basis, confidence, legal status, high-risk source boundaries, and verified claim requirements.
5. Link validation: relationship targets must exist before graph export.
6. Search safety validation: search excerpts must not include prohibited source body text.

## Exact Rules Flagged By Importer

- missing \`source_basis\`
- missing \`confidence\`
- unsupported verified claim
- high-risk source used as summary basis
- broken relationship link
- duplicate ID
- missing phase group
- missing domain
- card without related work
- lens without diagnostic questions
- workflow without output artifact
- lesson without exercise
- prompt without guardrails
- evidence_ref missing required field
- evidence_ref broken reference
- metadata_only or unsupported_draft evidence supporting verified claim
- pending sidecar supporting verified claim
- manual quote not explicitly user-provided
- manual quote missing work/source/length
- manual quote too long
- manual quote automated extraction
- manual note not marked user_interpretation
- high-risk source evidence used beyond allowed operations
- promotion request missing reviewer or rationale
- promotion request beyond evidence scope
- promotion review missing reviewer or rationale
- project overlay observation treated as universal doctrine
- playtest observation treated as universal doctrine

## Canonicality Decision

Markdown is the human canonical layer. JSON exports are generated build artifacts for GDKB, graph tools, and search. If Markdown and JSON disagree, regenerate JSON from Markdown and registries before editing exports by hand.
`);

  writeText("11_import_export/seed_import_plan.md", `
# Seed Import Plan

## Import Order

1. SourceDocument records from \`/kb/01_sources/sources.json\`
2. GameDesignWork records from \`/kb/03_works/works.json\`
3. Ontology nodes from \`/kb/02_ontology/ontology.json\`
4. BookDossier Markdown files
5. Claim graph records
6. Card Markdown files
7. DesignLens Markdown files
8. Lesson Markdown files
9. WorkflowPack, Exercise, and PromptTemplate Markdown files
10. ProjectOverlay and ForumThreadTemplate Markdown files when implemented
11. Evidence intake Markdown files when present
12. Derived Artifact nodes for output deliverables
13. Relationship graph
14. Search index

## Pipeline Steps

1. Scan configured \`/kb\` folders only.
2. Parse YAML frontmatter from entity Markdown files.
3. Validate normalized entities against JSON schemas.
4. Extract body section headings and safe excerpts.
5. Normalize IDs and link fields.
6. Validate \`source_basis\` and \`confidence\`.
7. Validate legal status and high-risk quarantine boundaries.
8. Build relationship graph from explicit IDs and routing fields.
9. Generate search index records with safe excerpts only.
10. Produce \`import_report.md\`.
11. Export \`all_entities.json\`, \`all_relationships.json\`, \`search_index.json\`, \`graph_nodes.json\`, and \`graph_edges.json\`.

## GDKB Seed Mapping

| GDKB Table | Source |
|---|---|
| \`kb_entities\` | \`export/all_entities.json\` |
| \`kb_relationships\` | \`export/all_relationships.json\` |
| \`kb_search_documents\` | \`export/search_index.json\` |
| \`kb_sources\` | SourceDocument entities filtered from all_entities |
| \`kb_works\` | GameDesignWork entities filtered from all_entities |
| \`kb_project_overlays\` | ProjectOverlay entities when Prompt 10 implements them |
| \`kb_evidence_refs\` | EvidenceRef entities filtered from all_entities |
| \`kb_evidence_reviews\` | ClaimPromotionReview entities filtered from all_entities |

## Legal Import Boundary

The importer must never unpack archives, parse book PDFs, extract EPUB body text, generate embeddings from quarantined sources, or promote \`metadata_only\` material. It only reads generated KB Markdown and curated JSON registries.

## Command

\`\`\`powershell
node tools/kb_importer/import_kb.js
\`\`\`

Run from the repository root. The script writes exports into \`/kb/11_import_export/export\`.
`);

  writeText("11_import_export/search_index_model.md", `
# Search Index Model

## Purpose

The search index is a safe retrieval surface for GDKB. It is not a raw source text index.

## Fields

| Field | Type | Meaning |
|---|---|---|
| \`id\` | string | Entity ID. |
| \`entity_type\` | string | Entity type. |
| \`title\` | string | Display title. |
| \`summary\` | string | Safe summary from frontmatter or registry metadata. |
| \`body_excerpt_safe\` | string | Safe excerpt from generated KB Markdown, suppressed for metadata-only or quarantined entities. |
| \`domains\` | string[] | Domain IDs. |
| \`phase_groups\` | string[] | Phase names or IDs. |
| \`tags\` | string[] | Controlled and local tags. |
| \`related_works\` | string[] | Work IDs where available. |
| \`confidence\` | enum | Confidence. |
| \`source_basis\` | enum | Provenance basis. |
| \`status\` | string | Workflow status. |
| \`evidence_status\` | string | Human-readable evidence state such as metadata_only, unsupported_draft_no_evidence, evidence_gap_open, or verified_with_evidence. |
| \`is_verified\` | boolean | Whether status or confidence is verified. |
| \`has_evidence_refs\` | boolean | Whether explicit evidence_refs exist. |
| \`evidence_gap_count\` | number | Count of explicit or derived evidence gaps. |
| \`entity_scope\` | enum | general_kb, project_overlay, playtest_log, or draft_scaffold. |
| \`related_evidence_refs\` | string[] | EvidenceRef IDs attached to the entity. |
| \`promotion_status\` | string | Promotion/review status or blocked_no_evidence. |
| \`evidence_gap\` | string | Short gap text when present in frontmatter. |

## Safety Rules

- Do not index high-risk book body text.
- Suppress body excerpts for \`metadata_only\` or quarantined entities.
- Treat generated cards, lenses, lessons, workflows, exercises, and prompts as draft scaffolds unless evidence promotes them.
- Search results must expose \`source_basis\` and \`confidence\` so AI retrieval cannot hide uncertainty.
- Search results must expose \`evidence_status\`, \`entity_scope\`, \`is_verified\`, and \`promotion_status\` so draft, project-specific, playtest-specific, and verified content are not conflated.
`);

  writeText("11_import_export/graph_model.md", `
# Graph Model

## Purpose

The graph model lets GDKB and future tools traverse provenance, routing, production use, learning paths, workflows, deliverables, and evidence gaps.

## Graph Nodes

Graph nodes are all normalized entities exported to:

- \`export/all_entities.json\`
- \`export/graph_nodes.json\`

Node types include:

- SourceDocument
- GameDesignWork
- PhaseGroup
- Domain
- BookDossier
- Claim
- ConceptCard
- FrameworkCard
- QuoteCard
- ComparisonCard
- ApplicationCard
- ChecklistCard
- PromptCard
- DesignLens
- Lesson
- Exercise
- WorkflowPack
- PromptTemplate
- ProjectOverlay
- PlaytestLog
- LegalSidecar
- UserManualNote
- UserManualQuote
- OpenSourceReference
- OfficialMetadataReference
- EvidenceRef
- ClaimPromotionRequest
- ClaimPromotionReview
- EvidenceGap
- EvidenceIntakeBatch
- EvidenceAuditReport
- ForumThreadTemplate
- Artifact

## Graph Edges

Edges use relationship types defined in \`/kb/02_ontology/RELATIONSHIP_MODEL.md\` and exported to:

- \`export/all_relationships.json\`
- \`export/graph_edges.json\`

Primary generated edge families:

- \`belongs_to_phase\`
- \`belongs_to_domain\`
- \`belongs_to_work\`
- \`related_to\`
- \`has_prerequisite\`
- \`cites\`
- \`contains\`
- \`produces_deliverable\`
- \`supports\`
- \`challenges\`
- \`contradicts\`
- \`supported_by\`
- \`challenged_by\`
- \`evidence_for\`
- \`evidence_against\`
- \`promoted_from\`
- \`reviewed_by\`
- \`blocked_by_evidence_gap\`
- \`applies_in_project\`
- \`observed_in_playtest\`

## Broken Link Policy

Broken links are not exported as graph edges. They are reported in \`import_report.md\` as validation issues. This keeps GDKB graph imports clean while preserving repair tasks.

## Evidence Policy

Routing and containment edges do not prove source claims. Provenance, support, comparison, challenge, validation, and supersession edges require evidence before they can be used as knowledge claims.
`);
}

function writeReport(report) {
  const issuesBySeverity = report.issues.reduce((acc, item) => {
    acc[item.severity] = (acc[item.severity] || 0) + 1;
    return acc;
  }, {});
  const issuesByRule = report.issues.reduce((acc, item) => {
    acc[item.rule] = (acc[item.rule] || 0) + 1;
    return acc;
  }, {});
  const topIssues = report.issues.slice(0, 80).map((item) => `| ${item.severity} | ${item.rule} | \`${item.entity_id || ""}\` | ${item.message.replace(/\|/g, "\\|")} |`).join("\n");
  writeText("11_import_export/import_report.md", `
# KB Import Report

## Run Summary

| Field | Value |
|---|---:|
| generated_at | ${report.generated_at} |
| entities_exported | ${report.entities_exported} |
| relationships_exported | ${report.relationships_exported} |
| search_documents_exported | ${report.search_documents_exported} |
| graph_nodes_exported | ${report.graph_nodes_exported} |
| graph_edges_exported | ${report.graph_edges_exported} |
| issues_total | ${report.issues.length} |

## Issue Counts By Severity

\`\`\`json
${JSON.stringify(issuesBySeverity, null, 2)}
\`\`\`

## Issue Counts By Rule

\`\`\`json
${JSON.stringify(issuesByRule, null, 2)}
\`\`\`

## Validation Rules Active

- missing source_basis
- missing confidence
- unsupported verified claim
- high-risk source used as summary basis
- broken relationship link
- duplicate ID
- missing phase group
- missing domain
- card without related work
- lens without diagnostic questions
- workflow without output artifact
- lesson without exercise
- prompt without guardrails
- evidence_ref missing required field
- evidence_ref broken reference
- metadata_only or unsupported_draft evidence supporting verified claim
- pending sidecar supporting verified claim
- manual quote not explicitly user-provided
- manual quote missing work/source/length
- manual quote too long
- manual quote automated extraction
- manual note not marked user_interpretation
- high-risk source evidence used beyond allowed operations
- claim status/confidence conflict
- promotion request missing reviewer or rationale
- promotion request beyond evidence scope
- promotion review missing reviewer or rationale
- project/playtest observation treated as universal doctrine
- evidence packet missing user confirmations
- evidence packet broken source/work/sidecar/note/quote/project/playtest references
- evidence packet references extracted source body text

## Legal Safety Result

The importer read generated KB Markdown and curated JSON registries only. It did not unpack archives, read commercial source bodies, summarize high-risk files, extract quotes, or generate embeddings from quarantined material.

Search excerpts are suppressed for \`metadata_only\` or quarantined entities.

## Top Issues

| Severity | Rule | Entity | Message |
|---|---|---|---|
${topIssues || "| info | none |  | No issues detected. |"}

## Output Files

- \`/kb/11_import_export/export/all_entities.json\`
- \`/kb/11_import_export/export/all_relationships.json\`
- \`/kb/11_import_export/export/search_index.json\`
- \`/kb/11_import_export/export/graph_nodes.json\`
- \`/kb/11_import_export/export/graph_edges.json\`
- \`/kb/11_import_export/graph_overview.md\`
`);
}

function writeGraphOverview(entities, relationships, issues) {
  const nodesByType = entities.reduce((acc, entity) => {
    acc[entity.entity_type] = (acc[entity.entity_type] || 0) + 1;
    return acc;
  }, {});
  const edgesByType = relationships.reduce((acc, edge) => {
    acc[edge.relationship_type] = (acc[edge.relationship_type] || 0) + 1;
    return acc;
  }, {});
  writeText("11_import_export/graph_overview.md", `
# Graph Overview

## Node Counts By Type

\`\`\`json
${JSON.stringify(nodesByType, null, 2)}
\`\`\`

## Edge Counts By Type

\`\`\`json
${JSON.stringify(edgesByType, null, 2)}
\`\`\`

## Export Files

- \`export/graph_nodes.json\`
- \`export/graph_edges.json\`
- \`export/all_relationships.json\`

## Current Graph Quality Notes

- Broken links are excluded from graph edge exports and listed in \`import_report.md\`.
- Routing edges are navigation metadata, not evidence.
- Claims remain weak or unsupported unless future user notes, legal source sidecars, official metadata, project overlays, or playtest logs promote them.
- Current issue count: ${issues.length}
`);
}

function main() {
  ensureDir(IO_DIR);
  ensureDir(SCHEMA_DIR);
  ensureDir(EXPORT_DIR);

  const schemas = createSchemas();
  writeDocsAndSchemas(schemas);

  const parseIssues = [];
  let entities = [...collectJsonEntities(), ...collectMarkdownEntities(parseIssues)];
  const ontology = readJson("02_ontology/ontology.json", {});
  const phaseNames = (ontology.phase_groups || []).map((phase) => phase.name);
  inheritDossierRouting(entities);
  promptTemplateFallbackRouting(entities, phaseNames);
  inheritExerciseRouting(entities);
  addCompatibilityDomainNodes(entities);

  const validationIssues = validateEntities(entities, schemas);
  const graph = buildGraph(entities);
  entities = graph.entities;
  const allIssues = [...parseIssues, ...validationIssues, ...graph.issues];

  const searchIndex = buildSearchIndex(entities);

  const allEntitiesExport = {
    schema_version: "gdkb.all_entities.v1",
    generated_at: TODAY,
    canonical_source: "Markdown frontmatter plus curated JSON registries",
    legal_boundary: "No high-risk source body text read or exported.",
    count: entities.length,
    entities
  };
  const allRelationshipsExport = {
    schema_version: "gdkb.all_relationships.v1",
    generated_at: TODAY,
    relationship_count: graph.relationships.length,
    relationships: graph.relationships
  };
  const searchExport = {
    schema_version: "gdkb.search_index.v1",
    generated_at: TODAY,
    safety_note: "body_excerpt_safe is suppressed for metadata-only or quarantined entities.",
    count: searchIndex.length,
    documents: searchIndex
  };
  const graphNodesExport = {
    schema_version: "gdkb.graph_nodes.v1",
    generated_at: TODAY,
    count: entities.length,
    nodes: entities.map((entity) => ({
      id: entity.id,
      entity_type: entity.entity_type,
      title: entity.title,
      status: entity.status,
      source_basis: entity.source_basis,
      confidence: entity.confidence,
      phase_groups: entity.phase_groups,
      domains: entity.domains,
      tags: entity.tags
    }))
  };
  const graphEdgesExport = {
    schema_version: "gdkb.graph_edges.v1",
    generated_at: TODAY,
    count: graph.relationships.length,
    edges: graph.relationships
  };

  writeJson("11_import_export/export/all_entities.json", allEntitiesExport);
  writeJson("11_import_export/export/all_relationships.json", allRelationshipsExport);
  writeJson("11_import_export/export/search_index.json", searchExport);
  writeJson("11_import_export/export/graph_nodes.json", graphNodesExport);
  writeJson("11_import_export/export/graph_edges.json", graphEdgesExport);
  writeJson("11_import_export/export/validation_issues.json", {
    schema_version: "gdkb.validation_issues.v1",
    generated_at: TODAY,
    count: allIssues.length,
    issues: allIssues
  });

  const report = {
    generated_at: TODAY,
    entities_exported: entities.length,
    relationships_exported: graph.relationships.length,
    search_documents_exported: searchIndex.length,
    graph_nodes_exported: graphNodesExport.count,
    graph_edges_exported: graphEdgesExport.count,
    issues: allIssues
  };
  writeReport(report);
  writeGraphOverview(entities, graph.relationships, allIssues);

  console.log(JSON.stringify({
    entities: entities.length,
    relationships: graph.relationships.length,
    search_documents: searchIndex.length,
    issues: allIssues.length,
    errors: allIssues.filter((item) => item.severity === "error").length,
    warnings: allIssues.filter((item) => item.severity === "warning").length
  }, null, 2));
}

main();
