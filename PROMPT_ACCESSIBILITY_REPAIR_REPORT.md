# Prompt Accessibility Repair Report

Date: 2026-04-30

## Verdict

Verdict: ACCEPTED_FOR_HANDS_ON_COPY_PASTE_USE.

The hands-on prompt pack is now easier to copy and edit. Source-safety rules were preserved and made more readable.

## Repairs Completed

Updated all 15 prompt files under `hands_on_prompts/`:

- split dense safety paragraphs into short blockquote lines;
- kept replacement fields visible;
- preserved the at-most-3-questions rule;
- preserved concrete artifact requirements;
- preserved assumptions, source_basis, confidence, and evidence gap labels;
- preserved no-private-source, no-fake-evidence, and no-verified-without-evidence rules;
- shortened selected follow-up and self-check prompts.

## Files Repaired

- `hands_on_prompts/P01_review_my_game_idea.md`
- `hands_on_prompts/P02_define_core_experience.md`
- `hands_on_prompts/P03_generate_design_questions.md`
- `hands_on_prompts/P04_run_lens_review.md`
- `hands_on_prompts/P05_audit_meaningful_decisions.md`
- `hands_on_prompts/P06_audit_systems_and_economy.md`
- `hands_on_prompts/P07_audit_game_feel_and_feedback.md`
- `hands_on_prompts/P08_audit_ui_feedback.md`
- `hands_on_prompts/P09_align_narrative_and_mechanics.md`
- `hands_on_prompts/P10_make_prototype_plan.md`
- `hands_on_prompts/P11_make_playtest_plan.md`
- `hands_on_prompts/P12_teach_me_game_design.md`
- `hands_on_prompts/P13_create_reading_plan.md`
- `hands_on_prompts/P14_check_unsupported_claim.md`
- `hands_on_prompts/P15_pitch_critique.md`

## Library Updates

Updated `HANDS_ON_PROMPT_LIBRARY.md` with:

- a faster plain-language use path;
- quick prompt picks;
- a link to `COPY_PASTE_PROMPT_STYLE_GUIDE.md`;
- a copyability standard for future prompts.

## Safety Check

No prompt asks the AI to:

- parse private or high-risk books;
- summarize copyrighted chapters;
- invent evidence;
- invent citations;
- invent quotes;
- invent user notes;
- invent sidecars;
- invent project facts;
- invent playtest data;
- claim verified status without EvidenceRef and review.

## Remaining Gaps

- No observed user copy-paste trial has been supplied.
- No automated prompt lint command exists.
- Some output-format tables remain wide because they define structured artifacts.

## Next Repair

Create a real hands-on user trial or add a lightweight prompt lint check if the project moves toward CI.
