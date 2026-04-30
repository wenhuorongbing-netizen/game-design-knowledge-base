# Readability Audit

Date: 2026-04-30

## Verdict

Verdict: CONDITIONALLY_ACCEPTED.

The first-use documentation is written in clear language and avoids unnecessary theory, but it still mixes beginner action language with source-governance terms that require a glossary. Prompt files are usable but have long copy-paste lines that may be hard to edit.

## Readability Findings

| Area | Observation | Inference | Recommendation | Priority |
|---|---|---|---|---|
| first-use explanation | `USE_THIS_FIRST.md` answers what this is, what it is not, what to do, and what to ignore. | Good human-first structure. | Keep this as canonical human start. | P1 |
| quickstart | `10_MINUTE_QUICKSTART.md` uses six concrete steps. | The action path is understandable. | Add one "if unsure, use this default prompt" at top before choices. | P2 |
| use-case docs | `USE_CASES/` pages are short, around 33 to 40 lines each. | Good length for first-use pages. | Keep use-case pages short and task-specific. | P2 |
| prompt files | 15 prompt files are around 53 to 63 lines each. | Reasonable page length. | Keep prompt file count stable; avoid adding more before user trial. | P2 |
| long prompt lines | Prompt max line lengths reach 418 to 472 characters. | Long lines can be hard to copy, scan, or edit. | Break copy-paste prompt text into shorter lines. | P2 |
| technical labels | `source_basis`, `metadata_only`, `unsupported_draft`, `EvidenceRef`, and `verified` appear in first-use docs. | Safe but not beginner-friendly. | Add plain-language explanations beside first appearance. | P1 |
| examples | Worked examples show input, prompt, output, assumptions, source_basis, confidence, and gaps. | Strong learning support. | Keep synthetic labels prominent. | P2 |
| tables | Route and prompt index tables are dense. | Efficient for repeat users but heavy for beginners. | Add "top 3 common tasks" prose before large tables. | P1 |

## Plain-Language Translation Need

Observation: The user is asked to require `source_basis`, confidence, and evidence gaps.

Inference: Users need to understand these labels well enough to judge outputs.

Recommendation: Add or promote a simple label explanation:

- source_basis: what the answer is based on;
- confidence: how strongly to trust the answer;
- evidence gap: what proof or user information is missing;
- unsupported_draft: useful idea, not proven;
- metadata_only: safe book/work listing, not a source claim;
- verified: only with legal evidence and review.

## Prompt Readability

Observation: The prompt files are named clearly with action verbs:

- review;
- define;
- generate;
- run;
- audit;
- make;
- teach;
- create;
- check;
- critique.

Inference: File names are understandable.

Recommendation: Keep action verbs in future prompt names.

Observation: Each prompt includes use case, copy-paste prompt, output format, source/confidence rules, follow-up prompt, and self-check prompt.

Inference: The structure is predictable and usable.

Recommendation: Preserve this template.

Observation: Copy-paste prompt blocks are long single paragraphs.

Inference: Users can copy them, but editing specific fields is harder than it needs to be.

Recommendation: Convert prompt text to shorter lines with visible replaceable fields.

## First-Use Readability Risks

| risk | evidence | severity |
|---|---|---|
| start-file ambiguity | `HANDS_ON_START.md` and `HANDS_ON_START_HERE.md` both exist | P1 |
| technical trust labels | source-governance terms appear before glossary | P1 |
| table scanning burden | `USE_CASE_HUB.md` has 14 rows and 5 columns | P1 |
| prompt line length | prompt files have max line lengths over 400 characters | P2 |
| root document volume | 275 root Markdown files | P1 |

## Readability Acceptance

The docs are readable for motivated users and AI agents. They are not yet proven readable for first-time users under time pressure because no observed user trial exists.
