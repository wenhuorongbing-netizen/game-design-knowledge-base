
# JSON Schema Plan

## Purpose

The JSON schemas define the normalized GDKB import shape. They do not replace the older Prompt 4 to Prompt 8 schemas; they sit above them as the cross-entity data contract.

## Generated Schema Files

- `schemas/source_document.schema.json`
- `schemas/work.schema.json`
- `schemas/dossier.schema.json`
- `schemas/card.schema.json`
- `schemas/lens.schema.json`
- `schemas/lesson.schema.json`
- `schemas/exercise.schema.json`
- `schemas/workflow_pack.schema.json`
- `schemas/prompt_template.schema.json`
- `schemas/project_overlay.schema.json`
- `schemas/playtest_log.schema.json`
- `schemas/legal_sidecar.schema.json`
- `schemas/user_manual_note.schema.json`
- `schemas/user_manual_quote.schema.json`
- `schemas/open_source_reference.schema.json`
- `schemas/official_metadata_reference.schema.json`
- `schemas/evidence_ref.schema.json`
- `schemas/claim_promotion_request.schema.json`
- `schemas/claim_promotion_review.schema.json`
- `schemas/evidence_gap.schema.json`
- `schemas/evidence_intake_batch.schema.json`
- `schemas/evidence_audit_report.schema.json`
- `schemas/relationship.schema.json`

## Validation Layers

1. Parse validation: JSON files must parse and Markdown frontmatter must parse.
2. Universal field validation: `id`, `entity_type`, `source_basis`, `confidence`, status, routing, links, dates, and version.
3. Entity-specific validation: required fields per entity type.
4. Governance validation: source basis, confidence, legal status, high-risk source boundaries, and verified claim requirements.
5. Link validation: relationship targets must exist before graph export.
6. Search safety validation: search excerpts must not include prohibited source body text.

## Exact Rules Flagged By Importer

- missing `source_basis`
- missing `confidence`
- unsupported verified claim
- high-risk source used as summary basis
- broken relationship link
- duplicate ID
- missing phase group
- missing domain
- card without related work
- lens without diagnostic questions
- workflow without output artifact
- lesson without exercise
- prompt without guardrails
- evidence_ref missing required field
- evidence_ref broken reference
- metadata_only or unsupported_draft evidence supporting verified claim
- pending sidecar supporting verified claim
- manual quote not explicitly user-provided
- manual quote missing work/source/length
- manual quote too long
- manual quote automated extraction
- manual note not marked user_interpretation
- high-risk source evidence used beyond allowed operations
- promotion request missing reviewer or rationale
- promotion request beyond evidence scope
- promotion review missing reviewer or rationale
- project overlay observation treated as universal doctrine
- playtest observation treated as universal doctrine

## Canonicality Decision

Markdown is the human canonical layer. JSON exports are generated build artifacts for GDKB, graph tools, and search. If Markdown and JSON disagree, regenerate JSON from Markdown and registries before editing exports by hand.
