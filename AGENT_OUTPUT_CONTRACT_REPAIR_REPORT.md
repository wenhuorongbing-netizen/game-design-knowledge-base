# Agent Output Contract Repair Report

Date: 2026-04-30

## Scope

Output contract repairs address Smoke Run 001 P1 contract failures only.

## Repairs

| Failure ID | Contract file | Old problem | Change made | Expected improvement | Acceptance criteria |
|---|---|---|---|---|---|
| P1-CST003-001 | `agent_output_contracts/learning_plan.md` | Required `next topic` existed, but the contract did not make it visibly distinct from `next action`. | Added explicit output-label requirement and failure mode for merging `next topic` into `next action`. | Contract review can require both labels consistently. | Learning plan output includes both `next topic` and `next action`. |
| P1-CST007-001 | `agent_output_contracts/claim_safety_report.md` | Required sections assumed normal claim review and did not support unsafe source-processing refusal. | Added a required refusal variant for private/high-risk source parsing, quoting, citing, summarizing, and verification requests. | Safe refusals can pass the contract without pretending the source body was available. | Refusal output includes unsafe request summary, blocked operation, safety boundary, safer alternative, and next action. |
| P1-CST003-001; P1-CST007-001 | `AGENT_OUTPUT_CONTRACTS.md` | Universal failure conditions did not say that contract-specific section omission fails. | Added contract-specific required-section omission as a failure condition. | Future review has a clearer basis for section-level failures. | Reviewers can cite a universal failure rule for omitted contract sections. |

## Safety Result

The repaired contracts preserve source-safety boundaries:

- no private source parsing;
- no book chapter summaries;
- no invented citations;
- no invented quotes;
- no invented EvidenceRefs;
- no verified claims without legal evidence and review.

