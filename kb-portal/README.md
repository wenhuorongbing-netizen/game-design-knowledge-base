# Optional KB Portal

This folder contains an optional static browser surface for the Game Design Knowledgebase.

- Status: optional
- Users: reviewers or demo users
- Edit: usually no
- Updated by: legacy portal generation only; canonical data comes from `kb/11_import_export/export/`

The portal is not the source of truth. If portal data disagrees with `kb/`, trust `kb/` and regenerate safe exports first.

Do not add app features, auth, forums, or reading-session behavior here.

## Evidence Visibility

The portal must not imply draft content is verified. When portal data includes these fields, the detail view displays:

- `source_basis`
- `confidence`
- `status`
- `evidence_status`
- `evidence_refs` / `related_evidence_refs`
- `evidence_gap_count`
- `entity_scope`
- `promotion_status`

Filtering by these evidence fields is a P1 follow-up unless the portal data generator is updated. The canonical search export at `kb/11_import_export/export/search_index.json` is the authoritative source for evidence-aware browsing.
