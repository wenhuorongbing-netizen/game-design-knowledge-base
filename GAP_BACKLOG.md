# Gap Backlog

## P0 Re-Review Status

Date: 2026-04-27

P0 verdict: PASS. All previous P0 items are accepted as resolved. Remaining work is P1/P2 hardening only.

Note: `50-game-design-masters-kb/raw/private-library/extract-manifest.json` still contains stale paths to removed extracted artifact names. It does not contain body text, preview text, sample section text, or quotes, so it is not a P0 blocker. Clean it during P1 legacy cleanup if desired.

## Phase 1 Content Review Status

Date: 2026-04-27

Phase 1 content verdict: PASS_WITH_WARNINGS.

Minimum content targets are met or exceeded: 19 works, 19 dossier shells, 109 concept cards, 104 lenses, 20 workflow packs, 85 exercises, 164 claims, and current structured exports. No Phase 2 expansion should begin until P1 hardening reduces validation warnings and normalizes schemas/domains.

Next exact task: `continue-kb-p1-hardening`.

Repository boundary update: `D:\Game\FOTN\knowledge` is now the standalone knowledgebase repository root. Parent-level `founder-of-the-north/` is out of scope.

## P0 Source Governance

| gap_id | severity | title | affected_files | required_fix | acceptance_criteria | suggested_prompt |
|---|---|---|---|---|---|---|
| GAP-P0-001 | P0 | Remove legacy extracted high-risk body text | `50-game-design-masters-kb/raw/private-library/extracted/*.json` | completed | No `preview_text` or `sample_sections.text` from high-risk files remains | done |
| GAP-P0-002 | P0 | Regenerate unsafe portal data | `kb-portal/data.js`, `content.js` | completed | Portal contains no private extracted source text or high-risk file links | done |
| GAP-P0-003 | P0 | Disable unsafe private-book extraction | `kb-tools/extract_private_book_artifacts.py`, `.mjs` | completed | Build cannot extract high-risk body text without sidecar | done |
| GAP-P0-004 | P0 | Add repo-wide legal scan | `tools/validate_kb/validate_kb.js` | completed | Validation fails on legacy violations; current run has 0 P0 | done |

## P0 Direction Correction

| gap_id | severity | title | affected_files | required_fix | acceptance_criteria | suggested_prompt |
|---|---|---|---|---|---|---|
| GAP-P0-005 | P0 | Define accepted release boundary | root structure | completed by creating canonical root `/kb`; full README deferred to P1 | Review can distinguish canonical KB from legacy/game files | done |

## P0 Schema/Validation

| gap_id | severity | title | affected_files | required_fix | acceptance_criteria | suggested_prompt |
|---|---|---|---|---|---|---|
| GAP-P0-006 | P0 | Prevent unsafe search excerpts | importer/exporter and portal data | completed for P0 safe portal/export validation | search exports contain safe text only | done |

## P1 Content Structure

| gap_id | severity | title | affected_files | required_fix | acceptance_criteria | suggested_prompt |
|---|---|---|---|---|---|---|
| GAP-P1-001 | P1 | Add root KB README | root | Explain canonical KB path, scope, commands, exclusions | Root opens as KB project | done |
| GAP-P1-002 | P1 | Normalize domain vocabulary | ontology and exports | Add alias map and migration | One canonical domain set in exports | `continue-kb-p1-hardening` |
| GAP-P1-003 | P1 | Fix placeholder card READMEs | card folders | Move or add frontmatter | 0 missing frontmatter/source_basis/confidence | `continue-kb-p1-hardening` |

## P1 Card/Lens/Workflow Completion

| gap_id | severity | title | affected_files | required_fix | acceptance_criteria | suggested_prompt |
|---|---|---|---|---|---|---|
| GAP-P1-004 | P1 | Resolve 41 card related-work warnings | `validation_issues.json` | Add related_works or exemption type | 0 unresolved warnings | `continue-kb-p1-hardening` |
| GAP-P1-005 | P1 | Add evidence to top cards | concept/framework cards | Attach user notes/legal sources | Top 20 cards have evidence refs | wait for user legal notes |
| GAP-P1-006 | P1 | Add project overlay examples | `09_project_overlays` | Add general sanitized examples | Workflows show applied use | `continue-kb-p1-hardening` |

## P1 Coverage

| gap_id | severity | title | affected_files | required_fix | acceptance_criteria | suggested_prompt |
|---|---|---|---|---|---|---|
| GAP-P1-007 | P1 | Add legal sidecars | `01_sources` | User supplies sidecars | At least one work allowed for full processing | user action |
| GAP-P1-008 | P1 | Add official metadata refs | works/sources | Add official source URLs and metadata records | Core works have official metadata | `continue-kb-p1-hardening` |

## P2 Search/Graph/Export Polish

| gap_id | severity | title | affected_files | required_fix | acceptance_criteria | suggested_prompt |
|---|---|---|---|---|---|---|
| GAP-P2-001 | P2 | Add graph QA | import/export | Report orphan nodes and invalid relation density | Graph QA report exists | `continue-review` |
| GAP-P2-002 | P2 | Tighten JSON schemas | schemas | Set stricter required fields | Bad fixtures fail validation | `continue-review` |
| GAP-P2-003 | P2 | Add CI-style validation docs | docs/tools | Document exact commands | Maintainer can validate locally | `continue-review` |
