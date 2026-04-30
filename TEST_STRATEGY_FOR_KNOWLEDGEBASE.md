# Test Strategy For Knowledgebase

Date: 2026-04-30

## Verdict

Verdict: COMMAND_GATES_NOW_AUTOMATED, FIXTURE_TESTS_STILL NEEDED.

The repository now has CI for current-state validation. The next test maturity step is fixture-based regression testing for known-bad repository states.

## Test Layers

| Layer | Purpose | Current status | Next step |
|---|---|---|---|
| export test | generated KB exports can be rebuilt | automated in CI | keep |
| validation test | current KB passes safety/structure rules | automated in CI | keep |
| source-governance audit | high-risk sources remain safe | automated in CI | keep |
| coverage generation | structural coverage report updates | automated in CI | keep |
| repository boundary checks | private/archive files and required files | automated in CI | expand as needed |
| validator fixtures | known-bad states fail expected rules | not implemented | add fixture harness |
| first-use link tests | launchpad/use-case links resolve | manual/ad hoc | add script later |
| prompt style tests | copy-paste prompt accessibility | manual/ad hoc | add script later |

## Fixture Test Targets

Create small isolated fixture repositories or temporary fixture trees for:

- missing `entity_type`;
- broken relationship target;
- high-risk source with unsafe operation;
- verified claim without legal evidence;
- pending sidecar used for stronger claim;
- prompt or root doc requesting private source parsing;
- report contradiction;
- unsafe generated portal excerpt.

## Test Data Rules

Fixture data must be synthetic and minimal.

Do not include:

- private book text;
- copyrighted excerpts;
- real user notes;
- real manual quotes;
- real project/playtest evidence.

## Acceptance Criteria For Next Test Phase

- Fixture harness runs locally.
- Known-bad fixtures fail with expected P0 rule names.
- Known-good minimal fixture passes.
- CI runs fixture tests after the harness is stable.
