# Cognitive Load Audit

Date: 2026-04-30

## Summary

The KB is professionally structured, but the first-time experience has high cognitive load. The user sees repository architecture, governance, benchmark status, evidence status, workflows, prompts, reports, and generated files before they see a small practical path.

## Cognitive Load Sources

| Load source | Severity | Why it matters | Mitigation |
|---|---|---|---|
| Too many root Markdown files | P1 | New users cannot distinguish product surface from audit history. | Add first-session ignore list and hands-on start. |
| Many entrypoints | P1 | Users do not know which "start" file is the real first action. | Make `HANDS_ON_START.md` the practical entrypoint. |
| Benchmark reports at root | P2 | Useful for QA, distracting for use. | Label as maintainer/benchmark-only in first-use guide. |
| Evidence governance appears early | P2 | Important, but overwhelming before the first prompt. | Summarize in one "trust labels" section. |
| Prompt library is large | P1 | Strong for advanced use, too much for first use. | Curate 10 prompts. |
| Problem maps are long | P1 | Comprehensive but not quick. | Turn top use cases into short pages. |
| Output artifacts are named but not shown | P1 | Users cannot picture the result. | Add worked examples. |
| Commands appear in several places | P2 | Maintainers need them; users may not. | Separate "use AI" from "maintain repo." |
| Draft/verified model is repeated | P2 | Necessary but redundant. | Condense to a single trust-label cheat sheet. |
| No visual first-session route | P2 | Users need a small map of "open, copy, paste, interpret." | Add a 5-step hands-on flow. |

## Recommended First-Session Flow

| Step | User action | File |
|---:|---|---|
| 1 | Open the hands-on page. | `HANDS_ON_START.md` |
| 2 | Choose one use case. | `USE_CASES/README.md` |
| 3 | Copy one prompt. | `COPY_PASTE_PROMPTS.md` |
| 4 | Paste it into the AI with the minimal context. | `AI_CONTEXT_MINIMAL.md` |
| 5 | Interpret source/confidence labels. | `HANDS_ON_START.md` trust-label section |

## Files A First-Time User Should Ignore

Until they need maintenance or verification, a first-time user should ignore:

- benchmark run files;
- acceptance reviews;
- generated export JSON;
- import/export internals;
- legacy folders;
- deprecated docs;
- source audit reports;
- schema files;
- private-source folders;
- evidence intake records unless verifying claims.

## Verdict

Cognitive load is the main barrier. The repo should not be flattened, but it needs a thin first-use layer that hides complexity until needed.
