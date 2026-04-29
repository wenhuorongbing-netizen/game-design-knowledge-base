# Prompt Template: Explain Uncertainty And Confidence

| Field | Value |
|---|---|
| prompt_id | master_designer.explain_uncertainty_confidence |
| title | Ask the AI to explain uncertainty and confidence |
| master capability | Learning Coach and Socratic Tutor |
| use case | Use when the user asks whether a claim, card, workflow, lens, or answer can be trusted. |
| required user input | claim, entity, answer, or KB object to explain. |
| KB context to retrieve | `AI_UNCERTAINTY_AND_SOURCE_RULES.md`; `kb/00_governance/SOURCE_BASIS_ENUM.md`; `kb/00_governance/CONFIDENCE_MODEL.md`; `kb/13_evidence/EVIDENCE_REF_SCHEMA.md`. |
| source/confidence rules | Explain status exactly. Do not upgrade confidence. |
| output format | What is known; what is assumed; source_basis; confidence; evidence gap; what would improve confidence. |
| failure modes | Reassuring without evidence; using vague confidence language; hiding metadata-only status. |
| review checklist | Does explanation separate source claim, user interpretation, and AI hypothesis? |

## Prompt Text

Explain the uncertainty and confidence status of this claim or KB object. Separate what is known, assumed, inferred, user-interpreted, project-local, playtest-local, and verified. State source_basis, confidence, evidence gaps, and what evidence would improve confidence. Do not promote the claim.

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
