# CP07 - Runtime Full

## When To Use

Use this when the task needs the full AI Game Design Master runtime.

This includes routing, capabilities, domains, lenses, workflows, response formats, prompt selection, and source rules.

Do not use this as the default for simple tasks.

## Agent Runtime Files To Load

1. `AI_MASTER_RUNTIME_START_HERE.md`
2. `AI_MASTER_RUNTIME_CONTEXT_PACK.md`
3. `AI_MASTER_RUNTIME_PACK.md`
4. `AI_MASTER_RUNTIME_SAFETY_RULES.md`
5. `AI_UNCERTAINTY_AND_SOURCE_RULES.md`
6. `MASTER_PROBLEM_SOLVER_INDEX.md`
7. `AI_MASTER_ROUTING_RULES.md`
8. `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md`
9. `MASTER_CAPABILITY_MATRIX.md`
10. `MASTER_DOMAIN_MAP.md`

## Optional Human Prompt References

These files are for human copy-paste use. Codex should not load them for normal runtime execution unless the user explicitly asks for prompt text:

- `HANDS_ON_PROMPT_LIBRARY.md`

## Files Not Needed

- generated exports;
- private sources;
- deprecated files;
- legacy folders;
- benchmark raw outputs unless evaluating AI behavior;
- evidence record schemas unless adding evidence.

## Max Recommended Context Size

10 agent-runtime files, or roughly 18,000 to 32,000 words depending on the model context window.

If that is too large, use CP01 plus one task-specific pack instead.

Optional prompt references may be loaded only for human prompt packaging or onboarding.

## Required Safety Rules

- Use the smallest useful route.
- Ask at most 3 high-value missing-input questions unless the user asks for a full intake.
- Produce a concrete artifact.
- Label assumptions, source_basis, confidence, evidence gaps, and next action.
- Do not invent evidence, citations, quotes, user notes, sidecars, project facts, playtest facts, telemetry, or benchmark outputs.
- Do not claim verified status without EvidenceRef and review.

## Recommended Prompt

Use this short prompt:

> Use the Game Design Knowledgebase as an AI Game Design Master runtime.
>
> Task: [paste task]
>
> Route my problem through capability, domain, lenses, and workflow.
>
> Ask only the smallest set of high-value missing-input questions needed.
>
> Produce a concrete artifact.
>
> Label assumptions, source_basis, confidence, evidence gaps, and one next action.
>
> Do not invent evidence or claim verification without EvidenceRef and review.

## Expected Output Artifact

The artifact depends on the routed task:

- concept memo;
- learning path;
- design audit;
- system map;
- prototype plan;
- playtest plan;
- source safety report;
- pitch critique;
- workflow output.
