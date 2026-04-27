# User Manual Quotes

Status: canonical evidence intake folder for short user-provided quotes.

This folder is for short quotes explicitly supplied by the user. The agent must not extract quotes from PDF, EPUB, archive, scan, or high-risk source files.

## Rules

- A UserManualQuote must use `source_basis: user_manual_quote`.
- Quotes must be explicitly user-provided.
- Quotes must not be generated from source-body extraction.
- Quotes must include `quote_length_words`.
- Quotes over 80 words fail validation.
- Quotes over 40 words should be reviewed before use.
- A quote from a high-risk source needs sidecar review before strong or verified use.

## How To Add A Quote

1. Copy `user_manual_quote_template.md`.
2. Rename the copy to a stable ID, for example `quote-game-feel-short-control-definition.md`.
3. Fill `quote_id`, `work_id`, `source_document_id`, and optional `sidecar_id`.
4. Paste only the short quote explicitly supplied by the user.
5. Count words and set `quote_length_words`.
6. Set `user_provided: true`.
7. Keep `automated_extraction: false` and `generated_from_source_body: false`.
8. Run `npm run kb:export`.
9. Run `npm run kb:validate`.
10. Run `npm run kb:audit`.

## Status Values

- `draft`
- `accepted_user_quote`
- `needs_review`
- `rejected`
