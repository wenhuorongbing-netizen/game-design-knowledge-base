# Output Contract: Claim Safety Report

## Artifact Purpose

Determine whether a claim is unsupported, user interpretation, weakly supported, or verified.

## Required Sections

- claim reviewed;
- current source_basis;
- current confidence;
- evidence supplied;
- support status;
- blockers;
- safe wording;
- required evidence for stronger claim.

## Required Labels

- assumptions;
- `source_basis`;
- confidence;
- evidence gaps;
- next action.

## Quality Criteria

The report must prevent overclaiming while preserving useful draft language.

## Source/Confidence Rule

Metadata-only and unsupported draft cannot support verified claims.

## Common Failure Modes

- approving unsupported claims;
- inventing EvidenceRefs;
- ignoring source scope;
- missing safe rewrite.

## Done Criteria

The user knows what can be safely said now and what evidence is missing.
