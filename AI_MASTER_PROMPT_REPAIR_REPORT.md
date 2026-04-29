# AI Master Prompt Repair Report

Date: 2026-04-29

## Purpose

This report documents preventive prompt-library hardening for the AI Master Benchmark and Runtime Hardening Phase.

## Evidence Boundary

Run 001 did not collect real target AI responses. Therefore, no scored prompt-level failures were proven.

The prompt repairs are preventive and structural. They address known benchmark risk categories without altering benchmark scores or inventing results.

## Files Repaired

| Area | Files |
|---|---|
| prompt library index | `MASTER_PROMPT_LIBRARY.md` |
| prompt folder README | `prompts/master_designer/README.md` |
| prompt templates | 20 files under `prompts/master_designer/` |
| self-review checklist | `AI_MASTER_PROMPT_SELF_REVIEW_CHECKLIST.md` |
| changelog | `AI_MASTER_PROMPT_CHANGELOG.md` |

## Prompt Templates Repaired

| Prompt | Repair |
|---|---|
| game idea review | Added runtime contract requiring routing, lenses, workflow, artifact, source/confidence, assumptions, caution rules, and self-review. |
| core experience definition | Added runtime contract requiring artifact-level output and hypothesis/confidence boundaries. |
| design question generation | Added runtime contract requiring selected lens set and source-safe questions. |
| lens review | Added runtime contract requiring smallest useful lens set and no invented facts. |
| meaningful decision audit | Added runtime contract requiring decision matrix, no invented consequences, and evidence gaps. |
| systems audit | Added runtime contract requiring system map and no invented project evidence. |
| economy audit | Added runtime contract requiring source/sink artifact and no invented numbers. |
| game feel audit | Added runtime contract requiring input/response/context separation and no fake observations. |
| UI feedback audit | Added runtime contract requiring readability artifact and assumptions. |
| narrative-mechanic alignment audit | Added runtime contract requiring alignment artifact and no invented story details. |
| prototype plan | Added runtime contract requiring prototype question, smallest test, and next decision. |
| playtest plan | Added runtime contract requiring no invented participants/results. |
| concept teaching | Added runtime contract requiring working definition, exercise, and source caveat. |
| framework comparison | Added runtime contract requiring safe comparison and no book-specific overclaiming. |
| reading plan | Added runtime contract requiring no private book parsing or chapter summaries. |
| user note to card conversion | Added runtime contract requiring user-authored note boundary and no verified cards. |
| unsupported claim detection | Added runtime contract requiring source_basis/confidence classification and exact repairs. |
| exercise generation | Added runtime contract requiring original exercises only. |
| design decision log | Added runtime contract requiring local decision scope and validation step. |
| uncertainty explanation | Added runtime contract requiring clear separation of known/assumed/inferred/verified. |

## Failure Categories Addressed

| Failure Category | Status |
|---|---|
| missing_diagnostic_questions | Preventive hardening added. |
| weak_lens_selection | Preventive hardening added. |
| weak_workflow_selection | Preventive hardening added. |
| generic_advice | Preventive hardening added through artifact-first output. |
| poor_artifact_output | Preventive hardening added through output artifact format. |
| missing_source_basis | Preventive hardening added. |
| missing_confidence | Preventive hardening added. |
| hallucinated_citation | Preventive hardening added through refusal/caution rules. |
| fake_evidence | Preventive hardening added through refusal/caution rules. |
| overclaiming | Preventive hardening added through source_basis and confidence rules. |
| weak_actionability | Preventive hardening added through next action requirement. |
| no_uncertainty_handling | Preventive hardening added through assumption handling. |
| book_claim_overreach | Preventive hardening added through evidence_ref/source rules. |

## What Was Not Changed

- Benchmark scores were not changed.
- Missing responses were not scored.
- No fake target AI outputs were created.
- No prompt asks AI to parse private books.
- No prompt asks AI to invent evidence.
- Source-safety rules were not weakened.

## Acceptance Status

Prompt library hardening: completed.

Runtime effectiveness: still untested until real target AI outputs are collected and scored.

