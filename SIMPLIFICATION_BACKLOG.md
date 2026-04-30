# Simplification Backlog

Date: 2026-04-30

## Implementation Status

The first hands-on and simplified navigation layers have been implemented:

- `USE_THIS_FIRST.md`
- `HANDS_ON_START_HERE.md`
- `10_MINUTE_QUICKSTART.md`
- `30_MINUTE_GUIDED_TOUR.md`
- `WHAT_TO_IGNORE_FIRST.md`
- `WHAT_TO_OPEN_FIRST.md`
- `AI_CONTEXT_MINIMUM.md`
- `AI_CONTEXT_RECOMMENDED.md`
- `HANDS_ON_START.md`
- `USE_CASES/README.md`
- `USE_CASES/vague_game_idea.md`
- `USE_CASES/design_review.md`
- `USE_CASES/no_project_start.md`
- `USE_CASES/learn_game_design.md`
- `USE_CASES/reading_to_notes.md`
- `USE_CASES/source_safety_check.md`
- `COPY_PASTE_PROMPTS.md`
- `WORKED_EXAMPLES.md`
- `AI_CONTEXT_MINIMAL.md`
- `FILES_TO_IGNORE_FOR_FIRST_USE.md`
- `USE_CASE_HUB.md`
- `SIMPLIFIED_NAVIGATION.md`
- `REPO_FOR_HUMANS.md`
- `REPO_FOR_AI_AGENTS.md`
- `REPO_FOR_MAINTAINERS.md`
- `TOP_20_FILES_TO_KNOW.md`
- `EVERYTHING_ELSE_IS_REFERENCE.md`
- `FILE_PRIORITY_INDEX.md`

Remaining simplification work should be based on user testing of this layer, not on deleting canonical KB systems.

## Completed Simplification Items

| backlog_id | severity | title | completion evidence |
|---|---|---|---|
| USE-P1-001 | P1 | Create hands-on start page | `HANDS_ON_START.md`, `HANDS_ON_START_HERE.md`, and `USE_THIS_FIRST.md` exist. |
| USE-P1-002 | P1 | Create use-case index | `USE_CASE_HUB.md` and `USE_CASES/README.md` exist. |
| USE-P1-003 | P1 | Add copy-paste prompt pack | `COPY_PASTE_PROMPTS.md`, `HANDS_ON_PROMPT_LIBRARY.md`, and `hands_on_prompts/` exist. |
| USE-P1-004 | P1 | Add worked examples | `WORKED_EXAMPLES_README.md` and `worked_examples/` exist. |
| USE-P1-005 | P1 | Create minimal AI context | `AI_CONTEXT_MINIMUM.md`, `AI_CONTEXT_PACKS.md`, and `context_packs/` exist. |
| USE-P1-006 | P1 | Add no-project path | `NO_PROJECT_START_HERE.md` and no-project plans exist. |
| USE-P2-001 | P2 | Add first-session ignore list | `WHAT_TO_IGNORE_FIRST.md`, `DO_NOT_LOAD_EVERYTHING.md`, and `EVERYTHING_ELSE_IS_REFERENCE.md` exist. |
| USE-P2-002 | P2 | Promote hands-on layer in README | `README.md` links first-use, quickstart, use-case hub, context packs, and simplified navigation. |

## P1 Hands-On Usability

| backlog_id | severity | title | affected area | required fix | acceptance criteria |
|---|---|---|---|---|---|
| USE-P1-007 | P1 | Run observed first-user test | hands-on navigation | Ask a real user or target AI operator to follow `SIMPLIFIED_NAVIGATION_SMOKE_TEST.md`. | Observed user can reach a prompt and context pack without help. |
| USE-P1-008 | P1 | Keep new navigation files current | root navigation | Update `FILE_PRIORITY_INDEX.md` when major normal-use files are added. | New important files are classified. |

## P2 Navigation Simplification

| backlog_id | severity | title | affected area | required fix | acceptance criteria |
|---|---|---|---|---|---|
| USE-P2-003 | P2 | Promote hands-on layer in START_HERE | root docs | Update `START_HERE.md` after hands-on layer exists. | Users see "use now" before maintenance links. |
| USE-P2-004 | P2 | Add trust-label cheat sheet | hands-on layer | Summarize draft, metadata-only, weak, user interpretation, verified. | User understands output confidence without reading evidence docs. |
| USE-P2-005 | P2 | Create artifact expectation table | hands-on layer | Show concept memo, decision matrix, system map, reading plan, evidence gap report. | User knows what output should look like. |
| USE-P2-006 | P2 | Add root-directory visual grouping | root docs | Add a compact text diagram if users still report root clutter. | User can classify files without scanning full root. |

## P3 Optional Polish

| backlog_id | severity | title | affected area | required fix | acceptance criteria |
|---|---|---|---|---|---|
| USE-P3-001 | P3 | Add diagram of first-use flow | hands-on docs | Add a simple text or Mermaid-free flow diagram. | New user understands the path visually. |
| USE-P3-002 | P3 | Add short glossary | hands-on docs | Define lens, workflow, card, evidence gap, source_basis, confidence. | User can interpret common terms quickly. |
| USE-P3-003 | P3 | Add quick command note | maintainer appendix | Keep commands out of first action path. | Users are not pushed into validation unless maintaining. |

## Backlog Rule

Do not simplify by deleting canonical content. Simplify by creating a smaller first-use layer and by labeling advanced files as optional, generated, benchmark-only, governance-only, or maintainer-only.

## Next Exact Prompt

`run-observed-first-use-smoke-test`
