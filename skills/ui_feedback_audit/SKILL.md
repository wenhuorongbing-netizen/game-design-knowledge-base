# Skill: UI Feedback Audit

## Skill ID

ui_feedback_audit

## Purpose

Audit interface clarity, state feedback, player comprehension, affordances, and response signals.

## When To Use

Use when the user says UI is confusing, feedback is unclear, or players miss important information.

## When Not To Use

Do not use for core systems or narrative alignment unless UI feedback is the blocker.

## Required User Input

- UI situation or player confusion.

## Optional User Input

- screen description;
- player goal;
- states;
- current feedback;
- known failure.

## Files To Load

- `skills/ui_feedback_audit/SKILL.md`
- `agent_output_contracts/ui_feedback_audit.md`
- `context_packs/CP04_design_audit.md`

## Files Not To Load

- `_private_sources/`
- benchmark files
- generated exports
- private source bodies

## Related Context Pack

`context_packs/CP04_design_audit.md`

## Related Prompt File

`hands_on_prompts/P08_audit_ui_feedback.md` is optional reference only.

## Related KB Domains

- UI, UX, and Interface
- Game Feel and Feedback

## Related Cards/Lenses/Workflows

Use UI feedback, affordance, state, player attention, and feedback workflow references when needed.

## Output Artifact

UI feedback audit.

## Output Contract

`agent_output_contracts/ui_feedback_audit.md`

## Source Safety Rules

Use only user-supplied UI facts. Do not invent usability test results.

## Confidence Rules

Default confidence: weak without screen, flow, or observation details.

## Minimum Questions To Ask

- What should the player understand?
- What state is currently unclear?
- What action should the UI support?

## Execution Protocol

1. Identify player goal.
2. List required states and signals.
3. Identify missing, noisy, or ambiguous feedback.
4. Propose UI feedback repairs.
5. Define one usability check.

## Common Failure Modes

- aesthetic-only critique;
- no state model;
- invented player observations;
- inaccessible recommendations.

## Acceptance Criteria

- State feedback is mapped.
- Confusion points and repairs are specific.
- Source labels are present.
