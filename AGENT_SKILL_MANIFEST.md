# Agent Skill Manifest

Date: 2026-04-30

## Purpose

This manifest lists the game design skills that Codex-like agents may use.

Machine-readable equivalent: `AGENT_SKILL_MANIFEST.json`.

## Default Rules For Every Skill

- Load `AGENT_START.md`, this manifest, and `AGENT_ROUTER.md` before choosing a skill.
- Load only the chosen skill file.
- Load one context pack only when it helps the task.
- Do not load benchmark files for normal use.
- Do not load private sources.
- Do not invent evidence.
- Every output must label assumptions, `source_basis`, confidence, evidence gaps, and next action.

## Skills

| skill_id | user_intent | related_context_pack | output artifact |
|---|---|---|---|
| game_idea_review | review or shape a rough game idea | `context_packs/CP02_game_idea_review.md` | one-page concept memo |
| core_experience_definition | define player fantasy, experience, and pillars | `context_packs/CP02_game_idea_review.md` | core experience statement |
| lens_review | review a concept through selected design lenses | `context_packs/CP04_design_audit.md` | lens review report |
| meaningful_decision_audit | diagnose fake choices, tradeoffs, and decision quality | `context_packs/CP04_design_audit.md` | meaningful decision audit |
| systems_economy_audit | analyze loops, resources, sources, sinks, and economy risks | `context_packs/CP04_design_audit.md` | systems map or economy audit |
| game_feel_feedback_audit | evaluate responsiveness, feedback, feel, and tuning | `context_packs/CP04_design_audit.md` | game feel audit |
| ui_feedback_audit | evaluate interface clarity and feedback | `context_packs/CP04_design_audit.md` | UI feedback audit |
| narrative_mechanic_alignment | align narrative, world, character, and mechanics | `context_packs/CP04_design_audit.md` | narrative-mechanic alignment report |
| prototype_plan | create prototype questions and scope | `context_packs/CP05_prototype_and_playtest.md` | prototype plan |
| playtest_plan | create source-safe playtest plan | `context_packs/CP05_prototype_and_playtest.md` | playtest plan |
| learning_coach | teach game design or create learning practice | `context_packs/CP03_learning_coach.md` | learning plan or mini lesson |
| reading_note_intake | help user create source-safe manual notes | `context_packs/CP03_learning_coach.md` | reading-note intake plan |
| claim_safety_check | check whether a claim is supported or overclaimed | `context_packs/CP06_source_safety_and_claim_check.md` | claim safety report |
| pitch_critique | critique pitch clarity, audience, hook, and risks | `context_packs/CP04_design_audit.md` | pitch critique |

## Skill Contract Fields

Every `skills/*/SKILL.md` must include:

- Skill ID;
- Purpose;
- When to use;
- When not to use;
- Required user input;
- Optional user input;
- Files to load;
- Files not to load;
- Related context pack;
- Related prompt file;
- Related KB domains;
- Related cards/lenses/workflows;
- Output artifact;
- Output contract;
- Source safety rules;
- Confidence rules;
- Minimum questions to ask;
- Step-by-step execution protocol;
- Common failure modes;
- Acceptance criteria.
