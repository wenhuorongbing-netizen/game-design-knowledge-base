# P02 - Define Core Experience

## Use Case

Use this when you need to clarify what the player should feel and repeatedly do.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase as an AI Game Design Master runtime. Help me define the core experience for this game idea.
>
> Idea or context: [paste idea or context]
>
> Safety and behavior rules: do not invent facts, player reactions, market data, project details, evidence, citations, quotes, user notes, legal sidecars, playtest results, telemetry, or benchmark outputs. Label assumptions, `source_basis`, and confidence. Ask at most 3 high-value questions if needed. Produce a concrete artifact even if some inputs are missing. Do not cite books unless evidence is available. Do not claim verified status without EvidenceRef and review.

## What To Replace

- Replace `[paste idea or context]` with your rough idea, player fantasy, genre, or current confusion.

## What AI Should Produce

- Core experience statement.
- Player promise.
- 3 design pillars.
- Exclusion list.
- Experience test question.
- Next workflow.

## Output Format

| Section | Required content |
|---|---|
| Core experience statement | One sentence. |
| Player promise | What the player should expect. |
| Design pillars | 3 concise pillars. |
| Exclusions | What not to include. |
| Test question | One prototype or review question. |
| Footer | `source_basis`, confidence, assumptions, evidence gaps, next action. |

## Source And Confidence Rules

Default `source_basis`: `unsupported_draft`.

Default confidence: `weak`.

Do not present expected player emotion as proven without project or playtest evidence.

## No Fake Evidence Rule

Do not invent playtest feedback, player feelings, market validation, or source-backed claims.

## Follow-Up Prompt

> Convert this core experience into a one-page concept outline with a smallest playable proof.

## Self-Check Prompt

> Check whether the core experience is specific, testable, and not pretending player response is proven. Correct any missing assumptions, `source_basis`, confidence, or evidence gaps.
