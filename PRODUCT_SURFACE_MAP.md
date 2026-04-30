# Product Surface Map

Date: 2026-04-30

## Purpose

This map separates the repository's user-facing, AI-facing, and maintainer-facing surfaces. It is intended to prevent the whole repository from looking like one undifferentiated pile of Markdown files.

## Surface Summary

| Surface | Main entry | Audience | Current state | Main risk |
|---|---|---|---|---|
| First-use start | `USE_THIS_FIRST.md` | all casual users | usable | too many nearby alternatives |
| Quickstart | `10_MINUTE_QUICKSTART.md` | first-time users | usable | user may still skip to root file list |
| Use-case routing | `USE_CASE_HUB.md` | users with a task | usable | chooser table may be dense |
| Copy-paste prompts | `HANDS_ON_PROMPT_LIBRARY.md`, `hands_on_prompts/` | users and AI agents | usable | no observed output quality yet |
| Worked examples | `WORKED_EXAMPLES_README.md`, `worked_examples/` | learners/users | synthetic and safe | users may mistake demos for real evidence unless labels remain prominent |
| No-project learning | `NO_PROJECT_START_HERE.md` | users without a project | usable | no observed completion data |
| AI context packs | `AI_CONTEXT_PACKS.md`, `context_packs/` | AI agents/users | usable | users may still load the whole repo |
| Runtime manual | `AI_MASTER_RUNTIME_PACK.md` | AI agents | usable | too long for casual users |
| Master framework | `MASTER_CAPABILITY_MATRIX.md`, `MASTER_DOMAIN_MAP.md` | advanced users/AI agents | strong reference | not a beginner entry point |
| Canonical KB | `kb/` | maintainers/advanced users | validated | overwhelming for casual users |
| Evidence governance | `kb/13_evidence/` | maintainers | safe, blocked pending user evidence | may look like content exists when it is mostly templates/reports |
| Benchmark system | `AI_MASTER_BENCHMARK_*` | evaluators | scaffolded, partially unproven | benchmark artifacts can be confused with real readiness proof |
| Optional portal | `kb-portal/` | demo/review | optional | may lag canonical data |
| Legacy/deprecated | `kb-tools/`, `50-game-design-masters-kb/`, `docs/deprecated/` | maintainers only | quarantined | visible clutter |

## Target User Surfaces

### Project Owner

| Need | Start file | Expected artifact |
|---|---|---|
| understand how to use the repo | `USE_THIS_FIRST.md` | chosen route |
| do something in 10 minutes | `10_MINUTE_QUICKSTART.md` | one draft artifact |
| pick a use case | `USE_CASE_HUB.md` | matching prompt/context/example |
| avoid overload | `TOP_20_FILES_TO_KNOW.md` | smaller file set |
| run validation | `README.md`, `package.json` | PASS/FAIL report |

### AI Agents Using The KB

| Need | Start file | Expected artifact |
|---|---|---|
| load minimal context | `AI_CONTEXT_PACKS.md` | selected context pack |
| obey source safety | `AI_MASTER_RUNTIME_SAFETY_RULES.md` | guarded response |
| route a problem | `AI_MASTER_ROUTING_RULES.md` | capability/lens/workflow route |
| produce artifact | `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md` | structured design output |
| label uncertainty | `AI_UNCERTAINTY_AND_SOURCE_RULES.md` | assumptions/source_basis/confidence |

### Game Design Learners

| Need | Start file | Expected artifact |
|---|---|---|
| learn without a project | `NO_PROJECT_START_HERE.md` | learning exercise |
| learn a concept | `USE_CASES/learn_game_design.md` | mini lesson |
| get reading guidance | `USE_CASES/reading_to_notes.md` | source-safe reading plan |
| see safe examples | `WORKED_EXAMPLES_README.md` | synthetic example output |

### Designers With Vague Ideas

| Need | Start file | Expected artifact |
|---|---|---|
| review idea | `USE_CASES/vague_game_idea.md` | concept memo |
| define core experience | `hands_on_prompts/P02_define_core_experience.md` | core experience statement |
| choose lenses | `hands_on_prompts/P04_run_lens_review.md` | lens review |
| plan prototype | `hands_on_prompts/P10_make_prototype_plan.md` | prototype plan |

### Maintainers

| Need | Start file | Expected artifact |
|---|---|---|
| rebuild safely | `KB_REBUILD_INSTRUCTION.md` | maintenance plan |
| validate | `package.json` | `VALIDATION_REPORT.md` |
| audit source safety | `SOURCE_GOVERNANCE_AUDIT.md` | governance PASS/FAIL |
| understand structure | `REPO_MAP.md`, `STRUCTURE_MAP.md` | folder role map |
| avoid unsafe edits | `WHAT_NOT_TO_TOUCH.md` | edit boundary |

## Surface Accessibility Baseline

Strengths:

- clear non-goals are repeated in user and maintainer docs;
- first-use and ignore-first routes exist;
- prompt and context-pack layers reduce need to read canonical KB;
- synthetic examples are labeled;
- source/confidence rules are present in prompt packs.

Risks:

- many root files still compete for attention;
- tables are useful but dense for screen readers and small screens;
- no observed user trial confirms the 2-minute start claim;
- benchmark and report files are numerous and may look more important than hands-on files;
- optional portal is not the primary path and should not distract first-time users.
