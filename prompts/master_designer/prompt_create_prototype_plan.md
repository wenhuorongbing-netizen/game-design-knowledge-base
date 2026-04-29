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
