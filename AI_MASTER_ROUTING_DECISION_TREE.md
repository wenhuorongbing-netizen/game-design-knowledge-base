# AI Master Routing Decision Tree

Date: 2026-04-29

## Purpose

This decision tree converts a user request into a master capability route without requiring the user to know KB folders, domains, or internal entity names.

## Step 1 - Identify Request Type

| User Request Type | Route To | First Output |
|---|---|---|
| "Help with this idea" | Core Experience Master | one-page concept draft |
| "Review this" | Lens Review Master plus domain capability | lens review report |
| "Teach me" | Learning Coach and Socratic Tutor | lesson, example placeholder, exercise |
| "What should I read" | Learning Coach and Socratic Tutor | reading priority and note prompts |
| "Make a plan" | Relevant workflow capability | workflow output artifact |
| "Audit this system/mechanic/UI" | Domain-specific master | audit table |
| "Can this be verified" | Source governance and evidence route | evidence gap and claim status |

## Step 2 - Detect Problem Cluster

| If User Mentions | Choose Cluster | Primary Capability |
|---|---|---|
| idea, concept, theme, fantasy, hook | project direction | Core Experience Master |
| player feeling, motivation, boring, fun, agency | player experience | Play and Player Experience Master |
| choice, decision, tradeoff, consequence | meaningful decisions | Meaningful Decision Master |
| rules, mechanics, objectives, resources | rules and mechanics | Rules and Mechanics Master |
| loop, system, economy, balance, inflation | systems and economy | Systems and Economy Master |
| controls, feel, floaty, responsiveness, feedback timing | game feel | Game Feel and Feedback Master |
| UI, HUD, readability, affordance, input mapping | UI/UX | UI/UX Feedback Master |
| story, world, character, player role, narrative | narrative-system | Narrative-System Integration Master |
| prototype, assumption, experiment, quick test | prototyping | Prototyping Master |
| playtest, participants, observation, survey, iteration | playtesting | Playtesting Master |
| pitch, scope, release, documentation, team | production and pitch | Production and Pitch Master |
| ethics, harm, accessibility, griefing, community | community and ethics | Community and Ethics Master |
| learn, explain, compare theories, reading plan | teaching and reading | Learning Coach and Socratic Tutor |

## Step 3 - Resolve Ambiguous Requests

| Ambiguous Request | Do This First | Avoid |
|---|---|---|
| "Make it better" | Ask for artifact type and current problem in one question. | Running every lens. |
| "My game is boring" | Ask for repeated action, current change over time, and target feeling. | Suggesting rewards or content immediately. |
| "My mechanic is bad" | Ask what player action, state change, and decision it creates. | Rewriting mechanics without diagnosis. |
| "My game feels wrong" | Ask whether the problem is input, response, camera, animation, feedback, or context. | Assuming all feel problems are input lag. |
| "My economy is broken" | Ask what enters, leaves, and accumulates. | Balancing numbers without rates. |
| "Teach me X" | Ask level only if not clear; otherwise teach with evidence boundary. | Pretending book-specific definitions are verified. |

## Step 4 - Select Lens Count

| Review Depth | Lens Count | Use Case |
|---|---:|---|
| quick diagnosis | 2 to 3 | User wants a fast direction. |
| normal review | 3 to 5 | User asks for critique or audit. |
| deep review | 5 to 7 | User provides artifact and asks for detailed review. |
| source-sensitive review | include 1 governance lens | Claim, reading, quote, or evidence request. |

## Step 5 - Select Workflow

| Problem State | Start Workflow |
|---|---|
| vague idea | Game Idea to One-Page Concept Pack |
| unclear experience | Core Experience Definition Pack |
| decision problem | Meaningful Decision Audit Pack |
| rule/mechanic problem | Rules and Formal Elements Pack |
| system loop problem | Systems Map Pack |
| economy problem | Economy and Balance Pack |
| feel problem | Game Feel Prototype Pack |
| UI feedback problem | UI Feedback Pack |
| narrative mismatch | Narrative-Mechanic Alignment Pack |
| prototype uncertainty | Prototype Question Pack |
| playtest need | Playtest Plan Pack |
| pitch/release need | Release Readiness and Risk Audit Pack |
| learning need | AI Teaching Procedure or source-safe reading process |

## Step 6 - Produce Artifact Before Advice

The AI should produce a concrete artifact whenever possible:

| Route | Minimum Artifact |
|---|---|
| project direction | one-page concept draft |
| core experience | core experience statement |
| motivation/boring | engagement hypothesis table |
| meaningful decisions | decision audit matrix |
| rules/mechanics | rule table |
| systems | system map |
| economy | source/sink table |
| game feel | feel audit table |
| UI/UX | UI readability audit |
| narrative-system | alignment map |
| prototyping | prototype question sheet |
| playtesting | playtest plan |
| pitch | pitch skeleton |
| ethics/community | risk memo |
| teaching | lesson plus mini exercise |
| reading | reading route plus note prompts |

## Step 7 - Source and Confidence Footer

Every routed response should state:

| Field | Default |
|---|---|
| source_basis | `unsupported_draft` for original design scaffolds; `metadata_only` for work routing and reading routes |
| confidence | `weak` unless user evidence, project data, or verified EvidenceRefs exist |
| evidence_refs | none unless already present |
| evidence_gap | user notes, legal sidecar, project overlay, or playtest log needed |
| verified claim status | do not claim verified without evidence_ref and review |

