# Agent Runtime Remaining Gap Backlog

Date: 2026-05-01

## Summary

The Codex runtime is accepted for controlled real use, but several non-blocking gaps remain.

## Backlog

| ID | Gap | Severity | Evidence | Recommendation | Acceptance Criteria |
|---|---|---|---|---|---|
| P2-AUTO-001 | Smoke-output section checks are still partly manual | P2 | `codex_smoke_runs/run_001/REPAIR_BACKLOG.md` and validation coverage matrix identify partial coverage | Add a lightweight checker for raw smoke output labels and required sections | Checker verifies assumptions, source_basis, confidence, evidence gaps, next action, selected skill, files loaded, and output contract fields in smoke output files |
| P3-CST008-001 | Fake-playtest routing boundary can be clearer | P3 | Run 001 failure analysis noted routing ambiguity polish | Clarify router wording for fake playtest requests and preserve playtest-plan safe alternative behavior | Router clearly maps fake playtest data requests to safety refusal plus optional playtest planning alternative |
| GOV-EVIDENCE-001 | Verified source-backed masterclass remains blocked | User evidence blocker | Source governance audit shows 0 legal sidecars, 0 user notes, 0 manual quotes, 0 verified claims | Do not promote claims until user evidence exists | Verified claim count remains 0 unless legal evidence and review exist |
| USE-REAL-001 | Controlled real user workflow has not yet been run with a live user idea | Product risk | Smoke runs used controlled fixtures | Begin first real game idea workflow and record gaps separately from evidence | One real user-supplied idea is reviewed with source-safe assumptions and no fake evidence |
| DOC-DRIFT-001 | Runtime docs may drift as new skills are added | P2 | Documentation governance exists but requires ongoing enforcement | Keep manifest, router, skill file, context pack, output contract, and validator aligned for every new skill | Every new skill passes `agent:runtime-check` and `kb:check` |

## Not A Blocker For Controlled Use

The remaining gaps do not block controlled real use because Run 002 passed all executed tasks and source safety remains intact.

They do block claims of full empirical maturity, broad user usability proof, and verified source-backed masterclass status.
