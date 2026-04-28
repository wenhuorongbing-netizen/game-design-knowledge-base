# Priority Evidence Backlog

This backlog prioritizes what evidence should be added later. It is not evidence by itself.

| Priority | Target | Evidence Needed | Why It Matters | Allowed Source Basis |
|---|---|---|---|---|
| P0 | First manual note batch | Three to five user-authored notes using `FIRST_MANUAL_NOTES_REQUEST.md` | Required before UserManualNote records or EvidenceRefs can be created. | `user_manual_note` |
| P1 | Work registry facts | Official publisher metadata or legal bibliographic records | Stabilizes citations and source audit. | `official_metadata`, `derived_from_public_metadata` |
| P1 | Core concept cards | User notes or open/legal references that support definitions | Prevents draft concepts from sounding verified. | `user_manual_note`, `open_fulltext`, `user_legal_file` |
| P1 | Claim graph | EvidenceRefs and promotion reviews | Required before any verified claim. | legal EvidenceRef |
| P1 | Quote cards | User-supplied short quotes | Enables lawful quote discussion. | `user_manual_quote` |
| P2 | Dossier shells | User chapter notes or legal sidecars | Converts shells into useful research dossiers. | `user_manual_note`, `user_legal_file` |
| P2 | Workflow packs | Project application notes and playtest results | Distinguishes practical validation from theory. | `derived_from_user_note` |
| P2 | Design lenses | Human review notes and project applications | Improves usefulness without pretending source certainty. | `user_manual_note`, `derived_from_user_note` |

## Deferred Until Legal Evidence Exists

- chapter summaries;
- detailed book-derived claims;
- long quotations;
- embeddings from private or high-risk files;
- verified masterclass release.
