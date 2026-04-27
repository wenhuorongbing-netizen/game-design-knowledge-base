# Start Here

This is the human entry point for the Game Design Knowledgebase. If you opened the repository with no context, start here before opening `kb/` or any tool folder.

## 1. What Is This Repository?

This repository is a source-governed Game Design Knowledgebase. It organizes game design knowledge into works, source records, ontology, concept cards, design lenses, workflow packs, exercises, prompts, claims, evidence gaps, validation reports, and exportable JSON data.

Use it to learn game design, diagnose a design problem, run a structured workflow, or maintain a validated knowledge repository.

## 2. What Is It Not?

It is not BookOS, not a reading notes app, not a personal book tracker, not a forum platform, and not a full-stack app.

Do not add user auth, reading sessions, personal library CRUD, forum CRUD, Vue/Spring/MySQL code, or app-product features here.

## 3. What Should I Open First?

Open these in order:

1. [HOW_TO_USE_THIS_KB.md](HOW_TO_USE_THIS_KB.md)
2. [REPO_MAP.md](REPO_MAP.md)
3. [kb/START_HERE.md](kb/START_HERE.md)
4. [kb/INDEX.md](kb/INDEX.md)

If you only need a fast design answer, use [kb/DESIGNER_WORKFLOWS.md](kb/DESIGNER_WORKFLOWS.md).

## Role-Based Navigation

| Role | Start Here |
|---|---|
| Learner | [kb/navigation/learner_path.md](kb/navigation/learner_path.md) |
| Working designer | [kb/navigation/designer_path.md](kb/navigation/designer_path.md) |
| Researcher / evidence auditor | [kb/navigation/researcher_path.md](kb/navigation/researcher_path.md) |
| Maintainer | [kb/navigation/maintainer_path.md](kb/navigation/maintainer_path.md) |
| Source governance reviewer | [kb/navigation/source_governance_path.md](kb/navigation/source_governance_path.md) |
| Quick problem solver | [kb/navigation/quick_problem_solver.md](kb/navigation/quick_problem_solver.md) |

## 4. I Want To Learn Game Design. Where Do I Go?

Start with [kb/LEARNING_PATHS.md](kb/LEARNING_PATHS.md). It routes you through foundations, player experience, rules, systems, game feel, UI feedback, narrative, prototyping, playtesting, production, release, and ethics.

The same material is also available as a role path in [kb/navigation/learner_path.md](kb/navigation/learner_path.md).

## 5. I Want To Use This As A Designer. Where Do I Go?

Start with [kb/DESIGNER_WORKFLOWS.md](kb/DESIGNER_WORKFLOWS.md). It is organized by design problems such as weak core loop, fake choices, floaty feel, broken economy, unclear UI feedback, playtesting, and release readiness.

For symptom lookup, use [kb/navigation/quick_problem_solver.md](kb/navigation/quick_problem_solver.md).

## 6. I Want To Maintain The KB. Where Do I Go?

Start with [MAINTAINER_CHECKLIST.md](MAINTAINER_CHECKLIST.md), then read [kb/navigation/maintainer_path.md](kb/navigation/maintainer_path.md).

Authoritative commands:

```powershell
npm run kb:export
npm run kb:validate
npm run kb:coverage
npm run kb:audit
```

## 7. I Want To Add A New Source. What Do I Do?

Read [HOW_TO_ADD_KNOWLEDGE.md](HOW_TO_ADD_KNOWLEDGE.md) and [kb/navigation/source_governance_path.md](kb/navigation/source_governance_path.md).

Minimum rule: a user-provided file is not automatically legal for AI processing. High-risk sources stay metadata-only unless a legal sidecar explicitly permits processing.

## 8. I Want To Add A Concept Card. What Do I Do?

Start from [kb/05_cards/card_template.md](kb/05_cards/card_template.md). Add the card under the correct card folder and include `entity_type`, `card_id`, `card_type`, `source_basis`, `confidence`, `status`, `phase_groups`, `domains`, and evidence fields.

Then run:

```powershell
npm run kb:validate
```

## 9. I Want To Run Validation. What Command Do I Run?

Run this from the repository root:

```powershell
npm run kb:validate
```

Run this when exports also need to be regenerated:

```powershell
npm run kb:export
```

Run this when checking source safety:

```powershell
npm run kb:audit
```

## 10. Which Folders Should I Ignore?

Ignore these unless you are doing explicit maintenance:

- `kb/11_import_export/export/`: generated exports; do not edit manually.
- `kb-tools/`: deprecated legacy tooling; do not run unless explicitly enabled.
- `50-game-design-masters-kb/`: legacy snapshot; do not use as canonical KB.
- `kb-portal/`: optional generated/static browser surface.
- root PDF/EPUB/book files: private local source materials; do not ingest body text.
- `docs/deprecated/`: historical context only, not active instructions.

Read [WHAT_NOT_TO_TOUCH.md](WHAT_NOT_TO_TOUCH.md) before making changes.
