# Quality Gate Plan

Date: 2026-04-30

## Verdict

Verdict: IMPLEMENTED_MINIMAL_CI_GATES.

This repository now has a minimal quality-gate plan and a GitHub Actions workflow that runs on pull requests and pushes to `main`.

## Gate Philosophy

This is a source-governed knowledgebase, not an application. Quality gates should prove:

- canonical KB exports can be regenerated;
- validation passes;
- source governance passes;
- coverage summary can be generated;
- private/archive files are not tracked;
- first-use launchpad files exist;
- hands-on prompt files exist;
- context pack files exist;
- generated export JSON is current.

## Implemented Gates

| Gate | Implemented by | CI status |
|---|---|---|
| export KB | `npm run kb:export` | implemented |
| validate KB | `npm run kb:validate` | implemented |
| source audit | `npm run kb:audit` | implemented |
| coverage summary | `npm run kb:coverage` | implemented |
| no private/archive files tracked | workflow shell check | implemented |
| first-use required files exist | workflow shell check | implemented |
| prompt files exist | workflow shell check | implemented |
| context pack files exist | workflow shell check | implemented |
| generated export JSON current | workflow `git diff --exit-code` on export JSON | implemented |
| direction-drift and report consistency | validator rules | implemented through `npm run kb:validate` |

## Local Aggregate Command

Added:

- `npm run kb:check`

This runs export, validate, audit, and coverage in sequence.

## What This Does Not Do

This quality gate does not:

- build an app;
- deploy anything;
- parse private source bodies;
- run benchmark scoring without target outputs;
- validate user evidence that has not been supplied;
- prove verified source-backed mastery.

## Remaining P1 Gates

- Add fixture tests for validator failure cases.
- Add a first-use Markdown link checker.
- Add report current-state index checks.
- Add prompt style checks if prompt files continue growing.
