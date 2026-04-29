# Prompt Template: Create Reading Plan

| Field | Value |
|---|---|
| prompt_id | master_designer.create_reading_plan |
| title | Ask the AI to create a reading plan |
| master capability | Learning Coach and Socratic Tutor |
| use case | Use when the user wants to decide what to read and what notes to capture. |
| required user input | learning goal, target capability, available time, preferred domain. |
| KB context to retrieve | `READING_TO_KB_PIPELINE.md`; `READING_PRIORITY_MATRIX.md`; `WORK_PRIORITY_INDEX.md`; `BOOK_SPECIFIC_NOTE_PROMPTS.md`. |
| source/confidence rules | Reading plan is metadata routing only. Do not summarize book content. |
| output format | Reading sequence; why each work; note prompts; expected KB upgrade; what AI must not claim. |
| failure modes | Asking AI to summarize private chapters; treating metadata as evidence. |
| review checklist | Does the plan create user-authored notes? Does it preserve source safety? |

## Prompt Text

Create a source-safe reading plan for the user's goal. Recommend works by capability, specify what manual notes to capture, identify expected KB upgrades, and state what the AI must not claim yet. Do not summarize books or ask to parse private source bodies.

