# Agent Runtime CI Acceptance Checklist

Date: 2026-04-30

## Checklist

| Check | Status |
|---|---|
| `npm run agent:check` exists | done |
| `npm run agent:router-check` exists | done |
| `npm run agent:contract-check` exists | done |
| `npm run agent:runtime-check` exists | done |
| `npm run kb:check` includes agent runtime checks | done |
| CI runs KB export | done |
| CI runs KB validation | done |
| CI runs source audit | done |
| CI runs coverage | done |
| CI blocks private/archive files | done |
| CI checks generated export JSON freshness | done |
| CI does not build an app | done |
| CI does not parse private sources | done |

## Acceptance

Agent runtime CI is accepted as a minimal structural gate if it runs either:

- `npm run kb:check`; or
- `npm run agent:runtime-check` plus the existing KB export, validation, audit, and coverage gates.

It is not a behavioral benchmark.

## Required Pull Request Gate

Before merging Agent Skill Pack changes, run:

1. `npm run agent:runtime-check`
2. `npm run kb:check`

## What This Gate Proves

- required agent runtime files exist;
- manifest and router fixtures are structurally valid;
- skill files exist and keep safety headings;
- manifest load paths exist;
- output contracts include required labels;
- unsafe affirmative private-source instructions are blocked by static pattern checks;
- KB export, validation, audit, and coverage still pass.

## What This Gate Does Not Prove

- live Codex responses are always useful;
- every output is contract-perfect;
- evidence exists for verified claims;
- target AI benchmark readiness;
- user usability.

## Remaining CI Gap

Add `agent:runtime-check` explicitly to `.github/workflows/kb-quality.yml` if the workflow is updated in a future CI prompt. For now, `kb:check` includes the agent runtime gate locally.

