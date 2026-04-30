# CP04 - Design Audit

## When To Use

Use this when the user wants critique or diagnosis.

Good targets include a mechanic, decision, system, economy, game feel issue, UI feedback problem, narrative mismatch, or pitch.

## Agent Runtime Files To Load

1. `AI_CONTEXT_MINIMUM.md`
2. `MASTER_PROBLEM_SOLVER_INDEX.md`
3. `AI_MASTER_ROUTING_RULES.md`
4. `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md`

## Optional Human Prompt References

These files are for human copy-paste use. Codex should not load them for normal runtime execution unless the user explicitly asks for prompt text:

- `HANDS_ON_PROMPT_SELECTION_GUIDE.md`
- `hands_on_prompts/P04_run_lens_review.md`
- `hands_on_prompts/P05_audit_meaningful_decisions.md`
- `hands_on_prompts/P06_audit_systems_and_economy.md`
- `hands_on_prompts/P07_audit_game_feel_and_feedback.md`
- `hands_on_prompts/P08_audit_ui_feedback.md`
- `hands_on_prompts/P09_align_narrative_and_mechanics.md`
- `hands_on_prompts/P15_pitch_critique.md`

## Files Not Needed

- benchmark outputs;
- source schemas;
- generated exports;
- evidence sidecars unless source claims are requested;
- private source folders.

## Max Recommended Context Size

4 agent-runtime files, or roughly 4,000 to 7,000 words.

Optional prompt references may be loaded only for human prompt packaging or onboarding.

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
