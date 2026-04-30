# Journey 04 - Prototype Plan

Date: 2026-04-30

## Who This Is For

Use this if you want to test one design question with a small prototype.

## When To Use It

Use this before building too much. The goal is to find the smallest prototype that answers one question.

## What To Open First

Open:

1. [USE_CASE_HUB.md](USE_CASE_HUB.md)
2. [context_packs/CP05_prototype_and_playtest.md](context_packs/CP05_prototype_and_playtest.md)
3. [hands_on_prompts/P10_make_prototype_plan.md](hands_on_prompts/P10_make_prototype_plan.md)

Optional example:

- [worked_examples/EX08_prototype_plan_example.md](worked_examples/EX08_prototype_plan_example.md)

## What Not To Open

Do not open:

- playtest log records;
- evidence records;
- generated exports;
- benchmark internals;
- source body files.

## Required Input

Give the AI:

- the idea or mechanic to test;
- the uncertainty you want to resolve;
- your constraints.

## Optional Input

You may add:

- available tools;
- time limit;
- target platform;
- what you do not want to build yet.

## Context Pack To Load

Load [context_packs/CP05_prototype_and_playtest.md](context_packs/CP05_prototype_and_playtest.md).

## Copy-Paste Prompt To Use

Use [hands_on_prompts/P10_make_prototype_plan.md](hands_on_prompts/P10_make_prototype_plan.md).

## Expected Artifact

The AI should produce:

- prototype question;
- minimum playable scope;
- explicit non-goals;
- required materials;
- success and failure signals;
- next build step.

## Good Output Checklist

A good output:

- tests one question, not the whole game;
- avoids adding features too early;
- names what not to build;
- does not invent user results;
- includes source_basis and confidence;
- ends with one buildable next step.

## Accessibility Notes

Ask for the plan in 5 rows if a full plan feels too large: question, build, exclude, observe, decide.

## Source/Confidence Rule

The prototype plan is a planning scaffold.

Default:

- source_basis: unsupported_draft
- confidence: weak
- verified claims: none
- playtest evidence: none until real testing occurs

## Common Confusion Points

- A prototype plan is not a real prototype.
- A predicted success signal is not observed player evidence.
- Do not treat a hypothetical test as a completed playtest.

## Next Action

Use the plan to build only the minimum testable version, then return to Journey 05 for a playtest plan.
