# Gap Backlog

Date: 2026-04-28

## P0 Contradiction Repair Status

P0 safety verdict: PASS after latest validation run.

## Resolved P0 Items

| gap_id | severity | title | status | evidence |
|---|---|---|---|---|
| GAP-P0-001 | P0 | Active legacy rebuild instruction in root | resolved | `rebuild_instruction.md` absent in working tree, HEAD, origin/main, and GitHub raw |
| GAP-P0-002 | P0 | User file ingest could default too permissively | resolved | `kb-tools/ingest-user-files.mjs` defaults to `pending_review` / `allowed_metadata_only` |
| GAP-P0-003 | P0 | High-risk markers incomplete | resolved | marker list includes mirror, suspicious scan, and unknown scanned copy |
| GAP-P0-004 | P0 | Legacy `kb-tools` could run accidentally | resolved | entry scripts require `ALLOW_LEGACY_KB_TOOLS=true` |
| GAP-P0-005 | P0 | Validation PASS hid accepted exceptions | resolved | `MIGRATION_EXCEPTIONS_REPORT.md` exposes exceptions as structural debt |
| GAP-P0-006 | P0 | Validator did not fail active root direction drift | resolved | `tools/validate_kb/validate_kb.js` now checks active root drift instructions |
| GAP-P0-007 | P0 | Reports could contradict actual root file state or exception counts | resolved | validator now checks `rebuild_instruction.md` state claims and validation/migration exception-count consistency |

## Resolved Non-P0 Gaps

| gap_id | severity | title | required_fix | acceptance_criteria |
|---|---|---|---|---|
| GAP-P1-001 | P1 | README placeholder migration exceptions remain | resolved: placeholder notes moved to `kb/05_cards/PLACEHOLDER_CARD_FOLDERS.md` and entity-folder README files removed | `MIGRATION_EXCEPTIONS_REPORT.md` reaches 0 accepted exceptions |
| GAP-P1-004 | P1 | ProjectOverlay not implemented | resolved: draft ProjectOverlay schema scan, template, guide, and sample scaffold exist | Project application can be recorded without contaminating general KB |
| GAP-P1-005 | P1 | Playtest logs absent | resolved: PlaytestLog schema scan, template, and sample scaffold exist | Playtest records can be attached as draft project evidence |
| GAP-P2-001 | P2 | Legacy snapshot remains ambiguous | resolved: legacy snapshot has README plus `LEGACY_QUARANTINE.md` and remains non-canonical | Legacy material is explicitly quarantined |
| GAP-P2-002 | P2 | Private source files clutter root | resolved: local private PDF/EPUB files moved under `_private_sources/` | Root no longer displays private source files as active KB content |

## Remaining Non-P0 Gaps

| gap_id | severity | title | required_fix | acceptance_criteria |
|---|---|---|---|---|
| GAP-P1-002 | P1 | Legal sidecars missing | User supplies sidecars or lawful replacements | at least one work can be promoted beyond metadata-only |
| GAP-P1-003 | P1 | Verified claims absent | Attach allowed evidence refs | selected claims can move from draft to verified |
| GAP-P1-006 | P1 | Real project evidence absent | User supplies real project context, decisions, and playtest observations | sample overlay/log can be replaced with actual project records |

These remaining P1 items are evidence-dependent, not engineering blockers. See `kb/01_sources/USER_REQUIRED_EVIDENCE.md`.

## Next Exact Task

Evidence Phase 2 may begin only after truth reconciliation validation passes. Do not parse high-risk source bodies.

```text
build-evidence-phase-2-first-user-evidence-intake
```
