# Skill: Meaningful Decision Audit

## Skill ID

meaningful_decision_audit

## Purpose

Diagnose whether choices are meaningful, obvious, blind, fake, or strategically interesting.

## When To Use

Use when the user says choices feel meaningless, fake, obvious, or uninteresting.

## When Not To Use

Do not use for broad concept review unless the main issue is player decision quality.

## Required User Input

- description of a choice or decision point.

## Optional User Input

- player goal;
- available information;
- options;
- consequences;
- rules.

## Files To Load

- `skills/meaningful_decision_audit/SKILL.md`
- `agent_output_contracts/meaningful_decision_audit.md`
- `context_packs/CP04_design_audit.md`
- `PROBLEM_TO_WORKFLOW_MAP.md` if workflow routing is needed

## Files Not To Load

- `_private_sources/`
- benchmark files
- generated exports
- private book bodies

## Related Context Pack

`context_packs/CP04_design_audit.md`

## Related Prompt File

`hands_on_prompts/P05_audit_meaningful_decisions.md` is optional reference only.

## Related KB Domains

- Meaningful Decisions
- Rules and Mechanics
- Skill, Chance, Challenge, and Balance

## Related Cards/Lenses/Workflows

Use decision, tradeoff, dilemma, risk/reward, and rules/mechanics indexes only if needed.

## Output Artifact

Meaningful decision audit.

## Output Contract

`agent_output_contracts/meaningful_decision_audit.md`

## Source Safety Rules

Do not present theory labels as verified without EvidenceRefs. Use user-supplied mechanics only.

## Confidence Rules

Default confidence: weak unless options, information, and consequences are supplied.

## Minimum Questions To Ask

- What options does the player have?
- What does the player know at the moment of choice?
- What consequences differ between options?

## Execution Protocol

1. Map the decision point.
2. Classify the choice failure mode.
3. Identify missing information, stakes, or tradeoffs.
4. Propose repair patterns.
5. Suggest one prototype test.

## Common Failure Modes

- inventing choices;
- ignoring information state;
- treating all choices as moral choices;
- no repair pattern.

## Acceptance Criteria

- Decision matrix exists.
- Failure mode is named.
- Repair options are concrete.
