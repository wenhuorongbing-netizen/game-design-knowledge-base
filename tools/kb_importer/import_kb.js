#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
const KB_DIR = path.join(ROOT, "kb");
const IO_DIR = path.join(KB_DIR, "11_import_export");
const SCHEMA_DIR = path.join(IO_DIR, "schemas");
const EXPORT_DIR = path.join(IO_DIR, "export");
const TODAY = "2026-04-27";

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
  "Claim"
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
  { dir: "09_project_overlays/playtest_logs", defaultType: "PlaytestLog" }
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

function listMarkdownFiles(relDir) {
  const dir = path.join(KB_DIR, relDir);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .filter((name) => name.toLowerCase() !== "readme.md")
    .filter((name) => !name.toLowerCase().endsWith("_template.md"))
    .filter((name) => !name.toLowerCase().endsWith("-template.md"))
    .filter((name) => name.toLowerCase() !== "project_overlay_template.md")
    .map((name) => path.join(dir, name));
}

function collectMarkdownEntities(issues) {
  const entities = [];
  for (const scan of ENTITY_SCAN_DIRS) {
    for (const filePath of listMarkdownFiles(scan.dir)) {
      const markdown = readText(filePath);
      const { frontmatter, body } = parseFrontmatter(markdown);
      if (!frontmatter) {
        issues.push(issue("warning", "missing_frontmatter", path.relative(ROOT, filePath), "Markdown entity candidate has no YAML frontmatter."));
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
      ingestion_status: { type: "string" }
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
    "project_overlay.schema.json": schema("GDKB ProjectOverlay", "ProjectOverlay", ["project_id"], {
      project_id: { type: "string" },
      linked_workflows: { type: "array", items: { type: "string" } },
      design_decisions: { type: "array", items: { type: "string" } },
      playtest_logs: { type: "array", items: { type: "string" } }
    }),
    "playtest_log.schema.json": schema("GDKB PlaytestLog", "PlaytestLog", ["project_id", "playtest_log_id"], {
      project_id: { type: "string" },
      playtest_log_id: { type: "string" },
      test_question: { type: "string" },
      tested_artifact: { type: "string" },
      participant_profile: { type: "string" },
      evidence_gap: { type: "string" },
      related_workflows: { type: "array", items: { type: "string" } },
      related_lenses: { type: "array", items: { type: "string" } },
      observed_findings: { type: "array", items: { type: "string" } },
      next_actions: { type: "array", items: { type: "string" } }
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
    PlaytestLog: "playtest_log.schema.json"
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

function validateEntities(entities, schemas) {
  const issues = [];
  const seen = new Map();
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
    if (KNOWLEDGE_ENTITY_TYPES.has(entity.entity_type) && entity.entity_type !== "PromptTemplate") {
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

function buildSearchIndex(entities) {
  return entities
    .filter((entity) => !["Artifact"].includes(entity.entity_type))
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
      status: entity.status
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
11. Derived Artifact nodes for output deliverables
12. Relationship graph
13. Search index

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

## Safety Rules

- Do not index high-risk book body text.
- Suppress body excerpts for \`metadata_only\` or quarantined entities.
- Treat generated cards, lenses, lessons, workflows, exercises, and prompts as draft scaffolds unless evidence promotes them.
- Search results must expose \`source_basis\` and \`confidence\` so AI retrieval cannot hide uncertainty.
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
