# Do Not Repair Yet

Date: 2026-04-30

## Purpose

Prompt 6 is an analysis and backlog step only.

The purpose is to preserve the integrity of Smoke Run 001 by separating observed failures from later repairs.

## Repairs Not Performed In Prompt 6

- `agent_output_contracts/learning_plan.md` was not repaired.
- `agent_output_contracts/claim_safety_report.md` was not repaired.
- `skills/learning_coach/SKILL.md` was not repaired.
- `skills/claim_safety_check/SKILL.md` was not repaired.
- `context_packs/CP*.md` files were not repaired.
- `AGENT_ROUTER.md` was not repaired.
- No smoke-output checker was added.
- No raw smoke output was rewritten.
- No smoke score was changed.

## Why This Boundary Matters

Repairing during the failure-analysis step would blur three separate artifacts:

- what Smoke Run 001 actually did;
- what the review found;
- what future runtime files should change.

Keeping these separate makes regression testing possible.

## Next Authorized Repair Scope

The next prompt may repair the two P1 contract gaps:

1. `agent_output_contracts/learning_plan.md` should require explicit `next topic`.
2. `agent_output_contracts/claim_safety_report.md` should support unsafe source-processing refusal outputs.

Any broader repair should be justified against `FAILURE_ANALYSIS.md` and `REPAIR_BACKLOG.md`.

