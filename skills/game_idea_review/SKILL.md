# Skill: Game Idea Review

## Skill ID

game_idea_review

## Purpose

Turn a vague or early game idea into a concrete one-page concept memo.

## When To Use

Use when the user asks for idea review, concept shaping, early critique, or "is this game idea good?"

## When Not To Use

Do not use for source claim verification, reading notes, or real playtest analysis.

## Required User Input

- 1 to 5 sentences describing the idea.

## Optional User Input

- target player;
- genre;
- platform;
- constraints;
- desired emotion.

## Files To Load

- `AGENT_START.md`
- `AGENT_ROUTER.md`
- `skills/game_idea_review/SKILL.md`
- `agent_output_contracts/one_page_concept_memo.md`
- `context_packs/CP02_game_idea_review.md` if more context is needed

## Files Not To Load

- `_private_sources/`
- benchmark files
- generated exports
- deprecated or legacy folders
- private book bodies

## Related Context Pack

`context_packs/CP02_game_idea_review.md`

## Related Prompt File

`hands_on_prompts/P01_review_my_game_idea.md` is optional reference only. Normal agent runtime should use this skill directly.

## Related KB Domains

- Game Design Foundations
- Player Experience
- Prototyping

## Related Cards/Lenses/Workflows

Use relevant lens and workflow indexes only if needed: `PROBLEM_TO_LENS_MAP.md`, `PROBLEM_TO_WORKFLOW_MAP.md`, `MASTER_PROBLEM_SOLVER_INDEX.md`.

## Output Artifact

One-page concept memo.

## Output Contract

`agent_output_contracts/one_page_concept_memo.md`

## Source Safety Rules

Treat the review as `unsupported_draft` unless the user supplies evidence. Do not invent project facts, market proof, citations, or playtest results.

## Confidence Rules

Default confidence: weak. Raise only when the user supplies concrete constraints or tested evidence.

## Minimum Questions To Ask

Ask at most three:

- Who is the target player?
- What should the player feel?
- What is the repeated core action?

## Execution Protocol

1. Restate the idea in one sentence.
2. Identify player fantasy and likely core experience.
3. Propose design pillars.
4. Identify risks and missing inputs.
5. Produce the concept memo.
6. End with one next prototype question.

## Common Failure Modes

- generic praise;
- invented project details;
- too many pillars;
- missing assumptions;
- no concrete next action.

## Acceptance Criteria

- Output is a concrete memo.
- Assumptions are labeled.
- `source_basis`, confidence, evidence gaps, and next action are present.
