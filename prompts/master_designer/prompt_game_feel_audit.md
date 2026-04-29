# Prompt Template: Game Feel Audit

| Field | Value |
|---|---|
| prompt_id | master_designer.game_feel_audit |
| title | Ask the AI to run game feel audit |
| master capability | Game Feel and Feedback Master |
| use case | Use when controls feel floaty, sluggish, unclear, unresponsive, noisy, or unsatisfying. |
| required user input | action, input method, expected feel, current behavior, artifact/video/build description if available. |
| KB context to retrieve | `AI_RESPONSE_PATTERNS.md`; `DOMAIN_TO_LENS_INDEX.md`; `DOMAIN_TO_WORKFLOW_INDEX.md`; `BOOK_TO_CAPABILITY_MAP.md`. |
| source/confidence rules | Do not claim exact Game Feel book definitions or metrics without evidence. |
| output format | Symptom classification; input/response/context/polish table; likely causes; tuning experiments; playtest questions. |
| failure modes | Treating feel as only polish; prescribing without artifact; inventing measurements. |
| review checklist | Are input, response, context, camera, feedback, and polish separated? |

## Prompt Text

Run a game feel audit on this interaction. Separate input, response, context, camera, animation, feedback timing, and polish. Produce likely causes, tuning experiments, and test questions. Mark assumptions and do not pretend artifact-specific observations exist if not provided.

