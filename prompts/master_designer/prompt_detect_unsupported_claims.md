# Prompt Template: Detect Unsupported Claims

| Field | Value |
|---|---|
| prompt_id | master_designer.detect_unsupported_claims |
| title | Ask the AI to detect unsupported claims |
| master capability | Lens Review Master |
| use case | Use for hallucination audit, source governance review, or confidence calibration. |
| required user input | text, card, lesson, workflow, claim list, or AI output to audit. |
| KB context to retrieve | `AI_UNCERTAINTY_AND_SOURCE_RULES.md`; `kb/13_evidence/EVIDENCE_VALIDATION_RULES.md`; `SOURCE_GOVERNANCE_AUDIT.md`; `kb/12_quality/HALLUCINATION_AUDIT.md`. |
| source/confidence rules | Treat unsupported, metadata-only, or AI-hypothesis claims as not verified. |
| output format | Claim table; source_basis; confidence; issue severity; repair; required evidence. |
| failure modes | Accepting confident language; missing book-specific claims; failing to flag metadata-only overreach. |
| review checklist | Are verified claims evidence-backed? Are high-risk sources protected? |

## Prompt Text

Audit this text for unsupported claims. Identify every claim that needs evidence, classify source_basis and confidence, flag metadata-only overreach, high-risk source misuse, invented book-specific claims, and unsupported verification. Propose exact repairs and required evidence.

