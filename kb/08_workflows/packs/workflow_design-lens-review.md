---
workflow_id: "workflow_design-lens-review"
entity_type: "WorkflowPack"
title: "Design Lens Review Pack"
purpose: "Runs multiple lenses on a project artifact."
phase_groups: ["立项与方向", "核心玩法与系统设计", "数值与经济设计", "美术 / UI / 体验表达", "测试 / 验收 / 审计"]
domains: ["design_lenses", "prompt_engineering_for_game_design"]
difficulty: "advanced"
estimated_time: "75 minutes"
target_user: "educator"
when_to_use: ["Use when a design question needs to become a concrete output artifact.", "Use before accepting a feature, system, prototype, or release decision as stable.", "Use when the team needs evidence, assumptions, risks, and next actions separated."]
when_not_to_use: ["Do not use as a substitute for playtesting or human review.", "Do not use to create book-derived claims without legal evidence.", "Do not use when required inputs are unavailable or the question is too broad."]
required_inputs: ["current design question", "game idea, feature spec, prototype notes, or project artifact", "known constraints and target player experience", "available evidence and explicit assumptions"]
step_by_step_process: ["State the design question in one sentence.", "List inputs, constraints, assumptions, and missing evidence.", "Review linked concept cards as vocabulary anchors, not verified claims.", "Run the linked lenses and record strengths, risks, and contradictions.", "Draft the output artifact using the workflow output format.", "Apply the quality checklist and human review questions.", "Record the project overlay update and next action."]
related_cards: ["concept_design-document", "concept_player-experience", "concept_iteration"]
related_lenses: ["lens_ai-assisted-design-and-kb-governance_source-bounded-retrieval", "lens_mechanics-and-rules_meaningful-decisions", "lens_player-experience_accessibility", "lens_player-experience_onboarding"]
related_lessons: ["lesson_10_advanced_design_studio_01_design-lens-reviews", "lesson_10_advanced_design_studio_06_ethical-design-review", "lesson_10_advanced_design_studio_08_capstone-design-review", "lesson_01_foundations_01_what-a-game-designer-actually-decides", "lesson_01_foundations_02_player-centric-design"]
output_artifacts: ["Design Lens Review worksheet", "design decision log entry", "missing evidence list", "next experiment or playtest question", "project overlay update"]
quality_checklist: ["The design question is specific.", "Every claim is labeled as evidence, assumption, or hypothesis.", "At least two lenses were used.", "The output artifact can be reviewed by another person.", "The next action is small enough to execute this week."]
AI_prompt_templates: ["prompt_run-design-audit", "prompt_produce-design-decision-log", "prompt_update-project-overlay"]
human_review_questions: ["What would make this workflow output wrong?", "What evidence is missing before the team should commit?", "Which assumption is riskiest?", "What is the smallest useful next test?"]
forum_thread_template: "Thread title: Design Lens Review Pack review for [artifact]. Include context, intended player experience, workflow output, missing evidence, and one question for reviewers."
project_overlay_update: "Append the Design Lens Review Pack output to the project overlay with changed decisions, evidence gaps, and next experiments."
success_criteria: ["The output artifact is concrete enough to use in production or class critique.", "Unsupported claims remain marked.", "The team has a clear next action."]
common_failure_modes: ["The workflow produces broad advice instead of an artifact.", "Draft cards or lenses are treated as verified knowledge.", "The review skips evidence gaps.", "The next action is too large to execute."]
source_basis: "unsupported_draft"
confidence: "unsupported_draft"
status: "draft"
created_at: "2026-04-26"
updated_at: "2026-04-26"
---
# Design Lens Review Pack

## Purpose

Runs multiple lenses on a project artifact.

## When To Use

- Use when a design question needs to become a concrete output artifact.
- Use before accepting a feature, system, prototype, or release decision as stable.
- Use when the team needs evidence, assumptions, risks, and next actions separated.

## When Not To Use

- Do not use as a substitute for playtesting or human review.
- Do not use to create book-derived claims without legal evidence.
- Do not use when required inputs are unavailable or the question is too broad.

## Required Inputs

- current design question
- game idea, feature spec, prototype notes, or project artifact
- known constraints and target player experience
- available evidence and explicit assumptions

## Step-By-Step Process

- State the design question in one sentence.
- List inputs, constraints, assumptions, and missing evidence.
- Review linked concept cards as vocabulary anchors, not verified claims.
- Run the linked lenses and record strengths, risks, and contradictions.
- Draft the output artifact using the workflow output format.
- Apply the quality checklist and human review questions.
- Record the project overlay update and next action.

## Related Cards

- concept_design-document
- concept_player-experience
- concept_iteration

## Related Lenses

- lens_ai-assisted-design-and-kb-governance_source-bounded-retrieval
- lens_mechanics-and-rules_meaningful-decisions
- lens_player-experience_accessibility
- lens_player-experience_onboarding

## Related Lessons

- lesson_10_advanced_design_studio_01_design-lens-reviews
- lesson_10_advanced_design_studio_06_ethical-design-review
- lesson_10_advanced_design_studio_08_capstone-design-review
- lesson_01_foundations_01_what-a-game-designer-actually-decides
- lesson_01_foundations_02_player-centric-design

## Output Artifacts

- Design Lens Review worksheet
- design decision log entry
- missing evidence list
- next experiment or playtest question
- project overlay update

## Quality Checklist

- The design question is specific.
- Every claim is labeled as evidence, assumption, or hypothesis.
- At least two lenses were used.
- The output artifact can be reviewed by another person.
- The next action is small enough to execute this week.

## AI Prompt Templates

- prompt_run-design-audit
- prompt_produce-design-decision-log
- prompt_update-project-overlay

## Human Review Questions

- What would make this workflow output wrong?
- What evidence is missing before the team should commit?
- Which assumption is riskiest?
- What is the smallest useful next test?

## Forum Thread Template

Thread title: Design Lens Review Pack review for [artifact]. Include context, intended player experience, workflow output, missing evidence, and one question for reviewers.

## Project Overlay Update

Append the Design Lens Review Pack output to the project overlay with changed decisions, evidence gaps, and next experiments.

## Success Criteria

- The output artifact is concrete enough to use in production or class critique.
- Unsupported claims remain marked.
- The team has a clear next action.

## Common Failure Modes

- The workflow produces broad advice instead of an artifact.
- Draft cards or lenses are treated as verified knowledge.
- The review skips evidence gaps.
- The next action is too large to execute.

## Source Governance

- source_basis: unsupported_draft
- confidence: unsupported_draft
- status: draft
- No high-risk source body text was used.
