# Skill: Systems Economy Audit

## Skill ID

systems_economy_audit

## Purpose

Analyze systems, loops, resources, sources, sinks, faucets, drains, balance, and economy risks.

## When To Use

Use when the user describes a messy system, resource loop, economy inflation, progression issue, or balance concern.

## When Not To Use

Do not use for UI-only feedback or narrative-only issues.

## Required User Input

- system or economy description.

## Optional User Input

- resources;
- sources and sinks;
- player actions;
- constraints;
- known failure symptoms.

## Files To Load

- `skills/systems_economy_audit/SKILL.md`
- `agent_output_contracts/systems_map.md`
- `agent_output_contracts/economy_audit.md`
- `context_packs/CP04_design_audit.md`

## Files Not To Load

- `_private_sources/`
- benchmark files
- generated exports
- private source bodies

## Related Context Pack

`context_packs/CP04_design_audit.md`

## Related Prompt File

`hands_on_prompts/P06_audit_systems_and_economy.md` is optional reference only.

## Related KB Domains

- Systems, Loops, and Economy
- Skill, Chance, Challenge, and Balance

## Related Cards/Lenses/Workflows

Use `DOMAIN_TO_WORKFLOW_INDEX.md` and `PROBLEM_TO_WORKFLOW_MAP.md` if a workflow is needed.

## Output Artifact

Systems map or economy audit.

## Output Contract

`agent_output_contracts/systems_map.md` or `agent_output_contracts/economy_audit.md`

## Source Safety Rules

Do not invent telemetry, player behavior, economy rates, or playtest findings.

## Confidence Rules

Default confidence: weak. Confidence improves only with quantities, loops, constraints, or observed data.

## Minimum Questions To Ask

- What resources exist?
- What creates each resource?
- What removes or spends each resource?

## Execution Protocol

1. Identify system parts.
2. Map loops and resource flow.
3. Identify sources, sinks, bottlenecks, and runaway loops.
4. Diagnose risk.
5. Recommend testable changes.

## Common Failure Modes

- linear feature list instead of system map;
- invented numbers;
- no feedback loop analysis;
- no test proposal.

## Acceptance Criteria

- System map or economy table exists.
- Risks and testable fixes are listed.
- Source and confidence labels are included.
