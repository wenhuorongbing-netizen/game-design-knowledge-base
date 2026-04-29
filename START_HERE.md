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

Current strategic phase:

- [MASTER_GOAL.md](MASTER_GOAL.md)
- [MASTER_FRAMEWORK_PHASE_PLAN.md](MASTER_FRAMEWORK_PHASE_PLAN.md)
- [AI_GAME_DESIGN_MASTER_DEFINITION.md](AI_GAME_DESIGN_MASTER_DEFINITION.md)
- [MASTER_CAPABILITY_MATRIX.md](MASTER_CAPABILITY_MATRIX.md)

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

## Evidence Status Quick Links

Use these when you need to know whether something is draft, metadata-only, project-specific, or verified:

- [Evidence Dashboard](kb/13_evidence/EVIDENCE_DASHBOARD.md)
- [Evidence Status Index](kb/13_evidence/EVIDENCE_STATUS_INDEX.md)
- [Evidence Intake Plan](kb/13_evidence/EVIDENCE_INTAKE_PLAN.md)
- [Legal Sidecar Workflow](kb/13_evidence/sidecars/SIDECAR_REVIEW_GUIDE.md)
- [User Manual Note Template](kb/13_evidence/manual_notes/user_manual_note_template.md)
- [User Manual Quote Template](kb/13_evidence/manual_quotes/user_manual_quote_template.md)
- [Claim Promotion Workflow](kb/13_evidence/CLAIM_PROMOTION_WORKFLOW.md)
- [Priority Evidence Backlog](kb/13_evidence/PRIORITY_EVIDENCE_BACKLOG.md)
- [Evidence Gap Register](kb/13_evidence/EVIDENCE_GAP_REGISTER.md)
- [Verified Claims Index](kb/13_evidence/reports/VERIFIED_CLAIMS_INDEX.md)
- [Unsupported Claims Index](kb/13_evidence/reports/UNSUPPORTED_CLAIMS_INDEX.md)
- [Game Feel Evidence Pilot](kb/13_evidence/reports/GAME_FEEL_EVIDENCE_PILOT.md)
- [Meaningful Decisions Evidence Pilot](kb/13_evidence/reports/MEANINGFUL_DECISIONS_EVIDENCE_PILOT.md)
- [Systems Economy Playtest Evidence Pilot](kb/13_evidence/reports/SYSTEMS_ECONOMY_PLAYTEST_EVIDENCE_PILOT.md)

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

Evidence the agent cannot create is listed in [kb/01_sources/USER_REQUIRED_EVIDENCE.md](kb/01_sources/USER_REQUIRED_EVIDENCE.md).

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
- `_private_sources/`: private local source quarantine; do not ingest body text.
- `docs/deprecated/`: historical context only, not active instructions.

Read [WHAT_NOT_TO_TOUCH.md](WHAT_NOT_TO_TOUCH.md) before making changes.
