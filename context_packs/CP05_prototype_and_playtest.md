# CP05 - Prototype And Playtest

## When To Use

Use this when the user wants to turn an idea into a prototype question or plan a playtest.

Use it for planning only unless the user supplies real project or playtest data.

## Files To Load

1. `AI_CONTEXT_MINIMUM.md`
2. `hands_on_prompts/P10_make_prototype_plan.md`
3. `hands_on_prompts/P11_make_playtest_plan.md`
4. `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md`
5. `MASTER_PROBLEM_SOLVER_INDEX.md`
6. `AI_UNCERTAINTY_AND_SOURCE_RULES.md`

## Files Not Needed

- real ProjectOverlay records unless supplied by the user;
- PlaytestLog records unless supplied by the user;
- benchmark files;
- generated exports;
- source schemas;
- private source folders.

## Max Recommended Context Size

6 files, or roughly 5,000 to 8,000 words.

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
