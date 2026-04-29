# AI Master Remaining Gap Backlog

Date: 2026-04-29

## P0 Gaps

| Gap ID | Severity | Title | Affected Files | Required Fix | Acceptance Criteria |
|---|---|---|---|---|---|
| none | P0 | No unresolved P0 repository or source-governance blockers | n/a | Continue enforcing validation and source governance. | Validation remains 0 P0 issues, 0 warnings, 0 accepted exceptions. |

## Blocking Dependencies

| Gap ID | Severity | Title | Affected Files | Required Fix | Acceptance Criteria |
|---|---|---|---|---|---|
| AIB-BLOCK-001 | blocker | Target AI outputs missing | `AI_MASTER_BENCHMARK_RUN_001_RESPONSES.md`, `AI_MASTER_BENCHMARK_RUN_002_RESPONSES.md` | Run the selected benchmark prompts against the target AI and paste raw responses without editing. | Responses are collected, response_status is response_collected, and scoring can begin. |
| AIB-BLOCK-002 | blocker | Verified source-backed masterclass lacks user evidence | `kb/13_evidence/`, `SOURCE_GOVERNANCE_AUDIT.md` | User supplies legal sidecar, manual notes, optional manual quote, and review data. | EvidenceRefs can be created without violating source policy. |

## P1 Gaps

| Gap ID | Severity | Title | Affected Files | Required Fix | Acceptance Criteria |
|---|---|---|---|---|---|
| AIB-P1-001 | P1 | Runtime behavior untested | `AI_MASTER_RUNTIME_PACK.md`, benchmark run files | Test target AI with Runtime Pack context. | At least one benchmark run has collected and scored outputs. |
| AIB-P1-002 | P1 | Prompt repairs not empirically measured | `MASTER_PROMPT_LIBRARY.md`, `AI_MASTER_PROMPT_REPAIR_REPORT.md` | Compare Run 001/Run 002 responses after target outputs exist. | Repair effectiveness table uses real scores, not assumptions. |
| AIB-P1-003 | P1 | Routing repairs not empirically measured | `AI_MASTER_ROUTING_RULES.md`, `AI_MASTER_ROUTING_REPAIR_REPORT.md` | Evaluate whether target outputs choose correct capability, lenses, workflows, and artifacts. | Routing failure audit is based on collected outputs. |
| AIB-P1-004 | P1 | Scoreboards are structurally ready but empty | `AI_MASTER_CAPABILITY_SCOREBOARD.md`, `AI_MASTER_DOMAIN_SCOREBOARD.md` | Populate scoreboards only after real scoring. | Capability/domain readiness changes from not_tested using real data. |
| AIB-P1-005 | P1 | Runtime Pack links may need repeated surfacing in navigation | `README.md`, `START_HERE.md`, `kb/navigation/` | Add stronger navigation links if users still miss runtime entry points. | First-time user can find runtime pack from repo entry files in under 2 minutes. |

## P2 Improvements

| Gap ID | Severity | Title | Affected Files | Required Fix | Acceptance Criteria |
|---|---|---|---|---|---|
| AIB-P2-001 | P2 | Add benchmark operator checklist examples | `AI_MASTER_BENCHMARK_COLLECTION_PROTOCOL.md` | Add clearer examples after first real collection run. | New operator can collect outputs without altering them. |
| AIB-P2-002 | P2 | Add concise runtime quick cards | `AI_MASTER_RUNTIME_QUICK_REFERENCE.md` | Create shorter command-like usage cards after observing user friction. | Runtime pack is easier to use in short conversations. |
| AIB-P2-003 | P2 | Add model-context comparison protocol | benchmark dashboard files | Define how to compare different context packs or target models. | Future runs can distinguish model weakness from prompt/context weakness. |

