# Skill: Narrative Mechanic Alignment

## Skill ID

narrative_mechanic_alignment

## Purpose

Align narrative premise, world rules, character goals, player fantasy, and mechanics.

## When To Use

Use when the user says story and mechanics feel disconnected.

## When Not To Use

Do not use for prose editing only or for economy-only problems.

## Required User Input

- narrative premise;
- mechanic summary.

## Optional User Input

- character goal;
- world rules;
- themes;
- target emotion.

## Files To Load

- `skills/narrative_mechanic_alignment/SKILL.md`
- `agent_output_contracts/narrative_mechanic_alignment.md`
- `context_packs/CP04_design_audit.md`

## Files Not To Load

- `_private_sources/`
- benchmark files
- generated exports
- private source bodies

## Related Context Pack

`context_packs/CP04_design_audit.md`

## Related Prompt File

`hands_on_prompts/P09_align_narrative_and_mechanics.md` is optional reference only.

## Related KB Domains

- Narrative, World, and Character
- Player Experience
- Rules and Mechanics

## Related Cards/Lenses/Workflows

Use narrative-system, player fantasy, mechanics, and core experience maps when needed.

## Output Artifact

Narrative-mechanic alignment report.

## Output Contract

`agent_output_contracts/narrative_mechanic_alignment.md`

## Source Safety Rules

Do not invent story facts or lore beyond user input.

## Confidence Rules

Default confidence: weak unless the premise, mechanics, and player fantasy are specific.

## Minimum Questions To Ask

- What is the narrative promise?
- What does the player repeatedly do?
- Where does the mismatch appear?

## Execution Protocol

1. State narrative promise.
2. State mechanic promise.
3. Map alignments and frictions.
4. Suggest mechanic, narrative, or framing repairs.
5. Define one validation question.

## Common Failure Modes

- story critique without mechanics;
- invented lore;
- generic theme advice;
- no artifact.

## Acceptance Criteria

- Alignment map exists.
- Frictions are actionable.
- Assumptions and evidence gaps are labeled.
