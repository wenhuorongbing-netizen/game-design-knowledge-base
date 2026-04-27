# Legal Sidecars

Status: canonical evidence-governance workflow.

LegalSidecar records let a human user provide lawful processing permission for one specific SourceDocument.

## Default Rule

Every new sidecar starts as:

- `approval_status: pending_review`
- `allowed_for_ai_processing: false`
- no full-text processing permission

No sidecar should default to `approved_full_processing`.

## How To Create A Sidecar

1. Copy `source_sidecar_template.yaml`.
2. Rename the copy using the source ID, for example `sidecar-src-file-game-feel-pdf.yaml`.
3. Fill `source_document_id` and `work_id`.
4. State the access basis.
5. Keep `approval_status: pending_review` until a human review is complete.
6. Run `npm run kb:export`.
7. Run `npm run kb:validate`.
8. Run `npm run kb:audit`.

## Approval Statuses

| Status | Meaning |
|---|---|
| `pending_review` | Default. No processing permission beyond current source policy. |
| `approved_metadata_only` | Metadata use only. No body text processing. |
| `approved_user_notes_only` | User notes and user-supplied short quotes may be processed. |
| `approved_full_processing` | Full processing is explicitly approved by reviewer. Never default. |
| `rejected` | Permission denied or insufficient. |
| `expired` | Permission must be reviewed again. |

## High-Risk Source Rule

High-risk sources remain `metadata_only_quarantined` unless a sidecar explicitly permits a narrower allowed operation. Existing sources are never upgraded automatically.
