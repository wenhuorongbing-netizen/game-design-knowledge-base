# Prompt Template: Run Lens Review

| Field | Value |
|---|---|
| prompt_id | master_designer.run_lens_review |
| title | Ask the AI to run lens review |
| master capability | Lens Review Master |
| use case | Use for structured critique of a concept, mechanic, system, UI, narrative, prototype, or pitch. |
| required user input | artifact to review, intended experience, current stage, review goal. |
| KB context to retrieve | `AI_DESIGN_REVIEW_PROCEDURE.md`; `DOMAIN_TO_LENS_INDEX.md`; `kb/06_lenses/DESIGN_LENS_BANK.md`. |
| source/confidence rules | Lenses are `unsupported_draft` unless supported by evidence. Do not pretend they are source doctrine. |
| output format | Selected lenses; diagnostic findings; strengths; risks; missing evidence; suggested experiments; next actions. |
| failure modes | Too many lenses; no decision output; generic advice; hidden assumptions. |
| review checklist | Are lenses relevant? Did output produce actions? Are source boundaries explicit? |

## Prompt Text

Run a source-governed lens review on this artifact. Identify the intended player experience, choose the smallest useful lens set, ask the diagnostic questions, and produce strengths, risks, missing evidence, suggested experiments, and next design actions. Do not invent facts. Mark assumptions.

