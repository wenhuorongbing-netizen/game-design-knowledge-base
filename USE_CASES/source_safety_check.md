# Use Case: Source Safety Check

Use this when you want to know whether a claim, quote, card, or recommendation is safe to treat as evidence.

## What You Provide

- The claim or statement.
- Any evidence you actually have.
- Optional: source ID, work ID, manual note ID, or EvidenceRef ID.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase source-governance rules. Check whether the following claim is safe, unsupported, metadata-only, user interpretation, weak, or verified.
>
> Claim: [claim]
>
> Evidence I have: [manual note, quote, sidecar, open source reference, EvidenceRef, or none]
>
> Produce: classification, why, what is unsafe to claim, what evidence is missing, what source_basis and confidence should be used, whether promotion is blocked, and the next safe action. Do not invent citations, quotes, notes, or EvidenceRefs.

## Expected Output

| Section | What you should get |
|---|---|
| classification | unsupported, metadata-only, user interpretation, weak, or verified. |
| safe wording | How to phrase the claim safely. |
| blocked wording | What not to say. |
| evidence gap | What is missing. |
| promotion status | Whether stronger confidence is allowed. |
| next action | Manual note, sidecar, quote review, or keep as draft. |

## Safety Boundary

The AI must not upgrade claims to verified without legal evidence, EvidenceRefs, and review.
