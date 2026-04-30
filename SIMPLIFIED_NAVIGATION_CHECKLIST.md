# Simplified Navigation Checklist

Date: 2026-04-30

## Purpose

Use this checklist to confirm the simplified navigation layer remains usable after future changes.

## Required Checks

| check_id | check | status | evidence |
|---|---|---|---|
| SNC-001 | Root README points to first-use files. | PASS | `README.md` links `USE_THIS_FIRST.md`, quickstart, simplified navigation, and role paths. |
| SNC-002 | A user can find the smallest route. | PASS | `SIMPLIFIED_NAVIGATION.md` gives use-now, learn, and maintain routes. |
| SNC-003 | A user can choose a use case. | PASS | `USE_CASE_HUB.md` maps situations to prompts, context packs, and examples. |
| SNC-004 | A user can ignore advanced files. | PASS | `WHAT_TO_IGNORE_FIRST.md` and `EVERYTHING_ELSE_IS_REFERENCE.md` define ignore-first material. |
| SNC-005 | AI agents know what to load first. | PASS | `REPO_FOR_AI_AGENTS.md` defines read-first and do-not-read defaults. |
| SNC-006 | Maintainers have a separate route. | PASS | `REPO_FOR_MAINTAINERS.md` separates commands and generated-file rules. |
| SNC-007 | Top-20 normal-use files are listed. | PASS | `TOP_20_FILES_TO_KNOW.md` lists the normal-use surface. |
| SNC-008 | Important files are classified. | PASS | `FILE_PRIORITY_INDEX.md` uses required classification labels. |
| SNC-009 | Source-governance boundaries remain visible. | PASS | `REPO_FOR_AI_AGENTS.md` and `WHAT_NOT_TO_TOUCH.md` prohibit unsafe source use. |
| SNC-010 | No canonical KB content was deleted or moved. | PASS | This layer adds navigation only. |
| SNC-011 | No app features were added. | PASS | New files are documentation only. |
| SNC-012 | Validation passes. | PASS | Latest validation reports 0 P0 issues and 0 warnings. |

## Future Regression Checks

Fail the navigation layer if:

- README no longer points to a first-use route;
- `USE_CASE_HUB.md` is removed without replacing the route selector;
- AI agents are told to load the whole repository by default;
- source-safety rules are hidden behind advanced governance files only;
- generated exports are presented as hand-editable;
- deprecated BookOS material is treated as active;
- benchmark or evidence files are required for normal use.

