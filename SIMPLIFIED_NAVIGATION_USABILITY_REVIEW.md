# Simplified Navigation Usability Review

Date: 2026-04-30

## Verdict

Verdict: ACCEPTED_FOR_PROGRESSIVE_DISCLOSURE_USE.

The simplified navigation layer is structurally usable for first-time users, AI agents, and maintainers. It does not delete or move canonical KB content. It reduces perceived repository size by giving users a small first-use surface and classifying everything else as task-specific reference.

This is a documentation usability review, not an observed human user test.

## Review Scope

Reviewed:

- [SIMPLIFIED_NAVIGATION.md](SIMPLIFIED_NAVIGATION.md)
- [REPO_FOR_HUMANS.md](REPO_FOR_HUMANS.md)
- [REPO_FOR_AI_AGENTS.md](REPO_FOR_AI_AGENTS.md)
- [REPO_FOR_MAINTAINERS.md](REPO_FOR_MAINTAINERS.md)
- [TOP_20_FILES_TO_KNOW.md](TOP_20_FILES_TO_KNOW.md)
- [EVERYTHING_ELSE_IS_REFERENCE.md](EVERYTHING_ELSE_IS_REFERENCE.md)
- [FILE_PRIORITY_INDEX.md](FILE_PRIORITY_INDEX.md)
- [USE_THIS_FIRST.md](USE_THIS_FIRST.md)
- [HANDS_ON_START_HERE.md](HANDS_ON_START_HERE.md)
- [WHAT_TO_IGNORE_FIRST.md](WHAT_TO_IGNORE_FIRST.md)
- [DO_NOT_LOAD_EVERYTHING.md](DO_NOT_LOAD_EVERYTHING.md)

## Acceptance Questions

| Question | Status | Evidence |
|---|---|---|
| Can a new user avoid reading the whole repo? | PASS | `SIMPLIFIED_NAVIGATION.md`, `TOP_20_FILES_TO_KNOW.md`, and `EVERYTHING_ELSE_IS_REFERENCE.md` define a small first-use surface. |
| Are routes clear for normal use, learning, and maintenance? | PASS | `SIMPLIFIED_NAVIGATION.md` has three explicit routes. |
| Can AI agents avoid loading unnecessary files? | PASS | `REPO_FOR_AI_AGENTS.md` defines read-first files and do-not-read defaults. |
| Are source-governance boundaries visible? | PASS | `REPO_FOR_AI_AGENTS.md`, `REPO_FOR_HUMANS.md`, and `WHAT_NOT_TO_TOUCH.md` preserve private-source and verified-claim boundaries. |
| Are generated, benchmark, schema, legacy, and ignore-first files classified? | PASS | `FILE_PRIORITY_INDEX.md` classifies important file groups. |
| Does the layer preserve canonical content? | PASS | No canonical KB content was deleted or moved. |
| Does it avoid app-product drift? | PASS | New files describe navigation only; no app, auth, forum, or reading tracker is introduced. |

## Usability Strengths

- A first-time user can choose among three routes instead of scanning the full root directory.
- The top-20 list gives a finite normal-use surface.
- AI agents get a concrete loading policy and source-safety policy.
- Maintainers get a separate route with commands and generated-file rules.
- The navigation layer reinforces that most files are reference, audit, benchmark, schema, generated, legacy, or ignore-first material.

## Remaining Confusion Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Root still contains many files, even though the top-20 list reduces the working surface. | P2 | Keep `USE_THIS_FIRST.md`, `SIMPLIFIED_NAVIGATION.md`, and `TOP_20_FILES_TO_KNOW.md` prominent. |
| Some users may not understand `source_basis` and confidence without a glossary. | P2 | Future polish can add a short trust-label cheat sheet. |
| Some users may still choose between `COPY_PASTE_PROMPTS.md` and `HANDS_ON_PROMPT_LIBRARY.md` uncertainly. | P2 | Keep `USE_CASE_HUB.md` as the route selector and prompt files as targets. |
| Actual usability is not proven by observed users. | P2 | Run a human first-use test later using `SIMPLIFIED_NAVIGATION_SMOKE_TEST.md`. |

## Review Result

Result: PASS_FOR_DOCUMENTATION_LAYER.

The repository remains large, but the visible operating surface is now small enough for normal hands-on use.

