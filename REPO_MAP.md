# Repository Map

This map explains the top-level repository structure for first-time users and maintainers.

Status values: `canonical`, `generated`, `optional`, `tool`, `legacy`, `deprecated`, `private/local`, `do_not_touch`.

| Path | Role | Status | Who uses it | Touch? | Notes |
|---|---|---|---|---|---|
| `.git/` | Git repository metadata | do_not_touch | Git only | No | Do not edit manually. |
| `kb/` | Canonical Game Design Knowledgebase content | canonical | learners, designers, researchers, maintainers | Yes, carefully | This is the main knowledge repository. |
| `tools/` | Authoritative validation, import/export, and quality scripts | tool | maintainers | Yes, only for tooling changes | Default commands use this folder. |
| `docs/` | Documentation and deprecated historical material | canonical | maintainers, reviewers | Yes, carefully | Active docs may live here; deprecated content must stay clearly marked. |
| `docs/deprecated/` | Historical non-active instructions | deprecated | reviewers only | Rarely | BookOS material here is not active. |
| `kb-portal/` | Optional static browser surface generated from safe exports | optional | reviewers, demo users | Usually no | Do not treat as source of truth. |
| `kb-tools/` | Deprecated legacy tools for old snapshot/private-source experiments | legacy | maintainers only with explicit opt-in | No by default | Requires `ALLOW_LEGACY_KB_TOOLS=true`; not authoritative. |
| `50-game-design-masters-kb/` | Legacy snapshot from an earlier KB version | legacy | maintainers only | No by default | Quarantined until re-audited; do not use as canonical content. |
| root `*.pdf`, `*.epub`, book files | Private local source materials | private/local | source auditor only | Metadata only | Do not parse, quote, summarize, embed, or transform body text. |
| root control files | Current repository control and review reports | canonical | maintainers, reviewers | Yes, carefully | Examples: `KB_ACCEPTANCE_REVIEW.md`, `GAP_BACKLOG.md`, `KB_PROJECT_STATE.md`. |
| root generated reports | Validator and audit outputs | generated | maintainers, reviewers | No manual edits | Examples: `VALIDATION_REPORT.md`, `VALIDATION_REPORT.json`, `MIGRATION_EXCEPTIONS_REPORT.md`, `SOURCE_GOVERNANCE_AUDIT.md`. Regenerate with `npm run kb:validate` or `npm run kb:audit`. |
| `kb/11_import_export/export/*.json` | Entity, relationship, search, and graph export data | generated | importers, search tools, graph tools | No manual edits | Regenerate with `npm run kb:export`. |
| `STRUCTURE_MAP.md` | Visual repository structure map | canonical | first-time users, maintainers | Yes, carefully | Human navigation only. |
| `STRUCTURE_SIMPLIFICATION_PLAN.md` | Reversible simplification plan | canonical | maintainers, reviewers | Yes, carefully | Planning doc; does not move canonical content. |
| `package.json` | Authoritative command entry point | tool | maintainers | Yes, carefully | Defines `kb:export`, `kb:validate`, `kb:coverage`, `kb:audit`. |
| `.gitignore` | Keeps private/generated clutter out of Git | tool | maintainers | Yes, carefully | Should continue excluding private source files. |

## Fast Rule

If you are unsure, edit only `kb/` Markdown source files, governance files, or root human-entry docs. Do not edit generated exports or legacy folders.
