# AI Master Routing Repair Report

Date: 2026-04-29

## Purpose

This report records the routing layer repair for the AI Master Benchmark and Runtime Hardening Phase.

## Important Benchmark Boundary

Run 001 did not collect target AI responses. Therefore, no response-level routing failure was proven. This repair does not rewrite benchmark scores and does not claim measured model improvement.

The repair addresses operational risk categories that the benchmark is designed to detect:

- `domain_misclassification`
- `weak_lens_selection`
- `weak_workflow_selection`
- `generic_advice`
- `poor_artifact_output`
- `missing_source_basis`
- `missing_confidence`
- `no_uncertainty_handling`
- `overclaiming`

## Files Created

| File | Purpose |
|---|---|
| `AI_MASTER_ROUTING_RULES.md` | Defines route triggers, capabilities, lenses, workflows, artifacts, source rules, and misrouting risks. |
| `AI_MASTER_ROUTING_DECISION_TREE.md` | Provides stepwise routing from request type to domain cluster and workflow. |
| `AI_MASTER_MINIMUM_INPUT_QUESTIONS.md` | Prevents questionnaire overload and defines 1 to 3 high-leverage questions per route. |
| `AI_MASTER_OUTPUT_ARTIFACT_ROUTER.md` | Forces concrete artifact outputs instead of generic advice. |
| `AI_MASTER_ROUTING_REPAIR_REPORT.md` | Records scope, boundary, and validation status for this repair. |

## Files Updated

| File | Update |
|---|---|
| `MASTER_PROBLEM_SOLVER_INDEX.md` | Added runtime routing hardening links and minimum question rule. |
| `PROBLEM_TO_LENS_MAP.md` | Added routing hardening note and lens count guard. |
| `PROBLEM_TO_WORKFLOW_MAP.md` | Added workflow routing guard and artifact-first rule. |
| `PROBLEM_TO_READING_MAP.md` | Added source-safe reading route guard. |
| `PROBLEM_TO_OUTPUT_ARTIFACT_MAP.md` | Added artifact router link and partial artifact rule. |

## Key Improvements

| Improvement | Why It Matters |
|---|---|
| Trigger phrase routing | Reduces domain misclassification for common user wording. |
| Capability routing | Ensures the AI picks a primary expert mode instead of generic advice. |
| Lens and workflow routing | Connects diagnosis to KB assets and output formats. |
| Minimum question rule | Prevents the AI from overwhelming users before producing value. |
| Artifact-first response rule | Makes answers actionable and benchmarkable. |
| Source/confidence footer | Keeps draft scaffolds separate from verified source-backed claims. |
| Misrouting risk column | Makes common runtime failures explicit and testable. |

## Source Governance

No new evidence was created.

No benchmark scores were changed.

No private or high-risk source body text was parsed.

All routing rules are operational scaffolds with default `source_basis: unsupported_draft` or `metadata_only` and `confidence: weak` unless future evidence supports stronger status.

## Remaining Routing Risks

| Risk | Status | Required Future Test |
|---|---|---|
| Actual target AI may still ignore routing rules. | untested | Run benchmark with real target outputs. |
| Some user requests may combine multiple domains. | expected | Use primary capability plus secondary capabilities. |
| Level design remains structurally weaker than other domains. | known gap | Future domain expansion after benchmark hardening. |
| Routing effectiveness is not empirically scored. | blocked | Needs collected target responses. |

## Validation Status

Run after repair:

- `npm run kb:export`
- `npm run kb:validate`

Expected result: PASS with 0 P0 issues and 0 warnings.

