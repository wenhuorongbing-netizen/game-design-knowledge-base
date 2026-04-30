# Agent Runtime CI Acceptance Checklist

Date: 2026-04-30

## Checklist

| Check | Status |
|---|---|
| `npm run agent:check` exists | done |
| CI runs `npm run agent:check` | done |
| CI still runs KB export | done |
| CI still runs KB validation | done |
| CI still runs source audit | done |
| CI still runs coverage | done |
| CI still blocks private/archive files | done |
| CI still checks generated export JSON freshness | done |
| CI does not build an app | done |
| CI does not parse private sources | done |

## Acceptance

Agent runtime CI is accepted as a minimal structural gate.

It is not yet a behavioral benchmark.
