# Accessibility Repair Backlog

Date: 2026-04-30

## Backlog Verdict

No P0 accessibility or usability blockers were found by static inspection.

P1 issues remain around entrypoint overload, plain-language trust labels, dense tables, and missing observed user evidence.

## P0

No P0 accessibility blockers identified in this audit.

## P1 Repairs

| id | issue | evidence | repair | acceptance criteria |
|---|---|---|---|---|
| A11Y-P1-001 | Canonical human start is not visually singular | multiple start-like files and `HANDS_ON_START.md`/`HANDS_ON_START_HERE.md` split | designate `USE_THIS_FIRST.md` as the only canonical human start; mark other start pages as aliases/routes | README and start docs agree on one default first file |
| A11Y-P1-002 | First decision overload | quickstart has 6 choices; hub has 14 rows; start page has multiple route lists | add one default action before each route table | user can start without comparing a table |
| A11Y-P1-003 | Trust labels need plain-language layer | `source_basis`, `metadata_only`, `unsupported_draft`, `EvidenceRef`, `verified` appear in first-use docs | create plain-language trust-label cheat sheet and link from first-use files | non-maintainer can understand labels without evidence docs |
| A11Y-P1-004 | Dense route tables are hard to scan | `USE_CASE_HUB.md`, `AI_CONTEXT_PACKS.md`, and top-20 lists use wide tables | add prose route summaries before dense tables | screen-reader and mobile users get a short route before table |
| A11Y-P1-005 | No observed usability result | `HANDS_ON_USER_TRIAL_REPORT.md` is blocked pending observation | collect one real trial packet | report includes route chosen, files opened, prompt used, confusion, raw output if any |

## P2 Repairs

| id | issue | evidence | repair | acceptance criteria |
|---|---|---|---|---|
| A11Y-P2-001 | Long prompt lines | prompt max line lengths reach 418 to 472 characters | split copy-paste prompts into shorter editable lines | prompt files remain copyable and easier to edit |
| A11Y-P2-002 | Portal lacks confirmed keyboard path | static inspection only; many sidebar controls | add skip link and verify focus order | keyboard user can reach results and detail pane quickly |
| A11Y-P2-003 | Button focus style uncertain | CSS focus rules observed for fields, not clearly for buttons | add `button:focus-visible` and link focus styles | visible focus state for all controls |
| A11Y-P2-004 | Portal contrast unmeasured | no contrast tool run | run contrast audit for text, muted text, buttons, selected states | contrast findings documented |
| A11Y-P2-005 | Link checker is manual | local ad hoc link check passed | add scripted link-check command or CI step | broken links fail CI or audit command |
| A11Y-P2-006 | Compatibility aliases can confuse | `AI_CONTEXT_MINIMAL.md` and `AI_CONTEXT_MINIMUM.md` both exist | mark alias explicitly where referenced | users know which one is canonical |
| A11Y-P2-007 | Worked example safety labels are verbose | repeated comma labels in every example | add one plain-language sentence under labels | users understand examples are fake demos |
| A11Y-P2-008 | Benchmark files crowd root | many `AI_MASTER_BENCHMARK_*` files | keep benchmark files classified as evaluator-only in navigation | first-use docs do not send casual users to benchmark internals |

## Deferred Repairs

Do not do these until explicitly requested:

- app UI work;
- full portal redesign;
- file deletion or moving canonical KB content;
- source body parsing;
- generated export manual edits;
- fake user trial observations;
- fake accessibility results.

## Recommended Next Repair Order

1. Make the canonical first-use route visually singular.
2. Add trust labels in plain English.
3. Add short prose summaries above dense tables.
4. Collect one real hands-on user trial.
5. Add portal keyboard/focus audit only if the portal becomes part of normal use.

## Next Exact Prompt

`repair-first-use-accessibility-and-trust-labels`
