# Agent Skills

Date: 2026-04-30

## Purpose

This folder contains Codex-consumable game design skills.

Each skill is a small execution protocol. It tells the agent when to use the skill, what to load, what not to load, what artifact to produce, and how to preserve source safety.

## Runtime Rule

Do not load every skill.

Use `AGENT_ROUTER.md` to choose one skill, then load only that skill's `SKILL.md`.

## Skills

| Skill | Purpose |
|---|---|
| `game_idea_review` | review and shape rough game ideas |
| `core_experience_definition` | define core experience and player fantasy |
| `lens_review` | run design lens review |
| `meaningful_decision_audit` | audit choice quality |
| `systems_economy_audit` | audit systems, loops, resources, and economy |
| `game_feel_feedback_audit` | audit feel, feedback, tightness, and responsiveness |
| `ui_feedback_audit` | audit UI clarity and state feedback |
| `narrative_mechanic_alignment` | align narrative and mechanics |
| `prototype_plan` | plan a prototype around a testable question |
| `playtest_plan` | plan a playtest without inventing results |
| `learning_coach` | teach game design and create practice plans |
| `reading_note_intake` | help user create safe manual reading notes |
| `claim_safety_check` | check source support and overclaiming |
| `pitch_critique` | critique pitch clarity, hook, and risks |

## Universal Skill Safety

- Do not parse private source bodies.
- Do not summarize copyrighted chapters.
- Do not invent evidence, citations, notes, sidecars, projects, or playtests.
- Do not claim verified status without EvidenceRef and review.
- Label assumptions, `source_basis`, confidence, evidence gaps, and next action.
