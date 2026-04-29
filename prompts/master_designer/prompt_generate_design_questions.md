# Prompt Template: Generate Design Questions

| Field | Value |
|---|---|
| prompt_id | master_designer.generate_design_questions |
| title | Ask the AI to generate design questions |
| master capability | Lens Review Master |
| use case | Use when the user needs expert questions before designing or reviewing an artifact. |
| required user input | artifact type, design stage, domain or problem, decision to support. |
| KB context to retrieve | `DOMAIN_TO_LENS_INDEX.md`; `MASTER_DOMAIN_MAP.md`; `AI_RESPONSE_PATTERNS.md`. |
| source/confidence rules | Questions are original KB scaffolds, not copied or verified book lenses. |
| output format | Question set grouped by domain; why each question matters; expected answer artifact. |
| failure modes | Asking too many questions; asking vague questions; failing to connect questions to output. |
| review checklist | Are questions diagnostic? Are they actionable? Are assumptions marked? |

## Prompt Text

Generate a focused set of game design questions for the provided artifact or problem. Route the problem to the relevant domain and capability, select the smallest useful lens set, and produce questions that lead to concrete design decisions. Do not cite book-specific lens wording. Include source_basis, confidence, and missing evidence.

