# Agent Skill Contract Test Plan

Date: 2026-04-30

## Purpose

Define contract tests for agent skills and output artifacts.

## Contract Checks

| Check | Rule | Priority |
|---|---|---|
| skill declared in manifest | every skill in JSON has folder | P1 |
| skill file exists | every skill folder has `SKILL.md` | P1 |
| required skill headings | every skill contains required headings | P1 |
| output contract exists | every skill maps to contract file | P1 |
| context pack exists | every skill maps to context pack when specified | P1 |
| forbidden load paths absent | no skill manifest load path includes private/generated/benchmark/legacy paths | P0 |
| safety labels required | every output contract requires assumptions, source_basis, confidence, evidence gaps, next action | P0 |
| no fake evidence | skill files prohibit fabricated evidence | P0 |

## Suggested Fixture Tests

| Test name | Given | When | Then |
|---|---|---|---|
| missing skill file fails | manifest references nonexistent skill | run agent check | fail |
| missing output contract fails | skill references missing contract | run agent check | fail |
| forbidden private load fails | skill files_to_load includes `_private_sources/` | run agent check | fail |
| missing heading fails | `SKILL.md` lacks `## Source Safety Rules` | run agent check | fail |
| valid runtime passes | current runtime files exist | run agent check | pass |

## Next Step

Create fixture directories only after the runtime structure stabilizes.
