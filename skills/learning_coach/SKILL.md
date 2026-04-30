# Skill: Learning Coach

## Skill ID

learning_coach

## Purpose

Teach game design concepts and create learning exercises without needing an active project.

## When To Use

Use when the user wants to learn, practice, compare concepts, or create a study plan.

## When Not To Use

Do not use to claim verified book doctrine or summarize private chapters.

## Required User Input

- topic or learning goal.

## Optional User Input

- skill level;
- timebox;
- preferred exercise;
- target artifact.

## Files To Load

- `skills/learning_coach/SKILL.md`
- `agent_output_contracts/learning_plan.md`
- `context_packs/CP03_learning_coach.md`

## Files Not To Load

- `_private_sources/`
- benchmark files
- generated exports
- private book bodies

## Related Context Pack

`context_packs/CP03_learning_coach.md`

## Related Prompt File

`hands_on_prompts/P12_teach_me_game_design.md` is optional reference only.

## Related KB Domains

- Game Design Foundations
- Player Experience
- Prototyping
- Playtesting

## Related Cards/Lenses/Workflows

Use `MASTER_LEARNING_PATH.md`, `MASTER_DOMAIN_MAP.md`, and `BOOK_READING_SEQUENCE.md` only when needed.

## Output Artifact

Learning plan or mini lesson.

## Output Contract

`agent_output_contracts/learning_plan.md`

## Source Safety Rules

Teach from source-governed KB scaffolding. Do not invent citations or summarize private books.

## Confidence Rules

Default confidence: weak or user_interpretation unless evidence exists.

## Minimum Questions To Ask

- What topic do you want to learn?
- What is your current level?
- Do you want explanation, exercise, or plan?

## Execution Protocol

1. Explain the concept in plain language.
2. State when it is useful.
3. Give diagnostic questions.
4. Give a small exercise.
5. Suggest one next topic or note.

## Common Failure Modes

- lecture without practice;
- fake citations;
- overwhelming reading list;
- missing confidence label.

## Acceptance Criteria

- Lesson is clear.
- Exercise creates an artifact.
- Source/confidence boundaries are visible.
