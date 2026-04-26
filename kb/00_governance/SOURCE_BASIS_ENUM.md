# Source Basis Enum

Every knowledge object must include a `source_basis` field chosen from this controlled enum.

## Enum Values

### `open_fulltext`

Use when the full text is openly licensed or clearly lawful to store and transform.

Examples:

- openly licensed articles
- public PDFs with clear reuse permission

### `official_metadata`

Use when the KB only has official landing-page or publisher metadata.

Examples:

- publisher catalog page
- official course catalog page

This basis supports identification and positioning, not confident body claims.

### `user_legal_file`

Use when the user explicitly provides a lawful file and confirms legal use with a sidecar.

This is the strongest user-file basis for deeper transformation.

### `user_manual_note`

Use when the content is a user-authored note, outline, reaction, or manual reading note.

### `user_manual_quote`

Use when the user explicitly provides a quote and asks it to be tracked.

This does not imply legal right to ingest the whole source.

### `derived_from_user_note`

Use for structured outputs created from user notes.

Examples:

- concept cards derived from a user reading note
- workflow suggestions derived from user reflections

### `derived_from_public_metadata`

Use when the output is synthesized only from public metadata and not from body text.

Examples:

- work positioning inferred from title, subtitle, publisher description, and category

### `metadata_only`

Use when the KB only knows file-level or front-matter-level details and is not allowed to use the body.

This is the default for high-risk uploaded files in Prompt 1.

### `unsupported_draft`

Use for placeholders, speculation, or scaffolding that currently lacks sufficient governed support.

## Required Behaviors

### If `source_basis = metadata_only`

Allowed:

- filename-level intake
- candidate work record
- legal quarantine
- risk logging

Forbidden:

- confident summary
- chapter summary
- quote card
- lesson extraction
- workflow claims that pretend to come from the source

### If `source_basis = official_metadata`

Allowed:

- work identification
- edition detection
- publisher mapping
- tentative positioning

Forbidden:

- internal chapter claims
- body-based quote cards

### If `source_basis = unsupported_draft`

The object must visibly declare that it is draft knowledge and may not be cited as verified course material.

## Required Field In Future Objects

At minimum, every future card, dossier, lens, lesson, workflow, and overlay must declare:

- `source_basis`
- `confidence`
- `source_ids`
- `claim_scope`

## Claim Scope Guidance

Recommended `claim_scope` values:

- `source_stated`
- `user_interpretation`
- `ai_hypothesis`
- `project_application`
- `playtest_observation`

This prevents silent mixing of evidence types.
