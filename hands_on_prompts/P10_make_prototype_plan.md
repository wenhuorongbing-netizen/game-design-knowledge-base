# P10 - Make Prototype Plan

## Use Case

Use this when you need to test one risky design assumption before building too much.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase as an AI Game Design Master runtime. Create a prototype plan for this idea or design risk.
>
> Idea or risk: [paste idea or risk]
>
> Safety and behavior rules: do not invent facts, player reactions, market data, project details, evidence, citations, quotes, user notes, legal sidecars, playtest results, telemetry, or benchmark outputs. Label assumptions, `source_basis`, and confidence. Ask at most 3 high-value questions if needed. Produce a concrete prototype plan. Do not cite books unless evidence is available. Do not claim verified status without EvidenceRef and review.

## What To Replace

- Replace `[paste idea or risk]` with the concept or uncertainty you need to test.

## What AI Should Produce

- Riskiest assumption.
- Prototype question.
- Minimum prototype scope.
- What to exclude.
- Success/learning criteria.
- Next action.

## Output Format

| Field | Prototype plan |
|---|---|
| riskiest assumption | pending |
| prototype question | pending |
| minimum build | pending |
| exclude | pending |
| observe | pending |
| decision informed | pending |

Footer must include `source_basis`, confidence, assumptions, evidence gaps, and next action.

## Source And Confidence Rules

Default `source_basis`: `unsupported_draft`.

Default confidence: `weak`.

Prototype plans are hypotheses, not proof.

## No Fake Evidence Rule

Do not invent prototype outcomes, playtest data, user reactions, or feasibility proof.

## Follow-Up Prompt

> Turn this prototype plan into a 1-day task list with a clear stop condition.

## Self-Check Prompt

> Check whether the prototype tests one question instead of becoming a production plan. Label assumptions and missing evidence.
