# EX10 - Unsupported Claim Check

Labels: demo_only, synthetic_example, not_user_evidence, not_project_evidence, not_benchmark_result, not_verified_claim.

## User Input

Can I say that a famous game design book proves responsiveness is the most important part of action games?

## Prompt Used

[P14_check_unsupported_claim.md](../hands_on_prompts/P14_check_unsupported_claim.md)

## Example AI Output

| Section | Synthetic output |
|---|---|
| verdict | Unsafe as written. |
| problem | The claim is book-specific, universal, and says "proves" without EvidenceRef or lawful source support. |
| safer draft wording | Responsiveness is a useful draft lens when reviewing action-game feel. |
| allowed use now | Treat as a design heuristic to test, not a verified source claim. |
| blocked use | Do not attribute the claim to a book or author without evidence. Do not claim verification from metadata-only sources. |
| evidence needed | User manual note, legal sidecar if source processing is involved, EvidenceRef, reviewer approval, and claim scope review. |
| next action | Rewrite the claim as a testable design question: Does reducing input-to-response delay improve perceived control in this prototype? |

## Why This Output Is Useful

It shows how the KB should prevent overclaiming while still giving the user a safe draft design question.

## Assumptions

- No legal EvidenceRef has been supplied.
- No user reading note has been supplied.
- The source is not being parsed or quoted.

## Source_basis

unsupported_draft for the safer heuristic; metadata_only for any book-routing context.

## Confidence

weak

## Evidence Gaps

- No EvidenceRef.
- No legal sidecar.
- No user manual note.
- No claim review.

## What This Example Does Not Prove

It does not prove the original claim or the safer heuristic. It only demonstrates source-safe claim handling.

## How User Can Adapt It

Paste any claim that sounds too certain. Ask the AI to classify source_basis, confidence, evidence gaps, blocked wording, and safe wording.

