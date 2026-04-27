# Repository Inventory

Review date: 2026-04-27
Repository path: `D:\Game\FOTN`

## Root Inventory

| Path | Type | KB Relevance | Review Status |
|---|---|---|---|
| `.git` | git metadata | repository | not reviewed as content |
| `.gitattributes` | git config | low | present |
| `README.md` | root KB entry | high | P0 repaired |
| `RELEASE_BOUNDARY.md` | release boundary | high | P0 repaired |
| `kb` | canonical KB root | primary | P0 repaired |
| `tools/validate_kb` | validation tool | primary | P0 repaired |
| `founder-of-the-north` | directory | out of scope for general KB | game project content |
| `knowledge` | directory | primary KB container | reviewed |

## Knowledge Directory Inventory

| Path | Purpose | Status |
|---|---|---|
| `knowledge/README.md` | local knowledge entry document | partial; statement conflicts with local high-risk files |
| `knowledge/kb` | new source-governed KB core | accepted as draft core |
| `knowledge/tools/kb_importer/import_kb.js` | approved-looking importer/exporter | usable but needs repo-wide source scan |
| `knowledge/kb-tools` | legacy build and extraction tools | mixed; contains unsafe private-book extraction |
| `knowledge/kb-portal` | static portal | blocked due unsafe legacy data |
| `knowledge/50-game-design-masters-kb` | legacy KB/data layer | blocked due high-risk extracted artifacts |
| `docs/deprecated/BOOKOS_REBUILD_INSTRUCTION_DEPRECATED.md` | deprecated BookOS/reading-app instruction | historical context only |
| `knowledge/*.pdf`, `knowledge/*.epub`, `knowledge/*.7z` | local high-risk source files | ignored but physically present; must stay outside release |

## New KB Core Counts

| Area | Count / Evidence |
|---|---:|
| `knowledge/kb` total files | 662 |
| Markdown files | 609 |
| entity markdown files scanned | 496 |
| source records | 17 |
| high-risk source records | 14 |
| works | 19 |
| draft dossiers | 19 |
| concept cards | 109 |
| framework cards | 15 |
| application cards | 10 |
| checklist cards | 15 |
| prompt cards | 15 |
| design lenses | 104 |
| lessons | 84 |
| workflow packs | 20 |
| exercises | 85 |
| prompt templates | 15 |
| exported entities | 856 |
| exported relationships | 8383 |
| search documents | 734 |
| validation warnings | 41 |

## High-Risk Local Source Files

There are 13 local PDF/EPUB source files plus one archive under `knowledge`. They are ignored by `knowledge/.gitignore`, but they are still present in the workspace and referenced by legacy data.

Risk markers observed include:

- `z-library`
- `z-lib`
- `1lib`
- `Anna’s Archive`
- `Ann`

## Release Boundary Recommendation

For P0 acceptance, the release boundary includes:

- `kb`
- `tools/validate_kb`
- root audit/governance files

The release boundary excludes:

- `knowledge/50-game-design-masters-kb/raw/private-library`
- `knowledge/kb-portal` as canonical content source
- unsafe private-book extraction scripts
- local PDF/EPUB/7z files
- `KB_REBUILD_INSTRUCTION.md`
- `docs/deprecated/BOOKOS_REBUILD_INSTRUCTION_DEPRECATED.md`

P0 note: `knowledge/kb-portal/data.js` is now regenerated from safe exports, but `knowledge/kb-portal` remains optional display infrastructure, not canonical KB content.
