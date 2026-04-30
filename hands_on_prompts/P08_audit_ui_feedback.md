# P08 - Audit UI Feedback

## Use Case

Use this when UI, HUD, prompts, menus, feedback, or state changes are confusing.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase as an AI Game Design Master runtime. Audit this UI or feedback problem.
>
> UI or feedback description: [paste description]
>
> Safety and behavior rules: do not invent facts, player reactions, market data, project details, evidence, citations, quotes, user notes, legal sidecars, playtest results, telemetry, or benchmark outputs. Label assumptions, `source_basis`, and confidence. Ask at most 3 high-value questions if needed. Produce a concrete UI feedback audit. Do not cite books unless evidence is available. Do not claim verified status without EvidenceRef and review.

## What To Replace

- Replace `[paste description]` with the UI element, feedback event, player task, or screenshot description.

## What AI Should Produce

- Information priority review.
- Feedback timing review.
- Mode/state clarity review.
- Error/accessibility risks.
- Revision checklist.

## Output Format

| UI element or event | Player needs to know | Current risk | Revision | Evidence needed |
|---|---|---|---|---|
| pending | pending | pending | pending | pending |

Footer must include `source_basis`, confidence, assumptions, evidence gaps, and next action.

## Source And Confidence Rules

Default `source_basis`: `unsupported_draft`.

Default confidence: `weak`.

Do not claim usability proof without user-provided test evidence.

## No Fake Evidence Rule

Do not invent user confusion, accessibility status, screen layout, heatmaps, or playtest results.

## Follow-Up Prompt

> Turn this audit into a revised HUD priority list and a 5-task usability test plan.

## Self-Check Prompt

> Check whether you distinguished visible information, feedback timing, state clarity, and assumptions. Add missing confidence labels.
