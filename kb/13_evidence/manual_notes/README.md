# User Manual Notes

Status: canonical evidence intake folder for user-authored reading notes.

This folder is for notes written by the user. It is not a place for copied book chapters, extracted PDF text, generated summaries, or source-body transformations.

## Rules

- A UserManualNote must use `source_basis: user_manual_note`.
- A UserManualNote must use `confidence: user_interpretation`.
- A UserManualNote records what the user thinks, notices, questions, or applies.
- A UserManualNote is not automatically a source claim.
- High-risk source files must not be parsed to create notes.

## How To Add A Note

1. Copy `user_manual_note_template.md`.
2. Rename the copy to a stable ID, for example `note-game-feel-ch01-control.md`.
3. Fill `note_id`, `work_id`, and optional `source_document_id`.
4. Write only user-authored summary, interpretation, and questions.
5. Run `npm run kb:export`.
6. Run `npm run kb:validate`.
7. Run `npm run kb:audit`.

## Allowed Note Types

- `chapter_note`
- `concept_note`
- `reading_reflection`
- `method_note`
- `comparison_note`
- `project_application_note`

## Status Values

- `draft`
- `review_needed`
- `accepted_user_note`
- `rejected`
