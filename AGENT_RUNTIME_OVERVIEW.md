# Agent Runtime Overview

Date: 2026-04-30

## Runtime Model

The repository is a file-based skill pack.

It does not call another AI as its normal runtime. The runtime user is Codex or another AI agent that can read files, select context, and write artifacts when asked.

## Runtime Flow

1. User gives Codex a game design task.
2. Codex reads `AGENT_START.md`.
3. Codex reads `AGENT_SKILL_MANIFEST.md` or `AGENT_SKILL_MANIFEST.json`.
4. Codex uses `AGENT_ROUTER.md` to select one skill.
5. Codex reads `skills/<skill_id>/SKILL.md`.
6. Codex loads the related context pack only if needed.
7. Codex loads relevant KB references only if needed.
8. Codex returns the expected artifact with assumptions, `source_basis`, confidence, evidence gaps, and next action.

## Runtime Layers

| Layer | Files | Purpose |
|---|---|---|
| agent start | `AGENT_START.md`, `START_FOR_CODEX.md` | first file for agents |
| skill manifest | `AGENT_SKILL_MANIFEST.md`, `AGENT_SKILL_MANIFEST.json` | discover available skills |
| router | `AGENT_ROUTER.md` | map user intent to skill |
| skills | `skills/*/SKILL.md` | task execution protocols |
| context loading | `AGENT_CONTEXT_LOADING_PROTOCOL.md`, `context_packs/` | avoid loading everything |
| output contracts | `AGENT_OUTPUT_CONTRACTS.md`, `agent_output_contracts/` | stable artifact shapes |
| source safety | `AGENT_SOURCE_SAFETY_RULES.md` | prevent unsafe claims and source misuse |
| KB reference | `kb/`, selected root maps | canonical game design knowledge |
| maintainer tooling | `tools/`, CI, validation reports | export, validate, audit, coverage |

## Non-Runtime Areas

Do not load these for normal game design work:

- benchmark runs and score files;
- generated exports;
- evidence sidecar records unless doing evidence work;
- deprecated or legacy folders;
- private source folders;
- append-only historical logs.
