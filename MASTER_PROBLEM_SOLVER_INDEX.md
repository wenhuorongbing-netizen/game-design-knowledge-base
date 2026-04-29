# Master Problem Solver Index

Date: 2026-04-29

## Purpose

This is the problem-first entry point for the AI Game Design Master Framework.

The user should not need to understand the folder structure before asking for help. The AI can start from a real design problem, route it to the right domain, select lenses and workflows, suggest reading, and produce a useful artifact.

## Governance Boundary

- No active game project is required.
- No project evidence is invented.
- No playtest evidence is invented.
- No book body text is parsed or summarized.
- All recommendations are source-governed scaffolds unless user notes, legal evidence, project overlays, or playtest logs later support stronger claims.

## Problem Solver Overview

| Problem | Likely Domain | Lead Capability | Output Artifact |
|---|---|---|---|
| I have a vague game idea | Game Design Foundations | Core Experience Master | one-page concept draft |
| I do not know what my game is about | Game Design Foundations | Core Experience Master | player promise and design pillars |
| My core experience is unclear | Player Experience | Core Experience Master | core experience statement |
| My choices feel meaningless | Meaningful Decisions | Meaningful Decision Master | decision audit matrix |
| My rules are confusing | Rules and Mechanics | Rules and Mechanics Master | rule table and formal elements map |
| My system has too many parts | Systems, Loops, and Economy | Systems and Economy Master | system map and dependency cut |
| My economy may inflate | Systems, Loops, and Economy | Systems and Economy Master | source/sink and inflation risk table |
| My game feels boring | Player Experience | Play and Player Experience Master | engagement hypothesis and test plan |
| My feedback is weak | Game Feel and Feedback | Game Feel and Feedback Master | feedback timing audit |
| My UI is confusing | UI, UX, and Interface | UI/UX Feedback Master | UI readability audit |
| My narrative does not support mechanics | Narrative, World, and Character | Narrative-System Integration Master | narrative-mechanic alignment map |
| My prototype has no clear question | Prototyping | Prototyping Master | prototype question sheet |
| I do not know how to playtest | Playtesting and Iteration | Playtesting Master | playtest plan |
| My design is too complex | Rules and Mechanics | Lens Review Master | complexity reduction memo |
| My pitch is weak | Production, Documentation, and Pitch | Production and Pitch Master | pitch critique and proof-gap list |
| I do not know what to read next | AI-Assisted Design and Prompt Engineering | Learning Coach and Socratic Tutor | reading priority recommendation |
| I want AI to teach me game design | AI-Assisted Design and Prompt Engineering | Learning Coach and Socratic Tutor | guided learning path |

## Detailed Problem Routes

### I have a vague game idea

| Field | Route |
|---|---|
| likely domain | Game Design Foundations |
| AI should ask these questions | What is the player fantasy? What is the repeated player action? What feeling should the player leave with? What is the smallest playable proof? |
| recommended lenses | Core Experience Lens; Audience Lens; Player Fantasy Lens; Scope Lens; Feasibility Lens |
| recommended workflows | Game Idea to One-Page Concept Pack; Core Experience Definition Pack |
| relevant books | The Art of Game Design; Game Design Workshop; A Theory of Fun; Level Up! |
| relevant cards | `player-experience`; `experience-goal`; `audience`; `problem-statement`; `pitch` |
| output artifact | one-page concept draft with assumptions |
| what evidence is required | user answers about target player, intended experience, platform, and constraints; later user notes can improve theory links |
| what AI must not assume | exact genre fit, market demand, production feasibility, verified book doctrine, or player response |

### I do not know what my game is about

| Field | Route |
|---|---|
| likely domain | Game Design Foundations |
| AI should ask these questions | What must be true for this idea to be worth building? What should players repeatedly do? What should not be included? What design promise can be tested first? |
| recommended lenses | Core Experience Lens; Emotional Goal Lens; Player Fantasy Lens; Novelty Lens; Scope Lens |
| recommended workflows | Core Experience Definition Pack; Game Idea to One-Page Concept Pack; Design Lens Review Pack |
| relevant books | The Art of Game Design; A Theory of Fun; Game Design Workshop; Play Matters |
| relevant cards | `experience-goal`; `player-experience`; `fun`; `ideation`; `problem-statement` |
| output artifact | player promise, design pillars, and exclusion list |
| what evidence is required | user preference, intended audience, constraints, and prototype goal |
| what AI must not assume | that theme equals design, that a story premise defines play, or that broad scope is better |

### My core experience is unclear

| Field | Route |
|---|---|
| likely domain | Player Experience |
| AI should ask these questions | What should players feel? What action creates that feeling? What feedback confirms it? What would prove the experience works? |
| recommended lenses | Core Experience Lens; Emotional Goal Lens; Agency Lens; Motivation Lens; Challenge Lens |
| recommended workflows | Core Experience Definition Pack; Player Persona and Audience Pack; Playtest Plan Pack |
| relevant books | A Theory of Fun; The Art of Game Design; Game Design Workshop; The Aesthetic of Play |
| relevant cards | `player-experience`; `agency`; `pleasure`; `challenge`; `mastery`; `flow` |
| output artifact | core experience statement and testable experience hypothesis |
| what evidence is required | user-defined target experience, future prototype, and playtest observations |
| what AI must not assume | what players will feel without testing or that a book title verifies a definition of experience |

### My choices feel meaningless

| Field | Route |
|---|---|
| likely domain | Meaningful Decisions |
| AI should ask these questions | What options does the player see? What information do they have? What tradeoff exists? What changes afterward? Can they learn from the result? |
| recommended lenses | Meaningful Decisions Lens; Tradeoffs Lens; Dilemma Quality Lens; Agency Lens; Skill/Chance Mix Lens |
| recommended workflows | Meaningful Decision Audit Pack; Skill / Chance / Challenge Pack; Rules and Formal Elements Pack |
| relevant books | Game Mechanics; Rules of Play; Characteristics of Games; MDA; The Art of Game Design |
| relevant cards | `meaningful-decisions`; `tradeoffs`; `dilemmas`; `risk-versus-reward`; `agency`; `uncertainty` |
| output artifact | decision audit matrix and fake-choice risk report |
| what evidence is required | actual choice options, player information state, consequence map, and later playtest observations |
| what AI must not assume | that more options create meaning or that a choice matters without consequence |

### My rules are confusing

| Field | Route |
|---|---|
| likely domain | Rules and Mechanics |
| AI should ask these questions | What can the player do? What does the system track? What is allowed, forbidden, required, and rewarded? What ends the interaction? |
| recommended lenses | Rule Clarity Lens; Rules As Constraints Lens; Core Loop Lens; Depth Versus Complexity Lens |
| recommended workflows | Rules and Formal Elements Pack; Core Loop Design Pack; Paper Prototype Pack |
| relevant books | Rules of Play; Game Mechanics; The Game Design Reader; Formal Abstract Design Tools |
| relevant cards | `rules`; `mechanics`; `objectives`; `procedures`; `resources`; `boundaries`; `outcome` |
| output artifact | rule table and formal elements map |
| what evidence is required | current rules, player actions, win/loss conditions, edge cases |
| what AI must not assume | hidden rules, intended goals, player understanding, or source-backed formal definitions |

### My system has too many parts

| Field | Route |
|---|---|
| likely domain | Systems, Loops, and Economy |
| AI should ask these questions | Which parts affect player decisions? Which loops are core? Which parts are support, noise, or future scope? What can be cut without breaking the promise? |
| recommended lenses | Parts/Loops/Whole Lens; Systemic Coupling Lens; Scope Lens; Depth Versus Complexity Lens; Runaway Loops Lens |
| recommended workflows | Systems Map Pack; Core Loop Design Pack; Design Lens Review Pack |
| relevant books | Advanced Game Design; Game Mechanics; Characteristics of Games; Game Design Workshop |
| relevant cards | `system`; `part`; `loop`; `whole`; `feedback-loop`; `emergence`; `mental-model` |
| output artifact | system map, dependency table, and cut list |
| what evidence is required | feature list, core loop, dependencies, intended player experience |
| what AI must not assume | that every feature is necessary or that complexity creates depth |

### My economy may inflate

| Field | Route |
|---|---|
| likely domain | Systems, Loops, and Economy |
| AI should ask these questions | What resources enter? What resources leave? What accumulates? What can players exploit? What sinks scale with progression? |
| recommended lenses | Source/Sink Balance Lens; Economy Readability Lens; Runaway Loops Lens; Progression Curve Lens; Balance Resilience Lens |
| recommended workflows | Economy and Balance Pack; Systems Map Pack; Iteration Decision Pack |
| relevant books | Game Mechanics; Advanced Game Design; Characteristics of Games |
| relevant cards | `economy`; `source`; `sink`; `faucet`; `drain`; `progression-curve`; `balance` |
| output artifact | source/sink table and inflation risk memo |
| what evidence is required | resource list, income rates, spend paths, progression assumptions, playtest or simulation later |
| what AI must not assume | numeric balance, player behavior, retention effect, or monetization impact |

### My game feels boring

| Field | Route |
|---|---|
| likely domain | Player Experience |
| AI should ask these questions | What is the repeated action? What changes over time? What tension, curiosity, challenge, or mastery exists? Where does feedback fail to reward attention? |
| recommended lenses | Motivation Lens; Challenge Lens; Curiosity Lens; Pleasure Variety Lens; Meaningful Decisions Lens |
| recommended workflows | Core Experience Definition Pack; Skill / Chance / Challenge Pack; Meaningful Decision Audit Pack; Playtest Plan Pack |
| relevant books | A Theory of Fun; The Art of Game Design; Game Design Workshop; Play Matters |
| relevant cards | `fun`; `challenge`; `mastery`; `curiosity`; `tension`; `agency`; `learning` |
| output artifact | engagement hypothesis and boredom diagnosis table |
| what evidence is required | current loop, player actions, target experience, later playtest observation |
| what AI must not assume | that adding rewards, content, randomness, or difficulty will fix boredom |

### My feedback is weak

| Field | Route |
|---|---|
| likely domain | Game Feel and Feedback |
| AI should ask these questions | What action needs feedback? What state changed? When does feedback appear? Which layer is missing: visual, audio, animation, UI, camera, haptic, or rule consequence? |
| recommended lenses | Feedback Timing Lens; Response Clarity Lens; Context Readability Lens; Polish Support Lens; Information Priority Lens |
| recommended workflows | Game Feel Prototype Pack; UI Feedback Pack; Playtest Plan Pack |
| relevant books | Game Feel; Level Up!; The Art of Game Design |
| relevant cards | `feedback`; `response-metric`; `context-metric`; `polish`; `interface`; `mental-model` |
| output artifact | feedback timing audit and missing feedback layer table |
| what evidence is required | action list, current feedback description, target feeling, prototype/video if available |
| what AI must not assume | actual feel quality, timing values, or player perception without artifact/testing |

### My UI is confusing

| Field | Route |
|---|---|
| likely domain | UI, UX, and Interface |
| AI should ask these questions | What does the player need to know now? What action is available? What changed? What is hidden, overloaded, ambiguous, or inaccessible? |
| recommended lenses | Information Priority Lens; Visibility Lens; Mode Clarity Lens; Feedback Immediacy Lens; Accessibility Lens |
| recommended workflows | UI Feedback Pack; Playtest Plan Pack; Release Readiness and Risk Audit Pack |
| relevant books | Level Up!; Game Feel; Better Game Characters by Design; The Art of Game Design |
| relevant cards | `interface`; `feedback`; `mental-model`; `context-metric`; `player-rights` |
| output artifact | UI readability audit and HUD priority map |
| what evidence is required | screenshot, flow description, HUD elements, player task, later usability/playtest observations |
| what AI must not assume | visual layout, platform constraints, accessibility status, or user comprehension |

### My narrative does not support mechanics

| Field | Route |
|---|---|
| likely domain | Narrative, World, and Character |
| AI should ask these questions | What does the story ask the player to care about? What do mechanics ask the player to do? Where do they support or contradict each other? |
| recommended lenses | Story Function Lens; Player Role Lens; Narrative Agency Lens; World Coherence Lens; Character Function Lens |
| recommended workflows | Narrative-Mechanic Alignment Pack; World and Character Function Pack; Core Experience Definition Pack |
| relevant books | Level Up!; Better Game Characters by Design; Chris Crawford on Game Design; The Art of Game Design |
| relevant cards | `premise`; `story`; `worldbuilding`; `character-function`; `avatar`; `narrative-architecture`; `player-identity` |
| output artifact | narrative-mechanic alignment map |
| what evidence is required | premise, player role, core actions, world rules, character function |
| what AI must not assume | story details, player motivation, canon, or project-local narrative evidence |

### My prototype has no clear question

| Field | Route |
|---|---|
| likely domain | Prototyping |
| AI should ask these questions | What assumption is riskiest? What answer would change the design? What is the smallest artifact that can test it? What should be thrown away afterward? |
| recommended lenses | Prototype Question Lens; Learning Speed Lens; Disposable Prototype Lens; Feasibility Lens; Scope Lens |
| recommended workflows | Prototype Question Pack; Paper Prototype Pack; Digital Prototype Pack |
| relevant books | Game Design Workshop; Challenges for Game Designers; Game Feel; Level Up! |
| relevant cards | `prototype`; `paper-prototype`; `digital-prototype`; `kinesthetic-prototype`; `problem-statement` |
| output artifact | prototype question sheet and testable assumption list |
| what evidence is required | current idea, risky assumption, available time/tools, desired decision |
| what AI must not assume | that the prototype should become production code or that all features need testing now |

### I do not know how to playtest

| Field | Route |
|---|---|
| likely domain | Playtesting and Iteration |
| AI should ask these questions | What are we testing? Who should test it? What behavior should be observed? What cannot be concluded? What decision will the test inform? |
| recommended lenses | Playtest Signal Lens; Observation Quality Lens; Survey Usefulness Lens; Test Bias Lens; Iteration Decision Lens |
| recommended workflows | Playtest Plan Pack; Prototype Question Pack; Iteration Decision Pack |
| relevant books | Game Design Workshop; The Art of Game Design; MDA; Challenges for Game Designers |
| relevant cards | `playtest`; `iteration`; `experience-goal`; `feedback`; `design-document`; `problem-statement` |
| output artifact | playtest plan and observation sheet |
| what evidence is required | prototype state, test goal, target player, task list, decision criteria |
| what AI must not assume | participant behavior, results, quotes, or validation |

### My design is too complex

| Field | Route |
|---|---|
| likely domain | Rules and Mechanics |
| AI should ask these questions | Which parts support the core promise? Which rules create decisions? Which parts only add burden? What can be delayed, merged, removed, or tested separately? |
| recommended lenses | Depth Versus Complexity Lens; Scope Lens; Rule Clarity Lens; Systemic Coupling Lens; Cognitive Load Lens |
| recommended workflows | Design Lens Review Pack; Rules and Formal Elements Pack; Systems Map Pack; Game Idea to One-Page Concept Pack |
| relevant books | Rules of Play; Game Mechanics; Advanced Game Design; Level Up! |
| relevant cards | `rules`; `mechanics`; `mental-model`; `system`; `part`; `design-document`; `production-phase` |
| output artifact | complexity reduction memo and cut/merge/defer table |
| what evidence is required | feature list, rule list, core experience, player learning path |
| what AI must not assume | that complexity equals depth or that cutting features lowers quality |

### My pitch is weak

| Field | Route |
|---|---|
| likely domain | Production, Documentation, and Pitch |
| AI should ask these questions | Who is it for? What does the player do? What is the promise? What proof features show it? What is scoped out? |
| recommended lenses | Market Position Lens; Core Experience Lens; Player Fantasy Lens; Scope Lens; Launch Readiness Lens |
| recommended workflows | Game Idea to One-Page Concept Pack; Release Readiness and Risk Audit Pack; Design Lens Review Pack |
| relevant books | Level Up!; Game Design Workshop; The Art of Game Design; Chris Crawford works |
| relevant cards | `pitch`; `audience`; `business-model`; `release-readiness`; `experience-goal`; `problem-statement` |
| output artifact | pitch critique and revised pitch skeleton |
| what evidence is required | target player, platform, hook, core loop, proof features, constraints |
| what AI must not assume | market demand, production feasibility, monetization success, or audience validation |

### I do not know what to read next

| Field | Route |
|---|---|
| likely domain | AI-Assisted Design and Prompt Engineering |
| AI should ask these questions | Which AI capability do you want to improve? Do you want theory, process, systems, feel, narrative, or production? Are you ready to write user notes? |
| recommended lenses | Evidence Gap Lens; Source-Bounded Retrieval Lens; Confidence Calibration Lens |
| recommended workflows | Source-safe reading process in `READING_TO_KB_PIPELINE.md`; note templates in `MASTER_NOTE_TEMPLATES.md` |
| relevant books | The Art of Game Design; Game Design Workshop; A Theory of Fun; Game Mechanics; Advanced Game Design; Game Feel |
| relevant cards | `learning`; `design-document`; `problem-statement`; `playtest`; `iteration` |
| output artifact | reading priority recommendation and note prompt set |
| what evidence is required | user goal and willingness to write notes |
| what AI must not assume | that the book has been ingested or that the AI may summarize private chapters |

### I want AI to teach me game design

| Field | Route |
|---|---|
| likely domain | AI-Assisted Design and Prompt Engineering |
| AI should ask these questions | What level are you at? Do you want foundations, mechanics, systems, feel, narrative, prototyping, or production? Do you want an exercise or explanation? |
| recommended lenses | Human Review Lens; Reusable Prompt Quality Lens; Evidence Gap Lens; Claim Traceability Lens |
| recommended workflows | AI Teaching Procedure; 90-day study plan; Design Lens Review Pack for practice |
| relevant books | Game Design Workshop; Challenges for Game Designers; The Art of Game Design; A Theory of Fun; Rules of Play |
| relevant cards | `game`; `rules`; `mechanics`; `player-experience`; `prototype`; `playtest`; `feedback` |
| output artifact | guided learning path, lesson sequence, mini exercise, and source boundary note |
| what evidence is required | learner level and preferred domain; user notes if source-backed teaching is desired |
| what AI must not assume | exact book definitions, verified doctrine, or learner project context |

## AI Response Rule

For any problem route, AI should produce:

- inferred problem;
- likely domain and capability;
- lenses to apply;
- workflow to run;
- concrete output artifact;
- evidence required;
- what AI is not assuming;
- source_basis and confidence.

