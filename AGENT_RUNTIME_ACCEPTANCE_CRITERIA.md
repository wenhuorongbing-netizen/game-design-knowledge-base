# Agent Runtime Acceptance Criteria

Date: 2026-04-30

## Acceptance Criteria

The agent runtime is accepted when:

- `AGENT_START.md` exists and is the obvious first file for Codex-like agents.
- `AGENT_SKILL_MANIFEST.md` exists.
- `AGENT_SKILL_MANIFEST.json` exists and parses as JSON.
- `AGENT_ROUTER.md` maps common user tasks to skills.
- `AGENT_CONTEXT_LOADING_PROTOCOL.md` prevents full-repo loading by default.
- `AGENT_SOURCE_SAFETY_RULES.md` states source boundaries.
- `AGENT_OUTPUT_CONTRACTS.md` lists artifact contracts.
- `skills/` contains at least 14 skill folders.
- every skill folder has `SKILL.md`.
- every skill has files to load and files not to load.
- every skill maps to one output contract.
- output contract files exist.
- normal use does not depend on benchmark files.
- normal use does not require human prompt-copy workflow.
- validation passes.

## Rejection Conditions

Reject the runtime if:

- an agent must inspect the whole repo to pick a skill;
- a skill asks to parse private source bodies;
- a skill permits fake evidence or fake citations;
- output artifacts omit assumptions, `source_basis`, confidence, evidence gaps, or next action;
- benchmark files become normal runtime dependencies;
- generated exports must be manually edited for normal use.
