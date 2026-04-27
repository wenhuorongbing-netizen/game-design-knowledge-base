# Next Development Plan

Date: 2026-04-27

## Phase 0 - P0 Acceptance Re-Review

Goal: confirm P0 finalization is accepted.

Tasks:

- Review `KB_ACCEPTANCE_REVIEW.md`.
- Review `VALIDATION_REPORT.md`.
- Confirm `kb/11_import_export/import_report.md` has 0 issues.
- Confirm deprecated BookOS instruction is not active.
- Confirm user-file ingest defaults are safe.

Validation:

```powershell
npm run kb:validate
npm run kb:audit
```

Next exact prompt:

```text
review-gdkb-p0-final
```

## Phase 1 - Evidence Intake

Goal: begin moving selected draft scaffolds toward source-backed knowledge.

Tasks:

- Add legal sidecars or lawful source replacements.
- Attach user notes to priority dossiers.
- Add evidence refs to selected claims/cards.
- Keep all unverified content as draft.

Acceptance criteria:

- No high-risk body ingestion without sidecar.
- No claim promoted to verified without evidence.

## Phase 2 - Project Application

Goal: add ProjectOverlay records without contaminating general KB doctrine.

Tasks:

- Create project overlay schema.
- Create design decision log template.
- Create playtest log template.
- Add one sanitized sample overlay only after user approval.

## Explicitly Deferred

- BookOS app
- reading session app
- user auth
- forum CRUD
- personal book tracker
- Vue/Spring/MySQL implementation
