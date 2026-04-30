# AI Master Benchmark Phase 2 Plan

Date: 2026-04-30

## Phase Name

Real Target AI Benchmark Execution Phase.

## Goal

Collect real target AI outputs for Benchmark Run 002, preserve them without editing, and prepare them for scoring under the existing rubric.

## Scope

Phase 2 includes:

- selecting the target AI;
- recording target AI identity;
- sending the 20 Run 002 prompts;
- preserving raw outputs;
- marking missing outputs as waiting_for_target_ai_output;
- scoring only collected responses;
- reporting P0, P1, and P2 failures;
- updating scoreboards only from real scores.

## Out Of Scope

- no private or high-risk source body parsing;
- no copyrighted chapter summaries;
- no legal sidecar invention;
- no user note invention;
- no manual quote invention;
- no project fact invention;
- no playtest log invention;
- no target output fabrication;
- no score fabrication;
- no verified claim promotion;
- no app feature development.

## Required Inputs

| Input | Required | Notes |
|---|---|---|
| target AI identity | yes | Name, model/version if known, and context supplied. |
| Run 002 case set | yes | Use `AI_MASTER_BENCHMARK_RUN_002.md`. |
| raw target outputs | yes for scoring | Missing outputs must not be scored. |
| scoring rubric | yes | Use `AI_MASTER_SCORING_RUBRIC.md`. |
| failure modes | yes | Use `AI_MASTER_FAILURE_MODES.md`. |
| runtime pack | recommended | Use `AI_MASTER_RUNTIME_PACK.md` as context. |

## Execution Sequence

1. Confirm repository validation remains clean.
2. Record target AI identity.
3. For each Run 002 case, send the exact prompt.
4. Paste the raw response into the response log without editing.
5. Mark response status.
6. Stop if responses are missing.
7. Score only collected responses.
8. Update score tables and dashboards.
9. Preserve P0 failures exactly.
10. Re-run validation.

## Acceptance Criteria

- `report.md` exists and contains the Prompt 1 gate section.
- Run 002 response collection records real outputs only.
- Missing outputs are not scored.
- Target identity is recorded.
- No fake outputs or scores are created.
- Validation remains clean.
