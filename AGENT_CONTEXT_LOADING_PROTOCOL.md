# Agent Context Loading Protocol

Date: 2026-04-30

## Core Rule

Never load the whole repository by default.

The repository is large. Loading everything increases context cost, confusion, and source-governance risk.

## Loading Order

1. Load `AGENT_START.md`.
2. Load `AGENT_SKILL_MANIFEST.md` or `AGENT_SKILL_MANIFEST.json`.
3. Load `AGENT_ROUTER.md`.
4. Select one skill.
5. Load `skills/<skill_id>/SKILL.md`.
6. Load one context pack only if the skill needs it.
7. Load one output contract.
8. Load relevant KB references only if needed.

## Never Load By Default

- `_private_sources/`
- private PDFs, EPUBs, archives, scans, or source bodies;
- `AI_MASTER_BENCHMARK_*` files;
- `kb/11_import_export/export/` generated export data;
- `docs/deprecated/`;
- `50-game-design-masters-kb/`;
- `kb-tools/`;
- large append-only reports unless auditing them.

## Context Types

| Task type | Load |
|---|---|
| normal design help | agent start, manifest, router, one skill, one contract |
| learning | `learning_coach` skill and `CP03` |
| idea review | `game_idea_review` or `core_experience_definition` and `CP02` |
| design audit | relevant audit skill and `CP04` |
| prototype/playtest planning | relevant planning skill and `CP05` |
| claim/source safety | `claim_safety_check` and `CP06` |
| maintenance | maintainer docs, validation reports, tooling docs |
| benchmark work | benchmark docs only when explicitly requested |
| evidence intake | evidence docs only when user supplies evidence |

## Relevant KB Loading

Load KB references after selecting the skill, not before.

Prefer indexes before deep files:

- `MASTER_DOMAIN_MAP.md`;
- `MASTER_CAPABILITY_MATRIX.md`;
- `PROBLEM_TO_LENS_MAP.md`;
- `PROBLEM_TO_WORKFLOW_MAP.md`;
- selected `kb/navigation/` files;
- selected card/lens/workflow indexes.

## Stop Rule

If the loaded context is sufficient to produce the artifact, stop loading.
