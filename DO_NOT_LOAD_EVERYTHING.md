# Do Not Load Everything

Date: 2026-04-30

## Core Rule

Do not load the entire repository into an AI conversation by default.

The repository contains canonical KB content, generated exports, benchmark files, audits, schemas, governance reports, optional portal files, deprecated material, and local/private source boundaries. Most user tasks need only a small runtime context pack.

## Why Loading The Whole Repo Is Unnecessary

Loading everything:

- increases cognitive load;
- increases the chance that the AI routes through irrelevant benchmark or audit files;
- makes responses more generic because too much context competes for attention;
- wastes context window space;
- can distract from the user's actual task;
- can make draft scaffolds look more authoritative than they are.

## Why Benchmark Internals Are Not Needed For Normal Use

Benchmark files are for evaluating AI behavior, not for ordinary design help.

Do not load benchmark run files unless the task is to collect, score, audit, or repair benchmark outputs.

For normal use, prefer:

- [AI_CONTEXT_PACKS.md](AI_CONTEXT_PACKS.md)
- [context_packs/CP01_minimal_general_use.md](context_packs/CP01_minimal_general_use.md)
- [HANDS_ON_PROMPT_LIBRARY.md](HANDS_ON_PROMPT_LIBRARY.md)

## Why Schemas Are Not Needed For Casual Use

Schema files help maintainers validate KB entities. They are not needed when a user wants:

- a concept memo;
- a design audit;
- a learning plan;
- a prototype plan;
- a playtest plan;
- a claim safety check.

Load schemas only when adding or validating KB records.

## Why Generated Exports Are Not Read Manually

Generated exports are machine outputs. Do not edit them manually and do not load them as the default reading surface.

Use source Markdown, runtime guides, context packs, and prompt files instead.

Generated exports are updated by:

- `npm run kb:export`
- `npm run kb:validate`

## How To Choose The Smallest Useful Context Pack

1. If the user is unsure, use CP01.
2. If the user has a game idea, use CP02.
3. If the user wants to learn, use CP03.
4. If the user wants critique or diagnosis, use CP04.
5. If the user wants prototype or playtest planning, use CP05.
6. If the user asks for citation, verification, quotes, summaries, or source claims, use CP06.
7. If the user is building a complex AI-runtime task, use CP07.

## Practical Rule

Start small. Add context only when the output is blocked by missing routing, safety, or artifact-format information.

## Quality Controls

- [AI_CONTEXT_PACKS_USABILITY_REVIEW.md](AI_CONTEXT_PACKS_USABILITY_REVIEW.md)
- [AI_CONTEXT_PACKS_CHECKLIST.md](AI_CONTEXT_PACKS_CHECKLIST.md)
- [CONTEXT_PACK_SELECTION_SMOKE_TEST.md](CONTEXT_PACK_SELECTION_SMOKE_TEST.md)
