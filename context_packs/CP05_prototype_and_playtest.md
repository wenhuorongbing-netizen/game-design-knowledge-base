# CP05 - Prototype And Playtest

## When To Use

Use this when the user wants to turn an idea into a prototype question or plan a playtest.

Use it for planning only unless the user supplies real project or playtest data.

## Agent Runtime Files To Load

1. `AI_CONTEXT_MINIMUM.md`
2. `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md`
3. `MASTER_PROBLEM_SOLVER_INDEX.md`
4. `AI_UNCERTAINTY_AND_SOURCE_RULES.md`

## Optional Human Prompt References

These files are for human copy-paste use. Codex should not load them for normal runtime execution unless the user explicitly asks for prompt text:

- `hands_on_prompts/P10_make_prototype_plan.md`
- `hands_on_prompts/P11_make_playtest_plan.md`

## Files Not Needed

- real ProjectOverlay records unless supplied by the user;
- PlaytestLog records unless supplied by the user;
- benchmark files;
- generated exports;
- source schemas;
- private source folders.

## Max Recommended Context Size

4 agent-runtime files, or roughly 4,000 to 6,000 words.

Optional prompt references may be loaded only for human prompt packaging or onboarding.

## Required Safety Rules

- Do not invent project facts.
- Do not invent participants.
- Do not invent observations.
- Do not invent participant quotes.
- Do not generalize one hypothetical test into universal doctrine.
- Separate observed fact, interpretation, hypothesis, decision, and next action.

## Recommended Prompt

Use this short prompt:

> Use the Game Design Knowledgebase as an AI Game Design Master runtime.
>
> Prototype or playtest need: [paste need]
>
> Create a prototype or playtest plan from only the information I provide.
>
> Do not invent project facts, participants, observations, quotes, telemetry, or results.
>
> Produce a concrete plan.
>
> Label assumptions, source_basis, confidence, evidence gaps, and one next action.

## Expected Output Artifact

One of:

- prototype question sheet;
- minimum feature list;
- excluded scope list;
- playtest script;
- observation sheet;
- iteration decision template.
