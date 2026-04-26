
# JSON Schema Plan

## Purpose

The JSON schemas define the normalized BookOS import shape. They do not replace the older Prompt 4 to Prompt 8 schemas; they sit above them as the cross-entity data contract.

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

## Canonicality Decision

Markdown is the human canonical layer. JSON exports are generated build artifacts for BookOS, graph tools, and search. If Markdown and JSON disagree, regenerate JSON from Markdown and registries before editing exports by hand.
