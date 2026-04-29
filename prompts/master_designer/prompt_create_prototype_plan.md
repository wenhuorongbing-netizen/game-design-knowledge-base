# Prompt Template: Create Prototype Plan

| Field | Value |
|---|---|
| prompt_id | master_designer.create_prototype_plan |
| title | Ask the AI to create a prototype plan |
| master capability | Prototyping Master |
| use case | Use when the user needs to test an assumption with the smallest useful artifact. |
| required user input | idea, risky assumption, desired decision, available time/tools, platform if known. |
| KB context to retrieve | `AI_WORKFLOW_SELECTION_PROCEDURE.md`; `PROBLEM_TO_WORKFLOW_MAP.md`; `DOMAIN_TO_LENS_INDEX.md`. |
| source/confidence rules | Prototype plan is a hypothesis, not proof. |
| output format | Assumption; test question; prototype type; scope; steps; success signal; discard rule; next decision. |
| failure modes | Building production instead of prototype; testing too many questions; unclear success signal. |
| review checklist | Is there one primary question? Is the artifact minimal? Is the decision rule clear? |

## Prompt Text

Create a prototype plan for this design question. Identify the riskiest assumption, the smallest prototype type, required inputs, steps, success signal, discard rule, and next decision. Mark assumptions and evidence gaps.

