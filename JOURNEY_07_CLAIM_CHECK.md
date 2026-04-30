# Journey 07 - Claim Check

Date: 2026-04-30

## Who This Is For

Use this if you want to know whether a statement is safe, supported, draft-only, or blocked.

## When To Use It

Use this before you cite a book, quote a source, call a claim verified, or ask AI to promote a claim.

## What To Open First

Open:

1. [USE_CASES/source_safety_check.md](USE_CASES/source_safety_check.md)
2. [context_packs/CP06_source_safety_and_claim_check.md](context_packs/CP06_source_safety_and_claim_check.md)
3. [hands_on_prompts/P14_check_unsupported_claim.md](hands_on_prompts/P14_check_unsupported_claim.md)

Optional example:

- [worked_examples/EX10_unsupported_claim_check.md](worked_examples/EX10_unsupported_claim_check.md)

## What Not To Open

Do not open:

- private source bodies;
- PDF or EPUB files;
- unrelated prompt packs;
- generated exports;
- benchmark files.

## Required Input

Give the AI:

- the exact claim;
- where it came from, if known;
- whether you have a legal source, manual note, or user-provided quote.

## Optional Input

You may add:

- target KB card or lens;
- whether the claim is for a draft design artifact or a source-backed knowledge claim;
- any known evidence_ref if one already exists.

## Context Pack To Load

Load [context_packs/CP06_source_safety_and_claim_check.md](context_packs/CP06_source_safety_and_claim_check.md).

## Copy-Paste Prompt To Use

Use [hands_on_prompts/P14_check_unsupported_claim.md](hands_on_prompts/P14_check_unsupported_claim.md).

## Expected Artifact

The AI should produce:

- claim status;
- safe wording;
- blocked wording;
- evidence gap;
- whether promotion is allowed;
- next safe action.

## Good Output Checklist

A good output:

- refuses unsafe source-body requests;
- does not verify metadata-only claims;
- does not invent EvidenceRefs;
- does not invent quotes or notes;
- labels source_basis and confidence;
- gives a safe next step.

## Accessibility Notes

Use one claim at a time. Do not paste a long essay.

Ask the AI to answer with "Allowed, Blocked, Missing Evidence, Next Step" if you need a shorter result.

## Source/Confidence Rule

Metadata alone cannot verify a claim.

Verified status requires legal evidence, EvidenceRef, and review.

## Common Confusion Points

- "Sounds true" is not evidence.
- A book title in the registry is not proof of a specific claim.
- A user interpretation is not the same as verified source-backed knowledge.
- The AI must not create missing legal permission.

## Next Action

If the claim is blocked, rewrite it as draft guidance or collect real user/legal evidence before using it as source-backed knowledge.
