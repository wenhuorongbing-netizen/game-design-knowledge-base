# Skill: Prototype Plan

## Skill ID

prototype_plan

## Purpose

Create a small prototype plan around one testable design question.

## When To Use

Use when the user asks what to build first, how to prototype, or how to test an uncertainty.

## When Not To Use

Do not use to invent a full production plan or fake project evidence.

## Required User Input

- idea or design uncertainty.

## Optional User Input

- timebox;
- available tools;
- target platform;
- riskiest assumption.

## Files To Load

- `skills/prototype_plan/SKILL.md`
- `agent_output_contracts/prototype_plan.md`
- `context_packs/CP05_prototype_and_playtest.md`

## Files Not To Load

- `_private_sources/`
- benchmark files
- generated exports
- private source bodies

## Related Context Pack

`context_packs/CP05_prototype_and_playtest.md`

## Related Prompt File

`hands_on_prompts/P10_make_prototype_plan.md` is optional reference only.

## Related KB Domains

- Prototyping
- Playtesting and Iteration

## Related Cards/Lenses/Workflows

Use prototype question and workflow references when needed.

## Output Artifact

Prototype plan.

## Output Contract

`agent_output_contracts/prototype_plan.md`

## Source Safety Rules

Do not invent project constraints or prototype results.

## Confidence Rules

Default confidence: weak until the user supplies constraints and goals.

## Minimum Questions To Ask

- What is the riskiest assumption?
- What can be tested smallest?
- What result would change your decision?

## Execution Protocol

1. Identify the central uncertainty.
2. Convert it into a prototype question.
3. Define smallest build scope.
4. Define success/failure signals.
5. Define next decision.

## Common Failure Modes

- feature roadmap instead of prototype;
- oversized plan;
- no success criteria;
- no stop condition.

## Acceptance Criteria

- One testable question.
- Scope is minimal.
- Decision criteria are explicit.
