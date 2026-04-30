# Engineering Deep Audit Report

Date: 2026-04-30

## 1. Executive Summary

Verdict: CONDITIONALLY_ACCEPTED_WITH_ENGINEERING_IMPROVEMENT_BACKLOG.

The repository is safe and structurally strong for a source-governed Game Design Knowledgebase. Validation passes with 0 P0 issues, 0 warnings, and 0 accepted exceptions. Source governance passes. The project identity is clear.

The main engineering gaps are not app architecture gaps. They are repository operations gaps:

- no CI gate;
- no formal unit tests for importer/validator edge cases;
- very large monolithic tool scripts;
- high documentation surface area at the root;
- optional portal artifacts are large and not clearly automated through the authoritative `/tools` pipeline;
- observed usability evidence is still pending.

Recommended engineering maturity score: 74/100.

## 2. Project Inventory

Observation: The repository contains 1,633 discoverable files, including 1,286 Markdown files, 268 JSON files, 28 JavaScript/MJS files, 308 root Markdown files, 790 files under `kb/`, and 6 authoritative tool files under `tools/`.

Inference: The repository is documentation-heavy and data-heavy. Engineering quality depends on clear boundaries, validators, generation discipline, and progressive disclosure.

Recommendation: Treat this as a governed knowledge system, not an app. Prioritize CI, automated checks, generated-file boundaries, and first-use navigation over framework migration.

## 3. Current Architecture Assessment

Observation: `kb/` is canonical, `tools/` is authoritative, `kb-tools/` is legacy/guarded, `kb-portal/` is optional, and generated exports live under `kb/11_import_export/`.

Inference: The architecture has the right conceptual layers, but they are mostly enforced through documentation and validator logic rather than automation.

Recommendation: Add CI that runs the existing root scripts. Do not introduce a service architecture.

## 4. Module Boundary and Coupling Review

Observation: `tools/kb_importer/import_kb.js` is 2,461 lines and `tools/validate_kb/validate_kb.js` is 1,410 lines. They contain many rule constants, scan logic, report generation, and validation rules in single files.

Inference: The tool boundary is clear at the folder level, but internal module boundaries are weak. Rule changes may create regressions because related concerns are co-located in large files.

Recommendation: Refactor only after adding characterization tests. Split by concern into parser, entity scanner, relationship builder, report writer, source-governance rules, evidence rules, and direction-drift rules.

## 5. Domain and Knowledgebase Modeling Review

Observation: The KB models cards, lenses, workflows, lessons, evidence, source governance, project overlays, playtests, works, sources, and navigation. Validation requires `entity_type`, `source_basis`, `confidence`, and evidence constraints.

Inference: Domain modeling is strong for a draft/source-governed KB. The main risk is not missing domain concepts; it is overexposure of advanced concepts to first-time users.

Recommendation: Keep canonical model depth, but expose it through launchpad, journey, prompt, and context-pack layers.

## 6. Directory Structure Review

Observation: The canonical and legacy boundaries are documented, but legacy and deprecated folders remain visible at the top level. `kb/07_workflows/` is empty while `kb/08_workflows/` is active. `kb/10_forum_templates/` exists even though the project explicitly is not a forum.

Inference: The structure is explainable but still cognitively noisy. Some folder names can trigger old-product confusion even when content is quarantined.

Recommendation: Do not delete content now. Add directory boundary checks and a generated-file/legacy-file manifest. Consider later reversible archival for empty or misleading non-canonical folders.

## 7. Clean Code and Tooling Findings

Observation: Tool scripts are plain Node.js CommonJS with no dependencies, which keeps setup simple. There is no lint, formatter, or test script.

Inference: Low dependency surface is good. Maintainability risk is concentrated in large scripts and lack of automated style/test gates.

Recommendation: Add a minimal `kb:test` or `kb:check` script before refactoring. Avoid adding a heavy framework.

## 8. Testing and Testability Review

Observation: Current gates are `npm run kb:export`, `npm run kb:validate`, `npm run kb:audit`, and `npm run kb:coverage`. There are no fixture-based tests for validator failure cases.

Inference: The repository proves the current dataset passes, but not that the validator catches future regressions.

Recommendation: Add fixture tests for P0 cases: active legacy-direction drift, high-risk full-text processing, verified claim without EvidenceRef, broken relationship, missing entity_type, and unsafe sidecar approval.

## 9. CI/CD and DevOps Review

Observation: No `.github/workflows/` directory exists.

Inference: Local validation can be skipped accidentally. This is the highest-impact engineering automation gap.

Recommendation: Add one GitHub Actions workflow that runs `npm run kb:export`, `npm run kb:validate`, `npm run kb:audit`, `npm run kb:coverage`, and a simple link/check script when available.

## 10. Project Management and Collaboration Review

Observation: There are strong state, backlog, acceptance, and report files. `report.md` is append-only but long and historically out of order in places.

Inference: Project management discipline is strong but difficult to scan. Report volume can hide current state.

Recommendation: Add a small report index or current-state summary rather than rewriting history.

## 11. Documentation Review

Observation: The repository now has `ONE_PAGE_LAUNCHPAD.md`, journey pages, use-case hub, prompt library, context packs, and first-use checklists.

Inference: Documentation is comprehensive. The remaining risk is duplication and competing entrypoints.

Recommendation: Make `ONE_PAGE_LAUNCHPAD.md` and `USE_THIS_FIRST.md` the dominant user-facing pair. Treat other docs as reference.

## 12. Security and Reliability Review

Observation: `.gitignore` blocks PDF, EPUB, MOBI, AZW3, CBZ, CBR, 7z, ZIP, RAR, and private source directory contents except `_private_sources/README.md`. Source governance audit passes with 14 high-risk records quarantined and 0 unsafe high-risk records.

Inference: Source safety is strong. Reliability depends on keeping the audit in CI and keeping legacy tools guarded.

Recommendation: Add CI and pre-release checks. Keep `kb-tools/` legacy-only unless explicitly audited.

## 13. Scorecard

| Dimension | Score / 5 | Notes |
|---|---:|---|
| architecture clarity | 4.0 | clear canonical/tool/legacy boundaries |
| module boundary clarity | 3.0 | folder boundaries good; tool internals monolithic |
| knowledge domain modeling | 4.5 | strong entity/evidence/source model |
| code and tooling readability | 3.0 | simple stack; large scripts reduce readability |
| maintainability | 3.5 | validation strong; root docs large |
| extensibility | 3.5 | model extensible; tests needed before safe refactor |
| testability | 2.5 | command gates exist; fixture tests absent |
| CI/CD and automation | 1.5 | no workflow found |
| project management and collaboration | 3.5 | many reports/backlogs; current state hard to scan |
| documentation and knowledge transfer | 4.0 | strong docs; high surface area |
| security and source governance | 4.5 | strong source boundaries and audits |

Overall engineering maturity score: 74/100.

## 14. Top 10 Highest Impact Issues

1. No CI workflow enforces validation, audit, coverage, or export checks.
2. No formal unit or fixture tests for importer/validator failure modes.
3. `import_kb.js` and `validate_kb.js` are monolithic and high-risk to change.
4. Root documentation surface remains large with 308 Markdown files.
5. Optional portal has large generated/static data files and unclear authoritative regeneration path.
6. Legacy `kb-tools/` remains visible and contains private-source-related scripts even though guarded.
7. Some folder names remain confusing for the current product identity, especially empty `kb/07_workflows/` and `kb/10_forum_templates/`.
8. `report.md` is append-only but hard to scan and has historical section-order blemishes.
9. No automated Markdown link, line-length, or prompt-style check exists.
10. Coverage reports measure structural quantity, not evidence-backed mastery.

## 15. Quick Wins

- Add a GitHub Actions validation workflow.
- Add a `kb:check` script that runs export, validate, audit, and coverage.
- Add fixture tests for the validator's P0 rules.
- Add a report index pointing to the latest phase.
- Add generated-file and legacy-folder manifests.
- Add a simple Markdown link check for first-use docs.

## 16. 1 to 2 Week Improvement Plan

Week 1:

- Add CI with existing scripts.
- Add validator fixture harness.
- Add 5 to 8 P0 validator fixtures.
- Add report index/current-state file.

Week 2:

- Extract importer/validator helper modules only after fixture tests pass.
- Add first-use link check.
- Add generated-file manifest.
- Add portal refresh documentation tied to canonical exports.

## 17. 30 60 90 Day Engineering Roadmap

30 days:

- CI gates active.
- Fixture tests for validator/source governance.
- Report index active.
- First-use link check active.

60 days:

- Importer and validator partially modularized.
- Portal regeneration path documented or moved behind explicit optional tooling.
- Legacy and generated boundaries machine-checkable.

90 days:

- Evidence-weighted coverage and structural coverage clearly separated in automation.
- Observed usability data informs first-use docs.
- Maintainer workflow is reproducible from a fresh checkout.

## 18. Recommended Target Architecture

Target architecture should remain simple:

- canonical KB content in `kb/`;
- authoritative command tools in `tools/`;
- optional static portal as a consumer of generated exports;
- prompt/context/launchpad docs as runtime surfaces;
- legacy tools quarantined;
- CI as the enforcement layer.

Do not introduce microservices, server frameworks, database layers, auth, forum code, or reading-session features.

## 19. Final Prioritized Backlog

| Priority | Item | Owner | Acceptance |
|---|---|---|---|
| P1 | Add CI workflow | maintainer | PRs run export, validate, audit, coverage |
| P1 | Add validator fixture tests | tool maintainer | known-bad fixtures fail for expected P0 rules |
| P1 | Add current report index | docs maintainer | latest state findable in under 1 minute |
| P1 | Add generated-file manifest | maintainer | users know what not to edit manually |
| P2 | Modularize importer/validator | tool maintainer | no behavior change; tests pass |
| P2 | Add first-use link check | docs maintainer | broken links fail check |
| P2 | Clarify portal regeneration path | portal maintainer | portal can be refreshed from canonical exports |
| P2 | Reduce legacy folder confusion | maintainer | non-canonical areas clearly marked or archived |
