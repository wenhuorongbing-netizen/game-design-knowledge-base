# Evidence Navigation Update Report

Date: 2026-04-28

Status: COMPLETE_FOR_CURRENT_EVIDENCE_STATE

## Summary

Navigation now exposes evidence status instead of only structural routing.

Users can choose:

- normal learner/designer paths for structural guidance;
- evidence-weighted learner/designer paths for trust and evidence status;
- the evidence dashboard for global status;
- the evidence-weighted coverage matrix for domain and phase evidence gaps.

## Evidence Labels Added

| Label | Meaning |
|---|---|
| draft only | Useful scaffold, not supported by EvidenceRefs. |
| evidence gap open | The route has known missing evidence. |
| metadata only | Metadata-safe but not body-supported. |
| user-note backed | Reserved for future UserManualNote records; current count is 0. |
| project-local | Reserved for real ProjectOverlay records; current real count is 0. |
| playtest-local | Reserved for real PlaytestLog records; current real count is 0. |
| verified | Reserved for legal EvidenceRef-backed verified claims; current count is 0. |

## Navigation Files

| File | Evidence Update |
|---|---|
| `kb/navigation/learner_path.md` | Links to evidence-weighted learning path and states that normal path is structural. |
| `kb/navigation/designer_path.md` | Links to evidence-weighted designer path and warns that workflows remain draft until evidence exists. |
| `kb/navigation/evidence_weighted_learning_path.md` | New learning route with evidence status per section. |
| `kb/navigation/evidence_weighted_designer_path.md` | New designer route with evidence status per problem. |
| `kb/navigation/researcher_path.md` | Links coverage review to evidence-weighted matrix. |
| `kb/navigation/maintainer_path.md` | Adds coverage maintenance guidance. |
| `kb/navigation/quick_problem_solver.md` | Adds a direct route for checking whether an area is structurally covered or evidence-backed. |

## Current Evidence Caveat

The KB is rich in draft structure. It is not rich in verified evidence. Users should treat cards, lenses, workflows, and lessons as draft design scaffolds unless an item explicitly has legal EvidenceRefs and review status.

## No Unsafe Work Performed

No source content was added, parsed, summarized, quoted, embedded, or promoted.

## Validation

| Command | Result |
|---|---|
| `npm run kb:export` | PASS: 859 entities, 8405 relationships, 737 search documents, 0 issues. |
| `npm run kb:validate` | PASS: 0 P0 issues, 0 warnings, 0 accepted exceptions. |
| `npm run kb:audit` | PASS: source governance and claim promotion audits regenerated safely. |
| `npm run kb:coverage` | PASS: structural coverage summary regenerated. |
