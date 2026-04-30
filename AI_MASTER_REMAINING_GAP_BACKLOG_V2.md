# AI Master Remaining Gap Backlog V2

Date: 2026-04-30

## Benchmark Blockers

| gap_id | severity | title | affected_files | required_fix | acceptance_criteria |
|---|---|---|---|---|---|
| RTB-001 | blocker | Run 002 has no target outputs | `AI_MASTER_BENCHMARK_RUN_002_RESPONSES.md`, `AI_MASTER_BENCHMARK_RUN_002_SCORES.md` | Collect real target outputs or keep the run blocked. | Raw outputs exist for collected cases, missing cases remain unscored. |
| RTB-002 | blocker | Run 003 has no target outputs | `AI_MASTER_BENCHMARK_RUN_003_RESPONSES.md`, `AI_MASTER_BENCHMARK_RUN_003_SCORES.md` | Run the regression prompt package against a real target model. | Raw outputs are preserved and scored only when collected. |
| RTB-003 | blocker | Target AI identity is missing | benchmark response and raw output files | Record target model name, version, date, and supplied context. | Every collected response has target identity metadata. |
| RTB-004 | blocker | Behavioral P0 safety is not evaluable | `AI_MASTER_BEHAVIORAL_READINESS_REPORT.md` | Score real outputs against P0 traps. | P0 count is measured from actual responses. |

## Runtime And Prompt Gaps

| gap_id | severity | title | affected_files | required_fix | acceptance_criteria |
|---|---|---|---|---|---|
| RTP-001 | P1 | Runtime effectiveness unmeasured | `AI_MASTER_RUNTIME_PACK.md`, `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md` | Collect and score outputs. | Runtime repairs are tied to observed failures. |
| RTP-002 | P1 | Prompt repair effectiveness unmeasured | `MASTER_PROMPT_LIBRARY.md`, `prompts/master_designer/` | Compare scored outputs before and after repairs. | Improvement claims are based on real scores only. |
| RTP-003 | P1 | Routing repair effectiveness unmeasured | `AI_MASTER_ROUTING_RULES.md`, problem maps | Score routing-related cases. | Capability and lens/workflow selection are evaluated from responses. |

## Source-Backed Evidence Gaps

| gap_id | severity | title | affected_files | required_fix | acceptance_criteria |
|---|---|---|---|---|---|
| EVD-001 | blocker | No legal sidecars | `kb/13_evidence/sidecars/records/` | User supplies legal sidecar data. | Sidecar validates and defaults remain safe. |
| EVD-002 | blocker | No user manual notes | `kb/13_evidence/manual_notes/records/` | User supplies 3-5 manual notes. | Notes are recorded as user-authored and scoped. |
| EVD-003 | P1 | No optional manual quotes | `kb/13_evidence/manual_quotes/records/` | User supplies a short lawful quote if desired. | Quote is user-provided, length checked, and not used for unsafe verification. |
| EVD-004 | P1 | Verified claims remain blocked | claim and evidence files | Add legal evidence and reviewer approval. | No verified claim exists without legal EvidenceRef. |

## Project Evidence Gaps

| gap_id | severity | title | affected_files | required_fix | acceptance_criteria |
|---|---|---|---|---|---|
| PRJ-001 | P1 | No real ProjectOverlay | `kb/09_project_overlays/records/` | User supplies project context. | Project claims remain project-local. |
| PLT-001 | P1 | No real PlaytestLog | `kb/09_project_overlays/playtest_logs/records/` | User supplies playtest data. | Observations, interpretations, decisions, and next actions are separated. |

## Next Prompt

`collect-run-003-target-ai-outputs`
