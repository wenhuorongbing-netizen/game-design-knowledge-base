# Claim Promotion Workflow

## Purpose

Claim promotion is the controlled process for moving a draft, weak, AI-hypothesis, or user-interpretation claim toward stronger confidence.

No claim is promoted automatically. Promotion requires legal evidence, an EvidenceRef, a human reviewer, scope checking, and a recorded review decision.

## Promotion Levels

| Level | Meaning | Can Be Used As Verified Knowledge? |
|---|---|---:|
| `unsupported_draft` | Placeholder or scaffold with no evidence. | no |
| `ai_hypothesis` | AI-generated hypothesis that needs human and evidence review. | no |
| `user_interpretation` | User interpretation based on reading, design work, or reflection. | no |
| `weak` | Plausible but lightly supported. | no |
| `medium` | Supported enough for cautious use, but not final. | no |
| `strong` | Well supported, still below verified. | no |
| `verified` | Reviewed, legal, evidence-backed, and scoped. | yes |

## Verified Claim Gate

A claim can become `verified` only if all of these are true:

- a legal EvidenceRef exists;
- the EvidenceRef points to an allowed `source_basis`;
- the EvidenceRef points to existing entities or claims;
- `metadata_only`, `unsupported_draft`, and `ai_hypothesis` are not used as verified support;
- high-risk source body text was not used without an approved legal sidecar;
- the claim has human reviewer approval;
- the claim wording does not exceed the evidence scope;
- project overlays and playtest logs are not generalized into universal doctrine without additional review.

## Workflow

1. Identify the target claim and current confidence.
2. Confirm the claim is worth promoting and is not merely a convenience label.
3. Add or reference legal evidence records: LegalSidecar, UserManualNote, UserManualQuote, OpenSourceReference, OfficialMetadataReference, and EvidenceRef.
4. Create a ClaimPromotionRequest in `kb/13_evidence/promotion_requests/`.
5. The request must include target claims, EvidenceRef IDs, proposed confidence, reviewer, rationale, and evidence-scope alignment.
6. A human reviewer creates a ClaimPromotionReview in `kb/13_evidence/reviews/`.
7. If the review accepts promotion, update the target claim only to the approved level.
8. Re-run `npm run kb:export`, `npm run kb:validate`, and `npm run kb:audit`.

## Relationship Graph

Promotion uses these relationship types:

- `evidence_for`: evidence supports a claim or entity.
- `evidence_against`: evidence challenges a claim or entity.
- `supported_by`: claim-like object points back to supporting evidence.
- `challenged_by`: claim-like object points back to challenging evidence.
- `promoted_from`: promotion request/review references the claim being promoted.
- `reviewed_by`: promotion request links to the review record.
- `blocked_by_evidence_gap`: promotion is blocked until missing evidence is supplied.
- `applies_in_project`: general KB knowledge is applied locally to a project.
- `observed_in_playtest`: a claim or project object was observed in a playtest log.

## Promotion Limits

- Official metadata can verify bibliographic facts, not detailed body claims.
- User notes can support user interpretation or derived-from-user-note claims.
- User manual quotes must be short, user-provided, and legally reviewable.
- Project overlays are local applications, not universal design doctrine.
- Playtest observations are local empirical findings, not universal design doctrine.

## Review Questions

- Does the evidence actually support this exact claim?
- Is the source legally usable for this operation?
- Is the source high-risk, and if so, does a reviewed sidecar permit this use?
- Is the claim narrower than or equal to the evidence scope?
- Are limitations recorded?
- Would a reader be misled about what the source says?

## Current State

The current KB contains draft claims and no verified claims. This workflow is infrastructure only; it does not promote any claim.
