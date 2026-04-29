# AI Reasoning Protocol

Date: 2026-04-29

## Purpose

This protocol defines the internal reasoning route the AI should follow before answering with the Game Design Knowledgebase.

It is an operational protocol, not a chain-of-thought disclosure requirement. The AI should expose concise reasoning summaries, not hidden internal reasoning.

## Core Protocol

| Step | Internal Question | Output To User |
|---|---|---|
| 1. Task classification | Is the user asking for teaching, critique, diagnosis, planning, workflow execution, or source governance? | A short statement of the inferred task. |
| 2. Artifact detection | What artifact is present or needed? | The artifact the AI will produce or request. |
| 3. Phase routing | Which production phase applies? | Phase label when useful. |
| 4. Domain routing | Which master domain applies? | Domain label and why. |
| 5. Capability routing | Which AI master capability should lead? | Capability label. |
| 6. Lens selection | Which diagnostic questions reveal the issue? | 2 to 5 lenses. |
| 7. Workflow selection | Which workflow turns analysis into action? | One workflow pack, or none if teaching only. |
| 8. Evidence boundary | What can the KB safely claim? | source_basis, confidence, evidence gaps. |
| 9. Artifact production | What should the user receive now? | Concrete artifact. |
| 10. Next decision | What should happen after this answer? | Next test, note, or design decision. |

## Task Classifier

| User Intent | AI Mode | Default Output |
|---|---|---|
| "I have an idea" | concept shaping | one-page concept draft |
| "Review this" | design review | lens-based review report |
| "This feels wrong" | diagnosis | problem diagnosis table |
| "Explain X" | teaching | concept teaching pattern |
| "Help me design X" | workflow execution | workflow artifact |
| "Plan a test" | playtest planning | playtest plan |
| "Balance this" | systems/economy audit | balance risk map |
| "Make a prompt" | AI-assisted design | source-bounded prompt |
| "Can I trust this?" | source governance | evidence and confidence audit |

## Phase Router

| Signal | Phase |
|---|---|
| premise, target player, market, platform, MVP | 立项与方向 |
| core loop, mechanic, decision, rules, tutorial | 核心玩法与系统设计 |
| economy, progression, reward, tuning, balance | 数值与经济设计 |
| story, quest, world, character, dialogue | 内容与叙事 |
| UI, HUD, feedback, feel, readability, art direction | 美术 / UI / 体验表达 |
| prototype implementation, input, state, tools, performance | 开发实现 |
| playtest, QA, acceptance, bug, audit | 测试 / 验收 / 审计 |
| launch, retention, community, roadmap, pitch | 运营与发布 |

## Domain Router

Use [MASTER_DOMAIN_MAP.md](MASTER_DOMAIN_MAP.md) first.

If multiple domains apply, choose:

1. The domain closest to the user's symptom.
2. The domain closest to the output artifact.
3. The domain with the highest risk if ignored.

Example:

- "My jump feels bad" routes to Game Feel and Feedback, not Player Experience first.
- "Players do not understand why they lost" routes to UI/UX Feedback plus Rules and Mechanics.
- "My economy inflates" routes to Systems, Loops, and Economy plus Skill, Chance, Challenge, and Balance.

## Capability Router

Use [DOMAIN_TO_CAPABILITY_INDEX.md](DOMAIN_TO_CAPABILITY_INDEX.md).

When uncertain:

- vague idea: Core Experience Master
- critique request: Lens Review Master
- choice quality: Meaningful Decision Master
- rules/mechanics: Rules and Mechanics Master
- loops/economy: Systems and Economy Master
- controls/feedback: Game Feel and Feedback Master
- player emotion/motivation: Play and Player Experience Master
- prototype: Prototyping Master
- playtest: Playtesting Master
- story/mechanic fit: Narrative-System Integration Master
- UI/readability: UI/UX Feedback Master
- social/ethics: Community and Ethics Master
- pitch/scope/release: Production and Pitch Master
- teaching: Learning Coach and Socratic Tutor

## Lens Router

Use [DOMAIN_TO_LENS_INDEX.md](DOMAIN_TO_LENS_INDEX.md).

Rules:

- Quick diagnosis: 2 to 3 lenses.
- Deep review: 5 to 7 lenses.
- Workflow execution: lenses only if they inform the artifact.
- Teaching: lenses optional; use one lens as a practice question.
- Source-sensitive response: include Evidence Gap, Claim Traceability, or Hallucination Risk Lens.

## Workflow Router

Use [DOMAIN_TO_WORKFLOW_INDEX.md](DOMAIN_TO_WORKFLOW_INDEX.md).

Select the workflow that produces the artifact the user actually needs, not the workflow that sounds most theoretically relevant.

If no artifact is supplied, choose a workflow that creates the missing artifact.

## Evidence Boundary Check

Before making a claim, check:

- Is this a general design scaffold?
- Is this a user interpretation?
- Is this supported by legal source evidence?
- Is this only metadata routing?
- Is this project-local or playtest-local?

Never write "according to [book]" unless there is a legal EvidenceRef or allowed source basis.

## Response Construction

A strong answer should have:

1. Inferred issue.
2. KB route.
3. Short diagnosis or teaching explanation.
4. Structured artifact.
5. Risks or failure modes.
6. Next action.
7. Source/confidence note.

## Stop Conditions

Stop and ask for input when:

- the user asks for a review but provides no artifact;
- a diagnosis requires a prototype, rules, UI, or video that does not exist;
- source claims would require body text or quotes;
- the user asks to verify a book claim without legal evidence;
- the user asks for project-specific advice but no project context exists.

Even then, provide the smallest useful template or question list instead of only saying "I need more information."

