# First Artifact Menu

Date: 2026-04-30

## Purpose

Use this menu to choose the first thing you want the AI to produce.

Each artifact should include assumptions, source_basis, confidence, evidence gaps, and one next action.

## Artifact Menu

### One-Page Concept Memo

- What it is: a concise summary of a rough game idea.
- When to use it: when your idea is vague but you want direction.
- Prompt to use: [P01 review my game idea](hands_on_prompts/P01_review_my_game_idea.md).
- Context pack to use: [CP02 game idea review](context_packs/CP02_game_idea_review.md).
- Good output checklist: core experience, player fantasy, design pillars, risks, next prototype question.
- Source/confidence note: draft scaffold; default source_basis `unsupported_draft`, confidence `weak`.

### Core Experience Statement

- What it is: one sentence describing what the player should feel and repeatedly do.
- When to use it: when the idea has too many possible directions.
- Prompt to use: [P02 define core experience](hands_on_prompts/P02_define_core_experience.md).
- Context pack to use: [CP02 game idea review](context_packs/CP02_game_idea_review.md).
- Good output checklist: player promise, design pillars, exclusions, test question.
- Source/confidence note: not proof of player emotion; default source_basis `unsupported_draft`.

### Design Question List

- What it is: a prioritized list of design questions.
- When to use it: when you need expert questions before deciding.
- Prompt to use: [P03 generate design questions](hands_on_prompts/P03_generate_design_questions.md).
- Context pack to use: [CP01 minimal general use](context_packs/CP01_minimal_general_use.md).
- Good output checklist: critical questions, supporting questions, next artifact.
- Source/confidence note: useful questions are not verified claims.

### Lens Review

- What it is: a review through selected design lenses.
- When to use it: when you want critique but do not know which audit to run.
- Prompt to use: [P04 run lens review](hands_on_prompts/P04_run_lens_review.md).
- Context pack to use: [CP04 design audit](context_packs/CP04_design_audit.md).
- Good output checklist: 3 to 5 lenses, findings, recommendations, next workflow.
- Source/confidence note: lens findings are diagnostic hypotheses.

### Meaningful Decision Audit

- What it is: a matrix checking whether choices have information, tradeoffs, and consequences.
- When to use it: when choices feel fake, obvious, blind, or consequence-free.
- Prompt to use: [P05 audit meaningful decisions](hands_on_prompts/P05_audit_meaningful_decisions.md).
- Context pack to use: [CP04 design audit](context_packs/CP04_design_audit.md).
- Good output checklist: decision matrix, fake-choice risks, consequence map, improvements.
- Source/confidence note: do not claim choices are meaningful until tested or evidenced.

### Systems Map

- What it is: a text map of resources, loops, sources, sinks, and risks.
- When to use it: when your system, economy, or progression feels messy.
- Prompt to use: [P06 audit systems and economy](hands_on_prompts/P06_audit_systems_and_economy.md).
- Context pack to use: [CP04 design audit](context_packs/CP04_design_audit.md).
- Good output checklist: system elements, inputs, outputs, risks, test question.
- Source/confidence note: do not invent rates, telemetry, or balance results.

### Prototype Plan

- What it is: a small plan for testing one risky design assumption.
- When to use it: before building too much.
- Prompt to use: [P10 make prototype plan](hands_on_prompts/P10_make_prototype_plan.md).
- Context pack to use: [CP05 prototype and playtest](context_packs/CP05_prototype_and_playtest.md).
- Good output checklist: riskiest assumption, prototype question, minimum build, exclusions, success signal.
- Source/confidence note: a prototype plan is a hypothesis, not proof.

### Playtest Plan

- What it is: a plan for observing a prototype safely.
- When to use it: when you have something testable or a clear design question.
- Prompt to use: [P11 make playtest plan](hands_on_prompts/P11_make_playtest_plan.md).
- Context pack to use: [CP05 prototype and playtest](context_packs/CP05_prototype_and_playtest.md).
- Good output checklist: test goal, tasks, observations, questions, decision criteria.
- Source/confidence note: planned observations are not actual observations.

### Learning Plan

- What it is: a mini lesson, exercise, and next topic.
- When to use it: when you want to learn game design without a project.
- Prompt to use: [P12 teach me game design](hands_on_prompts/P12_teach_me_game_design.md).
- Context pack to use: [CP03 learning coach](context_packs/CP03_learning_coach.md).
- Good output checklist: working definition, why it matters, exercise, next concept.
- Source/confidence note: teaching scaffolds are draft unless EvidenceRefs exist.

### Unsupported Claim Check

- What it is: a source-safety report for a claim.
- When to use it: before citing, verifying, quoting, or strengthening a claim.
- Prompt to use: [P14 check unsupported claim](hands_on_prompts/P14_check_unsupported_claim.md).
- Context pack to use: [CP06 source safety](context_packs/CP06_source_safety_and_claim_check.md).
- Good output checklist: classification, safe wording, blocked wording, evidence needed, next action.
- Source/confidence note: metadata-only cannot support verified claims.

### Pitch Critique

- What it is: a critique of a pitch, one-liner, store blurb, or concept statement.
- When to use it: when your pitch feels vague or unconvincing.
- Prompt to use: [P15 pitch critique](hands_on_prompts/P15_pitch_critique.md).
- Context pack to use: [CP04 design audit](context_packs/CP04_design_audit.md).
- Good output checklist: current promise, hook, unclear point, missing proof, revised pitch skeleton.
- Source/confidence note: do not invent market demand, audience validation, or player appeal.

## If You Cannot Choose

Choose one-page concept memo if you have an idea.

Choose learning plan if you do not have an idea.

Choose unsupported claim check if the question involves evidence, citation, quote, source, or verification.
