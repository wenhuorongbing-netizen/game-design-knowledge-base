# Journey Map To Use Cases

Date: 2026-04-30

## Purpose

This file maps the plain-language journey layer to existing use cases, prompts, context packs, and worked examples.

It does not add new knowledge content, evidence, claims, or benchmark results.

## Journey Map

| Journey | Existing use case | Context pack | Prompt | Worked example | Expected artifact |
|---|---|---|---|---|---|
| [JOURNEY_01_NO_PROJECT_LEARNING.md](JOURNEY_01_NO_PROJECT_LEARNING.md) | [USE_CASES/no_project_start.md](USE_CASES/no_project_start.md) | [CP03](context_packs/CP03_learning_coach.md) | [P12](hands_on_prompts/P12_teach_me_game_design.md) | [EX01](worked_examples/EX01_vague_game_idea_review.md) | daily learning artifact |
| [JOURNEY_02_VAGUE_GAME_IDEA.md](JOURNEY_02_VAGUE_GAME_IDEA.md) | [USE_CASES/vague_game_idea.md](USE_CASES/vague_game_idea.md) | [CP02](context_packs/CP02_game_idea_review.md) | [P01](hands_on_prompts/P01_review_my_game_idea.md) | [EX01](worked_examples/EX01_vague_game_idea_review.md) | one-page concept memo |
| [JOURNEY_03_DESIGN_REVIEW.md](JOURNEY_03_DESIGN_REVIEW.md) | [USE_CASES/design_review.md](USE_CASES/design_review.md) | [CP04](context_packs/CP04_design_audit.md) | [P04-P09](HANDS_ON_PROMPT_LIBRARY.md) | [EX03-EX07](worked_examples/README.md) | design review report or audit table |
| [JOURNEY_04_PROTOTYPE_PLAN.md](JOURNEY_04_PROTOTYPE_PLAN.md) | [USE_CASE_HUB.md](USE_CASE_HUB.md) prototype route | [CP05](context_packs/CP05_prototype_and_playtest.md) | [P10](hands_on_prompts/P10_make_prototype_plan.md) | [EX08](worked_examples/EX08_prototype_plan_example.md) | prototype question sheet |
| [JOURNEY_05_PLAYTEST_PLAN.md](JOURNEY_05_PLAYTEST_PLAN.md) | [USE_CASE_HUB.md](USE_CASE_HUB.md) playtest route | [CP05](context_packs/CP05_prototype_and_playtest.md) | [P11](hands_on_prompts/P11_make_playtest_plan.md) | [EX09](worked_examples/EX09_playtest_plan_example.md) | playtest plan |
| [JOURNEY_06_READING_TO_NOTES.md](JOURNEY_06_READING_TO_NOTES.md) | [USE_CASES/reading_to_notes.md](USE_CASES/reading_to_notes.md) | [CP03](context_packs/CP03_learning_coach.md) | [P13](hands_on_prompts/P13_create_reading_plan.md) | none; use templates instead | source-safe manual note plan |
| [JOURNEY_07_CLAIM_CHECK.md](JOURNEY_07_CLAIM_CHECK.md) | [USE_CASES/source_safety_check.md](USE_CASES/source_safety_check.md) | [CP06](context_packs/CP06_source_safety_and_claim_check.md) | [P14](hands_on_prompts/P14_check_unsupported_claim.md) | [EX10](worked_examples/EX10_unsupported_claim_check.md) | claim safety report |
| [JOURNEY_08_PITCH_CRITIQUE.md](JOURNEY_08_PITCH_CRITIQUE.md) | [USE_CASE_HUB.md](USE_CASE_HUB.md) pitch route | [CP04](context_packs/CP04_design_audit.md) | [P15](hands_on_prompts/P15_pitch_critique.md) | none; use prompt output directly | pitch critique memo |

## Coverage Notes

- Prototype, playtest, and pitch journeys currently route through [USE_CASE_HUB.md](USE_CASE_HUB.md) and existing prompt/context files rather than dedicated `USE_CASES/*.md` pages.
- This is acceptable for the productized journey layer because each journey still has a clear start, context pack, prompt, expected artifact, and next action.
- If these routes become high-traffic, create dedicated use-case pages later without changing the journey URLs.

## Source And Confidence Defaults

Unless the user supplies real legal/user/project/playtest evidence:

- design artifacts are `unsupported_draft`;
- confidence is `weak`;
- verified claims are not allowed;
- EvidenceRefs are not invented;
- synthetic examples are not user evidence.

## Maintenance Checklist

- Keep journey links aligned with [USE_CASE_HUB.md](USE_CASE_HUB.md).
- Keep prompt IDs aligned with [HANDS_ON_PROMPT_LIBRARY.md](HANDS_ON_PROMPT_LIBRARY.md).
- Keep context pack IDs aligned with [AI_CONTEXT_PACKS.md](AI_CONTEXT_PACKS.md).
- Do not add claims, evidence, benchmark scores, or user observations in this map.
