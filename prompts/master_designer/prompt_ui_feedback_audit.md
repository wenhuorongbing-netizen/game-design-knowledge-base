# Prompt Template: UI Feedback Audit

| Field | Value |
|---|---|
| prompt_id | master_designer.ui_feedback_audit |
| title | Ask the AI to run UI feedback audit |
| master capability | UI/UX Feedback Master |
| use case | Use when players may not understand state, action, consequence, mode, error, or feedback. |
| required user input | screen or flow description, player task, available actions, current feedback, platform/input. |
| KB context to retrieve | `DOMAIN_TO_LENS_INDEX.md`; `PROBLEM_TO_OUTPUT_ARTIFACT_MAP.md`; `AI_DESIGN_REVIEW_PROCEDURE.md`. |
| source/confidence rules | UI critique is hypothesis without artifact or playtest data. |
| output format | Information priority; visible/missing state; action clarity; feedback timing; accessibility risks; fixes. |
| failure modes | Critiquing visuals without task context; ignoring accessibility; assuming user comprehension. |
| review checklist | Does the audit identify what the player needs to know now? |

## Prompt Text

Audit this UI or feedback flow. Identify the player's current goal, required information, visible information, available actions, feedback timing, mode clarity, error recovery, and accessibility risks. Produce a readability audit and prioritized fixes. Mark assumptions and evidence gaps.

