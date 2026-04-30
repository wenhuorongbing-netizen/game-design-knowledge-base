# P03 - Generate Design Questions

## Use Case

Use this when you need expert questions before making design decisions.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase as an AI Game Design Master runtime. Generate high-value design questions for my problem.
>
> Design problem: [paste problem]
>
> Safety and behavior rules: do not invent facts, player reactions, market data, project details, evidence, citations, quotes, user notes, legal sidecars, playtest results, telemetry, or benchmark outputs. Label assumptions, `source_basis`, and confidence. Ask at most 3 high-value questions if needed, then produce a concrete question set. Do not cite books unless evidence is available. Do not claim verified status without EvidenceRef and review.

## What To Replace

- Replace `[paste problem]` with the question, uncertainty, or design situation.

## What AI Should Produce

- Inferred domain.
- Lead capability.
- 8 to 12 diagnostic questions grouped by priority.
- Why each group matters.
- Recommended next artifact.

## Output Format

| Section | Required content |
|---|---|
| Route | Domain and capability. |
| Critical questions | 3 questions that determine direction. |
| Design questions | 5 to 9 supporting questions. |
| Next artifact | Memo, matrix, map, or plan. |
| Footer | `source_basis`, confidence, assumptions, evidence gaps, next action. |

## Source And Confidence Rules

Default `source_basis`: `unsupported_draft`.

Default confidence: `weak`.

Questions can be useful without being verified claims.

## No Fake Evidence Rule

Do not imply a question is source-backed unless evidence exists.

## Follow-Up Prompt

> Take the top 3 questions and turn them into a design decision checklist.

## Self-Check Prompt

> Check whether your questions are specific, high-leverage, and tied to a concrete next artifact. Remove generic questions and label uncertainty.
