# Agent Runtime Validation Hardening Report

Date: 2026-04-30

## Verdict

Verdict: ACCEPTED_LIGHTWEIGHT_HARDENING.

The Agent Skill Pack now has a dedicated contract/path/safety checker in addition to the existing runtime and router fixture checks.

This hardening remains lightweight. It does not execute AI reasoning, score outputs, build an app, or parse private source bodies.

## Changes Implemented

| Change | File | Purpose |
|---|---|---|
| Added contract checker | `tools/kb_quality/check_agent_contracts.js` | Validate manifest paths, context packs, prompt paths, output contracts, required labels, skill boundaries, and unsafe affirmative source instructions. |
| Added script | `package.json` | `agent:contract-check` runs the new checker. |
| Added aggregate script | `package.json` | `agent:runtime-check` runs runtime, router, and contract checks. |
| Hardened aggregate gate | `package.json` | `kb:check` now runs `agent:runtime-check` before KB export, validation, audit, and coverage. |

## Validation Rules Now Covered

| Rule | Coverage |
|---|---|
| Router chosen skills exist in manifest | `agent:router-check` |
| Router context packs exist | `agent:router-check` |
| Router output artifacts exist | `agent:router-check` |
| Manifest `files_to_load` paths exist unless intentionally optional | `agent:contract-check` |
| Manifest `related_context_pack` exists | `agent:contract-check` |
| Manifest `related_prompt_file` exists or is explicitly optional in skill text | `agent:contract-check` |
| Every skill output contract exists | `agent:check` and `agent:contract-check` |
| Every output contract includes required labels | `agent:contract-check` |
| Every skill includes `Files Not To Load` | `agent:check` and `agent:contract-check` |
| No skill contains unsafe affirmative instruction to parse private source body | `agent:contract-check` |
| No skill contains instruction to invent evidence | `agent:contract-check` |
| No skill promotes `metadata_only` to verified | `agent:contract-check` |

## Commands Run

| Command | Result |
|---|---|
| `npm run agent:contract-check` | PASS |
| `npm run agent:check` | PASS |
| `npm run agent:router-check` | PASS |
| `npm run agent:runtime-check` | PASS |
| `npm run kb:check` | PASS |

## Source Governance Boundary

The new checker validates text patterns and repository paths. It does not authorize any source processing.

The hardening preserves these constraints:

- no private source body parsing;
- no copyrighted chapter summaries;
- no quote extraction;
- no invented user notes;
- no invented sidecars;
- no invented evidence;
- no verified claim without legal evidence and review.

## Known Limits

- The checker is static and cannot prove a live Codex response will be high quality.
- The checker does not validate every Markdown link.
- The checker does not score smoke outputs.
- Unsafe instruction detection is intentionally conservative and pattern-based.
- Context pack prompt-copy wording remains a separate P2 repair.

## Recommendation

Use `npm run agent:runtime-check` for Agent Skill Pack changes and `npm run kb:check` before final acceptance or pull request.

