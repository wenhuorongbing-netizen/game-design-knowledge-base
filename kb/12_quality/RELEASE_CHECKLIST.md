# Release Checklist

## Release Decision

Status: **draft Game Design Knowledgebase release candidate**.

This repository is release-ready as a source-governed draft KB. It is **not** a verified source-backed masterclass corpus.

## Gate 1: Draft KB Release

| Gate | Status | Evidence |
|---|---|---|
| Game Design Knowledgebase identity is clear | pass | `README.md`, `KB_REBUILD_INSTRUCTION.md`, and `RELEASE_BOUNDARY.md`. |
| no active BookOS build instruction | pass | Legacy instruction moved to `docs/deprecated/BOOKOS_REBUILD_INSTRUCTION_DEPRECATED.md`. |
| authoritative pipeline exists | pass | `package.json` scripts: `kb:export`, `kb:validate`, `kb:coverage`, `kb:audit`. |
| source policy is clear | pass | Governance and legal policy files exist. |
| high-risk sources are quarantined | pass | High-risk records remain `metadata_only_quarantined`. |
| every exported entity has source_basis | pass | `npm run kb:validate` reports 0 P0 issues. |
| every exported entity has confidence | pass | `npm run kb:validate` reports 0 P0 issues. |
| all phase groups have coverage | pass | All 8 phases are represented. |
| all major domains have coverage | pass | Major game design domains are represented. |
| search export exists | pass | `kb/11_import_export/export/search_index.json`. |
| graph export exists | pass | `graph_nodes.json` and `graph_edges.json`. |
| unresolved import warnings | pass | `kb/11_import_export/import_report.md` reports 0 issues. |
| unresolved validation warnings | pass | `VALIDATION_REPORT.md` reports 0 warnings; migration exceptions are explicitly accepted. |

## Gate 2: Verified Source-Backed Masterclass Release

| Gate | Status | Required Evidence |
|---|---|---|
| legal sidecars for commercial files | blocked | User-provided sidecars or lawful replacements. |
| verified source-backed claims | blocked | `evidence_refs` from allowed source bases. |
| book-specific chapter summaries | blocked | `user_legal_file`, `open_fulltext`, `official_metadata`, or user notes. |
| quote cards | blocked | `user_manual_quote`, `open_fulltext`, or `user_legal_file`. |
| project-validated methods | blocked | ProjectOverlay records, design decisions, and playtest logs. |
| production recommendations | blocked | Project or playtest evidence, not draft scaffolds. |

## Non-Negotiable Limits

- Draft cards, lenses, lessons, workflows, and exercises are scaffolds.
- Related works are routing metadata, not evidence.
- High-risk source body text remains out of scope.
- Do not promote `weak`, `unsupported_draft`, or `ai_hypothesis` items to verified without evidence.
