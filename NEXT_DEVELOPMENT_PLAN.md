# Next Development Plan

Date: 2026-04-28

## Phase 0 - Truth Synchronization

Goal: confirm local `main`, `origin/main`, reports, validation output, and GitHub-visible repository state agree before evidence intake.

Tasks:

- Review `KB_ACCEPTANCE_REVIEW.md`.
- Review `VALIDATION_REPORT.md`.
- Confirm `kb/11_import_export/import_report.md` has 0 issues.
- Confirm root `rebuild_instruction.md` is absent or a safe deprecated stub in both local HEAD and `origin/main`.
- Confirm deprecated BookOS instruction is not active and exists only under `docs/deprecated/`.
- Confirm user-file ingest defaults are safe.
- Confirm private PDF/EPUB/archive files are not committed.

Validation:

- `npm run kb:export`
- `npm run kb:validate`
- `npm run kb:audit`
- `npm run kb:coverage`

Next exact prompt:

`build-evidence-phase-2-first-user-evidence-intake`, only after `GITHUB_TRUTH_SYNC_REPORT.md` reports working tree, HEAD, origin/main, and GitHub raw are synchronized with 0 P0 issues, 0 warnings, and 0 accepted exceptions.

## Phase 1 - Evidence Intake Architecture

Status: complete and final-audited, including LegalSidecar, UserManualNote, UserManualQuote, EvidenceRef graph, ClaimPromotion gate workflows, pilot evidence slots, evidence-aware navigation/search, and Phase 1 release reports.

Goal: create the safe evidence intake infrastructure without adding evidence records or promoting claims.

Completed:

- Added `kb/13_evidence/` with future record folders for evidence refs, evidence gaps, intake batches, sidecars, manual notes, manual quotes, open sources, promotion requests, reviews, and reports.
- Added sidecar, manual note, manual quote, open source reference, official metadata reference, evidence reference, promotion request, promotion review, evidence gap, intake batch, and audit report schemas.
- Added evidence intake plan, EvidenceRef schema documentation, claim promotion workflow, gap register, priority backlog, and validation rules.
- Extended importer/exporter and validator for future evidence entities.
- Added LegalSidecar template, review guide, status index, and audit report.
- Added `legal_sidecar_ids` links to SourceDocument records without upgrading existing sources.
- Added validation rules for sidecar approval status, source/work references, AI-processing permission, and high-risk full-text processing.
- Added UserManualNote and UserManualQuote templates and ignored example stubs.
- Added validation rules for manual note provenance, manual quote provenance, quote length, user-provided quote status, and automated extraction blocking.
- Added manual note intake and manual quote audit reports.
- Added ClaimPromotionRequest and ClaimPromotionReview templates plus ignored example stubs.
- Added claim promotion audit, unsupported claims index, and verified claims index generation.
- Added evidence graph relationship types for support, challenge, promotion, review, evidence gaps, project application, and playtest observation.
- Added validation rules for claim status/confidence conflict, promotion reviewer/rationale, evidence-scope alignment, and local project/playtest observation boundaries.
- Added a limited Game Feel evidence pilot with 108 audited entities, 108 evidence slots, manual note templates, evidence gap reports, entity audit, and promotion backlog.
- Added a limited Meaningful Decisions / Rules / Mechanics evidence pilot with 239 audited entities, 6 priority evidence slots, manual note templates, evidence gap reports, entity audit, and promotion backlog.
- Added a limited Systems / Economy / Playtesting / ProjectOverlay evidence pilot with 553 audited entities, 8 priority evidence slots, manual note templates, project/playtest gap reports, systems/economy entity audit, and project/playtest evidence scope validation.
- Added evidence-aware navigation and dashboard pages so humans can browse draft/verified/project/playtest status quickly.
- Extended the search export with evidence_status, is_verified, has_evidence_refs, evidence_gap_count, entity_scope, related_evidence_refs, promotion_status, and evidence_gap.
- Added evidence navigation, search export, and portal audit reports.
- Preserved current claim confidence states.
- Added `EVIDENCE_PHASE_1_RELEASE_REPORT.md`.
- Added `EVIDENCE_PHASE_1_AUDIT.md`.
- Added `EVIDENCE_PHASE_1_GAP_BACKLOG.md`.
- Added `EVIDENCE_PHASE_2_ROADMAP.md`.
- Added updated acceptance, source-governance, and validation closeout reports.
- Confirmed draft/source-governed KB verdict is `ACCEPTED`.
- Confirmed verified source-backed masterclass verdict is `BLOCKED_PENDING_USER_EVIDENCE`.
- Confirmed no real evidence records exist yet and verified claims remain 0.

Validation:

- `npm run kb:export`
- `npm run kb:validate`
- `npm run kb:audit`

Next exact prompt:

`build-evidence-phase-2-first-user-evidence-intake`

## Phase 2 - Evidence Intake Records

Status: intake gate ready, no evidence ingested.

Goal: begin moving selected draft scaffolds toward source-backed knowledge.

Tasks:

- Ask the user to submit the first evidence packet using `kb/13_evidence/USER_EVIDENCE_PACKET_TEMPLATE.md`.
- Review the packet against `kb/13_evidence/USER_EVIDENCE_PACKET_CHECKLIST.md`.
- Accept the packet for validation only after all required user confirmations are true.
- Add the first legal sidecar.
- Add 3 to 5 user manual notes.
- Add one user manual quote only if lawful and user-provided.
- Add EvidenceRef records to selected claims/cards.
- Promote 3 to 5 selected claims only to `user_interpretation` or `weak` unless stronger legal evidence and reviewer approval exist.
- Add the first real ProjectOverlay.
- Add the first real PlaytestLog.
- Update coverage matrix based on evidence, not structure alone.

Acceptance criteria:

- User confirms notes are user-authored.
- User confirms quotes are user-provided.
- User confirms no copied chapter text, no long quotations, and no AI-generated summaries from private source bodies.
- No high-risk body ingestion without sidecar and explicit allowed operation.
- No claim promoted to verified without legal evidence and reviewer approval.
- No project or playtest observation treated as universal doctrine.

Next exact prompt:

`submit-first-user-evidence-packet`

## Phase 3 - Project Application

Goal: replace unsupported draft ProjectOverlay and PlaytestLog samples with real project evidence without contaminating general KB doctrine.

Tasks:

- Replace sample ProjectOverlay with a real project overlay.
- Replace sample PlaytestLog with real playtest observations.
- Add design decision log records.
- Keep project-specific findings separate from general KB doctrine.

## Explicitly Deferred

- BookOS app
- reading session app
- user auth
- forum CRUD
- personal book tracker
- Vue/Spring/MySQL implementation
