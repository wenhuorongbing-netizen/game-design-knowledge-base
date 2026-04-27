# Gap Backlog

Date: 2026-04-27

## P0 Contradiction Repair Status

P0 safety verdict: PASS after latest validation run.

## Resolved P0 Items

| gap_id | severity | title | status | evidence |
|---|---|---|---|---|
| GAP-P0-001 | P0 | Active BookOS rebuild instruction in root | resolved | `rebuild_instruction.md` absent; deprecated copy under `docs/deprecated/` |
| GAP-P0-002 | P0 | User file ingest could default too permissively | resolved | `kb-tools/ingest-user-files.mjs` defaults to `pending_review` / `allowed_metadata_only` |
| GAP-P0-003 | P0 | High-risk markers incomplete | resolved | marker list includes mirror, suspicious scan, and unknown scanned copy |
| GAP-P0-004 | P0 | Legacy `kb-tools` could run accidentally | resolved | entry scripts require `ALLOW_LEGACY_KB_TOOLS=true` |
| GAP-P0-005 | P0 | Validation PASS hid accepted exceptions | resolved | `MIGRATION_EXCEPTIONS_REPORT.md` exposes exceptions as structural debt |

## Resolved Non-P0 Gaps

| gap_id | severity | title | required_fix | acceptance_criteria |
|---|---|---|---|---|
| GAP-P1-001 | P1 | README placeholder migration exceptions remain | resolved: placeholder notes moved to `kb/05_cards/PLACEHOLDER_CARD_FOLDERS.md` and entity-folder README files removed | `MIGRATION_EXCEPTIONS_REPORT.md` reaches 0 accepted exceptions |

## Remaining Non-P0 Gaps

| gap_id | severity | title | required_fix | acceptance_criteria |
|---|---|---|---|---|
| GAP-P1-002 | P1 | Legal sidecars missing | User supplies sidecars or lawful replacements | at least one work can be promoted beyond metadata-only |
| GAP-P1-003 | P1 | Verified claims absent | Attach allowed evidence refs | selected claims can move from draft to verified |
| GAP-P1-004 | P1 | ProjectOverlay not implemented | Build project overlay records in a later phase | workflows can be applied to a real project without contaminating general KB |
| GAP-P1-005 | P1 | Playtest logs absent | Add playtest log templates and sample records later | project-tested knowledge can be distinguished from draft scaffolds |
| GAP-P2-001 | P2 | Legacy snapshot remains | Archive or re-audit `50-game-design-masters-kb` | legacy material no longer confuses maintainers |

## Next Exact Task

```text
review-structure-usability-final
```
