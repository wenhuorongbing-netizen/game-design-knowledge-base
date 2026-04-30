# Skill: Claim Safety Check

## Skill ID

claim_safety_check

## Purpose

Check whether a claim is supported, overclaimed, unsafe, or blocked by missing evidence.

## When To Use

Use when the user asks whether a claim can be trusted, cited, verified, promoted, or used as source-backed knowledge.

## When Not To Use

Do not use as a broad design review unless the main issue is evidence safety.

## Required User Input

- claim text.

## Optional User Input

- source_basis;
- confidence;
- evidence_refs;
- user notes;
- legal sidecar status.

## Files To Load

- `skills/claim_safety_check/SKILL.md`
- `agent_output_contracts/claim_safety_report.md`
- `context_packs/CP06_source_safety_and_claim_check.md`
- `AGENT_SOURCE_SAFETY_RULES.md`

## Files Not To Load

- `_private_sources/`
- private source bodies
- benchmark files
- generated exports unless validating export data

## Related Context Pack

`context_packs/CP06_source_safety_and_claim_check.md`

## Related Prompt File

`hands_on_prompts/P14_check_unsupported_claim.md` is optional reference only.

## Related KB Domains

- Source Governance
- Evidence Governance
- Claim Promotion

## Related Cards/Lenses/Workflows

Use evidence and source governance docs only as needed.

## Output Artifact

Claim safety report.

## Output Contract

`agent_output_contracts/claim_safety_report.md`

## Source Safety Rules

Metadata-only and unsupported draft cannot support verified claims. Pending sidecars cannot support verified claims. Do not invent EvidenceRefs.

## Confidence Rules

Never raise confidence beyond supplied evidence scope.

## Minimum Questions To Ask

- What is the exact claim?
- What evidence do you have?
- What confidence level do you want to assert?

## Execution Protocol

1. Determine whether the user supplied a normal claim or an unsafe source-processing request.
2. For normal claim review, restate the claim.
3. For unsafe source-processing requests, use the refusal variant in `agent_output_contracts/claim_safety_report.md`.
4. Identify current source_basis and confidence.
5. Check support and blockers.
6. Provide safe wording or a safer alternative.
7. State what evidence is required for stronger confidence.

## Common Failure Modes

- rubber-stamping unsupported claims;
- inventing evidence;
- treating metadata as source proof;
- treating private source body text as available;
- refusing without a safe alternative;
- ignoring evidence scope.

## Acceptance Criteria

- Claim status or unsafe-request boundary is clear.
- Safe wording or a safer alternative is provided.
- Evidence gaps and blockers are explicit.
