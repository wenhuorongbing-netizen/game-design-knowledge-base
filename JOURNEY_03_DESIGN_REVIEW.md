# Journey 03 - Design Review

Date: 2026-04-30

## Who This Is For

Use this if you already have a concept, mechanic, loop, scene, rule set, UI flow, or pitch and want critique.

## When To Use It

Use this when you need the AI to diagnose a design problem, not just brainstorm more ideas.

## What To Open First

Open:

1. [USE_CASES/design_review.md](USE_CASES/design_review.md)
2. [context_packs/CP04_design_audit.md](context_packs/CP04_design_audit.md)
3. [HANDS_ON_PROMPT_LIBRARY.md](HANDS_ON_PROMPT_LIBRARY.md)

Choose one prompt:

- [hands_on_prompts/P04_run_lens_review.md](hands_on_prompts/P04_run_lens_review.md)
- [hands_on_prompts/P05_audit_meaningful_decisions.md](hands_on_prompts/P05_audit_meaningful_decisions.md)
- [hands_on_prompts/P06_audit_systems_and_economy.md](hands_on_prompts/P06_audit_systems_and_economy.md)
- [hands_on_prompts/P07_audit_game_feel_and_feedback.md](hands_on_prompts/P07_audit_game_feel_and_feedback.md)
- [hands_on_prompts/P08_audit_ui_feedback.md](hands_on_prompts/P08_audit_ui_feedback.md)
- [hands_on_prompts/P09_align_narrative_and_mechanics.md](hands_on_prompts/P09_align_narrative_and_mechanics.md)

## What Not To Open

Do not open:

- evidence sidecars unless checking claims;
- benchmark score files;
- generated exports;
- private source folders.

## Required Input

Give the AI:

- what you are reviewing;
- what problem you suspect;
- what kind of output you want.

## Optional Input

You may add:

- target player experience;
- current rules;
- known constraints;
- screenshots or mock text if available;
- examples of player confusion if real and user-supplied.

## Context Pack To Load

Load [context_packs/CP04_design_audit.md](context_packs/CP04_design_audit.md).

## Copy-Paste Prompt To Use

Start with [hands_on_prompts/P04_run_lens_review.md](hands_on_prompts/P04_run_lens_review.md) if you do not know which audit to run.

Use a more specific prompt if the problem is clear:

- meaningful choices: P05;
- systems or economy: P06;
- feel and feedback: P07;
- UI feedback: P08;
- narrative and mechanics: P09.

## Expected Artifact

The AI should produce:

- selected lenses;
- a short diagnosis;
- an issue list ranked by severity;
- concrete revisions;
- a small test or prototype step;
- source_basis and confidence labels.

## Good Output Checklist

A good output:

- names the design problem directly;
- explains why each issue matters;
- gives artifact-level recommendations;
- does not give generic advice;
- does not invent playtest data;
- separates assumptions from known user input.

## Accessibility Notes

Ask for a "top 5 issues only" review if the output is too long.

Ask for headings: "Problem, Why It Matters, Fix, Test."

## Source/Confidence Rule

Design review output is draft critique unless you supplied real evidence.

Default:

- source_basis: unsupported_draft
- confidence: weak
- verified claims: none

## Common Confusion Points

- A design review is not a playtest.
- A lens is a question tool, not a source citation.
- If you supply no player data, the AI must not invent player reactions.

## Next Action

Pick one issue from the review and ask the AI for a revision plan with one testable design change.
