# What To Ignore First

If you are a first-time user, you do not need most repository files.

## Ignore Generated Exports

Ignore:

- `kb/11_import_export/export/`
- generated graph files;
- generated search index files;
- generated import/export JSON.

These are for tools and integrations, not casual use.

## Ignore Audits Not Needed For Casual Use

Ignore until reviewing or maintaining:

- `SOURCE_GOVERNANCE_AUDIT.md`
- `VALIDATION_REPORT.md`
- `MIGRATION_EXCEPTIONS_REPORT.md`
- `KB_ACCEPTANCE_REVIEW.md`
- `REAL_TARGET_AI_BENCHMARK_ACCEPTANCE_REVIEW.md`
- `USABILITY_ACCEPTANCE_REVIEW.md`
- other acceptance, state, and audit reports.

## Ignore Benchmark Internals

Ignore:

- `AI_MASTER_BENCHMARK_*`
- `AI_MASTER_*_SCORES.md`
- `AI_MASTER_*_RAW_OUTPUTS.md`
- benchmark dashboards;
- scoring templates;
- failure audits.

Use these only if you are testing a target AI.

## Ignore Schema Files

Ignore:

- `kb/11_import_export/schemas/`
- `kb/05_cards/card_schema.json`
- `kb/06_lenses/lens_schema.json`
- workflow and evidence schema files.

Use these only when editing validation or data models.

## Ignore Legacy Folders

Ignore:

- `kb-tools/`
- `50-game-design-masters-kb/`
- legacy snapshots or deprecated build scripts.

Do not run legacy tools unless explicitly instructed.

## Ignore Evidence Folders Unless Doing Evidence Intake

Ignore until you are creating real evidence:

- `kb/13_evidence/sidecars/`
- `kb/13_evidence/manual_notes/`
- `kb/13_evidence/manual_quotes/`
- `kb/13_evidence/promotion_requests/`
- evidence audit reports.

## Ignore Private Source Folders

Ignore:

- `_private_sources/`

Do not parse, summarize, quote, embed, or transform private or high-risk source body text.

## Ignore Deprecated Material

Ignore:

- `docs/deprecated/`

Historical material is not active instruction.

## Use These Instead

Start with:

- [USE_THIS_FIRST.md](USE_THIS_FIRST.md)
- [10_MINUTE_QUICKSTART.md](10_MINUTE_QUICKSTART.md)
- [COPY_PASTE_PROMPTS.md](COPY_PASTE_PROMPTS.md)
- [USE_CASES/README.md](USE_CASES/README.md)
- [WORKED_EXAMPLES.md](WORKED_EXAMPLES.md)
