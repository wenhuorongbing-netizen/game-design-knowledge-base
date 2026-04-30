# Use Case Discoverability Audit

Date: 2026-04-30

## Verdict

Verdict: CONDITIONALLY_ACCEPTED.

Use cases are discoverable for users who open `USE_CASE_HUB.md` or `10_MINUTE_QUICKSTART.md`. The gap is that the repository still offers many other start-like files before users reach the use-case chooser.

## Use Case Coverage

| User intent | Existing route | Status |
|---|---|---|
| no active project | `NO_PROJECT_START_HERE.md`, `USE_CASES/no_project_start.md`, P12, CP03 | covered |
| vague game idea | `USE_CASES/vague_game_idea.md`, P01, CP02, EX01 | covered |
| design review | `USE_CASES/design_review.md`, P04-P09, CP04 | covered |
| learn game design | `USE_CASES/learn_game_design.md`, P12, CP03 | covered |
| source-safe reading | `USE_CASES/reading_to_notes.md`, P13, CP03 | covered |
| claim/source safety | `USE_CASES/source_safety_check.md`, P14, CP06, EX10 | covered |
| prototype/playtest planning | P10/P11, CP05, EX08/EX09 | covered, but route is prompt-first rather than use-case-first |
| pitch critique | P15, CP04 | covered, but not a dedicated use-case page |

## Discoverability Strengths

Observation: `USE_CASE_HUB.md` maps each common situation to start file, prompt, context pack, and example.

Inference: Once found, the hub is the strongest practical navigation surface.

Recommendation: Promote `USE_CASE_HUB.md` as step 2 after `10_MINUTE_QUICKSTART.md`.

Observation: `USE_CASES/` pages are short and include copy-paste prompts.

Inference: They are better for first-time users than the larger prompt library.

Recommendation: Prefer `USE_CASES/` pages for first decision; use `hands_on_prompts/` after the user chooses a task.

Observation: Worked examples match most common use cases.

Inference: Users can understand expected output shape without real evidence.

Recommendation: Keep worked examples linked from use-case routes.

## Discoverability Risks

| risk | observation | inference | recommendation | priority |
|---|---|---|---|---|
| hub is one of many starts | users can start from multiple root files | hub may be missed | route `README.md`, `USE_THIS_FIRST.md`, and quickstart consistently to the hub | P1 |
| too many choices in hub | hub has 14 rows | good coverage but heavy first scan | add "most common first choices" above table | P1 |
| prototype/playtest not a use-case page | P10/P11 exist but no dedicated `USE_CASES/prototype_plan.md` | users may look for planning route in use-case folder | add use-case pages later if observed need appears | P2 |
| pitch critique not a use-case page | P15 exists but no dedicated `USE_CASES/pitch_critique.md` | route may be less discoverable | add only if user trial shows need | P2 |
| no empirical route success | trial report is pending observation | cannot claim users find routes quickly | collect observed user trial | P1 |

## Prompt Discoverability

Observation: `HANDS_ON_PROMPT_LIBRARY.md` has 15 clearly named prompts.

Inference: Prompt discoverability is good after the user knows the task.

Recommendation: Do not make prompt library the first user screen. Use it as the prompt index after route selection.

Observation: Prompt files include self-check prompts and follow-up prompts.

Inference: They support repeated use.

Recommendation: Keep these sections, but shorten copy-paste prompt line lengths.

## Context Pack Discoverability

Observation: `AI_CONTEXT_PACKS.md` recommends CP01 as the default and maps user intent to packs.

Inference: AI-agent minimal-context loading is discoverable.

Recommendation: Keep CP01 as the default; do not require CP07 for normal use.

## No-Project Discoverability

Observation: No-project route appears in `USE_THIS_FIRST.md`, `10_MINUTE_QUICKSTART.md`, `HANDS_ON_START_HERE.md`, `USE_CASE_HUB.md`, and `USE_CASES/no_project_start.md`.

Inference: No-project users are supported.

Recommendation: Keep no-project route visible because it matches the current user situation.

## Vague-Idea Discoverability

Observation: Vague idea route appears in the quickstart, hub, use-case folder, prompt library, context packs, and worked examples.

Inference: Vague-idea users are supported.

Recommendation: Make vague-idea review one of the top two default actions.

## Final Discoverability Assessment

Use cases are well covered. The immediate improvement is not adding more use cases; it is making the first route decision smaller and more visually dominant.
