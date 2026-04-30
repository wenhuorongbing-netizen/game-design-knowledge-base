# Regression Test Plan

Date: 2026-04-30

## Verdict

Verdict: PLAN_READY, FIXTURES_NOT_YET_IMPLEMENTED.

The current CI proves the live repository passes. Regression testing should next prove the validator catches intentional violations.

## Regression Test Groups

### Group 1: Structural Entity Rules

Tests:

- missing id;
- duplicate id;
- missing entity_type;
- invalid confidence;
- broken relationship target.

Acceptance:

- each fixture fails with the expected rule;
- no fixture requires private source text.

### Group 2: Source Governance Rules

Tests:

- high-risk source with unsafe operation;
- metadata-only source used as verified evidence;
- source allows AI processing without sidecar;
- unsafe generated portal excerpt.

Acceptance:

- each fixture fails P0;
- source body text is never included.

### Group 3: Evidence And Claim Promotion Rules

Tests:

- verified claim without EvidenceRef;
- pending sidecar used for verified claim;
- promotion request without reviewer;
- promotion request beyond evidence scope.

Acceptance:

- invalid claims remain blocked;
- no real user evidence is fabricated.

### Group 4: Project And Playtest Scope Rules

Tests:

- project-local observation treated as general doctrine;
- playtest observation treated as universal doctrine;
- sample overlay marked stronger than unsupported draft.

Acceptance:

- validator flags unsafe scope expansion.

### Group 5: Direction And Report Consistency Rules

Tests:

- active deprecated-product direction in root docs;
- report says issue resolved while file state contradicts it;
- migration exception mismatch.

Acceptance:

- validator produces P0 failure.

## Implementation Approach

Use a small fixture harness that copies synthetic fixture trees into a temporary directory and runs:

- importer;
- validator;
- source audit where relevant.

Keep the harness dependency-light.

## Do Not Include

- private source files;
- real book excerpts;
- user notes;
- manual quotes;
- fake benchmark outputs;
- app builds.
