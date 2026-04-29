# Master Capability Matrix

Date: 2026-04-29

## Reading This Matrix

Each capability defines a role the AI should be able to perform using the KB. These are master-level behavior routes, not verified claims from books.

Current evidence status is mostly draft or metadata-only because no user notes, legal sidecars, EvidenceRefs, project records, or playtest records exist yet.

## Capability Summary

| Capability | Primary Function | Current Evidence Status | Priority |
|---|---|---|---|
| Core Experience Master | turn vague intent into player experience goals | draft/source-governed | high |
| Lens Review Master | apply diagnostic lens sets to artifacts | draft/source-governed | high |
| Meaningful Decision Master | test whether player choices matter | draft/source-governed | high |
| Rules and Mechanics Master | formalize verbs, rules, objectives, resources, constraints | draft/source-governed | high |
| Systems and Economy Master | map loops, feedback, resources, sinks, balance risks | draft/source-governed | high |
| Game Feel and Feedback Master | diagnose control, response, feedback, UI readability | draft/source-governed | medium |
| Play and Player Experience Master | reason about play, motivation, challenge, agency, emotion | draft/source-governed | high |
| Prototyping Master | convert assumptions into prototypes | draft/source-governed | high |
| Playtesting Master | design tests, observations, interviews, interpretation | draft/source-governed | high |
| Narrative-System Integration Master | align story, world, character, mechanics, agency | draft/source-governed | medium |
| UI/UX Feedback Master | make state, action, and consequence readable | draft/source-governed | medium |
| Community and Ethics Master | identify social, fairness, accessibility, responsibility risks | draft/source-governed | medium |
| Production and Pitch Master | turn design into scope, documentation, pitch, launch readiness | draft/source-governed | medium |
| Learning Coach and Socratic Tutor | teach progressively and ask expert learning questions | draft/source-governed | high |

## Detailed Matrix

### Core Experience Master

| Field | Definition |
|---|---|
| purpose | Help the user define what the game should make players feel, do, understand, and remember. |
| what questions the AI should ask | Who is the player? What fantasy or experience is promised? What should be excluded? What is the smallest proof of the experience? What evidence would show that the experience works? |
| what artifacts the AI should produce | core experience statement, target player profile, experience promise, MVP cut, risk memo, one-page concept. |
| related domains | player_experience, player_psychology, play_theory, business_pitch_release, prototyping |
| related works | The Art of Game Design; A Theory of Fun for Game Design; Game Design Workshop; Level Up! |
| related cards | `concept_player-experience`, `concept_experience-goal`, `concept_audience`, `concept_agency`, `concept_fun` |
| related lenses | Core Experience Lens; Audience Lens; Player Fantasy Lens; Emotional Goal Lens; Scope Lens |
| related workflows | Game Idea to One-Page Concept Pack; Core Experience Definition Pack; Player Persona and Audience Pack |
| current evidence status | draft/source-governed; related concepts need legal/user evidence. |
| current limitations | AI can structure the thinking but cannot claim book-specific doctrine without evidence. |
| next development priority | Build a Core Experience Master prompt pack and artifact template. |

### Lens Review Master

| Field | Definition |
|---|---|
| purpose | Select and apply relevant diagnostic lenses to a concept, mechanic, system, UI, narrative, prototype, or release artifact. |
| what questions the AI should ask | What artifact is being reviewed? What decision must this review support? Which phase and domain apply? What assumptions must be marked? What output should the review produce? |
| what artifacts the AI should produce | lens review report, strengths/risks list, missing evidence list, next experiment list, review checklist. |
| related domains | design_lenses, prompt_engineering_for_game_design, player_experience, rules_and_mechanics, systems_design |
| related works | The Art of Game Design; Game Design Workshop; Advanced Game Design; Game Feel |
| related cards | `framework_core-loop-map`, `framework_meaningful-decision-test`, `framework_source-sink-economy-map`, `framework_game-feel-metrics-scaffold` |
| related lenses | all 104 lenses in `kb/06_lenses/cards/` |
| related workflows | Design Lens Review Pack; Release Readiness and Risk Audit Pack |
| current evidence status | lenses are original unsupported-draft diagnostic tools. |
| current limitations | Useful for critique, not verified as source doctrine. |
| next development priority | Build a lens selection router by problem type and output artifact. |

### Meaningful Decision Master

| Field | Definition |
|---|---|
| purpose | Diagnose whether choices create meaningful consequences, tradeoffs, uncertainty, risk, and player agency. |
| what questions the AI should ask | What options does the player perceive? What information do they have? What tradeoff exists? What consequence changes future play? Can the player learn from the outcome? |
| what artifacts the AI should produce | decision matrix, fake-choice audit, tradeoff map, dilemma quality report, risk/reward table. |
| related domains | rules_and_mechanics, chance_skill_decisions, player_experience, formal_game_design |
| related works | Game Mechanics; Rules of Play; Characteristics of Games; The Art of Game Design |
| related cards | `concept_meaningful-decisions`, `concept_tradeoffs`, `concept_dilemmas`, `concept_risk-versus-reward`, `concept_agency` |
| related lenses | Meaningful Decisions Lens; Tradeoffs Lens; Dilemma Quality Lens; Skill/Chance Mix Lens |
| related workflows | Meaningful Decision Audit Pack; Skill / Chance / Challenge Pack; Rules and Formal Elements Pack |
| current evidence status | draft/source-governed; claims need user/legal evidence. |
| current limitations | Can diagnose structure but cannot verify definitions from books. |
| next development priority | Create a meaningful decision audit prompt with evidence-gap output. |

### Rules and Mechanics Master

| Field | Definition |
|---|---|
| purpose | Convert vague gameplay ideas into explicit rules, verbs, goals, procedures, resources, constraints, and outcomes. |
| what questions the AI should ask | What can the player do? What does the system track? What changes state? What is forbidden? What ends the activity? What makes success or failure legible? |
| what artifacts the AI should produce | mechanic spec, formal elements map, rule table, state-change list, edge-case checklist. |
| related domains | rules_and_mechanics, formal_elements, formal_game_design, prototyping |
| related works | Rules of Play; Game Mechanics; The Game Design Reader; Formal Abstract Design Tools |
| related cards | `concept_rules`, `concept_mechanics`, `concept_objectives`, `concept_procedures`, `concept_resources`, `concept_boundaries`, `concept_outcome` |
| related lenses | Core Loop Lens; Rule Clarity Lens; Depth Versus Complexity Lens; Emergent Possibility Lens |
| related workflows | Rules and Formal Elements Pack; Core Loop Design Pack; Paper Prototype Pack |
| current evidence status | draft/source-governed with metadata routing. |
| current limitations | No source-backed formal definitions yet. |
| next development priority | Build a mechanic-spec generator constrained by source_basis and confidence labels. |

### Systems and Economy Master

| Field | Definition |
|---|---|
| purpose | Map how parts, loops, feedback, resources, progression, and balance pressures interact. |
| what questions the AI should ask | What are the system parts? What loops reinforce or dampen behavior? What resources enter and leave? Where can runaway advantage, stagnation, or exploitability appear? |
| what artifacts the AI should produce | system map, loop diagram, source/sink table, economy risk memo, balance test plan. |
| related domains | systems_design, economy_and_balance, loops_parts_wholes, systems_thinking, playtesting |
| related works | Advanced Game Design; Game Mechanics; Characteristics of Games; Game Design Workshop |
| related cards | `concept_system`, `concept_loop`, `concept_feedback-loop`, `concept_economy`, `concept_source`, `concept_sink`, `concept_balance` |
| related lenses | Parts/Loops/Whole Lens; Feedback Loops Lens; Source/Sink Balance Lens; Runaway Loops Lens; Balance Resilience Lens |
| related workflows | Systems Map Pack; Economy and Balance Pack; Iteration Decision Pack |
| current evidence status | draft/source-governed; no project/playtest evidence yet. |
| current limitations | Can produce scaffolds but cannot validate balance without project data. |
| next development priority | Build a systems audit prompt that separates structure, hypothesis, and test plan. |

### Game Feel and Feedback Master

| Field | Definition |
|---|---|
| purpose | Diagnose moment-to-moment interaction quality, responsiveness, clarity, polish, and feedback timing. |
| what questions the AI should ask | What action feels wrong? Is the issue input, response, camera, context, feedback, animation, timing, or readability? What experiment would isolate the cause? |
| what artifacts the AI should produce | feel audit, tuning experiment list, input/response/context/polish table, feedback timing checklist. |
| related domains | game_feel, input_response_context_polish, ui_ux_feedback, prototyping, playtesting |
| related works | Game Feel; Level Up!; The Art of Game Design |
| related cards | `concept_game-feel`, `concept_real-time-control`, `concept_responsiveness`, `concept_tightness`, `concept_floatiness`, `concept_feedback` |
| related lenses | Real-Time Control Lens; Input Responsiveness Lens; Response Clarity Lens; Context Readability Lens; Feedback Timing Lens |
| related workflows | Game Feel Prototype Pack; UI Feedback Pack; Digital Prototype Pack |
| current evidence status | draft/source-governed; previous Game Feel evidence roadmap is superseded as immediate default. |
| current limitations | No user notes or playtest evidence exist. |
| next development priority | Keep as one capability in the master framework, not the sole next phase. |

### Play and Player Experience Master

| Field | Definition |
|---|---|
| purpose | Help the AI reason about play, motivation, challenge, learning, agency, identity, pleasure, and emotional goals. |
| what questions the AI should ask | Why would a player choose to engage? What pleasure or tension is being created? What does the player learn? Where does agency appear? What experience is being tested? |
| what artifacts the AI should produce | player experience hypothesis, motivation map, challenge curve questions, agency audit, learning path sketch. |
| related domains | play_theory, player_experience, player_psychology, fun_learning_mastery |
| related works | Play Matters; The Aesthetic of Play; A Theory of Fun; Better Game Characters by Design |
| related cards | `concept_play`, `concept_playfulness`, `concept_player-experience`, `concept_challenge`, `concept_mastery`, `concept_flow`, `concept_agency` |
| related lenses | Play Context Lens; Playfulness Lens; Voluntary Engagement Lens; Agency Lens; Motivation Lens; Challenge Lens |
| related workflows | Core Experience Definition Pack; Player Persona and Audience Pack; Skill / Chance / Challenge Pack |
| current evidence status | draft/source-governed; many concepts are weak placeholders. |
| current limitations | AI must not state book-specific theories as verified. |
| next development priority | Build a player-experience question ladder for beginner and advanced use. |

### Prototyping Master

| Field | Definition |
|---|---|
| purpose | Convert uncertain design assumptions into fast testable artifacts. |
| what questions the AI should ask | What assumption is riskiest? What is the smallest artifact that can test it? What result would change the design? What should be thrown away? |
| what artifacts the AI should produce | prototype question, prototype plan, paper prototype rules, digital prototype scope, experiment checklist. |
| related domains | prototyping, rules_and_mechanics, game_feel, iteration_production |
| related works | Game Design Workshop; Challenges for Game Designers; Game Feel; Level Up! |
| related cards | `concept_prototype`, `concept_paper-prototype`, `concept_digital-prototype`, `concept_kinesthetic-prototype`, `concept_problem-statement` |
| related lenses | Prototype Question Lens; Learning Speed Lens; Disposable Prototype Lens |
| related workflows | Prototype Question Pack; Paper Prototype Pack; Digital Prototype Pack; Game Feel Prototype Pack |
| current evidence status | draft/source-governed. |
| current limitations | No real prototype records exist yet. |
| next development priority | Build a prototype selector that chooses paper, digital, kinesthetic, or documentation prototype. |

### Playtesting Master

| Field | Definition |
|---|---|
| purpose | Help the AI design tests that separate intention, observation, interpretation, and next action. |
| what questions the AI should ask | What are we testing? Who should test it? What behavior should be observed? What cannot be concluded from this test? What decision will the result inform? |
| what artifacts the AI should produce | playtest plan, observation sheet, interview guide, signal/noise report, iteration decision memo. |
| related domains | playtesting, prototyping, player_experience, iteration_production |
| related works | Game Design Workshop; The Art of Game Design; MDA |
| related cards | `concept_playtest`, `concept_iteration`, `concept_experience-goal`, `concept_feedback`, `concept_design-document` |
| related lenses | Playtest Signal Lens; Observation Quality Lens; Survey Usefulness Lens; Iteration Decision Lens; Test Bias Lens |
| related workflows | Playtest Plan Pack; Iteration Decision Pack; Design Lens Review Pack |
| current evidence status | draft/source-governed; no real PlaytestLog exists. |
| current limitations | Cannot infer real playtest results. |
| next development priority | Build playtest question templates that explicitly separate observed facts from interpretation. |

### Narrative-System Integration Master

| Field | Definition |
|---|---|
| purpose | Align story, world, character, player role, and mechanics so narrative supports playable structure. |
| what questions the AI should ask | What does the story ask the player to do? Do mechanics express the premise? Does world logic constrain interaction? Does the avatar role support agency? |
| what artifacts the AI should produce | narrative-mechanic alignment map, world rule sheet, character function sheet, player role statement. |
| related domains | narrative_design, worldbuilding, character_design, rules_and_mechanics, player_experience |
| related works | Level Up!; Better Game Characters by Design; Chris Crawford on Game Design; The Art of Game Design |
| related cards | `concept_premise`, `concept_story`, `concept_worldbuilding`, `concept_character-function`, `concept_avatar`, `concept_narrative-architecture` |
| related lenses | Story Function Lens; World Coherence Lens; Player Role Lens; Character Function Lens; Narrative Agency Lens |
| related workflows | Narrative-Mechanic Alignment Pack; World and Character Function Pack |
| current evidence status | draft/source-governed. |
| current limitations | No project narrative or world context exists. |
| next development priority | Build a narrative-system integration prompt that avoids prescribing story without player goals. |

### UI/UX Feedback Master

| Field | Definition |
|---|---|
| purpose | Make information, input, state, feedback, modes, errors, and accessibility understandable to players. |
| what questions the AI should ask | What must the player know now? What action is available? What feedback confirms consequence? What is hidden, ambiguous, overloaded, or inaccessible? |
| what artifacts the AI should produce | HUD priority map, feedback table, affordance audit, error recovery checklist, accessibility review. |
| related domains | ui_ux_feedback, game_feel, player_experience, playtesting |
| related works | Level Up!; Game Feel; Better Game Characters by Design |
| related cards | `concept_interface`, `concept_feedback`, `concept_mental-model`, `concept_input-metric`, `concept_context-metric` |
| related lenses | Information Priority Lens; Input Mapping Lens; Feedback Immediacy Lens; Mode Clarity Lens; Accessibility Lens |
| related workflows | UI Feedback Pack; Game Feel Prototype Pack; Playtest Plan Pack |
| current evidence status | draft/source-governed. |
| current limitations | Cannot evaluate an actual UI without a supplied artifact. |
| next development priority | Build a UI feedback audit prompt that asks for screenshots, flows, or state descriptions. |

### Community and Ethics Master

| Field | Definition |
|---|---|
| purpose | Identify social dynamics, moderation risks, accessibility risks, player-rights issues, fairness concerns, and responsibility boundaries. |
| what questions the AI should ask | Who can be harmed or excluded? What incentives create abuse or pressure? What data, monetization, social, or accessibility risks exist? What mitigation is proportionate? |
| what artifacts the AI should produce | ethics risk memo, community health checklist, griefing risk map, accessibility risk list, moderation hypothesis. |
| related domains | ethics_responsibility, multiplayer_community, player_psychology, business_pitch_release, ui_ux_feedback |
| related works | Play Matters; Better Game Characters by Design; Bartle player types; Rules of Play |
| related cards | `concept_ethics`, `concept_responsibility`, `concept_griefing`, `concept_community`, `concept_player-rights`, `concept_business-model` |
| related lenses | Ethical Risk Lens; Safety And Risk Lens; Community Health Lens; Griefing Risk Lens; Responsibility Lens |
| related workflows | Player Persona and Audience Pack; Release Readiness and Risk Audit Pack; Design Lens Review Pack |
| current evidence status | draft/source-governed. |
| current limitations | Must not accuse a design of harm without project details and evidence. |
| next development priority | Build an ethics review checklist with severity and uncertainty labels. |

### Production and Pitch Master

| Field | Definition |
|---|---|
| purpose | Convert design knowledge into scope, documentation, team communication, pitch, launch readiness, and release-risk decisions. |
| what questions the AI should ask | What is the production constraint? What must be documented? What is the proof of value? What should be cut? What risk blocks release? |
| what artifacts the AI should produce | design brief, feature cut list, pitch outline, release readiness checklist, roadmap risk note. |
| related domains | production_process, business_pitch_release, iteration_production, ethics_responsibility |
| related works | Level Up!; Game Design Workshop; Chris Crawford on Game Design |
| related cards | `concept_pitch`, `concept_production-phase`, `concept_release-readiness`, `concept_design-document`, `concept_audience` |
| related lenses | Feasibility Lens; Scope Lens; Market Position Lens; Documentation Lens; Launch Readiness Lens; Business Alignment Lens |
| related workflows | Game Idea to One-Page Concept Pack; Release Readiness and Risk Audit Pack; Iteration Decision Pack |
| current evidence status | draft/source-governed. |
| current limitations | No current project means outputs are templates unless user supplies context. |
| next development priority | Build a pitch-and-scope prompt pack for pre-project ideation. |

### Learning Coach and Socratic Tutor

| Field | Definition |
|---|---|
| purpose | Teach game design progressively and ask questions that help the user think like a designer. |
| what questions the AI should ask | What level is the learner? What concept is confusing? What example can they produce? What artifact proves understanding? What misconception should be tested? |
| what artifacts the AI should produce | lesson path, Socratic question sequence, exercise brief, rubric, reflection prompt, next reading target. |
| related domains | design_exercises, prompt_engineering_for_game_design, play_theory, player_experience, rules_and_mechanics |
| related works | Game Design Workshop; Challenges for Game Designers; The Art of Game Design; A Theory of Fun |
| related cards | `concept_game`, `concept_rules`, `concept_mechanics`, `concept_play`, `concept_system`, `concept_prototype` |
| related lenses | Confidence Calibration Lens; Human Review Lens; Source-Bounded Retrieval Lens; Prompt Output Artifact Lens |
| related workflows | Design Lens Review Pack; Prototype Question Pack; Rules and Formal Elements Pack |
| current evidence status | curriculum is draft/source-governed and not verified source-backed. |
| current limitations | Teaching explanations must avoid unsupported book-specific claims. |
| next development priority | Build an AI tutor operating guide with beginner, intermediate, advanced, and professional modes. |

## Matrix-Wide Limitation

Every capability is operationally useful now as structured design scaffolding. None should be presented as verified source-backed doctrine until evidence records and promotion reviews exist.
