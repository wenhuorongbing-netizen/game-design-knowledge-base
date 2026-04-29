# Evidence Phase 3 Roadmap

Date: 2026-04-28

## Superseded Immediate Default

This roadmap is retained as a future evidence-intake option, not the immediate next phase.

As of 2026-04-29, the user has refocused the repository toward the Master Framework Phase. The current default is to organize the whole field of game design into AI-usable master capabilities. Game Feel evidence intake should resume only after the user supplies reading notes, legal sidecars, or explicitly chooses Game Feel as the active evidence domain.

## Chosen Narrow Domain

Game Feel

## Rationale

Game Feel is the best Phase 3 target because the KB already has a strong structural scaffold for real-time control, simulated space, polish, input metrics, response metrics, context metrics, responsiveness, tightness, floatiness, camera feel, avatar feel, kinesthetic prototype, and the Game Feel audit workflow.

This area is structurally rich but evidence-poor. It can be improved with a small number of user-authored notes without parsing source bodies or promoting unsupported claims.

## Phase 3 Goal

Add a small, source-governed Game Feel evidence packet and use it to prepare limited evidence relationships and claim reviews.

Phase 3 must not mass-verify claims.

## Required User Inputs

| Input | Required? | Notes |
|---|---|---|
| one legal sidecar | recommended | Needed if any source-specific processing permission is requested. Defaults to pending review. |
| three to five Game Feel user manual notes | required for evidence progress | Notes must be user-authored and must not be copied chapter text. |
| one short manual quote | optional | Must be user-provided, lawful, and length-checked. |
| one project application | optional | Must describe a real project situation and remain project-local. |
| one playtest log | optional | Must use real observations and remain playtest-local. |

## Candidate Game Feel Evidence Targets

| Target | Entity Type | Current Status | Phase 3 Evidence Needed |
|---|---|---|---|
| game feel | concept / claim | evidence gap open | user note defining the user's understanding and source location if applicable |
| real-time control | concept / claim | evidence gap open | user note on control loop and player input feel |
| responsiveness | concept / claim | evidence gap open | user note or project observation about latency and feedback |
| tightness / floatiness | concept / claim | evidence gap open | user note or playtest observation about tuning perception |
| input / response / context / polish metrics | concepts / lenses | evidence gap open | user note mapping metrics to a prototype or design artifact |
| game feel audit workflow | workflow | draft scaffold | project application or checklist run on a real prototype |

## Step Plan

| Step | Action | Output |
|---|---|---|
| 1 | User submits three to five Game Feel manual notes. | UserManualNote records or a blocked request if notes are not supplied. |
| 2 | Validate note authorship, source basis, confidence, and target links. | Validation report with 0 P0 issues. |
| 3 | Create EvidenceRefs only for accepted notes. | EvidenceRef records linked to existing claims/cards/lenses/workflows. |
| 4 | Review five to ten Game Feel claims. | A claim review table with promotion eligibility. |
| 5 | Draft limited promotion requests. | Three to five requests at most, only to `user_interpretation` or `weak` unless stronger legal evidence exists. |
| 6 | Build a Game Feel evidence dossier. | Domain-specific evidence dossier listing evidence, limitations, gaps, and blocked claims. |
| 7 | Optionally add one project application. | ProjectOverlay record scoped to project context only. |
| 8 | Optionally add one playtest log. | PlaytestLog record scoped to observed facts and project decisions only. |
| 9 | Update evidence-weighted coverage. | Coverage matrix and navigation updated from actual evidence counts. |

## Forbidden In Phase 3

- Do not parse private or high-risk source body text.
- Do not summarize copyrighted chapters.
- Do not extract quotes from source files.
- Do not invent legal sidecars, user notes, quotes, projects, or playtests.
- Do not promote any claim to verified unless legal evidence and prior review explicitly justify it.
- Do not generalize project-local or playtest-local evidence into universal doctrine.

## Acceptance Criteria

- User evidence is supplied or the phase blocks clearly.
- All new evidence records validate.
- EvidenceRefs point to existing entities.
- Claims are promoted only to `user_interpretation` or `weak`, if evidence supports them.
- Verified claims remain blocked unless legal evidence is unusually strong and reviewed.
- Evidence-weighted coverage updates distinguish structural coverage from evidence-backed coverage.

## Future Evidence Prompt

Use `start-evidence-phase-3-game-feel-user-notes` only if the user explicitly chooses to resume Game Feel evidence intake and supplies or requests user-note evidence for that domain.

Current default next prompt: `build-master-prompt-router`
