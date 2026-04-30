# Agent Do Not Load

Date: 2026-04-30

## Purpose

This file prevents overloading context and accidentally using unsafe material.

## Do Not Load For Normal Use

| Area | Reason |
|---|---|
| `_private_sources/` | private/high-risk source boundary |
| `docs/deprecated/` | historical inactive material |
| `50-game-design-masters-kb/` | legacy snapshot |
| `kb-tools/` | legacy guarded tooling |
| `kb/11_import_export/export/` | generated machine data |
| `AI_MASTER_BENCHMARK_*` | evaluator-only benchmark artifacts |
| `report.md` | append-only history, not a runtime entrypoint |
| evidence sidecar records | only needed for evidence intake |
| generated validation JSON | only needed for tooling/debugging |

## Load Only If

- the user explicitly asks to maintain that area;
- the selected skill requires it;
- the task is source-governance, validation, benchmark, or evidence intake;
- the maintainer is auditing generated outputs.

## Default Alternative

Load:

- `AGENT_START.md`;
- `AGENT_SKILL_MANIFEST.md`;
- `AGENT_ROUTER.md`;
- one `skills/*/SKILL.md`;
- one `agent_output_contracts/*` file.
