# Accessibility Audit

Date: 2026-04-30

## Audit Verdict

Verdict: CONDITIONALLY_ACCEPTED.

The hands-on documentation is structurally accessible enough for use, but it has clear P1 accessibility and readability risks: wide tables, long prompt lines, too many first-step choices, terminology that is safe but not plain enough, and an optional portal that has not been browser-tested with keyboard or assistive technology.

This audit is evidence-based from file inspection and command output. It does not claim screen-reader test results, keyboard test results, color-contrast measurements, or observed user outcomes.

## Evidence Inspected

- `PRINCIPAL_ENGINEERING_INVENTORY.md`
- `USER_ENTRYPOINT_INVENTORY.md`
- `USE_THIS_FIRST.md`
- `10_MINUTE_QUICKSTART.md`
- `HANDS_ON_START_HERE.md`
- `HANDS_ON_START.md`
- `USE_CASE_HUB.md`
- `TOP_20_FILES_TO_KNOW.md`
- `WHAT_TO_IGNORE_FIRST.md`
- `AI_CONTEXT_PACKS.md`
- `HANDS_ON_PROMPT_LIBRARY.md`
- `worked_examples/`
- `context_packs/`
- `USE_CASES/`
- `HANDS_ON_USER_TRIAL_REPORT.md`
- `HANDS_ON_GAP_BACKLOG.md`
- `kb-portal/index.html`
- `kb-portal/styles.css`

## Evidence Limits

Observation: No real user trial has been supplied.

Inference: Time-to-start, confusion, and comprehension cannot be empirically accepted yet.

Recommendation: Keep all usability verdicts conditional until `HANDS_ON_USER_TRIAL_REPORT.md` contains observed data.

Observation: No automated screen-reader, keyboard, or color-contrast test was run.

Inference: Portal accessibility findings are code-inspection findings only.

Recommendation: Run a later keyboard and screen-reader smoke test before accepting `kb-portal/` as accessible.

## WCAG-Inspired Documentation Checks

| Check area | Observation | Inference | Recommendation | Priority |
|---|---|---|---|---|
| perceivable structure | Core start docs have one H1 and H2 sections. | Screen-reader heading navigation should be generally usable. | Preserve one-H1 structure and avoid adding decorative headings. | P2 |
| understandable sequence | `USE_THIS_FIRST.md` answers practical questions in plain order. | It is a good primary entrypoint. | Make it the only recommended first human start in all new docs. | P1 |
| operable navigation | Links are standard Markdown links. | Keyboard navigation in rendered Markdown should work. | Keep link text descriptive and avoid raw URLs. | P2 |
| robust link targets | Link check found no missing targets in the audited hands-on surface. | Broken-link risk is low in the first-use layer. | Add periodic link checking later. | P2 |
| cognitive accessibility | There are many equivalent route files. | Users can still feel overwhelmed despite good guidance. | Reduce first-step choices to one default route and one alternate route. | P1 |
| plain language | Terms like `source_basis`, `metadata_only`, `unsupported_draft`, and EvidenceRef appear early. | Safety is clear to maintainers, but new users may not understand the labels. | Add a plain-language trust-label cheat sheet or inline glossary. | P1 |
| table readability | `USE_CASE_HUB.md`, `AI_CONTEXT_PACKS.md`, and `TOP_20_FILES_TO_KNOW.md` rely on multi-column tables. | Tables are efficient but can be hard on narrow screens and screen readers. | Add short prose summaries before dense tables. | P1 |
| prompt copyability | Prompt files use blockquotes and clear replaceable fields. | Prompts are copyable, but long single prompt lines can be hard to edit. | Split long prompt paragraphs into shorter bullet-like lines inside prompt files. | P2 |

## Heading Structure Issues

Observation: The audited start files use clear H1/H2 hierarchy without obvious skipped levels:

- `USE_THIS_FIRST.md`
- `10_MINUTE_QUICKSTART.md`
- `HANDS_ON_START_HERE.md`
- `USE_CASE_HUB.md`
- `TOP_20_FILES_TO_KNOW.md`
- `WHAT_TO_IGNORE_FIRST.md`
- `AI_CONTEXT_PACKS.md`
- `HANDS_ON_PROMPT_LIBRARY.md`

Inference: Heading structure is acceptable for Markdown readers and screen-reader heading navigation.

Recommendation: Keep the hierarchy shallow. Do not introduce H4/H5-heavy sections in first-use documents.

Observation: `HANDS_ON_START.md` and `HANDS_ON_START_HERE.md` both exist and both sound like primary entrypoints.

Inference: The naming split is a navigation and cognitive-accessibility risk even if headings are valid.

Recommendation: Designate one as canonical for humans and mark the other as an alias or deprecated redirect.

## Link Text Issues

Observation: Most links are descriptive file names or action names such as `P01 review my game idea`, `CP03 learning coach`, and `USE_CASES/vague_game_idea.md`.

Inference: Link text quality is generally acceptable.

Recommendation: Keep action-oriented labels in user-facing tables. Avoid adding ambiguous labels like "here", "this", or "more".

Observation: No missing link targets were found in the audited hands-on surface:

- start files;
- `USE_CASES/`;
- `hands_on_prompts/`;
- `context_packs/`;
- `worked_examples/`.

Inference: Broken-link risk is low for the first-use path.

Recommendation: Add a scripted link check later if CI is introduced.

## Table Readability Issues

Observation: Table-heavy files include:

- `USE_CASE_HUB.md` with 24 table lines and 15 lines over 140 characters;
- `AI_CONTEXT_PACKS.md` with 31 table lines and 7 lines over 140 characters;
- `TOP_20_FILES_TO_KNOW.md` with 22 table lines;
- `HANDS_ON_PROMPT_LIBRARY.md` with 23 table lines.

Inference: Tables provide compact routing but may be hard to scan on mobile, in terminal renderers, and for screen-reader users.

Recommendation: Put a short "Pick this if..." prose list above each dense table. Preserve tables for maintainers and advanced users.

## Keyboard And Portal Assumptions

Observation: `kb-portal/index.html` uses semantic `main`, `aside`, labels around inputs/selects/textareas, real buttons, and an `aria-live` copy feedback region.

Inference: The portal has some accessible structure.

Recommendation: Preserve semantic controls.

Observation: `kb-portal/index.html` has many dynamic controls, but no inspected skip link or explicit top-level keyboard navigation instructions.

Inference: Keyboard users may have to tab through many sidebar controls before reaching results.

Recommendation: Add a skip-to-results link and verify focus order in a later portal-specific audit.

Observation: `kb-portal/styles.css` sets `outline: none` for fields and textareas, with replacement focus styles for inputs/selects/textareas. No explicit button focus style was found in the inspected lines.

Inference: Button keyboard focus may be less visible than form-field focus.

Recommendation: Add visible `button:focus-visible`, link focus, and selected-card focus styles before treating the portal as accessible.

## Screen Reader Concerns

Observation: Dense tables and generated/dynamic portal lists are likely the hardest screen-reader surfaces.

Inference: A user can navigate the Markdown start docs, but the portal and large route tables need assistive-tech testing.

Recommendation: Use short prose route summaries before tables and add portal landmarks or skip links.

Observation: Worked examples are clearly labeled `demo_only`, `synthetic_example`, `not_user_evidence`, `not_project_evidence`, `not_benchmark_result`, and `not_verified_claim`.

Inference: The safety labels are screen-reader-readable as text, but the repeated comma list is verbose.

Recommendation: Keep the labels but add one short plain-language sentence at the top of each example family: "This is a fake example for learning the format."

## Plain-Language Concerns

Observation: `source_basis`, `confidence`, `unsupported_draft`, `metadata_only`, `EvidenceRef`, and `verified` are required source-governance terms.

Inference: These terms are necessary but heavy for first-time users.

Recommendation: Add a short `TRUST_LABELS_IN_PLAIN_ENGLISH.md` page and link it from `USE_THIS_FIRST.md`, `10_MINUTE_QUICKSTART.md`, and `HANDS_ON_PROMPT_LIBRARY.md`.

Observation: `HANDS_ON_START.md` already has a good trust-label table.

Inference: The explanation exists but is not the primary start recommended by every entrypoint.

Recommendation: Extract that table into a standalone cheat sheet instead of relying on users to find `HANDS_ON_START.md`.

## Color And Visual Concerns For Portal

Observation: The portal uses dark text on light warm backgrounds and visible accent colors in CSS variables.

Inference: The color direction is likely readable, but no contrast measurement was performed.

Recommendation: Run a contrast audit before claiming WCAG AA compliance.

Observation: Several interactive controls use gradients, subtle borders, and muted text.

Inference: Some low-contrast states may be hard to perceive, especially muted secondary text or selected/filter state.

Recommendation: Add contrast checks for muted text, buttons, selected cards, filter pills, and focus rings.

## Prioritized Repairs

| priority | repair | affected files |
|---|---|---|
| P1 | Make one human start canonical and mark aliases clearly | `README.md`, `USE_THIS_FIRST.md`, `HANDS_ON_START.md`, `HANDS_ON_START_HERE.md` |
| P1 | Add plain-language trust-label cheat sheet | first-use docs and prompt docs |
| P1 | Add prose summaries above dense route tables | `USE_CASE_HUB.md`, `AI_CONTEXT_PACKS.md`, `TOP_20_FILES_TO_KNOW.md` |
| P1 | Preserve the pending-user-trial limitation in all acceptance docs | `HANDS_ON_USER_TRIAL_REPORT.md`, hands-on acceptance reports |
| P2 | Split long prompt paragraphs into shorter copyable lines | `hands_on_prompts/` |
| P2 | Add portal skip link and visible button focus styles | `kb-portal/index.html`, `kb-portal/styles.css` |
| P2 | Add a lightweight link-check command or CI job | tooling |
| P2 | Add mobile/screen-reader notes for route tables | first-use docs |

## Final Accessibility Assessment

The Markdown first-use layer is usable but not yet empirically accepted. The most important accessibility repair is reducing cognitive and terminology load before adding more content.
