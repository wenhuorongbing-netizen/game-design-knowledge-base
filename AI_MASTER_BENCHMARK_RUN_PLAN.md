# AI Master Benchmark Run Plan

Date: 2026-04-29

## Purpose

This run plan defines how to test whether the AI Game Design Master Framework produces master-like, source-governed game design responses.

## Benchmark Rules

- Do not parse private or high-risk source body text.
- Do not summarize copyrighted chapters.
- Do not invent legal sidecars, user notes, manual quotes, project facts, or playtest logs.
- Do not promote claims to verified.
- Do not use local project evidence unless the user supplies it.
- Mark assumptions, `source_basis`, `confidence`, and evidence gaps.

## Run Sequence

| Step | Action | Output |
|---|---|---|
| 1 | Confirm preflight status. | `AI_MASTER_BENCHMARK_PREFLIGHT_REPORT.md` |
| 2 | Select 15 smoke cases. | `AI_MASTER_BENCHMARK_RUN_001.md` |
| 3 | Collect target AI responses. | Response log slots |
| 4 | Score each response. | Scoring template entries |
| 5 | Check P0/P1/P2 failure modes. | Failure notes |
| 6 | Produce run verdict. | Updated benchmark run report |

## Selected Smoke Categories

Run 001 covers:

- vague game idea;
- core experience definition;
- meaningful decision diagnosis;
- systems and economy diagnosis;
- game feel diagnosis;
- UI feedback diagnosis;
- narrative-mechanic alignment;
- prototype planning;
- playtest planning;
- pitch critique;
- ethical risk;
- player experience;
- teaching a concept;
- comparing frameworks;
- detecting unsupported claims.

## Run Status Model

| Status | Meaning |
|---|---|
| planned | Cases selected, no target responses yet. |
| waiting_for_target_ai_outputs | Response slots exist; no AI output has been evaluated. |
| scoring_in_progress | Responses exist and are being scored. |
| completed | All selected cases scored. |
| blocked | P0 safety issue or missing benchmark asset blocks the run. |

## Current Run

| Run ID | Status | Cases | Notes |
|---|---|---|---|
| benchmark_run_001 | waiting_for_target_ai_outputs | 15 | Prepared only; no fake responses created. |

