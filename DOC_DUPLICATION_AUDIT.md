# Documentation Duplication Audit

Date: 2026-04-30

## Verdict

Verdict: CONTROL_NEEDED.

The repository has strong documentation, but several categories overlap enough that future work needs creation rules and lifecycle states.

## Duplication Hotspots

| Area | Observation | Risk | Control |
|---|---|---|---|
| first-use docs | multiple start, quickstart, launchpad, and route files exist | first-time users may see too many good options | keep `USE_THIS_FIRST.md` and `TOP_10_FILES_FOR_FIRST_USE.md` authoritative |
| prompt docs | master prompt library, hands-on prompt library, and individual prompts coexist | prompt changes may drift | individual prompt files are canonical for copy-paste; indexes only summarize |
| context docs | runtime context pack and task-specific context packs coexist | AI agents may load too much | `AI_CONTEXT_PACKS.md` routes to smallest pack |
| reports | phase reports, acceptance reviews, and `report.md` coexist | current state may be hard to find | create current-state index in a later improvement |
| governance docs | source, validation, documentation, CI, and evidence rules overlap | maintenance burden | owner matrix and lifecycle policy define responsibility |
| examples | worked examples and benchmark artifacts both show outputs | synthetic examples may be mistaken for tested outputs | labels must remain explicit |

## Canonical Sources By Topic

| Topic | Canonical source |
|---|---|
| first start | `USE_THIS_FIRST.md` |
| first-use top files | `TOP_10_FILES_FOR_FIRST_USE.md` |
| use case routing | `USE_CASE_HUB.md` |
| copy-paste prompt details | `hands_on_prompts/` |
| context pack details | `context_packs/` |
| AI source/confidence rules | `AI_UNCERTAINTY_AND_SOURCE_RULES.md` |
| source governance status | `SOURCE_GOVERNANCE_AUDIT.md` |
| validation status | `VALIDATION_REPORT.md` |
| append-only historical log | `report.md` |
| doc lifecycle | `DOC_LIFECYCLE_POLICY.md` |

## Required Follow-Up

- Do not create another first-use index without reviewing this audit.
- When adding a new guide, link it from exactly one primary hub.
- When a new file duplicates 70 percent or more of an existing file's role, merge or mark one as `archive_candidate`.

