# Start Page Decision Tree

Date: 2026-04-30

## Purpose

Use this when you know your situation but do not know which file to open.

## First Rule

If you are unsure, open `USE_THIS_FIRST.md`.

## Routes

| Situation | Open this file first | Then open this file | Copy this prompt | Expected artifact | Do not open these files yet |
|---|---|---|---|---|---|
| I have no project | `NO_PROJECT_START_HERE.md` | `USE_CASES/no_project_start.md` | `hands_on_prompts/P12_teach_me_game_design.md` | learning plan, exercise, draft artifact | benchmark files, evidence records, generated exports, private sources |
| I have a vague game idea | `USE_CASES/vague_game_idea.md` | `context_packs/CP02_game_idea_review.md` | `hands_on_prompts/P01_review_my_game_idea.md` | one-page concept memo | canonical KB internals, schemas, benchmark files |
| I need design review | `USE_CASES/design_review.md` | `context_packs/CP04_design_audit.md` | one of P04 to P09 or P15 | design review, audit table, matrix, or critique memo | evidence sidecars, source body files, generated exports |
| I want to learn | `USE_CASES/learn_game_design.md` | `context_packs/CP03_learning_coach.md` | `hands_on_prompts/P12_teach_me_game_design.md` | mini lesson, exercise, next topic | private books, benchmark outputs, schemas |
| I want a reading plan | `USE_CASES/reading_to_notes.md` | `context_packs/CP03_learning_coach.md` | `hands_on_prompts/P13_create_reading_plan.md` | source-safe reading plan and note prompts | private source bodies, evidence sidecars unless doing intake |
| I want to check a claim | `USE_CASES/source_safety_check.md` | `context_packs/CP06_source_safety_and_claim_check.md` | `hands_on_prompts/P14_check_unsupported_claim.md` | claim safety report | unrelated prompt packs, benchmark files, generated exports |
| I am an AI agent | `AI_CONTEXT_PACKS.md` | one matching `context_packs/CP*.md` file | one matching `hands_on_prompts/P*.md` file | concrete artifact with assumptions, source_basis, confidence, gaps | whole repo, private sources, deprecated docs |
| I am a maintainer | `REPO_FOR_MAINTAINERS.md` | `KB_REBUILD_INSTRUCTION.md` | no prompt by default | validation/export/audit result or maintenance change | generated exports by hand, legacy tools unless explicitly enabled |

## If You Still Cannot Choose

Open:

1. `USE_THIS_FIRST.md`
2. `10_MINUTE_QUICKSTART.md`
3. `USE_CASE_HUB.md`

Then choose one row. Do not continue browsing.

## Safety Defaults

Unless real evidence exists:

- source_basis: `unsupported_draft` for design artifacts;
- confidence: `weak`;
- verified claims: none;
- project facts: only what the user supplies;
- playtest facts: only what the user supplies.
