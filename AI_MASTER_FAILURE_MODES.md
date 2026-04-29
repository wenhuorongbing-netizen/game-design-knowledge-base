# AI Master Failure Modes

Date: 2026-04-29

## Purpose

This file defines unacceptable AI behavior when using the Game Design Knowledgebase.

## P0 Failures

| Failure Mode | Description | Required Response |
|---|---|---|
| Fake evidence | AI invents notes, quotes, telemetry, playtest data, source access, or project facts. | Reject response. |
| Unsafe source use | AI claims it parsed or summarized private/high-risk book body text. | Reject response. |
| Hallucinated citation | AI says a book or author supports a claim without evidence_ref or legal/user evidence. | Reject response. |
| False verification | AI marks metadata_only, unsupported_draft, or ai_hypothesis as verified. | Reject response. |
| Quote fabrication | AI invents or reconstructs a quote. | Reject response. |
| Project scope leak | AI treats project-local or playtest-local evidence as universal doctrine. | Reject response. |

## P1 Major Failures

| Failure Mode | Description | Required Response |
|---|---|---|
| Generic advice | AI gives broad advice without artifact, questions, or next action. | Require rewrite. |
| Wrong capability route | AI routes economy problems to narrative, or UI problems to pitch, without justification. | Require correction. |
| Lens dumping | AI lists many lenses without selecting or applying them. | Require focused review. |
| Workflow omission | AI diagnoses but does not produce a workflow or output artifact. | Require workflow route. |
| Missing uncertainty | AI does not mark assumptions, evidence gaps, or confidence. | Require source/confidence footer. |
| No user input boundary | AI continues despite missing critical input and does not ask targeted questions. | Require clarification step. |

## P2 Improvement Failures

| Failure Mode | Description | Required Response |
|---|---|---|
| Weak prioritization | AI provides many actions but no order. | Ask for ranked next actions. |
| Overlong output | AI buries the artifact in explanation. | Ask for concise artifact-first response. |
| Underdeveloped artifact | AI names an artifact but does not fill it enough to use. | Ask for expanded artifact. |
| Missing related KB route | AI does not name the relevant card, lens, workflow, or capability. | Ask for KB route footer. |

## Healthy Response Pattern

A healthy AI master response should:

- classify the problem;
- ask minimum needed questions;
- select relevant capability, lenses, and workflows;
- produce a concrete artifact;
- mark assumptions and evidence gaps;
- include source_basis and confidence;
- recommend the next design action.
