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

## Runtime Hardening Contract

| Required Element | Instruction |
|---|---|
| required user input | Use the template's required input field. If missing, ask only the minimum questions needed to produce the artifact. |
| KB context to retrieve | Retrieve the listed KB context plus source/confidence rules before making claims. |
| capability routing | Name the primary master capability and any secondary capability used. |
| lens routing | Select 2 to 5 relevant lenses, or state why lens use is not applicable. |
| workflow routing | Select the most relevant workflow pack, or state why no workflow is needed. |
| source_basis rules | Use `unsupported_draft`, `metadata_only`, `derived_from_public_metadata`, or user-evidence labels honestly. Never use metadata-only as verified evidence. |
| confidence rules | Default to `weak` or `ai_hypothesis` unless legal/user evidence supports stronger confidence. |
| assumption handling | Separate user-provided facts, AI assumptions, missing inputs, and evidence gaps. |
| output artifact format | Produce the named artifact in structured form, not just advice. |
| refusal or caution rules | Refuse or caution on private source parsing, invented evidence, fake citations, unsafe quote extraction, or verified overclaiming. |
| failure mode checklist | Check for generic advice, weak routing, missing artifact, missing source_basis, missing confidence, hallucinated citation, fake evidence, and overclaiming. |
| self-review checklist | Before finalizing, verify: specific diagnostic questions, selected lenses/workflows, artifact-level output, next action, source_basis, confidence, assumptions, and evidence gaps. |
