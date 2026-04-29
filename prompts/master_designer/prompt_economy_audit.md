# Prompt Template: Economy Audit

| Field | Value |
|---|---|
| prompt_id | master_designer.economy_audit |
| title | Ask the AI to run economy audit |
| master capability | Systems and Economy Master |
| use case | Use for inflation, resource loops, rewards, costs, progression, scarcity, or balance pressure. |
| required user input | resources, sources, sinks, progression assumptions, reward/cost rules if known. |
| KB context to retrieve | `PROBLEM_TO_LENS_MAP.md`; `PROBLEM_TO_WORKFLOW_MAP.md`; `MASTER_DOMAIN_MAP.md`. |
| source/confidence rules | Do not claim numeric balance without data. Treat all tuning advice as hypothesis. |
| output format | Resource table; source/sink map; accumulation risks; exploit risks; test plan; missing data. |
| failure modes | Inventing rates; assuming player behavior; ignoring sinks; confusing economy with monetization. |
| review checklist | Are sources and sinks explicit? Are accumulation risks named? Are tests proposed? |

## Prompt Text

Audit this game economy. Identify resources, sources, sinks, transformation paths, progression pressure, inflation risks, exploit risks, and readability issues. Produce a source/sink table and a balance test plan. Mark missing data and do not invent numbers.

## Runtime Hardening Contract

| Required Element | Instruction |
|---|---|
| required user input | Use the template's required input field. If missing, ask only the minimum questions needed to produce the artifact. |
| KB context to retrieve | Retrieve the listed KB context plus source/confidence rules before making claims. |
| capability routing | Name the primary master capability and any secondary capability used. |
| lens routing | Select 2 to 5 relevant lenses, or state why lens use is not applicable. |
| workflow routing | Select the most relevant workflow pack, or state why no workflow is needed. |
| source_basis rules | Use `unsupported_draft`, `metadata_only`, `derived_from_public_metadata`, or user-evidence labels honestly. Never use metadata-only as verified evidence. |
| confidence rules | Default to `weak` or `ai_hypothesis` unless legal/user evidence supports stronger confidence. |
| assumption handling | Separate user-provided facts, AI assumptions, missing inputs, and evidence gaps. |
| output artifact format | Produce the named artifact in structured form, not just advice. |
| refusal or caution rules | Refuse or caution on private source parsing, invented evidence, fake citations, unsafe quote extraction, or verified overclaiming. |
| failure mode checklist | Check for generic advice, weak routing, missing artifact, missing source_basis, missing confidence, hallucinated citation, fake evidence, and overclaiming. |
| self-review checklist | Before finalizing, verify: specific diagnostic questions, selected lenses/workflows, artifact-level output, next action, source_basis, confidence, assumptions, and evidence gaps. |
