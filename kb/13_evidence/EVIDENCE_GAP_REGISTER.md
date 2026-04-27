# Evidence Gap Register

This register tracks missing evidence categories. It does not contain source text.

| Gap ID | Affected Area | Missing Evidence | Required Source Basis | Priority | Notes |
|---|---|---|---|---|---|
| egap-001 | Verified source-backed masterclass gate | Legal sidecars or open/legal notes for priority works | `user_legal_file`, `user_manual_note`, `open_fulltext`, `official_metadata` | high | No claim should be promoted until evidence records exist. |
| egap-002 | Claim graph | EvidenceRefs for any future verified claim | legal EvidenceRef | high | Existing claims remain draft/weak unless evidence review upgrades them. |
| egap-003 | Quote cards | User-supplied short quotes or open/legal quote sources | `user_manual_quote`, `open_fulltext`, `user_legal_file` | high | Do not quote high-risk source files. |
| egap-004 | Book dossiers | Manual notes or legal source sidecars | `user_manual_note`, `user_legal_file` | medium | Current dossier shells remain metadata-safe. |
| egap-005 | Workflow and lens evidence | Playtest/project use records or source-backed notes | `derived_from_user_note`, `user_manual_note` | medium | Keep workflows/lenses as original draft tools until supported. |

## Register Rule

When a missing evidence need is found, add a gap item here or create an EvidenceGap entity in a future evidence batch. Do not invent evidence.
