# Maintainer Path

Use this path when maintaining the KB structure, validation, exports, or governance.

## Authoritative Commands

Run from repository root:

```powershell
npm run kb:export
npm run kb:validate
npm run kb:coverage
npm run kb:audit
```

Authoritative tooling:

- [tools/kb_importer/import_kb.js](../../tools/kb_importer/import_kb.js)
- [tools/validate_kb/validate_kb.js](../../tools/validate_kb/validate_kb.js)
- [tools/kb_quality/source_audit.js](../../tools/kb_quality/source_audit.js)
- [package.json](../../package.json)

Deprecated tooling:

- [kb-tools README](../../kb-tools/README.md)
- [TOOLCHAIN_AUDIT.md](../../TOOLCHAIN_AUDIT.md)

## How To Add A Card

1. Choose the correct folder under [05_cards](../05_cards/).
2. Start from [card_template.md](../05_cards/card_template.md).
3. Include `entity_type`, `card_id`, `card_type`, `source_basis`, `confidence`, `status`, `phase_groups`, `domains`, and `evidence_refs`.
4. If evidence is missing, use `unsupported_draft`, `weak`, or an explicit `evidence_gap`.
5. Run `npm run kb:validate`.

Do not create a verified card without legal evidence.

## How To Add A Work

1. Add or update the work record in [works.json](../03_works/works.json).
2. Add or update source records in [sources.json](../01_sources/sources.json).
3. If a source is high-risk, keep it metadata-only.
4. Update [WORK_REGISTRY.md](../03_works/WORK_REGISTRY.md).
5. Create a dossier shell under [04_dossiers/draft](../04_dossiers/draft/) only if the work is registered.
6. Run `npm run kb:export` and `npm run kb:validate`.

## How To Update Source Audit

1. Confirm [LEGAL_SOURCE_POLICY.md](../00_governance/LEGAL_SOURCE_POLICY.md).
2. Confirm [SOURCE_BASIS_ENUM.md](../00_governance/SOURCE_BASIS_ENUM.md).
3. Confirm [high_risk_quarantine.md](../01_sources/high_risk_quarantine.md).
4. Run `npm run kb:audit`.
5. Review [SOURCE_GOVERNANCE_AUDIT.md](../../SOURCE_GOVERNANCE_AUDIT.md).

## How To Regenerate Exports

Run:

```powershell
npm run kb:export
```

Generated outputs:

- [all_entities.json](../11_import_export/export/all_entities.json)
- [all_relationships.json](../11_import_export/export/all_relationships.json)
- [search_index.json](../11_import_export/export/search_index.json)
- [graph_nodes.json](../11_import_export/export/graph_nodes.json)
- [graph_edges.json](../11_import_export/export/graph_edges.json)
- [import_report.md](../11_import_export/import_report.md)

## How To Check Validation

Run:

```powershell
npm run kb:validate
```

Read:

- [VALIDATION_REPORT.md](../../VALIDATION_REPORT.md)
- [MIGRATION_EXCEPTIONS_REPORT.md](../../MIGRATION_EXCEPTIONS_REPORT.md)

## What Not To Edit Manually

Do not manually edit generated exports unless the importer itself is broken:

- `kb/11_import_export/export/*.json`
- `kb/11_import_export/import_report.md`
- generated graph/search exports

Fix source Markdown, registries, schemas, or importer logic, then regenerate.

## TODO

- Add maintainer examples for legal sidecar review after the user provides the first approved sidecar.

## Project Overlay Maintenance

Use [Project Application Guide](../09_project_overlays/PROJECT_APPLICATION_GUIDE.md) and [project_overlay_template.md](../09_project_overlays/project_overlay_template.md) when applying general KB assets to a project.

Use [playtest_log_template.md](../09_project_overlays/playtest_log_template.md) for project-specific test records.

Rules:

- Keep project assumptions out of general cards.
- Keep `source_basis`, `confidence`, and `evidence_refs` explicit.
- Treat sample overlay and sample playtest log records as `unsupported_draft` scaffolds, not evidence.
