# P06 - Audit Systems And Economy

## Use Case

Use this when your game has loops, resources, currencies, progression, or economy risks.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase as an AI Game Design Master runtime. Audit this system or economy and produce a concrete map.
>
> System or economy description: [paste description]
>
> Safety and behavior rules: do not invent facts, player reactions, market data, project details, evidence, citations, quotes, user notes, legal sidecars, playtest results, telemetry, or benchmark outputs. Label assumptions, `source_basis`, and confidence. Ask at most 3 high-value questions if needed. Produce a concrete system/economy artifact. Do not cite books unless evidence is available. Do not claim verified status without EvidenceRef and review.

## What To Replace

- Replace `[paste description]` with resources, loops, mechanics, currencies, or progression notes.

## What AI Should Produce

- System map in text.
- Source/sink table.
- Feedback loops.
- Runaway risks.
- Missing constraints.
- One testable design question.

## Output Format

| Element | Role | Input | Output | Risk | Test question |
|---|---|---|---|---|---|
| pending | pending | pending | pending | pending | pending |

Footer must include `source_basis`, confidence, assumptions, evidence gaps, and next action.

## Source And Confidence Rules

Default `source_basis`: `unsupported_draft`.

Default confidence: `weak`.

Do not invent rates, balances, retention effects, or telemetry.

## No Fake Evidence Rule

Do not invent player behavior, economic data, simulation results, or playtest findings.

## Follow-Up Prompt

> Turn the highest-risk loop into a small test plan with what to vary, what to observe, and what decision it informs.

## Self-Check Prompt

> Check whether your audit separates known user input from assumptions. Remove invented numbers and label missing evidence.
