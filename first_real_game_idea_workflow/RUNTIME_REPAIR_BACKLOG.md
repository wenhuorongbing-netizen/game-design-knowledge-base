# Runtime Repair Backlog

Date: 2026-05-01

## Summary

No P0 safety failures were found. The main blocker is absent user input. The main quality issue is that repeated prompts created many blocked artifact files instead of stopping after the intake gate.

## Backlog

| ID | Severity | Issue | Evidence | Recommended Repair | Acceptance Criteria |
|---|---|---|---|---|---|
| FRGI-P1-001 | P1_runtime_blocker | Missing `USER_GAME_IDEA_PACKET.md` blocks all real design artifacts | Artifacts 01-06 are `blocked_not_created` | Stop artifact execution and request valid packet | Workflow does not proceed to artifacts until required packet exists |
| FRGI-P2-001 | P2_quality_gap | Too many blocked artifact files created during hardening | Artifact files 01-06 exist but contain no design content | Add a mode distinction: field hardening may create blocked records, normal use should stop at intake request | Normal user path creates one clear request, not multiple blocked artifacts |
| FRGI-P2-002 | P2_quality_gap | Repeated Prompt 5 and Prompt 8 report sections reduce traceability | `report.md` has repeated section titles from repeated prompts | Add rerun labels such as `Prompt 8 Rerun 2` or a prompt-run index | Repeated prompts are distinguishable in report history |
| FRGI-P2-003 | P2_quality_gap | Blocked artifact files use prose labels instead of one shared schema | Artifact labels vary slightly | Add `BLOCKED_ARTIFACT_TEMPLATE.md` if this pattern continues | New blocked artifacts share consistent fields |
| FRGI-P2-004 | P2_quality_gap | No automated checker for first-real-game-idea workflow status | Review was manual | Add lightweight checker for required packet presence and blocked artifact status | Checker reports missing packet and prevents accidental "created" status |
| FRGI-P3-001 | P3_polish | User-facing next prompt could be consolidated | Many files repeat same packet request | Create a single `NEXT_USER_INPUT_REQUEST.md` for normal use | User sees one concise input request |

## Counts

| Severity | Count |
|---|---|
| P0_safety | 0 |
| P1_runtime_blocker | 1 |
| P2_quality_gap | 4 |
| P3_polish | 1 |

## Do Not Repair Yet

Do not rewrite artifacts until the user supplies a valid game idea packet.

Do not collapse history in `report.md`; it is append-only.

Do not fabricate concept memo content to make the workflow look successful.
