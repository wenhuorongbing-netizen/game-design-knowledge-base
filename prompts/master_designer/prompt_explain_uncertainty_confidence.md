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

