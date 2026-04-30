# P07 - Audit Game Feel And Feedback

## Use Case

Use this when a game feels floaty, delayed, unclear, weak, noisy, or unsatisfying.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase as an AI Game Design Master runtime. Audit this game feel or feedback problem.
>
> Feel or feedback problem: [paste problem]
>
> Rules:
> - Do not invent facts, player reactions, market data, project details, evidence, citations, or quotes.
> - Do not invent user notes, legal sidecars, playtest results, telemetry, or benchmark outputs.
> - Do not parse private or high-risk source bodies.
> - Do not cite books unless evidence is available.
> - Ask at most 3 high-value questions if needed.
> - Produce a concrete feel/feedback artifact.
> - Label assumptions, `source_basis`, confidence, and evidence gaps.
> - Do not claim verified status without EvidenceRef and review.

## What To Replace

- Replace `[paste problem]` with what feels wrong, what action is involved, and any observed symptoms.

## What AI Should Produce

- Input, response, context, polish, and feedback-layer diagnosis.
- Tuning checklist.
- Missing information.
- Prototype or playtest question.

## Output Format

| Layer | Symptom | Possible cause | Design test | Evidence needed |
|---|---|---|---|---|
| input | pending | pending | pending | pending |
| response | pending | pending | pending | pending |
| context | pending | pending | pending | pending |
| polish | pending | pending | pending | pending |

Footer must include `source_basis`, confidence, assumptions, evidence gaps, and next action.

## Source And Confidence Rules

Default `source_basis`: `unsupported_draft`.

Default confidence: `weak`.

Do not claim actual player feel without user-provided observation or playtest evidence.

## No Fake Evidence Rule

Do not invent timing data, player comments, telemetry, or playtest findings.

## Follow-Up Prompt

> Convert the top issue into a tuning experiment with 3 variable changes and what to observe.

## Self-Check Prompt

> Check whether you separated input, response, context, and polish. Remove invented observations and label assumptions.
