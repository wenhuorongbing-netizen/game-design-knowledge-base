# Updated Next Development Plan

Date: 2026-04-30

## Next Phase

Run Codex agent smoke tasks.

## Objective

Test whether Codex can use `AGENT_START.md`, route to the correct skill, load minimal context, and produce contract-compliant game design artifacts.

## Trial Inputs

Use existing files only:

- `AGENT_START.md`
- `AGENT_SKILL_MANIFEST.md`
- `AGENT_ROUTER.md`
- one `skills/*/SKILL.md`
- one `agent_output_contracts/*` file
- one `codex_tasks/*` recipe

## Trial Scenarios

| Scenario | Artifact |
|---|---|
| review idea | one-page concept memo |
| define core experience | core experience statement |
| audit meaningful choice | meaningful decision audit |
| make prototype plan | prototype plan |
| check claim safety | claim safety report |

## Do Not Do Next

- Do not add more runtime docs before smoke evidence.
- Do not start evidence intake without user evidence.
- Do not score AI benchmark cases without real target outputs.
- Do not build app features.

## 2026-05-01 Update - After Codex Smoke Acceptance

The Codex smoke phase is complete. Run 002 improved over Run 001 and no P0 failures were recorded.

## Next Phase

Begin first real game idea workflow.

## Objective

Use the accepted Codex runtime on one real user-supplied vague game idea or design problem.

## Execution Plan

1. Start from `AGENT_START.md`.
2. Use `AGENT_SKILL_MANIFEST.md` and `AGENT_ROUTER.md`.
3. Select `game_idea_review` unless the router selects a better skill.
4. Load only the smallest relevant context pack and skill file.
5. Produce one concrete design artifact.
6. Label assumptions, source_basis, confidence, evidence gaps, and next action.
7. Do not treat the output as verified evidence.

## Still Open

- Add a lightweight smoke-output section checker.
- Clarify fake-playtest routing polish if it appears again.
- Begin reading notes intake only when the user supplies actual notes.

## 2026-05-01 Update - Input Required Before Execution

The workflow setup is ready, but execution is blocked until the user provides a real game idea or design problem.

When input arrives:

1. Use `game_idea_review`.
2. Produce `one_page_concept_memo`.
3. Keep source_basis as `unsupported_draft`.
4. Keep confidence weak unless the user supplies concrete constraints or evidence.
