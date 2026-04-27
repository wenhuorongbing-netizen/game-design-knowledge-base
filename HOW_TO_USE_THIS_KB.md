# How To Use This KB

This repository is designed for three common modes: learning, design work, and maintenance.

## If You Are Learning Game Design

Start with [kb/LEARNING_PATHS.md](kb/LEARNING_PATHS.md).

Use the route like this:

1. Pick a learning path.
2. Open the linked works and concept cards.
3. Use the linked lenses as diagnostic questions.
4. Run one exercise.
5. Treat every card as draft unless `source_basis`, `confidence`, and `evidence_refs` prove otherwise.

## If You Are Designing A Game

Start with [kb/DESIGNER_WORKFLOWS.md](kb/DESIGNER_WORKFLOWS.md).

Use the route like this:

1. Choose the problem closest to your situation.
2. Open the workflow pack first.
3. Use the linked lenses to review your artifact.
4. Use concept cards only to clarify vocabulary and evidence gaps.
5. Produce the output artifact named in the workflow.

## If You Are Researching Sources

Start with [kb/navigation/researcher_path.md](kb/navigation/researcher_path.md) and [kb/navigation/source_governance_path.md](kb/navigation/source_governance_path.md).

Check:

- `source_basis`
- `confidence`
- `status`
- `evidence_refs`
- `ingestion_status`
- high-risk quarantine status

## If You Are Maintaining The Repository

Start with [MAINTAINER_CHECKLIST.md](MAINTAINER_CHECKLIST.md).

Use only the authoritative commands:

```powershell
npm run kb:export
npm run kb:validate
npm run kb:coverage
npm run kb:audit
```

## Evidence Warning

This KB is currently accepted as a draft/source-governed KB. It is not a verified source-backed masterclass corpus yet. Do not write "according to this book" unless allowed evidence exists.
