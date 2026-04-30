# CI/CD Acceptance Checklist

Date: 2026-04-30

## Verdict

Verdict: MINIMAL_CI_ACCEPTED.

## Required Checks

| Check | Status | Evidence |
|---|---|---|
| workflow exists | implemented | `.github/workflows/kb-quality.yml` |
| runs on pull request | implemented | workflow `pull_request` trigger |
| runs on main push | implemented | workflow `push` trigger for `main` |
| exports KB | implemented | `npm run kb:export` |
| validates KB | implemented | `npm run kb:validate` |
| audits source governance | implemented | `npm run kb:audit` |
| generates coverage | implemented | `npm run kb:coverage` |
| blocks private/archive files | implemented | workflow shell guard |
| checks required first-use files | implemented | workflow shell guard |
| checks prompt files exist | implemented | workflow shell guard |
| checks context packs exist | implemented | workflow shell guard |
| checks generated export JSON freshness | implemented | workflow git diff check |

## Acceptance Limits

This workflow does not prove:

- real target AI behavior;
- verified source-backed mastery;
- observed user usability;
- portal accessibility;
- validator failure fixtures.

## Local Commands

Run locally before pushing:

- `npm run kb:export`
- `npm run kb:validate`
- `npm run kb:audit`
- `npm run kb:coverage`

Or run:

- `npm run kb:check`

## Next CI Step

Add a lightweight fixture test command after the fixture harness exists.
