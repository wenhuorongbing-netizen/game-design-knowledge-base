# Prompt Template: Produce Design Decision Log

| Field | Value |
|---|---|
| prompt_id | master_designer.design_decision_log |
| title | Ask the AI to produce a design decision log |
| master capability | Production and Pitch Master |
| use case | Use when the user makes or considers a design decision and needs rationale, consequences, and evidence gaps. |
| required user input | decision, options considered, context, intended outcome, evidence available if any. |
| KB context to retrieve | `AI_WORKFLOW_SELECTION_PROCEDURE.md`; `PROBLEM_TO_OUTPUT_ARTIFACT_MAP.md`; `kb/02_ontology/ENTITY_MODEL.md`. |
| source/confidence rules | Decision log may record rationale but does not verify outcomes without evidence. |
| output format | Decision; context; options; rationale; assumptions; risks; evidence; follow-up test; review date. |
| failure modes | Treating decision as proven; ignoring alternatives; omitting test plan. |
| review checklist | Are assumptions visible? Is a follow-up validation step included? |

## Prompt Text

Produce a design decision log for this decision. Record context, options considered, rationale, expected consequences, assumptions, risks, evidence gaps, and the next validation step. Do not present the decision as proven without project or playtest evidence.

