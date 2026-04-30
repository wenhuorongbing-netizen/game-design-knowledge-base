# CP01 - Minimal General Use

## When To Use

Use this for most first-time or casual AI conversations.

Choose this when the user wants one useful design artifact and does not need deep routing, evidence intake, benchmark scoring, or repository maintenance.

## Files To Load

1. `AI_CONTEXT_MINIMUM.md`
2. `USE_THIS_FIRST.md`
3. `HANDS_ON_PROMPT_LIBRARY.md`
4. `AI_MASTER_RUNTIME_SAFETY_RULES.md`
5. `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md`

## Files Not Needed

- generated exports;
- benchmark run files;
- schema files;
- source audit internals;
- evidence intake templates;
- legacy folders;
- private source folders.

## Max Recommended Context Size

5 files, or roughly 3,000 to 5,000 words.

## Required Safety Rules

- Do not invent facts, citations, evidence, user notes, legal sidecars, project facts, playtest data, telemetry, or benchmark outputs.
- Do not parse private or high-risk source bodies.
- Do not claim verified status without EvidenceRef and review.
- Label assumptions, source_basis, confidence, evidence gaps, and next action.

## Recommended Prompt

Use the Game Design Knowledgebase as an AI Game Design Master runtime. Route my request, ask at most 3 high-value questions only if needed, produce one concrete artifact, and label assumptions, source_basis, confidence, evidence gaps, and one next action.

My request: [paste request]

## Expected Output Artifact

One of:

- concept memo;
- diagnostic question set;
- audit table;
- learning mini-lesson;
- prototype question;
- evidence gap report.

