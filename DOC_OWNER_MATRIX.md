# Documentation Owner Matrix

Date: 2026-04-30

## Purpose

This matrix assigns accountability for keeping documentation current.

Owner means accountable for accuracy and lifecycle state. It does not mean only that person or role may edit the file.

## Owner Roles

| Role | Responsibility |
|---|---|
| documentation UX owner | first-use, navigation, readability, progressive disclosure |
| KB content owner | taxonomy, capabilities, domains, cards, lenses, workflows |
| AI runtime owner | prompt library, context packs, AI behavior rules |
| source-governance owner | source safety, evidence rules, confidence boundaries |
| benchmark owner | benchmark plans, response status, scoring, dashboards |
| tooling owner | importer, validator, exports, CI quality gates |
| maintainer lead | release state, backlog, definition of done, report consistency |

## Document Ownership

| Document area | Lifecycle state | Accountable owner | Required reviewers |
|---|---|---|---|
| `USE_THIS_FIRST.md`, quickstart, launchpad | active_first_use | documentation UX owner | maintainer lead |
| `USE_CASE_HUB.md`, `USE_CASES/`, journeys | active_use_case | documentation UX owner | AI runtime owner |
| `hands_on_prompts/`, prompt library | active_runtime | AI runtime owner | source-governance owner |
| `context_packs/`, runtime pack | active_runtime | AI runtime owner | tooling owner if CI checks change |
| master framework maps | active_reference | KB content owner | AI runtime owner |
| evidence governance | active_governance | source-governance owner | maintainer lead |
| benchmark files | active_governance | benchmark owner | source-governance owner |
| validation, audit, CI docs | active_governance | tooling owner | maintainer lead |
| generated reports and exports | generated | tooling owner | source-governance owner when evidence related |
| legacy and deprecated docs | legacy or deprecated | maintainer lead | source-governance owner |
| `report.md` | active_governance | maintainer lead | phase owner |

## Ownership Rules

- Every new document must name or imply one owner role.
- First-use files require documentation UX review.
- Source-sensitive files require source-governance review.
- CI, validator, or export changes require tooling review.
- Benchmark scoring docs require benchmark-owner review.
- If no owner is clear, the file should not be promoted beyond `archive_candidate`.

