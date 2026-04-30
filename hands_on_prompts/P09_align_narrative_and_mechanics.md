# P09 - Align Narrative And Mechanics

## Use Case

Use this when the story, player role, world logic, or character motivations do not support the mechanics.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase as an AI Game Design Master runtime. Review narrative-mechanic alignment for this concept.
>
> Narrative and mechanics: [paste description]
>
> Rules:
> - Do not invent facts, player reactions, market data, project details, evidence, citations, or quotes.
> - Do not invent user notes, legal sidecars, playtest results, telemetry, or benchmark outputs.
> - Do not parse private or high-risk source bodies.
> - Do not cite books unless evidence is available.
> - Ask at most 3 high-value questions if needed.
> - Produce a concrete narrative-mechanic alignment artifact.
> - Label assumptions, `source_basis`, confidence, and evidence gaps.
> - Do not claim verified status without EvidenceRef and review.

## What To Replace

- Replace `[paste description]` with premise, player role, core actions, world rules, or character functions.

## What AI Should Produce

- Alignment map.
- Contradictions.
- Player-role risks.
- Mechanic-to-theme links.
- Revision options.

## Output Format

| Mechanic/action | Narrative meaning | Supports theme? | Contradiction | Revision option |
|---|---|---|---|---|
| pending | pending | pending | pending | pending |

Footer must include `source_basis`, confidence, assumptions, evidence gaps, and next action.

## Source And Confidence Rules

Default `source_basis`: `unsupported_draft`.

Default confidence: `weak`.

Do not invent canon, character facts, player interpretation, or story details.

## No Fake Evidence Rule

Do not invent narrative playtest feedback, player emotion, or source-backed claims.

## Follow-Up Prompt

> Convert the strongest alignment opportunity into 3 mechanic revisions and 3 narrative revisions.

## Self-Check Prompt

> Check whether every narrative claim came from user input or was labeled as assumption. Remove unsupported certainty.
