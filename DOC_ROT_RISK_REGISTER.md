# Documentation Rot Risk Register

Date: 2026-04-30

## Purpose

This register tracks documentation most likely to become stale, contradictory, or too large.

## Risk Register

| id | risk | likelihood | impact | owner | mitigation |
|---|---|---:|---:|---|---|
| DOC-ROT-001 | first-use files drift from the actual easiest path | medium | high | documentation UX owner | review `USE_THIS_FIRST.md`, launchpad, and top 10 after usability phases |
| DOC-ROT-002 | prompt indexes drift from individual prompt files | medium | high | AI runtime owner | treat individual prompt files as canonical copy-paste prompts |
| DOC-ROT-003 | context-pack index drifts from actual context files | medium | medium | AI runtime owner | CI checks required context pack files exist |
| DOC-ROT-004 | acceptance reports overstate benchmark readiness | low | high | benchmark owner | do not score missing target outputs |
| DOC-ROT-005 | evidence docs imply verified claims without user evidence | low | high | source-governance owner | keep verified claims blocked unless evidence is validated |
| DOC-ROT-006 | generated reports are edited manually | medium | high | tooling owner | regenerate with commands and document generated boundaries |
| DOC-ROT-007 | `report.md` becomes too long to scan | high | medium | maintainer lead | keep append-only; add current-state index later |
| DOC-ROT-008 | governance docs multiply without owners | medium | medium | maintainer lead | enforce owner matrix and creation rules |
| DOC-ROT-009 | optional portal docs imply app scope | low | medium | documentation UX owner | keep portal optional and non-canonical |
| DOC-ROT-010 | legacy or deprecated material is mistaken for active | low | high | maintainer lead | keep deprecated docs clearly marked and outside first-use paths |

## Review Rule

Update this register when:

- a new documentation category is created;
- a first-use path changes;
- a benchmark, evidence, or validation phase finishes;
- a stale or duplicate file is discovered.

