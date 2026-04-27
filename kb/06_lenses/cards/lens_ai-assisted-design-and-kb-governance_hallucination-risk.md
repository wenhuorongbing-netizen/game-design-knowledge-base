---
lens_id: "lens_ai-assisted-design-and-kb-governance_hallucination-risk"
entity_type: "DesignLens"
title: "Hallucination Risk Lens"
family: "AI-Assisted Design and KB Governance Lenses"
one_sentence_purpose: "Diagnose whether the design artifact has a clear, testable position on hallucination risk without inventing facts or relying on unsupported source claims."
domain: "prompt_engineering_for_game_design"
phase_groups: ["立项与方向", "开发实现", "测试 / 验收 / 审计"]
related_cards: ["concept_design-document", "concept_iteration", "framework_ai-source-bounded-retrieval-framework"]
related_works: []
source_basis: "unsupported_draft"
confidence: "unsupported_draft"
when_to_use: ["Use during 立项与方向, 开发实现, 测试 / 验收 / 审计 when hallucination risk is likely to affect player experience or production risk.", "Use before accepting a design decision as stable.", "Use after a prototype, playtest, design review, or project overlay produces new evidence."]
what_it_reveals: ["Whether hallucination risk is defined as an observable design concern.", "Which assumptions are unsupported.", "Which next experiment would produce better evidence."]
diagnostic_questions: ["What exact artifact, player behavior, or production decision is the hallucination risk lens examining?", "What player experience is intended, and where is that intention visible rather than assumed?", "Which rule, feedback signal, content beat, UI element, or production constraint most strongly affects hallucination risk?", "What evidence do we have now, and what evidence is missing before this judgment should influence scope?", "What small experiment, playtest prompt, prototype change, or review task would test the riskiest assumption this week?"]
required_inputs: ["A game idea, feature spec, prototype recording, playtest note, system map, UI mockup, narrative outline, or production decision.", "The intended player experience or project goal.", "Known constraints, risks, and available evidence."]
recommended_outputs: ["source-bounded AI review or evidence audit", "strengths", "risks", "missing evidence", "suggested experiments", "next design actions"]
red_flags: ["The review depends on assumed player reactions without evidence.", "The artifact cannot show where the lens concern appears.", "The proposed action changes scope without a testable reason."]
common_false_positives: ["A polished presentation hides an untested design assumption.", "A familiar genre convention is mistaken for proof that the design works.", "A single player anecdote is treated as broad validation."]
example_usage_template: "Artifact: [paste or link]. Intended experience: [state]. Use the Hallucination Risk Lens to identify strengths, risks, missing evidence, suggested experiments, and next design actions."
forum_thread_template: "Thread title: Hallucination Risk Lens review for [artifact]. Opening post: What is the intended experience, what evidence exists, which diagnostic question is most uncertain, and what experiment should be run next?"
AI_review_prompt: "Use this lens to review the following game design artifact. First identify the intended player experience. Then ask the diagnostic questions. Then produce: strengths, risks, missing evidence, suggested experiments, and next design actions. Do not invent facts. Mark assumptions."
status: "draft"
created_at: "2026-04-26"
updated_at: "2026-04-26"
---
# Hallucination Risk Lens

## Purpose

Diagnose whether the design artifact has a clear, testable position on hallucination risk without inventing facts or relying on unsupported source claims.

## When To Use

- Use during 立项与方向, 开发实现, 测试 / 验收 / 审计 when hallucination risk is likely to affect player experience or production risk.
- Use before accepting a design decision as stable.
- Use after a prototype, playtest, design review, or project overlay produces new evidence.

## What It Reveals

- Whether hallucination risk is defined as an observable design concern.
- Which assumptions are unsupported.
- Which next experiment would produce better evidence.

## Diagnostic Questions

- What exact artifact, player behavior, or production decision is the hallucination risk lens examining?
- What player experience is intended, and where is that intention visible rather than assumed?
- Which rule, feedback signal, content beat, UI element, or production constraint most strongly affects hallucination risk?
- What evidence do we have now, and what evidence is missing before this judgment should influence scope?
- What small experiment, playtest prompt, prototype change, or review task would test the riskiest assumption this week?

## Required Inputs

- A game idea, feature spec, prototype recording, playtest note, system map, UI mockup, narrative outline, or production decision.
- The intended player experience or project goal.
- Known constraints, risks, and available evidence.

## Recommended Outputs

- source-bounded AI review or evidence audit
- strengths
- risks
- missing evidence
- suggested experiments
- next design actions

## Red Flags

- The review depends on assumed player reactions without evidence.
- The artifact cannot show where the lens concern appears.
- The proposed action changes scope without a testable reason.

## Common False Positives

- A polished presentation hides an untested design assumption.
- A familiar genre convention is mistaken for proof that the design works.
- A single player anecdote is treated as broad validation.

## Related Cards

- concept_design-document
- concept_iteration
- framework_ai-source-bounded-retrieval-framework

## Related Works

- Evidence gap: no related item has been attached yet.

## Source Basis And Confidence

- source_basis: unsupported_draft
- confidence: unsupported_draft
- evidence_gap: This is an original diagnostic lens generated from the KB architecture. Attach legal/user evidence or project validation before treating it as verified doctrine.

## Example Usage Template

Artifact: [paste or link]. Intended experience: [state]. Use the Hallucination Risk Lens to identify strengths, risks, missing evidence, suggested experiments, and next design actions.

## Forum Thread Template

Thread title: Hallucination Risk Lens review for [artifact]. Opening post: What is the intended experience, what evidence exists, which diagnostic question is most uncertain, and what experiment should be run next?

## AI Review Prompt

Use this lens to review the following game design artifact. First identify the intended player experience. Then ask the diagnostic questions. Then produce: strengths, risks, missing evidence, suggested experiments, and next design actions. Do not invent facts. Mark assumptions.
