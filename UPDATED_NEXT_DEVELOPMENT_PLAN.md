# Updated Next Development Plan

Date: 2026-04-30

## Next Phase

Run Codex agent smoke tasks.

## Objective

Test whether Codex can use `AGENT_START.md`, route to the correct skill, load minimal context, and produce contract-compliant game design artifacts.

## Trial Inputs

Use existing files only:

- `AGENT_START.md`
- `AGENT_SKILL_MANIFEST.md`
- `AGENT_ROUTER.md`
- one `skills/*/SKILL.md`
- one `agent_output_contracts/*` file
- one `codex_tasks/*` recipe

## Trial Scenarios

| Scenario | Artifact |
|---|---|
| review idea | one-page concept memo |
| define core experience | core experience statement |
| audit meaningful choice | meaningful decision audit |
| make prototype plan | prototype plan |
| check claim safety | claim safety report |

## Do Not Do Next

- Do not add more runtime docs before smoke evidence.
- Do not start evidence intake without user evidence.
- Do not score AI benchmark cases without real target outputs.
- Do not build app features.
