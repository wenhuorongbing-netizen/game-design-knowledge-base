# High-Risk Source Quarantine

## Quarantine Purpose

This file lists source records that exist in the workspace but cannot be used for body-level knowledge extraction.

Quarantine does not mean deletion. It means:

- the file can be tracked as metadata
- the work can be represented as a candidate
- the user can later attach a legal sidecar
- AI must not summarize, quote, embed, or transform the source body

## Current Quarantine Rule

Set `ingestion_status = metadata_only_quarantined` when a source has:

- `z-library`
- `z-lib`
- `1lib`
- `Anna’s Archive`
- suspicious `Ann` mirror marker
- unreviewed archive/container status
- unknown scan provenance

## Quarantined Sources

| SourceDocument | File | Risk Flags | Current Allowed Use |
|---|---|---|---|
| `src-archive-knowledge-7z` | `knowledge.7z` | archive container, unreviewed material | filename and size only |
| `src-file-advanced-game-design-systems-approach-zlib` | Advanced Game Design PDF | `z-library`, `1lib`, `z-lib` | metadata only |
| `src-file-challenges-for-game-designers-zlib` | Challenges for Game Designers PDF | `z-library`, `1lib`, `z-lib` | metadata only |
| `src-file-characteristics-of-games-ann` | Characteristics of Games EPUB | suspicious `Ann` marker | metadata only |
| `src-file-game-design-workshop-zlib` | Game Design Workshop PDF | `z-library`, `1lib`, `z-lib` | metadata only |
| `src-file-game-feel-epub-zlib` | Game Feel EPUB | `z-library`, `1lib`, `z-lib` | metadata only |
| `src-file-game-feel-pdf-zlib` | Game Feel PDF | `z-library`, `1lib`, `z-lib` | metadata only |
| `src-file-game-mechanics-epub-zlib` | Game Mechanics EPUB | `z-library`, `1lib`, `z-lib` | metadata only |
| `src-file-level-up-epub-zlib` | Level Up EPUB | `z-library`, `1lib`, `z-lib` | metadata only |
| `src-file-play-matters-pdf-zlib` | Play Matters PDF | `z-library`, `1lib`, `z-lib` | metadata only |
| `src-file-aesthetic-of-play-pdf-zlib` | The Aesthetic of Play PDF | `z-library`, `1lib`, `z-lib` | metadata only |
| `src-file-art-of-game-design-annas` | The Art of Game Design PDF | `Anna’s Archive` | metadata only |
| `src-file-game-design-reader-zlib` | The Game Design Reader PDF | `z-library`, `1lib`, `z-lib` | metadata only |
| `src-file-theory-of-fun-zlib` | A Theory of Fun PDF | `z-library`, `1lib`, `z-lib` | metadata only |

## User Note Escape Hatch

The user may still create knowledge from their own notes:

- manual reading notes
- short user-supplied quotes
- personal interpretations
- project applications
- playtest observations

Those notes must be stored as separate governed sources with their own `source_basis`, usually:

- `user_manual_note`
- `user_manual_quote`
- `derived_from_user_note`

## Promotion Requirements

A quarantined source can be promoted only when:

- the user attaches a completed legal sidecar
- the sidecar explicitly permits personal notes and AI processing
- the source record is updated from `metadata_only_quarantined`
- the knowledge object records the new `source_basis`
- any derived object keeps source IDs and confidence visible

## Permanent Restrictions

Even after promotion, do not create long quotations.

If legal permission is ambiguous, keep the source quarantined.
