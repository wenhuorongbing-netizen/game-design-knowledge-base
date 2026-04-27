# Evidence Portal Audit

Date: 2026-04-27

## Scope

The static portal is optional and is not the source of truth. This audit checks whether the portal hides draft status or can display evidence status when evidence-aware data is present.

## Findings

- The canonical search export now includes evidence-aware fields.
- The portal detail view has been adjusted to display evidence fields when present.
- Current portal data may be stale because the authoritative root scripts do not regenerate kb-portal/data.js.
- Portal evidence filtering remains a P1 follow-up unless a canonical portal data generator is added.
- The portal must not be used as proof of verification; use EVIDENCE_DASHBOARD.md and search_index.json for authority.

## Field Support

| field | app_display_support | current_data_contains | canonical_export_contains |
| --- | --- | --- | --- |
| source_basis | yes | yes | yes |
| confidence | yes | yes | yes |
| status | yes | yes | yes |
| evidence_status | yes | no | yes |
| related_evidence_refs | yes | no | yes |
| evidence_gap_count | yes | no | yes |
| entity_scope | yes | no | yes |
| promotion_status | yes | no | yes |

## Required P1 Follow-Up

Add an authoritative, non-legacy portal data generator under tools/ if the portal should become more than an optional browser. That generator must read only kb/11_import_export/export/search_index.json and preserve source_basis, confidence, status, evidence_refs, evidence_gap, verified/draft state, and entity_scope.

## Safety Result

No source body text was parsed. No portal page should imply draft content is verified when the evidence-aware fields are present.
