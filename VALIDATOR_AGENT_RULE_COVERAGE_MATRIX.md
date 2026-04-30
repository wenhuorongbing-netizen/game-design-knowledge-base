# Validator Agent Rule Coverage Matrix

Date: 2026-04-30

## Purpose

Track Agent Skill Pack validation rules and their current enforcement.

## Coverage Summary

| Rule | Current enforcement | Status | Remaining gap |
|---|---|---|---|
| Agent start exists | `npm run agent:check` | covered | none |
| Manifest markdown exists | `npm run agent:check` | covered | none |
| Manifest JSON valid | `npm run agent:check`; `agent:contract-check` | covered | none |
| Router exists | `npm run agent:check` | covered | none |
| Context protocol exists | `npm run agent:check` | covered | none |
| Source safety rules exist | `npm run agent:check` | covered | none |
| Router chosen skills exist in manifest | `npm run agent:router-check` | covered | checker is structural, not behavioral |
| Router context packs exist | `npm run agent:router-check` | covered | none |
| Router output artifacts exist | `npm run agent:router-check` | covered | none |
| Manifest `files_to_load` paths exist unless intentionally optional | `npm run agent:contract-check` | covered | optionality convention can be formalized later |
| Manifest `related_context_pack` exists | `npm run agent:contract-check` | covered | none |
| Manifest `related_prompt_file` exists or is marked optional | `npm run agent:contract-check` | covered | currently all manifest prompt files exist |
| Every skill has `SKILL.md` | `npm run agent:check`; `agent:contract-check` | covered | none |
| Every skill has required headings | `npm run agent:check`; `agent:contract-check` | covered | none |
| Every skill includes `Files Not To Load` | `npm run agent:check`; `agent:contract-check` | covered | none |
| Every skill output contract exists | `npm run agent:check`; `agent:contract-check` | covered | `_or_` artifact aliases are accepted by convention |
| Every output contract includes required labels | `npm run agent:contract-check` | covered | section-level semantics still need smoke review |
| No skill contains unsafe affirmative instruction to parse private source body | `npm run agent:contract-check` | covered | pattern-based static check only |
| No skill contains instruction to invent evidence | `npm run agent:contract-check` | covered | pattern-based static check only |
| No skill promotes `metadata_only` to verified | `npm run agent:contract-check` | covered | pattern-based static check only |
| No forbidden load paths in manifest skill load lists | `npm run agent:check`; `agent:contract-check` | covered | context pack wording still has P2 cleanup |
| Output includes required labels in live response | Smoke run review | partially covered | future automated smoke-output checker |
| No fake evidence in live response | Smoke run review | partially covered | future behavioral regression tests |

## Aggregate Commands

| Command | Purpose |
|---|---|
| `npm run agent:check` | Required runtime files, manifest, skills, headings, and basic contract existence. |
| `npm run agent:router-check` | Router fixture structural validity. |
| `npm run agent:contract-check` | Manifest path existence, output contract labels, and skill source-safety anti-patterns. |
| `npm run agent:runtime-check` | All agent runtime validation gates. |
| `npm run kb:check` | Full local gate for agent runtime plus KB export, validation, audit, and coverage. |

## Priority

Next automation candidate: smoke-output section checker for captured raw outputs.

