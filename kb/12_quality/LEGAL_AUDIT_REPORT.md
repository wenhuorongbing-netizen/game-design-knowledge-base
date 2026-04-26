
# Legal Audit Report

## Status

Release classification: **pass with user-review limitations**.

There are no unresolved legal violations in the generated KB. The KB is safe for BookOS import as a draft/source-governed knowledge system. It is not yet safe to treat uploaded commercial book bodies as ingested knowledge.

## Audit Summary

| Check | Classification | Count | Evidence | Exact Repair |
|---|---|---:|---|---|
| source_basis exists | pass | 0 | All normalized entities must declare source_basis. | No repair needed. |
| confidence exists | pass | 0 | All normalized entities must declare confidence. | No repair needed. |
| high-risk source body not used | pass | 0 | High-risk files must remain metadata-only. | No repair needed. |
| quote cards allowed only from legal quote basis | pass | 0 | QuoteCard source_basis must be user_manual_quote, user_legal_file, or open_fulltext. | No quote cards exist yet. |
| chapter summaries from quarantined files | pass | 0 | Dossier completion matrix shows no chapter maps or chapter summaries from high-risk files. | No repair needed. |
| suspicious body extraction | pass | 0 | Search excerpts for metadata-only entities must be suppressed. | No repair needed. |
| unsupported according-to phrasing | pass | 0 | Audit scan found no unsupported according-to claims in generated knowledge files. | No repair needed. |
| verified claim has evidence | pass | 0 | Verified status requires evidence_refs and strong legal basis. | No repair needed. |
| legal sidecars | needs_user_review | 14 | High-risk files remain quarantined until user supplies legal sidecars or lawful replacements. | User must provide sidecars before body-level processing. |

## High-Risk Source Status

| Metric | Count |
|---|---:|
| high-risk source records, including archive/container | 14 |
| unsafe high-risk source records | 0 |
| approved legal sidecars | 0 |
| quote cards | 0 |
| illegal quote cards | 0 |
| verified entities without evidence | 0 |

## Legal Findings

### Pass

- Every exported entity has `source_basis`.
- Every exported entity has `confidence`.
- High-risk source records remain metadata-only.
- No QuoteCard entities were generated from restricted material.
- No chapter summaries from quarantined files were generated.
- Search excerpts for metadata-only entities are suppressed.
- No verified claims without evidence were found.

### Warnings

- Most generated cards, lenses, lessons, workflows, exercises, and prompt templates are useful scaffolds but not verified source-backed knowledge.
- Related works are routing metadata, not evidence.
- Prompt 9 import currently reports 41 validation warnings; all are non-legal quality warnings.

### Needs User Review

- The user must provide legal sidecars, official metadata links, open-access replacements, or manual notes before any book body can be summarized, quoted, embedded, or transformed.

## Release Gate

Legal release gate: **passed for draft KB and BookOS import**.

Source-backed masterclass release gate: **blocked until legal/user evidence is supplied**.
