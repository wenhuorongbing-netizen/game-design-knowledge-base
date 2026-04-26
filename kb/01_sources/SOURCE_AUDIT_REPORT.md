# Source Audit Report

## Prompt 2 Audit Scope

This report upgrades the Prompt 1 intake into a SourceDocument registry.

The audit used only:

- existing governance files
- local file names
- local file types
- local file sizes
- the user-provided Prompt 2 requested work list
- previously created KB scaffolding

No high-risk book body text was read, summarized, quoted, embedded, or transformed.

## Source Model

Prompt 2 separates four layers:

| Layer | Meaning | Current Status |
|---|---|---|
| `SourceDocument` | A concrete file, folder, archive, user note, or external reference handle | Implemented in `sources.json` |
| `GameDesignWork` | An intellectual work such as a book, anthology, framework, paper, or essay | Implemented in `works.json` |
| `SourceRisk` | Legal and reliability assessment | Implemented per SourceDocument |
| `SourceSidecar` | User-provided legal declaration or manual reading note | Template created; none approved yet |

## Summary

| Category | Count | Status |
|---|---:|---|
| Archive containers | 1 | `metadata_only_quarantined` |
| User process notes | 1 | `allowed_full_ingestion` for process use |
| User prompt reference lists | 1 | `allowed_metadata_only` |
| Legacy derived snapshots | 1 | `allowed_metadata_only`, not trusted as verified |
| Direct uploaded book-like files | 13 | `metadata_only_quarantined` |
| Body-ingest approved commercial book files | 0 | blocked |
| Legal source sidecars approved | 0 | pending user |

## High-Risk Rule Applied

Any source file whose filename includes one or more of the following was classified as `risk_level = high` and `ingestion_status = metadata_only_quarantined`:

- `z-library`
- `z-lib`
- `1lib`
- `Anna’s Archive`
- suspicious `Ann` mirror marker
- unreviewed archive/container status

## SourceDocument Inventory

| SourceDocument | Normalized Title | Type | Risk | Ingestion Status | Source Basis | Next Action |
|---|---|---:|---|---|---|---|
| `src-archive-knowledge-7z` | knowledge archive container | `.7z` | high | `metadata_only_quarantined` | `metadata_only` | Provide legal sidecar before internal inspection |
| `src-user-rebuild-instruction` | Knowledge Base Rebuilding Instruction | `.md` | low | `allowed_full_ingestion` | `user_manual_note` | Use as process instruction only |
| `src-user-prompt-2-known-work-list` | Prompt 2 requested known-work reference list | prompt | low | `allowed_metadata_only` | `user_manual_note` | Add official metadata or legal files |
| `src-legacy-kb-snapshot` | legacy game design KB snapshot | folder | unknown | `allowed_metadata_only` | `unsupported_draft` | Re-audit before migration |
| `src-file-advanced-game-design-systems-approach-zlib` | Advanced Game Design: A Systems Approach | `.pdf` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |
| `src-file-challenges-for-game-designers-zlib` | Challenges for Game Designers | `.pdf` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |
| `src-file-characteristics-of-games-ann` | Characteristics of Games | `.epub` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |
| `src-file-game-design-workshop-zlib` | Game Design Workshop | `.pdf` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |
| `src-file-game-feel-epub-zlib` | Game Feel | `.epub` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |
| `src-file-game-feel-pdf-zlib` | Game Feel | `.pdf` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |
| `src-file-game-mechanics-epub-zlib` | Game Mechanics | `.epub` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |
| `src-file-level-up-epub-zlib` | Level Up | `.epub` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |
| `src-file-play-matters-pdf-zlib` | Play Matters | `.pdf` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |
| `src-file-aesthetic-of-play-pdf-zlib` | The Aesthetic of Play | `.pdf` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |
| `src-file-art-of-game-design-annas` | The Art of Game Design | `.pdf` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |
| `src-file-game-design-reader-zlib` | The Game Design Reader | `.pdf` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |
| `src-file-theory-of-fun-zlib` | A Theory of Fun for Game Design | `.pdf` | high | `metadata_only_quarantined` | `metadata_only` | Legal sidecar or lawful replacement |

## Allowed Operations For High-Risk Sources

Current allowed operations:

- `record_metadata`
- `attach_user_notes`
- `attach_manual_quotes`
- `generate_dossier_from_user_notes`
- `generate_cards_from_user_notes`

The last four operations are allowed only when the note or quote is supplied by the user and stored separately from the high-risk file body.

## Prohibited Operations For High-Risk Sources

The following are prohibited until a valid legal sidecar or lawful replacement is supplied:

- body text extraction
- chapter summaries
- source-body quote extraction
- source-body concept cards
- source-body framework cards
- source-body embeddings
- confident claims about internal arguments
- importing legacy generated summaries as verified claims

## Work Registry Handoff

Prompt 2 registered detected and prompt-referenced works in `kb/03_works/works.json`.

The work registry is intentionally metadata-first. Domain and phase mappings are navigation metadata, not claims about book contents.

## Next Step

Prompt 3 should build the ontology layer:

- normalize phase groups
- normalize domain tags
- define entity and relationship constraints
- define how future dossiers, cards, lenses, lessons, workflows, and project overlays link back to source records
- preserve source basis and confidence on every downstream object
