# Skill: Lens Review

## Skill ID

lens_review

## Purpose

Review a game idea, mechanic, system, UI, or pitch through selected design lenses.

## When To Use

Use when the user asks for a structured critique or explicitly asks to use lenses.

## When Not To Use

Do not use as a substitute for claim verification or empirical playtest analysis.

## Required User Input

- design object to review.

## Optional User Input

- specific concern;
- preferred lenses;
- target player;
- constraints.

## Files To Load

- `skills/lens_review/SKILL.md`
- `agent_output_contracts/lens_review_report.md`
- `context_packs/CP04_design_audit.md`
- `PROBLEM_TO_LENS_MAP.md` if lens selection is unclear

## Files Not To Load

- `_private_sources/`
- benchmark files
- generated exports
- private book bodies

## Related Context Pack

`context_packs/CP04_design_audit.md`

## Related Prompt File

`hands_on_prompts/P04_run_lens_review.md` is optional reference only.

## Related KB Domains

- Game Design Foundations
- Player Experience
- Problem Solving

## Related Cards/Lenses/Workflows

Use `kb/06_lenses/DESIGN_LENS_BANK.md` only when lens details are needed.

## Output Artifact

Lens review report.

## Output Contract

`agent_output_contracts/lens_review_report.md`

## Source Safety Rules

Use lenses as draft diagnostic tools. Do not claim lens conclusions are verified evidence.

## Confidence Rules

Default confidence: weak or moderate depending on input specificity.

## Minimum Questions To Ask

- What should be reviewed?
- What problem worries you most?
- What output do you want after review?

## Execution Protocol

1. Select 3 to 5 relevant lenses.
2. State why each lens was selected.
3. Apply each lens to the design.
4. Identify tensions and tradeoffs.
5. Recommend concrete next actions.

## Common Failure Modes

- too many lenses;
- generic comments;
- no tradeoffs;
- no action recommendation.

## Acceptance Criteria

- Lens choice is justified.
- Findings are specific.
- Output includes assumptions, confidence, source_basis, evidence gaps, and next action.
