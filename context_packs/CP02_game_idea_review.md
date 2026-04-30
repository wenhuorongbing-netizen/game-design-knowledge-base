# CP02 - Game Idea Review

## When To Use

Use this when the user has a rough idea, genre mix, premise, fantasy, pitch, or unclear core experience.

## Files To Load

1. `AI_CONTEXT_MINIMUM.md`
2. `USE_CASES/vague_game_idea.md`
3. `hands_on_prompts/P01_review_my_game_idea.md`
4. `hands_on_prompts/P02_define_core_experience.md`
5. `MASTER_PROBLEM_SOLVER_INDEX.md`
6. `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md`

## Files Not Needed

- benchmark files;
- source schemas;
- evidence sidecar templates;
- generated exports;
- private source folders;
- full domain map unless the idea requires broad domain routing.

## Max Recommended Context Size

6 files, or roughly 5,000 to 8,000 words.

## Required Safety Rules

- Treat the idea as user-provided but untested.
- Do not invent market demand, production scope, player reactions, playtest results, or telemetry.
- Do not cite books unless evidence is available.
- Default source_basis is unsupported_draft.
- Default confidence is weak.

## Recommended Prompt

Use this short prompt:

> Use the Game Design Knowledgebase as an AI Game Design Master runtime.
>
> Review my game idea.
>
> My idea: [paste idea]
>
> Produce a one-page concept memo and a core experience statement.
>
> Ask at most 3 high-value questions only if needed.
>
> Do not invent evidence, player reactions, market data, or project facts.
>
> Label assumptions, source_basis, confidence, evidence gaps, and one next action.

## Expected Output Artifact

- one-page concept memo;
- core experience statement;
- design pillars;
- top risks;
- useful lenses;
- next prototype question.
