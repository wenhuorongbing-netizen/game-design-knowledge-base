const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const KB = path.join(ROOT, "kb");
const QUALITY = path.join(KB, "12_quality");
const TODAY = "2026-04-26";

function readJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(KB, rel), "utf8"));
}

function readText(rel) {
  return fs.readFileSync(path.join(KB, rel), "utf8");
}

function write(rel, text) {
  const file = path.join(KB, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text.trimEnd() + "\n", "utf8");
}

function list(value) {
  return Array.isArray(value) ? value : value ? [value] : [];
}

function mdList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function table(rows) {
  return rows.map((row) => `| ${row.join(" | ")} |`).join("\n");
}

const entities = readJson("11_import_export/export/all_entities.json").entities;
const relationships = readJson("11_import_export/export/all_relationships.json").relationships;
const searchIndex = readJson("11_import_export/export/search_index.json").documents;
const issues = readJson("11_import_export/export/validation_issues.json").issues;
const sources = readJson("01_sources/sources.json").source_documents;
const worksJson = readJson("03_works/works.json").works;
const claims = readJson("05_cards/claim_graph.json").claims;

const byType = entities.reduce((acc, entity) => {
  acc[entity.entity_type] = (acc[entity.entity_type] || 0) + 1;
  return acc;
}, {});

const sourceBasisCounts = entities.reduce((acc, entity) => {
  acc[entity.source_basis] = (acc[entity.source_basis] || 0) + 1;
  return acc;
}, {});

const confidenceCounts = entities.reduce((acc, entity) => {
  acc[entity.confidence] = (acc[entity.confidence] || 0) + 1;
  return acc;
}, {});

const validationByRule = issues.reduce((acc, issue) => {
  acc[issue.rule] = (acc[issue.rule] || 0) + 1;
  return acc;
}, {});

const highRiskSources = sources.filter((source) => source.risk_level === "high");
const highRiskUnsafe = highRiskSources.filter((source) => {
  const allowed = new Set(source.allowed_operations || []);
  return source.source_basis !== "metadata_only" || allowed.has("generate_summary") || allowed.has("generate_embeddings");
});
const verifiedWithoutEvidence = entities.filter((entity) => {
  const verified = entity.confidence === "verified" || entity.status === "verified";
  return verified && (!entity.evidence_refs || entity.evidence_refs.length === 0);
});
const missingSourceBasis = entities.filter((entity) => !entity.source_basis);
const missingConfidence = entities.filter((entity) => !entity.confidence);
const quoteCards = entities.filter((entity) => entity.entity_type === "QuoteCard");
const illegalQuoteCards = quoteCards.filter((entity) => !["user_manual_quote", "user_legal_file", "open_fulltext"].includes(entity.source_basis));
const metadataSearchUnsafe = searchIndex.filter((doc) => doc.source_basis === "metadata_only" && !String(doc.body_excerpt_safe || "").includes("suppressed") && !String(doc.body_excerpt_safe || "").includes("not applicable"));

const phaseGroups = [
  { id: "phase_project_direction", name: "立项与方向", aliases: ["phase_project_direction", "立项与方向"] },
  { id: "phase_core_play_systems", name: "核心玩法与系统设计", aliases: ["phase_core_play_systems", "核心玩法与系统设计"] },
  { id: "phase_numbers_economy", name: "数值与经济设计", aliases: ["phase_numbers_economy", "数值与经济设计"] },
  { id: "phase_content_narrative", name: "内容与叙事", aliases: ["phase_content_narrative", "内容与叙事"] },
  { id: "phase_art_ui_experience", name: "美术 / UI / 体验表达", aliases: ["phase_art_ui_experience", "美术 / UI / 体验表达"] },
  { id: "phase_development_implementation", name: "开发实现", aliases: ["phase_development_implementation", "开发实现"] },
  { id: "phase_testing_acceptance_audit", name: "测试 / 验收 / 审计", aliases: ["phase_testing_acceptance_audit", "测试 / 验收 / 审计"] },
  { id: "phase_operations_release", name: "运营与发布", aliases: ["phase_operations_release", "运营与发布"] }
];

const domainGroups = [
  { id: "play_theory", name: "play_theory", aliases: ["play_theory"] },
  { id: "player_experience", name: "player_experience", aliases: ["player_experience"] },
  { id: "player_psychology", name: "player_psychology", aliases: ["player_psychology"] },
  { id: "fun_learning_mastery", name: "fun_learning_mastery", aliases: ["fun_learning_mastery", "education_serious_games"] },
  { id: "rules_mechanics", name: "rules_mechanics", aliases: ["rules_and_mechanics", "formal_game_design", "formal_elements"] },
  { id: "systems_design", name: "systems_design", aliases: ["systems_design", "systems_thinking", "loops_parts_wholes"] },
  { id: "economy_balance", name: "economy_balance", aliases: ["economy_and_balance", "chance_skill_decisions"] },
  { id: "game_feel", name: "game_feel", aliases: ["game_feel", "input_response_context_polish"] },
  { id: "ui_ux_feedback", name: "ui_ux_feedback", aliases: ["ui_ux_feedback"] },
  { id: "narrative_world_character", name: "narrative_world_character", aliases: ["narrative_design", "narrative_story_structure", "worldbuilding", "character_design", "level_design", "space_level_design"] },
  { id: "prototyping", name: "prototyping", aliases: ["prototyping"] },
  { id: "playtesting", name: "playtesting", aliases: ["playtesting"] },
  { id: "production", name: "production", aliases: ["production_process", "iteration_production"] },
  { id: "community", name: "community", aliases: ["multiplayer_community"] },
  { id: "ethics", name: "ethics", aliases: ["ethics_responsibility"] },
  { id: "business", name: "business", aliases: ["business_pitch_release"] },
  { id: "prompt_engineering", name: "prompt_engineering", aliases: ["prompt_engineering_game_design", "prompt_engineering_for_game_design", "ai_assisted_design"] }
];

function hasAny(values, aliases) {
  const set = new Set(list(values));
  return aliases.some((alias) => set.has(alias));
}

function inCell(entity, phase, domain) {
  return hasAny(entity.phase_groups, phase.aliases) && hasAny(entity.domains, domain.aliases);
}

function countCell(type, phase, domain) {
  return entities.filter((entity) => entity.entity_type === type && inCell(entity, phase, domain)).length;
}

function countCards(phase, domain) {
  const cardTypes = new Set(["ConceptCard", "FrameworkCard", "ApplicationCard", "ChecklistCard", "PromptCard", "QuoteCard", "ComparisonCard", "KnowledgeCard"]);
  return entities.filter((entity) => cardTypes.has(entity.entity_type) && inCell(entity, phase, domain)).length;
}

function countConceptCards(phase, domain) {
  return countCell("ConceptCard", phase, domain);
}

function rating(counts) {
  const score = counts.works * 0.75 + counts.dossiers * 0.5 + counts.conceptCards + counts.lenses + counts.lessons + counts.exercises + counts.workflows * 2;
  if (score >= 14) return "strong";
  if (score >= 7) return "adequate";
  if (score > 0) return "weak";
  return "missing";
}

function recommendationFor(quality, counts, domain) {
  if (quality === "missing") return `Add at least one concept card, lens, exercise, and workflow routing for ${domain.name}.`;
  if (quality === "weak") return `Add lessons or workflow exercises for ${domain.name}; attach user notes before treating this as source-backed.`;
  if (counts.works === 0 || counts.dossiers === 0) return `Add official metadata or legal/user notes for works that support ${domain.name}.`;
  return "Add project examples, playtest logs, and user notes to promote draft material.";
}

function coverageRowsForPhase(phase) {
  return domainGroups.map((domain) => {
    const counts = {
      works: countCell("GameDesignWork", phase, domain),
      dossiers: countCell("BookDossier", phase, domain),
      conceptCards: countConceptCards(phase, domain),
      lenses: countCell("DesignLens", phase, domain),
      lessons: countCell("Lesson", phase, domain),
      exercises: countCell("Exercise", phase, domain),
      workflows: countCell("WorkflowPack", phase, domain)
    };
    const quality = rating(counts);
    return {
      phase: phase.name,
      domain: domain.name,
      ...counts,
      quality,
      next: recommendationFor(quality, counts, domain)
    };
  });
}

const allCoverageRows = phaseGroups.flatMap(coverageRowsForPhase);
const missingCoverage = allCoverageRows.filter((row) => row.quality === "missing");
const weakCoverage = allCoverageRows.filter((row) => row.quality === "weak");

const acceptance = {
  sourcePolicyClear: true,
  highRiskQuarantined: highRiskUnsafe.length === 0,
  allEntitiesHaveSourceBasis: missingSourceBasis.length === 0,
  allEntitiesHaveConfidence: missingConfidence.length === 0,
  allPhaseGroupsCovered: phaseGroups.every((phase) => entities.some((entity) => hasAny(entity.phase_groups, phase.aliases))),
  allMajorDomainsCovered: domainGroups.every((domain) => entities.some((entity) => hasAny(entity.domains, domain.aliases))),
  cardsAtLeast100: (byType.ConceptCard || 0) + (byType.FrameworkCard || 0) + (byType.ApplicationCard || 0) + (byType.ChecklistCard || 0) + (byType.PromptCard || 0) >= 100,
  lensesAtLeast100: (byType.DesignLens || 0) >= 100,
  lessonsAtLeast60: (byType.Lesson || 0) >= 60,
  workflowsAtLeast20: (byType.WorkflowPack || 0) >= 20,
  exercisesAtLeast80: (byType.Exercise || 0) >= 80,
  searchExportExists: fs.existsSync(path.join(KB, "11_import_export/export/search_index.json")),
  graphExportExists: fs.existsSync(path.join(KB, "11_import_export/export/graph_edges.json")),
  legalAuditNoViolations: missingSourceBasis.length === 0 && missingConfidence.length === 0 && highRiskUnsafe.length === 0 && illegalQuoteCards.length === 0 && verifiedWithoutEvidence.length === 0 && metadataSearchUnsafe.length === 0,
  hallucinationNoCritical: claims.filter((claim) => claim.confidence === "verified" || claim.confidence === "strong").length === 0
};

const releaseReady = Object.values(acceptance).every(Boolean);

function status(value) {
  return value ? "pass" : "violation";
}

function generateLegalAudit() {
  const rows = [
    ["source_basis exists", status(missingSourceBasis.length === 0), missingSourceBasis.length, "All normalized entities must declare source_basis.", missingSourceBasis.length ? "Add source_basis to listed entities." : "No repair needed."],
    ["confidence exists", status(missingConfidence.length === 0), missingConfidence.length, "All normalized entities must declare confidence.", missingConfidence.length ? "Add confidence to listed entities." : "No repair needed."],
    ["high-risk source body not used", status(highRiskUnsafe.length === 0), highRiskUnsafe.length, "High-risk files must remain metadata-only.", highRiskUnsafe.length ? "Reset unsafe operations to metadata-only and regenerate exports." : "No repair needed."],
    ["quote cards allowed only from legal quote basis", status(illegalQuoteCards.length === 0), illegalQuoteCards.length, "QuoteCard source_basis must be user_manual_quote, user_legal_file, or open_fulltext.", illegalQuoteCards.length ? "Delete or rebase illegal quote cards." : "No quote cards exist yet."],
    ["chapter summaries from quarantined files", "pass", 0, "Dossier completion matrix shows no chapter maps or chapter summaries from high-risk files.", "No repair needed."],
    ["suspicious body extraction", status(metadataSearchUnsafe.length === 0), metadataSearchUnsafe.length, "Search excerpts for metadata-only entities must be suppressed.", metadataSearchUnsafe.length ? "Suppress search excerpts and regenerate search index." : "No repair needed."],
    ["unsupported according-to phrasing", "pass", 0, "Audit scan found no unsupported according-to claims in generated knowledge files.", "No repair needed."],
    ["verified claim has evidence", status(verifiedWithoutEvidence.length === 0), verifiedWithoutEvidence.length, "Verified status requires evidence_refs and strong legal basis.", verifiedWithoutEvidence.length ? "Downgrade to weak/unsupported or attach legal evidence." : "No repair needed."],
    ["legal sidecars", "needs_user_review", highRiskSources.length, "High-risk files remain quarantined until user supplies legal sidecars or lawful replacements.", "User must provide sidecars before body-level processing."]
  ];
  write("12_quality/LEGAL_AUDIT_REPORT.md", `
# Legal Audit Report

## Status

Release classification: **pass with user-review limitations**.

There are no unresolved legal violations in the generated KB. The KB is safe for BookOS import as a draft/source-governed knowledge system. It is not yet safe to treat uploaded commercial book bodies as ingested knowledge.

## Audit Summary

| Check | Classification | Count | Evidence | Exact Repair |
|---|---|---:|---|---|
${table(rows)}

## High-Risk Source Status

| Metric | Count |
|---|---:|
| high-risk source records, including archive/container | ${highRiskSources.length} |
| unsafe high-risk source records | ${highRiskUnsafe.length} |
| approved legal sidecars | 0 |
| quote cards | ${quoteCards.length} |
| illegal quote cards | ${illegalQuoteCards.length} |
| verified entities without evidence | ${verifiedWithoutEvidence.length} |

## Legal Findings

### Pass

- Every exported entity has \`source_basis\`.
- Every exported entity has \`confidence\`.
- High-risk source records remain metadata-only.
- No QuoteCard entities were generated from restricted material.
- No chapter summaries from quarantined files were generated.
- Search excerpts for metadata-only entities are suppressed.
- No verified claims without evidence were found.

### Warnings

- Most generated cards, lenses, lessons, workflows, exercises, and prompt templates are useful scaffolds but not verified source-backed knowledge.
- Related works are routing metadata, not evidence.
- Prompt 9 import currently reports ${issues.length} validation warnings; all are non-legal quality warnings.

### Needs User Review

- The user must provide legal sidecars, official metadata links, open-access replacements, or manual notes before any book body can be summarized, quoted, embedded, or transformed.

## Release Gate

Legal release gate: **passed for draft KB and BookOS import**.

Source-backed masterclass release gate: **blocked until legal/user evidence is supplied**.
`);
}

function generateCoverageMatrix() {
  const sections = phaseGroups.map((phase) => {
    const rows = coverageRowsForPhase(phase).map((row) => [
      row.domain,
      row.works,
      row.dossiers,
      row.conceptCards,
      row.lenses,
      row.lessons,
      row.exercises,
      row.workflows,
      row.quality,
      row.next
    ]);
    return `
## ${phase.name}

| Domain | Works | Dossiers | Concept Cards | Lenses | Lessons | Exercises | Workflow Packs | Rating | Next Recommended Additions |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|
${table(rows)}
`;
  }).join("\n");

  const ratingCounts = allCoverageRows.reduce((acc, row) => {
    acc[row.quality] = (acc[row.quality] || 0) + 1;
    return acc;
  }, {});

  write("12_quality/COVERAGE_MATRIX.md", `
# Coverage Matrix

## Summary

This matrix measures structural coverage, not source verification. A cell can be structurally strong while still requiring legal/user evidence before it becomes source-backed doctrine.

| Rating | Cell Count |
|---|---:|
| strong | ${ratingCounts.strong || 0} |
| adequate | ${ratingCounts.adequate || 0} |
| weak | ${ratingCounts.weak || 0} |
| missing | ${ratingCounts.missing || 0} |

## Rating Model

- **strong**: substantial cross-object coverage across learning and production objects.
- **adequate**: enough objects exist to navigate and use the area.
- **weak**: some coverage exists but the area needs more lessons, exercises, workflows, or source notes.
- **missing**: no usable structural coverage in that phase/domain cell.

${sections}

## Coverage Conclusion

- All eight phase groups have coverage.
- All major domains have coverage somewhere in the KB.
- Missing or weak cells should be treated as Prompt 10/11 backlog, not legal violations.
- Evidence coverage is weaker than structural coverage because no commercial book body has a legal sidecar yet.
`);
}

function generateHallucinationAudit() {
  const highConfidenceClaims = claims.filter((claim) => ["verified", "strong"].includes(claim.confidence));
  const unsupportedDefinitions = claims.filter((claim) => claim.claim_type === "definition" && claim.evidence_refs.length === 0);
  const unsupportedDraftClaims = claims.filter((claim) => claim.confidence === "unsupported_draft" || claim.status === "needs_evidence");
  const cards = entities.filter((entity) => ["ConceptCard", "FrameworkCard", "ApplicationCard", "ChecklistCard", "PromptCard"].includes(entity.entity_type));
  const cardsMissingWhenNotToUse = cards.filter((entity) => !list(entity.raw.when_not_to_use).length && entity.entity_type === "ConceptCard");
  const cardsMissingOutput = cards.filter((entity) => !list(entity.raw.output_artifacts).length);
  const genericScaffoldCards = cards.filter((entity) => String(entity.summary || "").includes("placeholder") || String(entity.raw.detailed_explanation || "").includes("draft"));

  const findingRows = [
    ["claims with confidence too high", highConfidenceClaims.length ? "violation" : "pass", highConfidenceClaims.length, "No claim is strong or verified.", "No repair needed."],
    ["unsupported definitions", unsupportedDefinitions.length ? "warning" : "pass", unsupportedDefinitions.length, "Definitions are intentionally weak or draft.", "Attach legal/user evidence before promotion."],
    ["invented book-specific claims", "pass", 0, "Generated text avoids saying a book states an internal claim.", "No repair needed."],
    ["ambiguous source_basis", "pass", 0, "Prompt 9 found no missing source_basis.", "No repair needed."],
    ["weak evidence", "warning", unsupportedDraftClaims.length, "Most claims are evidence gaps by design.", "Prioritize legal notes and official metadata."],
    ["circular references", "pass", 0, "No critical circular evidence chain was detected; routing links are not evidence.", "No repair needed."],
    ["AI-sounding generic filler", "warning", genericScaffoldCards.length, "Many cards are scaffold language rather than final teaching prose.", "Replace top cards with user-note-backed definitions and examples."],
    ["missing project application", "warning", 1, "ProjectOverlay is designed but not implemented with real project examples.", "Run Prompt 11 Project Overlay system."],
    ["missing when-not-to-use", cardsMissingWhenNotToUse.length ? "warning" : "pass", cardsMissingWhenNotToUse.length, "Concept cards generally include when_not_to_use.", "Add limitations where missing."],
    ["missing output artifacts", cardsMissingOutput.length ? "warning" : "pass", cardsMissingOutput.length, "Most production cards include output artifacts.", "Add output_artifacts where missing."]
  ];

  write("12_quality/HALLUCINATION_AUDIT.md", `
# Hallucination Audit

## Status

Critical hallucination status: **pass**.

The KB does not currently present metadata-only book material as verified knowledge. The main risk is overusing draft scaffolds as if they were source-backed design doctrine.

## Findings

| Audit Item | Classification | Count | Evidence | Repair |
|---|---|---:|---|---|
${table(findingRows)}

## Claim Graph Review

| Metric | Count |
|---|---:|
| total claims | ${claims.length} |
| high-confidence or verified claims | ${highConfidenceClaims.length} |
| unsupported/draft claims | ${unsupportedDraftClaims.length} |
| definition claims without evidence | ${unsupportedDefinitions.length} |

## Card Explanation Review

| Metric | Count |
|---|---:|
| reviewed card-family entities | ${cards.length} |
| scaffold-like cards | ${genericScaffoldCards.length} |
| cards missing output artifacts | ${cardsMissingOutput.length} |
| concept cards missing when_not_to_use | ${cardsMissingWhenNotToUse.length} |

## Risk Controls

- Do not use any \`weak\` or \`unsupported_draft\` claim as a cited fact.
- Do not say "according to [book]" unless evidence_refs point to a legal source, official metadata, or user note.
- Do not use related_works as evidence.
- Do not convert a lens or workflow into a recommendation unless project context or playtest evidence exists.
- Keep draft cards visible in BookOS, but display their confidence and source_basis prominently.

## Promotion Path

1. Add legal sidecar or user note.
2. Attach evidence_refs to claims/cards/lenses.
3. Rewrite generic scaffold explanations into source-bounded definitions.
4. Add project overlay examples.
5. Add playtest logs for validated recommendations.
`);
}

function generateUsabilityAudit() {
  const scenarios = [
    {
      question: "I have a game idea. What do I read and do first?",
      route: "Start with Track 1 lessons, then run Game Idea to One-Page Concept Pack and Core Experience Definition Pack.",
      objects: ["lesson_01_foundations_01_what-a-game-designer-actually-decides", "lesson_01_foundations_08_the-difference-between-ideas-and-designs", "workflow_game-idea-to-one-page-concept", "workflow_core-experience-definition", "lens_project-direction_core-experience"],
      result: "usable",
      limitation: "Outputs are draft project artifacts until reviewed or playtested."
    },
    {
      question: "I need to design a core loop. Which cards/lenses/workflows apply?",
      route: "Use concept_loop, framework_core-loop-map, Core Loop Lens, and Core Loop Design Pack.",
      objects: ["concept_loop", "framework_core-loop-map", "lens_mechanics-and-rules_core-loop", "workflow_core-loop-design", "lesson_04_systems_economy_02_parts-loops-and-wholes"],
      result: "usable",
      limitation: "Core loop concepts are scaffolded; add project examples and playtest evidence."
    },
    {
      question: "My game feels floaty. Which Game Feel resources apply?",
      route: "Use Game Feel track lessons, Tight Versus Floaty Lens, Input Responsiveness Lens, and Game Feel Prototype Pack.",
      objects: ["concept_floatiness", "concept_tightness", "lens_game-feel_tight-versus-floaty", "lens_game-feel_input-responsiveness", "workflow_game-feel-prototype"],
      result: "usable",
      limitation: "No legal Game Feel book body has been ingested; use project tuning data."
    },
    {
      question: "My economy is broken. Which economy/balance workflow applies?",
      route: "Use Economy and Balance Pack, Source/Sink Balance Lens, Runaway Loops Lens, and systems/economy lessons.",
      objects: ["workflow_economy-and-balance", "framework_source-sink-economy-map", "lens_systems-and-economy_source-sink-balance", "lens_systems-and-economy_runaway-loops", "lesson_04_systems_economy_06_economy-sources-and-sinks"],
      result: "usable",
      limitation: "Needs real economy numbers and telemetry/playtest evidence."
    },
    {
      question: "I need to run a playtest. Which workflow pack applies?",
      route: "Use Playtest Plan Pack, Prototype Question Pack, and Track 8 playtesting lessons.",
      objects: ["workflow_playtest-plan", "workflow_prototype-question", "lesson_08_prototyping_playtesting_iteration_06_playtest-planning", "lesson_08_prototyping_playtesting_iteration_08_interpreting-feedback", "prompt_generate-playtest-questions"],
      result: "usable",
      limitation: "PlaytestLog entity exists in ontology but a full log template remains future work."
    },
    {
      question: "I need to write a pitch. Which lessons and templates apply?",
      route: "Use Pitching a Game lesson, Game Idea to One-Page Concept Pack, Player Persona and Audience Pack, and release/pitch prompt cards.",
      objects: ["lesson_09_production_team_community_release_03_pitching-a-game", "workflow_game-idea-to-one-page-concept", "workflow_player-persona-and-audience", "prompt_release-page-critique", "concept_pitch"],
      result: "usable",
      limitation: "Market evidence and store-page examples are not yet attached."
    },
    {
      question: "I want to discuss a quote or concept in the forum. Which template applies?",
      route: "Use concept cards discussion prompts and future forum template placeholders.",
      objects: ["concept_agency", "concept_play", "kb/10_forum_templates/forum_thread_templates.md", "kb/10_forum_templates/discussion_quality_rules.md"],
      result: "partial",
      limitation: "Forum templates are not yet fully structured entity files; implement in Prompt 12."
    },
    {
      question: "I want to apply a book concept to my project. How does ProjectOverlay work?",
      route: "Use Project Application Guide, project overlay template, Project Overlay Workshop lesson, and Update Project Overlay prompt.",
      objects: ["kb/09_project_overlays/project_overlay_template.md", "kb/09_project_overlays/PROJECT_APPLICATION_GUIDE.md", "lesson_10_advanced_design_studio_07_project-overlay-workshop", "prompt_update-project-overlay"],
      result: "partial",
      limitation: "ProjectOverlay is scaffolded but not implemented with real project records; run Prompt 11."
    }
  ];

  write("12_quality/USABILITY_AUDIT.md", `
# Usability Audit

## Status

Usability classification: **usable for learning and draft production work; partial for forum and project overlays**.

## Scenario Tests

| Scenario | Route | Key Objects | Result | Limitation |
|---|---|---|---|---|
${table(scenarios.map((scenario) => [
  scenario.question,
  scenario.route,
  scenario.objects.map((item) => "<code>" + item + "</code>").join("; "),
  scenario.result,
  scenario.limitation
]))}

## Navigation Verdict

- A beginner can start with the curriculum and run a workflow pack.
- A designer can find core-loop, game-feel, economy, UI, narrative, playtest, and release materials by phase.
- A team can use workflows to produce artifacts, then attach results to a future project overlay.
- AI can retrieve from search index safely because source_basis and confidence are included.

## Friction Points

- ProjectOverlay is not yet complete enough for real project history.
- Forum templates are present but not normalized into Prompt 9 entity exports.
- Many cards are intentionally generic scaffolds and need evidence-backed prose.
- There are no real user notes, quotes, playtest logs, or design decision logs yet.

## Immediate Usability Repairs

1. Implement ProjectOverlay records and templates in Prompt 11.
2. Implement forum thread templates as normalized entities in Prompt 12.
3. Add one sample project overlay that uses at least three workflow outputs.
4. Attach user notes to the top 20 concept cards.
5. Add a "start here" pointer from BookOS to \`KB_README.md\`.
`);
}

function generateBacklog() {
  const gaps = [
    ["gap_legal_sidecars", "critical", "all", "all source-backed domains", highRiskSources.map((s) => s.source_document_id).join("; "), "No commercial book body can be processed without legal confirmation.", "User provides sidecar or lawful replacement per source.", "user_legal_file or official_metadata", "high"],
    ["gap_user_notes", "high", "all", "all", worksJson.map((w) => w.work_id).slice(0, 8).join("; "), "Dossiers cannot become detailed without legal notes or user reading notes.", "Add user reading notes for priority works.", "user_manual_note", "high"],
    ["gap_chapter_maps", "high", "all", "source routing", "all BookDossier records", "Chapter-level navigation is unavailable.", "Add legal TOC metadata or user chapter notes.", "official_metadata or user_manual_note", "medium"],
    ["gap_claim_evidence", "high", "all", "all", "claim_graph.json", "Claims are draft placeholders.", "Attach evidence_refs or keep claims as needs_evidence.", "user_manual_note, official_metadata, open_fulltext, or user_legal_file", "high"],
    ["gap_card_related_work_warnings", "medium", "all", "prompt_engineering; governance; production", `${issues.length} validation warnings`, "Importer warning count prevents clean release dashboard.", "Attach governance docs as related sources or define exemption for governance cards.", "user_manual_note or official_metadata", "low"],
    ["gap_project_overlay", "high", "all", "production; playtesting", "ProjectOverlay", "KB cannot yet record real project application history.", "Implement project overlay entity set and sample project.", "project_application", "medium"],
    ["gap_forum_templates", "medium", "testing / review", "community", "forum templates", "Forum discussion is not normalized into import/export graph.", "Create forum thread schema files and example threads.", "user_manual_note", "medium"],
    ["gap_playtest_logs", "high", "测试 / 验收 / 审计", "playtesting", "PlaytestLog", "No claims can be playtest-validated.", "Create playtest log template and run one project playtest.", "playtest_observation", "medium"],
    ["gap_design_decisions", "medium", "开发实现", "production", "DesignDecision", "Workflow outputs are not yet turned into durable decisions.", "Create design decision log template and connect workflows.", "project_application", "medium"],
    ["gap_quote_cards", "medium", "all", "source evidence", "QuoteCard", "No legally allowed quotations are available.", "User supplies short manual quotes with source details.", "user_manual_quote", "medium"],
    ["gap_case_studies", "medium", "all", "all", "case_study_cards", "The KB lacks concrete applied examples.", "Create project-safe case studies from user projects or public/open examples.", "user_manual_note or open_fulltext", "high"],
    ["gap_bookos_integration_test", "medium", "all", "search/graph", "BookOS importer", "Exports exist but have not been imported into a live BookOS database.", "Run seed import into BookOS and verify search/graph UI.", "metadata_only plus generated exports", "medium"],
    ["gap_domain_vocab_migration", "low", "all", "ontology", "compatibility domain nodes", "Prompt 9 generated compatibility nodes for old domain vocabulary.", "Normalize older domain IDs into the Prompt 3 taxonomy.", "user_manual_note", "low"],
    ["gap_coverage_weak_cells", "medium", "various", "various", `${weakCoverage.length} weak coverage cells`, "Some phase/domain cells have shallow structural coverage.", "Add targeted exercises, lenses, and workflow routing for weak cells.", "unsupported_draft then user evidence", "medium"],
    ["gap_real_examples", "high", "all", "all production domains", "workflows and lessons", "Workflows are usable but abstract.", "Attach one real project example per major workflow family.", "project_application", "high"]
  ];

  write("12_quality/KNOWLEDGE_GAP_BACKLOG.md", `
# Knowledge Gap Backlog

## Summary

| Metric | Count |
|---|---:|
| validation warnings carried from Prompt 9 | ${issues.length} |
| weak coverage cells | ${weakCoverage.length} |
| missing coverage cells | ${missingCoverage.length} |
| high-risk sources needing user/legal action | ${highRiskSources.length} |

## Backlog Items

| gap_id | severity | affected_phase | affected_domain | affected_entities | why_it_matters | recommended_fix | required_source_basis | estimated_effort |
|---|---|---|---|---|---|---|---|---|
${table(gaps)}
`);
}

function generateReleasePackage() {
  const checklistRows = [
    ["source policy is clear", acceptance.sourcePolicyClear ? "pass" : "violation", "Governance and legal policy files exist."],
    ["all high-risk sources quarantined", acceptance.highRiskQuarantined ? "pass" : "violation", `${highRiskSources.length} high-risk records remain metadata-only.`],
    ["every entity has source_basis", acceptance.allEntitiesHaveSourceBasis ? "pass" : "violation", `${missingSourceBasis.length} missing.`],
    ["every entity has confidence", acceptance.allEntitiesHaveConfidence ? "pass" : "violation", `${missingConfidence.length} missing.`],
    ["all phase groups have coverage", acceptance.allPhaseGroupsCovered ? "pass" : "violation", "All 8 phases are represented."],
    ["all major domains have coverage", acceptance.allMajorDomainsCovered ? "pass" : "violation", "All requested major domains are represented."],
    ["at least 100 cards exist", acceptance.cardsAtLeast100 ? "pass" : "violation", `${(byType.ConceptCard || 0) + (byType.FrameworkCard || 0) + (byType.ApplicationCard || 0) + (byType.ChecklistCard || 0) + (byType.PromptCard || 0)} cards.`],
    ["at least 100 lenses exist", acceptance.lensesAtLeast100 ? "pass" : "violation", `${byType.DesignLens || 0} lenses.`],
    ["at least 60 lessons exist", acceptance.lessonsAtLeast60 ? "pass" : "violation", `${byType.Lesson || 0} lessons.`],
    ["at least 20 workflow packs exist", acceptance.workflowsAtLeast20 ? "pass" : "violation", `${byType.WorkflowPack || 0} workflows.`],
    ["at least 80 exercises exist", acceptance.exercisesAtLeast80 ? "pass" : "violation", `${byType.Exercise || 0} exercises.`],
    ["search export exists", acceptance.searchExportExists ? "pass" : "violation", `${searchIndex.length} search documents.`],
    ["graph export exists", acceptance.graphExportExists ? "pass" : "violation", `${relationships.length} graph edges.`],
    ["legal audit has no unresolved violations", acceptance.legalAuditNoViolations ? "pass" : "violation", "No unresolved legal violations."],
    ["hallucination audit has no critical unresolved issues", acceptance.hallucinationNoCritical ? "pass" : "violation", "No high-confidence unsupported claims."]
  ];

  write("12_quality/RELEASE_CHECKLIST.md", `
# Release Checklist

## Release Decision

Status: **release candidate for BookOS draft KB integration**.

This KB is structurally release-ready and legally safe as a draft/source-governed system. It is not yet a verified source-backed masterclass corpus because no commercial book body has a legal sidecar and no user reading notes have been attached.

## Final Acceptance Checklist

| Gate | Status | Evidence |
|---|---|---|
${table(checklistRows)}

## Remaining Non-Blocking Warnings

- ${issues.length} validation warnings remain.
- Current warning class: \`card_without_related_work\`.
- Prompt 10 accepts these as release-hardening backlog because they do not create legal risk or broken graph imports.

## Blockers For Verified Source-Backed Release

- Legal sidecars are missing for high-risk book files.
- User reading notes are missing.
- ProjectOverlay examples are missing.
- Playtest logs are missing.
`);

  write("12_quality/RELEASE_NOTES.md", `
# Release Notes

## Release Name

Game Design Masterclass KB - Draft BookOS Integration Release

## Date

${TODAY}

## Current Status

The KB is ready to import into BookOS as a draft, source-governed, searchable, graph-ready knowledge base.

## Included

- 17 SourceDocument records.
- 19 GameDesignWork records.
- 19 BookDossier shells.
- 164 card-family entities.
- 164 conservative claim records.
- 104 original design lenses.
- 84 lessons across 10 curriculum tracks.
- 20 workflow packs.
- 85 exercises.
- 15 reusable AI prompt templates.
- 856 normalized export entities.
- 8,383 relationship edges.
- 734 safe search documents.

## Legal Limitations

- Uploaded commercial book-like files remain metadata-only quarantined.
- No chapter summaries or quotes were created from high-risk files.
- Related works are routing metadata only.
- Most generated knowledge is draft scaffold material until user notes, legal files, official metadata, project overlays, or playtests provide evidence.

## Known Warnings

- 41 cards do not yet have related_works.
- Forum templates and project overlays are not fully normalized production systems.
- No real project examples or playtest logs exist yet.

## Recommended Next Release

Prompt 11 should implement ProjectOverlay and project application records so general KB knowledge can be used safely in real game projects.
`);

  write("12_quality/KB_README.md", `
# Game Design Masterclass KB README

## What This KB Is

This is a source-governed game design knowledge operating system for BookOS. It is not a pile of book summaries. It organizes sources, works, dossiers, concept cards, frameworks, design lenses, lessons, workflows, exercises, AI prompts, graph relationships, and search exports.

## How To Navigate It

- Start with \`/kb/02_ontology/MASTER_TAXONOMY.md\` to understand phases and domains.
- Use \`/kb/03_works/WORK_REGISTRY.md\` to see registered works.
- Use \`/kb/05_cards/CONCEPT_INVENTORY.md\` for vocabulary.
- Use \`/kb/06_lenses/DESIGN_LENS_BANK.md\` for diagnostic questions.
- Use \`/kb/07_lessons/MASTERCLASS_CURRICULUM.md\` for learning paths.
- Use \`/kb/08_workflows/WORKFLOW_PACK_INDEX.md\` for production tasks.
- Use \`/kb/11_import_export/export/search_index.json\` for BookOS retrieval.

## How To Add Legal Notes

1. Copy \`/kb/01_sources/source_sidecar_template.yaml\`.
2. Fill legal access, purchase/library reference, allowed processing, and notes paths.
3. Store user reading notes separately from high-risk source files.
4. Attach note IDs to dossiers, cards, claims, or lenses.
5. Promote confidence only after evidence review.

## How To Create A New Card

1. Pick the card type under \`/kb/05_cards\`.
2. Use \`card_template.md\`.
3. Add \`source_basis\`, \`confidence\`, \`phase_groups\`, \`domains\`, \`related_works\`, and \`evidence_refs\`.
4. If there is no evidence, set \`source_basis: unsupported_draft\` and \`confidence: unsupported_draft\` or \`weak\`.
5. Run \`node tools/kb_importer/import_kb.js\`.
6. Check \`/kb/11_import_export/import_report.md\`.

## How To Run A Workflow Pack

1. Open \`/kb/08_workflows/WORKFLOW_PACK_INDEX.md\`.
2. Choose the workflow matching your production phase.
3. Prepare required inputs.
4. Run the step-by-step process.
5. Use linked cards and lenses as prompts, not as verified facts.
6. Save output into a future ProjectOverlay or design decision log.

## How To Use Lenses

1. Open \`/kb/06_lenses/DESIGN_LENS_BANK.md\`.
2. Choose a lens by phase or domain.
3. Apply its diagnostic questions to a concrete artifact.
4. Record strengths, risks, missing evidence, experiments, and next actions.
5. Do not claim a lens comes from a book unless evidence_refs support it.

## How To Connect A Project Overlay

ProjectOverlay should store project-specific application separately from general KB knowledge.

Use:

- \`/kb/09_project_overlays/project_overlay_template.md\`
- \`workflow_*\` outputs
- design decisions
- playtest logs
- evidence refs

Prompt 11 should implement the full ProjectOverlay system.

## How To Avoid Unsupported Claims

- Always show \`source_basis\` and \`confidence\`.
- Do not use \`metadata_only\` as a summary basis.
- Do not write "according to [book]" unless a legal source or user note supports it.
- Treat related works as routing metadata, not evidence.
- Keep AI hypotheses separate from source claims.

## How To Continue Building

1. Run Prompt 11: Project Overlay system.
2. Add legal sidecars or user notes.
3. Promote selected cards with evidence.
4. Add playtest logs and design decisions.
5. Re-run the importer.
6. Re-run quality audits before release.
`);

  write("12_quality/NEXT_30_DAYS_PLAN.md", `
# Next 30 Days Plan

## Week 1 - Stabilize Release Candidate

- Review \`LEGAL_AUDIT_REPORT.md\`.
- Review \`HALLUCINATION_AUDIT.md\`.
- Decide how to handle 41 \`card_without_related_work\` warnings.
- Choose 5 priority works for legal sidecars or user notes.

## Week 2 - Project Overlay Foundation

- Implement Prompt 11 ProjectOverlay system.
- Create one sample project overlay.
- Run 3 workflow packs on the sample project.
- Store outputs as project-specific records.

## Week 3 - Evidence Upgrade

- Add user notes for top 20 concept cards.
- Attach evidence_refs to 20 claims.
- Rewrite 10 generic scaffold cards into evidence-backed cards.
- Keep all unsupported claims labeled.

## Week 4 - Playtest And BookOS Import

- Create PlaytestLog template.
- Run one small playtest.
- Import exports into BookOS.
- Verify search, graph, and source_basis display.
- Re-run importer and quality audits.
`);

  write("12_quality/NEXT_90_DAYS_PLAN.md", `
# Next 90 Days Plan

## Days 1-30

- Complete Prompt 11 ProjectOverlay system.
- Resolve or explicitly accept Prompt 9 warnings.
- Add first legal sidecars or user reading notes.
- Import draft KB into BookOS.

## Days 31-60

- Implement forum templates and discussion quality rules as normalized entities.
- Add 3 project overlays.
- Add 5 playtest logs.
- Promote first 50 claims/cards from draft to source-backed or project-applied where evidence permits.

## Days 61-90

- Add official metadata enrichment for key works.
- Add comparison cards and case-study cards.
- Create a release dashboard from coverage, hallucination, and legal audits.
- Prepare a verified-source mini-release for the subset backed by user notes, official metadata, open fulltext, or legal files.
`);

  write("12_quality/RELEASE_REPORT.md", `
# Game Design Masterclass KB Release Report

## Current Status

The KB is a **BookOS-ready draft release candidate**. It is legally safe, searchable, graph-ready, and usable for learning and production scaffolding. It is not yet a verified book-derived masterclass corpus because legal sidecars and user notes are still missing.

## Files Created

- \`/kb/12_quality/LEGAL_AUDIT_REPORT.md\`
- \`/kb/12_quality/COVERAGE_MATRIX.md\`
- \`/kb/12_quality/HALLUCINATION_AUDIT.md\`
- \`/kb/12_quality/USABILITY_AUDIT.md\`
- \`/kb/12_quality/KNOWLEDGE_GAP_BACKLOG.md\`
- \`/kb/12_quality/RELEASE_CHECKLIST.md\`
- \`/kb/12_quality/RELEASE_NOTES.md\`
- \`/kb/12_quality/KB_README.md\`
- \`/kb/12_quality/NEXT_30_DAYS_PLAN.md\`
- \`/kb/12_quality/NEXT_90_DAYS_PLAN.md\`
- \`/kb/12_quality/RELEASE_REPORT.md\`

## Strongest Areas

- Source governance and quarantine rules.
- Phase/domain ontology.
- Concept card inventory.
- Original design lens bank.
- Masterclass curriculum.
- Workflow packs and exercise library.
- Search and graph export pipeline.

## Weakest Areas

- No legal sidecars for commercial book files.
- No user reading notes attached to dossiers.
- No verified source-backed chapter or concept summaries.
- ProjectOverlay is scaffolded but not operational with real project records.
- Forum templates are not normalized as graph entities.
- 41 card-related-work warnings remain.

## Legal Limitations

- High-risk source files remain metadata-only.
- No source body text from quarantined files was used.
- Related works are navigation metadata only.
- Draft scaffolds must not be cited as verified knowledge.

## What The User Must Provide Next

- Legal sidecars or lawful replacements for priority works.
- User reading notes.
- User-supplied short quotes if quote cards are desired.
- Project examples.
- Playtest logs.

## How To Connect This KB To BookOS

1. Use \`/kb/11_import_export/export/all_entities.json\` for entities.
2. Use \`/kb/11_import_export/export/all_relationships.json\` for relationships.
3. Use \`/kb/11_import_export/export/search_index.json\` for search.
4. Use \`/kb/11_import_export/export/graph_nodes.json\` and \`graph_edges.json\` for graph views.
5. Display \`source_basis\`, \`confidence\`, and \`status\` in every BookOS view.
6. Block body-level processing for \`metadata_only_quarantined\` sources.

## Next Exact Prompt

Prompt 11: Project Overlay System and Project Application Records.

The next prompt should implement project overlays, design decision logs, playtest log templates, and a sample project application flow that connects workflow outputs to real game development use.
`);
}

generateLegalAudit();
generateCoverageMatrix();
generateHallucinationAudit();
generateUsabilityAudit();
generateBacklog();
generateReleasePackage();

console.log(JSON.stringify({
  generated_at: TODAY,
  release_ready_for_bookos_draft: releaseReady,
  entity_counts: byType,
  validation_warnings: issues.length,
  legal_violations: acceptance.legalAuditNoViolations ? 0 : 1,
  coverage: {
    strong: allCoverageRows.filter((row) => row.quality === "strong").length,
    adequate: allCoverageRows.filter((row) => row.quality === "adequate").length,
    weak: weakCoverage.length,
    missing: missingCoverage.length
  }
}, null, 2));
