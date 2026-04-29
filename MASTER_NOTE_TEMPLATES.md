# Master Note Templates

Date: 2026-04-29

## Purpose

These templates help the user write manual notes that can later become EvidenceRefs, card improvements, lens ideas, workflow refinements, or evidence gaps.

Do not fill these templates with AI-generated book summaries. The user must write the note content.

## Shared Required Fields

| Field | Description |
|---|---|
| note_id | Stable note ID. |
| work_id | Registered work ID from `BOOK_TO_CAPABILITY_MAP.md`. |
| source_document_id | Optional registered source document ID. |
| location | Chapter, section, page range, timestamp, or whole work reflection. |
| note_type | One of the note types below. |
| user_authored | Must be true when submitted. |
| source_basis | `user_manual_note`, or `user_manual_quote` for quote notes. |
| confidence | Usually `user_interpretation`. |
| related_concepts | Existing concepts or proposed gap. |
| related_cards | Existing card paths if known. |
| related_lenses | Existing lens paths if known. |
| related_workflows | Existing workflow paths if known. |
| limitations | What this note does not prove. |

## Template 1: Concept Note

| Field | Fill This |
|---|---|
| note_type | concept_note |
| concept_name | What concept is this about? |
| source_claim_user_paraphrase | What do you think the source is saying, in your own words? |
| user_interpretation | What does this mean to you as a designer? |
| design_problem | What problem does this concept help solve? |
| related_card | Existing concept card or gap. |
| AI_should_not_claim | What should AI not claim yet? |
| evidence_needed | What would make this stronger? |

## Template 2: Framework Note

| Field | Fill This |
|---|---|
| note_type | method_note |
| framework_name | What structure, method, model, or process did you notice? |
| purpose | What design work does it help with? |
| inputs | What information does the framework need? |
| steps | What are the steps in your own words? |
| outputs | What artifact should it produce? |
| limitations | Where might it fail or not apply? |
| workflow_candidate | Which workflow could it improve? |

## Template 3: Lens Note

| Field | Fill This |
|---|---|
| note_type | concept_note |
| lens_title | What diagnostic question or lens did this suggest? |
| question_set | Write 3 to 7 original diagnostic questions. |
| when_to_use | What artifact or design problem should this lens review? |
| what_it_reveals | What risk, gap, or strength does it expose? |
| related_domain | Which master domain does it belong to? |
| AI_should_not_claim | What source-specific claim is not proven? |

## Template 4: Workflow Note

| Field | Fill This |
|---|---|
| note_type | method_note |
| workflow_name | What process could the AI run? |
| trigger | When should the AI use it? |
| required_inputs | What must the user provide? |
| steps | List steps in your own words. |
| output_artifact | What should the AI produce? |
| quality_check | How should the output be judged? |
| related_workflow | Existing workflow pack or proposed new workflow. |

## Template 5: Disagreement Note

| Field | Fill This |
|---|---|
| note_type | reading_reflection |
| claim_or_idea | What do you disagree with or question? |
| reason | Why does it seem incomplete, risky, outdated, or context-dependent? |
| counterexample | What example or project situation challenges it? |
| useful_part | What is still useful? |
| AI_warning | What should AI be careful not to overstate? |
| follow_up_evidence | What would resolve the disagreement? |

## Template 6: Comparison Note

| Field | Fill This |
|---|---|
| note_type | comparison_note |
| compared_items | Which two concepts, frameworks, books, or methods are compared? |
| similarity | What do they have in common? |
| difference | What is different? |
| when_to_use_each | When should AI choose one over the other? |
| confusion_risk | What might a beginner confuse? |
| evidence_needed | What notes are needed from each source? |

## Template 7: Project Idea Note

| Field | Fill This |
|---|---|
| note_type | project_application_note |
| idea | What game, mechanic, feature, or test idea did this trigger? |
| related_concept | Which concept does it apply? |
| possible_artifact | Mechanic spec, system map, lens, workflow, playtest plan, or pitch. |
| project_scope | General idea, not real project evidence unless a project exists. |
| risk | What could go wrong? |
| AI_should_not_claim | Why this is not proof that the source works in practice. |

## Template 8: Exercise Idea Note

| Field | Fill This |
|---|---|
| note_type | method_note |
| exercise_goal | What skill should this train? |
| prompt | Write an original exercise prompt in your own words. |
| constraints | Time, materials, genre, player count, or design limits. |
| expected_output | What should the learner produce? |
| review_rubric | How should the output be judged? |
| related_lesson_or_workflow | Existing lesson/workflow or gap. |

## Template 9: Quote Note

Use quote notes only when lawful and manually provided.

| Field | Fill This |
|---|---|
| note_type | quote_note |
| quote_text | Short manual quote only. |
| quote_length_words | Count words. |
| location | Page, chapter, section, or other location. |
| user_commentary | Why you saved the quote. |
| why_it_matters | What KB object it might support. |
| source_basis | `user_manual_quote` |
| AI_should_not_claim | What the quote does not prove. |

## Template 10: Question Note

| Field | Fill This |
|---|---|
| note_type | reading_reflection |
| question | What is unclear? |
| why_it_matters | What design decision depends on this? |
| related_domain | Which master domain? |
| related_capability | Which AI capability? |
| evidence_needed | What source, note, project, or playtest data would answer it? |
| priority | low, medium, high |

## Submission Format

Use `kb/13_evidence/manual_notes/user_manual_note_template.md` for normal notes.

Use `kb/13_evidence/manual_quotes/user_manual_quote_template.md` only for short lawful user-provided quotes.

