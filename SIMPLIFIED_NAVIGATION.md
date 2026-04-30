# Simplified Navigation

Date: 2026-04-30

## Purpose

This file makes the repository feel smaller by giving three routes instead of asking users to understand every folder.

Use this file when the repository feels too large.

## Route 1: I Want To Use It Now

Open only these files first:

1. [USE_THIS_FIRST.md](USE_THIS_FIRST.md)
2. [USE_CASE_HUB.md](USE_CASE_HUB.md)
3. [AI_CONTEXT_PACKS.md](AI_CONTEXT_PACKS.md)
4. [HANDS_ON_PROMPT_LIBRARY.md](HANDS_ON_PROMPT_LIBRARY.md)
5. [WORKED_EXAMPLES_README.md](WORKED_EXAMPLES_README.md)

Then do this:

1. Choose one user situation in [USE_CASE_HUB.md](USE_CASE_HUB.md).
2. Load the matching context pack from [context_packs/](context_packs/README.md).
3. Copy the matching prompt from [hands_on_prompts/](hands_on_prompts/README.md).
4. Paste your idea, question, or design problem.
5. Require the AI to label assumptions, `source_basis`, confidence, and evidence gaps.

Do not load benchmark files, generated exports, schemas, or evidence internals for normal use.

## Route 2: I Want To Learn Game Design

Open only these files first:

1. [NO_PROJECT_START_HERE.md](NO_PROJECT_START_HERE.md)
2. [NO_PROJECT_7_DAY_HANDS_ON_PLAN.md](NO_PROJECT_7_DAY_HANDS_ON_PLAN.md)
3. [NO_PROJECT_DAILY_EXERCISES.md](NO_PROJECT_DAILY_EXERCISES.md)
4. [USER_READING_NOTE_GUIDE.md](USER_READING_NOTE_GUIDE.md)
5. [BOOK_SPECIFIC_NOTE_PROMPTS.md](BOOK_SPECIFIC_NOTE_PROMPTS.md)

Then do this:

1. Pick one 30-minute exercise.
2. Ask AI for one artifact, not a general lecture.
3. Write one user-authored reflection note if useful.
4. Do not treat practice outputs as project evidence.
5. Do not ask AI to summarize private book files.

## Route 3: I Want To Maintain The Repo

Open only these files first:

1. [REPO_FOR_MAINTAINERS.md](REPO_FOR_MAINTAINERS.md)
2. [REPO_MAP.md](REPO_MAP.md)
3. [STRUCTURE_MAP.md](STRUCTURE_MAP.md)
4. [WHAT_NOT_TO_TOUCH.md](WHAT_NOT_TO_TOUCH.md)
5. [MAINTAINER_CHECKLIST.md](MAINTAINER_CHECKLIST.md)

Then run the standard commands:

- `npm run kb:export`
- `npm run kb:validate`
- `npm run kb:audit`
- `npm run kb:coverage`

Edit source Markdown, registries, schemas, or tools. Do not manually edit generated export JSON.

## If You Are Still Lost

Open [TOP_20_FILES_TO_KNOW.md](TOP_20_FILES_TO_KNOW.md).

Everything outside that list is either task-specific reference, maintainer material, generated output, benchmark evidence, or legacy/deprecated material.

