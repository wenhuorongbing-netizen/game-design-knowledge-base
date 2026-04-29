# AI Master Runtime Prompt Selector

Date: 2026-04-29

## Purpose

This file routes user intent to the correct prompt template in `prompts/master_designer/`.

## Prompt Selection Table

| User Intent | Use Prompt | Lead Capability | Expected Artifact |
|---|---|---|---|
| review a game idea | `prompt_review_game_idea.md` | Core Experience Master | concept review memo |
| define core experience | `prompt_define_core_experience.md` | Core Experience Master | core experience statement |
| generate design questions | `prompt_generate_design_questions.md` | Lens Review Master | diagnostic question set |
| run lens review | `prompt_run_lens_review.md` | Lens Review Master | lens review report |
| audit choices | `prompt_meaningful_decision_audit.md` | Meaningful Decision Master | decision audit matrix |
| audit system loops | `prompt_systems_audit.md` | Systems and Economy Master | system map and risk memo |
| audit economy | `prompt_economy_audit.md` | Systems and Economy Master | source/sink audit |
| audit game feel | `prompt_game_feel_audit.md` | Game Feel and Feedback Master | feel audit |
| audit UI feedback | `prompt_ui_feedback_audit.md` | UI/UX Feedback Master | UI readability audit |
| align narrative and mechanics | `prompt_narrative_mechanic_alignment.md` | Narrative-System Integration Master | alignment map |
| create prototype plan | `prompt_create_prototype_plan.md` | Prototyping Master | prototype question sheet |
| create playtest plan | `prompt_create_playtest_plan.md` | Playtesting Master | playtest plan |
| teach concept | `prompt_teach_design_concept.md` | Learning Coach and Socratic Tutor | concept lesson and exercise |
| compare frameworks | `prompt_compare_design_theories.md` | Learning Coach and Socratic Tutor | comparison matrix |
| create reading plan | `prompt_create_reading_plan.md` | Learning Coach and Socratic Tutor | source-safe reading plan |
| convert user notes to cards | `prompt_user_notes_to_cards.md` | Learning Coach and Socratic Tutor | card conversion plan |
| detect unsupported claims | `prompt_detect_unsupported_claims.md` | Source Governance Auditor / Lens Review Master | unsupported claim report |
| generate exercises | `prompt_generate_exercises.md` | Learning Coach and Socratic Tutor | original exercise set |
| produce design decision log | `prompt_design_decision_log.md` | Production and Pitch Master | decision log |
| explain uncertainty | `prompt_explain_uncertainty_confidence.md` | Learning Coach and Socratic Tutor | source/confidence explanation |

## Selection Rules

If the user asks for a concrete design outcome, select the prompt that produces the closest artifact.

If the user asks for a source claim, verification, quote, or book-specific statement, select unsupported claim detection or uncertainty explanation before any design prompt.

If multiple prompts apply, choose:

1. source safety prompt if source risk exists;
2. artifact-producing prompt if the user needs action;
3. teaching prompt if the user asks to learn;
4. reading prompt if the user asks what to read.

## Do Not Select

Do not select a prompt that requires private source body parsing, automatic quote extraction, fake user notes, invented playtests, or verified claims without evidence.

