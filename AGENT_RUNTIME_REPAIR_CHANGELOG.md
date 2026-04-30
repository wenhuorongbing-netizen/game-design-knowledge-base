# Agent Runtime Repair Changelog

Date: 2026-04-30

## Smoke Run 001 P1 Repairs

### P1-CST003-001

- Changed `agent_output_contracts/learning_plan.md`.
- Changed `skills/learning_coach/SKILL.md`.
- Problem: learning outputs could merge `next topic` into `next action`.
- Repair: required visible `Next Topic` and `Next Action` labels.
- Expected improvement: learning coach outputs should satisfy contract review deterministically.

### P1-CST007-001

- Changed `agent_output_contracts/claim_safety_report.md`.
- Changed `skills/claim_safety_check/SKILL.md`.
- Problem: unsafe private-source summary refusal did not fit the normal claim-review contract.
- Repair: added unsafe source-processing refusal variant and skill protocol routing.
- Expected improvement: source-safety refusals can remain helpful and contract-compliant.

### Shared Contract Repair

- Changed `AGENT_OUTPUT_CONTRACTS.md`.
- Problem: universal failure conditions did not explicitly include contract-specific section omissions.
- Repair: added missing contract-specific required sections as a failure condition.

## Non-Repairs

- No router repair was applied.
- No manifest repair was applied.
- No context loading protocol repair was applied.
- No source safety rule weakening was applied.
- No raw Smoke Run 001 output was rewritten.

