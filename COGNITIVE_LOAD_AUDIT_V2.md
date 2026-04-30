# Cognitive Load Audit V2

Date: 2026-04-30

## Audit Verdict

Verdict: CONDITIONALLY_ACCEPTED.

The repository now has strong progressive-disclosure materials, but it still presents too many plausible starts and too many governance/runtime/benchmark files at the root. The correct path exists; the risk is that users may not know which "correct" path to choose.

## Evidence Base

Observation: The repository has 1,594 discoverable files by `rg --files`.

Inference: The repo is too large for casual browsing.

Recommendation: First-use docs should continue to tell users not to browse the whole repo.

Observation: The root contains 275 Markdown files.

Inference: The root itself is too large to function as a simple product entry surface.

Recommendation: Keep `USE_THIS_FIRST.md` as the primary human entrypoint and route users away from root browsing.

Observation: 64 root Markdown files match start/guide/prompt/context/navigation/checklist/readme patterns.

Inference: Many files sound like starting points.

Recommendation: Use a canonical-start banner and alias labels to reduce first decision overload.

## Too Many Files Problem

Observation: The project has canonical KB files, generated reports, root reports, prompt packs, context packs, benchmark files, evidence governance, optional portal files, legacy folders, and deprecated material.

Inference: A first-time user cannot infer file priority from names alone.

Recommendation: Keep `TOP_20_FILES_TO_KNOW.md`, `WHAT_TO_IGNORE_FIRST.md`, and `DO_NOT_LOAD_EVERYTHING.md` prominent, but make `USE_THIS_FIRST.md` the only default start.

## Too Many Entry Points Problem

Observation: Active first-use candidates include:

- `README.md`;
- `START_HERE.md`;
- `USE_THIS_FIRST.md`;
- `10_MINUTE_QUICKSTART.md`;
- `HANDS_ON_START.md`;
- `HANDS_ON_START_HERE.md`;
- `USE_CASE_HUB.md`;
- `SIMPLIFIED_NAVIGATION.md`;
- `TOP_20_FILES_TO_KNOW.md`;
- `AI_CONTEXT_PACKS.md`.

Inference: Each is useful, but together they create entrypoint competition.

Recommendation: Establish a hierarchy:

1. `USE_THIS_FIRST.md` for humans.
2. `10_MINUTE_QUICKSTART.md` for immediate action.
3. `USE_CASE_HUB.md` for choosing task route.
4. `AI_CONTEXT_PACKS.md` for AI context.
5. everything else as reference.

## First Decision Overload

Observation: `10_MINUTE_QUICKSTART.md` starts with 6 use-case choices. `USE_CASE_HUB.md` has 14 rows. `HANDS_ON_START_HERE.md` has a 7-file path plus 8 situation choices.

Inference: A new user can start, but the first decision may still feel like a menu instead of a guided action.

Recommendation: Add one default action before every menu: "If unsure, paste the 10-minute default prompt."

## Terminology Overload

Observation: First-use docs correctly require labels such as `source_basis`, confidence, evidence gaps, EvidenceRefs, verified, metadata-only, and unsupported draft.

Inference: The terms protect source governance but may confuse non-maintainers.

Recommendation: Add a plain-language trust label layer:

- "draft idea";
- "book metadata only";
- "weak confidence";
- "user interpretation";
- "verified only with evidence".

## Governance Overload

Observation: Source-governance rules appear in start docs, prompt docs, context packs, worked examples, benchmark reports, and evidence reports.

Inference: Repetition is good for safety but can make the project feel legalistic before the user gets value.

Recommendation: Use a two-layer model:

- first-use warning: short and plain;
- detailed governance: linked only when needed.

## Benchmark Overload

Observation: Many root files begin with `AI_MASTER_BENCHMARK_`, `AI_MASTER_*_SCORES`, `AI_MASTER_*_AUDIT`, or `REAL_TARGET_AI_BENCHMARK`.

Inference: Benchmark artifacts are important but visually dominate the root.

Recommendation: Keep benchmark files out of first-use paths and classify them as evaluator-only in navigation.

## Evidence Terminology Overload

Observation: Evidence systems are visible through `kb/13_evidence/`, EvidenceRef language, sidecars, manual notes, manual quotes, promotion requests, and source-basis rules.

Inference: The system is source-safe, but new users may believe they need evidence intake before doing simple design practice.

Recommendation: State repeatedly: hands-on design help can start now; verified source-backed claims wait for evidence.

## Recommended Progressive-Disclosure Model

### Layer 1: Use It Now

Files:

- `USE_THIS_FIRST.md`
- `10_MINUTE_QUICKSTART.md`
- one prompt from `hands_on_prompts/`

User should not open audits, schemas, exports, benchmark internals, or canonical KB folders.

### Layer 2: Choose A Use Case

Files:

- `USE_CASE_HUB.md`
- `USE_CASES/`
- `WORKED_EXAMPLES_README.md`

Use when the user knows the situation but not the prompt.

### Layer 3: Give AI Context

Files:

- `AI_CONTEXT_PACKS.md`
- one context pack from `context_packs/`

Use when another AI needs file context.

### Layer 4: Learn The Runtime

Files:

- `AI_MASTER_RUNTIME_PACK.md`
- `AI_UNCERTAINTY_AND_SOURCE_RULES.md`
- `MASTER_PROBLEM_SOLVER_INDEX.md`

Use when tuning AI behavior, not for casual first use.

### Layer 5: Maintain Or Audit

Files:

- `KB_REBUILD_INSTRUCTION.md`
- `VALIDATION_REPORT.md`
- `SOURCE_GOVERNANCE_AUDIT.md`
- `tools/`
- `kb/`

Use only when maintaining the repo.

## Cognitive Load Repairs

| priority | issue | recommendation |
|---|---|---|
| P1 | multiple start files compete | designate `USE_THIS_FIRST.md` as canonical human start and label others as routes/aliases |
| P1 | first choice menus are large | put one default action before every chooser |
| P1 | trust labels are technical | add plain-English trust labels |
| P1 | root has too many reports | keep "ignore first" guidance at top-level |
| P2 | use-case hub table is wide | add route cards or prose sections before the table |
| P2 | prompt files have long one-line prompts | split copy-paste prompts into shorter paragraphs |
| P2 | benchmark/evidence terms are visible early | route those to evaluator/maintainer paths |
| P2 | portal workspace controls are advanced | label portal as optional and not first-use |

## Final Cognitive Load Assessment

The project has solved the "no path" problem, but not fully solved the "too many paths" problem. The next improvement should make one default action visually and structurally dominant.
