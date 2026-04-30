# Hands-On User Trial Request

Date: 2026-04-30

## Purpose

The hands-on documentation layer is ready. To finish the empirical usability gate, the repository needs a real user trial.

No trial result will be created until the user supplies actual trial observations or raw target AI output.

## What To Provide

Please provide one trial packet with:

| Field | Required? | What to provide |
|---|---|---|
| route chosen | yes | Choose no project, vague game idea, design review, learning, reading plan, or source claim check. |
| user goal | yes | One sentence explaining what you wanted to do. |
| files opened | yes | List files you actually opened. |
| context pack used | yes | Example: CP02, CP03, CP04, CP05, or CP06. |
| prompt used | yes | Example: P01, P05, P12, P14. |
| user input pasted | yes | The idea, question, or learning goal you pasted. |
| target AI used | optional | Model or tool name if you used one. |
| raw AI output | optional | Paste the raw output exactly if generated. |
| time to prompt | optional | Approximate time to reach a prompt. |
| time to artifact | optional | Approximate time to get an output artifact. |
| confusion points | yes | What was unclear or too much. |
| source/confidence labels present | yes | Did the output label assumptions, source_basis, confidence, evidence gaps? |
| private-source risk | yes | Did the AI try to parse, quote, or summarize private/high-risk source material? |

## Minimum Trial Options

If you have no active game project, use:

- start file: `NO_PROJECT_START_HERE.md`
- context pack: `context_packs/CP03_learning_coach.md`
- prompt: `hands_on_prompts/P12_teach_me_game_design.md`
- expected artifact: one small learning exercise

If you have a vague idea, use:

- start file: `USE_CASES/vague_game_idea.md`
- context pack: `context_packs/CP02_game_idea_review.md`
- prompt: `hands_on_prompts/P01_review_my_game_idea.md`
- expected artifact: one-page concept memo

## Do Not Provide

Do not provide:

- private book body text;
- copied chapters;
- long quotes;
- source files;
- invented playtest results;
- invented project facts;
- benchmark scores.

## Current Status

Status: BLOCKED_PENDING_USER_TRIAL_OBSERVATION.

Next exact prompt to supply observations: `provide-hands-on-user-trial-observation`

Next exact prompt after observations are supplied: `analyze-hands-on-user-trial-results`
