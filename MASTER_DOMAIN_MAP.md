# Master Domain Map

Date: 2026-04-29

## Purpose

This file makes the whole field of game design legible to the AI Game Design Master Framework.

It is a source-governed navigation layer, not a source-backed theory book. It routes domains to capabilities, works, cards, lenses, workflows, and next learning actions using existing KB metadata and structures only.

## Governance Boundary

- No private or high-risk source body text was parsed.
- No book chapter was summarized.
- No quotation was extracted.
- No book-specific claim was promoted to verified.
- All domain descriptions are AI operating scaffolds with `source_basis: metadata_only` or `unsupported_draft`.
- Evidence level remains weak until legal sidecars, user manual notes, open sources, or reviewed EvidenceRefs exist.

## Coverage Scale

| Level | Meaning |
|---|---|
| strong_structural | The KB has multiple works, cards, lenses, and workflows for the domain. |
| adequate_structural | The KB has useful routing, but fewer direct artifacts. |
| weak_structural | The domain exists but needs more dedicated cards, lenses, or workflows. |
| missing_structural | The domain is named but not practically navigable yet. |

## Evidence Scale

| Level | Meaning |
|---|---|
| metadata_only | Work/source routing exists, but no usable body evidence. |
| unsupported_draft | Original KB scaffolds exist but are not evidence-backed. |
| user_interpretation_started | User notes exist and can support limited interpretation. |
| verified | Reviewed legal evidence supports the claim or object. |

Current overall evidence level: `metadata_only + unsupported_draft`. Verified claims remain 0.

## Master Domain Overview

| Domain | Primary AI Capability | Structural Coverage | Evidence Level | Best First Output |
|---|---|---|---|---|
| Game Design Foundations | Core Experience Master | strong_structural | metadata_only + unsupported_draft | one-page concept and design pillars |
| Player Experience | Play and Player Experience Master | strong_structural | metadata_only + unsupported_draft | player experience hypothesis |
| Play Theory | Play and Player Experience Master | adequate_structural | metadata_only + unsupported_draft | play framing memo |
| Fun, Learning, and Mastery | Play and Player Experience Master | adequate_structural | metadata_only + unsupported_draft | challenge and mastery ladder |
| Rules and Mechanics | Rules and Mechanics Master | strong_structural | metadata_only + unsupported_draft | mechanic and rule spec |
| Meaningful Decisions | Meaningful Decision Master | strong_structural | metadata_only + unsupported_draft | decision audit matrix |
| Skill, Chance, Challenge, and Balance | Meaningful Decision Master | strong_structural | metadata_only + unsupported_draft | skill/chance tuning brief |
| Systems, Loops, and Economy | Systems and Economy Master | strong_structural | metadata_only + unsupported_draft | system map and source/sink table |
| Game Feel and Feedback | Game Feel and Feedback Master | strong_structural | metadata_only + unsupported_draft | game feel audit |
| UI, UX, and Interface | UI/UX Feedback Master | strong_structural | metadata_only + unsupported_draft | HUD and feedback readability audit |
| Narrative, World, and Character | Narrative-System Integration Master | strong_structural | metadata_only + unsupported_draft | narrative-mechanic alignment map |
| Space and Level Design | Narrative-System Integration Master | weak_structural | metadata_only + unsupported_draft | level flow and spatial readability map |
| Prototyping | Prototyping Master | strong_structural | metadata_only + unsupported_draft | prototype question and test plan |
| Playtesting and Iteration | Playtesting Master | strong_structural | metadata_only + unsupported_draft | playtest plan and iteration memo |
| Community and Multiplayer | Community and Ethics Master | adequate_structural | metadata_only + unsupported_draft | community risk and player type hypothesis |
| Ethics and Responsibility | Community and Ethics Master | adequate_structural | metadata_only + unsupported_draft | ethical risk review |
| Production, Documentation, and Pitch | Production and Pitch Master | strong_structural | metadata_only + unsupported_draft | design brief, spec, or pitch artifact |
| Business and Release | Production and Pitch Master | adequate_structural | metadata_only + unsupported_draft | release readiness and positioning memo |
| AI-Assisted Design and Prompt Engineering | Learning Coach and Socratic Tutor | strong_structural | unsupported_draft | source-bounded AI prompt workflow |

## Domain Details

### Game Design Foundations

| Field | Routing |
|---|---|
| domain purpose | Establish what a game is trying to be, who it serves, and what design problem it must solve. |
| what an AI master should understand | Ideas are not designs until they specify player action, experience target, constraints, evidence gaps, and output artifacts. |
| what an AI master should ask | What is the player promise? What is the smallest playable proof? What should not be built yet? What evidence would change the direction? |
| artifacts the AI should produce | one-page concept, core experience statement, design pillars, MVP cut, risk memo. |
| related capabilities | Core Experience Master; Lens Review Master; Production and Pitch Master; Learning Coach and Socratic Tutor |
| related works | The Art of Game Design; Game Design Workshop; A Theory of Fun; Level Up!; Chris Crawford works |
| related cards | `player-experience`; `experience-goal`; `audience`; `problem-statement`; `pitch` |
| related lenses | Core Experience Lens; Audience Lens; Player Fantasy Lens; Scope Lens; Feasibility Lens |
| related workflows | Game Idea to One-Page Concept Pack; Core Experience Definition Pack; Player Persona and Audience Pack |
| current coverage level | strong_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | user notes on how the user wants the AI to define "good direction" and "minimum proof". |
| recommended next work | Build a Core Experience Master operating guide and prompt pack. |

### Player Experience

| Field | Routing |
|---|---|
| domain purpose | Keep design decisions anchored in what players perceive, feel, learn, choose, and remember. |
| what an AI master should understand | A system can be internally coherent but still fail if player perception, motivation, agency, or feedback is wrong. |
| what an AI master should ask | What should the player feel now? What do they understand? What agency do they perceive? What emotion or learning should be tested? |
| artifacts the AI should produce | experience hypothesis, motivation map, agency audit, player journey questions, playtest observation focus. |
| related capabilities | Play and Player Experience Master; Core Experience Master; Meaningful Decision Master; UI/UX Feedback Master |
| related works | A Theory of Fun; Play Matters; The Aesthetic of Play; The Art of Game Design; Better Game Characters by Design |
| related cards | `player-experience`; `agency`; `pleasure`; `fun`; `challenge`; `mastery`; `flow`; `curiosity` |
| related lenses | Agency Lens; Motivation Lens; Challenge Lens; Mastery Lens; Flow Lens; Curiosity Lens; Accessibility Lens |
| related workflows | Core Experience Definition Pack; Player Persona and Audience Pack; Skill / Chance / Challenge Pack; Playtest Plan Pack |
| current coverage level | strong_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | user notes distinguishing experience goals, emotional goals, and playtestable player behaviors. |
| recommended next work | Build a Player Experience question ladder for concept, prototype, and playtest stages. |

### Play Theory

| Field | Routing |
|---|---|
| domain purpose | Explain how play frames activity, constraint, voluntary engagement, appropriation, disruption, and meaning-making. |
| what an AI master should understand | Play theory helps the AI ask broader questions than feature utility, but current KB theory claims are not verified. |
| what an AI master should ask | What makes this activity playful? What boundaries or permissions create play? Where can players appropriate or reinterpret the system? |
| artifacts the AI should produce | play framing memo, voluntary engagement audit, play-context lens review, ethics questions. |
| related capabilities | Play and Player Experience Master; Community and Ethics Master; Lens Review Master; Learning Coach and Socratic Tutor |
| related works | Play Matters; The Aesthetic of Play; Rules of Play; The Game Design Reader; The Art of Computer Game Design |
| related cards | `play`; `playfulness`; `magic-circle`; `play-as-context`; `play-as-appropriation`; `play-as-disruption` |
| related lenses | Play Context Lens; Playfulness Lens; Rules As Constraints Lens; Appropriation Lens; Disruption Lens; Voluntary Engagement Lens |
| related workflows | Core Experience Definition Pack; Design Lens Review Pack; Player Persona and Audience Pack |
| current coverage level | adequate_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | legal or user notes for play theory concepts and author-specific distinctions. |
| recommended next work | Create user note prompts for Play Matters and The Aesthetic of Play. |

### Fun, Learning, and Mastery

| Field | Routing |
|---|---|
| domain purpose | Connect engagement to learning, challenge, curiosity, skill growth, tension, and competence. |
| what an AI master should understand | Fun and mastery should be treated as hypotheses to design and test, not as universal formulas. |
| what an AI master should ask | What does the player learn? What pattern is recognized? What skill improves? Where does challenge increase? What feedback confirms mastery? |
| artifacts the AI should produce | mastery ladder, challenge curve, learning loop sketch, progression hypothesis, tutorial risk memo. |
| related capabilities | Play and Player Experience Master; Learning Coach and Socratic Tutor; Meaningful Decision Master; Playtesting Master |
| related works | A Theory of Fun; Game Design Workshop; Challenges for Game Designers; The Art of Game Design |
| related cards | `fun`; `learning`; `mastery`; `challenge`; `flow`; `progression-curve`; `tension` |
| related lenses | Challenge Lens; Mastery Lens; Flow Lens; Onboarding Lens; Tension Curve Lens |
| related workflows | Skill / Chance / Challenge Pack; Core Experience Definition Pack; Playtest Plan Pack; Iteration Decision Pack |
| current coverage level | adequate_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | user notes on specific learning loops and challenge examples. |
| recommended next work | Build a Challenge and Mastery operating guide. |

### Rules and Mechanics

| Field | Routing |
|---|---|
| domain purpose | Turn vague gameplay into explicit actions, rules, objectives, procedures, resources, boundaries, and outcomes. |
| what an AI master should understand | Mechanics are useful only when the system tracks their consequences and the player can understand their effect. |
| what an AI master should ask | What can the player do? What changes state? What is forbidden? What is the objective? What ends the interaction? |
| artifacts the AI should produce | mechanic spec, rule table, formal elements map, state-change list, edge-case checklist. |
| related capabilities | Rules and Mechanics Master; Meaningful Decision Master; Systems and Economy Master; Prototyping Master |
| related works | Rules of Play; Game Mechanics; The Game Design Reader; Formal Abstract Design Tools; Characteristics of Games |
| related cards | `rules`; `mechanics`; `objectives`; `procedures`; `resources`; `boundaries`; `outcome`; `formal-elements` |
| related lenses | Core Loop Lens; Rule Clarity Lens; Emergent Possibility Lens; Depth Versus Complexity Lens; Exploitability Lens |
| related workflows | Rules and Formal Elements Pack; Core Loop Design Pack; Paper Prototype Pack; Design Lens Review Pack |
| current coverage level | strong_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | source-backed definitions and user examples of mechanics. |
| recommended next work | Build a mechanic specification router and rule clarity checklist. |

### Meaningful Decisions

| Field | Routing |
|---|---|
| domain purpose | Diagnose whether player choices create perceivable tradeoffs, consequences, uncertainty, and agency. |
| what an AI master should understand | A choice is not useful just because multiple options exist; the player needs information, consequence, and reason to care. |
| what an AI master should ask | What options exist? What does the player know? What tradeoff is real? What changes after the choice? Can the player learn from the outcome? |
| artifacts the AI should produce | decision matrix, fake-choice audit, tradeoff map, dilemma quality report, risk/reward table. |
| related capabilities | Meaningful Decision Master; Rules and Mechanics Master; Play and Player Experience Master; Systems and Economy Master |
| related works | Game Mechanics; Rules of Play; Characteristics of Games; MDA; Formal Abstract Design Tools |
| related cards | `meaningful-decisions`; `tradeoffs`; `dilemmas`; `risk-versus-reward`; `agency`; `uncertainty` |
| related lenses | Meaningful Decisions Lens; Tradeoffs Lens; Dilemma Quality Lens; Skill/Chance Mix Lens; Depth Versus Complexity Lens |
| related workflows | Meaningful Decision Audit Pack; Skill / Chance / Challenge Pack; Rules and Formal Elements Pack |
| current coverage level | strong_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | user notes for decision examples, non-examples, and review criteria. |
| recommended next work | Build a Meaningful Decision Master operating guide. |

### Skill, Chance, Challenge, and Balance

| Field | Routing |
|---|---|
| domain purpose | Balance player skill, randomness, uncertainty, difficulty, fairness, reward, and learnability. |
| what an AI master should understand | Skill, chance, and challenge are design levers that shape decision quality, perceived fairness, and progression. |
| what an AI master should ask | Which outcomes depend on skill? Which depend on chance? Is randomness legible? Does challenge scale with mastery? Where can balance break? |
| artifacts the AI should produce | skill/chance matrix, difficulty curve hypothesis, risk/reward table, balance test plan. |
| related capabilities | Meaningful Decision Master; Systems and Economy Master; Playtesting Master; Play and Player Experience Master |
| related works | Game Mechanics; Characteristics of Games; Rules of Play; Advanced Game Design; A Theory of Fun |
| related cards | `skill`; `strategic-skill`; `twitch-skill`; `chance`; `challenge`; `balance`; `uncertainty`; `risk-versus-reward` |
| related lenses | Skill/Chance Mix Lens; Challenge Lens; Flow Lens; Balance Resilience Lens; Uncertainty Lens |
| related workflows | Skill / Chance / Challenge Pack; Economy and Balance Pack; Playtest Plan Pack; Iteration Decision Pack |
| current coverage level | strong_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | user notes and playtest examples showing how balance changes player behavior. |
| recommended next work | Build a balance diagnosis prompt that separates math assumptions from playtest evidence. |

### Systems, Loops, and Economy

| Field | Routing |
|---|---|
| domain purpose | Model how game parts interact through loops, feedback, resources, progression, sources, sinks, and balance pressures. |
| what an AI master should understand | Systems thinking is about relationships and consequences, not just feature lists. |
| what an AI master should ask | What are the parts? What loop repeats? What reinforces behavior? What dampens it? What enters, exits, accumulates, or transforms? |
| artifacts the AI should produce | system map, loop diagram, source/sink table, economy risk memo, progression curve, balance test matrix. |
| related capabilities | Systems and Economy Master; Meaningful Decision Master; Playtesting Master; Production and Pitch Master |
| related works | Advanced Game Design; Game Mechanics; Characteristics of Games; Game Design Workshop |
| related cards | `system`; `part`; `loop`; `whole`; `feedback-loop`; `economy`; `source`; `sink`; `progression-curve`; `power-curve` |
| related lenses | Parts/Loops/Whole Lens; Feedback Loops Lens; Source/Sink Balance Lens; Runaway Loops Lens; Economy Readability Lens |
| related workflows | Systems Map Pack; Economy and Balance Pack; Core Loop Design Pack; Iteration Decision Pack |
| current coverage level | strong_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | legal/user notes for systems concepts and real project economy examples. |
| recommended next work | Build a Systems and Economy Master operating guide. |

### Game Feel and Feedback

| Field | Routing |
|---|---|
| domain purpose | Improve moment-to-moment interaction quality: control, response, context, polish, feedback timing, and embodiment. |
| what an AI master should understand | Feel problems need artifact-specific diagnosis; the AI should ask for controls, gifs, videos, build notes, or playtest observations before prescribing fixes. |
| what an AI master should ask | What action feels wrong? Is the issue input, response, camera, context, animation, timing, feedback, or readability? What isolated experiment can test it? |
| artifacts the AI should produce | game feel audit, input/response/context/polish table, tuning experiment list, feel playtest questions. |
| related capabilities | Game Feel and Feedback Master; UI/UX Feedback Master; Prototyping Master; Playtesting Master |
| related works | Game Feel; Level Up!; The Art of Game Design; Game Design Workshop |
| related cards | `game-feel`; `real-time-control`; `responsiveness`; `tightness`; `floatiness`; `feedback`; `camera-feel`; `avatar-feel` |
| related lenses | Real-Time Control Lens; Input Responsiveness Lens; Response Clarity Lens; Context Readability Lens; Feedback Timing Lens |
| related workflows | Game Feel Prototype Pack; UI Feedback Pack; Digital Prototype Pack; Playtest Plan Pack |
| current coverage level | strong_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | user notes from Game Feel and real prototype observations. |
| recommended next work | Keep as one master capability, not the default evidence phase. Build reusable feel audit prompts later. |

### UI, UX, and Interface

| Field | Routing |
|---|---|
| domain purpose | Make state, action, consequence, mode, feedback, error recovery, and accessibility readable. |
| what an AI master should understand | UI/UX is not decoration; it is how players understand what the game allows and what changed. |
| what an AI master should ask | What must the player know now? What action is available? What feedback confirms consequence? What is ambiguous, hidden, overloaded, or inaccessible? |
| artifacts the AI should produce | HUD priority map, feedback table, affordance audit, cognitive load memo, accessibility checklist. |
| related capabilities | UI/UX Feedback Master; Game Feel and Feedback Master; Playtesting Master; Community and Ethics Master |
| related works | Level Up!; Game Feel; Better Game Characters by Design; The Art of Game Design |
| related cards | `interface`; `feedback`; `mental-model`; `input-metric`; `context-metric`; `player-rights` |
| related lenses | Information Priority Lens; Input Mapping Lens; Feedback Immediacy Lens; Mode Clarity Lens; Accessibility Lens |
| related workflows | UI Feedback Pack; Game Feel Prototype Pack; Playtest Plan Pack; Release Readiness and Risk Audit Pack |
| current coverage level | strong_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | examples of UI artifacts and user notes on accessibility/readability heuristics. |
| recommended next work | Build an artifact-request protocol for UI critique. |

### Narrative, World, and Character

| Field | Routing |
|---|---|
| domain purpose | Align story, world logic, character function, player identity, and mechanics. |
| what an AI master should understand | Narrative is strongest in this KB when it is connected to player role, game verbs, constraints, and feedback. |
| what an AI master should ask | What does the story ask the player to do? What does the world permit or forbid? How does character function affect play? Where does narrative support or fight mechanics? |
| artifacts the AI should produce | narrative-mechanic alignment map, world rules, character function sheet, player role statement, thematic risk memo. |
| related capabilities | Narrative-System Integration Master; Core Experience Master; Play and Player Experience Master; UI/UX Feedback Master |
| related works | Level Up!; Better Game Characters by Design; Chris Crawford on Game Design; The Art of Game Design |
| related cards | `premise`; `story`; `dramatic-arc`; `worldbuilding`; `character-function`; `avatar`; `player-identity`; `narrative-architecture` |
| related lenses | Story Function Lens; World Coherence Lens; Player Role Lens; Character Function Lens; Narrative Agency Lens |
| related workflows | Narrative-Mechanic Alignment Pack; World and Character Function Pack; Core Experience Definition Pack |
| current coverage level | strong_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | user notes and project examples for narrative-system integration. |
| recommended next work | Build a Narrative-System Integration operating guide. |

### Space and Level Design

| Field | Routing |
|---|---|
| domain purpose | Shape traversal, encounter rhythm, spatial readability, pacing, gating, and level flow. |
| what an AI master should understand | Level design should connect space to verbs, goals, feedback, challenge, narrative, and production constraints. |
| what an AI master should ask | What action does this space invite? What can the player see? Where is risk introduced? How does the path teach, test, or reveal? |
| artifacts the AI should produce | level flow map, encounter beat sheet, spatial readability audit, greybox test plan. |
| related capabilities | Narrative-System Integration Master; Game Feel and Feedback Master; UI/UX Feedback Master; Prototyping Master |
| related works | Level Up!; Game Design Workshop; The Art of Game Design |
| related cards | `simulated-space`; `worldbuilding`; `challenge`; `feedback`; `prototype`; `player-experience` |
| related lenses | Context Readability Lens; Camera Feel Lens; Visibility Lens; Environmental Storytelling Lens; Dramatic Pacing Lens |
| related workflows | Digital Prototype Pack; Playtest Plan Pack; Narrative-Mechanic Alignment Pack; Game Feel Prototype Pack |
| current coverage level | weak_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | dedicated level design cards, lenses, workflows, and user notes. |
| recommended next work | Create a Level Design domain expansion plan after master guides exist. |

### Prototyping

| Field | Routing |
|---|---|
| domain purpose | Convert uncertain assumptions into small testable artifacts. |
| what an AI master should understand | A prototype should answer a specific question and avoid becoming accidental production. |
| what an AI master should ask | What is the riskiest assumption? What is the smallest test? What result would change the design? What can be thrown away? |
| artifacts the AI should produce | prototype question, paper prototype plan, digital prototype scope, kinesthetic test, experiment checklist. |
| related capabilities | Prototyping Master; Playtesting Master; Rules and Mechanics Master; Game Feel and Feedback Master |
| related works | Game Design Workshop; Challenges for Game Designers; Game Feel; Level Up! |
| related cards | `prototype`; `paper-prototype`; `digital-prototype`; `kinesthetic-prototype`; `problem-statement`; `playcentric-design` |
| related lenses | Prototype Question Lens; Learning Speed Lens; Disposable Prototype Lens; Feasibility Lens; Scope Lens |
| related workflows | Prototype Question Pack; Paper Prototype Pack; Digital Prototype Pack; Game Feel Prototype Pack |
| current coverage level | strong_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | user notes describing preferred prototype formats and evaluation rules. |
| recommended next work | Build a Prototyping Master operating guide. |

### Playtesting and Iteration

| Field | Routing |
|---|---|
| domain purpose | Turn design assumptions into observed player behavior, interpretation, decisions, and next actions. |
| what an AI master should understand | Playtest output must separate observed fact, participant quote, tester interpretation, design hypothesis, and decision. |
| what an AI master should ask | What is being tested? Who tested it? What was observed? What cannot be concluded? What decision will the result inform? |
| artifacts the AI should produce | playtest plan, observation sheet, interview guide, signal/noise memo, iteration decision log. |
| related capabilities | Playtesting Master; Prototyping Master; Learning Coach and Socratic Tutor; Production and Pitch Master |
| related works | Game Design Workshop; The Art of Game Design; MDA; Challenges for Game Designers |
| related cards | `playtest`; `iteration`; `experience-goal`; `feedback`; `design-document`; `problem-statement` |
| related lenses | Playtest Signal Lens; Observation Quality Lens; Survey Usefulness Lens; Iteration Decision Lens; Test Bias Lens |
| related workflows | Playtest Plan Pack; Iteration Decision Pack; Prototype Question Pack; Design Lens Review Pack |
| current coverage level | strong_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | real PlaytestLog records and user notes about playtest methods. |
| recommended next work | Build a Playtesting Master operating guide, but do not invent playtest data. |

### Community and Multiplayer

| Field | Routing |
|---|---|
| domain purpose | Understand social play, player motivations, cooperation, competition, griefing, moderation, and community health. |
| what an AI master should understand | Multiplayer and community claims are high risk without project context, player data, or source evidence. |
| what an AI master should ask | Who interacts with whom? What incentives shape behavior? Where can abuse, exclusion, or runaway social pressure appear? |
| artifacts the AI should produce | community hypothesis, social risk map, griefing audit, mode spec, moderation assumption list. |
| related capabilities | Community and Ethics Master; Production and Pitch Master; Play and Player Experience Master |
| related works | Bartle player types; Rules of Play; Characteristics of Games; Play Matters |
| related cards | `multiplayer-pattern`; `community`; `griefing`; `audience`; `player-rights`; `business-model` |
| related lenses | Community Health Lens; Griefing Risk Lens; Safety And Risk Lens; Voluntary Engagement Lens; Business Alignment Lens |
| related workflows | Player Persona and Audience Pack; Release Readiness and Risk Audit Pack; Design Lens Review Pack |
| current coverage level | adequate_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | primary source metadata, user notes, and project/community examples. |
| recommended next work | Create community-risk note prompts after the core master guides. |

### Ethics and Responsibility

| Field | Routing |
|---|---|
| domain purpose | Identify accessibility, fairness, harm, pressure, dark pattern, representation, and player-rights risks. |
| what an AI master should understand | Ethics is a review gate across design, UI, monetization, community, and release, not a late-stage checkbox. |
| what an AI master should ask | Who may be excluded or harmed? What incentives pressure the player? What information is hidden? What mitigation is proportionate? |
| artifacts the AI should produce | ethics risk memo, accessibility checklist, responsibility review, dark-pattern risk list. |
| related capabilities | Community and Ethics Master; UI/UX Feedback Master; Production and Pitch Master; Play and Player Experience Master |
| related works | Play Matters; Better Game Characters by Design; Bartle player types; Rules of Play |
| related cards | `ethics`; `responsibility`; `player-rights`; `griefing`; `community`; `business-model` |
| related lenses | Ethical Risk Lens; Safety And Risk Lens; Accessibility Lens; Responsibility Lens; Legal Source Gate Lens |
| related workflows | Release Readiness and Risk Audit Pack; Player Persona and Audience Pack; Design Lens Review Pack |
| current coverage level | adequate_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | source-backed ethics notes and real project risk reviews. |
| recommended next work | Build an Ethics and Responsibility review gate for all future master prompts. |

### Production, Documentation, and Pitch

| Field | Routing |
|---|---|
| domain purpose | Translate design thinking into specs, plans, scope cuts, communication, and pitch-ready artifacts. |
| what an AI master should understand | Production artifacts should preserve design intent, assumptions, constraints, and evidence gaps. |
| what an AI master should ask | Who needs this artifact? What decision does it support? What is in scope? What is unknown? What should be tested next? |
| artifacts the AI should produce | design document, technical spec brief, pitch outline, roadmap, decision log, status audit. |
| related capabilities | Production and Pitch Master; Core Experience Master; Prototyping Master; Learning Coach and Socratic Tutor |
| related works | Level Up!; Game Design Workshop; The Art of Game Design; Chris Crawford works |
| related cards | `design-document`; `pitch`; `production-phase`; `release-readiness`; `problem-statement`; `iteration` |
| related lenses | Documentation Lens; Team Communication Lens; Feasibility Lens; Scope Lens; Prompt Output Artifact Lens |
| related workflows | Game Idea to One-Page Concept Pack; Release Readiness and Risk Audit Pack; Iteration Decision Pack; Design Lens Review Pack |
| current coverage level | strong_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | user preferences for document formats and project communication. |
| recommended next work | Build artifact templates for concept brief, mechanic spec, system map, and pitch. |

### Business and Release

| Field | Routing |
|---|---|
| domain purpose | Connect game identity, audience, platform, positioning, launch risk, retention, roadmap, and commercial constraints. |
| what an AI master should understand | Business framing must not override player experience or source governance, but it shapes scope and communication. |
| what an AI master should ask | Who is the audience? What promise is market-facing? What proof supports it? What risks exist for launch, retention, monetization, or community? |
| artifacts the AI should produce | positioning memo, store page brief, release readiness checklist, roadmap risk review, retention hypothesis. |
| related capabilities | Production and Pitch Master; Community and Ethics Master; Core Experience Master |
| related works | Level Up!; Bartle player types; Game Design Workshop; The Art of Game Design |
| related cards | `business-model`; `audience`; `pitch`; `release-readiness`; `community`; `responsibility` |
| related lenses | Market Position Lens; Business Alignment Lens; Launch Readiness Lens; Retention Lens; Update Loop Lens |
| related workflows | Release Readiness and Risk Audit Pack; Player Persona and Audience Pack; Game Idea to One-Page Concept Pack |
| current coverage level | adequate_structural |
| current evidence level | metadata_only + unsupported_draft |
| missing knowledge | real market target, platform assumptions, and business model constraints. |
| recommended next work | Keep as a later capability until the user has an active project or pitch target. |

### AI-Assisted Design and Prompt Engineering

| Field | Routing |
|---|---|
| domain purpose | Make AI design help source-bounded, auditable, reusable, and artifact-oriented. |
| what an AI master should understand | The AI should ask better questions, route to the right KB assets, mark assumptions, and never confuse scaffolding with verified knowledge. |
| what an AI master should ask | What is the user trying to produce? What domain and phase apply? What source basis is allowed? What should be marked as assumption? What output format is needed? |
| artifacts the AI should produce | prompt template, source-bounded review, hallucination audit, evidence gap list, capability-routed workflow. |
| related capabilities | Learning Coach and Socratic Tutor; Lens Review Master; all master capabilities |
| related works | KB governance docs; source policy; existing metadata-only work registry |
| related cards | `problem-statement`; `design-document`; `playtest`; `feedback`; `iteration`; `responsibility` |
| related lenses | Source-Bounded Retrieval Lens; Evidence Gap Lens; Hallucination Risk Lens; Confidence Calibration Lens; Claim Traceability Lens |
| related workflows | Design Lens Review Pack; Release Readiness and Risk Audit Pack; all workflow packs as prompt targets |
| current coverage level | strong_structural |
| current evidence level | unsupported_draft |
| missing knowledge | validated prompt runs and user feedback on AI behavior. |
| recommended next work | Build the master prompt router and capability operating guides. |

## Domain Navigation Rule For AI

When a user asks for help, the AI should route in this order:

1. Identify the production phase.
2. Identify the game design domain.
3. Select the relevant master capability.
4. Select the smallest useful workflow or lens.
5. Produce a concrete artifact.
6. Mark assumptions, source_basis, confidence, and evidence gaps.
7. Ask for user notes, legal evidence, project data, or playtest data only when needed.

