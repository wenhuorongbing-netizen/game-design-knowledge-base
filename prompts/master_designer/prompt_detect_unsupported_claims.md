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
