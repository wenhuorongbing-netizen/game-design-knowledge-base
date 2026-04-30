# Engineering Improvement Backlog

Date: 2026-04-30

## P0

No active P0 engineering blockers were found.

Validation and source governance currently pass.

## P1

| id | title | observation | required fix | acceptance criteria |
|---|---|---|---|---|
| ENG-P1-001 | Add CI workflow | no `.github/workflows/` directory found | add validation workflow | CI runs export, validate, audit, coverage |
| ENG-P1-002 | Add validator fixtures | no formal test framework or fixture tests | add fixture harness for P0 rules | known-bad fixtures fail as expected |
| ENG-P1-003 | Add current-state index | `report.md` is long and historically hard to scan | add latest-state index | user can find current state in under 1 minute |
| ENG-P1-004 | Add generated-file manifest | generated surfaces are spread across root and `kb/` | list generated/tool-updated files | maintainers know what not to edit manually |
| ENG-P1-005 | Clarify portal refresh path | `kb-portal/` is optional with large static data | document or automate refresh from safe exports | portal data can be regenerated safely |

## P2

| id | title | observation | required fix | acceptance criteria |
|---|---|---|---|---|
| ENG-P2-001 | Modularize importer | importer is 2,461 lines | split after tests | behavior unchanged; validation passes |
| ENG-P2-002 | Modularize validator | validator is 1,410 lines | split by rule family after tests | behavior unchanged; fixtures pass |
| ENG-P2-003 | Add first-use link check | link checking is ad hoc | add script or CI step | broken first-use links fail check |
| ENG-P2-004 | Add prompt/document lint | prompt style now manually maintained | add lightweight style check | long copy-paste prompt lines are flagged |
| ENG-P2-005 | Reduce directory confusion | legacy and empty folders remain visible | mark or archive reversibly | non-canonical areas are unambiguous |
| ENG-P2-006 | Portal accessibility smoke test | portal not empirically tested | run keyboard/focus/contrast pass | portal accessibility risks documented |

## Deferred

- Do not add microservices.
- Do not add an app framework.
- Do not add auth, database, forum, or reading-session features.
- Do not parse private source bodies.
- Do not delete canonical KB content without a reversible migration plan.
