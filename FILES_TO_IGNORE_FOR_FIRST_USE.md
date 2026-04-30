# Files To Ignore For First Use

If you only want to use the AI Game Design Master framework, ignore most of the repository at first. This file tells you what not to open until you need it.

## Open First

| File | Why |
|---|---|
| `HANDS_ON_START.md` | One-page hands-on start. |
| `USE_CASES/README.md` | Pick a practical use case. |
| `COPY_PASTE_PROMPTS.md` | Copy one prompt. |
| `AI_CONTEXT_MINIMAL.md` | Tell another AI what to load. |
| `WORKED_EXAMPLES.md` | See what useful output looks like. |

## Ignore Unless You Are Maintaining The KB

| Path or file type | Why to ignore first |
|---|---|
| `VALIDATION_REPORT.md` and `VALIDATION_REPORT.json` | Maintainer validation status, not needed to use prompts. |
| `SOURCE_GOVERNANCE_AUDIT.md` | Source audit detail, only needed for verification. |
| `KB_ACCEPTANCE_REVIEW.md` and similar acceptance reviews | QA history, not first-use material. |
| `AI_MASTER_BENCHMARK_*` files | Benchmark infrastructure, not needed for normal design help. |
| `UPDATED_*` files | State snapshots, not first-use material. |
| `kb/11_import_export/export/` | Generated JSON, do not edit manually. |
| `kb/11_import_export/schemas/` | Schema internals for maintainers. |
| `tools/` | Authoritative scripts, only needed when validating or exporting. |
| `kb-tools/` | Deprecated legacy tools; do not run by default. |
| `50-game-design-masters-kb/` | Legacy snapshot; not canonical. |
| `docs/deprecated/` | Historical material only. |
| `_private_sources/` | Private/local source quarantine; do not parse body text. |

## Ignore Unless You Are Verifying Evidence

| Path | Why |
|---|---|
| `kb/13_evidence/sidecars/` | Legal sidecar workflow. |
| `kb/13_evidence/reports/` | Evidence audit reports. |
| `kb/13_evidence/promotion_requests/` | Claim promotion process. |
| `kb/13_evidence/reviews/` | Human review records. |

## Ignore Unless You Want Deep KB Navigation

| Path | Why |
|---|---|
| `kb/05_cards/` | Concept/card library, useful later. |
| `kb/06_lenses/` | Lens bank, useful when you want diagnosis. |
| `kb/08_workflows/` | Workflow packs, useful when you want artifacts. |
| `kb/navigation/` | Role paths, useful after the hands-on layer. |

## Rule

For first use, you should not need more than:

- `HANDS_ON_START.md`
- one page from `USE_CASES/`
- one prompt from `COPY_PASTE_PROMPTS.md`
- `AI_CONTEXT_MINIMAL.md`
- optionally `WORKED_EXAMPLES.md`
