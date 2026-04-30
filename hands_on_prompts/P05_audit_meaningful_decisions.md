# P05 - Audit Meaningful Decisions

## Use Case

Use this when player choices may feel fake, obvious, blind, or consequence-free.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase as an AI Game Design Master runtime. Audit whether these player choices are meaningful.
>
> Choice or loop description: [paste choices or loop]
>
> Safety and behavior rules: do not invent facts, player reactions, market data, project details, evidence, citations, quotes, user notes, legal sidecars, playtest results, telemetry, or benchmark outputs. Label assumptions, `source_basis`, and confidence. Ask at most 3 high-value questions if needed. Produce a concrete decision audit matrix. Do not cite books unless evidence is available. Do not claim verified status without EvidenceRef and review.

## What To Replace

- Replace `[paste choices or loop]` with the player options, rules, or repeated decision.

## What AI Should Produce

- Decision audit matrix.
- Fake-choice risks.
- Missing information.
- Consequence map.
- Design changes.

## Output Format

| Decision | Information available | Tradeoff | Consequence | Reversibility | Fake-choice risk | Improvement |
|---|---|---|---|---|---|---|
| pending | pending | pending | pending | pending | pending | pending |

Footer must include `source_basis`, confidence, assumptions, evidence gaps, and next action.

## Source And Confidence Rules

Default `source_basis`: `unsupported_draft`.

Default confidence: `weak`.

Do not claim a choice is meaningful until tested or evidenced.

## No Fake Evidence Rule

Do not invent player choices, playtest observations, telemetry, or player preference.

## Follow-Up Prompt

> Convert the weakest decision into three alternative designs with different tradeoffs.

## Self-Check Prompt

> Check whether every audited choice has information, tradeoff, consequence, and uncertainty labels. If not, revise.
