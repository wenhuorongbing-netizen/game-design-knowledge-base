# Master Prompt Library

Date: 2026-04-29

## Purpose

This library turns the Game Design Knowledgebase into reusable AI master-designer behaviors.

The prompts are source-governed behavior templates. They do not ask the AI to parse private books, summarize copyrighted chapters, fabricate evidence, or promote unsupported claims.

## Global Prompt Rules

Every prompt in this library must force the AI to:

- route the request to a master capability;
- retrieve only safe KB context;
- mark `source_basis` and `confidence`;
- distinguish draft scaffold, user interpretation, project-local evidence, playtest-local evidence, and verified claims;
- produce an actionable design artifact;
- list missing evidence and assumptions;
- avoid book-specific claims unless legal evidence exists.

## Runtime Hardening Contract

Every prompt template under `prompts/master_designer/` must include a runtime hardening contract with:

- required user input;
- KB context to retrieve;
- capability routing;
- lens routing;
- workflow routing;
- source_basis rules;
- confidence rules;
- assumption handling;
- output artifact format;
- refusal or caution rules;
- failure mode checklist;
- self-review checklist.

This contract is preventive hardening. Run 001 did not collect real target AI outputs, so it did not prove prompt-level response failures. The hardening exists to make future benchmark outputs easier to collect, score, and repair without weakening source safety.

## Prompt Index

| Prompt | File | Master Capability | Primary Output |
|---|---|---|---|
| Review a game idea | [prompt_review_game_idea.md](prompts/master_designer/prompt_review_game_idea.md) | Core Experience Master | concept review memo |
| Define core experience | [prompt_define_core_experience.md](prompts/master_designer/prompt_define_core_experience.md) | Core Experience Master | core experience statement |
| Generate design questions | [prompt_generate_design_questions.md](prompts/master_designer/prompt_generate_design_questions.md) | Lens Review Master | question set |
| Run lens review | [prompt_run_lens_review.md](prompts/master_designer/prompt_run_lens_review.md) | Lens Review Master | lens review report |
| Meaningful decision audit | [prompt_meaningful_decision_audit.md](prompts/master_designer/prompt_meaningful_decision_audit.md) | Meaningful Decision Master | decision audit matrix |
| Systems audit | [prompt_systems_audit.md](prompts/master_designer/prompt_systems_audit.md) | Systems and Economy Master | system map and risk memo |
| Economy audit | [prompt_economy_audit.md](prompts/master_designer/prompt_economy_audit.md) | Systems and Economy Master | source/sink audit |
| Game feel audit | [prompt_game_feel_audit.md](prompts/master_designer/prompt_game_feel_audit.md) | Game Feel and Feedback Master | feel audit |
| UI feedback audit | [prompt_ui_feedback_audit.md](prompts/master_designer/prompt_ui_feedback_audit.md) | UI/UX Feedback Master | UI readability audit |
| Narrative-mechanic alignment | [prompt_narrative_mechanic_alignment.md](prompts/master_designer/prompt_narrative_mechanic_alignment.md) | Narrative-System Integration Master | alignment map |
| Prototype plan | [prompt_create_prototype_plan.md](prompts/master_designer/prompt_create_prototype_plan.md) | Prototyping Master | prototype question sheet |
| Playtest plan | [prompt_create_playtest_plan.md](prompts/master_designer/prompt_create_playtest_plan.md) | Playtesting Master | playtest plan |
| Teach a concept | [prompt_teach_design_concept.md](prompts/master_designer/prompt_teach_design_concept.md) | Learning Coach and Socratic Tutor | teaching note and exercise |
| Compare design theories | [prompt_compare_design_theories.md](prompts/master_designer/prompt_compare_design_theories.md) | Learning Coach and Socratic Tutor | comparison matrix |
| Create reading plan | [prompt_create_reading_plan.md](prompts/master_designer/prompt_create_reading_plan.md) | Learning Coach and Socratic Tutor | reading plan and note prompts |
| Convert user notes into cards | [prompt_user_notes_to_cards.md](prompts/master_designer/prompt_user_notes_to_cards.md) | Learning Coach and Socratic Tutor | card conversion plan |
| Detect unsupported claims | [prompt_detect_unsupported_claims.md](prompts/master_designer/prompt_detect_unsupported_claims.md) | Lens Review Master | hallucination/source audit |
| Generate exercises | [prompt_generate_exercises.md](prompts/master_designer/prompt_generate_exercises.md) | Learning Coach and Socratic Tutor | exercise set |
| Produce design decision log | [prompt_design_decision_log.md](prompts/master_designer/prompt_design_decision_log.md) | Production and Pitch Master | decision log |
| Explain uncertainty and confidence | [prompt_explain_uncertainty_confidence.md](prompts/master_designer/prompt_explain_uncertainty_confidence.md) | Learning Coach and Socratic Tutor | source/confidence explanation |

## Required Context For All Prompts

Retrieve these first when possible:

- `AI_MASTER_DESIGNER_OPERATING_MANUAL.md`
- `AI_REASONING_PROTOCOL.md`
- `AI_UNCERTAINTY_AND_SOURCE_RULES.md`
- `MASTER_CAPABILITY_MATRIX.md`
- `MASTER_DOMAIN_MAP.md`
- `DOMAIN_TO_CAPABILITY_INDEX.md`
- `DOMAIN_TO_LENS_INDEX.md`
- `DOMAIN_TO_WORKFLOW_INDEX.md`
- `MASTER_PROBLEM_SOLVER_INDEX.md`

## Default Source Status

Unless user evidence or legal evidence exists:

- source_basis: `unsupported_draft`
- confidence: `weak`
- evidence gap: no user notes, legal sidecar, project overlay, or playtest log supports verified claims

## Prompt Repair Status

Date: 2026-04-29

All 20 master designer prompt templates now include the runtime hardening contract. Benchmark scores were not changed.
