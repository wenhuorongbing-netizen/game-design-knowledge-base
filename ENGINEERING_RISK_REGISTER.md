# Engineering Risk Register

Date: 2026-04-30

## Risk Register Verdict

No P0 engineering or source-governance blockers were found in the baseline audit.

The main risks are P1 usability, automation, and empirical-validation gaps.

## Risk Scale

| Severity | Meaning |
|---|---|
| P0 | blocks safe repository use |
| P1 | materially reduces usability, reliability, or maintainability |
| P2 | improvement opportunity or future quality risk |

## Top Risks

| risk_id | severity | risk | evidence | mitigation | next action |
|---|---|---|---|---|---|
| ENG-RISK-001 | P1 | No observed hands-on user trial yet | `HANDS_ON_USER_TRIAL_REPORT.md` is blocked pending observation | collect real trial packet before claiming empirical usability | run `provide-hands-on-user-trial-observation` |
| ENG-RISK-002 | P1 | Root documentation surface is large | 1,247 Markdown files and many root reports/prompts/audits | keep progressive disclosure and top-20 routing current | audit entrypoints for duplicate routes |
| ENG-RISK-003 | P1 | No CI workflow found | `.github/workflows/` is absent | add validation/audit workflow later | create CI plan after usability audit |
| ENG-RISK-004 | P1 | No formal unit-test framework found | `package.json` only defines KB scripts | add focused validator tests when rules stabilize | create test strategy for validator edge cases |
| ENG-RISK-005 | P1 | Benchmark readiness can be misread | benchmark scaffolds exist, but real outputs remain limited or blocked | keep human reports explicit about missing outputs | maintain unscored/missing-output status |
| ENG-RISK-006 | P1 | Evidence-backed masterclass remains blocked | no legal sidecars, manual notes, or manual quotes | keep verified claims at zero until user evidence exists | wait for user evidence packet |
| ENG-RISK-007 | P2 | Generated reports change during validation/audit | validation and audit commands update report timestamps and generated audit files | treat generated report diffs as expected command output | document generated report ownership |
| ENG-RISK-008 | P2 | Legacy folders remain visible | `kb-tools/` and `50-game-design-masters-kb/` remain in root | keep legacy READMEs and ignore-first docs prominent | verify legacy hard guards periodically |
| ENG-RISK-009 | P2 | Optional portal may lag canonical exports | `kb-portal/` is static and non-canonical | keep portal marked optional and trust `kb/` over portal | audit portal data freshness only when using portal |
| ENG-RISK-010 | P2 | Markdown tables may overload screen-reader or mobile users | many route and matrix files use dense tables | provide prose summaries and shortest-path files | run accessibility-focused document audit |
| ENG-RISK-011 | P2 | `report.md` is append-only but long | append-only log is useful for traceability but hard to scan | keep phase summaries in dedicated reports | add report index only if needed |
| ENG-RISK-012 | P2 | Private/high-risk source boundary must remain protected | `_private_sources/` exists locally and high-risk records exist | validator/audit currently pass; do not parse source bodies | continue source audit on every phase |

## Current Safety Gates

| Gate | Result |
|---|---|
| `npm run kb:export` | PASS |
| `npm run kb:validate` | PASS |
| `npm run kb:audit` | PASS |
| P0 issues | 0 |
| warnings | 0 |
| accepted exceptions | 0 |
| source governance | PASS |

## User-Facing Risk Summary

The repository is safe but still feels large. A first-time user should not start from `kb/`, benchmark files, schemas, generated exports, or audits. The intended first-use path is `USE_THIS_FIRST.md` to `10_MINUTE_QUICKSTART.md` to `USE_CASE_HUB.md`.

## AI-Agent Risk Summary

The main AI-agent risk is overloading context or treating draft scaffolds as verified knowledge. AI agents should start with `AI_CONTEXT_PACKS.md`, choose one pack, and apply `AI_UNCERTAINTY_AND_SOURCE_RULES.md`.

## Maintainer Risk Summary

The main maintainer risk is local-only quality gates. The authoritative scripts are clear, but CI is absent. A future phase should add CI after the usability layer is empirically tested.

## Recommended Next Risk Reduction

1. Audit entrypoints for duplication and accessibility.
2. Collect one real hands-on user trial observation.
3. Add a CI workflow for `npm run kb:validate` and `npm run kb:audit`.
4. Add validator unit tests for direction drift, source governance, and report consistency.
