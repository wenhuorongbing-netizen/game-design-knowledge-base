Hands-on start: [HANDS_ON_START.md](HANDS_ON_START.md)

Repository orientation: [START_HERE.md](START_HERE.md)

# Game Design Knowledgebase

This repository is a structured Game Design Knowledgebase. It is not BookOS, a reading notes app, a personal book tracker, a forum platform, or a Vue/Spring/MySQL application.

## Repository Root

This `knowledge/` folder is now the repository root for the knowledgebase. The sibling folder `../founder-of-the-north/` is game-project content and is outside this KB repository boundary.

## Canonical KB Content

- `HANDS_ON_START.md` is the fastest path for using the AI Game Design Master framework without learning the whole repo first.
- `COPY_PASTE_PROMPTS.md` is the small first-use prompt kit.
- `USE_CASES/` contains practical routes for vague ideas, design reviews, no-project learning, reading notes, and source-safety checks.
- `AI_CONTEXT_MINIMAL.md` is the minimal context to give another AI before using the prompts.
- `kb/` is the canonical source-governed knowledgebase.
- `START_HERE.md` is the role-based entry point for new users.
- `KB_REBUILD_INSTRUCTION.md` is the active maintenance and rebuild instruction.
- `MASTER_GOAL.md` defines the current AI Game Design Master Framework objective.
- `MASTER_CAPABILITY_MATRIX.md` maps the AI master capabilities across game design domains.
- `kb/navigation/` contains learner, designer, researcher, maintainer, source-governance, and quick problem-solving paths.
- `tools/validate_kb/` contains the repository validator.
- `tools/kb_importer/` is the authoritative export/import pipeline.
- `tools/kb_quality/` contains release audit and coverage helpers.
- `kb-portal/` is an optional static browser generated only from safe exports.
- `kb-tools/` is deprecated legacy tooling and is not the authoritative build path.
- `50-game-design-masters-kb/` is a legacy snapshot and must remain quarantined unless re-audited.
- `_private_sources/` contains private local source materials and is ignored by `.gitignore` except for its README.

## Source Governance

High-risk sources are metadata-only. Do not summarize, quote, embed, or transform high-risk source bodies unless a legal sidecar explicitly permits processing.

Evidence that the agent cannot create is listed in [kb/01_sources/USER_REQUIRED_EVIDENCE.md](kb/01_sources/USER_REQUIRED_EVIDENCE.md).

## Authoritative Commands

Run from this folder:

```powershell
npm run kb:export
npm run kb:validate
npm run kb:coverage
npm run kb:audit
```

Equivalent direct commands:

```powershell
node .\tools\kb_importer\import_kb.js .
node .\tools\validate_kb\validate_kb.js
```

## Release Gates

Draft KB release can pass when validation/export are clean and all draft scaffolds remain labeled with `source_basis`, `confidence`, and `status`.

Verified source-backed masterclass release remains blocked until legal sidecars, user notes, official/open sources, or project/playtest evidence support claims.

## Navigation

If you want to use the AI framework now, start with [HANDS_ON_START.md](HANDS_ON_START.md).

If you are new to the repository and want orientation, use [START_HERE.md](START_HERE.md).

If you are developing the AI Game Design Master Framework, start with [MASTER_GOAL.md](MASTER_GOAL.md), then [MASTER_FRAMEWORK_PHASE_PLAN.md](MASTER_FRAMEWORK_PHASE_PLAN.md), then [MASTER_CAPABILITY_MATRIX.md](MASTER_CAPABILITY_MATRIX.md).

If you are maintaining or rebuilding the repository, use [KB_REBUILD_INSTRUCTION.md](KB_REBUILD_INSTRUCTION.md).

Structure guides:

- [REPO_MAP.md](REPO_MAP.md)
- [STRUCTURE_MAP.md](STRUCTURE_MAP.md)
- [STRUCTURE_SIMPLIFICATION_PLAN.md](STRUCTURE_SIMPLIFICATION_PLAN.md)
- [WHAT_NOT_TO_TOUCH.md](WHAT_NOT_TO_TOUCH.md)

Role-based paths:

- [Hands-On Start](HANDS_ON_START.md)
- [Copy-Paste Prompts](COPY_PASTE_PROMPTS.md)
- [Use Cases](USE_CASES/README.md)
- [Learner Path](kb/navigation/learner_path.md)
- [Designer Path](kb/navigation/designer_path.md)
- [Researcher Path](kb/navigation/researcher_path.md)
- [Maintainer Path](kb/navigation/maintainer_path.md)
- [Source Governance Path](kb/navigation/source_governance_path.md)
- [Quick Problem Solver](kb/navigation/quick_problem_solver.md)
