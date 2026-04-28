# First Manual Quote Request

Status: OPTIONAL_BLOCKED_PENDING_USER_QUOTE

No lawful short manual quote was supplied in this round. This phase is optional, so the absence of a quote does not block other Evidence Phase 2 work.

## What This Means

- No `UserManualQuote` record was created.
- No quote was extracted from a source file.
- No private PDF or EPUB body was searched.
- No quote was generated, lengthened, rewritten, or paraphrased as source text.
- No `EvidenceRef` record was created from a quote.
- No claim was verified or promoted by quote evidence.

## Required User Input For One Quote

Only submit a quote if it is lawful, short, and explicitly supplied by the user.

| Field | Required | Notes |
|---|---|---|
| quote_id | yes | Stable ID, for example `quote-game-feel-short-response-2026-04-28`. |
| work_id | yes | Must exist in `kb/03_works/works.json`. |
| source_document_id | yes | Must exist in `kb/01_sources/sources.json`. |
| sidecar_id | optional | Required for stronger use if high-risk source review depends on a sidecar. |
| quote_text | yes | The exact short quote supplied by the user. Do not ask the agent to extract it. |
| quote_length_words | yes | Count words in `quote_text`; over 80 words fails validation. |
| location | yes | Page, chapter, section, timestamp, or `not specified`. |
| user_commentary | yes | User's own commentary about the quote. |
| why_it_matters | yes | Why this quote matters for a KB entity or design question. |
| related_concepts | optional | Existing concept IDs. |
| related_cards | optional | Existing card IDs. |
| source_basis | yes | Must be `user_manual_quote`. |
| confidence | yes | Usually `user_interpretation` unless reviewed otherwise. |
| status | yes | `draft`, `accepted_user_quote`, `needs_review`, or `rejected`. |
| user_provided | yes | Must be `true`. |
| auto_extracted | yes | Must be `false`. |
| automated_extraction | yes | Must be `false`. |
| generated_from_source_body | yes | Must be `false`. |
| created_at | yes | ISO date. |
| updated_at | yes | ISO date. |

## Safety Rules

- Do not submit long quotations.
- Do not submit copied chapter-length text.
- Do not ask the agent to find the quote in a book file.
- Do not use a quote to verify a claim unless legal sidecar and reviewer rules are satisfied.
- A quote from a high-risk source can be attached as a user-provided short quote, but it cannot verify a claim while source governance or sidecar review is pending.

## Minimal Submission Format

quote_id:

work_id:

source_document_id:

sidecar_id:

quote_text:

quote_length_words:

location:

user_commentary:

why_it_matters:

related_concepts:

related_cards:

confidence:

status:

user_provided:

auto_extracted:

automated_extraction:

generated_from_source_body:

created_at:

updated_at:

## Next User Prompt

Use this exact intent only if you want to test the optional quote workflow:

submit-first-user-manual-quote

Then provide one lawful short quote using the fields above.
