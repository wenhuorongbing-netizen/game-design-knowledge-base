# Confidence Model

Every reusable knowledge object must declare a confidence value.

## Confidence Levels

### `verified`

Use when the claim is directly supported by a lawful, governed source basis and has been checked carefully.

Typical basis:

- `open_fulltext`
- `user_legal_file`
- strong `user_manual_note`

### `strong`

Use when the claim is well-supported by lawful source material but still contains some abstraction or synthesis.

### `medium`

Use when the claim is plausible and structured, but still depends on interpretation or partial evidence.

### `weak`

Use when the claim is mostly identification, intake, title-level inference, or incomplete positioning.

Prompt 1 source records will often be `weak`.

### `unsupported_draft`

Use when the record exists to hold a place in the system but does not yet deserve operational trust.

### `user_interpretation`

Use when the statement mainly reflects the user’s thinking rather than the source’s literal content.

### `ai_hypothesis`

Use when the statement is a bounded AI inference that still needs human or source verification.

## Promotion Rules

A claim may move upward only when:

1. source basis improves
2. the traceability chain is recorded
3. the weaker basis is not hidden

## Demotion Rules

Demote immediately when:

- legal basis becomes uncertain
- the claim was derived from contaminated legacy content
- the source chain cannot be reconstructed
- comparison relied on body text from a high-risk file

## Minimum Acceptable Confidence By Object Type

| Object type | Minimum to publish as reusable |
|---|---:|
| source record | `weak` |
| work intake record | `weak` |
| verified dossier | `strong` |
| quote card | `strong` |
| workflow pack | `medium` |
| project overlay recommendation | `medium` |
| forum thread prompt | `medium` |

## Required Display Rule

Confidence must be visible in:

- card frontmatter
- dossier frontmatter
- workflow frontmatter
- lesson frontmatter
- lens frontmatter

Confidence is not optional metadata.
