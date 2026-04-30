# Codex Agent Runtime / Skill Pack Deep Audit and Refactor Report

Date: 2026-04-30

## 1. Executive Summary

The repository is structurally mature as a source-governed Game Design Knowledgebase and is now much closer to an operational Codex-consumable Skill Pack. Before this refactor, the largest agent runtime risk was that Codex had no single canonical agent entrypoint and had to infer runtime behavior from human-facing quickstarts, prompt libraries, benchmark reports, and governance files. The largest documentation noise risk remains root-level volume: many correct files exist, but only a few should be visible to an agent during normal use. The largest source-governance risk is still accidental overclaiming from metadata-only or unsupported draft material, not current unsafe source parsing. The largest maintainability risk is validation coverage: current checks prove the live repository passes, but fixture-based regression tests remain limited. The most important Codex usability fix is now implemented: `AGENT_START.md`, skill manifest, router, context loading protocol, source safety rules, skills, and output contracts exist. Normal use no longer depends on benchmark files or human prompt-copy workflows. The top three next improvements are router fixture tests, observed Codex task trials, and tighter generated/current-state report indexing.

## 2. Project Inventory

| Area | Finding |
|---|---|
| Project Type | Source-governed Game Design Knowledgebase and Agent-consumable Skill Pack |
| Tech Stack | Markdown, JSON, JSON Schema, Node.js CommonJS tooling, GitHub Actions, optional static portal |
| Runtime Model | file-system agent reads skill manifest, router, one skill, one contract, and selected context |
| Package Manager | npm |
| Build Tool | none; no app build |
| Validation Tooling | `tools/kb_importer`, `tools/validate_kb`, `tools/kb_quality`, `npm run agent:check` |
| Test Framework | no formal unit framework; validation/agent structural checks exist |
| Lint/Format | no dedicated formatter; `git diff --check` used manually |
| CI/CD | `.github/workflows/kb-quality.yml` runs quality gates |
| Deployment Model | none; optional static portal only |
| Main Directories | `kb/`, `tools/`, `skills/`, `agent_output_contracts/`, `codex_tasks/`, `context_packs/`, `hands_on_prompts/` |
| Generated Files | validation reports, source audit, coverage, import/export artifacts |
| Legacy Areas | `kb-tools/`, `50-game-design-masters-kb/`, `docs/deprecated/` |

## 3. Correct Usage Model

1. User gives Codex a game design task.
2. Codex reads `AGENT_START.md`.
3. Codex reads `AGENT_SKILL_MANIFEST.md` or `AGENT_SKILL_MANIFEST.json`.
4. Codex uses `AGENT_ROUTER.md` to select one skill.
5. Codex loads `skills/<skill_id>/SKILL.md`.
6. Codex loads one output contract from `agent_output_contracts/`.
7. Codex loads one context pack only if useful.
8. Codex loads only relevant KB references.
9. Codex produces the expected artifact.
10. Codex labels assumptions, `source_basis`, confidence, evidence gaps, and next action.

## 4. Current Architecture Assessment

| Item | Assessment |
|---|---|
| Current pattern | Source-governed Knowledgebase plus Agent Skill Pack plus validation/export tooling |
| Evidence | `kb/`, `tools/`, `AGENT_*`, `skills/`, `agent_output_contracts/`, CI workflow |
| Strengths | strong KB model, strong source governance, clear validation commands, now clear agent runtime |
| Weaknesses | large root surface, limited fixture tests, optional portal is separate from agent runtime |
| Hidden risks | agent could still browse root reports unless `AGENT_DO_NOT_LOAD.md` is followed |
| Why not full-stack app | no runtime server, no database requirement, no auth/user accounts, no forum/product workflows |
| Why skill pack | primary consumer is Codex-like agent selecting skills and output artifacts |

## 5. Agent Runtime Architecture Review

| Component | Status | Evidence | Gap |
|---|---|---|---|
| Agent entrypoint | implemented | `AGENT_START.md`, `START_FOR_CODEX.md` | needs real Codex trial |
| Skill manifest | implemented | `AGENT_SKILL_MANIFEST.md`, `.json` | future schema validation useful |
| Router | implemented | `AGENT_ROUTER.md` | fixture tests needed |
| Context protocol | implemented | `AGENT_CONTEXT_LOADING_PROTOCOL.md`, `AGENT_DO_NOT_LOAD.md` | automated full-repo-load detection not possible yet |
| Output contracts | implemented | `AGENT_OUTPUT_CONTRACTS.md`, `agent_output_contracts/` | response-level testing missing |
| Source safety | implemented | `AGENT_SOURCE_SAFETY_RULES.md` | natural-language unsafe detection remains partial |

## 6. Module Boundary and Coupling Review

| Module | Responsibility | Public Interface | Dependencies | Coupling Risk | Cohesion | Recommendation |
|---|---|---|---|---|---:|---|
| Canonical KB | source-governed entities | `kb/` indexes and schemas | none inward from runtime | medium | 4.5 | keep canonical |
| Agent Runtime | route and execute agent tasks | `AGENT_*`, `skills/` | KB references, context packs | low after refactor | 4.0 | add fixtures |
| Skill Pack | executable skill protocols | `skills/*/SKILL.md` | output contracts, context packs | low | 4.0 | keep one skill per folder |
| Output Contracts | artifact shapes | `agent_output_contracts/` | source safety rules | low | 4.0 | add response tests |
| Context Loading | minimal context rules | `AGENT_CONTEXT_LOADING_PROTOCOL.md`, `context_packs/` | skills | low | 4.0 | validate context pack existence |
| Human Onboarding | non-technical start path | `USE_THIS_FIRST.md`, launchpad | prompts/context packs | medium | 3.5 | keep separate from agent runtime |
| Benchmark | evaluator-only testing | `AI_MASTER_BENCHMARK_*` | runtime docs | medium | 3.0 | keep out of normal runtime |
| Tooling | export, validate, audit, coverage | npm scripts, `tools/` | repo files | medium | 3.5 | add fixtures before refactor |
| Governance | source/doc/CI policies | policy docs and reports | validation/audit results | medium | 4.0 | keep current-state index |

## 7. Knowledge Domain / DDD Review

Candidate bounded contexts:

- Canonical KB Context;
- Source Governance Context;
- Evidence Governance Context;
- Agent Runtime Context;
- Skill Pack Context;
- Context Loading Context;
- Output Contract Context;
- Validation/Export Tooling Context;
- Human Onboarding Context;
- Benchmark Context;
- Static Portal Context;
- Legacy/Deprecated Context.

Ubiquitous language terms:

- Work, Source, Concept, Card, Lens, Workflow, Claim, EvidenceRef, LegalSidecar, Skill, ContextPack, OutputContract, Artifact, source_basis, confidence, verified, unsupported_draft.

Domain model issue:

- before this pass, Skill, Prompt, Use Case, Context Pack, and Runtime were adjacent but not cleanly separated.

Suggested skill model:

- Skill = intent, inputs, files_to_load, files_not_to_load, context pack, output contract, source rules, execution protocol, acceptance criteria.

## 8. Directory Structure Review

Current problems:

- root remains large;
- benchmark files are visually prominent;
- human and agent start files previously competed;
- output contracts were not centralized before this pass.

Proposed additive structure now implemented:

- `AGENT_START.md`;
- `AGENT_SKILL_MANIFEST.md`;
- `AGENT_SKILL_MANIFEST.json`;
- `AGENT_ROUTER.md`;
- `AGENT_CONTEXT_LOADING_PROTOCOL.md`;
- `AGENT_SOURCE_SAFETY_RULES.md`;
- `skills/`;
- `agent_output_contracts/`;
- `codex_tasks/`;
- `agent_runtime_tests/`.

Migration steps:

1. Keep canonical KB in `kb/`.
2. Keep tools in `tools/`.
3. Keep human docs active but separate from agent runtime.
4. Mark benchmark/report files as reference, not runtime.
5. Add fixture tests before any directory moves.

Naming rules:

- agent runtime files use `AGENT_*`;
- skills use snake_case folder names;
- output contracts use artifact names;
- Codex task recipes use verb-first names.

## 9. Agent Skill Manifest and Skills Review

Skills created:

- game_idea_review;
- core_experience_definition;
- lens_review;
- meaningful_decision_audit;
- systems_economy_audit;
- game_feel_feedback_audit;
- ui_feedback_audit;
- narrative_mechanic_alignment;
- prototype_plan;
- playtest_plan;
- learning_coach;
- reading_note_intake;
- claim_safety_check;
- pitch_critique.

Skill quality issues:

- structural contract is now present;
- behavioral quality still requires real Codex use and response review.

Context loading issues:

- manifest and skills define minimal load paths;
- future validation should test router fixtures.

Output contract issues:

- contracts exist; response-level contract checking is not yet automated.

## 10. Testing and Validation Review

Current test coverage risk:

- current checks validate structure, not agent response quality.

Critical untested flows:

- router mapping from natural language requests;
- unsafe source request refusal;
- output artifact compliance;
- Codex minimal context loading behavior.

Suggested validation strategy:

- keep `npm run agent:check`;
- add fixture tests for router and unsafe examples;
- add response contract smoke tests after real Codex outputs exist.

Specific test cases are documented in `AGENT_RUNTIME_VALIDATION_PLAN.md`, `AGENT_SKILL_CONTRACT_TEST_PLAN.md`, `AGENT_SMOKE_TESTS.md`, and `AGENT_TASK_FIXTURES.md`.

## 11. CI/CD and Quality Gate Review

Current pipeline:

- GitHub Actions workflow exists and runs KB gates.

Added/updated gate:

- `npm run agent:check`;
- CI runs `npm run agent:check`.

Missing quality gates:

- router fixture automation;
- first-use link check;
- output contract response validation.

## 12. Documentation Governance Review

README gap:

- README now should point agents to `AGENT_START.md` as the canonical agent start.

Agent/human/maintainer separation:

- `START_FOR_CODEX.md`;
- `START_FOR_HUMANS.md`;
- `START_FOR_MAINTAINERS.md`.

Report governance:

- `report.md` remains append-only history;
- `REPORT_INDEX.md` and `CURRENT_STATE.md` are the current-state entrypoints.

Doc lifecycle:

- existing governance was extended conceptually to include active agent runtime, active skill, and active context pack states.

## 13. Security and Source Governance Review

| Risk | Evidence | Severity | Recommendation |
|---|---|---|---|
| private source parsing | `_private_sources/` exists but is ignored; skills prohibit loading | P0 controlled | keep CI private/archive guard |
| fake evidence | skills and contracts prohibit evidence invention | P0 controlled | add unsafe fixture tests |
| metadata as verified | source rules state metadata_only cannot verify | P0 controlled | keep validator/audit |
| benchmark confusion | many benchmark files remain root-visible | P1 | keep `AGENT_DO_NOT_LOAD.md` and report index |
| BookOS/app drift | validator scans active direction drift | P0 controlled | keep validation gate |

## 14. Scorecard

| Dimension | Max | Score | Rationale |
|---|---:|---:|---|
| Agent runtime clarity | 12 | 10 | canonical agent start and runtime docs now exist |
| Skill manifest and routing | 12 | 10 | manifest/router exist; fixtures pending |
| Context loading discipline | 10 | 9 | protocol and do-not-load rules are explicit |
| Knowledge domain modeling | 10 | 9 | strong KB model and skill mapping |
| Source governance and safety | 12 | 12 | validation/audit pass; rules explicit |
| Maintainability | 10 | 8 | governance strong; root still large |
| Testability and validation coverage | 10 | 7 | agent structural check added; fixtures pending |
| CI/CD and automation | 8 | 7 | CI runs agent and KB gates |
| Documentation governance | 8 | 8 | lifecycle/owner/DoD/checklists exist |
| Human usability support | 5 | 4 | strong but empirical trial pending |
| Security and repository hygiene | 3 | 3 | private/archive guards and source rules present |
| Total | 100 | 87 | ready for controlled Codex runtime use |

## 15. Top 10 Highest Impact Issues

| Priority | Issue | Area | Evidence | Impact | Effort | Recommendation |
|---|---|---|---|---|---|---|
| P1 | Router fixtures absent | testing | `AGENT_SMOKE_TESTS.md` is plan only | route regressions possible | medium | add automated router fixture test |
| P1 | Real Codex trial missing | runtime | no observed task outputs | readiness unproven | medium | run controlled Codex tasks |
| P1 | Response contract tests absent | output contracts | contracts are docs only | generic output could pass structurally | medium | add response review checklist/fixtures |
| P1 | Root remains large | docs | many root reports | agent may browse wrong docs | medium | use `AGENT_DO_NOT_LOAD.md` and current-state index |
| P1 | Trust labels still technical | usability | source terms are necessary but heavy | user confusion | low | create plain-language trust label cheat sheet |
| P2 | Importer/validator monolithic | tooling | large Node files | change risk | high | refactor only after fixtures |
| P2 | Portal not agent-runtime aligned | portal | optional static portal | stale UI risk | medium | keep optional |
| P2 | Benchmark visually dominant | QA | many benchmark files | normal use confusion | low | keep benchmark out of runtime |
| P2 | No schema for manifest | skill pack | JSON only structurally checked by script | weaker machine contract | medium | add JSON schema later |
| P2 | Report history huge | governance | `report.md` long | review cost | low | maintain `REPORT_INDEX.md` |

## 16. Quick Wins: 24-48 Hours

| Action | File / Module | Expected Impact | Effort | Owner |
|---|---|---|---|---|
| Run Codex smoke tasks | `codex_tasks/` | prove practical runtime | medium | maintainer |
| Add router fixture script | `tools/kb_quality/` | prevent routing drift | medium | tooling owner |
| Add trust labels page | root docs | reduce source terminology load | low | documentation UX owner |
| Link `AGENT_START.md` from README top | `README.md` | make agent start obvious | low | maintainer |
| Add manifest schema | root/schema | stronger machine contract | medium | tooling owner |

## 17. 1-2 Week Refactoring Plan

| Day/Phase | Work Item | Risk | Dependency | Acceptance Criteria | Success Metric |
|---|---|---|---|---|---|
| Day 1 | run agent smoke tasks | low | current skills | outputs follow contracts | 10/10 smoke tasks routed |
| Day 2 | add router fixture script | medium | smoke fixtures | CI fails on wrong route | fixtures pass |
| Day 3 | add manifest schema | low | manifest stable | JSON validates | schema check passes |
| Day 4 | add response contract checklist | low | output contracts | missing labels flagged | sample responses reviewed |
| Week 2 | add unsafe skill fixtures | medium | fixture harness | unsafe private-source loads fail | P0 fixtures fail as expected |

## 18. 30-60-90 Day Engineering Improvement Roadmap

30 days:

- agent runtime smoke trial;
- router fixtures;
- manifest schema;
- first-use and agent-start link checks.

60 days:

- skill pack completeness review;
- source-safety automation for skill text;
- output contract response checks;
- validator/importer fixture suite.

90 days:

- evidence-backed claim workflow with real user notes if supplied;
- domain pilots only after evidence exists;
- optional portal reads skill metadata if useful.

## 19. Recommended Target Architecture

Target architecture pattern:

- modular repository;
- source-governed canonical KB;
- agent runtime as a thin adapter;
- skills as feature packages;
- output contracts as stable ports;
- tools as validation adapters.

Dependency direction:

- skills depend on output contracts and selected KB references;
- canonical KB does not depend on skills;
- benchmark does not drive normal runtime;
- generated exports are tool outputs, not hand-edited inputs.

Suggested testing strategy:

- structural checks first;
- router fixtures second;
- unsafe fixtures third;
- real Codex output review fourth.

## 20. Final Prioritized Backlog

| Priority | Issue | Area | Recommendation | Impact | Effort | Owner | Metric | Acceptance Criteria |
|---|---|---|---|---|---|---|---|---|
| P1 | real agent use unproven | runtime | run Codex smoke trial | high | medium | maintainer | tasks completed | outputs follow contracts |
| P1 | router not fixture-tested | testing | add route fixture script | high | medium | tooling | fixture pass rate | wrong route fails |
| P1 | response contracts not tested | output | add response contract review | high | medium | AI runtime | missing-label count | label omissions fail |
| P1 | source terms heavy | usability | add trust-label page | medium | low | docs UX | user comprehension | first-use docs link it |
| P2 | manifest no schema | tooling | add JSON schema | medium | medium | tooling | schema pass | manifest validated |
| P2 | root docs noisy | docs | keep current-state/report index | medium | low | maintainer | time to current state | under 1 minute |
| P2 | tool scripts monolithic | tooling | refactor after fixtures | medium | high | tooling | test pass | no behavior change |

## Final Conclusion

This project should prioritize real Codex agent smoke execution next, because it directly affects whether the new skill-pack architecture works outside documentation.
