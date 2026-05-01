# Codex Handoff - Game Design Knowledgebase

Date: 2026-05-01

Repository path in current session: `D:\Game\FOTN\knowledge`

## 1. Project Goal And Current State

This repository is Game Design Knowledgebase.

It is an agent-consumable, source-governed Game Design Knowledgebase and Skill Pack for Codex-like file-system agents.

It is not an app, not BookOS, not a reading notes app, not a forum, and not a full-stack product.

Primary runtime model:

1. User gives Codex a game design task.
2. Codex reads `AGENT_START.md`.
3. Codex reads `AGENT_SKILL_MANIFEST.md` or `AGENT_SKILL_MANIFEST.json`.
4. Codex uses `AGENT_ROUTER.md`.
5. Codex loads one skill file from `skills/`.
6. Codex loads the smallest useful context pack.
7. Codex produces a source-safe artifact.
8. Codex labels assumptions, source_basis, confidence, evidence gaps, and next action.
9. Codex refuses unsafe source requests.

Current phase just completed: User-Supplied Game Idea Execution Phase.

Final status: `BLOCKED_PENDING_USER_IDEA`.

Reason: `first_real_game_idea_workflow/USER_GAME_IDEA_PACKET.md` is missing. The user has repeatedly issued workflow prompts, but has not supplied a real game idea packet with the required fields.

Final verdicts:

- First real game idea workflow: `BLOCKED_PENDING_USER_IDEA`
- Agent runtime field usefulness: `CONDITIONALLY_ACCEPTED`
- Artifact quality: `REJECTED`
- Source safety: `ACCEPTED`
- Verified source-backed masterclass: `BLOCKED_PENDING_USER_EVIDENCE`

Last full quality gate run: `npm run kb:check`, PASS.

Validation state:

- 0 P0 issues
- 0 warnings
- source governance audit PASS
- verified claims remain 0

## 2. Completed Changes

Agent runtime and skill-pack layer exists:

- `AGENT_START.md`
- `AGENT_RUNTIME_OVERVIEW.md`
- `AGENT_SKILL_MANIFEST.md`
- `AGENT_SKILL_MANIFEST.json`
- `AGENT_ROUTER.md`
- `AGENT_CONTEXT_LOADING_PROTOCOL.md`
- `AGENT_OUTPUT_CONTRACTS.md`
- `AGENT_SOURCE_SAFETY_RULES.md`
- `AGENT_DO_NOT_LOAD.md`
- `CODEX_USAGE_GUIDE.md`
- `skills/`
- `agent_output_contracts/`
- `codex_tasks/`
- `agent_runtime_tests/`

Codex runtime hardening was completed before this handoff:

- runtime truth sync
- router fixtures
- smoke task pack
- smoke run execution
- contract compliance review
- failure analysis
- runtime repairs
- validation hardening
- regression smoke run
- final Codex runtime acceptance review

Hands-on and usability layers were created earlier:

- `USE_THIS_FIRST.md`
- `ONE_PAGE_LAUNCHPAD.md`
- `USE_TODAY_KIT.md`
- `HANDS_ON_PROMPT_LIBRARY.md`
- `context_packs/`
- `worked_examples/`
- `NO_PROJECT_START_HERE.md`
- `SIMPLIFIED_NAVIGATION.md`

The current game-idea workflow folder exists:

- `first_real_game_idea_workflow/GAME_IDEA_INTAKE_REQUEST.md`
- `first_real_game_idea_workflow/GAME_IDEA_PACKET_TEMPLATE.md`
- `first_real_game_idea_workflow/WORKFLOW_STATUS.md`
- `first_real_game_idea_workflow/ROUTING_DECISION.md`
- `first_real_game_idea_workflow/CONTEXT_LOADING_PLAN.md`
- `first_real_game_idea_workflow/ARTIFACT_01_*`
- `first_real_game_idea_workflow/ARTIFACT_02_*`
- `first_real_game_idea_workflow/ARTIFACT_03_*`
- `first_real_game_idea_workflow/ARTIFACT_04_*`
- `first_real_game_idea_workflow/ARTIFACT_05_*`
- `first_real_game_idea_workflow/ARTIFACT_06_*`
- `first_real_game_idea_workflow/WORKFLOW_RUNTIME_REVIEW.md`
- `first_real_game_idea_workflow/OUTPUT_CONTRACT_COMPLIANCE_REVIEW.md`
- `first_real_game_idea_workflow/SOURCE_SAFETY_REVIEW.md`
- `first_real_game_idea_workflow/CONTEXT_LOADING_REVIEW.md`
- `first_real_game_idea_workflow/USER_USEFULNESS_REVIEW.md`
- `first_real_game_idea_workflow/RUNTIME_REPAIR_BACKLOG.md`

Important final acceptance files were updated:

- `FIRST_REAL_GAME_IDEA_WORKFLOW_ACCEPTANCE_REVIEW.md`
- `FIRST_REAL_GAME_IDEA_WORKFLOW_FINAL_REPORT.md`
- `FIRST_REAL_GAME_IDEA_ARTIFACT_INDEX.md`
- `FIRST_REAL_GAME_IDEA_REMAINING_GAPS.md`
- `NEXT_PHASE_DECISION_AFTER_FIRST_GAME_IDEA.md`
- `UPDATED_KB_PROJECT_STATE.md`
- `UPDATED_NEXT_DEVELOPMENT_PLAN.md`
- `UPDATED_TODO.md`
- `UPDATED_IMPLEMENTATION_LOG.md`
- `report.md`

All Artifacts 01 through 06 are intentionally blocked records, not real game design outputs.

## 3. Key Design Decisions And Reasons

Decision: Treat the repository as an Agent Skill Pack, not an app.

Reason: The product goal is for Codex or another file-system agent to consume repository files, route tasks to skills, load minimal context, and produce game design artifacts. Building app features would create direction drift.

Decision: `AGENT_START.md` is the canonical Codex entrypoint.

Reason: Human onboarding and agent runtime were previously mixed. Codex needs one obvious first file.

Decision: Use manifest, router, skill files, context packs, and output contracts as the runtime architecture.

Reason: This creates a high-cohesion, low-coupling skill-pack model. Normal use no longer depends on benchmark workflows or human copy-paste prompt files.

Decision: Missing user idea packet blocks all artifact generation.

Reason: The user did not supply idea summary, desired player experience, or current uncertainty. Generating artifacts without these would fabricate user intent and project facts.

Decision: Keep `source_basis` as `unsupported_draft` and confidence weak or not applicable for blocked artifacts.

Reason: No legal evidence, user notes, playtest logs, EvidenceRefs, or validated claims exist.

Decision: Preserve blocked artifact records during field hardening.

Reason: They document runtime behavior and source safety. However, this is noisy for normal user use, so a future normal-use stop rule is recommended.

Decision: The next phase is `wait for user evidence`.

Reason: No game idea packet, user notes, playtest logs, project facts, or evidence exist. Any further artifact generation would add noise or risk fabrication.

## 4. Unfinished Tasks

Required before any real game design artifact:

- Create `first_real_game_idea_workflow/USER_GAME_IDEA_PACKET.md` from user-supplied content.
- Required fields are idea summary, desired player experience, and current uncertainty or concern.
- Optional fields are target player, genre, platform, constraints, player actions, rules, resources, decisions, prototype question, and test goal.

Runtime improvement tasks still open:

- Add a normal-use stop rule after intake if `USER_GAME_IDEA_PACKET.md` is missing.
- Add a prompt-run suffix or run index for repeated `report.md` sections.
- Add a shared blocked-artifact template if blocked records remain useful.
- Add a lightweight checker for first-real-game-idea workflow status.
- Consolidate repeated next-user-input prompts into one user-facing request.

Evidence tasks still blocked:

- No user reading notes exist.
- No legal sidecars exist.
- No manual quotes exist.
- No project overlay exists.
- No playtest log exists.
- No verified claims can be created.

## 5. Current Problems, Risks, And Pitfalls

Main blocker:

- `first_real_game_idea_workflow/USER_GAME_IDEA_PACKET.md` is missing.

P0 source-safety issues:

- None currently found.

P1 runtime blocker:

- Missing packet blocks all real artifacts.

P2 quality gaps:

- Too many blocked artifacts exist for normal user use.
- `report.md` has repeated prompt sections from repeated prompt runs.
- Blocked artifact records use similar but not perfectly uniform schema.
- Workflow status checking is manual.

P3 polish:

- Next prompt is repeated across many files.

Important pitfall:

- Do not treat blocked artifact files as completed design artifacts.

Important pitfall:

- Do not infer a game idea from the user typing workflow prompts such as `build` or `BEGIN PROMPT`.

Important pitfall:

- Running validation/export commands changes generated files under `kb/11_import_export/`, `VALIDATION_REPORT.*`, audit reports, and `COVERAGE_MATRIX.md`.

Current dirty working tree:

- Many files are modified from the recent workflow and validation runs.
- Do not reset or revert unless the user explicitly asks.

## 6. Files To Check First On The Next Machine

Start with these files:

- `AGENT_START.md`
- `AGENT_SKILL_MANIFEST.md`
- `AGENT_SKILL_MANIFEST.json`
- `AGENT_ROUTER.md`
- `AGENT_CONTEXT_LOADING_PROTOCOL.md`
- `AGENT_SOURCE_SAFETY_RULES.md`
- `AGENT_OUTPUT_CONTRACTS.md`
- `CODEX_USAGE_GUIDE.md`

Then check current project state:

- `FIRST_REAL_GAME_IDEA_WORKFLOW_ACCEPTANCE_REVIEW.md`
- `FIRST_REAL_GAME_IDEA_WORKFLOW_FINAL_REPORT.md`
- `FIRST_REAL_GAME_IDEA_ARTIFACT_INDEX.md`
- `FIRST_REAL_GAME_IDEA_REMAINING_GAPS.md`
- `NEXT_PHASE_DECISION_AFTER_FIRST_GAME_IDEA.md`
- `UPDATED_KB_PROJECT_STATE.md`
- `UPDATED_NEXT_DEVELOPMENT_PLAN.md`
- `UPDATED_TODO.md`
- `UPDATED_IMPLEMENTATION_LOG.md`

Then check workflow state:

- `first_real_game_idea_workflow/WORKFLOW_STATUS.md`
- `first_real_game_idea_workflow/GAME_IDEA_INTAKE_REQUEST.md`
- `first_real_game_idea_workflow/GAME_IDEA_PACKET_TEMPLATE.md`
- `first_real_game_idea_workflow/USER_GAME_IDEA_PACKET.md`
- `first_real_game_idea_workflow/WORKFLOW_RUNTIME_REVIEW.md`
- `first_real_game_idea_workflow/RUNTIME_REPAIR_BACKLOG.md`

Then check validation and governance:

- `VALIDATION_REPORT.md`
- `SOURCE_GOVERNANCE_AUDIT.md`
- `COVERAGE_MATRIX.md`
- `report.md`

If the user supplies a game idea, inspect:

- `skills/game_idea_review/SKILL.md`
- `agent_output_contracts/one_page_concept_memo.md`
- `context_packs/CP02_game_idea_review.md`

## 7. Recommended Next Commands

Initial orientation:

- `pwd`
- `git status --short`
- `git branch --show-current`
- `git log --oneline -n 10`

Runtime and KB health checks:

- `npm run agent:runtime-check`
- `npm run kb:validate`
- `npm run kb:audit`
- `npm run kb:check`

If the user supplies a valid idea packet:

- create or update `first_real_game_idea_workflow/USER_GAME_IDEA_PACKET.md`
- update `first_real_game_idea_workflow/WORKFLOW_STATUS.md` to `idea_packet_received`
- rerun routing from `AGENT_ROUTER.md`
- load only `skills/game_idea_review/SKILL.md`, `agent_output_contracts/one_page_concept_memo.md`, and `context_packs/CP02_game_idea_review.md` if needed
- generate Artifact 01 only from user-supplied facts
- run `npm run agent:runtime-check`
- run `npm run kb:validate`

## 8. Migration Git State Summary

Project root confirmed for migration:

- `D:\Game\FOTN\knowledge`

Important correction:

- `D:\Game\FOTN` is a parent directory with its own Git state, but the Game Design Knowledgebase project root is `D:\Game\FOTN\knowledge`.
- Migration, validation, commit, and push should run from `D:\Game\FOTN\knowledge`.

Git state before migration edits:

- Branch: `main`
- Remote: `https://github.com/wenhuorongbing-netizen/game-design-knowledge-base.git`
- Initial correct-root status: clean
- Latest commit before migration edits: `9cd3eb8 try game design`

Sensitive-file check summary:

- No tracked `.env`, `.env.*`, private key, pem/key/certificate, `node_modules`, `.DS_Store`, log file, or private archive/source-body file was detected.
- Keyword scanning produced false positives in public HTML metadata under `50-game-design-masters-kb/raw/official-metadata/`, such as script identifiers containing `licenseKey:void 0` or `password:!0`; these were not actual secrets.
- `.gitignore` was expanded to ignore local Codex state, common key/cert files, logs, caches, local databases, and editor/system files.

Migration files added or updated:

- `.gitignore`
- `AGENTS.md`
- `docs/codex-handoff.md`

New machine clone command:

- `git clone https://github.com/wenhuorongbing-netizen/game-design-knowledge-base.git`

## 9. Constraints The User Explicitly Required

Project identity constraints:

- This project is Game Design Knowledgebase.
- It is not BookOS.
- It is not a reading notes app.
- It is not a personal library tracker.
- It is not a forum platform.
- It is not a full-stack app.
- It is not a traditional SaaS application.
- It is an agent-consumable source-governed Game Design Knowledgebase and Skill Pack.

Source and evidence constraints:

- Do not parse private or high-risk source body text.
- Do not summarize copyrighted chapters.
- Do not extract quotes from private or high-risk sources.
- Do not invent legal sidecars.
- Do not invent user notes.
- Do not invent manual quotes.
- Do not invent project facts.
- Do not invent playtest logs.
- Do not invent playtest participants.
- Do not invent observations.
- Do not invent participant quotes.
- Do not fabricate telemetry.
- Do not fabricate benchmark outputs.
- Do not fabricate benchmark scores.
- Do not promote claims to verified without evidence.
- Do not create fake verified claims.
- Do not cite books without available evidence.
- Do not claim verified source backing unless valid EvidenceRef and review exist.

Runtime constraints:

- Codex must start from `AGENT_START.md`.
- Codex must route through manifest and router.
- Codex must load the smallest useful context.
- Codex must never load the whole repository by default.
- Codex must never load private sources for normal use.
- Codex must never use benchmark files as normal runtime.
- Codex must never use generated exports as design evidence.
- Codex must label assumptions, source_basis, confidence, evidence gaps, and next action.

Workflow constraints:

- Do not generate design artifacts without a valid user game idea packet.
- Do not fabricate missing user details.
- Do not invent user intent.
- Do not fabricate project constraints.
- Do not invent rules not implied by the user idea.
- Do not invent economy data.
- Do not invent implementation details unless clearly marked as draft options.
- Do not create full production roadmaps when asked for prototypes.
- Do not create playtest results without real playtest logs.
- Do not treat local project observations as universal design doctrine.

Documentation and report constraints:

- `report.md` is append-only.
- Do not delete, truncate, clean, reorder, or rewrite previous `report.md` content.
- Do not delete canonical KB content.
- Do not delete benchmark files.
- Do not delete evidence governance files.
- Do not manually edit generated exports unless through the exporter.
- Do not move large directories unless links and maps are updated.
- Do not weaken source governance rules.
- Do not use fenced code blocks in user-facing responses when the prompt says not to.

Engineering constraints:

- Do not build app features.
- Do not build auth, database, forum, BookOS, reading sessions, or CRUD features.
- Do not recommend microservices.
- Do not add unnecessary abstraction.
- Prefer additive restructuring.
- Preserve dirty worktree changes unless the user explicitly asks to revert.

## 10. Exact Next User Input Needed

Ask the user to provide:

- idea summary;
- desired player experience;
- current uncertainty or concern;
- optional target player;
- optional genre;
- optional platform;
- optional constraints;
- optional player actions;
- optional rules;
- optional resources;
- optional decisions;
- optional prototype question;
- optional test goal.

Do not continue artifact generation until this exists.
