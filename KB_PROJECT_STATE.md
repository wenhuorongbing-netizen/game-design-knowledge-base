# KB Project State

Date: 2026-04-28

## Current Milestone

Evidence Phase 2 evidence intake, ProjectOverlay intake, and limited claim promotion remain blocked pending user-provided evidence. The repository is ready to receive the first real sidecar, three to five user-authored manual notes, optionally one short manual quote, and one real project context packet, but no evidence has been ingested and no claim promotion request can be created yet.

## Verdict

- P0 safety status: PASS
- Draft KB release gate: PASS
- Verified source-backed masterclass release gate: BLOCKED
- Migration-exception structural status: PASS, 0 accepted migration exceptions
- Directional risk: ON_TRACK
- Repository root: `D:\Game\FOTN\knowledge`
- Canonical KB root: `kb/`
- Authoritative pipeline: root `package.json` scripts under `/tools`
- Root `rebuild_instruction.md`: absent in working tree, HEAD, origin/main, and GitHub raw access
- Evidence intake status: Phase 2 gate ready, first LegalSidecar request created, first manual notes request created, first optional manual quote request created, first ProjectOverlay request created, first claim promotion request report created, blocked pending user evidence. Sidecar, manual note, manual quote, ProjectOverlay, EvidenceRef graph, claim promotion gate workflows, pilot evidence slots, evidence dashboard, evidence status index, Phase 2 packet template/checklist/review gate, and evidence-aware search fields exist; no approved sidecars, EvidenceRefs, promotion requests, real ProjectOverlay records, or real evidence records ingested yet
- Private source quarantine: `_private_sources/`

## Completed This Repair

- Created `FIRST_PROJECT_OVERLAY_REQUEST.md` because no real project context was supplied.
- Created `kb/13_evidence/reports/FIRST_PROJECT_OVERLAY_INTAKE_REPORT.md`.
- Updated the ProjectOverlay evidence gap report to mark the first intake as blocked pending user project context.
- Updated designer navigation and quick problem solver entries to point users to the ProjectOverlay intake gate.
- Updated importer and validator evidence-report ignore rules so the blocked ProjectOverlay intake report is not treated as an EvidenceAuditReport entity.
- Confirmed no real ProjectOverlay record was created.
- Confirmed no project-specific claim, design decision, playtest observation, or EvidenceRef was invented.
- Confirmed sample ProjectOverlay records remain `unsupported_draft` and project-local.
- Created `kb/13_evidence/reports/FIRST_CLAIM_PROMOTION_REQUESTS_REPORT.md`.
- Confirmed `LegalSidecar`, `UserManualNote`, `UserManualQuote`, `EvidenceRef`, `ClaimPromotionRequest`, and `ClaimPromotionReview` records are all 0.
- Confirmed no EvidenceRef records were created from missing evidence.
- Confirmed no ClaimPromotionRequest records were created because there is no accepted evidence.
- Confirmed `claim_graph.json` and `CLAIM_GRAPH.md` were not changed because no evidence relationships exist.
- Confirmed no claim was promoted to `medium`, `strong`, or `verified`.
- Created `FIRST_MANUAL_QUOTE_REQUEST.md` because no lawful short user-provided quote was supplied.
- Created `kb/13_evidence/reports/FIRST_MANUAL_QUOTE_INTAKE_REPORT.md`.
- Updated evidence gap records to include the optional first manual quote request.
- Updated generated manual quote audit output so it reports the optional pending quote workflow.
- Confirmed no UserManualQuote or EvidenceRef record was created.
- Confirmed no quote was extracted, generated, rewritten, paraphrased, or used for claim verification.
- Created `FIRST_MANUAL_NOTES_REQUEST.md` because no three-to-five user-authored manual notes were supplied.
- Created `kb/13_evidence/reports/FIRST_MANUAL_NOTES_INTAKE_REPORT.md`.
- Updated evidence gap and priority evidence backlog records to include the blocked first manual note batch.
- Updated generated manual note audit output so it reports the blocked first manual-note request.
- Confirmed no UserManualNote or EvidenceRef record was created.
- Confirmed no claim was promoted beyond existing confidence.
- Created `FIRST_SIDECAR_REQUEST.md` because no user-provided LegalSidecar data was supplied.
- Updated the sidecar status index and Phase 2 intake review to mark the first sidecar intake as blocked pending user sidecar.
- Confirmed no LegalSidecar record was created.
- Confirmed no source status was upgraded.
- Confirmed no source body was parsed, summarized, quoted, embedded, or used for claim promotion.
- Created `kb/13_evidence/PHASE_2_INTAKE_GATE.md`.
- Created `kb/13_evidence/USER_EVIDENCE_PACKET_TEMPLATE.md`.
- Created `kb/13_evidence/USER_EVIDENCE_PACKET_CHECKLIST.md`.
- Created `kb/13_evidence/PHASE_2_INTAKE_REVIEW.md`.
- Created `kb/13_evidence/reports/PHASE_2_READINESS_REPORT.md`.
- Created `kb/13_evidence/reports/USER_EVIDENCE_DEPENDENCY_REPORT.md`.
- Extended EvidenceIntakeBatch schema and importer normalization for Phase 2 user evidence packet fields.
- Extended validator checks for packet user confirmations, missing references, manual note authorship, manual quote provenance/length, ProjectOverlay scope, PlaytestLog scope, and prohibited extracted source-body references.
- Confirmed no legal sidecar, manual note, manual quote, EvidenceRef, ProjectOverlay, PlaytestLog, or claim promotion record was created in this gate setup.
- Confirmed no claim was promoted and verified claims remain 0.
- Reconciled local working tree, HEAD, origin/main, and GitHub raw access for root `rebuild_instruction.md`.
- Confirmed GitHub raw root `rebuild_instruction.md` returns 404.
- Updated `GITHUB_TRUTH_SYNC_REPORT.md` with current remote truth proof.
- Expanded validator report-consistency coverage to include truth-sync, updated acceptance, updated validation, updated source-governance, evidence release, and roadmap reports.
- Confirmed no private PDF/EPUB/ZIP/7z files are tracked.
- Completed Evidence Phase 1 final release audit.
- Added `EVIDENCE_PHASE_1_RELEASE_REPORT.md`.
- Added `EVIDENCE_PHASE_1_AUDIT.md`.
- Added `EVIDENCE_PHASE_1_GAP_BACKLOG.md`.
- Added `EVIDENCE_PHASE_2_ROADMAP.md`.
- Added `UPDATED_KB_ACCEPTANCE_REVIEW.md`.
- Added `UPDATED_SOURCE_GOVERNANCE_AUDIT.md`.
- Added `UPDATED_VALIDATION_REPORT.md`.
- Confirmed draft/source-governed KB verdict is `ACCEPTED`.
- Confirmed verified source-backed masterclass verdict is `BLOCKED_PENDING_USER_EVIDENCE`.
- Confirmed current evidence record counts remain 0 for LegalSidecar, UserManualNote, UserManualQuote, EvidenceRef, ClaimPromotionRequest, and ClaimPromotionReview.
- Confirmed no claim was promoted and verified claims remain 0.
- Confirmed Evidence Phase 2 may begin only as user-supplied evidence intake.
- Completed evidence-aware navigation, search export, and portal visibility setup without parsing source bodies or adding evidence records.
- Added `kb/13_evidence/EVIDENCE_DASHBOARD.md`.
- Added `kb/13_evidence/EVIDENCE_STATUS_INDEX.md`.
- Added `kb/13_evidence/reports/EVIDENCE_NAVIGATION_REPORT.md`.
- Added `kb/13_evidence/reports/EVIDENCE_SEARCH_EXPORT_REPORT.md`.
- Added `kb/13_evidence/reports/EVIDENCE_PORTAL_AUDIT.md`.
- Updated root and KB-local start pages plus navigation paths to link evidence workflows, claim indexes, and pilot reports.
- Extended `search_index.json` records with `evidence_status`, `is_verified`, `has_evidence_refs`, `evidence_gap_count`, `entity_scope`, `related_evidence_refs`, `promotion_status`, and `evidence_gap`.
- Updated the optional static portal so detail views can display evidence status fields when present.
- Documented portal evidence filtering as a P1 follow-up because root authoritative scripts do not regenerate portal data.
- Confirmed evidence-aware search export covers 737 search documents with all required evidence fields present.
- Confirmed current verified search documents remain 0 and current search documents with EvidenceRef records remain 0.
- Completed a limited Systems / Economy / Playtesting / ProjectOverlay evidence pilot setup without parsing source bodies, inventing project evidence, or promoting claims.
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
- Audited 553 systems/economy/playtesting/project evidence-related entities and created 8 priority evidence slots.
- Confirmed sample ProjectOverlay and PlaytestLog records remain `unsupported_draft` and are not evidence.
- Added validation checks for ProjectOverlay scope, PlaytestLog observation separation, sample overlay/log draft status, and project/playtest evidence boundaries for verified general claims.
- Confirmed no system, economy, playtesting, ProjectOverlay, or PlaytestLog claim was promoted.
- Completed a limited Meaningful Decisions / Rules / Mechanics evidence pilot setup without parsing source bodies or promoting claims.
- Added `kb/13_evidence/manual_notes/meaningful_decisions_note_template.md`.
- Added `kb/13_evidence/manual_notes/rules_mechanics_note_template.md`.
- Added `kb/13_evidence/reports/MEANINGFUL_DECISIONS_EVIDENCE_PILOT.md`.
- Added `kb/13_evidence/reports/meaningful_decisions_entity_audit.md`.
- Added `kb/13_evidence/reports/rules_mechanics_evidence_gap_report.md`.
- Added `kb/13_evidence/promotion_requests/meaningful_decisions_promotion_backlog.md` as a non-entity backlog.
- Audited 239 meaningful-decision/rules/mechanics-related entities and created 6 priority evidence slots.
- Confirmed all Pilot B targets remain draft/source-governed unless future legal evidence and reviewer approval exist.
- Confirmed no meaningful decision, rules, mechanics, formal elements, skill/chance, challenge, or balance claim was promoted.
- Completed a limited Game Feel evidence pilot setup without parsing source bodies or promoting claims.
- Added `kb/13_evidence/manual_notes/game_feel_note_template.md`.
- Added `kb/13_evidence/manual_notes/game_feel_chapter_note_template.md`.
- Added `kb/13_evidence/reports/GAME_FEEL_EVIDENCE_PILOT.md`.
- Added `kb/13_evidence/reports/game_feel_evidence_gap_report.md`.
- Added `kb/13_evidence/reports/game_feel_entity_audit.md`.
- Added `kb/13_evidence/promotion_requests/game_feel_promotion_backlog.md` as a non-entity backlog.
- Audited 108 game-feel-related entities and created 108 evidence slots.
- Confirmed all audited game-feel entities currently have 0 EvidenceRef records and remain draft/source-governed.
- Confirmed no Game Feel claim was promoted and no verified claims were created.
- Updated importer/validator ignore rules so pilot reports and backlogs are not mistaken for evidence entities.
- Implemented the EvidenceRef graph and ClaimPromotion gate.
- Rewrote `kb/13_evidence/CLAIM_PROMOTION_WORKFLOW.md` with verified-claim gates, promotion levels, scope rules, and project/playtest boundary rules.
- Added ClaimPromotionRequest and ClaimPromotionReview templates plus ignored example stubs.
- Added generated claim promotion audit reports: `CLAIM_PROMOTION_AUDIT.md`, `UNSUPPORTED_CLAIMS_INDEX.md`, and `VERIFIED_CLAIMS_INDEX.md`.
- Added relationship types for `supported_by`, `challenged_by`, `evidence_for`, `evidence_against`, `promoted_from`, `reviewed_by`, `blocked_by_evidence_gap`, `applies_in_project`, and `observed_in_playtest`.
- Extended importer graph export to represent evidence support, challenge, promotion review, evidence gaps, project application, and playtest observation edges.
- Extended validator checks for promotion request reviewer/rationale, target claims, EvidenceRef IDs, evidence-scope alignment, promotion review reviewer/rationale, claim status/confidence conflicts, and project/playtest universal-doctrine misuse.
- Updated source audit tooling to generate claim promotion audit and unsupported/verified claim indexes.
- Confirmed current verified claims remain 0 and no unsupported claim was promoted.
- Implemented the UserManualNote workflow under `kb/13_evidence/manual_notes/`.
- Implemented the UserManualQuote workflow under `kb/13_evidence/manual_quotes/`.
- Added manual note and manual quote templates plus ignored example stubs.
- Added manual note intake and manual quote audit reports.
- Updated UserManualNote and UserManualQuote schemas to match the evidence workflow fields.
- Extended importer support for `note_id`, `quote_id`, manual note routing, manual quote routing, and safe manual quote search filtering.
- Extended validator checks for manual note source basis, user interpretation confidence, note type/status, quote source basis, quote status, quote word count, user-provided quote status, automated extraction blocking, and high-risk quote sidecar review.
- Kept templates and example stubs out of imports so no fake notes or quotes enter the KB.
- Did not parse private sources, summarize source files, extract quotes, or promote claims.
- Implemented the LegalSidecar workflow under `kb/13_evidence/sidecars/`.
- Added `source_sidecar_template.yaml` with default `approval_status: pending_review` and `allowed_for_ai_processing: false`.
- Added sidecar README, review guide, status index, and generated sidecar audit report.
- Added `kb/01_sources/USER_REQUIRED_EVIDENCE.md`.
- Updated `kb/01_sources/sources.json` so every SourceDocument can link `legal_sidecar_ids`.
- Preserved all high-risk sources as `metadata_only_quarantined`; no source was upgraded automatically.
- Extended importer and validator for YAML sidecar records while ignoring sidecar templates and documentation.
- Added validator checks for sidecar source/work references, missing approval status, default full-processing risk, source AI-processing without sidecar, and high-risk `process_full_text` without explicit sidecar approval.
- Updated source governance audit to generate `kb/13_evidence/reports/SIDECAR_AUDIT_REPORT.md`.
- Created `kb/13_evidence/` as the canonical evidence intake architecture layer, including future record folders for sidecars, manual notes, manual quotes, open sources, evidence refs, evidence gaps, intake batches, promotion requests, reviews, and reports.
- Added LegalSidecar, UserManualNote, UserManualQuote, OpenSourceReference, OfficialMetadataReference, EvidenceRef, ClaimPromotionRequest, ClaimPromotionReview, EvidenceGap, EvidenceIntakeBatch, and EvidenceAuditReport concepts.
- Added evidence intake plan, evidence reference schema documentation, claim promotion workflow, gap register, priority evidence backlog, and validation rules.
- Added JSON schemas under `kb/13_evidence/schemas/`.
- Extended the importer so future evidence entities can be scanned, normalized, schema-generated, exported, searched, and connected to the graph.
- Extended the validator so EvidenceRef records, user manual quotes, sidecar status, verified-claim evidence requirements, and high-risk source evidence boundaries are checked.
- Did not create legal sidecars, manual notes, manual quotes, or EvidenceRef records.
- Did not promote any claim to verified.
- Did not parse or summarize high-risk source body text.
- Moved placeholder notes for quote, comparison, exercise, anti-pattern, and case-study card folders into `kb/05_cards/PLACEHOLDER_CARD_FOLDERS.md`.
- Removed README placeholders from entity scan folders to eliminate `placeholder_readme_in_entity_folder` accepted exceptions.
- Updated `ENTITY_TYPE_MIGRATION_PLAN.md` with the README-placeholder follow-up cleanup.
- Added reversible structure simplification documentation without moving canonical KB content.
- Added folder-level README markers for canonical, generated, optional, legacy, deprecated, and tool folders.
- Added generated-export marker at `kb/11_import_export/export/README.md`.
- Replaced the legacy snapshot README with a clear non-canonical quarantine notice.
- Added `STRUCTURE_MAP.md` and `STRUCTURE_SIMPLIFICATION_PLAN.md`.
- Added first-time user entry documentation: `REPO_MAP.md`, `HOW_TO_USE_THIS_KB.md`, `HOW_TO_ADD_KNOWLEDGE.md`, `WHAT_NOT_TO_TOUCH.md`, and `MAINTAINER_CHECKLIST.md`.
- Expanded root `START_HERE.md` into a question-driven onboarding page.
- Added KB-local entry files: `kb/START_HERE.md`, `kb/INDEX.md`, `kb/LEARNING_PATHS.md`, and `kb/DESIGNER_WORKFLOWS.md`.
- Updated `README.md` to start with `Start here: [START_HERE.md](START_HERE.md)`.
- Rechecked the P0 contradiction list and confirmed no active root `rebuild_instruction.md` remains.
- Replaced the deprecated BookOS instruction body with a stub-only warning under `docs/deprecated/`.
- Strengthened legacy user-file ingest high-risk marker detection for curly apostrophes and private manifest metadata fields.
- Corrected stale acceptance-review text so accepted migration exceptions are reported as 5, not 477.
- Completed follow-up cleanup reducing accepted migration exceptions from 5 to 0.
- Added explicit `entity_type` frontmatter to 472 legacy generated Markdown entity files.
- Reduced accepted migration exceptions from 477 to 5.
- Reduced missing `entity_type` exceptions from 472 to 0.
- Created `ENTITY_TYPE_MIGRATION_PLAN.md`.
- Regenerated `MIGRATION_EXCEPTIONS_REPORT.md`.
- Regenerated import/export artifacts and validation reports.
- Confirmed root `rebuild_instruction.md` is absent.
- Kept legacy BookOS instruction under `docs/deprecated/BOOKOS_REBUILD_INSTRUCTION_DEPRECATED.md`.
- Hardened `kb-tools/ingest-user-files.mjs` so user files default to `pending_review` / `allowed_metadata_only`, not accepted.
- Added `unknown scanned copy` to high-risk markers.
- Added `risk_level` to user-file ingest records.
- Guarded legacy `kb-tools` entry scripts behind `ALLOW_LEGACY_KB_TOOLS=true`.
- Added `kb-tools/README.md` describing deprecation and opt-in rules.
- Updated validator output so PASS means P0 safety pass, not structural perfection.
- Added `MIGRATION_EXCEPTIONS_REPORT.md` generation to expose accepted migration exceptions.
- Added validator checks for active root direction-drift instructions.
- Added validator checks for report contradictions between `VALIDATION_REPORT.md`, `VALIDATION_REPORT.json`, `MIGRATION_EXCEPTIONS_REPORT.md`, and `rebuild_instruction.md` file-state claims.
- Regenerated `VALIDATION_REPORT.md`, `VALIDATION_REPORT.json`, `MIGRATION_EXCEPTIONS_REPORT.md`, import/export artifacts, source-governance audit, and coverage summary after truth-alignment fixes.
- Added direct README link to `KB_REBUILD_INSTRUCTION.md`.
- Moved local private PDF/EPUB source files from the root into `_private_sources/` without reading or parsing them.
- Removed obsolete `kb/07_workflows` compatibility schema and made `kb/08_workflows/workflow_pack_schema.json` the required workflow schema.
- Added ProjectOverlay and PlaytestLog scanning/schemas to the importer and validator.
- Added draft sample ProjectOverlay and PlaytestLog records as unsupported scaffolds.
- Added `50-game-design-masters-kb/LEGACY_QUARANTINE.md`.

## Legal Status Summary

- High-risk sources remain metadata-only.
- Approved legal sidecars: 0.
- LegalSidecar records: 0.
- First LegalSidecar intake status: blocked pending user-provided sidecar data.
- Sources with sidecar link field: 18.
- Sources allowing AI processing: 0.
- High-risk sources with `process_full_text`: 0.
- UserManualNote records: 0.
- First UserManualNote batch status: blocked pending three to five user-authored manual notes.
- UserManualQuote records: 0.
- First UserManualQuote intake status: optional, blocked pending one lawful short user-provided quote.
- Manual quotes generated from source body: 0.
- EvidenceRef records: 0.
- ClaimPromotionRequest records: 0.
- ClaimPromotionReview records: 0.
- First claim promotion request status: blocked pending accepted user/legal evidence.
- Real ProjectOverlay records: 0.
- First ProjectOverlay intake status: blocked pending user-provided project context.
- Sample ProjectOverlay records: 1, `unsupported_draft`, not evidence.
- Game Feel entities audited: 108.
- Game Feel evidence slots created: 108.
- Meaningful Decisions / Rules / Mechanics entities audited: 239.
- Meaningful Decisions / Rules / Mechanics evidence slots created: 6.
- Systems / Economy / Playtesting / ProjectOverlay entities audited: 553.
- Systems / Economy / Playtesting / ProjectOverlay evidence slots created: 8.
- ProjectOverlay records audited: 1 sample, unsupported_draft.
- PlaytestLog records audited: 1 sample, unsupported_draft.
- Evidence-aware search documents: 737.
- Verified search documents: 0.
- Search documents with EvidenceRef records: 0.
- Search documents with evidence gaps: 657.
- Search documents with required evidence fields present: 737.
- Unsupported or unverified claims indexed: 164.
- Verified source-backed claims: 0.
- High-risk body extraction: disabled.
- Embeddings from high-risk sources: not generated.
- `user_provided_file` does not imply legal AI-processing permission.

## Validation Summary

- Import/export counts: 859 entities, 8405 relationships, 737 search documents.
- Import errors: 0.
- Import warnings: 0.
- Validator P0 issues: 0.
- Validator warnings: 0.
- Accepted migration exceptions: 0.
- Source governance audit: PASS.

## Next Action

Next recommended work:

`submit-first-project-overlay-context`

This next action should ask the user to provide one real project context packet using `FIRST_PROJECT_OVERLAY_REQUEST.md`. Claim promotion remains blocked until at least one accepted evidence record exists.

## Do-Not-Redo List

- Do not rebuild BookOS.
- Do not add login, user auth, reading sessions, personal library, forum CRUD, quote book, or daily sentence product features.
- Do not parse high-risk PDF/EPUB body text.
- Do not summarize copyrighted book chapters.
- Do not generate embeddings from quarantined files.
- Do not promote draft cards, lenses, lessons, workflows, exercises, or claims to verified without evidence.
