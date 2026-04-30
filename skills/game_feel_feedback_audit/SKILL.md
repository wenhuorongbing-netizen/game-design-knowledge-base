# Skill: Game Feel Feedback Audit

## Skill ID

game_feel_feedback_audit

## Purpose

Audit responsiveness, tightness, floatiness, camera feel, avatar feel, input feedback, and polish signals.

## When To Use

Use when the user says the game feels floaty, sluggish, unresponsive, weak, or unclear.

## When Not To Use

Do not use for economy or narrative problems unless feel/feedback is the main concern.

## Required User Input

- feel or feedback problem.

## Optional User Input

- input method;
- movement rules;
- camera behavior;
- animation/FX/audio feedback;
- expected feel.

## Files To Load

- `skills/game_feel_feedback_audit/SKILL.md`
- `agent_output_contracts/game_feel_audit.md`
- `context_packs/CP04_design_audit.md`

## Files Not To Load

- `_private_sources/`
- benchmark files
- generated exports
- private source bodies

## Related Context Pack

`context_packs/CP04_design_audit.md`

## Related Prompt File

`hands_on_prompts/P07_audit_game_feel_and_feedback.md` is optional reference only.

## Related KB Domains

- Game Feel and Feedback
- UI, UX, and Interface

## Related Cards/Lenses/Workflows

Use game feel, feedback, input, response, camera, and polish references only if needed.

## Output Artifact

Game feel audit.

## Output Contract

`agent_output_contracts/game_feel_audit.md`

## Source Safety Rules

Do not summarize private game feel texts. Do not invent measurements or playtest reactions.

## Confidence Rules

Default confidence: weak unless observable behavior, timing, or user-supplied tests exist.

## Minimum Questions To Ask

- What action feels wrong?
- What should it feel like instead?
- What feedback is missing, late, or unclear?

## Execution Protocol

1. Identify feel target.
2. Separate input, response, camera, feedback, and polish factors.
3. State hypotheses.
4. Propose tuning checks.
5. Recommend a small feel test.

## Common Failure Modes

- generic polish advice;
- invented latency numbers;
- no separation between input and feedback;
- no testable tuning step.

## Acceptance Criteria

- Audit identifies likely feel factors.
- Tuning recommendations are testable.
- Evidence gaps are clear.
