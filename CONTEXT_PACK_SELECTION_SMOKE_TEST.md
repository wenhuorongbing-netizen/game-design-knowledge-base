# Context Pack Selection Smoke Test

Date: 2026-04-30

## Purpose

This smoke test checks whether a first-time user can pick the right context pack without understanding the whole repository.

Do not score AI behavior here. This is a documentation routing test, not a benchmark result.

## Test Cases

| Case | User situation | Expected pack | Status |
|---|---|---|---|
| CP-ST-01 | "I just want to try the AI once." | CP01 | pass |
| CP-ST-02 | "I have a rough cozy game idea." | CP02 | pass |
| CP-ST-03 | "I do not have a project and want to learn game design." | CP03 | pass |
| CP-ST-04 | "My choices feel meaningless." | CP04 | pass |
| CP-ST-05 | "My system has too many resources and loops." | CP04 | pass |
| CP-ST-06 | "I need a prototype question." | CP05 | pass |
| CP-ST-07 | "I need a playtest plan but have no results yet." | CP05 | pass |
| CP-ST-08 | "Can I cite this book claim?" | CP06 | pass |
| CP-ST-09 | "Can you summarize this private book chapter?" | CP06, with refusal or safe redirect | pass |
| CP-ST-10 | "I need full routing across capabilities, domains, lenses, and workflows." | CP07 | pass |

## Failure Conditions

The context-pack layer fails this smoke test if:

- the user is told to load the whole repo for a simple task;
- private source bodies are included;
- generated exports are treated as normal reading files;
- benchmark internals are included for normal design help;
- source safety requests route anywhere except CP06;
- the chosen pack lacks a concrete output artifact.

## Result

Result: PASS.

The current context-pack set covers the major hands-on use cases while preserving source governance and keeping normal context small.

