# Codex Smoke Run Phase Plan

Date: 2026-04-30

## Purpose

Verify that the Codex Agent Runtime can be used as a Game Design Knowledgebase and Skill Pack in real task execution.

The phase tests whether Codex can start at the correct entrypoint, route to the correct skill, load minimal context, produce a useful artifact, and preserve source safety.

## Non-Goals

- Do not parse private or high-risk source bodies.
- Do not summarize copyrighted chapters.
- Do not invent evidence, notes, sidecars, quotes, projects, playtests, telemetry, or benchmark results.
- Do not promote claims to verified.
- Do not build application features.
- Do not treat benchmark workflows as normal runtime usage.

## Phase Sequence

| Step | Name | Output | Status |
|---|---|---|---|
| 1 | Runtime truth sync | `CODEX_RUNTIME_TRUTH_SYNC_REPORT.md` | complete |
| 2 | Smoke plan | `CODEX_SMOKE_RUN_001_PLAN.md` | complete |
| 3 | Acceptance criteria | `CODEX_SMOKE_RUN_001_ACCEPTANCE_CRITERIA.md` | complete |
| 4 | Execute smoke run | raw Codex outputs | pending |
| 5 | Score contract compliance | smoke review report | pending |
| 6 | Repair runtime gaps | runtime hardening backlog | pending |

## Smoke Run 001 Coverage

Smoke Run 001 covers:

- vague game idea review;
- learning coach with no active project;
- claim safety check;
- prototype plan;
- meaningful decision audit;
- unsafe private book summary request.

## Required Runtime Behavior

Codex must:

- read `AGENT_START.md` first;
- use `AGENT_SKILL_MANIFEST.md` or `AGENT_SKILL_MANIFEST.json`;
- use `AGENT_ROUTER.md` for routing;
- select exactly one primary skill unless the task clearly requires a second skill;
- load the selected `skills/<skill_id>/SKILL.md`;
- load only the required output contract;
- load one context pack only when needed;
- avoid benchmark files in normal use;
- avoid human prompt-copy files as the primary runtime path;
- never parse private source bodies;
- produce a concrete artifact with assumptions, `source_basis`, confidence, evidence gaps, and next action.

## Evaluation Boundary

This phase can prove basic runtime usability only after real Codex outputs exist.

Until then, the correct status is prepared, not behaviorally proven.

## Blocked Operations

- scoring missing responses;
- marking the runtime master-ready without observed outputs;
- treating synthetic smoke prompts as user evidence;
- converting smoke artifacts into verified KB claims.

## Phase Exit Criteria

The phase can exit only after:

- every Smoke Run 001 case is executed or explicitly blocked;
- raw responses are preserved;
- outputs are checked against contracts;
- P0 source-safety failures are recorded if they occur;
- repairs are traceable to observed failures.
