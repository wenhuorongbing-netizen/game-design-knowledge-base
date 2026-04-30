# Agent Skill Pack Refactor Plan

Date: 2026-04-30

## Goal

Make the repository consumable as a Game Design Skill Pack by Codex-like agents.

## Refactor Strategy

Prefer additive structure before moving files.

## Implemented Additive Structure

- agent root files: `AGENT_*`
- machine-readable skill manifest: `AGENT_SKILL_MANIFEST.json`
- skill folders: `skills/*/SKILL.md`
- output contracts: `agent_output_contracts/`
- task recipes: `codex_tasks/`
- runtime validation: `npm run agent:check`

## Proposed Target Structure

| Area | Purpose |
|---|---|
| `AGENT_START.md` | first file for agents |
| `AGENT_SKILL_MANIFEST.*` | skill discovery |
| `AGENT_ROUTER.md` | intent routing |
| `skills/` | executable skill protocols |
| `agent_output_contracts/` | artifact contracts |
| `codex_tasks/` | user-to-Codex task recipes |
| `agent_runtime_tests/` | future fixtures |
| `kb/` | canonical KB |
| `tools/` | validation/export/audit |
| `docs/` | governance, deprecated, reference |

## Migration Plan

1. Keep existing human files.
2. Add agent runtime files.
3. Add skills and output contracts.
4. Add agent runtime check.
5. Run CI and KB validation.
6. Only later consider moving benchmark/reference docs into `docs/`.

## Files To Move Later

Do not move now. Candidate future moves:

- benchmark files into `docs/benchmark/`;
- acceptance reports into `docs/reports/`;
- older human prompts into `docs/reference/`.

## Risks

- moving root files could break existing links;
- too much restructure could hide governance;
- over-automation could add maintenance cost.

## Acceptance

This pass is accepted if agent runtime files, skills, contracts, and checks exist and validation passes.
