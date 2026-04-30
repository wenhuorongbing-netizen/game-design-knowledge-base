# 30 60 90 Day Improvement Roadmap

Date: 2026-04-30

## 30 Days

| Goal | Action | Acceptance |
|---|---|---|
| prove first-use usability | run observed hands-on user trial | trial report lists completion time, confusion points, and fixes |
| protect validator behavior | add validator fixture harness | known-bad fixtures fail as expected |
| reduce trust-label confusion | add plain-language trust-label page | new users can understand `source_basis` and confidence |
| improve current-state scanning | add current-state index if needed | latest state findable in under 1 minute |

## 60 Days

| Goal | Action | Acceptance |
|---|---|---|
| automate doc quality | add first-use link check | broken first-use links fail CI |
| control prompt drift | add prompt style check if prompt pack grows | long or unsafe prompt regressions are flagged |
| improve optional portal confidence | run portal keyboard and contrast smoke test if portal is used | portal risks documented or repaired |
| stabilize tooling | modularize validator only after fixtures | behavior unchanged, tests pass |

## 90 Days

| Goal | Action | Acceptance |
|---|---|---|
| mature KB operations | add broader regression coverage | validation rules have fixtures for critical failure modes |
| validate AI behavior | collect real target AI benchmark outputs | missing outputs unscored, P0 failures preserved |
| begin evidence-backed growth | ingest user reading notes or legal evidence if supplied | no fake evidence, no unsupported verification |
| reduce repository noise | archive or demote stale docs by policy | first-use layer remains small |

## Roadmap Boundary

Do not build app features, parse private source bodies, or promote claims without validated evidence.

