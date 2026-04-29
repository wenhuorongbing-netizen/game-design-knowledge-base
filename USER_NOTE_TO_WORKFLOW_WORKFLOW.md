# User Note To Workflow Workflow

Date: 2026-04-29

## Purpose

This workflow explains how a user-authored reading note can improve or create a practical workflow pack.

The goal is to turn reading into usable design action while preserving source governance.

## Entry Requirements

| Requirement | Rule |
|---|---|
| note exists | UserManualNote or user-provided note text exists. |
| source_basis | `user_manual_note` |
| confidence | `user_interpretation` |
| user-authored | true |
| artifact target | required |
| limitations | required |

## Workflow Extraction Steps

1. Identify the design job the note helps perform.
2. Identify the user inputs required.
3. Identify the steps the user described in their own words.
4. Identify the output artifact.
5. Identify the quality checklist.
6. Identify failure modes.
7. Link existing cards, lenses, and lessons.
8. Add source/confidence limitations.
9. Keep status draft or user_review_needed.

## Workflow Routing

| Reading Note Helps With | Workflow Target |
|---|---|
| turning idea into concept | Game Idea to One-Page Concept Pack |
| defining experience | Core Experience Definition Pack |
| understanding audience | Player Persona and Audience Pack |
| evaluating choices | Meaningful Decision Audit Pack |
| designing repeated play | Core Loop Design Pack |
| formalizing rules | Rules and Formal Elements Pack |
| mapping systems | Systems Map Pack |
| tuning economy | Economy and Balance Pack |
| tuning difficulty/randomness | Skill / Chance / Challenge Pack |
| diagnosing controls | Game Feel Prototype Pack |
| clarifying UI feedback | UI Feedback Pack |
| aligning story and play | Narrative-Mechanic Alignment Pack |
| planning prototype | Prototype Question, Paper Prototype, or Digital Prototype Pack |
| planning playtest | Playtest Plan Pack |
| interpreting test results | Iteration Decision Pack |
| broad review | Design Lens Review Pack |
| release risk | Release Readiness and Risk Audit Pack |

## Workflow Output Template

| Field | Fill This |
|---|---|
| workflow_id | Existing or proposed ID. |
| trigger | When should AI run this workflow? |
| required_inputs | What must the user provide? |
| step_by_step_process | Steps derived from user note in user words. |
| output_artifacts | What should be produced? |
| quality_checklist | How to judge the output. |
| related_cards | Concept/framework/checklist cards. |
| related_lenses | Diagnostic lenses. |
| evidence_basis | user note ID and limitations. |
| confidence | user_interpretation or weak. |

## Not Allowed

- Do not convert copied book process text into a workflow.
- Do not present a user-derived workflow as the book's official method.
- Do not promote workflow confidence above weak without review.
- Do not claim project validation without a ProjectOverlay or PlaytestLog.

## Acceptance Criteria

- Workflow produces a concrete design artifact.
- Source basis is visible.
- User interpretation is separate from source claim.
- Missing evidence is listed.
- The workflow remains draft unless reviewed evidence supports it.

