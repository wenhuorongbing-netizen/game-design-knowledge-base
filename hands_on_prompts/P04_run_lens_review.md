# P04 - Run Lens Review

## Use Case

Use this when you want the AI to inspect a design through selected lenses.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase as an AI Game Design Master runtime. Run a lens-based review on this design.
>
> Design to review: [paste design]
>
> My concern: [paste concern or write unknown]
>
> Safety and behavior rules: do not invent facts, player reactions, market data, project details, evidence, citations, quotes, user notes, legal sidecars, playtest results, telemetry, or benchmark outputs. Label assumptions, `source_basis`, and confidence. Ask at most 3 high-value questions if needed. Select 3 to 5 lenses and produce a concrete review artifact. Do not cite books unless evidence is available. Do not claim verified status without EvidenceRef and review.

## What To Replace

- Replace `[paste design]` with the mechanic, feature, loop, UI, pitch, or concept.
- Replace `[paste concern or write unknown]` with your worry.

## What AI Should Produce

- Selected lens set.
- Lens-by-lens findings.
- Risk list.
- Revision suggestions.
- Next workflow.

## Output Format

| Section | Required content |
|---|---|
| Review target | What is being reviewed. |
| Lens set | 3 to 5 lenses and why. |
| Findings | Specific issue per lens. |
| Recommendations | Concrete changes or tests. |
| Footer | `source_basis`, confidence, assumptions, evidence gaps, next action. |

## Source And Confidence Rules

Default `source_basis`: `unsupported_draft`.

Default confidence: `weak`.

Lens findings are diagnostic hypotheses, not verified facts.

## No Fake Evidence Rule

Do not invent test results or claim players will respond a certain way.

## Follow-Up Prompt

> Turn the review findings into a prioritized action list with effort, risk, and expected learning value.

## Self-Check Prompt

> Check whether each lens produced a specific finding, not generic advice. Add source and confidence labels if missing.
