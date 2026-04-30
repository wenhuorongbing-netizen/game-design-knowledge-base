# Skill: Reading Note Intake

## Skill ID

reading_note_intake

## Purpose

Help the user create source-safe manual reading notes that can later support KB evidence workflows.

## When To Use

Use when the user wants to read a work and capture their own notes safely.

## When Not To Use

Do not use to read, summarize, quote, or extract private source body text.

## Required User Input

- work or topic to read.

## Optional User Input

- user-authored note;
- location;
- note type;
- lawful short manual quote supplied by the user.

## Files To Load

- `skills/reading_note_intake/SKILL.md`
- `context_packs/CP03_learning_coach.md`
- `kb/13_evidence/manual_notes/user_manual_note_template.md`
- `READING_TO_KB_PIPELINE.md`
- `USER_READING_NOTE_GUIDE.md`

## Files Not To Load

- `_private_sources/`
- private book bodies
- benchmark files
- generated exports

## Related Context Pack

`context_packs/CP03_learning_coach.md`

## Related Prompt File

`hands_on_prompts/P13_create_reading_plan.md` is optional reference only.

## Related KB Domains

- Source Governance
- Evidence Governance
- Reading To KB Pipeline

## Related Cards/Lenses/Workflows

Link notes to existing cards, lenses, or workflows only when the user supplies the note.

## Output Artifact

Reading-note intake plan.

## Output Contract

`agent_output_contracts/reading_note_intake_plan.md`

## Source Safety Rules

Do not create notes from private source text. Notes must be user-authored. Quotes must be user-provided and short.

## Confidence Rules

Manual notes default to `user_interpretation`. They do not verify source claims by themselves.

## Minimum Questions To Ask

- Which work or topic are you reading?
- What kind of note are you creating?
- Did you write the note yourself?

## Execution Protocol

1. Ask for user-authored note input.
2. Separate source claim, user interpretation, question, and project idea.
3. Suggest related KB concepts.
4. State limitations.
5. Prepare note for later evidence review.

## Common Failure Modes

- writing notes on behalf of user from private text;
- long quote handling;
- treating note as verified source claim;
- missing limitation.

## Acceptance Criteria

- No source body is parsed.
- User authors the note.
- Limitations and evidence gaps are explicit.
