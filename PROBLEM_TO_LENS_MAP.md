# Problem To Lens Map

Date: 2026-04-29

## Purpose

This map lets the AI choose diagnostic lenses from the user's problem statement.

All lenses are original KB scaffolds and remain unverified unless supported by future evidence.

## Runtime Routing Hardening

Use `AI_MASTER_ROUTING_RULES.md` before selecting lenses. The AI should select lenses after identifying the problem route, primary capability, and desired output artifact.

Lens selection should be narrow and purposeful. Do not choose every lens in a domain.

## Lens Routing

| Problem | Primary Lenses | Secondary Lenses | Review Output |
|---|---|---|---|
| I have a vague game idea | Core Experience Lens; Audience Lens; Player Fantasy Lens | Scope Lens; Feasibility Lens | one-page concept review |
| I do not know what my game is about | Core Experience Lens; Emotional Goal Lens; Player Fantasy Lens | Novelty Lens; Scope Lens | player promise and design pillars |
| My core experience is unclear | Core Experience Lens; Emotional Goal Lens; Agency Lens | Motivation Lens; Challenge Lens | experience hypothesis |
| My choices feel meaningless | Meaningful Decisions Lens; Tradeoffs Lens; Dilemma Quality Lens | Agency Lens; Skill/Chance Mix Lens | decision audit |
| My rules are confusing | Rule Clarity Lens; Rules As Constraints Lens; Core Loop Lens | Depth Versus Complexity Lens | rule clarity audit |
| My system has too many parts | Parts/Loops/Whole Lens; Systemic Coupling Lens; Scope Lens | Depth Versus Complexity Lens; Runaway Loops Lens | system simplification review |
| My economy may inflate | Source/Sink Balance Lens; Economy Readability Lens; Runaway Loops Lens | Progression Curve Lens; Balance Resilience Lens | economy inflation audit |
| My game feels boring | Motivation Lens; Challenge Lens; Curiosity Lens | Pleasure Variety Lens; Meaningful Decisions Lens | engagement diagnosis |
| My feedback is weak | Feedback Timing Lens; Response Clarity Lens; Context Readability Lens | Polish Support Lens; Information Priority Lens | feedback layer audit |
| My UI is confusing | Information Priority Lens; Visibility Lens; Mode Clarity Lens | Feedback Immediacy Lens; Accessibility Lens | UI readability audit |
| My narrative does not support mechanics | Story Function Lens; Player Role Lens; Narrative Agency Lens | World Coherence Lens; Character Function Lens | narrative-mechanic alignment review |
| My prototype has no clear question | Prototype Question Lens; Learning Speed Lens; Disposable Prototype Lens | Feasibility Lens; Scope Lens | prototype question review |
| I do not know how to playtest | Playtest Signal Lens; Observation Quality Lens; Survey Usefulness Lens | Test Bias Lens; Iteration Decision Lens | playtest plan review |
| My design is too complex | Depth Versus Complexity Lens; Scope Lens; Rule Clarity Lens | Systemic Coupling Lens; Cognitive Load Lens | complexity reduction review |
| My pitch is weak | Market Position Lens; Core Experience Lens; Player Fantasy Lens | Scope Lens; Launch Readiness Lens | pitch critique |
| I do not know what to read next | Evidence Gap Lens; Source-Bounded Retrieval Lens; Confidence Calibration Lens | Claim Traceability Lens | reading priority review |
| I want AI to teach me game design | Human Review Lens; Reusable Prompt Quality Lens; Evidence Gap Lens | Claim Traceability Lens | learning route review |

## Lens Count Rule

Use:

- 2 to 3 lenses for quick diagnosis.
- 3 to 5 lenses for normal review.
- 5 to 7 lenses for deep review.

Do not run all possible lenses. The AI should choose the smallest useful set.

If the user has not supplied an artifact, use fewer lenses and produce a partial artifact with assumptions.

## Source Rule

The AI may use lens questions as original diagnostic scaffolds.

The AI must not claim:

- that these lens questions are copied from a book;
- that a book verifies them;
- that the review is source-backed;
- that the user has project evidence.
