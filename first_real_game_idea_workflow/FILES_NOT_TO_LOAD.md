# Files Not To Load

Date: 2026-05-01

## Purpose

This file prevents Codex from overloading context or violating source governance during the first real game idea workflow.

## Do Not Load For Normal Idea Routing

- `_private_sources/`
- private PDFs;
- private EPUBs;
- scans;
- archives;
- high-risk source bodies;
- `AI_MASTER_BENCHMARK_*`;
- benchmark run folders;
- `kb/11_import_export/export/`;
- generated exports;
- `hands_on_prompts/` unless explicitly packaging a human copy-paste prompt;
- deprecated or legacy folders;
- full repository context.

## Do Not Use As Evidence

- metadata-only source records;
- benchmark response slots;
- synthetic worked examples;
- demo-only project examples;
- unsupported draft framework files;
- generated indexes without EvidenceRefs.

## Source Safety Notes

The first real game idea workflow may use only user-supplied idea text.

It may not use:

- private book body text;
- agent-created quotes;
- invented playtest results;
- invented project facts;
- invented evidence;
- verified claims without EvidenceRefs.
