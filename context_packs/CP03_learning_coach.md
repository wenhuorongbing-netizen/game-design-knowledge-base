# CP03 - Learning Coach

## When To Use

Use this when the user wants to learn game design, choose what to read, practice a concept, or study without an active project.

## Agent Runtime Files To Load

1. `AI_CONTEXT_MINIMUM.md`
2. `USE_CASES/learn_game_design.md`
3. `MASTER_LEARNING_PATH.md`
4. `READING_TO_KB_PIPELINE.md`
5. `AI_UNCERTAINTY_AND_SOURCE_RULES.md`

## Optional Human Prompt References

These files are for human copy-paste use. Codex should not load them for normal runtime execution unless the user explicitly asks for prompt text:

- `hands_on_prompts/P12_teach_me_game_design.md`
- `hands_on_prompts/P13_create_reading_plan.md`

## Files Not Needed

- private source files;
- book body text;
- benchmark run files;
- generated exports;
- schema files;
- project overlay records unless the user has a real project.

## Max Recommended Context Size

5 agent-runtime files, or roughly 5,000 to 8,000 words.

Optional prompt references may be loaded only for human prompt packaging or onboarding.

## Required Safety Rules

- Do not summarize private or high-risk books.
- Do not claim a book argues something unless legal evidence exists.
- Use metadata_only only for reading route recommendations.
- Use unsupported_draft or weak for teaching scaffolds.
- Ask for user manual notes if the user wants source-backed claims later.

## Recommended Prompt

Use this short prompt:

> Use the Game Design Knowledgebase as an AI Game Design Master learning coach.
>
> Topic: [paste topic]
>
> Teach one practical concept.
>
> Give me one small exercise.
>
> Recommend what to read next at metadata level only.
>
> Do not summarize private books or invent source claims.
>
> Label source_basis, confidence, assumptions, and evidence gaps.

## Expected Output Artifact

- mini lesson;
- when to use it;
- when not to use it;
- diagnostic questions;
- small exercise;
- source-safe reading note prompt.
