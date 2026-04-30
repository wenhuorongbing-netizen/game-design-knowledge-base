# CI/CD Agent Runtime Improvement Plan

Date: 2026-04-30

## Current CI State

`.github/workflows/kb-quality.yml` now runs:

- private/archive file guard;
- hands-on file checks;
- prompt/context-pack checks;
- `npm run agent:check`;
- `npm run kb:export`;
- `npm run kb:validate`;
- `npm run kb:audit`;
- `npm run kb:coverage`;
- generated export freshness check.

## Why This Is Safe

The CI change uses local scripts and file checks only. It does not deploy, build an app, parse private sources, or call external services.

## P1 Improvements

| Improvement | Reason | Acceptance |
|---|---|---|
| router fixtures | prove common user requests map to skills | fixture task maps to expected skill |
| skill safety fixtures | prove unsafe source instructions fail | known-bad skill fixture fails |
| contract fixtures | prove output contracts require labels | missing label fixture fails |

## P2 Improvements

| Improvement | Reason | Acceptance |
|---|---|---|
| first-use link check | prevent broken docs | broken first-use links fail CI |
| prompt style check | prevent prompt bloat | long unsafe prompt patterns flagged |
| current-state report check | prevent stale acceptance reports | contradictions fail check |

## Not Recommended

Do not add deployment, containers, databases, auth, forum checks, or full-stack application infrastructure.
