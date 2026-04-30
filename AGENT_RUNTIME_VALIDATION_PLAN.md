# Agent Runtime Validation Plan

Date: 2026-04-30

## Purpose

Validate that Codex can consume this repository as a Game Design Skill Pack without loading unsafe or excessive context.

## Current Validation Layers

| Layer | Current status |
|---|---|
| KB export | covered by `npm run kb:export` |
| KB safety validation | covered by `npm run kb:validate` |
| source governance | covered by `npm run kb:audit` |
| coverage summary | covered by `npm run kb:coverage` |
| agent runtime files | covered by `npm run agent:check` |
| skill manifest JSON | covered by `npm run agent:check` |
| skill contracts | covered by `npm run agent:check` |

## Required Agent Runtime Tests

| Test name | Target module | Scenario | Given / When / Then | Why it matters | Priority |
|---|---|---|---|---|---|
| agent start exists | root runtime | Codex needs one first file | Given repo root, when checking runtime files, then `AGENT_START.md` exists | prevents entrypoint confusion | P1 |
| skill manifest JSON valid | manifest | machine-readable routing | Given manifest JSON, when parsed, then it has at least 14 skills | enables agent/tool consumption | P1 |
| every skill has SKILL.md | skills | runtime skill loading | Given manifest skills, when checking folders, then every skill has `SKILL.md` | prevents broken routing | P1 |
| skill load boundaries exist | skills | context discipline | Given each skill, when inspected, then it has files to load and not load | prevents full-repo loading | P1 |
| output contract exists | contracts | stable artifacts | Given each skill, when checking artifact, then output contract exists | prevents vague output | P1 |
| no private source load | skills/manifest | safety | Given files_to_load, when checked, then private paths are absent | prevents unsafe source use | P0 |
| no fake evidence permission | skills | source safety | Given skill text, when reviewed, then fake evidence is prohibited | prevents hallucinated support | P0 |
| router maps common tasks | router | intent routing | Given common task phrases, when mapped, then skill is selected | supports normal use | P1 |
| context protocol blocks full repo | context protocol | context minimization | Given normal task, when loading context, then whole repo is not loaded | lowers context cost | P1 |
| source safety rules present | source safety | evidence boundary | Given agent source rules, when checked, then metadata/draft/verified rules exist | prevents overclaiming | P0 |

## Automation Plan

`npm run agent:check` is the first lightweight runtime check. Future improvements may add fixtures for router examples and unsafe skill text.
