# Principal Engineering Inventory

Date: 2026-04-30

## Inventory Verdict

Verdict: structurally strong but cognitively heavy.

The repository is a source-governed Game Design Knowledgebase with validation/export tooling, AI runtime guidance, hands-on prompt packs, evidence governance, benchmark scaffolding, and optional static browsing. The main engineering problem is not missing infrastructure. The main problem is entrypoint overload and unproven first-use usability.

## Project Type

Source-governed AI Game Design Master Knowledgebase, documentation runtime, validation tooling, evidence-governance system, benchmark scaffold, and hands-on prompt system.

This is not BookOS, not a reading notes app, not a forum platform, not a personal book tracker, and not a full-stack application.

## Tech Stack

| Area | Current stack |
|---|---|
| Canonical content | Markdown, JSON, JSON Schema |
| Runtime guidance | Markdown prompt/runtime/context-pack documents |
| Validation/export tooling | Node.js CommonJS scripts |
| Source governance | JSON registries, Markdown reports, validator rules |
| Optional browsing | Static HTML/CSS/JS in `kb-portal/` |
| Package manager | npm |
| App framework | none |

## Runtime

The authoritative runtime is file-based:

- humans read entrypoint docs, prompt packs, worked examples, and context packs;
- AI agents load selected runtime/context files;
- maintainers run root npm scripts;
- generated exports are machine-facing artifacts.

There is no required server runtime.

## Package Manager

Package manager: npm.

Root scripts are defined in `package.json`.

## Build Tool

There is no application build step.

Authoritative KB operations are:

| Command | Purpose |
|---|---|
| `npm run kb:export` | regenerate import/export artifacts from canonical KB files |
| `npm run kb:validate` | export and validate the KB safety/structure gates |
| `npm run kb:audit` | run source governance audit and validation |
| `npm run kb:coverage` | update coverage summary |

## Validation Tooling

| Tool | Role | Status |
|---|---|---|
| `tools/kb_importer/import_kb.js` | authoritative exporter/importer | active |
| `tools/validate_kb/validate_kb.js` | authoritative validator | active |
| `tools/kb_quality/source_audit.js` | source-governance audit | active |
| `tools/kb_quality/coverage_summary.js` | coverage summary | active |
| `kb-tools/` | legacy tool experiments | deprecated/guarded |

Current validation result from this baseline run:

| Metric | Value |
|---|---:|
| entities | 859 |
| relationships | 8405 |
| search documents | 737 |
| P0 issues | 0 |
| warnings | 0 |
| accepted exceptions | 0 |

## Test Framework

No formal unit-test framework was found.

Current quality gates are documentation and repository validators:

- `npm run kb:validate`;
- `npm run kb:audit`;
- `npm run kb:coverage`;
- hands-on acceptance tests in Markdown;
- benchmark run scaffolds in Markdown.

Risk: validation is strong for KB structure and source governance, but not a substitute for automated unit tests of validator edge cases or observed user usability testing.

## Lint Or Format Tool

No dedicated lint or format tool was found in `package.json`.

Current formatting discipline is manual Markdown consistency plus validation scripts. Use `git diff --check` before release when whitespace safety matters.

## CI/CD Setup

No `.github/workflows/` directory was found.

Risk: validation is command-driven and local. Future contributors can skip the gates unless CI is added.

## Main Directories

| Directory | Role | Status |
|---|---|---|
| `kb/` | canonical KB content, schemas, governance, exports, evidence system | canonical |
| `tools/` | authoritative validation/export/audit scripts | active tool |
| `hands_on_prompts/` | copy-paste prompts for normal users | user-facing |
| `context_packs/` | minimal AI context packs | AI-facing |
| `USE_CASES/` | use-case routes for non-maintainers | user-facing |
| `worked_examples/` | synthetic demo examples | user-facing |
| `prompts/` | master designer prompt templates | AI/runtime reference |
| `docs/deprecated/` | historical deprecated material | deprecated |
| `kb-portal/` | optional static browser generated from safe exports | optional |
| `kb-tools/` | legacy guarded tools | legacy |
| `50-game-design-masters-kb/` | legacy snapshot | legacy |
| `_private_sources/` | local private source boundary | private/local |

## Main Modules

| Module | Main files or folders | Primary user |
|---|---|---|
| First-use hands-on layer | `USE_THIS_FIRST.md`, `10_MINUTE_QUICKSTART.md`, `USE_CASE_HUB.md` | project owner, learners, designers |
| Prompt packs | `HANDS_ON_PROMPT_LIBRARY.md`, `hands_on_prompts/` | users and AI agents |
| Context packs | `AI_CONTEXT_PACKS.md`, `context_packs/` | AI agents |
| Runtime rules | `AI_MASTER_RUNTIME_PACK.md`, `AI_MASTER_RUNTIME_SAFETY_RULES.md`, `AI_UNCERTAINTY_AND_SOURCE_RULES.md` | AI agents |
| Canonical KB | `kb/` | maintainers and advanced users |
| Evidence governance | `kb/13_evidence/`, source audits | maintainers |
| Export/search/graph data | `kb/11_import_export/export/` | tools and optional portal |
| Benchmarks | `AI_MASTER_BENCHMARK_*` | evaluators |
| Optional portal | `kb-portal/` | reviewers/demo users |

## Entry Points

| Entry point | Role | Audience |
|---|---|---|
| `README.md` | repository identity and master index | all |
| `USE_THIS_FIRST.md` | shortest first-use explanation | normal users |
| `10_MINUTE_QUICKSTART.md` | immediate hands-on route | normal users |
| `HANDS_ON_START_HERE.md` | hands-on alias/index | normal users |
| `USE_CASE_HUB.md` | route from situation to prompt/context/example | normal users |
| `AI_CONTEXT_PACKS.md` | choose minimal AI context | AI agents/users |
| `TOP_20_FILES_TO_KNOW.md` | reduce repo surface | all |
| `KB_REBUILD_INSTRUCTION.md` | active maintenance instruction | maintainers |
| `VALIDATION_REPORT.md` | current validation state | maintainers |
| `SOURCE_GOVERNANCE_AUDIT.md` | current source safety state | maintainers |

## Configuration Files

| File | Role |
|---|---|
| `package.json` | npm command entrypoint |
| `.gitignore` | private/generated/local boundary |
| `.gitattributes` | repository attributes |
| `kb/05_cards/card_schema.json` | card schema |
| `kb/06_lenses/lens_schema.json` | lens schema |
| `kb/08_workflows/workflow_pack_schema.json` | workflow schema |
| `kb/13_evidence/schemas/` | evidence schemas |
| `kb/11_import_export/markdown_frontmatter_schema.md` | Markdown frontmatter standard |

## Documentation Files

The repository has a large root documentation surface. Important groups:

| Group | Examples |
|---|---|
| First-use docs | `USE_THIS_FIRST.md`, `10_MINUTE_QUICKSTART.md`, `HANDS_ON_START_HERE.md` |
| Navigation docs | `SIMPLIFIED_NAVIGATION.md`, `TOP_20_FILES_TO_KNOW.md`, `REPO_FOR_HUMANS.md` |
| Runtime docs | `AI_MASTER_RUNTIME_PACK.md`, `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md` |
| Prompt docs | `HANDS_ON_PROMPT_LIBRARY.md`, `MASTER_PROMPT_LIBRARY.md` |
| Benchmark docs | `AI_MASTER_BENCHMARK_*` |
| Governance docs | `SOURCE_GOVERNANCE_AUDIT.md`, `WHAT_NOT_TO_TOUCH.md` |
| State/reports | `report.md`, `KB_PROJECT_STATE.md`, `VALIDATION_REPORT.md` |

## Generated Files

Generated or tool-updated areas include:

- `kb/11_import_export/export/`;
- `kb/11_import_export/import_report.md`;
- `VALIDATION_REPORT.md`;
- `VALIDATION_REPORT.json`;
- `SOURCE_GOVERNANCE_AUDIT.md`;
- evidence audit reports under `kb/13_evidence/reports/`;
- coverage reports such as `kb/12_quality/COVERAGE_MATRIX.md`.

Rule: do not manually edit generated exports.

## Legacy Or Deprecated Areas

| Area | Status | Risk |
|---|---|---|
| `docs/deprecated/` | deprecated | historical BookOS material can confuse users if opened first |
| `kb-tools/` | legacy/guarded | old tools must not become default pipeline |
| `50-game-design-masters-kb/` | legacy snapshot | large non-canonical reference surface |

## Risky Or Unknown Areas

| Area | Risk |
|---|---|
| root documentation surface | too many plausible start files |
| no CI workflow | local validation can be skipped |
| no formal unit tests | validator regressions may not be caught automatically |
| optional portal | may lag canonical exports |
| benchmark files | many unscored or placeholder outputs can be mistaken for proof |
| `_private_sources/` | private/high-risk source boundary must remain unparsed |
| report history | append-only log is useful but long and hard to scan |

## User-Facing Surfaces

- `USE_THIS_FIRST.md`;
- `10_MINUTE_QUICKSTART.md`;
- `HANDS_ON_START_HERE.md`;
- `USE_CASE_HUB.md`;
- `USE_CASES/`;
- `hands_on_prompts/`;
- `worked_examples/`;
- `NO_PROJECT_START_HERE.md`;
- `TOP_20_FILES_TO_KNOW.md`;
- `WHAT_TO_IGNORE_FIRST.md`;
- `SIMPLIFIED_NAVIGATION.md`.

## AI-Agent-Facing Surfaces

- `AI_CONTEXT_PACKS.md`;
- `context_packs/`;
- `AI_MASTER_RUNTIME_PACK.md`;
- `AI_MASTER_RUNTIME_SAFETY_RULES.md`;
- `AI_UNCERTAINTY_AND_SOURCE_RULES.md`;
- `MASTER_PROBLEM_SOLVER_INDEX.md`;
- `PROBLEM_TO_LENS_MAP.md`;
- `PROBLEM_TO_WORKFLOW_MAP.md`;
- `AI_MASTER_ROUTING_RULES.md`;
- `HANDS_ON_PROMPT_LIBRARY.md`;
- `hands_on_prompts/`.

## Maintainer-Facing Surfaces

- `KB_REBUILD_INSTRUCTION.md`;
- `package.json`;
- `tools/`;
- `VALIDATION_REPORT.md`;
- `SOURCE_GOVERNANCE_AUDIT.md`;
- `KB_PROJECT_STATE.md`;
- `IMPLEMENTATION_LOG.md`;
- `TODO.md`;
- `REPO_MAP.md`;
- `STRUCTURE_MAP.md`;
- `WHAT_NOT_TO_TOUCH.md`;
- `kb/`.

## Baseline Assessment

The engineering baseline is safe but not yet empirically usable. The repository has strong governance and validation, but the first-use experience still depends on users choosing the correct route among many route documents. The next audit should test entrypoint accessibility, link clarity, route duplication, and whether a first-time user can reach a copy-paste prompt without reading maintainer material.
