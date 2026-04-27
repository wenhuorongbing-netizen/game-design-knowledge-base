# Source Governance Audit

Review date: 2026-04-27

## Verdict

Status: PASS at P0 repository level.

P0 repairs are complete. The canonical root `kb` layer is source-governed, legacy extraction artifacts were removed from release scope, portal data was regenerated from safe exports, and repo-wide validation reports 0 P0 issues.

## New KB Governance Strengths

| Check | Status | Evidence |
|---|---|---|
| source policy exists | pass | `knowledge/kb/00_governance/LEGAL_SOURCE_POLICY.md` |
| source_basis enum exists | pass | `knowledge/kb/00_governance/SOURCE_BASIS_ENUM.md` |
| confidence model exists | pass | `knowledge/kb/00_governance/CONFIDENCE_MODEL.md` |
| high-risk source registry exists | pass | `knowledge/kb/01_sources/sources.json` |
| high-risk sources quarantined in new KB | pass | 14 records use `metadata_only_quarantined` |
| new cards/lenses/workflows avoid verified claims | pass | source_basis/confidence present and mostly weak/unsupported |

## Repository-Level Violations

| ID | Severity | Evidence | Problem | Required Fix |
|---|---|---|---|---|
| SG-P0-001 | P0 | `knowledge/50-game-design-masters-kb/raw/private-library/extracted/*.json` | completed | Extracted JSON files removed; metadata-only removal report created |
| SG-P0-002 | P0 | `knowledge/kb-portal/data.js`, `content.js` | completed | Regenerated from safe root `/kb` search export |
| SG-P0-003 | P0 | `knowledge/kb-tools/extract_private_book_artifacts.py`, `.mjs` | completed | Body extraction disabled pending legal sidecar |
| SG-P0-004 | P0 | `tools/validate_kb/validate_kb.js` | completed | Repo-wide validator added and passing |

## High-Risk Source Records

`knowledge/kb/01_sources/sources.json` records 17 sources:

- 14 high-risk sources: `metadata_only_quarantined`
- 1 low-risk user rebuilding instruction
- 1 low-risk user prompt reference list
- 1 unknown legacy snapshot

This registry is correct, but not sufficient while legacy artifacts remain.

## Acceptance Gate

Repository P0 acceptance now requires continuing to preserve:

- no high-risk body text in tracked/generated JSON/JS/MD
- no portal search index generated from high-risk body text
- no extraction pipeline that can run without legal sidecar approval
- repo-wide validation that fails on `preview_text`, `sample_sections.text`, or long body excerpts from high-risk files

Current command:

```powershell
node .\tools\validate_kb\validate_kb.js
```

Current result: PASS, 0 P0 issues.
