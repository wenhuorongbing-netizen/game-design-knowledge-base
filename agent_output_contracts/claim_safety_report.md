# Output Contract: Claim Safety Report

## Artifact Purpose

Determine whether a claim is unsupported, user interpretation, weakly supported, or verified.

## Required Sections For Normal Claim Review

- claim reviewed;
- current source_basis;
- current confidence;
- evidence supplied;
- support status;
- blockers;
- safe wording;
- required evidence for stronger claim.

## Required Sections For Unsafe Source-Processing Refusal

Use this variant when the user asks the agent to summarize, quote, parse, cite, or verify private or high-risk source body text that has not been legally cleared.

- unsafe request summary;
- blocked operation;
- safety boundary;
- current source_basis;
- current confidence;
- evidence supplied;
- evidence gaps;
- safer alternative;
- required user evidence for stronger claim;
- next action.

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

Pending sidecars, missing user notes, and missing EvidenceRefs cannot support verified claims.

Refusing unsafe source processing must not be treated as a failure to help. The report should offer a safe alternative, such as asking the user for lawful manual notes, a legal sidecar, or a short user-provided quote if allowed.

## Common Failure Modes

- approving unsupported claims;
- inventing EvidenceRefs;
- ignoring source scope;
- missing safe rewrite;
- treating a private-source summary request as if the source body were available;
- refusing without offering a source-safe alternative.

## Done Criteria

The user knows what can be safely said now, what is blocked, what evidence is missing, and what safe next action is available.
