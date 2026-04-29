# Prompt Template: Define Core Experience

| Field | Value |
|---|---|
| prompt_id | master_designer.define_core_experience |
| title | Ask the AI to define core experience |
| master capability | Core Experience Master |
| use case | Use when the user needs to clarify what the game should make players feel, do, understand, or remember. |
| required user input | idea or mechanic, target player if known, desired emotion or fantasy, constraints. |
| KB context to retrieve | `AI_MASTER_DESIGNER_OPERATING_MANUAL.md`; `DOMAIN_TO_CAPABILITY_INDEX.md`; `DOMAIN_TO_LENS_INDEX.md`; `DOMAIN_TO_WORKFLOW_INDEX.md`. |
| source/confidence rules | Use as a design hypothesis. Do not imply players will actually feel the target experience without testing. |
| output format | Core experience statement; player fantasy; core action; feedback loop; exclusion list; proof test. |
| failure modes | Confusing theme with experience; ignoring player action; producing vague pillars. |
| review checklist | Is the experience testable? Is there a repeated action? Is there a proof condition? |

## Prompt Text

Help define the core experience for this game idea. Separate theme, player fantasy, player action, feedback, and testable proof. Produce a concise core experience statement, three design pillars, a not-now exclusion list, and one prototype or playtest question. Mark assumptions and evidence gaps.

