# CP02 - Game Idea Review

## When To Use

Use this when the user has a rough idea, genre mix, premise, fantasy, pitch, or unclear core experience.

## Agent Runtime Files To Load

1. `AI_CONTEXT_MINIMUM.md`
2. `USE_CASES/vague_game_idea.md`
3. `MASTER_PROBLEM_SOLVER_INDEX.md`
4. `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md`

## Optional Human Prompt References

These files are for human copy-paste use. Codex should not load them for normal runtime execution unless the user explicitly asks for prompt text:

- `hands_on_prompts/P01_review_my_game_idea.md`
- `hands_on_prompts/P02_define_core_experience.md`

## Files Not Needed

- benchmark files;
- source schemas;
- evidence sidecar templates;
- generated exports;
- private source folders;
- full domain map unless the idea requires broad domain routing.

## Max Recommended Context Size

4 agent-runtime files, or roughly 4,000 to 6,000 words.

Optional prompt references may be loaded only for human prompt packaging or onboarding.

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
