# Final Prioritized Backlog

Date: 2026-04-30

## P0

No active P0 blockers were found in this phase.

Validation and source governance pass.

## P1

| id | item | reason | acceptance |
|---|---|---|---|
| FINAL-P1-001 | run observed hands-on user trial | empirical usability is blocked | trial report records real completion, confusion, and fixes |
| FINAL-P1-002 | add validator fixture harness | validator behavior needs regression proof | known-bad cases fail and known-good case passes |
| FINAL-P1-003 | add plain-language trust labels | source_basis/confidence remain technical | first-use docs link to simple trust-label page |
| FINAL-P1-004 | add current-state index if review remains slow | `report.md` is long | latest state findable quickly without rewriting history |
| FINAL-P1-005 | add first-use link check | links currently checked manually | CI fails on broken first-use links |

## P2

| id | item | reason | acceptance |
|---|---|---|---|
| FINAL-P2-001 | portal accessibility smoke test | portal has only code-inspection accessibility review | keyboard/focus/contrast findings recorded |
| FINAL-P2-002 | prompt style lint | prompt readability is manually governed | unsafe or overly long prompt patterns are flagged |
| FINAL-P2-003 | generated-file manifest | generated boundaries are spread across docs | maintainers know what not to edit manually |
| FINAL-P2-004 | modularize validator/importer | scripts are large | only after fixture tests pass |
| FINAL-P2-005 | review duplicate start aliases | multiple start names still exist | aliases are clearly subordinate or deprecated |

## Deferred

- Evidence pilots until user evidence is supplied.
- Target AI benchmark scoring until target outputs are supplied.
- App features, user accounts, forums, reading sessions, databases, or full-stack work.

