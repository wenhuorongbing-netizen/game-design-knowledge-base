# Skill: Playtest Plan

## Skill ID

playtest_plan

## Purpose

Create a playtest plan without inventing participants, observations, quotes, or results.

## When To Use

Use when the user wants to plan a playtest or decide what to observe.

## When Not To Use

Do not use to analyze nonexistent playtest data.

## Required User Input

- prototype or test goal.

## Optional User Input

- participant profile;
- session length;
- tasks;
- constraints.

## Files To Load

- `skills/playtest_plan/SKILL.md`
- `agent_output_contracts/playtest_plan.md`
- `context_packs/CP05_prototype_and_playtest.md`

## Files Not To Load

- `_private_sources/`
- benchmark files
- generated exports
- private source bodies

## Related Context Pack

`context_packs/CP05_prototype_and_playtest.md`

## Related Prompt File

`hands_on_prompts/P11_make_playtest_plan.md` is optional reference only.

## Related KB Domains

- Playtesting and Iteration
- Prototyping

## Related Cards/Lenses/Workflows

Use playtest observation and decision workflow references when needed.

## Output Artifact

Playtest plan.

## Output Contract

`agent_output_contracts/playtest_plan.md`

## Source Safety Rules

Do not invent playtest data, participant quotes, observations, or decisions.

## Confidence Rules

Default confidence: weak until real playtest data exists.

## Minimum Questions To Ask

- What is the test goal?
- What prototype will be tested?
- What behavior should be observed?

## Execution Protocol

1. State test goal.
2. Define participant profile and tasks.
3. Separate observed facts, quotes, interpretation, hypotheses, and decisions.
4. Define data capture format.
5. Define post-test decision rule.

## Common Failure Modes

- fake observations;
- leading questions;
- confusing interpretation with fact;
- no decision rule.

## Acceptance Criteria

- Plan separates facts, quotes, interpretation, hypotheses, decisions, and next actions.
- No fake data is created.
