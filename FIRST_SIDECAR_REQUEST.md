# First LegalSidecar Request

Status: BLOCKED_PENDING_USER_SIDECAR

No LegalSidecar data was supplied in this round. The KB must not create a fake sidecar, infer legal access, approve AI processing, or upgrade any source automatically.

## What This Means

- No sidecar record was created.
- No source body text was parsed.
- No source was summarized.
- No quote was extracted.
- No claim was promoted.
- All high-risk sources remain `metadata_only_quarantined`.

## Required User Input

To create the first LegalSidecar record, provide the following fields for one specific source:

| Field | Required | Notes |
|---|---|---|
| sidecar_id | yes | Stable ID, for example `sidecar-game-feel-owned-copy-2026-04-28`. |
| source_document_id | yes | Must exist in `kb/01_sources/sources.json`. |
| work_id | yes | Must exist in `kb/03_works/works.json`. |
| user_confirms_legal_access | yes | Must be `true` or `false`; do not omit. |
| access_basis | yes | One of the allowed access basis values below. |
| allowed_for_ai_processing | yes | Must be explicit; `user_provided_file` is not permission. |
| allowed_operations | yes | Only operations the user explicitly permits. |
| prohibited_operations | yes | Include blocked operations such as body extraction if not permitted. |
| high_risk_marker_review | yes | State whether high-risk markers exist and how they were reviewed. |
| private_or_public | yes | `private` or `public`. |
| citation_preference | yes | Preferred citation style or private citation rule. |
| user_supplied_notes_path | optional | Only if user notes already exist. |
| user_supplied_quotes_path | optional | Only if user quotes already exist. |
| reviewer | required for approval | Human reviewer name or handle. |
| approval_status | yes | Defaults to `pending_review` unless explicitly reviewed. |
| review_date | required for approval | ISO date if reviewed. |
| expiration_date | optional | Date when permission should be reviewed again. |
| notes | optional | Any constraints or clarifications. |

## Allowed `access_basis` Values

- `owned_physical_copy`
- `purchased_ebook`
- `library_access`
- `official_open_access`
- `publisher_permission`
- `author_permission`
- `public_domain`
- `other`

## Allowed `approval_status` Values

- `pending_review`
- `approved_metadata_only`
- `approved_user_notes_only`
- `approved_full_processing`
- `rejected`
- `expired`

Default must be `pending_review`. Do not use `approved_full_processing` unless the user explicitly provides legal access, AI-processing permission, human reviewer approval, review date, and allowed operations.

## Suggested Fill-In Form

sidecar_id:

source_document_id:

work_id:

user_confirms_legal_access:

access_basis:

allowed_for_ai_processing:

allowed_operations:

prohibited_operations:

high_risk_marker_review:

private_or_public:

citation_preference:

user_supplied_notes_path:

user_supplied_quotes_path:

reviewer:

approval_status:

review_date:

expiration_date:

notes:

## Existing Source Examples

These examples are metadata only. They are not permission to process source bodies:

| Source Document ID | Work ID | Current Risk | Current Ingestion |
|---|---|---|---|
| `src-file-game-feel-pdf-zlib` | `game-feel-a-game-designers-guide-to-virtual-sensation` | high | `metadata_only_quarantined` |
| `src-file-game-feel-epub-zlib` | `game-feel-a-game-designers-guide-to-virtual-sensation` | high | `metadata_only_quarantined` |
| `src-file-game-design-workshop-zlib` | `game-design-workshop-a-playcentric-approach` | high | `metadata_only_quarantined` |
| `src-file-art-of-game-design-annas` | `the-art-of-game-design-a-book-of-lenses` | high | `metadata_only_quarantined` |

## High-Risk Source Rule

If the selected source has high-risk markers, its source status remains `metadata_only_quarantined` unless a LegalSidecar explicitly permits a narrower allowed operation. Even `approved_full_processing` must not be used automatically during this intake step.

## Next User Prompt

Use this exact intent:

submit-first-legal-sidecar-data

Then provide the filled fields above for one selected source.
