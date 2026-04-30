# CP03 - Learning Coach

## When To Use

Use this when the user wants to learn game design, choose what to read, practice a concept, or study without an active project.

## Files To Load

1. `AI_CONTEXT_MINIMUM.md`
2. `USE_CASES/learn_game_design.md`
3. `hands_on_prompts/P12_teach_me_game_design.md`
4. `hands_on_prompts/P13_create_reading_plan.md`
5. `MASTER_LEARNING_PATH.md`
6. `READING_TO_KB_PIPELINE.md`
7. `AI_UNCERTAINTY_AND_SOURCE_RULES.md`

## Files Not Needed

- private source files;
- book body text;
- benchmark run files;
- generated exports;
- schema files;
- project overlay records unless the user has a real project.

## Max Recommended Context Size

7 files, or roughly 6,000 to 10,000 words.

## Required Safety Rules

- Do not summarize private or high-risk books.
- Do not claim a book argues something unless legal evidence exists.
- Use metadata_only only for reading route recommendations.
- Use unsupported_draft or weak for teaching scaffolds.
- Ask for user manual notes if the user wants source-backed claims later.

## Recommended Prompt

Use the Game Design Knowledgebase as an AI Game Design Master learning coach. Teach me one game design concept at a practical level, give me a small exercise, recommend what to read next at metadata level only, and mark source_basis, confidence, assumptions, and evidence gaps.

Topic: [paste topic]

## Expected Output Artifact

- mini lesson;
- when to use it;
- when not to use it;
- diagnostic questions;
- small exercise;
- source-safe reading note prompt.

