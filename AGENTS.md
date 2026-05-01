# AGENTS.md

This repository is Game Design Knowledgebase: an agent-consumable, source-governed Game Design Knowledgebase and Skill Pack.

It is not BookOS, not a reading notes app, not a forum, not an auth/database product, and not a full-stack app.

## Project Structure

- `AGENT_START.md`: canonical first file for Codex-like agents.
- `AGENT_SKILL_MANIFEST.md` and `AGENT_SKILL_MANIFEST.json`: skill registry.
- `AGENT_ROUTER.md`: task-to-skill routing rules.
- `AGENT_CONTEXT_LOADING_PROTOCOL.md`: minimal context loading rules.
- `AGENT_SOURCE_SAFETY_RULES.md`: source governance and confidence boundaries.
- `AGENT_OUTPUT_CONTRACTS.md` and `agent_output_contracts/`: required artifact contracts.
- `skills/`: agent skills, one folder per skill with `SKILL.md`.
- `context_packs/`: minimal context packs for normal use.
- `codex_tasks/`: task recipes for Codex-like agents.
- `kb/`: canonical knowledgebase content and generated import/export outputs.
- `tools/`: CommonJS validation, export, audit, and agent runtime checkers.
- `docs/`: handoff, governance, and reference documentation.
- `first_real_game_idea_workflow/`: current user-supplied game idea workflow state.

## Install

- Run `npm install`.
- There is currently no `package-lock.json`, so do not use `npm ci` unless a lockfile is added later.

## Start / Runtime

- This repository has no normal application server.
- Normal use starts by reading `AGENT_START.md`.
- Optional static portal assets may exist, but do not treat portal work as the main runtime unless the user explicitly asks.

## Test And Validation Commands

- `npm run agent:runtime-check`
- `npm run kb:validate`
- `npm run kb:audit`
- `npm run kb:coverage`
- `npm run kb:check`

## Lint / Typecheck

- No standalone lint or typecheck script is currently configured.
- Use `npm run kb:check` as the main repository quality gate.

## Codex Rules

- Start from `AGENT_START.md` for agent-runtime work.
- Route through `AGENT_SKILL_MANIFEST.md`, `AGENT_SKILL_MANIFEST.json`, and `AGENT_ROUTER.md`.
- Load only the smallest useful context.
- Do not load the whole repository by default.
- Do not parse private or high-risk source bodies.
- Do not summarize copyrighted chapters.
- Do not invent evidence, quotes, user notes, legal sidecars, project facts, telemetry, or playtest logs.
- Do not promote claims to `verified` without valid evidence.
- Label assumptions, `source_basis`, confidence, evidence gaps, and next action in design artifacts.
- Do not build BookOS, reading app, forum, auth, database, or full-stack app features.
- Use `apply_patch` for manual edits.
- Preserve user changes. Do not revert or reset unrelated files.
- Treat `report.md` as append-only when a task asks to update it.

## Do Not Touch Or Do Not Load By Default

- `_private_sources/` except `_private_sources/README.md`.
- Private PDFs, EPUBs, archives, or raw copyrighted source bodies.
- `node_modules/`, caches, local editor state, and system files.
- Generated exports under `kb/11_import_export/` except through the exporter.
- Benchmark files for normal agent runtime use.
- Deprecated or legacy files unless maintaining them.
- Existing `report.md` content; append only when required.

## Before Finishing A Task

- Run the smallest relevant checks first.
- For agent runtime changes, run `npm run agent:runtime-check`.
- For repository-wide changes, run `npm run kb:check`.
- Confirm no source-governance rule was weakened.
- Confirm no private-source instruction, fake evidence instruction, or app-direction drift was introduced.

## Codex Migration Safety Rules

Project: knowledge

### Project Structure

- Inspect the repository root, README, package/build files, and docs/ before making changes.
- Preserve existing module boundaries and project-specific conventions.

### Install Dependencies

~~~~powershell
npm ci
~~~~

### Start Commands

~~~~powershell
npm run dev
~~~~

### Test Commands

~~~~powershell
npm test
~~~~

### Lint / Typecheck Commands

~~~~powershell
npm run lint
npm run typecheck
~~~~

### Codex Rules

- Do not commit .env, .env.*, *.local, secrets/, credentials/, private keys, tokens, passwords, local databases, migration archives, or Codex local state.
- Do not commit 
ode_modules/, virtual environments, caches, build outputs, coverage reports, logs, or archive files.
- Do not delete or rewrite user local files unless explicitly asked.
- Prefer small, focused changes and run the smallest relevant verification before finishing.
- If verification cannot run, document the exact reason.

### Before Finishing

~~~~powershell
git status -sb
git diff --check
npm test
~~~~