# Source Safety Boundary

Date: 2026-05-01

## Boundary Status

Active.

## Scope

This boundary applies to the first real game idea workflow.

The workflow may use user-supplied design input, but it must not use private source bodies, high-risk book contents, fabricated notes, fabricated quotes, fabricated playtest data, or fabricated evidence.

## Default Labels

| Field | Default |
|---|---|
| source_basis | unsupported_draft |
| confidence | weak |
| evidence gaps | user idea only; no playtest evidence; no source-backed evidence |
| verified status | not verified |

## Allowed Operations

- Request a real user idea packet.
- Route to `game_idea_review` after valid input exists.
- Produce draft design artifacts from user-supplied information.
- Label assumptions, source_basis, confidence, evidence gaps, and next action.
- Ask up to three high-value missing-input questions.

## Prohibited Operations

- Do not parse private or high-risk source bodies.
- Do not summarize copyrighted chapters.
- Do not invent evidence.
- Do not invent user notes.
- Do not invent quotes.
- Do not invent project facts.
- Do not invent playtest logs, observations, participants, participant quotes, or telemetry.
- Do not invent legal sidecars.
- Do not promote claims to verified without legal evidence and review.
- Do not build app features.

## Review Rule

If the user input does not include idea summary, desired player experience, and current uncertainty or concern, the workflow remains blocked.
