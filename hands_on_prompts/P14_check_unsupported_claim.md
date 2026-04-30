# P14 - Check Unsupported Claim

## Use Case

Use this when you want to know whether a claim is safe, unsupported, weak, or verified.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase source-governance rules. Check whether this claim is supported.
>
> Claim: [paste claim]
>
> Evidence I have: [paste evidence, EvidenceRef, manual note, source info, or write none]
>
> Rules:
> - Do not invent facts, evidence, citations, or quotes.
> - Do not invent user notes, legal sidecars, project facts, playtest results, telemetry, or benchmark outputs.
> - Do not parse private or high-risk source bodies.
> - Do not cite books unless evidence is available.
> - Ask at most 3 high-value questions if needed.
> - Produce a concrete claim safety report.
> - Label assumptions, `source_basis`, confidence, and evidence gaps.
> - Do not claim verified status without EvidenceRef and review.

## What To Replace

- Replace `[paste claim]` with the statement to check.
- Replace `[paste evidence...]` with what you actually have, or `none`.

## What AI Should Produce

- Classification.
- Safe wording.
- Unsafe wording.
- Evidence gaps.
- Promotion status.
- Next safe action.

## Output Format

| Field | Assessment |
|---|---|
| claim | pending |
| classification | unsupported_draft, metadata_only, user_interpretation, weak, or verified |
| safe wording | pending |
| blocked wording | pending |
| evidence needed | pending |
| next action | pending |

Footer must include `source_basis`, confidence, assumptions, evidence gaps, and next action.

## Source And Confidence Rules

Use `verified` only when legal EvidenceRef and review exist.

Use `metadata_only` only for bibliography/work routing.

Use `unsupported_draft` or `weak` when evidence is absent.

## No Fake Evidence Rule

Do not invent EvidenceRefs, citations, quotes, sidecars, or reviewer approval.

## Follow-Up Prompt

> Rewrite this claim in the safest wording allowed by the current evidence level.

## Self-Check Prompt

> Check whether you accidentally promoted the claim beyond its evidence. If yes, downgrade and explain the evidence gap.
