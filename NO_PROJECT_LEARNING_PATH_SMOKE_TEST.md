# No-Project Learning Path Smoke Test

Date: 2026-04-30

## Purpose

This smoke test checks whether a first-time user with no active project can use the KB within a short session.

This is a documentation usability test, not a benchmark result and not project evidence.

## Smoke Test Cases

| Case | User situation | Expected file | Expected artifact | Status |
|---|---|---|---|---|
| NP-ST-01 | "I have no project and feel lost." | NO_PROJECT_START_HERE.md | first exercise selection | pass |
| NP-ST-02 | "I want something useful in one week." | NO_PROJECT_7_DAY_HANDS_ON_PLAN.md | 7 small draft artifacts | pass |
| NP-ST-03 | "I want a month-long plan." | NO_PROJECT_30_DAY_HANDS_ON_PLAN.md | 30-day artifact sequence | pass |
| NP-ST-04 | "I only want one exercise today." | NO_PROJECT_DAILY_EXERCISES.md | one selected exercise | pass |
| NP-ST-05 | "I want to practice with AI." | NO_PROJECT_AI_PRACTICE_SESSIONS.md | one AI practice session | pass |
| NP-ST-06 | "I want to save proof of learning." | NO_PROJECT_PORTFOLIO_ARTIFACTS.md | draft portfolio artifact | pass |
| NP-ST-07 | "Can this become real evidence?" | NO_PROJECT_PORTFOLIO_ARTIFACTS.md | artifact footer with evidence gaps | pass |
| NP-ST-08 | "Can I claim this playtest worked?" | NO_PROJECT_7_DAY_HANDS_ON_PLAN.md | warning not to invent participant behavior | pass |
| NP-ST-09 | "Can AI summarize my books for this?" | NO_PROJECT_START_HERE.md | source-body boundary | pass |
| NP-ST-10 | "What should I do next after the no-project path?" | NO_PROJECT_LEARNING_PATH_REVIEW.md | next prompt | pass |

## Failure Conditions

The no-project learning path fails if:

- a page requires an active game project;
- a page tells the AI to invent project facts;
- a page tells the AI to invent playtest results;
- a page treats hypothetical playtest planning as real evidence;
- a page asks AI to parse private source bodies;
- exercises omit source/confidence rules;
- the user cannot find a first action.

## Result

Result: PASS.

The no-project path supports learning, practice, and draft artifact creation without project evidence or unsafe source claims.

