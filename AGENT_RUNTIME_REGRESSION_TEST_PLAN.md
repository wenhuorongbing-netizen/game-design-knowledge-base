# Agent Runtime Regression Test Plan

Date: 2026-04-30

## Purpose

Define lightweight regression tests for the Agent Skill Pack.

This plan is static and operational. It does not require a new app, external service, or private source access.

## Regression Layers

| Layer | Command or artifact | Purpose |
|---|---|---|
| Runtime structure | `npm run agent:check` | Ensure root runtime files, manifest, skills, headings, and basic contracts exist. |
| Router fixtures | `npm run agent:router-check` | Ensure common user requests map to existing skills, context packs, and output contracts. |
| Contract integrity | `npm run agent:contract-check` | Ensure manifest paths, prompt references, output contract labels, and source-safety anti-pattern checks pass. |
| Aggregate runtime | `npm run agent:runtime-check` | Run all agent runtime checks. |
| Full KB gate | `npm run kb:check` | Run agent checks plus export, validation, audit, and coverage. |
| Behavioral smoke | `codex_smoke_runs/run_001/` | Review actual Codex outputs when runtime behavior changes. |

## Required Regression Cases

| Test ID | Trigger | Expected command or artifact | Pass criteria |
|---|---|---|---|
| ART-001 | Add or rename a skill | `npm run agent:runtime-check` | Manifest skill has `SKILL.md`, required headings, valid load paths, and output contract. |
| ART-002 | Edit `AGENT_SKILL_MANIFEST.json` | `npm run agent:contract-check` | JSON valid, files_to_load paths exist, related context pack and prompt file exist. |
| ART-003 | Edit router fixtures | `npm run agent:router-check` | All expected skills, context packs, and output contracts exist; max questions <= 3. |
| ART-004 | Edit output contract | `npm run agent:contract-check` | Contract includes assumptions, `source_basis`, confidence, evidence gaps, and next action. |
| ART-005 | Edit skill source-safety language | `npm run agent:contract-check` | No unsafe affirmative instruction to parse private source bodies or invent evidence. |
| ART-006 | Edit source governance or evidence rules | `npm run kb:check` | Full gate passes with 0 P0 issues and 0 warnings. |
| ART-007 | Repair a smoke-output failure | focused smoke regression docs | Regression output demonstrates the repaired contract behavior without overwriting old outputs. |
| ART-008 | Change context loading protocol | `npm run agent:runtime-check` plus manual context review | No normal runtime path loads the whole repo, benchmark files, generated exports, or private sources. |

## Smoke Regression Policy

Use smoke regression only when runtime behavior changed:

- router behavior changed;
- skill execution protocol changed;
- output contract changed;
- source-safety refusal behavior changed;
- context loading protocol changed.

Do not run behavioral smoke tests for unrelated documentation edits.

## Source-Safety Regression Checks

Every regression must preserve:

- no private source body parsing;
- no chapter summaries from private or high-risk sources;
- no quote extraction;
- no invented EvidenceRefs;
- no invented user notes;
- no invented legal sidecars;
- no invented project facts;
- no invented playtest logs;
- no unsupported verified claims.

## Next Automation Candidate

Add a lightweight captured-output section checker:

- input: `codex_smoke_runs/run_001/FOCUSED_CONTRACT_REGRESSION_RAW_OUTPUTS.md` or future raw output file;
- checks: required labels exist per selected output contract;
- excludes: quality scoring and semantic judgment.
