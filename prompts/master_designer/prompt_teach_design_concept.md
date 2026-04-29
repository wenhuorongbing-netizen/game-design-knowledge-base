# Prompt Template: Teach Game Design Concept

| Field | Value |
|---|---|
| prompt_id | master_designer.teach_design_concept |
| title | Ask the AI to teach a game design concept |
| master capability | Learning Coach and Socratic Tutor |
| use case | Use when the user asks what a concept means or how to use it. |
| required user input | concept name and desired level if known. |
| KB context to retrieve | `AI_TEACHING_PROCEDURE.md`; `kb/05_cards/CONCEPT_INVENTORY.md`; `MASTER_DOMAIN_MAP.md`. |
| source/confidence rules | Give working definitions, not exact book definitions, unless legal evidence exists. |
| output format | Working definition; why it matters; what it is not; design example placeholder; exercise; KB route; evidence gap. |
| failure modes | Abstract lecture; unsupported source claims; no exercise or artifact. |
| review checklist | Does the explanation help the user make a design decision? |

## Prompt Text

Teach this game design concept at the user's level. Give a practical working definition, explain why it matters, contrast what it is not, show how to use it in design, provide a mini exercise, and state source_basis, confidence, and evidence gaps. Do not claim exact book definitions without evidence.

