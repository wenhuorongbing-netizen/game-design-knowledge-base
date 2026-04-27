# How To Add Knowledge

Use this guide when adding sources, works, dossiers, cards, lenses, workflows, or exercises.

## Before Adding Anything

Check [WHAT_NOT_TO_TOUCH.md](WHAT_NOT_TO_TOUCH.md).

Every new entity must include:

- `id` or typed ID such as `card_id`, `lens_id`, `workflow_id`
- `entity_type`
- `source_basis`
- `confidence`
- `status`
- `phase_groups`
- `domains`
- `evidence_refs` or explicit evidence gap

## Add A New Source

1. Read [kb/00_governance/LEGAL_SOURCE_POLICY.md](kb/00_governance/LEGAL_SOURCE_POLICY.md).
2. Add source metadata to [kb/01_sources/sources.json](kb/01_sources/sources.json).
3. If the source has high-risk markers, set it to metadata-only quarantine.
4. Do not parse or summarize source body text.
5. If the user has legal access and wants AI processing, attach a sidecar based on [kb/01_sources/source_sidecar_template.yaml](kb/01_sources/source_sidecar_template.yaml).
6. Run `npm run kb:audit` and `npm run kb:validate`.

## Add A New Work

1. Add the intellectual work to [kb/03_works/works.json](kb/03_works/works.json).
2. Update [kb/03_works/WORK_REGISTRY.md](kb/03_works/WORK_REGISTRY.md).
3. Link the work to source documents if they exist.
4. Mark legal status honestly.
5. Do not create a book summary from high-risk source text.

## Add A Concept Card

1. Start from [kb/05_cards/card_template.md](kb/05_cards/card_template.md).
2. Put the file under [kb/05_cards/concept_cards/](kb/05_cards/concept_cards/).
3. Use `entity_type: ConceptCard`.
4. Add `source_basis`, `confidence`, `related_works`, and either `evidence_refs` or `evidence_gap`.
5. Run `npm run kb:validate`.

## Add A Lens

1. Start from [kb/06_lenses/lens_template.md](kb/06_lenses/lens_template.md).
2. Put the file under [kb/06_lenses/cards/](kb/06_lenses/cards/).
3. Use original diagnostic questions.
4. Do not copy proprietary lens wording.
5. Link related cards and works when available.

## Add A Workflow

1. Start from [kb/08_workflows/workflow_pack_template.md](kb/08_workflows/workflow_pack_template.md).
2. Put the file under [kb/08_workflows/packs/](kb/08_workflows/packs/).
3. Include required inputs, step-by-step process, output artifacts, quality checklist, related cards, related lenses, source basis, and confidence.

## After Adding Knowledge

Run:

```powershell
npm run kb:export
npm run kb:validate
```

If source records changed, also run:

```powershell
npm run kb:audit
```
