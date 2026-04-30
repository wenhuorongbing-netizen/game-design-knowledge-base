# Hands-On Acceptance Tests

Date: 2026-04-30

## Test Table

| test_id | user task | files involved | expected user action | pass criteria | fail criteria | likely confusion | repair recommendation |
|---|---|---|---|---|---|---|---|
| HU-001 | first-time user can find start page | README.md; USE_THIS_FIRST.md; HANDS_ON_START_HERE.md | open README then USE_THIS_FIRST | user reaches first-use path in under 2 minutes | user starts in audits, schemas, or exports | too many root files | keep first lines of README pointing to USE_THIS_FIRST |
| HU-002 | first-time user can choose use case | HANDS_ON_START_HERE.md; USE_CASES/README.md | choose one situation from table | user selects no-project, vague idea, review, learning, reading, or source-safety path | user cannot map their intent to a path | missing USE_CASE_HUB.md reference in prompts | either keep using USE_CASES/README.md or create a root alias later |
| HU-003 | user can copy a prompt | COPY_PASTE_PROMPTS.md; HANDS_ON_PROMPT_LIBRARY.md; hands_on_prompts/ | open prompt and copy text | prompt is visible, task-specific, and safe | prompt requires repo internals first | many prompt choices | use HANDS_ON_PROMPT_SELECTION_GUIDE.md |
| HU-004 | user can know what to paste | USE_THIS_FIRST.md; hands_on_prompts/P01_review_my_game_idea.md | replace bracketed fields with idea/question | user sees exact placeholder | user does not know what input is needed | prompt too abstract | keep "What To Replace" sections |
| HU-005 | user can understand expected output | hands_on_prompts/; worked_examples/; WORKED_EXAMPLES_README.md | compare prompt with synthetic example | user understands expected artifact shape | user thinks example is real evidence | examples may look plausible | keep demo_only and not_verified labels |
| HU-006 | user can know what files to ignore | WHAT_TO_IGNORE_FIRST.md; DO_NOT_LOAD_EVERYTHING.md | ignore exports, schemas, benchmarks, private sources | user avoids irrelevant folders | user loads whole repo into AI | repo still feels large | keep context packs as default |
| HU-007 | user can use KB without project | NO_PROJECT_START_HERE.md; NO_PROJECT_7_DAY_HANDS_ON_PLAN.md | choose day 1 exercise | user creates draft concept artifact | user thinks a project is required | no-project path hidden | keep NO_PROJECT_START_HERE linked from USE_THIS_FIRST |
| HU-008 | user can use KB with vague idea | USE_CASES/vague_game_idea.md; P01; CP02 | paste idea into review prompt | user gets concept memo target | user expects verified market/player claims | idea review sounds authoritative | require source_basis and confidence footer |
| HU-009 | user can use KB for learning | USE_CASES/learn_game_design.md; CP03; NO_PROJECT_DAILY_EXERCISES.md | ask for mini lesson and exercise | user gets learning artifact | AI summarizes private books | reading/source boundary unclear | keep CP03 metadata-only reading rule |
| HU-010 | user can use KB for design review | USE_CASES/design_review.md; P04; P05-P09; CP04 | choose audit prompt | user gets review memo or audit table | user gets generic advice only | prompt choice too broad | use prompt selection guide and worked examples |
| HU-011 | user can understand draft versus verified | USE_THIS_FIRST.md; AI_CONTEXT_MINIMUM.md; AI_UNCERTAINTY_AND_SOURCE_RULES.md | read default trust rule | user treats outputs as draft unless evidence exists | user saves draft as verified doctrine | labels overlooked | require footer in prompts and context packs |
| HU-012 | user can avoid private source parsing | DO_NOT_LOAD_EVERYTHING.md; CP06; source_safety_check.md | route claim/source requests to safety pack | user refuses unsafe summaries/quotes | user asks AI to summarize private books | book collection encourages unsafe requests | keep source-safety route prominent |

## Result

Result: DOCUMENTATION_TESTS_READY.

These tests are ready for a human or QA agent to execute. They do not claim real user success because no observed user test session was supplied.

