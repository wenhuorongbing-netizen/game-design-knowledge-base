# Implementation Log

## 2026-04-28 - First LegalSidecar Intake Request

Attempted the first LegalSidecar intake. No user-provided LegalSidecar data was supplied, so no sidecar record was created.

Actions:

- Created `FIRST_SIDECAR_REQUEST.md` with the exact user fields required for a real LegalSidecar.
- Updated `kb/13_evidence/sidecars/SIDECAR_STATUS_INDEX.md` to record the blocked first-sidecar request.
- Updated `kb/13_evidence/PHASE_2_INTAKE_REVIEW.md` to mark Phase 2 sidecar intake as blocked pending user sidecar.
- Updated `UPDATED_SOURCE_GOVERNANCE_AUDIT.md`, `KB_PROJECT_STATE.md`, and `TODO.md`.
- Updated `tools/kb_quality/source_audit.js` so generated source-governance audits report the blocked first-sidecar request.
- Did not create a fake sidecar.
- Did not upgrade any source.
- Did not parse, summarize, quote, embed, or otherwise process source body text.
- Did not promote claims.

Validation:

- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `node --check tools/kb_quality/source_audit.js`: PASS.
- `npm run kb:audit`: source governance audit PASS, sidecar audit PASS, validation PASS.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.

## 2026-04-28 - Evidence Phase 2 Intake Gate Setup

Prepared the controlled intake gate for the first real user evidence packet without ingesting evidence, creating sidecars, inventing notes, inventing quotes, adding project/playtest evidence, promoting claims, parsing high-risk source bodies, or building app features.

Actions:

- Created `kb/13_evidence/PHASE_2_INTAKE_GATE.md`.
- Created `kb/13_evidence/USER_EVIDENCE_PACKET_TEMPLATE.md`.
- Created `kb/13_evidence/USER_EVIDENCE_PACKET_CHECKLIST.md`.
- Created `kb/13_evidence/PHASE_2_INTAKE_REVIEW.md`.
- Created `kb/13_evidence/reports/PHASE_2_READINESS_REPORT.md`.
- Created `kb/13_evidence/reports/USER_EVIDENCE_DEPENDENCY_REPORT.md`.
- Updated `kb/13_evidence/README.md` and `kb/13_evidence/EVIDENCE_VALIDATION_RULES.md`.
- Extended EvidenceIntakeBatch schema and importer normalization for Phase 2 packet fields.
- Extended validator rules for packet confirmations, referenced source/work/sidecar/note/quote/overlay/playtest records, manual note authorship, manual quote provenance and length, ProjectOverlay scope, PlaytestLog scope, and extracted source-body references.
- Added explicit user-authorship fields to the manual note template and schema.

Validation:

- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, sidecar/manual note/manual quote/claim promotion reports regenerated, validation PASS.

## 2026-04-28 - GitHub Truth Reconciliation

Reconciled the actual GitHub main branch with local acceptance reports without starting Evidence Phase 2, adding evidence, promoting claims, or building app features.

Actions:

- Fetched `origin/main`.
- Confirmed local `HEAD` and `origin/main` both point to `91b7670 fix 2` before this report update.
- Confirmed root `rebuild_instruction.md` is absent in the working tree.
- Confirmed root `rebuild_instruction.md` is absent in `HEAD`.
- Confirmed root `rebuild_instruction.md` is absent in `origin/main`.
- Confirmed GitHub raw access for root `rebuild_instruction.md` returns 404.
- Confirmed no tracked PDF, EPUB, ZIP, or 7z files exist.
- Updated `GITHUB_TRUTH_SYNC_REPORT.md`.
- Updated acceptance, drift, backlog, project state, roadmap, TODO, updated validation, and updated source-governance reports.
- Expanded validator report-consistency coverage to include truth-sync, updated acceptance, updated validation, updated source-governance, evidence release, and roadmap reports.
- Replaced the importer hardcoded export date with a runtime date so generated export reports reflect the actual run date.

Validation:

- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, sidecar/manual note/manual quote/claim promotion reports regenerated, validation PASS.
- `npm run kb:coverage`: coverage summary regenerated.
- Final export timestamp correction: `kb/11_import_export/import_report.md` now reports `generated_at` as 2026-04-28.

## 2026-04-27 - Evidence Phase 1 Final Audit

Finished Evidence Intake Phase 1 without adding knowledge content, parsing high-risk source bodies, creating fake evidence, or promoting claims.

Actions:

- Created `EVIDENCE_PHASE_1_RELEASE_REPORT.md`.
- Created `EVIDENCE_PHASE_1_AUDIT.md`.
- Created `EVIDENCE_PHASE_1_GAP_BACKLOG.md`.
- Created `EVIDENCE_PHASE_2_ROADMAP.md`.
- Created `UPDATED_KB_ACCEPTANCE_REVIEW.md`.
- Created `UPDATED_SOURCE_GOVERNANCE_AUDIT.md`.
- Created `UPDATED_VALIDATION_REPORT.md`.
- Updated `KB_PROJECT_STATE.md`, `NEXT_DEVELOPMENT_PLAN.md`, `TODO.md`, and `IMPLEMENTATION_LOG.md`.
- Confirmed Evidence Phase 1 is infrastructure-only: LegalSidecar records 0, UserManualNote records 0, UserManualQuote records 0, EvidenceRef records 0, ClaimPromotionRequest records 0, and verified claims 0.
- Confirmed draft/source-governed KB verdict is `ACCEPTED`.
- Confirmed verified source-backed masterclass verdict is `BLOCKED_PENDING_USER_EVIDENCE`.
- Confirmed Evidence Phase 2 may begin only with user-supplied legal evidence, manual notes, optional lawful manual quotes, scoped project evidence, and scoped playtest evidence.

Validation:

- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, sidecar/manual note/manual quote/claim promotion reports regenerated, validation PASS.
- `npm run kb:coverage`: coverage summary regenerated.

## 2026-04-27 - Role-Based Navigation

- Created `START_HERE.md`.
- Created `kb/navigation/README.md`.
- Created learner, designer, researcher, maintainer, source-governance, and quick problem-solver navigation paths.
- Linked navigation paths to existing works, dossiers, concept cards, design lenses, workflow packs, exercises, governance files, reports, and schemas.
- Recorded missing future navigation areas as TODO rather than inventing links.
- Updated root `README.md` to point new users to `START_HERE.md` and `kb/navigation/`.
- Ran a local Markdown link existence check across the new navigation entry files.
- Ran `npm run kb:validate`; validation passed with 0 P0 issues and 0 warnings.

## 2026-04-27 - P1 Structural Frontmatter Migration

- Read `VALIDATION_REPORT.md`, `VALIDATION_REPORT.json`, Markdown frontmatter schema, and card/lens/workflow schemas.
- Created `ENTITY_TYPE_MIGRATION_PLAN.md`.
- Added explicit `entity_type` frontmatter to 472 legacy generated Markdown entity files.
- Preserved existing IDs, source basis, confidence, status, related works, evidence refs, evidence gaps, and body content.
- Regenerated exports with `npm run kb:export`.
- Regenerated validation outputs with `npm run kb:validate`.
- Regenerated source-governance audit with `npm run kb:audit`.
- Reduced accepted exceptions from 477 to 5.
- Reduced missing `entity_type` exceptions from 472 to 0.
- Confirmed no validation errors, no source-governance violations, and no draft content promoted to verified.

## 2026-04-27 - P0 Contradiction Repair

- Confirmed root `rebuild_instruction.md` is absent and the deprecated BookOS instruction remains under `docs/deprecated/`.
- Hardened `kb-tools/ingest-user-files.mjs` so non-high-risk user files default to `pending_review`, `metadata_only`, and `allowed_metadata_only`.
- Added `unknown scanned copy` to high-risk marker detection.
- Ensured high-risk user files receive `risk_level: high`, `source_basis: metadata_only`, and `ingestion_status: metadata_only_quarantined`.
- Guarded legacy `kb-tools` entry scripts behind `ALLOW_LEGACY_KB_TOOLS=true`.
- Added `kb-tools/README.md` and updated legacy toolchain documentation.
- Updated validation reporting so PASS means P0 safety pass, not structural perfection.
- Added generation of `MIGRATION_EXCEPTIONS_REPORT.md` for accepted migration exceptions.
- Ran syntax checks for legacy and authoritative scripts.
- Ran `npm run kb:export`, `npm run kb:validate`, and `npm run kb:audit`; all passed with 0 P0 issues and 0 unresolved warnings.

## 2026-04-27 — Acceptance Review

Performed strict professional acceptance review of `D:\Game\FOTN` as a Game Design Knowledgebase repository.

Actions:

- Treated `D:\Game\FOTN` as review target because no repo URL/path was supplied.
- Inspected repository root.
- Inspected `knowledge/kb` structure and generated counts.
- Inspected governance files, source registry, work registry, ontology, cards, lenses, workflows, exercises, import/export outputs, and quality reports.
- Parsed JSON files for counts:
  - 17 source records
  - 19 works
  - 26 ontology domains
  - 26 relationship types
  - 164 claims
  - 856 exported entities
  - 8383 relationships
  - 734 search documents
  - 41 validation warnings
- Checked entity markdown frontmatter across 496 entity files.
- Found 5 placeholder README entity files missing source_basis/confidence/frontmatter.
- Found new `knowledge/kb` source governance mostly compliant.
- Found P0 repository-level violations in legacy private-library extraction artifacts and portal data.
- Created acceptance review and planning files at repository root.

Outcome:

- Verdict: REJECTED.
- Direction: PARTIALLY_DRIFTING.
- Main next action: `build-kb-p0`.

## 2026-04-27 — P0 Repair

Implemented only P0 repairs for the Game Design Knowledgebase.

Changes:

- Created canonical root `kb` by copying the source-governed `knowledge/kb` layer.
- Created root `README.md` and `RELEASE_BOUNDARY.md`.
- Created `tools/validate_kb/validate_kb.js` and `tools/validate_kb/README.md`.
- Added compatibility file `kb/07_workflows/workflow_pack_schema.json`.
- Removed 14 legacy private-library extracted JSON artifacts from `knowledge/50-game-design-masters-kb/raw/private-library/extracted`.
- Added `knowledge/50-game-design-masters-kb/raw/private-library/EXTRACTED_ARTIFACTS_REMOVED.md`.
- Regenerated `knowledge/kb-portal/data.js` and `knowledge/kb-portal/content.js` from safe `/kb/11_import_export/export/search_index.json`.
- Replaced `knowledge/kb-tools/extract-private-book-artifacts.mjs` with a metadata-only blocker that reports `blocked_pending_legal_sidecar`.
- Replaced `knowledge/kb-tools/extract_private_book_artifacts.py` with a hard stop explaining the P0 source-governance gate.
- Generated `VALIDATION_REPORT.md` and `VALIDATION_REPORT.json`.
- Updated `KB_ACCEPTANCE_REVIEW.md`, `KB_PROJECT_STATE.md`, `TODO.md`, and `GAP_BACKLOG.md`.

Validation:

- `node .\tools\validate_kb\validate_kb.js`
- Result: PASS, 0 P0 issues, 488 warnings.

Remaining work:

- P1 warnings remain, primarily inferred `entity_type`, placeholder README files, related-work warnings, and schema/domain normalization.

## 2026-04-27 — Phase 1 Content Release

Built the first source-governed Game Design Knowledgebase content release from the canonical root `/kb`.

Scope:

- No app features.
- No reading-note system.
- No forum features.
- No high-risk source body ingestion.
- No detailed summaries from quarantined sources.

Content verified:

- 19 GameDesignWork entries.
- 19 source-safe draft dossier shells.
- 109 concept cards.
- 104 original design lens cards.
- 20 workflow packs.
- 85 exercise cards.
- 164 claim graph entries.
- Required works are registered, including Game Feel, Play Matters, The Aesthetic of Play, The Art of Game Design, The Game Design Reader, A Theory of Fun, Advanced Game Design, Challenges for Game Designers, Game Design Workshop, Game Mechanics, Level Up, and Better Game Characters by Design.

Exports regenerated:

- Command: `node .\knowledge\tools\kb_importer\import_kb.js .`
- Entities: 856.
- Relationships: 8383.
- Search documents: 734.
- Graph nodes: 856.
- Graph edges: 8383.
- Import warnings: 41 `card_without_related_work`.

Validation:

- Command: `node .\tools\validate_kb\validate_kb.js`
- Result: PASS, 0 P0 issues, 488 warnings.

Files updated:

- `kb/12_quality/PHASE_1_CONTENT_RELEASE.md`
- `COVERAGE_MATRIX.md`
- `KB_PROJECT_STATE.md`
- `TODO.md`
- `IMPLEMENTATION_LOG.md`
- `VALIDATION_REPORT.md`
- `VALIDATION_REPORT.json`

## 2026-04-27 - Phase 1 Content Review

Reviewed the completed Phase 1 content release without expanding scope.

Scope:

- No app features.
- No reading-note system.
- No forum features.
- No high-risk source body ingestion.
- No Phase 2 content expansion.

Review result:

- Verdict: PASS_WITH_WARNINGS.
- Minimum content targets are met or exceeded.
- Source governance remains P0 compliant.
- Phase 1 is accepted as a source-governed draft release, not a verified source-backed corpus.

Validation:

- Command: `node .\tools\validate_kb\validate_kb.js`
- Result: PASS, 0 P0 issues, 488 warnings.

Counts reviewed:

- 19 works.
- 19 dossier shells.
- 109 concept cards.
- 104 design lenses.
- 20 workflow packs.
- 85 exercises.
- 164 claims.
- 856 exported entities.
- 8383 exported relationships.
- 734 search documents.

Remaining hardening:

- 488 validator warnings remain.
- 41 importer warnings remain for `card_without_related_work`.
- Domain vocabulary normalization remains.
- Legal sidecars and verified claims are still absent.
- One sanitized project overlay example is still needed.

Files updated:

- `kb/12_quality/PHASE_1_CONTENT_REVIEW.md`
- `KB_PROJECT_STATE.md`
- `TODO.md`
- `IMPLEMENTATION_LOG.md`
- `GAP_BACKLOG.md`
- `KB_ACCEPTANCE_REVIEW.md`
- `COVERAGE_MATRIX.md`

## 2026-04-27 - Repository Boundary Migration

Migrated the Game Design Knowledgebase into `D:\Game\FOTN\knowledge` so the `knowledge/` folder can be managed and uploaded as the standalone repository.

Actions:

- Merged root-level `kb/` into `knowledge/kb/`.
- Merged root-level `tools/` into `knowledge/tools/`.
- Moved root-level audit, state, TODO, README, release-boundary, coverage, and validation files into `knowledge/`.
- Replaced the old garbled `knowledge/README.md` with a KB-first repository README.
- Updated `RELEASE_BOUNDARY.md` to define `D:\Game\FOTN\knowledge` as the repository root.
- Left `D:\Game\FOTN` with only visible content folders `founder-of-the-north/` and `knowledge/`.
- Did not move or merge hidden `.git` metadata to avoid corrupting repository history.

Validation:

- Command: `node .\tools\kb_importer\import_kb.js .`
- Working directory: `D:\Game\FOTN\knowledge`
- Result: 856 entities, 8383 relationships, 734 search documents, 41 warnings, 0 errors.
- Command: `node .\tools\validate_kb\validate_kb.js`
- Working directory: `D:\Game\FOTN\knowledge`
- Result: PASS, 0 P0 issues, 488 warnings.

## 2026-04-27 - P0 Finalization Sprint

Implemented P0 finalization for the Game Design Knowledgebase repository.

Actions:

- Moved legacy BookOS rebuild instruction to `docs/deprecated/BOOKOS_REBUILD_INSTRUCTION_DEPRECATED.md`.
- Created active `KB_REBUILD_INSTRUCTION.md`.
- Added `package.json` scripts for `kb:export`, `kb:validate`, `kb:coverage`, and `kb:audit`.
- Created `TOOLCHAIN_AUDIT.md` and `DIRECTION_DRIFT_AUDIT.md`.
- Hardened `kb-tools/ingest-user-files.mjs` so user files default to `pending_review` or `metadata_only_quarantined`.
- Blocked deprecated `kb-tools/build-all.mjs`.
- Added `kb-tools/README_DEPRECATED.md`.
- Updated `/tools/kb_importer/import_kb.js` to emit `gdkb.*` schema versions and accept explicit no-work-link exceptions.
- Added `work_link_status: not_applicable` and `evidence_gap` to 41 general scaffold cards.
- Regenerated exports and validation reports.
- Updated release checklist and release report to separate draft and verified gates.

Validation:

- `npm run kb:export`: 857 entities, 8383 relationships, 735 search documents, 0 issues.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings.
- `npm run kb:coverage`: coverage summary regenerated.
- `npm run kb:audit`: source governance audit PASS and validation PASS.
- `node .\kb-tools\build-all.mjs`: blocked as expected with exit code 2.

## 2026-04-27 - P0 Contradiction Recheck

Rechecked the remaining P0 contradiction list without adding content or app features.

Actions:

- Confirmed root `rebuild_instruction.md` is absent.
- Replaced `docs/deprecated/BOOKOS_REBUILD_INSTRUCTION_DEPRECATED.md` with a stub-only deprecation notice.
- Confirmed `kb-tools/ingest-user-files.mjs` defaults user files to `pending_review` / `allowed_metadata_only`.
- Strengthened high-risk marker detection for curly apostrophes and private manifest metadata fields.
- Confirmed `kb-tools` entry scripts remain opt-in guarded by `ALLOW_LEGACY_KB_TOOLS=true`.
- Corrected stale `KB_ACCEPTANCE_REVIEW.md` text from 477 accepted exceptions to the current 5 accepted exceptions.

Validation:

- `npm run kb:export`: 857 entities, 8383 relationships, 735 search documents, 0 issues.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 5 accepted README-placeholder exceptions.
- `npm run kb:audit`: source governance audit PASS, 14 high-risk records quarantined, 0 unsafe high-risk records.

## 2026-04-27 - First-Time User Entry Layer

Added navigation-only documentation to make the repository understandable without changing the KB data model, moving content folders, or adding app features.

Actions:

- Updated `README.md` to start with `Start here: START_HERE.md`.
- Rebuilt root `START_HERE.md` as a question-driven onboarding page.
- Added `REPO_MAP.md`, `HOW_TO_USE_THIS_KB.md`, `HOW_TO_ADD_KNOWLEDGE.md`, `WHAT_NOT_TO_TOUCH.md`, and `MAINTAINER_CHECKLIST.md`.
- Added `kb/START_HERE.md`, `kb/INDEX.md`, `kb/LEARNING_PATHS.md`, and `kb/DESIGNER_WORKFLOWS.md`.
- Reused existing KB links for works, concept cards, lenses, workflows, and exercises.

Validation:

- Local Markdown link check: 11 entry files checked, 0 missing local links.
- `npm run kb:validate`: PASS, 857 entities, 8383 relationships, 735 search documents, 0 issues, 0 errors, 0 warnings.

## 2026-04-27 - Reversible Structure Simplification

Added structure labels and a reversible simplification plan without moving canonical KB content, deleting data, or changing export paths.

Actions:

- Created `STRUCTURE_SIMPLIFICATION_PLAN.md`.
- Created `STRUCTURE_MAP.md`.
- Added folder-level README markers for `kb/`, governance, sources, ontology, works, cards, lenses, workflows, import/export, quality, tools, portal, legacy tools, legacy snapshot, and deprecated docs.
- Marked `kb/11_import_export/export/` as generated with an explicit README.
- Replaced the garbled legacy `50-game-design-masters-kb/README.md` with a clear legacy quarantine notice.
- Updated `README.md`, `REPO_MAP.md`, and `WHAT_NOT_TO_TOUCH.md` to point to the structure guides.

Validation:

- Local Markdown link checks: 29 entry/structure files checked first, then 21 structure marker files checked after final `REPO_MAP.md` update; 0 missing local links.
- `npm run kb:validate`: PASS, 857 entities, 8383 relationships, 735 search documents, 0 issues, 0 errors, 0 warnings.

## 2026-04-27 - Accepted Exceptions Cleanup

Reduced structural accepted exceptions without changing knowledge meaning.

Starting state:

- accepted exceptions: 5
- missing `entity_type` exceptions: 0
- remaining exception type: `placeholder_readme_in_entity_folder`

Actions:

- Added `kb/05_cards/PLACEHOLDER_CARD_FOLDERS.md` to preserve placeholder notes for quote, comparison, exercise, anti-pattern, and case-study card folders.
- Removed README placeholders from entity scan folders.
- Updated `ENTITY_TYPE_MIGRATION_PLAN.md` with the follow-up cleanup rule.
- Did not add new knowledge.
- Did not promote draft content to verified.
- Did not parse source bodies.
- Did not manually edit generated exports.

Validation:

- `npm run kb:export`: 857 entities, 8383 relationships, 735 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, 14 high-risk records, 0 unsafe high-risk records.
- Final `MIGRATION_EXCEPTIONS_REPORT.md`: 0 accepted exceptions.

## 2026-04-27 - Role-Based Navigation Recheck

Rechecked the existing role-based navigation layer and made small clarity updates without adding app features, forum behavior, user accounts, or source-body parsing.

Actions:

- Added a direct role-based navigation table to root `START_HERE.md`.
- Confirmed `README.md` already links all role-based navigation paths.
- Replaced a curly-quote evidence warning in `kb/navigation/learner_path.md` with ASCII quote marks.
- Replaced the stale maintainer TODO about README placeholders with current future-maintenance TODOs.

Validation:

- Local navigation link check: 9 files checked, 0 missing local links.
- `npm run kb:validate`: PASS, 857 entities, 8383 relationships, 735 search documents, 0 issues, 0 errors, 0 warnings.

## 2026-04-27 - Truth Alignment Final Fix

Fixed final truth-alignment risks without starting evidence intake, adding knowledge content, or building app features.

Actions:

- Confirmed root `rebuild_instruction.md` is absent in the current local repository state.
- Updated `README.md` to start with the required Markdown link: `Start here: [START_HERE.md](START_HERE.md)`.
- Added validator checks for active root direction-drift instructions covering BookOS, reading sessions, reading progress, personal library CRUD, user auth, forum CRUD, Vue/Spring/MySQL, and full-stack web app instructions.
- Added validator checks for contradictions between `VALIDATION_REPORT.md`, `VALIDATION_REPORT.json`, `MIGRATION_EXCEPTIONS_REPORT.md`, and root `rebuild_instruction.md` file-state claims.
- Excluded generated validation/migration reports from active direction-instruction scanning while retaining report-consistency validation.
- Updated state and audit files so P0 status, root rebuild-instruction status, accepted-exception count, and evidence-intake readiness agree.

Validation:

- `npm run kb:export`: 857 entities, 8383 relationships, 735 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS and validation PASS.
- `npm run kb:coverage`: coverage summary regenerated.

## 2026-04-27 - Remaining P1/P2 Structural Cleanup

Resolved the remaining actionable P1/P2 structure and usability gaps without adding source-derived knowledge, parsing source bodies, or building app features.

Actions:

- Added direct `README.md` link to `KB_REBUILD_INSTRUCTION.md`.
- Moved 13 local private PDF/EPUB source files from the repository root into `_private_sources/` without reading or parsing them.
- Added `_private_sources/README.md` and updated `.gitignore` so the local quarantine stays ignored except for the folder README.
- Updated repository maps and maintainer docs to point private source handling at `_private_sources/`.
- Removed obsolete `kb/07_workflows/workflow_pack_schema.json` and made `kb/08_workflows/workflow_pack_schema.json` the required workflow schema.
- Added `ProjectOverlay` and `PlaytestLog` entity scanning and schema generation to the importer and validator.
- Added `kb/09_project_overlays/README.md`, a ProjectOverlay template update, a PlaytestLog template, and unsupported draft sample overlay/log records.
- Added `50-game-design-masters-kb/LEGACY_QUARANTINE.md` and linked it from the legacy snapshot README.
- Updated navigation, TODO, backlog, and project state to distinguish resolved structural P1/P2 work from evidence-dependent work that requires user-provided legal/project evidence.

Validation:

- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS and validation PASS.
- `npm run kb:coverage`: coverage summary regenerated.

## 2026-04-27 - Evidence Intake Phase 1 Architecture

Created the evidence intake architecture without parsing source bodies, adding real evidence, creating legal sidecars, adding user notes, or promoting claims.

Actions:

- Created `kb/13_evidence/` with tracked intake subfolders for sidecars, manual notes, manual quotes, open sources, evidence refs, evidence gaps, intake batches, promotion requests, reviews, reports, and schemas.
- Added evidence architecture documentation: `README.md`, `EVIDENCE_INTAKE_PLAN.md`, `EVIDENCE_REF_SCHEMA.md`, `CLAIM_PROMOTION_WORKFLOW.md`, `EVIDENCE_GAP_REGISTER.md`, `PRIORITY_EVIDENCE_BACKLOG.md`, and `EVIDENCE_VALIDATION_RULES.md`.
- Added JSON schemas for LegalSidecar, UserManualNote, UserManualQuote, OpenSourceReference, OfficialMetadataReference, EvidenceRef, ClaimPromotionRequest, ClaimPromotionReview, EvidenceGap, EvidenceIntakeBatch, and EvidenceAuditReport.
- Extended `tools/kb_importer/import_kb.js` to recognize, normalize, schema-generate, export, search, and graph future evidence entities.
- Extended `tools/validate_kb/validate_kb.js` to check EvidenceRef required fields, broken evidence links, verified-claim evidence legality, pending sidecars, explicit user-provided manual quotes, and high-risk source boundaries.
- Did not add evidence records, legal sidecars, manual notes, manual quotes, or claim promotion records.
- Did not promote any claim to verified.
- Did not read, parse, quote, summarize, or embed high-risk source bodies.

Validation:

- `node --check tools/kb_importer/import_kb.js`: PASS.
- `node --check tools/validate_kb/validate_kb.js`: PASS.
- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, claim promotion audit PASS, validation PASS.

## 2026-04-27 - Evidence-Aware Navigation Search And Portal Visibility

Made evidence status visible to human users without building an app, adding auth, adding forum CRUD, parsing source bodies, or adding evidence records.

Actions:

- Added `kb/13_evidence/EVIDENCE_DASHBOARD.md`.
- Added `kb/13_evidence/EVIDENCE_STATUS_INDEX.md`.
- Added `kb/13_evidence/reports/EVIDENCE_NAVIGATION_REPORT.md`.
- Added `kb/13_evidence/reports/EVIDENCE_SEARCH_EXPORT_REPORT.md`.
- Added `kb/13_evidence/reports/EVIDENCE_PORTAL_AUDIT.md`.
- Updated `START_HERE.md`, `kb/START_HERE.md`, and `kb/navigation/README.md` with evidence status links.
- Updated `kb/navigation/researcher_path.md`, `maintainer_path.md`, `source_governance_path.md`, and `quick_problem_solver.md` with evidence workflow and pilot-report links.
- Updated `kb/13_evidence/README.md` with dashboard and status index links.
- Extended `buildSearchIndex` so every search document includes `evidence_status`, `is_verified`, `has_evidence_refs`, `evidence_gap_count`, `entity_scope`, `related_evidence_refs`, `promotion_status`, and `evidence_gap`.
- Updated `kb/11_import_export/search_index_model.md` through the importer-generated docs.
- Updated optional `kb-portal` detail rendering so evidence fields are displayed when present.
- Documented portal evidence filtering as a P1 follow-up because current root authoritative commands do not regenerate portal data.
- Confirmed search export contains all required evidence fields for 737 documents.
- Confirmed current verified search documents remain 0 and no EvidenceRef-backed documents exist yet.

Validation:

- `node --check tools/kb_importer/import_kb.js`: PASS.
- `node --check tools/validate_kb/validate_kb.js`: PASS.
- `node --check kb-portal/app.js`: PASS.
- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, claim promotion audit PASS, validation PASS.
- `npm run kb:coverage`: coverage summary regenerated.

## 2026-04-27 - Systems / Economy / Playtesting / ProjectOverlay Evidence Pilot Setup

Ran a limited evidence pilot for `systems_design`, `economy_balance`, `playtesting`, `project_overlay`, and `playtest_log` without parsing high-risk source body text, inventing real project evidence, inventing playtest results, treating sample overlays as evidence, or promoting claims.

Actions:

- Added `kb/13_evidence/manual_notes/systems_design_note_template.md`.
- Added `kb/13_evidence/manual_notes/economy_balance_note_template.md`.
- Added `kb/13_evidence/manual_notes/playtesting_note_template.md`.
- Added `kb/13_evidence/manual_notes/project_overlay_evidence_template.md`.
- Added `kb/13_evidence/manual_notes/playtest_observation_template.md`.
- Added `kb/13_evidence/manual_notes/playtest_decision_template.md`.
- Added `kb/13_evidence/reports/SYSTEMS_ECONOMY_PLAYTEST_EVIDENCE_PILOT.md`.
- Added `kb/13_evidence/reports/systems_economy_entity_audit.md`.
- Added `kb/13_evidence/reports/project_overlay_evidence_gap_report.md`.
- Added `kb/13_evidence/reports/playtest_log_evidence_gap_report.md`.
- Audited entities related to systems, parts, loops, wholes, game+player system, feedback loops, progression curves, power curves, economy, source/sink/faucet/drain, balance, transitive/intransitive balance, playtesting, prototype questions, observation quality, iteration decisions, ProjectOverlay, and PlaytestLog.
- Created 8 priority evidence slots for systems, economy, playtesting, real project overlay, and real playtest log intake.
- Added `entity_scope: project_overlay` to the sample ProjectOverlay and `entity_scope: playtest_log` plus separated observation fields to the sample PlaytestLog while keeping both `unsupported_draft`.
- Extended importer and validator checks for ProjectOverlay scope, PlaytestLog observation separation, sample overlay/log unsupported_draft status, project-specific claim scope, playtest-specific claim scope, and project/playtest evidence boundaries for verified general claims.
- Confirmed no real project evidence, playtest result, participant quote, EvidenceRef, or verified claim was created.

Validation:

- `node --check tools/kb_importer/import_kb.js`: PASS.
- `node --check tools/validate_kb/validate_kb.js`: PASS.
- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, claim promotion audit PASS, validation PASS.

## 2026-04-27 - Meaningful Decisions / Rules / Mechanics Evidence Pilot Setup

Ran a limited evidence pilot for `meaningful_decisions`, `rules_mechanics`, `formal_elements`, `skill_chance`, and `challenge_balance` without parsing high-risk source body text, quoting source files, creating verified claims, or promoting claims.

Actions:

- Added `kb/13_evidence/manual_notes/meaningful_decisions_note_template.md`.
- Added `kb/13_evidence/manual_notes/rules_mechanics_note_template.md`.
- Added `kb/13_evidence/reports/MEANINGFUL_DECISIONS_EVIDENCE_PILOT.md`.
- Added `kb/13_evidence/reports/meaningful_decisions_entity_audit.md`.
- Added `kb/13_evidence/reports/rules_mechanics_evidence_gap_report.md`.
- Added `kb/13_evidence/promotion_requests/meaningful_decisions_promotion_backlog.md`.
- Audited existing KB entities related to meaningful decisions, obvious decisions, meaningless decisions, blind decisions, tradeoffs, dilemmas, risk versus reward, rules, mechanics, goals, objectives, resources, conflict, boundaries, outcomes, chance, strategic skill, twitch skill, balance, and formal elements.
- Created 6 priority evidence slots for meaningful decision definition, tradeoff/dilemma examples, chance/skill balance, formal elements, project meaningful-choice failure, and playtest fake/meaningful choice observation.
- Marked all Pilot B targets as blocked from promotion until EvidenceRef records and reviewer approval exist.
- Updated importer and validator ignore rules so Pilot B reports and backlogs are not imported as evidence entities.

Validation:

- `node --check tools/kb_importer/import_kb.js`: PASS.
- `node --check tools/validate_kb/validate_kb.js`: PASS.
- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, claim promotion audit PASS, validation PASS.
- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, claim promotion audit PASS, validation PASS.
- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, claim promotion audit PASS, validation PASS.
- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS and validation PASS.

## 2026-04-27 - LegalSidecar Workflow

Implemented the LegalSidecar workflow without parsing private or high-risk source body text, summarizing books, quoting books, or verifying claims.

Actions:

- Added `kb/13_evidence/sidecars/source_sidecar_template.yaml` with default `approval_status: pending_review` and no AI-processing approval.
- Added `kb/13_evidence/sidecars/README.md`, `SIDECAR_REVIEW_GUIDE.md`, and `SIDECAR_STATUS_INDEX.md`.
- Added `kb/01_sources/USER_REQUIRED_EVIDENCE.md`.
- Updated `kb/01_sources/sources.json` with `legal_sidecar_ids`, `sidecar_review_status`, and `allowed_for_ai_processing` fields for every source.
- Preserved all high-risk sources as `metadata_only_quarantined`.
- Updated LegalSidecar schema requirements and allowed `approval_status` values.
- Extended importer and validator to handle future YAML sidecar records while ignoring templates and sidecar documentation.
- Added validator rules for missing sidecar fields, nonexistent source/work references, missing approval status, full-processing default risk, AI processing without sidecar, and high-risk `process_full_text` without explicit approval.
- Updated source audit tooling to generate `kb/13_evidence/reports/SIDECAR_AUDIT_REPORT.md`.

Validation:

- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, sidecar audit PASS, validation PASS.

## 2026-04-27 - User Manual Notes And Manual Quotes Workflow

Implemented the manual evidence workflow without parsing private sources, summarizing source files, extracting quotes from source files, or promoting claims.

Actions:

- Added `kb/13_evidence/manual_notes/README.md`, `user_manual_note_template.md`, and `user_manual_note_example_stub.md`.
- Added `kb/13_evidence/manual_quotes/README.md`, `user_manual_quote_template.md`, and `user_manual_quote_example_stub.md`.
- Added `kb/13_evidence/reports/MANUAL_NOTE_INTAKE_REPORT.md` and `MANUAL_QUOTE_AUDIT_REPORT.md`.
- Updated UserManualNote and UserManualQuote JSON schemas to match the required workflow fields.
- Extended importer support for `note_id`, `quote_id`, manual note normalization, manual quote normalization, and safe quote search filtering.
- Extended validator checks for manual note source basis, user interpretation confidence, note type/status, quote source basis, quote status, quote length, user-provided quote status, automated extraction blocking, quote source/work references, and high-risk quote sidecar review.
- Updated source audit tooling to generate manual note and manual quote reports.
- Kept templates and example stubs ignored by importer so no fake notes or fake quotes enter `all_entities.json`.

Validation:

- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, sidecar audit PASS, manual note report PASS, manual quote report PASS, validation PASS.

## 2026-04-27 - EvidenceRef Graph And Claim Promotion Gates

Implemented the claim-evidence graph and promotion gate infrastructure without adding real evidence records, using high-risk source body text, creating book-specific claims, or promoting any claim.

Actions:

- Rewrote `kb/13_evidence/CLAIM_PROMOTION_WORKFLOW.md` with promotion levels, verified-claim gates, evidence-scope rules, and project/playtest local-evidence boundaries.
- Added `kb/13_evidence/promotion_requests/promotion_request_template.md` and `example_promotion_request_stub.md`.
- Added `kb/13_evidence/reviews/promotion_review_template.md` and `example_promotion_review_stub.md`.
- Added generated audit outputs for claim promotion: `CLAIM_PROMOTION_AUDIT.md`, `UNSUPPORTED_CLAIMS_INDEX.md`, and `VERIFIED_CLAIMS_INDEX.md`.
- Added relationship types for `supported_by`, `challenged_by`, `evidence_for`, `evidence_against`, `promoted_from`, `reviewed_by`, `blocked_by_evidence_gap`, `applies_in_project`, and `observed_in_playtest`.
- Extended graph export so future EvidenceRef, ClaimPromotionRequest, ClaimPromotionReview, EvidenceGap, ProjectOverlay, and PlaytestLog records can express support, challenge, blocking, review, local application, and playtest observation.
- Extended importer and validator checks for verified claim evidence, claim status/confidence conflicts, promotion request reviewer/rationale, EvidenceRef links, evidence-scope alignment, promotion review reviewer/rationale, and project/playtest observation overgeneralization.
- Extended source audit tooling to generate claim promotion audit reports and explicit unsupported/verified claim indexes.
- Confirmed the current KB has 164 unsupported or unverified claims and 0 verified claims.
- Confirmed no unsupported claim was promoted.

Validation:

- `node --check tools/kb_importer/import_kb.js`: PASS.
- `node --check tools/validate_kb/validate_kb.js`: PASS.
- `node --check tools/kb_quality/source_audit.js`: PASS.
- `node -e JSON.parse relationship_types`: PASS.
- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, claim promotion audit PASS, validation PASS.

## 2026-04-27 - Game Feel Evidence Pilot Setup

Ran a limited evidence pilot for the `game_feel` domain without parsing high-risk source body text, summarizing private PDFs or EPUBs, extracting quotes, creating verified claims, or promoting claims.

Actions:

- Added `kb/13_evidence/manual_notes/game_feel_note_template.md`.
- Added `kb/13_evidence/manual_notes/game_feel_chapter_note_template.md`.
- Added `kb/13_evidence/reports/GAME_FEEL_EVIDENCE_PILOT.md`.
- Added `kb/13_evidence/reports/game_feel_evidence_gap_report.md`.
- Added `kb/13_evidence/reports/game_feel_entity_audit.md`.
- Added `kb/13_evidence/promotion_requests/game_feel_promotion_backlog.md`.
- Audited existing KB entities related to game feel, real-time control, simulated space, polish, input metrics, response metrics, context metrics, polish metrics, metaphor metrics, rules metrics, tightness, floatiness, responsiveness, camera feel, avatar feel, kinesthetic prototype, and game feel audit.
- Created 108 evidence slots for 108 audited game-feel-related entities.
- Marked all Game Feel pilot targets as draft/source-governed, with 0 EvidenceRef records and 0 verified claims.
- Updated importer and validator ignore rules so Game Feel pilot reports and backlogs are not imported as evidence entities.

Validation:

- `node --check tools/kb_importer/import_kb.js`: PASS.
- `node --check tools/validate_kb/validate_kb.js`: PASS.
- `npm run kb:export`: 859 entities, 8405 relationships, 737 search documents, 0 issues, 0 errors, 0 warnings.
- `npm run kb:validate`: PASS, 0 P0 issues, 0 warnings, 0 accepted exceptions.
- `npm run kb:audit`: source governance audit PASS, claim promotion audit PASS, validation PASS.
