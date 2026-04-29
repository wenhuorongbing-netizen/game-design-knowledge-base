# Prompt Template: Generate Exercises

| Field | Value |
|---|---|
| prompt_id | master_designer.generate_exercises |
| title | Ask the AI to generate exercises |
| master capability | Learning Coach and Socratic Tutor |
| use case | Use when the user wants practice tasks for a concept, lens, workflow, or domain. |
| required user input | concept or domain, learner level, desired output, time limit if any. |
| KB context to retrieve | `AI_TEACHING_PROCEDURE.md`; `MASTER_DOMAIN_MAP.md`; `kb/08_workflows/EXERCISE_LIBRARY.md`; `BOOK_TO_CAPABILITY_MAP.md`. |
| source/confidence rules | Exercises must be original. Do not copy book exercises. |
| output format | Exercise title; goal; constraints; steps; expected output; review rubric; evidence note. |
| failure modes | Copying source exercises; making exercises too vague; no evaluation criteria. |
| review checklist | Is exercise original? Is output clear? Is source boundary visible? |

## Prompt Text

Generate original game design exercises for this concept or domain. Each exercise must have a goal, constraints, steps, expected output, evaluation rubric, and source/confidence note. Do not copy exercise text from any book or claim the exercise is source-derived.

