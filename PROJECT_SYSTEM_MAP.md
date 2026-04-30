# Project System Map

Date: 2026-04-30

## Purpose

This map explains how the repository works as a system so usability, engineering, and source-governance audits can focus on the right layers.

## System Layers

| Layer | Main files/folders | Canonical status | Primary audience |
|---|---|---|---|
| Identity and control | `README.md`, `START_HERE.md`, `KB_REBUILD_INSTRUCTION.md` | active | all |
| Hands-on start layer | `USE_THIS_FIRST.md`, `10_MINUTE_QUICKSTART.md`, `HANDS_ON_START_HERE.md`, `USE_CASE_HUB.md` | active | users |
| Use-case layer | `USE_CASES/`, `hands_on_prompts/`, `worked_examples/` | active | users and AI agents |
| AI context layer | `AI_CONTEXT_PACKS.md`, `context_packs/`, `DO_NOT_LOAD_EVERYTHING.md` | active | AI agents and users |
| AI runtime layer | `AI_MASTER_RUNTIME_PACK.md`, `AI_MASTER_RUNTIME_SAFETY_RULES.md`, `AI_UNCERTAINTY_AND_SOURCE_RULES.md` | active | AI agents |
| Master framework layer | `MASTER_CAPABILITY_MATRIX.md`, `MASTER_DOMAIN_MAP.md`, `MASTER_PROBLEM_SOLVER_INDEX.md` | active reference | AI agents and advanced users |
| Canonical KB layer | `kb/` | canonical | maintainers and advanced users |
| Evidence governance layer | `kb/13_evidence/`, `SOURCE_GOVERNANCE_AUDIT.md` | canonical governance | maintainers |
| Export/validation layer | `tools/`, `kb/11_import_export/`, `VALIDATION_REPORT.md` | active tool/generated | maintainers/tools |
| Benchmark layer | `AI_MASTER_BENCHMARK_*` | evaluation scaffold | evaluators |
| Optional portal | `kb-portal/` | optional/non-canonical | reviewers/demo users |
| Legacy/deprecated layer | `kb-tools/`, `50-game-design-masters-kb/`, `docs/deprecated/` | non-canonical | maintainers only |
| Private source boundary | `_private_sources/` | private/local | project owner only |

## Human First-Use Flow

| Step | File | Outcome |
|---|---|---|
| 1 | `USE_THIS_FIRST.md` | understand what the project is and is not |
| 2 | `10_MINUTE_QUICKSTART.md` | choose a first action |
| 3 | `USE_CASE_HUB.md` | route to a use case |
| 4 | `hands_on_prompts/` | copy a prompt |
| 5 | `context_packs/` | provide minimal AI context if needed |
| 6 | `worked_examples/` | compare output shape against synthetic examples |

## AI Agent Flow

| Step | File | Outcome |
|---|---|---|
| 1 | `AI_CONTEXT_PACKS.md` | choose minimal context |
| 2 | one context pack in `context_packs/` | load task-specific runtime context |
| 3 | `AI_MASTER_RUNTIME_SAFETY_RULES.md` | apply source and evidence guardrails |
| 4 | one prompt file in `hands_on_prompts/` | produce the requested artifact |
| 5 | `AI_UNCERTAINTY_AND_SOURCE_RULES.md` | label assumptions, source_basis, confidence, and evidence gaps |

## Maintainer Flow

| Step | Command/file | Outcome |
|---|---|---|
| 1 | `KB_REBUILD_INSTRUCTION.md` | confirm active maintenance rules |
| 2 | `npm run kb:export` | regenerate exports |
| 3 | `npm run kb:validate` | validate safety and structure |
| 4 | `npm run kb:audit` | run source-governance audit |
| 5 | `VALIDATION_REPORT.md` and `SOURCE_GOVERNANCE_AUDIT.md` | inspect results |
| 6 | `report.md` | append phase activity |

## Source Governance Flow

| Step | File/tool | Rule |
|---|---|---|
| 1 | `kb/01_sources/sources.json` | sources are registry records, not body text |
| 2 | `SOURCE_GOVERNANCE_AUDIT.md` | high-risk sources remain metadata-only |
| 3 | `kb/13_evidence/` | user evidence requires explicit templates/reviews |
| 4 | validator | verified claims require legal EvidenceRefs |
| 5 | prompt/runtime docs | AI must not invent evidence, quotes, notes, sidecars, projects, or playtests |

## Main Data Flow

| Input | Tool | Output |
|---|---|---|
| canonical Markdown/JSON in `kb/` | `tools/kb_importer/import_kb.js` | `kb/11_import_export/export/*.json` |
| canonical KB and exports | `tools/validate_kb/validate_kb.js` | `VALIDATION_REPORT.md`, `VALIDATION_REPORT.json` |
| source/evidence registries | `tools/kb_quality/source_audit.js` | `SOURCE_GOVERNANCE_AUDIT.md`, evidence reports |
| coverage data | `tools/kb_quality/coverage_summary.js` | coverage reports |

## Key System Boundaries

- `kb/` is canonical.
- `tools/` is authoritative.
- `kb-tools/` is legacy.
- `kb-portal/` is optional.
- `docs/deprecated/` is historical.
- `_private_sources/` is not a parsing target.
- generated exports are not edited manually.

## System Risk Summary

The system is source-safe and validator-backed, but it is large. The most important architectural usability rule is progressive disclosure: normal users should start with the hands-on layer, AI agents should start with a context pack, and maintainers should start with the validation toolchain.
