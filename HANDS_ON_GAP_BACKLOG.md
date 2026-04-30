# Hands-On Gap Backlog

Date: 2026-04-30

## Purpose

This backlog captures remaining gaps after the Hands-on Use Case and Usability Simplification Phase.

## P0

No P0 hands-on usability blockers remain.

## P1

| gap_id | severity | title | affected files | required fix | acceptance criteria |
|---|---|---|---|---|---|
| HOU-P1-001 | P1 | Run observed hands-on user trial | `USE_THIS_FIRST.md`; `USE_CASE_HUB.md`; `hands_on_prompts/`; `context_packs/`; `worked_examples/` | Have a real user or operator follow the 10-minute path and record friction. | Trial record shows whether user reached a prompt, produced an artifact, and understood source/confidence labels. |
| HOU-P1-002 | P1 | Record first-use friction | `HANDS_ON_USABILITY_TEST_PLAN.md`; `HANDS_ON_ACCEPTANCE_TESTS.md` | Add an observed trial report after real use. | Confusion points are backed by observed behavior, not assumptions. |
| HOU-P1-003 | P1 | Verify target AI output quality | benchmark files; prompt files | Collect real AI outputs from hands-on prompts if user wants behavior evaluation. | Missing outputs are not scored; real outputs are preserved. |

## P2

| gap_id | severity | title | affected files | required fix | acceptance criteria |
|---|---|---|---|---|---|
| HOU-P2-001 | P2 | Add trust-label cheat sheet | first-use docs | Create a short page explaining `unsupported_draft`, `metadata_only`, `weak`, `user_interpretation`, and `verified`. | User can understand labels without reading evidence governance. |
| HOU-P2-002 | P2 | Add artifact expectation table | hands-on docs | Summarize expected outputs such as concept memo, decision matrix, system map, playtest plan. | User knows what "good output shape" means before prompting. |
| HOU-P2-003 | P2 | Add observed-user FAQ | hands-on docs | Convert real user confusion into a short FAQ after trial. | FAQ reflects observed confusion, not guessed confusion. |

## Deferred

Do not do these during hands-on usability unless explicitly requested:

- app UI;
- user accounts;
- reading tracker;
- forum features;
- private source parsing;
- fake evidence;
- fake benchmark outputs;
- verified claim promotion without EvidenceRefs.

## Next Exact Prompt

`run-hands-on-user-trial`

