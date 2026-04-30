# Hands-On Usability Test Plan

Date: 2026-04-30

## Purpose

This plan tests whether the hands-on layer is usable for a first-time user.

It does not test real AI behavior unless real target AI outputs are supplied. It does not fabricate user outcomes.

## Scope

Test the user-facing hands-on layer:

- `USE_THIS_FIRST.md`
- `HANDS_ON_START_HERE.md`
- `USE_CASES/README.md`
- `hands_on_prompts/`
- `worked_examples/`
- `context_packs/`
- `NO_PROJECT_START_HERE.md`
- `NO_PROJECT_7_DAY_HANDS_ON_PLAN.md`

## Known File Reality

`USE_CASE_HUB.md` is not present. The actual use-case hub is:

- `USE_CASES/README.md`

Do not claim `USE_CASE_HUB.md` exists unless it is created later.

## Test Method

For each test:

1. Start from a realistic first-time-user task.
2. Identify the files the user should open.
3. Check whether the user can perform the next action without reading the whole repository.
4. Check whether draft versus verified boundaries are visible.
5. Check whether private-source parsing is avoided.

## What Not To Test Here

Do not score:

- AI output quality;
- benchmark readiness;
- source-backed correctness;
- verified claim status;
- real project outcomes.

Those require real target AI outputs or real user evidence.

## Pass Threshold

The hands-on layer passes if a user can:

- find a start page;
- choose a use case;
- copy a prompt;
- know what to paste;
- know what output to expect;
- know what files to ignore;
- use the KB without a project;
- use the KB with a vague idea;
- use the KB for learning;
- use the KB for design review;
- understand draft versus verified;
- avoid private source parsing.

