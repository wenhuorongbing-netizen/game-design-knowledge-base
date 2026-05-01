# knowledge Codex Handoff

Generated for migration on 2026-05-01.

## Project Name

knowledge

## Project Path

D:\Game\FOTN\knowledge

## Project Goal

This repository is one of the six local projects being migrated from the old Codex app machine to a new machine. Use the existing README, source tree, tests, and docs as the source of truth for the detailed product or engineering goal.

## Current Project Status

- Git root: D:/Game/FOTN/knowledge
- Branch at migration: main
- Latest commit at migration: 
- Origin remote at migration: https://github.com/wenhuorongbing-netizen/game-design-knowledge-base.git
- Top-level structure: .git, .gitattributes, .github, .gitignore, _private_sources, 10_MINUTE_QUICKSTART.md, 30_60_90_DAY_IMPROVEMENT_ROADMAP.md, 30_DAY_FOUNDATION_PLAN.md, 30_MINUTE_GUIDED_TOUR.md, 50-game-design-masters-kb, 7_DAY_STARTER_PLAN.md, 90_DAY_GAME_DESIGN_MASTER_PLAN.md, ACCESSIBILITY_AUDIT.md, ACCESSIBILITY_REPAIR_BACKLOG.md, ACCESSIBILITY_USABILITY_ENGINEERING_ACCEPTANCE_REVIEW.md, ACCESSIBILITY_USABILITY_FINAL_SCORECARD.md, ACCESSIBILITY_USABILITY_PHASE_PLAN.md, ACCESSIBLE_FIRST_USE_CHECKLIST.md, ADR_TEMPLATE.md, AGENT_CONTEXT_LOADING_PROTOCOL.md, AGENT_DO_NOT_LOAD.md, AGENT_OUTPUT_CONTRACT_REPAIR_REPORT.md, agent_output_contracts, AGENT_OUTPUT_CONTRACTS.md, AGENT_ROUTER.md, AGENT_ROUTER_REPAIR_REPORT.md, AGENT_RUNTIME_ACCEPTANCE_CRITERIA.md, AGENT_RUNTIME_CI_ACCEPTANCE_CHECKLIST.md, AGENT_RUNTIME_IMPLEMENTATION_REPORT.md, AGENT_RUNTIME_OVERVIEW.md, AGENT_RUNTIME_QUALITY_GATE_PLAN.md, AGENT_RUNTIME_REGRESSION_TEST_PLAN.md, AGENT_RUNTIME_REMAINING_GAP_BACKLOG.md, AGENT_RUNTIME_REPAIR_CHANGELOG.md, agent_runtime_tests, AGENT_RUNTIME_VALIDATION_HARDENING_REPORT.md, AGENT_RUNTIME_VALIDATION_PLAN.md, AGENT_RUNTIME_VALIDATION_REPORT.md, AGENT_SKILL_CONTRACT_TEST_PLAN.md, AGENT_SKILL_MANIFEST.json, AGENT_SKILL_MANIFEST.md, AGENT_SKILL_PACK_FINAL_VERDICT.md, AGENT_SKILL_PACK_READINESS_REPORT.md, AGENT_SKILL_PACK_REFACTOR_PLAN.md, AGENT_SKILL_REPAIR_REPORT.md, AGENT_SMOKE_TESTS.md, AGENT_SOURCE_SAFETY_RULES.md, AGENT_START.md, AGENT_TASK_FIXTURES.md, AGENTS.md, AI_CONTEXT_MINIMAL.md, AI_CONTEXT_MINIMUM.md, AI_CONTEXT_PACKS.md, AI_CONTEXT_PACKS_CHECKLIST.md, AI_CONTEXT_PACKS_USABILITY_REVIEW.md, AI_CONTEXT_RECOMMENDED.md, AI_DESIGN_REVIEW_PROCEDURE.md, AI_GAME_DESIGN_MASTER_DEFINITION.md, AI_MASTER_ACCEPTANCE_TEST.md, AI_MASTER_BEHAVIORAL_ACCEPTANCE_REVIEW.md, AI_MASTER_BEHAVIORAL_READINESS_REPORT.md, AI_MASTER_BENCHMARK_ACCEPTANCE_REVIEW.md, AI_MASTER_BENCHMARK_COLLECTION_PROTOCOL.md, AI_MASTER_BENCHMARK_CONFIDENCE_REPORT.md, AI_MASTER_BENCHMARK_DASHBOARD.md, AI_MASTER_BENCHMARK_EXPANSION_PLAN.md, AI_MASTER_BENCHMARK_HUMAN_REPORT.md, AI_MASTER_BENCHMARK_PHASE_2_PLAN.md, AI_MASTER_BENCHMARK_PREFLIGHT_REPORT.md, AI_MASTER_BENCHMARK_RESPONSE_LOG_TEMPLATE.md, AI_MASTER_BENCHMARK_RUN_001.md, AI_MASTER_BENCHMARK_RUN_001_FAILURE_ANALYSIS.md, AI_MASTER_BENCHMARK_RUN_001_P0_FAILURES.md, AI_MASTER_BENCHMARK_RUN_001_P1_GAPS.md, AI_MASTER_BENCHMARK_RUN_001_P2_IMPROVEMENTS.md, AI_MASTER_BENCHMARK_RUN_001_RESPONSE_STATUS.md, AI_MASTER_BENCHMARK_RUN_001_RESPONSES.md, AI_MASTER_BENCHMARK_RUN_001_SCORE_TABLE.csv, AI_MASTER_BENCHMARK_RUN_001_SCORES.md, AI_MASTER_BENCHMARK_RUN_002.md

## Completed Migration Changes

- Confirmed or initialized Git repository.
- Added or updated .gitignore with migration-safe secret, dependency, build, cache, and archive exclusions.
- Checked tracked filenames for obvious sensitive files and removed only clearly sensitive tracked files from the Git index when needed.
- Added or updated AGENTS.md for Codex continuation rules.
- Generated this handoff document.
- Prepared encrypted private archive staging outside the repository.

## Important Design Decisions

- GitHub should contain normal source, tests, documentation, and templates only.
- Local secrets, credentials, private config, local databases, and Codex state belong only in encrypted archives.
- New-machine work should inspect the current tree before relying on old conversation summaries.
- Existing user work should be preserved; do not use destructive Git or filesystem operations unless explicitly requested.

## Current Unfinished Tasks

- Review git status -sb after restoring the repository and private archive.
- Read README and project-specific docs to decide the next development task.
- Run the verification commands listed below.

## Known Issues Or Risks

- Keyword-only sensitive scan hits found: 43. Values were not printed.

## Files To Read First On The New Machine

- README.md, if present
- AGENTS.md
- docs/codex-handoff.md
- Project build files such as package.json, pom.xml, pyproject.toml, requirements.txt, or equivalent

## Commands To Run First On The New Machine

~~~powershell
git status -sb
git remote -v
git branch --show-current
git rev-parse HEAD
~~~

Install:

~~~powershell
npm ci
~~~

Start:

~~~powershell
npm run dev
~~~

Test:

~~~powershell
npm test
~~~

Lint / typecheck:

~~~powershell
npm run lint
npm run typecheck
~~~

## Git Status Before Migration Commit

~~~text
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
~~~

## Files Kept Out Of GitHub And Put Into The Encrypted Private Package

- No project-private files were selected for the encrypted package at generation time.

## User Preferences And Codex Rules

- Do not commit .env, tokens, passwords, secrets, private keys, auth.json, local Codex state, logs, caches, dependencies, build outputs, or migration archives.
- Do not delete local project files or old Codex state.
- Continue processing other projects if one project fails.
- Make direct, pragmatic code changes when requested; avoid stopping at suggestions unless blocked.
- Summarize failures with concrete paths and next steps.