# Link And Heading Audit

Date: 2026-04-30

## Verdict

Verdict: PASS_WITH_USABILITY_WARNINGS.

The audited hands-on surface has no missing link targets and no detected case mismatches in selected first-use links. Heading hierarchy is mostly clean. The main issue is not broken links; it is link and entrypoint competition.

## Files Audited

- `USE_THIS_FIRST.md`
- `10_MINUTE_QUICKSTART.md`
- `HANDS_ON_START_HERE.md`
- `USE_CASE_HUB.md`
- `TOP_20_FILES_TO_KNOW.md`
- `WHAT_TO_IGNORE_FIRST.md`
- `AI_CONTEXT_PACKS.md`
- `HANDS_ON_PROMPT_LIBRARY.md`
- `USE_CASES/*.md`
- `hands_on_prompts/*.md`
- `context_packs/*.md`
- `worked_examples/*.md`

## Link Target Results

Observation: A local link check over the audited hands-on surface found no missing link targets.

Inference: Link rot is not currently blocking first-use navigation.

Recommendation: Add a scripted link checker later to preserve this as the repo grows.

Observation: A case-sensitive path check over selected first-use links found no case mismatches.

Inference: GitHub path-case risk is low in audited first-use links.

Recommendation: Keep exact-case file names in all future links.

## Heading Results

Observation: The main first-use docs use one H1 followed by H2 sections.

Inference: Heading navigation is acceptable.

Recommendation: Keep first-use docs shallow and avoid deep nesting.

Observation: `USE_THIS_FIRST.md` uses question-style H2 headings.

Inference: This supports user intent matching.

Recommendation: Prefer question headings for beginner entrypoints.

Observation: `10_MINUTE_QUICKSTART.md` uses step headings.

Inference: This supports procedural scanning.

Recommendation: Keep the quickstart step-based.

## Confusing Link And Entrypoint Findings

| finding | observation | inference | recommendation | priority |
|---|---|---|---|---|
| start alias split | `README.md` points to `HANDS_ON_START.md`; top-20 points to `HANDS_ON_START_HERE.md` | users may not know which is canonical | make one canonical and mark the other as alias | P1 |
| multiple first-use paths | `USE_THIS_FIRST.md`, `10_MINUTE_QUICKSTART.md`, `HANDS_ON_START.md`, `HANDS_ON_START_HERE.md`, `USE_CASE_HUB.md` all invite starting | all are useful but create choice burden | use a single default start banner | P1 |
| route table density | `USE_CASE_HUB.md` links to start, prompt, context pack, and example in each row | powerful but visually busy | add a "top 3 common routes" section before the table | P1 |
| maintenance links in user docs | some start docs link to QA or acceptance files | useful for transparency but not first-use | move QA links lower or label as maintainer-only | P2 |

## Broken Or Confusing Links

Broken links: none found in the audited hands-on surface.

Confusing links:

- `HANDS_ON_START.md` versus `HANDS_ON_START_HERE.md`;
- `AI_CONTEXT_MINIMUM.md` versus `AI_CONTEXT_MINIMAL.md` compatibility alias;
- `WORKED_EXAMPLES.md` versus `WORKED_EXAMPLES_README.md` and `worked_examples/README.md`.

These are not broken, but they create naming ambiguity.

## Recommended Link Rules

- Use one canonical file name in top-level navigation.
- When aliases remain, say "alias" in the first paragraph.
- Prefer action labels over raw file names in user-facing routes.
- Keep raw file names in maintainer maps.
- Run link check before release.

## Final Link And Heading Assessment

Navigation is technically intact. The remaining risk is conceptual duplication, not broken paths.
