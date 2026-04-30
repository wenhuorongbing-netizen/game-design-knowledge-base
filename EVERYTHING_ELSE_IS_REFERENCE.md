# Everything Else Is Reference

Date: 2026-04-30

## Core Idea

The repository is large because it contains the knowledgebase, governance, validation, exports, evidence infrastructure, benchmark infrastructure, runtime prompts, and historical quarantines.

Normal users do not need most of it.

Use [TOP_20_FILES_TO_KNOW.md](TOP_20_FILES_TO_KNOW.md) as the working surface. Treat everything else as reference unless a task specifically requires it.

## Reference Layers

| Layer | Open when | Normal user default |
|---|---|---|
| canonical KB content | You need source-governed cards, lenses, workflows, ontology, or works. | Reference only. |
| generated exports | A tool or search index needs machine-readable data. | Ignore. |
| evidence governance | You are ingesting legal sidecars, user notes, quotes, or EvidenceRefs. | Ignore unless doing evidence intake. |
| benchmark files | You are evaluating target AI behavior. | Ignore. |
| audits and reports | You are reviewing acceptance, validation, or governance status. | Ignore unless maintaining. |
| schemas | You are changing entity structure or validator behavior. | Ignore. |
| legacy folders | You are doing audited legacy cleanup. | Ignore. |
| deprecated instructions | You are verifying direction-drift safety. | Ignore. |
| private source quarantine | You are auditing metadata-only source handling. | Do not parse. |

## Normal Use Does Not Require

- reading all root Markdown files;
- opening `kb/11_import_export/export/`;
- opening benchmark run logs;
- opening evidence records;
- opening JSON schemas;
- opening deprecated BookOS material;
- loading private source files.

## When To Expand Context

Expand context only if:

- the AI cannot route the user problem;
- the selected prompt needs a specific runtime rule;
- the user asks for source safety;
- the user is maintaining the repository;
- validation or export behavior is being changed;
- benchmark or evidence work is explicitly requested.

## Practical Rule

If a file is not in [TOP_20_FILES_TO_KNOW.md](TOP_20_FILES_TO_KNOW.md), ask: "What task requires this file?"

If the answer is unclear, do not load it.

