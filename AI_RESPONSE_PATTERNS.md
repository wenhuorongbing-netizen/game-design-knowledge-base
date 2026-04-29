# AI Response Patterns

Date: 2026-04-29

## Purpose

This file defines reusable response patterns for the AI Game Design Master.

Each pattern includes when to use it, required inputs, reasoning steps, output structure, source/confidence handling, common failure modes, and an example placeholder.

## Pattern 1: Quick Diagnosis

| Field | Definition |
|---|---|
| when to use | User asks for fast feedback or describes a symptom briefly. |
| required inputs | symptom; artifact if available; intended player experience if available. |
| reasoning steps | classify symptom; route domain; pick 2 to 3 lenses; identify likely causes; propose next test. |
| output structure | inferred issue; likely causes; fast checks; next action; source/confidence. |
| source/confidence handling | default `unsupported_draft`, `weak`; mark assumptions. |
| common failure modes | giving generic advice; overdiagnosing without artifact; ignoring missing context. |
| example placeholder | "My combat is boring" routes to Meaningful Decisions, Rules and Mechanics, and Player Experience. |

## Pattern 2: Deep Design Review

| Field | Definition |
|---|---|
| when to use | User provides a concept, spec, prototype description, pitch, or long artifact. |
| required inputs | artifact; intended experience; stage; decision the review should support. |
| reasoning steps | identify artifact; route domain; select 5 to 7 lenses; review strengths; review risks; produce next artifacts. |
| output structure | summary; KB route; strengths; major risks; lens findings; missing evidence; recommended experiments; next artifact. |
| source/confidence handling | cite KB route and mark all unverified design reasoning as draft/source-governed. |
| common failure modes | reviewing style instead of design; too many lenses; no next action. |
| example placeholder | Review a one-page concept for scope, player fantasy, core loop, meaningful decisions, and feasibility. |

## Pattern 3: Lens-Based Review

| Field | Definition |
|---|---|
| when to use | User asks "what questions should I ask?" or "review with lenses." |
| required inputs | artifact type; review goal; domain if known. |
| reasoning steps | select lens family; choose lens set; ask diagnostic questions; convert answers into risks and actions. |
| output structure | selected lenses; diagnostic questions; likely findings; output artifact. |
| source/confidence handling | lenses are original KB scaffolds, not verified source doctrine. |
| common failure modes | copying proprietary lens text; asking questions without producing decisions. |
| example placeholder | Use Core Experience, Audience, Scope, and Feasibility lenses on an early game idea. |

## Pattern 4: Workflow Execution

| Field | Definition |
|---|---|
| when to use | User asks to build, plan, design, audit, or turn an idea into an artifact. |
| required inputs | goal; artifact target; constraints; available context. |
| reasoning steps | select workflow; list required inputs; fill known fields; mark assumptions; produce artifact; add quality checklist. |
| output structure | workflow selected; assumptions; artifact; checklist; next step; source/confidence. |
| source/confidence handling | workflow packs are `unsupported_draft` unless validated by user/project/playtest evidence. |
| common failure modes | running multiple workflows at once; producing vague advice instead of artifact. |
| example placeholder | Execute Core Loop Design Pack to produce action-feedback-reward-friction loop. |

## Pattern 5: Concept Teaching

| Field | Definition |
|---|---|
| when to use | User asks "what is X?" or says they do not understand a concept. |
| required inputs | concept; desired depth if provided. |
| reasoning steps | define cautiously; explain importance; contrast misunderstandings; give practice task; mark evidence gap. |
| output structure | short definition; why it matters; how to use it; common mistake; exercise; KB route. |
| source/confidence handling | do not claim exact book definitions without evidence. |
| common failure modes | abstract lecture; unsupported source claims; no exercise. |
| example placeholder | Teach "meaningful decisions" as a design scaffold and ask the user to map one choice. |

## Pattern 6: Project Planning

| Field | Definition |
|---|---|
| when to use | User wants to plan a game, feature, prototype, or production slice. |
| required inputs | project goal; target player; platform; scope; timeline if available. |
| reasoning steps | define experience; identify assumptions; select workflows; sequence deliverables; mark risks. |
| output structure | plan goal; phases; artifacts; risks; validation steps; next task. |
| source/confidence handling | project plan is AI hypothesis until user/project evidence exists. |
| common failure modes | pretending schedule is known; ignoring constraints; overbuilding scope. |
| example placeholder | Plan a two-week prototype for testing one core loop. |

## Pattern 7: Playtest Planning

| Field | Definition |
|---|---|
| when to use | User needs to test a concept, prototype, mechanic, UI, or feel issue. |
| required inputs | test goal; prototype state; target player; question to answer. |
| reasoning steps | define test question; choose participants; identify observations; separate facts from interpretation; plan decisions. |
| output structure | playtest goal; participants; tasks; observation sheet; interview questions; decision rules. |
| source/confidence handling | no fake playtest findings; output is a plan only. |
| common failure modes | asking biased questions; treating future observations as facts; collecting feedback without decision criteria. |
| example placeholder | Test whether players understand the consequence of a resource tradeoff. |

## Pattern 8: System Audit

| Field | Definition |
|---|---|
| when to use | User asks about loops, economy, progression, balance, runaway systems, or resources. |
| required inputs | system parts; resources; player actions; win/loss or progression goal. |
| reasoning steps | map parts; identify loops; map feedback; identify sources/sinks; flag runaway/stagnation risks. |
| output structure | system map table; loop list; resource flow; risk memo; test plan. |
| source/confidence handling | balance conclusions require project or playtest data; otherwise mark as hypothesis. |
| common failure modes | treating feature lists as systems; making numeric claims without data. |
| example placeholder | Audit a survival crafting loop for resource inflation. |

## Pattern 9: Meaningful Decision Audit

| Field | Definition |
|---|---|
| when to use | User says choices feel fake, boring, obvious, random, or meaningless. |
| required inputs | player choice; options; information available; consequence; repeat context. |
| reasoning steps | identify options; inspect information; inspect tradeoff; inspect consequence; test learning and future impact. |
| output structure | decision matrix; fake-choice risks; tradeoff fixes; playtest question. |
| source/confidence handling | use as draft design audit unless supported by evidence. |
| common failure modes | equating more options with better decisions; ignoring player information. |
| example placeholder | Compare "attack or defend" options and ask what future state changes. |

## Pattern 10: Game Feel Audit

| Field | Definition |
|---|---|
| when to use | User says controls are floaty, sluggish, unclear, unresponsive, noisy, or not satisfying. |
| required inputs | action; input method; expected feel; current behavior; video/build if available. |
| reasoning steps | isolate input, response, context, camera, animation, feedback, and polish; propose tuning experiments. |
| output structure | symptom classification; feel dimensions; experiments; measurement notes; playtest questions. |
| source/confidence handling | do not claim specific Game Feel book definitions without evidence. |
| common failure modes | treating feel as only animation or VFX; prescribing without artifact. |
| example placeholder | Diagnose a floaty jump by separating acceleration, gravity, input buffer, coyote time, camera, and landing feedback. |

## Pattern 11: Narrative-Mechanic Alignment

| Field | Definition |
|---|---|
| when to use | User says story does not fit gameplay or wants world/character design. |
| required inputs | premise; player role; core actions; world rules; character function. |
| reasoning steps | compare story promise to player verbs; inspect world constraints; inspect avatar/player identity; identify conflicts. |
| output structure | alignment map; conflicts; mechanic support opportunities; narrative constraints; next artifact. |
| source/confidence handling | no book-specific narrative claims without evidence. |
| common failure modes | writing lore instead of playable structure; ignoring player agency. |
| example placeholder | Align a stealth mechanic with a character's social role and world rules. |

## Pattern 12: Pitch Critique

| Field | Definition |
|---|---|
| when to use | User shares a pitch, store blurb, concept summary, or market positioning. |
| required inputs | target audience; platform; hook; core experience; proof features. |
| reasoning steps | identify promise; test differentiation; inspect feasibility; inspect scope; identify missing proof. |
| output structure | pitch clarity; audience fit; hook strength; proof gaps; risk list; revised pitch skeleton. |
| source/confidence handling | business/release advice is draft unless project and market evidence exist. |
| common failure modes | marketing polish without design proof; ignoring scope or production feasibility. |
| example placeholder | Critique whether a one-sentence pitch communicates player action and unique promise. |

## Pattern Selection Rule

If several patterns match, choose the one that produces the smallest useful artifact first.

