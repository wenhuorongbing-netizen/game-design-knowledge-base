# CP04 - Design Audit

## When To Use

Use this when the user wants critique or diagnosis.

Good targets include a mechanic, decision, system, economy, game feel issue, UI feedback problem, narrative mismatch, or pitch.

## Files To Load

1. `AI_CONTEXT_MINIMUM.md`
2. `MASTER_PROBLEM_SOLVER_INDEX.md`
3. `AI_MASTER_ROUTING_RULES.md`
4. `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md`
5. `HANDS_ON_PROMPT_SELECTION_GUIDE.md`
6. one relevant prompt from `hands_on_prompts/`

Recommended prompt choices:

- P04 for lens review;
- P05 for meaningful decisions;
- P06 for systems and economy;
- P07 for game feel and feedback;
- P08 for UI feedback;
- P09 for narrative-mechanic alignment;
- P15 for pitch critique.

## Files Not Needed

- benchmark outputs;
- source schemas;
- generated exports;
- evidence sidecars unless source claims are requested;
- private source folders.

## Max Recommended Context Size

6 files plus one prompt, or roughly 6,000 to 9,000 words.

## Required Safety Rules

- Do not invent project facts beyond user input.
- Do not invent player reactions, telemetry, or playtest data.
- Treat the audit as a draft design hypothesis unless evidence exists.
- Label assumptions, source_basis, confidence, and evidence gaps.
- Produce an artifact even when inputs are partial.

## Recommended Prompt

Use this short prompt:

> Use the Game Design Knowledgebase as an AI Game Design Master runtime.
>
> Problem: [paste problem]
>
> Diagnose the design problem.
>
> Choose the relevant capability.
>
> Select 2 to 5 lenses and one workflow.
>
> Produce a concrete audit artifact.
>
> Ask at most 3 high-value questions only if blocked.
>
> Label assumptions, source_basis, confidence, evidence gaps, and one next action.

## Expected Output Artifact

One of:

- lens review report;
- decision audit matrix;
- rule table;
- system map;
- economy source/sink table;
- feel audit;
- UI feedback audit;
- narrative-mechanic alignment map;
- pitch critique memo.
