# Updated TODO

Date: 2026-04-30

## Immediate

- Run 5 to 10 Codex agent smoke tasks from `codex_tasks/`.
- Record selected skill, files loaded, output contract used, and forbidden files avoided.
- Update agent runtime backlog from observed results.

## Next

- Add router fixture harness.
- Add output contract response checks.
- Add plain-language trust-label cheat sheet.
- Add current-state index if report review remains slow.

## Later

- Add prompt style lint if prompt library grows.
- Run optional portal accessibility smoke test.
- Modularize importer and validator after tests exist.
- Collect target AI benchmark outputs when available.
- Begin user reading notes intake only when user supplies notes.

## 2026-05-01 Update - Current TODO After Codex Smoke

## Immediate

- Begin first real game idea workflow using `AGENT_START.md`, manifest, router, one skill, one context pack, and one output contract.
- Ask the user for one real vague game idea or design problem.
- Produce a source-safe artifact with assumptions, source_basis, confidence, evidence gaps, and next action.

## Runtime Backlog

- Implement `P2-AUTO-001`: lightweight smoke-output section checker.
- Resolve `P3-CST008-001`: fake-playtest routing polish if needed.
- Keep `kb:check` passing after every runtime change.

## Evidence Backlog

- Wait for real user reading notes before evidence intake.
- Wait for legal sidecars before any high-risk source processing beyond metadata-only governance.
- Keep verified claim count at 0 until reviewed evidence exists.

## 2026-05-01 Update - Waiting For Game Idea

- Request a real game idea or design problem from the user.
- Do not generate the first concept memo until user input exists.
- Use `FIRST_REAL_GAME_IDEA_WORKFLOW_INPUT_TEMPLATE.md` for the next user response.

## 2026-05-01 Update - After First Game Idea Workflow Final Review

## Immediate

- Wait for a valid user game idea packet.
- Do not generate more blocked artifacts for this workflow.
- Use `first_real_game_idea_workflow/GAME_IDEA_PACKET_TEMPLATE.md` as the canonical input template.

## Optional Runtime Repair

- Add a blocked-artifact template if this pattern repeats.
- Add a run suffix convention for repeated prompt sections in `report.md`.
- Add a lightweight workflow checker for `USER_GAME_IDEA_PACKET.md` presence.

## Still Do Not Do

- Do not fabricate concept memo content.
- Do not invent project facts.
- Do not invent playtest data.
- Do not promote claims to verified.

## 2026-05-01 Rerun Confirmation

- Continue waiting for `first_real_game_idea_workflow/USER_GAME_IDEA_PACKET.md`.
- Do not create any real workflow artifact until the user supplies the required idea packet.
- Keep `source_basis` as `unsupported_draft` and confidence weak for future idea-derived artifacts unless evidence is supplied.

## 2026-05-01 Update - After User-Supplied Game Idea Final Acceptance

## Immediate

- Wait for a valid user game idea packet.
- Do not continue artifact prompts without required packet fields.
- Do not convert blocked records into completed design outputs.

## Optional Runtime Hardening

- Add a normal-use stop rule after intake.
- Add a blocked-artifact template if blocked records remain useful.
- Add a lightweight checker for `USER_GAME_IDEA_PACKET.md` presence.
- Add prompt-run suffixes for repeated `report.md` sections.

## Still Do Not Do

- Do not fabricate concept memo content.
- Do not invent project facts.
- Do not invent playtest data.
- Do not promote claims to verified.
