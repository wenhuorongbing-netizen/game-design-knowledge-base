# Evidence Gap Register

This register tracks missing evidence categories. It does not contain source text.

| Gap ID | Affected Area | Missing Evidence | Required Source Basis | Priority | Notes |
|---|---|---|---|---|---|
| egap-001 | Verified source-backed masterclass gate | Legal sidecars or open/legal notes for priority works | `user_legal_file`, `user_manual_note`, `open_fulltext`, `official_metadata` | high | No claim should be promoted until evidence records exist. |
| egap-002 | Claim graph | EvidenceRefs for any future verified claim | legal EvidenceRef | high | Existing claims remain draft/weak unless evidence review upgrades them. |
| egap-003 | Quote cards | User-supplied short quotes or open/legal quote sources | `user_manual_quote`, `open_fulltext`, `user_legal_file` | high | Do not quote high-risk source files. |
| egap-004 | Book dossiers | Manual notes or legal source sidecars | `user_manual_note`, `user_legal_file` | medium | Current dossier shells remain metadata-safe. |
| egap-005 | Workflow and lens evidence | Playtest/project use records or source-backed notes | `derived_from_user_note`, `user_manual_note` | medium | Keep workflows/lenses as original draft tools until supported. |
| egap-006 | First manual note intake | Three to five user-authored notes for game feel, meaningful decisions, systems, economy, and playtesting | `user_manual_note` | high | `FIRST_MANUAL_NOTES_REQUEST.md` created; no notes supplied yet. |
| egap-007 | Optional first manual quote intake | One lawful short user-provided quote | `user_manual_quote` | optional | `FIRST_MANUAL_QUOTE_REQUEST.md` created; no quote supplied yet. |
| egap-008 | First ProjectOverlay intake | Real project context, design problem, intended player experience, prototype status, relevant KB links, and actual decisions already made | `derived_from_user_note`, `user_manual_note` | high | `FIRST_PROJECT_OVERLAY_REQUEST.md` created; no project context supplied yet. |
| egap-009 | First PlaytestLog intake | Real playtest date, prototype version, participant count/profile summary, test goal, observed facts, optional user-provided participant quotes, tester interpretation, design hypotheses, design decisions, next actions, and limitations | `derived_from_user_note`, `user_manual_note` | high | `FIRST_PLAYTEST_LOG_REQUEST.md` created; no playtest data supplied yet. |

## Register Rule

When a missing evidence need is found, add a gap item here or create an EvidenceGap entity in a future evidence batch. Do not invent evidence.
