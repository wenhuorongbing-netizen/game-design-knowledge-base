# Evidence Phase 2 Roadmap

Date: 2026-04-27

## Phase 2 Goal

Begin controlled user evidence intake. Phase 2 should upgrade a small number of draft entities from `unsupported_draft` to `user_interpretation` or `weak` only when evidence exists. It should not attempt a mass verification pass.

## Stage 1 - First Legal Sidecar

Goal: register one lawful source permission record.

Tasks:

- Create one LegalSidecar from `kb/13_evidence/sidecars/source_sidecar_template.yaml`.
- Link it to an existing `source_document_id` and `work_id`.
- Keep default status `pending_review` until human review is complete.
- Do not allow full processing unless the sidecar explicitly permits it and the source risk allows it.

Acceptance criteria:

- Sidecar validates.
- Source registry remains metadata-only unless the sidecar approval explicitly allows a narrower operation.
- No source body is parsed.

## Stage 2 - First User Manual Notes

Goal: add user-authored reading/design notes, not automated summaries.

Tasks:

- Add 3 to 5 UserManualNote records for priority pilot entities.
- Prefer Game Feel, Meaningful Decisions, and Systems/Economy targets.
- Link each note to related cards, claims, or lenses.
- Add EvidenceRef records that point to the notes.

Acceptance criteria:

- Notes use `source_basis: user_manual_note`.
- Notes distinguish user summary, user interpretation, and user questions.
- Claims are not promoted beyond evidence scope.

## Stage 3 - First Manual Quote, Optional

Goal: test quote workflow only if the user supplies a lawful short quote.

Tasks:

- Add one UserManualQuote record only if user-provided.
- Enforce quote length threshold.
- Link quote to source/work and optional sidecar.

Acceptance criteria:

- Quote source basis is `user_manual_quote`.
- Quote is not agent-extracted.
- Quote does not support verified claim if sidecar is pending.

## Stage 4 - Limited Claim Promotion

Goal: promote 3 to 5 selected claims cautiously.

Promotion target:

- Allowed: `user_interpretation` or `weak`.
- Avoid: `strong` or `verified` unless evidence is strong, legal, reviewed, and bounded.

Acceptance criteria:

- Every promotion request has reviewer, rationale, EvidenceRef, target claim, and limitation.
- Unsupported claims remain visibly draft.
- No metadata-only evidence supports verified claims.

## Stage 5 - First Real ProjectOverlay

Goal: replace sample project scaffold with one real project application record.

Tasks:

- Add a real ProjectOverlay based on user-provided project context.
- Keep all conclusions scoped to the project.
- Link relevant cards, lenses, workflows, and EvidenceRef records.

Acceptance criteria:

- Entity scope remains `project_overlay`.
- Project observations are not generalized as universal doctrine.

## Stage 6 - First Real PlaytestLog

Goal: capture one real playtest record.

Tasks:

- Add one PlaytestLog using the existing template.
- Separate observed facts, participant quote, tester interpretation, design hypothesis, design decision, and next action.

Acceptance criteria:

- Entity scope remains `playtest_log`.
- Playtest evidence supports local project decisions only unless separately reviewed.

## Stage 7 - Evidence-Weighted Coverage Update

Goal: update coverage based on actual evidence, not structure alone.

Tasks:

- Add an evidence coverage section to `kb/12_quality/COVERAGE_MATRIX.md`.
- Track counts by source basis, confidence, and evidence refs.
- Keep structural and verified coverage separate.

Acceptance criteria:

- Users can see which areas are structurally rich but evidence-poor.

## Next Exact Prompt

`build-evidence-phase-2-first-user-evidence-intake`
