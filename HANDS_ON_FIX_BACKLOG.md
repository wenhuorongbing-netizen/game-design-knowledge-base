# Hands-On Fix Backlog

Date: 2026-04-30

## Purpose

This backlog captures usability improvements discovered during hands-on acceptance test planning.

## P1 Fixes

| backlog_id | issue | affected files | repair recommendation | acceptance criteria |
|---|---|---|---|---|
| HFB-P1-002 | First-time user may still see too many root files. | README.md; WHAT_TO_OPEN_FIRST.md; USE_THIS_FIRST.md | Keep the first-use path at top of README and avoid adding more root entry points unless necessary. | New user can identify first file in under 2 minutes. |
| HFB-P1-003 | AI may ignore source/confidence footer. | hands_on_prompts/; AI_CONTEXT_MINIMUM.md | Keep self-check prompts and require rejection of outputs without source_basis/confidence. | Every hands-on prompt retains self-check and footer rules. |
| HFB-P1-004 | No-project learner may treat hypothetical work as real project evidence. | NO_PROJECT_* | Keep "not project evidence" and "not playtest evidence" language visible. | No no-project page implies real project/playtest evidence exists. |

## Resolved Fixes

| backlog_id | issue | resolution | acceptance criteria |
|---|---|---|---|
| HFB-P1-001 | Root prompt references may expect USE_CASE_HUB.md, but the actual hub was USE_CASES/README.md. | Created root USE_CASE_HUB.md and linked it from README, USE_THIS_FIRST, HANDS_ON_START_HERE, WHAT_TO_OPEN_FIRST, and USE_CASES/README.md. | No active doc references missing USE_CASE_HUB.md as a required file. |

## P2 Fixes

| backlog_id | issue | affected files | repair recommendation | acceptance criteria |
|---|---|---|---|---|
| HFB-P2-001 | Worked examples are helpful but separate from prompts. | WORKED_EXAMPLES_README.md; hands_on_prompts/README.md | Add cross-links from high-use prompt files to matching examples if needed. | Users can find an example from prompt files. |
| HFB-P2-002 | Context pack selection may still be too abstract for some users. | AI_CONTEXT_PACKS.md | Add a one-question decision tree if users still hesitate. | User can choose CP01-CP07 with one table. |
| HFB-P2-003 | 30-day no-project path may feel large. | NO_PROJECT_30_DAY_HANDS_ON_PLAN.md | Add "minimum viable month" option if needed. | User can complete a lightweight version. |

## Deferred

Do not implement these unless explicitly requested:

- app UI;
- accounts;
- reading tracker;
- forum features;
- automated source parsing;
- fake benchmark scoring;
- fake project/playtest evidence.
