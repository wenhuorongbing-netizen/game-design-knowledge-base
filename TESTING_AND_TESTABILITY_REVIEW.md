# Testing And Testability Review

Date: 2026-04-30

## Verdict

Verdict: VALIDATION_STRONG, TESTING_INCOMPLETE.

The repository validates the current KB state well. It does not yet test validator behavior against controlled failure fixtures.

## Current Gates

| Command | Status | Role |
|---|---|---|
| `npm run kb:export` | PASS | regenerate exports |
| `npm run kb:validate` | PASS | validate KB safety and structure |
| `npm run kb:audit` | PASS | source-governance audit |
| `npm run kb:coverage` | available | structural coverage summary |

## Missing Tests

| Missing test | Risk | Recommended fixture |
|---|---|---|
| direction drift | old deprecated-product instructions could reappear | root file with active legacy build text |
| high-risk source processing | unsafe body parsing could slip in | source record with high-risk full-text operation |
| verified claim evidence | unsupported claim could be promoted | claim marked verified without EvidenceRef |
| broken relationships | graph exports could degrade | relationship target missing |
| sidecar approval | unsafe sidecar could approve full processing | pending or missing sidecar used as evidence |
| prompt/source safety | prompt could ask for private parsing | prompt fixture containing private source summary request |

## Recommendation

Add a tiny fixture harness under `tools/test_fixtures/` or `tools/tests/`. Keep it local and dependency-light. Do not add a heavy test framework until needed.
