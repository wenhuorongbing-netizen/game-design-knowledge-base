# Skill: Core Experience Definition

## Skill ID

core_experience_definition

## Purpose

Define the player fantasy, core experience, design pillars, and experience tests for a game idea.

## When To Use

Use when the user asks what the game is about, what players should feel, or how to define design pillars.

## When Not To Use

Do not use when the primary task is economy, source safety, or playtest analysis.

## Required User Input

- game idea or design goal.

## Optional User Input

- target player;
- emotional goal;
- reference games;
- constraints.

## Files To Load

- `skills/core_experience_definition/SKILL.md`
- `agent_output_contracts/core_experience_statement.md`
- `context_packs/CP02_game_idea_review.md` if needed

## Files Not To Load

- `_private_sources/`
- benchmark files
- generated exports
- private source bodies

## Related Context Pack

`context_packs/CP02_game_idea_review.md`

## Related Prompt File

`hands_on_prompts/P02_define_core_experience.md` is optional reference only.

## Related KB Domains

- Player Experience
- Game Design Foundations

## Related Cards/Lenses/Workflows

Use `MASTER_CAPABILITY_MATRIX.md` and `MASTER_DOMAIN_MAP.md` only if the idea needs domain routing.

## Output Artifact

Core experience statement.

## Output Contract

`agent_output_contracts/core_experience_statement.md`

## Source Safety Rules

Do not cite book doctrine unless evidence exists. Treat generated statements as draft design scaffolding.

## Confidence Rules

Default confidence: weak. Label confidence as moderate only if user supplies clear audience, verbs, emotion, and constraints.

## Minimum Questions To Ask

- What should the player feel?
- What does the player repeatedly do?
- What must never be lost from the experience?

## Execution Protocol

1. Extract player fantasy.
2. Define core verbs.
3. State desired emotional arc.
4. Create 1 core experience statement.
5. Create 3 design pillars.
6. Create quick tests for each pillar.

## Common Failure Modes

- vague pillars;
- theme without play behavior;
- too many constraints;
- unsupported confidence.

## Acceptance Criteria

- One core statement exists.
- Pillars are actionable.
- Assumptions and evidence gaps are labeled.
