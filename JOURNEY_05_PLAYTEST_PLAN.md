# Journey 05 - Playtest Plan

Date: 2026-04-30

## Who This Is For

Use this if you have something playable or testable and need a safe plan for observing players.

## When To Use It

Use this before running a playtest. The goal is to define what to observe, not to invent results.

## What To Open First

Open:

1. [USE_CASE_HUB.md](USE_CASE_HUB.md)
2. [context_packs/CP05_prototype_and_playtest.md](context_packs/CP05_prototype_and_playtest.md)
3. [hands_on_prompts/P11_make_playtest_plan.md](hands_on_prompts/P11_make_playtest_plan.md)

Optional example:

- [worked_examples/EX09_playtest_plan_example.md](worked_examples/EX09_playtest_plan_example.md)

## What Not To Open

Do not open:

- playtest log records unless you are recording a real test;
- benchmark files;
- source body files;
- generated exports.

## Required Input

Give the AI:

- what will be tested;
- the test goal;
- the prototype version or description;
- what decision the test should inform.

## Optional Input

You may add:

- participant type;
- session length;
- task list;
- accessibility constraints;
- known risks.

## Context Pack To Load

Load [context_packs/CP05_prototype_and_playtest.md](context_packs/CP05_prototype_and_playtest.md).

## Copy-Paste Prompt To Use

Use [hands_on_prompts/P11_make_playtest_plan.md](hands_on_prompts/P11_make_playtest_plan.md).

## Expected Artifact

The AI should produce:

- playtest goal;
- participant and session assumptions;
- task script;
- observation checklist;
- question list;
- decision rule;
- notes template.

## Good Output Checklist

A good output:

- separates observed facts from interpretation;
- does not invent participant behavior;
- does not invent quotes;
- makes the design decision explicit;
- includes source_basis and confidence;
- says what evidence is still missing.

## Accessibility Notes

Ask the AI for a "moderator checklist" if you want a simpler plan.

Use short tasks and clear language for participants.

## Source/Confidence Rule

The plan is not playtest evidence.

Default:

- source_basis: unsupported_draft
- confidence: weak
- verified claims: none
- playtest facts: none until user supplies real observations

## Common Confusion Points

- A playtest plan is not a playtest log.
- A participant quote must be real and user-provided.
- One playtest does not prove universal game design doctrine.

## Next Action

Run the test outside the KB, record real observations separately, and only then consider creating a real PlaytestLog.
