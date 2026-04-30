# Simplification Backlog

Date: 2026-04-30

## P1 Hands-On Usability

| backlog_id | severity | title | affected area | required fix | acceptance criteria |
|---|---|---|---|---|---|
| USE-P1-001 | P1 | Create hands-on start page | root entrypoint | Add `HANDS_ON_START.md`. | User can run a first prompt in under 2 minutes. |
| USE-P1-002 | P1 | Create use-case index | root or `USE_CASES/` | Add `USE_CASES/README.md` with common tasks. | User can choose a use case without reading framework docs. |
| USE-P1-003 | P1 | Add copy-paste prompt pack | prompt surface | Add `COPY_PASTE_PROMPTS.md` with 10 curated prompts. | Prompts include required input, output artifact, source/confidence rules. |
| USE-P1-004 | P1 | Add worked examples | user education | Add `WORKED_EXAMPLES.md`. | Examples use fictional inputs and do not create evidence. |
| USE-P1-005 | P1 | Create minimal AI context | runtime surface | Add `AI_CONTEXT_MINIMAL.md`. | User knows what to provide to a target AI without loading the whole repo. |
| USE-P1-006 | P1 | Add no-project path | use cases | Create a use case for users without an active project. | User can learn, ask questions, and create draft artifacts without project evidence. |

## P2 Navigation Simplification

| backlog_id | severity | title | affected area | required fix | acceptance criteria |
|---|---|---|---|---|---|
| USE-P2-001 | P2 | Add first-session ignore list | root docs | Add `FILES_TO_IGNORE_FOR_FIRST_USE.md`. | User knows which reports and generated files to skip. |
| USE-P2-002 | P2 | Promote hands-on layer in README | root docs | Update `README.md` after hands-on layer exists. | First visible action is hands-on use. |
| USE-P2-003 | P2 | Promote hands-on layer in START_HERE | root docs | Update `START_HERE.md` after hands-on layer exists. | Users see "use now" before maintenance links. |
| USE-P2-004 | P2 | Add trust-label cheat sheet | hands-on layer | Summarize draft, metadata-only, weak, user interpretation, verified. | User understands output confidence without reading evidence docs. |
| USE-P2-005 | P2 | Create artifact expectation table | hands-on layer | Show concept memo, decision matrix, system map, reading plan, evidence gap report. | User knows what output should look like. |

## P3 Optional Polish

| backlog_id | severity | title | affected area | required fix | acceptance criteria |
|---|---|---|---|---|---|
| USE-P3-001 | P3 | Add diagram of first-use flow | hands-on docs | Add a simple text or Mermaid-free flow diagram. | New user understands the path visually. |
| USE-P3-002 | P3 | Add short glossary | hands-on docs | Define lens, workflow, card, evidence gap, source_basis, confidence. | User can interpret common terms quickly. |
| USE-P3-003 | P3 | Add quick command note | maintainer appendix | Keep commands out of first action path. | Users are not pushed into validation unless maintaining. |

## Backlog Rule

Do not simplify by deleting canonical content. Simplify by creating a smaller first-use layer and by labeling advanced files as optional, generated, benchmark-only, governance-only, or maintainer-only.

## Next Exact Prompt

`build-hands-on-use-layer`
