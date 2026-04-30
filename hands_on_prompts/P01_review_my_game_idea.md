# P01 - Review My Game Idea

## Use Case

Use this when you have a rough idea and want a practical first concept review.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase as an AI Game Design Master runtime. Review my rough game idea and produce a one-page concept memo.
>
> My idea: [paste your idea]
>
> Rules:
> - Do not invent facts, player reactions, market data, project details, evidence, citations, or quotes.
> - Do not invent user notes, legal sidecars, playtest results, telemetry, or benchmark outputs.
> - Do not parse private or high-risk source bodies.
> - Do not cite books unless evidence is available.
> - Ask at most 3 high-value questions if needed.
> - Produce a concrete artifact even if some inputs are missing.
> - Label assumptions, `source_basis`, confidence, and evidence gaps.
> - Do not claim verified status without EvidenceRef and review.

## What To Replace

- Replace `[paste your idea]` with 1 to 5 sentences.
- Optional: add target platform, genre, intended feeling, or constraint.

## What AI Should Produce

- Inferred player fantasy.
- Core experience hypothesis.
- Likely repeated action.
- 3 design pillars.
- Top risks.
- 3 diagnostic questions.
- Recommended workflow.
- One next action.

## Output Format

| Section | Required content |
|---|---|
| Concept memo | One paragraph summary. |
| Core experience | Player feeling and repeated action. |
| Lenses | 2 to 5 relevant lenses. |
| Risks | Specific design risks. |
| Next artifact | The next memo, map, matrix, or prototype question. |
| Footer | `source_basis`, confidence, assumptions, evidence gaps, next action. |

## Source And Confidence Rules

Default `source_basis`: `unsupported_draft`.

Default confidence: `weak`.

Use `metadata_only` only for book/work routing. Use `verified` only when EvidenceRef and review exist.

## No Fake Evidence Rule

Do not invent citations, quotes, user notes, legal sidecars, project facts, playtest data, telemetry, or verified source claims.

## Follow-Up Prompt

> Turn the concept memo into a smallest prototype question.
>
> List the minimum feature set needed to test it.
>
> Keep assumptions, `source_basis`, confidence, and evidence gaps visible.

## Self-Check Prompt

> Check your previous answer.
>
> Did you invent facts or evidence?
>
> Did you label assumptions, `source_basis`, confidence, and evidence gaps?
>
> Did you produce a concrete artifact?
>
> If not, correct the answer.
