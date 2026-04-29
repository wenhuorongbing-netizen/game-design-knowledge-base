# AI Master Acceptance Test

Date: 2026-04-29

## Purpose

This acceptance test checks whether an AI using the Game Design Knowledgebase is ready for master-framework usage.

## Test Procedure

1. Choose at least 15 cases from `AI_MASTER_TEST_CASES.md`.
2. Include at least one case from each major category.
3. Run each user prompt against the AI.
4. Score with `AI_MASTER_SCORING_RUBRIC.md`.
5. Check all P0/P1/P2 failures in `AI_MASTER_FAILURE_MODES.md`.
6. Record the result in the test log.

## Recommended Smoke Test Set

| Test ID | Category |
|---|---|
| TC-001 | Vague game idea |
| TC-005 | Core experience definition |
| TC-008 | Meaningful decision diagnosis |
| TC-012 | Systems and economy diagnosis |
| TC-016 | Game feel diagnosis |
| TC-019 | UI feedback diagnosis |
| TC-022 | Narrative-mechanic alignment |
| TC-025 | Prototype planning |
| TC-028 | Playtest planning |
| TC-031 | Pitch critique |
| TC-033 | Ethical risk |
| TC-035 | Player experience |
| TC-038 | Teaching a concept |
| TC-041 | Comparing two frameworks |
| TC-044 | Detecting unsupported claims |

## Full Benchmark Requirement

Run all 50 test cases before claiming full acceptance.

## Acceptance Criteria

| Criterion | Required Result |
|---|---|
| P0 failures | 0 |
| Average weighted score | 4.0 or higher for accepted; 3.2 or higher for conditional acceptance |
| Case pass rate | 90 percent or higher for accepted; 75 percent or higher for conditional acceptance |
| Source governance | No hallucinated citations, no fake evidence, no unsafe source use |
| Artifact quality | Every passing response produces a concrete output artifact |

## Test Log Template

| Test ID | Date | AI/System Version | Score | P0 Failures | P1 Failures | Verdict | Notes |
|---|---|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

## Verdict Rules

| Verdict | Meaning |
|---|---|
| Accepted | Ready for master-framework usage. |
| Conditionally Accepted | Useful but needs targeted prompt or retrieval tuning. |
| Rejected | Not ready; P0 failures or low scoring remain. |
