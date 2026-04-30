# P1 Contract Repair Report For Smoke Run 001

Date: 2026-04-30

## Scope

This repair addresses only the two P1 contract gaps documented in `P1_REPAIR_PLAN.md`.

No Smoke Run 001 raw output was rewritten. No scores were changed. No P2 or P3 repair was performed.

## Repairs Implemented

| Failure ID | Task | File | Repair |
|---|---|---|---|
| P1-CST003-001 | CST003 | `agent_output_contracts/learning_plan.md` | Added explicit distinction between `next topic` and `next action`, and marked merged labels as a common failure mode. |
| P1-CST007-001 | CST007 | `agent_output_contracts/claim_safety_report.md` | Added unsafe source-processing refusal variant with blocked operation, safety boundary, safer alternative, evidence gaps, and next action. |

## Safety Boundary

The repair strengthens source-safety behavior.

It does not authorize:

- parsing private source bodies;
- summarizing copyrighted private chapters;
- inventing quotes;
- inventing citations;
- inventing EvidenceRefs;
- treating metadata-only sources as verified evidence.

## Remaining Non-P1 Repairs

| Failure ID | Severity | Status |
|---|---|---|
| P2-CTX-001 | P2_reduces_quality | still open |
| P2-AUTO-001 | P2_reduces_quality | still open |
| P3-CST008-001 | P3_polish | still open |

## Recommended Regression

Run a focused contract check against CST003 and CST007 before broader Smoke Run 002 preparation.

