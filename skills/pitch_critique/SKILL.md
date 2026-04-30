# Skill: Pitch Critique

## Skill ID

pitch_critique

## Purpose

Critique a game pitch for clarity, hook, audience, player promise, scope, and risk.

## When To Use

Use when the user provides pitch text or asks how to explain a game idea.

## When Not To Use

Do not use to invent market data, publisher feedback, user research, or benchmark proof.

## Required User Input

- pitch text or rough pitch.

## Optional User Input

- target audience;
- platform;
- development scope;
- pitch length;
- constraints.

## Files To Load

- `skills/pitch_critique/SKILL.md`
- `agent_output_contracts/pitch_critique.md`
- `context_packs/CP04_design_audit.md`

## Files Not To Load

- `_private_sources/`
- benchmark files
- generated exports
- private source bodies

## Related Context Pack

`context_packs/CP04_design_audit.md`

## Related Prompt File

`hands_on_prompts/P15_pitch_critique.md` is optional reference only.

## Related KB Domains

- Production, Documentation, and Pitch
- Player Experience

## Related Cards/Lenses/Workflows

Use pitch, production, core experience, and player promise references only if needed.

## Output Artifact

Pitch critique.

## Output Contract

`agent_output_contracts/pitch_critique.md`

## Source Safety Rules

Do not invent market evidence, audience proof, publisher feedback, or player research.

## Confidence Rules

Default confidence: weak unless target audience and constraints are supplied.

## Minimum Questions To Ask

- Who is the pitch for?
- What should they remember?
- What constraint matters most?

## Execution Protocol

1. Identify pitch promise.
2. Check audience fit.
3. Diagnose clarity and specificity.
4. Identify scope and credibility risks.
5. Provide a safer revised pitch.

## Common Failure Modes

- generic praise;
- invented market proof;
- no rewrite;
- no audience distinction.

## Acceptance Criteria

- Critique is specific.
- Rewrite is concrete.
- Source and confidence boundaries are visible.
