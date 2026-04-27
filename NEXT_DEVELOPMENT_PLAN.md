# Next Development Plan

## Phase 0 — Repo Acceptance and Direction Correction

- Status: complete for P0 baseline.
- Goal: Make the repository clearly a Game Design Knowledgebase release, not a mixed app/legacy corpus.
- Tasks: define canonical KB root; mark legacy/out-of-scope files; add root README/state; create release boundary.
- Files to create or change: `README.md`, `KB_PROJECT_STATE.md`, `RELEASE_BOUNDARY.md`, audit files.
- Acceptance criteria: reviewer can identify accepted KB files in under one minute.
- Tests or validation commands: `rg -n "BookOS|reading session|forum CRUD|daily sentence" README.md knowledge/kb`.
- Risks: over-deleting useful legacy metadata.
- Next exact prompt: `continue-kb-p1`.

## Phase 1 — Source Governance Foundation

- Status: complete for P0 baseline; continue only for P1 hardening.
- Goal: Remove P0 legal/source risk.
- Tasks: remove or quarantine legacy extracted body text; regenerate portal data from safe exports; disable unsafe extraction; add repo-wide legal scan.
- Files to create or change: `knowledge/50-game-design-masters-kb/raw/private-library`, `knowledge/kb-portal/data.js`, `knowledge/kb-tools/extract*`, validation scripts.
- Acceptance criteria: no high-risk source body text appears in JSON/JS/MD; legal audit is repo-wide.
- Tests or validation commands: `rg -n "preview_text|sample_sections|z-library|Anna" knowledge -g "*.json" -g "*.js" -g "*.md"`.
- Risks: deleting old useful metadata together with unsafe excerpts.
- Next exact prompt: `continue-kb-p1`.

## Phase 2 — Ontology and Schema Foundation

- Goal: Normalize vocabulary and enforce schemas.
- Tasks: domain alias map; strict schema pass; frontmatter contract update.
- Files to create or change: `knowledge/kb/02_ontology`, `knowledge/kb/11_import_export/schemas`.
- Acceptance criteria: one canonical domain vocabulary; schemas reject invalid entities.
- Tests or validation commands: importer plus schema validation.
- Risks: breaking existing exports during migration.
- Next exact prompt: `continue-review`.

## Phase 3 — Work Registry and Source Audit

- Goal: Upgrade bibliography quality without ingesting high-risk bodies.
- Tasks: official metadata links; legal sidecar workflow; source risk report.
- Files to create or change: `sources.json`, `works.json`, sidecars.
- Acceptance criteria: core works have official metadata or sidecar status.
- Tests or validation commands: source audit script.
- Risks: confusing official metadata with body evidence.
- Next exact prompt: `continue-review`.

## Phase 4 — Card System Construction

- Goal: Promote selected draft cards into evidence-backed cards.
- Tasks: fix placeholder READMEs; attach evidence to top 20 concepts/frameworks; resolve related-work warnings.
- Files to create or change: `knowledge/kb/05_cards`.
- Acceptance criteria: 0 validation warnings for card structure; promoted cards have evidence_refs.
- Tests or validation commands: importer validation.
- Risks: promoting unsupported claims too early.
- Next exact prompt: `continue-review`.

## Phase 5 — Lens and Workflow Construction

- Goal: Keep lenses/workflows useful while source-safe.
- Tasks: normalize lens frontmatter; connect workflows to real project overlay examples; add limitations.
- Files to create or change: `knowledge/kb/06_lenses`, `knowledge/kb/08_workflows`, `knowledge/kb/09_project_overlays`.
- Acceptance criteria: lenses/workflows remain original and clearly labeled.
- Tests or validation commands: lens/workflow validation.
- Risks: turning diagnostic tools into false doctrine.
- Next exact prompt: `continue-review`.

## Phase 6 — Exercise and Prompt System

- Goal: Improve practice layer and AI usage safety.
- Tasks: add guardrail tests for prompts; map exercises to domains; add review rubrics.
- Files to create or change: `knowledge/kb/08_workflows/exercises`, `knowledge/kb/08_workflows/prompts`.
- Acceptance criteria: every prompt has guardrails and expected output format.
- Tests or validation commands: prompt validation.
- Risks: prompts generating unsupported claims.
- Next exact prompt: `continue-review`.

## Phase 7 — Validation and Export Pipeline

- Goal: Make import/export reproducible and safe.
- Tasks: one approved command; repo-wide audit; graph QA; search safety tests.
- Files to create or change: `knowledge/tools/kb_importer`, `knowledge/kb/11_import_export`.
- Acceptance criteria: clean import report and clean legal scan.
- Tests or validation commands: importer plus repo source audit.
- Risks: multiple old tools producing inconsistent outputs.
- Next exact prompt: `continue-review`.

## Phase 8 — Coverage Audit and Release

- Goal: Release an accepted draft KB.
- Tasks: update coverage matrix, legal audit, release notes, acceptance review.
- Files to create or change: `knowledge/kb/12_quality`, root audit files.
- Acceptance criteria: no P0, no unresolved P1 that blocks draft release.
- Tests or validation commands: full validation and review checklist.
- Risks: accepting scaffold quantity as verified quality.
- Next exact prompt: `continue-review`.

## Phase 9 — Optional Static Browser/Search

- Goal: Provide safe local browsing.
- Tasks: rebuild portal from safe exports only; add source/confidence badges.
- Files to create or change: `knowledge/kb-portal`.
- Acceptance criteria: portal displays no restricted source body text.
- Tests or validation commands: portal data scan.
- Risks: UI hiding source governance warnings.
- Next exact prompt: `continue-review`.

## Phase 10 — Long-Term KB Expansion

- Goal: Grow from scaffold to verified masterclass corpus.
- Tasks: add user legal notes, official metadata, legal quotes, playtest logs, project overlays.
- Files to create or change: all KB layers.
- Acceptance criteria: selected claims reach `verified` or `strong` with evidence.
- Tests or validation commands: evidence and confidence audit.
- Risks: expanding faster than governance can verify.
- Next exact prompt: `continue-review`.
