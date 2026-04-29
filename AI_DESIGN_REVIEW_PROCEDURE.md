# AI Design Review Procedure

Date: 2026-04-29

## Purpose

This procedure tells the AI how to review a game concept, mechanic, system, UI, narrative, prototype, pitch, or release plan using the KB.

## Review Modes

| Mode | When To Use | Output |
|---|---|---|
| quick diagnosis | user asks for fast feedback | concise issue/risk/next action table |
| deep design review | user provides substantial artifact | full lens-based review |
| lens-based review | user asks for questions or critique | lens report |
| system audit | loops, economy, balance, progression | system map and risk memo |
| meaningful decision audit | player choices feel weak | decision matrix |
| game feel audit | controls, responsiveness, feedback | feel diagnosis and tuning experiments |
| narrative-mechanic alignment | story and mechanics conflict | alignment map |
| pitch critique | concept, store, or investor pitch | positioning and proof review |

## Required Inputs

For best review, request:

- artifact type
- intended player experience
- target player
- core action or loop
- platform/input assumptions
- current stage
- what decision the review should support

If the user lacks these inputs, create a partial review and mark assumptions.

## Review Procedure

1. Identify artifact type.
2. Identify intended player experience.
3. Route to domain and capability.
4. Select lenses.
5. Review for strengths.
6. Review for risks.
7. Identify missing evidence.
8. Recommend experiments or next artifacts.
9. State source_basis and confidence.

## Standard Review Output

| Section | Content |
|---|---|
| Inferred artifact | What is being reviewed. |
| Intended experience | What the design appears to promise. |
| KB route | Domain, capability, lenses, workflow. |
| Strengths | What is structurally promising. |
| Risks | What could fail and why. |
| Missing evidence | What the AI does not know. |
| Suggested experiments | Prototype or playtest next steps. |
| Next artifact | Concrete document, spec, map, or checklist. |
| Source/confidence | source_basis, confidence, limitations. |

## Lens Selection By Artifact

| Artifact | Primary Lenses |
|---|---|
| early concept | Core Experience; Audience; Player Fantasy; Scope; Feasibility |
| mechanic | Core Loop; Rule Clarity; Meaningful Decisions; Tradeoffs |
| system | Parts/Loops/Whole; Feedback Loops; Runaway Loops; Economy Readability |
| economy | Source/Sink Balance; Progression Curve; Power Curve; Balance Resilience |
| controls | Real-Time Control; Input Responsiveness; Response Clarity; Tight Versus Floaty |
| UI | Information Priority; Feedback Immediacy; Mode Clarity; Accessibility |
| narrative | Story Function; World Coherence; Player Role; Narrative Agency |
| prototype | Prototype Question; Learning Speed; Disposable Prototype; Test Bias |
| playtest plan | Playtest Signal; Observation Quality; Survey Usefulness; Iteration Decision |
| pitch | Market Position; Business Alignment; Scope; Launch Readiness |

## Design Review Quality Bar

A review is weak if it:

- gives taste opinions without evidence;
- says "make it more fun" without artifact steps;
- ignores the player's repeated action;
- ignores missing context;
- does not produce next actions;
- implies verified source doctrine from draft KB scaffolds.

A review is strong if it:

- identifies the design problem;
- routes to the correct domain;
- uses a small lens set;
- names assumptions;
- creates a concrete next artifact;
- separates design hypothesis from evidence.

## Source Boundary

Default review source status:

- source_basis: `unsupported_draft`
- confidence: `weak`

Raise confidence only when user notes, project evidence, playtest evidence, or legal source evidence exists.

