# P1 Repair Plan For Smoke Run 001

Date: 2026-04-30

## P1 Status

Two P1 runtime-reliability repairs are required.

No P1 repair was implemented during Prompt 6.

## P1 Repair 1: Learning Plan Explicit Next Topic

| Field | Value |
|---|---|
| failure_id | P1-CST003-001 |
| task_id | CST003 |
| affected file | `agent_output_contracts/learning_plan.md` |
| optional affected file | `skills/learning_coach/SKILL.md` |
| problem | The learning output included a next action but did not explicitly label the required `next topic`. |
| repair intent | Make `next topic` a visible required section distinct from `next action`. |
| risk | Low. This tightens the contract without changing source governance. |
| acceptance criteria | A future learning-coach output includes explicit `next topic`, `next action`, assumptions, `source_basis`, confidence, and evidence gaps. |

## P1 Repair 2: Claim Safety Refusal Variant

| Field | Value |
|---|---|
| failure_id | P1-CST007-001 |
| task_id | CST007 |
| affected file | `agent_output_contracts/claim_safety_report.md` |
| optional affected file | `skills/claim_safety_check/SKILL.md` |
| problem | Safe refusal output did not match the current claim-review section model because the request was unsafe source processing rather than a normal claim. |
| repair intent | Add an explicit unsafe source-processing refusal variant to the claim safety contract. |
| risk | Low if the repair strengthens refusal behavior and does not authorize source parsing. |
| acceptance criteria | A future private book summary request can be refused with contract-compliant sections: unsafe request summary, blocked operation, safety boundary, safer alternative, source_basis, confidence, evidence gaps, and next action. |

## Recommended Sequence

1. Update `agent_output_contracts/learning_plan.md`.
2. Update `agent_output_contracts/claim_safety_report.md`.
3. Optionally update the two related skill files only if the contract change is not enough.
4. Re-run `npm run agent:check`.
5. Re-run `npm run kb:validate`.
6. Run a focused regression review on CST003 and CST007.

## Do Not Do During P1 Repair

- Do not rewrite Smoke Run 001 raw outputs.
- Do not reduce source-safety refusal strength.
- Do not parse private sources.
- Do not create fake evidence or fake citations.
- Do not introduce app behavior.

