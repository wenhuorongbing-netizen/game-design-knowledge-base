# Next Phase Decision Codex Runtime

Date: 2026-04-30

## Chosen Next Phase

Run Codex agent smoke tasks.

## Reason

The structural skill pack now exists. The next highest-value work is proving that Codex can actually follow `AGENT_START.md`, route through the manifest/router, load one skill, and produce contract-compliant artifacts.

## Not Chosen

| Option | Reason |
|---|---|
| more documentation | risks increasing bloat |
| evidence intake | blocked until user evidence exists |
| benchmark scoring | not needed for normal runtime |
| app build | out of scope |
| directory moves | risky before runtime smoke test |

## Exact Next Prompt

`run-codex-agent-smoke-tasks`

## Success Criteria

- 5 to 10 Codex task recipes are executed.
- Agent loads `AGENT_START.md`.
- Agent selects correct skill.
- Agent avoids forbidden files.
- Agent produces output contract sections.
- Agent labels assumptions, `source_basis`, confidence, evidence gaps, and next action.
