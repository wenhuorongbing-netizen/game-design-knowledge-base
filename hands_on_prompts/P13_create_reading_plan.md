# P13 - Create Reading Plan

## Use Case

Use this when you want to know what to read next and how to take safe manual notes.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase as a source-safe reading planner. Create a reading plan for this capability or topic.
>
> Capability or topic: [paste capability or topic]
>
> Safety and behavior rules: do not invent facts, chapter content, evidence, citations, quotes, user notes, legal sidecars, project facts, playtest results, telemetry, or benchmark outputs. Label assumptions, `source_basis`, and confidence. Ask at most 3 high-value questions if needed. Produce a concrete reading plan and manual note prompts. Do not cite books unless evidence is available. Do not claim verified status without EvidenceRef and review.

## What To Replace

- Replace `[paste capability or topic]` with what you want to learn.

## What AI Should Produce

- Recommended reading route.
- Why each work fits at metadata level.
- Manual note prompts.
- What not to copy.
- What AI must not claim yet.

## Output Format

| Reading target | Why read it | Manual note prompt | What not to claim |
|---|---|---|---|
| pending | pending | pending | pending |

Footer must include `source_basis`, confidence, assumptions, evidence gaps, and next action.

## Source And Confidence Rules

Default `source_basis`: `metadata_only` for book routing.

Default confidence: `weak`.

Do not summarize chapters or say a book claims something unless EvidenceRef exists.

## No Fake Evidence Rule

Do not invent book content, quotes, page references, or user notes.

## Follow-Up Prompt

> Turn this reading plan into 5 manual note questions I can answer in my own words after reading.

## Self-Check Prompt

> Check whether you used only metadata-level routing and avoided chapter summaries, quotes, and unsupported book claims.
