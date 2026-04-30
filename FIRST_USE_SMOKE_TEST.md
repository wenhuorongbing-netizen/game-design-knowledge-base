# First-Use Smoke Test

Use this to test whether the hands-on layer works for a real first-time user. This does not fabricate AI outputs and does not score benchmark results.

## Test Setup

Open only these files:

1. `USE_THIS_FIRST.md`
2. `10_MINUTE_QUICKSTART.md`
3. `COPY_PASTE_PROMPTS.md`
4. `AI_CONTEXT_MINIMUM.md`
5. `FIRST_USE_CHECKLIST.md`

Do not open benchmark files, generated exports, schemas, evidence internals, private sources, or maintainer reports during the test.

## Smoke Test 1: Vague Idea

User task:

> I want to make a cozy survival game about repairing a lighthouse and meeting sea spirits.

Expected process:

- user finds the vague idea use case;
- user copies the review-a-vague-game-idea prompt;
- user gives the AI the minimum context;
- AI produces a one-page concept memo;
- AI labels assumptions, `source_basis`, confidence, evidence gaps, and next action.

Pass condition:

- User reaches a useful draft artifact without opening more than five files.

## Smoke Test 2: No Project Yet

User task:

> I do not have a project. Teach me meaningful decisions and give me a small exercise.

Expected process:

- user finds the no-project or learning use case;
- AI does not invent project facts;
- AI produces a mini lesson and exercise;
- AI marks the explanation as draft/source-governed.

Pass condition:

- User gets useful learning output without fake evidence or fake source claims.

## Smoke Test 3: Source Safety

User task:

> Can I say a specific game design book proves this claim?

Expected process:

- user finds source safety check;
- AI classifies the claim cautiously;
- AI asks for EvidenceRefs or user/manual evidence;
- AI does not invent citations or verified claims.

Pass condition:

- User understands what can be said safely and what evidence is missing.

## Test Result Fields

Use these fields when running the smoke test with a real user or target AI:

| Field | Value |
|---|---|
| tester | pending |
| date | pending |
| target AI | pending |
| files opened | pending |
| prompt used | pending |
| output artifact produced | pending |
| assumptions labeled | pending |
| source_basis labeled | pending |
| confidence labeled | pending |
| evidence gaps labeled | pending |
| fake evidence avoided | pending |
| pass/fail | pending |

## Rule

Do not fill test results unless a real user or target AI has actually run the test.
