# CI/CD Improvement Plan

Date: 2026-04-30

## Verdict

Verdict: MINIMAL_CI_ADDED.

The repository did not have `.github/workflows/`. A minimal workflow is now added at:

- `.github/workflows/kb-quality.yml`

## Workflow Scope

The workflow runs on:

- pull requests;
- pushes to `main`.

It performs:

- checkout;
- Node setup;
- private/archive file guard;
- first-use file existence guard;
- prompt/context pack existence guard;
- `npm run kb:export`;
- `npm run kb:validate`;
- `npm run kb:audit`;
- `npm run kb:coverage`;
- generated export JSON freshness check.

## Why This Is Safe

The workflow uses existing local commands and simple shell checks. It does not add:

- deployment;
- container infrastructure;
- service hosting;
- database setup;
- app build;
- private source parsing.

## Future CI Improvements

| Priority | Improvement | Reason |
|---|---|---|
| P1 | validator fixture test job | prove validator catches known-bad cases |
| P1 | first-use link checker | catch broken launchpad/use-case links |
| P2 | prompt style checker | prevent long copy-paste prompt regression |
| P2 | generated report policy check | distinguish timestamp-only generated report changes from content changes |
| P2 | portal accessibility smoke check | only if portal becomes normal-use surface |

## Not Recommended

Do not add a deployment pipeline, app hosting, microservices, auth, database migrations, or forum/reading-session app checks.
