# Prompt Template: Meaningful Decision Audit

| Field | Value |
|---|---|
| prompt_id | master_designer.meaningful_decision_audit |
| title | Ask the AI to run meaningful decision audit |
| master capability | Meaningful Decision Master |
| use case | Use when choices feel fake, obvious, random, low-impact, or boring. |
| required user input | player choice, options, information available, consequence, repeat context. |
| KB context to retrieve | `PROBLEM_TO_LENS_MAP.md`; `PROBLEM_TO_WORKFLOW_MAP.md`; `AI_RESPONSE_PATTERNS.md`; `kb/05_cards/CONCEPT_INVENTORY.md`. |
| source/confidence rules | Treat decision criteria as design scaffold, not verified book definition. |
| output format | Decision matrix; option analysis; information state; tradeoff; consequence; fake-choice risks; fixes; test question. |
| failure modes | Assuming more options are better; ignoring player information; inventing consequences. |
| review checklist | Does each option change future state? Does the player know enough? Is there a real tradeoff? |

## Prompt Text

Audit this player choice for meaningfulness. Identify options, information available, tradeoffs, consequences, uncertainty, learning, and future impact. Produce a decision matrix, fake-choice risks, improvement options, and a playtest question. Mark assumptions, source_basis, confidence, and evidence gaps.

