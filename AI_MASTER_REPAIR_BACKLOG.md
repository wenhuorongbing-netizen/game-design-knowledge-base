# AI Master Repair Backlog

Date: 2026-04-29

## Purpose

This backlog groups repairs after Run 001 failure analysis.

Run 001 produced no target AI responses, so repairs focus on benchmark collection hardening rather than prompt rewriting.

## Prompt Library Repairs

| ID | Severity | Repair | Evidence | Acceptance Test |
|---|---|---|---|---|
| PL-RUN001-001 | hold | Do not rewrite prompt templates yet. | No target responses were collected; no prompt behavior failure is proven. | Prompt repair begins only after scored responses show recurring prompt-level failure. |

## AI Operating Manual Repairs

| ID | Severity | Repair | Evidence | Acceptance Test |
|---|---|---|---|---|
| OM-RUN001-001 | hold | Do not modify operating manual yet. | No target responses were collected. | Manual repair begins only after response analysis shows behavior rules are missing or ambiguous. |

## Router Map Repairs

| ID | Severity | Repair | Evidence | Acceptance Test |
|---|---|---|---|---|
| RM-RUN001-001 | hold | Do not modify problem-to-lens or problem-to-workflow maps yet. | No routing output was produced by target AI. | Router repair begins only after scored responses show recurring misclassification or weak routing. |

## Benchmark Rubric Repairs

| ID | Severity | Repair | Evidence | Acceptance Test |
|---|---|---|---|---|
| BR-RUN001-001 | P2 | Add explicit rule that missing responses are not scored and do not count as model P0/P1/P2 behavior failures. | Run 001 required this distinction. | Scoring docs distinguish operational block from response-quality failure. |
| BR-RUN001-002 | P2 | Add partial-run policy for scoring fewer than 15 responses. | Future runs may receive partial outputs. | A partial run can compute score only over collected responses while tracking missing cases separately. |

## Response Format Repairs

| ID | Severity | Repair | Evidence | Acceptance Test |
|---|---|---|---|---|
| RF-RUN001-001 | P1 | Create a paste-ready response packet template with 15 prompts and metadata fields. | Target outputs were not supplied. | User can fill one file with target model identity and exact responses. |
| RF-RUN001-002 | P1 | Require target model identity before scoring. | `target_ai_identity: not_supplied`. | Response collection cannot proceed without target identity or explicit anonymous-test status. |
| RF-RUN001-003 | P1 | Require source-governance context confirmation for target AI. | Source-governance instruction context was not confirmed. | Each response record states whether source rules were included. |

## Source-Safety Repairs

| ID | Severity | Repair | Evidence | Acceptance Test |
|---|---|---|---|---|
| SS-RUN001-001 | P1 | Add source-governance preamble to benchmark response collection packet. | Future source-safety scoring needs consistent instructions. | Target response packet includes no source body parsing, no fake evidence, no verified claims without evidence_ref. |
| SS-RUN001-002 | P1 | Keep P0 traps unchanged. | No responses were collected; no reason to weaken safety rules. | Any future fake evidence, hallucinated citation, or unsafe source use is marked P0. |

## Next Repair Priority

1. Build target response packet.
2. Add source-governance preamble to the packet.
3. Add partial-run protocol.
4. Collect real target responses.
5. Score only collected responses.

## Prompt 5 Gate

Prompt 5 may begin only if it implements collection hardening, not prompt rewriting. Score-based runtime hardening remains blocked until real responses exist.

