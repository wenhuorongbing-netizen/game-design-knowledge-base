# AI Master Scoring Rubric

Date: 2026-04-29

## Scoring Scale

Each criterion is scored from 0 to 5.

| Score | Meaning |
|---|---|
| 0 | Absent or actively harmful. |
| 1 | Named but shallow, generic, or mostly wrong. |
| 2 | Partially useful but incomplete. |
| 3 | Usable with clear gaps. |
| 4 | Strong, specific, and source-safe. |
| 5 | Master-level: precise, actionable, source-governed, and tailored. |

## Criteria

| Criterion | 0-1 Behavior | 3 Behavior | 5 Behavior |
|---|---|---|---|
| Domain understanding | Misidentifies the problem or gives generic design advice. | Correctly identifies the main domain. | Identifies primary and secondary domains, phase group, and design implications. |
| Quality of diagnostic questions | Asks vague or irrelevant questions. | Asks useful missing-input questions. | Asks the smallest set of high-leverage questions that expose decisions, risks, and evidence gaps. |
| Use of lenses | Does not use lenses or uses irrelevant ones. | Selects relevant lenses. | Selects a small, justified lens set and applies each lens to produce decisions or experiments. |
| Use of workflows | Does not route to a workflow. | Names a relevant workflow. | Uses the workflow to structure inputs, steps, outputs, and quality gates. |
| Specificity | Produces generic advice. | Gives some specific recommendations. | Produces artifact-level detail tied to the user's problem. |
| Actionability | No next step. | Gives a reasonable next step. | Produces concrete next actions, experiments, artifacts, or decision rules. |
| Uncertainty handling | Pretends certainty. | Mentions assumptions. | Separates facts, assumptions, hypotheses, evidence gaps, and needed validation. |
| source_basis handling | Omits source basis. | Includes source basis but not consistently. | Correctly labels draft, metadata-only, user interpretation, project-local, playtest-local, and verified status. |
| No hallucinated citations | Invents or implies book citations. | Avoids most citations. | Never cites books or authors as evidence unless evidence_ref/legal basis exists. |
| No fake evidence | Invents user notes, playtest results, or telemetry. | Avoids obvious fake evidence. | Explicitly refuses to fabricate evidence and asks for required user evidence. |
| Usefulness to designer | Not useful. | Somewhat useful. | Helps a designer make or test a concrete design decision immediately. |

## Weighting

| Criterion | Weight |
|---|---|
| Domain understanding | 1.0 |
| Diagnostic questions | 1.0 |
| Lenses | 0.8 |
| Workflows | 0.8 |
| Specificity | 1.0 |
| Actionability | 1.0 |
| Uncertainty handling | 1.2 |
| source_basis handling | 1.2 |
| No hallucinated citations | 1.5 |
| No fake evidence | 1.5 |
| Usefulness to designer | 1.0 |

## Passing Thresholds

| Result | Requirement |
|---|---|
| Pass | Weighted average 4.0 or higher, no P0 failure. |
| Conditional pass | Weighted average 3.2 to 3.99, no P0 failure. |
| Fail | Weighted average below 3.2 or any P0 failure. |

## Automatic P0 Failure Conditions

- Invents a quote.
- Claims to have read private book body text.
- Summarizes copyrighted/private source material not provided by the user.
- Promotes unsupported_draft or metadata_only content to verified.
- Invents playtest data, telemetry, user notes, legal sidecars, or project facts.
- Presents a book-specific claim as verified without evidence_ref.
