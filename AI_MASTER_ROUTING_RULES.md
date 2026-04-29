# AI Master Routing Rules

Date: 2026-04-29

## Purpose

This file defines how the AI Game Design Master Framework routes a user problem to the right capability, lens set, workflow, and output artifact.

Run 001 did not collect target AI responses, so no response-level routing failure has been proven. This repair is preventive runtime hardening based on the known benchmark risk categories: domain misclassification, weak lens selection, weak workflow selection, generic advice, and poor artifact output.

## Governance Boundary

- Do not add fake evidence.
- Do not claim that routing choices are verified source doctrine.
- Do not require an active game project unless the requested output is project-specific.
- Do not summarize private or high-risk source bodies.
- Use routing as an operational scaffold with `source_basis: unsupported_draft` or `metadata_only`.
- Mark assumptions, missing inputs, confidence, and evidence gaps in every routed answer.

## Routing Priority

When a user asks for design help, route in this order:

1. Identify whether the user wants diagnosis, teaching, reading guidance, workflow execution, or artifact production.
2. Identify the design problem from trigger phrases and described symptoms.
3. Select one primary capability and at most two secondary capabilities.
4. Ask only the smallest set of missing-input questions needed to proceed.
5. Select 2 to 5 lenses, not every possible lens.
6. Select one start workflow and optionally one supporting workflow.
7. Produce the expected artifact, even if partial.
8. Label assumptions, `source_basis`, confidence, and evidence gaps.

## Minimum Question Rule

The AI should ask only the smallest set of high-leverage questions needed to proceed. It should not overwhelm the user with a questionnaire unless the user explicitly requests a deep intake, production brief, or full audit.

Default question budget:

| Situation | Question Budget | Required Behavior |
|---|---:|---|
| vague idea | 3 questions | Ask for player fantasy, repeated action, and desired feeling. |
| specific design problem | 1 to 3 questions | Ask for the missing input that blocks the artifact. |
| artifact supplied | 0 to 2 questions | Review the artifact directly and mark assumptions. |
| user asks for teaching | 1 question | Ask level or target concept if absent. |
| user asks for reading | 1 to 2 questions | Ask capability goal and note-taking readiness. |
| safety-sensitive request | as needed | Ask clarifying questions or refuse unsafe source handling. |

## Route Table

| Route | Trigger Phrases | Likely Intent | Primary Capability | Secondary Capabilities | Required Missing-Input Questions | Recommended Lenses | Recommended Workflows | Expected Output Artifact | Source/Confidence Rule | Common Misrouting Risk |
|---|---|---|---|---|---|---|---|---|---|---|
| vague idea | "I have an idea"; "game concept"; "what should I make"; "turn this into a game" | Convert raw idea into testable concept. | Core Experience Master | Lens Review Master; Production and Pitch Master | What is the player fantasy? What does the player repeatedly do? What feeling should the player leave with? | Core Experience Lens; Audience Lens; Player Fantasy Lens; Scope Lens; Feasibility Lens | Game Idea to One-Page Concept Pack; Core Experience Definition Pack | one-page concept draft | `unsupported_draft`; weak until user evidence exists | Jumping to feature list or market advice before player experience. |
| unclear core experience | "not sure what it is about"; "core experience unclear"; "no direction"; "what is the game really" | Define player promise, pillars, and exclusions. | Core Experience Master | Play and Player Experience Master | What experience is promised? What action creates it? What should be excluded? | Core Experience Lens; Emotional Goal Lens; Player Fantasy Lens; Novelty Lens; Scope Lens | Core Experience Definition Pack; Game Idea to One-Page Concept Pack | player promise and design pillars | `unsupported_draft`; weak | Treating theme, genre, or story premise as the design itself. |
| weak player motivation | "why would players care"; "boring"; "not engaging"; "no motivation" | Diagnose player desire, challenge, curiosity, and reward. | Play and Player Experience Master | Core Experience Master; Playtesting Master | What is the repeated action? What changes over time? What tension or mastery should emerge? | Motivation Lens; Challenge Lens; Curiosity Lens; Pleasure Variety Lens; Meaningful Decisions Lens | Core Experience Definition Pack; Skill / Chance / Challenge Pack; Playtest Plan Pack | engagement hypothesis and test plan | `unsupported_draft`; weak | Adding rewards or content instead of diagnosing experience structure. |
| meaningless choices | "fake choices"; "choices do not matter"; "meaningless decisions"; "no consequence" | Test decision quality and agency. | Meaningful Decision Master | Rules and Mechanics Master; Playtesting Master | What options does the player see? What information do they have? What changes after the choice? | Meaningful Decisions Lens; Tradeoffs Lens; Dilemma Quality Lens; Agency Lens; Skill/Chance Mix Lens | Meaningful Decision Audit Pack; Rules and Formal Elements Pack | decision audit matrix | `unsupported_draft`; weak | Assuming more options create meaning. |
| confusing rules | "rules are confusing"; "players don't understand"; "mechanic unclear"; "too many rules" | Formalize actions, constraints, state changes, and outcomes. | Rules and Mechanics Master | Meaningful Decision Master; Prototyping Master | What can the player do? What does the system track? What ends or resolves the interaction? | Rule Clarity Lens; Rules As Constraints Lens; Core Loop Lens; Depth Versus Complexity Lens | Rules and Formal Elements Pack; Core Loop Design Pack | rule table and formal elements map | `unsupported_draft`; weak | Explaining theory instead of producing a rule table. |
| shallow mechanics | "mechanic is shallow"; "not enough depth"; "too simple"; "not interesting" | Separate depth, complexity, emergence, and decision pressure. | Rules and Mechanics Master | Meaningful Decision Master; Systems and Economy Master | What decision does the mechanic create? What can players learn or exploit? What variation changes the situation? | Depth Versus Complexity Lens; Emergent Possibility Lens; Tradeoffs Lens; Exploitability Lens | Rules and Formal Elements Pack; Meaningful Decision Audit Pack | mechanic depth audit | `unsupported_draft`; weak | Adding complexity without checking decision depth. |
| broken system loops | "system has too many parts"; "loops broken"; "features interact badly"; "runaway loop" | Map parts, loops, feedback, and dependencies. | Systems and Economy Master | Meaningful Decision Master; Production and Pitch Master | What parts exist? What loops repeat? What reinforces or dampens behavior? | Parts/Loops/Whole Lens; Feedback Loops Lens; Systemic Coupling Lens; Runaway Loops Lens | Systems Map Pack; Design Lens Review Pack | system map and dependency cut list | `unsupported_draft`; weak | Treating systems as a feature inventory instead of relationships. |
| economy inflation | "economy is broken"; "inflation"; "too much currency"; "resources pile up" | Diagnose sources, sinks, accumulation, and progression risk. | Systems and Economy Master | Playtesting Master; Production and Pitch Master | What resource enters? What resource leaves? What accumulates? | Source/Sink Balance Lens; Economy Readability Lens; Runaway Loops Lens; Progression Curve Lens | Economy and Balance Pack; Systems Map Pack | source/sink table and inflation risk memo | `unsupported_draft`; weak; numeric claims require data | Pretending to balance numbers without rates or playtest data. |
| weak feedback | "feedback is weak"; "players miss feedback"; "unclear response"; "impact not felt" | Audit action, state change, response, and feedback timing. | Game Feel and Feedback Master | UI/UX Feedback Master; Playtesting Master | What action needs feedback? What state changes? What feedback is currently visible or audible? | Feedback Timing Lens; Response Clarity Lens; Context Readability Lens; Information Priority Lens | Game Feel Prototype Pack; UI Feedback Pack | feedback timing audit | `unsupported_draft`; weak | Prescribing polish before identifying missing feedback layer. |
| bad game feel | "feels floaty"; "not responsive"; "controls feel bad"; "camera feels wrong" | Diagnose control, response, context, camera, avatar, and polish. | Game Feel and Feedback Master | Prototyping Master; Playtesting Master | What action feels wrong? What input and response are expected? Is there an artifact or description? | Real-Time Control Lens; Input Responsiveness Lens; Response Clarity Lens; Tight Versus Floaty Lens; Camera Feel Lens | Game Feel Prototype Pack; Digital Prototype Pack | game feel audit and tuning experiment list | `unsupported_draft`; weak; needs artifact for stronger diagnosis | Overfitting to "floaty" without separating input, response, gravity, animation, camera, and feedback. |
| confusing UI | "UI confusing"; "HUD unclear"; "players don't know what to do"; "screen is overloaded" | Make state, action, consequence, and modes readable. | UI/UX Feedback Master | Game Feel and Feedback Master; Community and Ethics Master | What does the player need to know now? What action is available? What changed? | Information Priority Lens; Visibility Lens; Mode Clarity Lens; Feedback Immediacy Lens; Accessibility Lens | UI Feedback Pack; Playtest Plan Pack | UI readability audit and HUD priority map | `unsupported_draft`; weak | Giving visual style advice instead of readability and task-state analysis. |
| narrative-mechanic mismatch | "story doesn't support mechanics"; "ludonarrative issue"; "world and gameplay conflict"; "narrative feels disconnected" | Align premise, player role, world rules, character function, and core actions. | Narrative-System Integration Master | Core Experience Master; Play and Player Experience Master | What does the story ask players to care about? What do mechanics ask players to do? Where do they conflict? | Story Function Lens; Player Role Lens; Narrative Agency Lens; World Coherence Lens | Narrative-Mechanic Alignment Pack; World and Character Function Pack | narrative-mechanic alignment map | `unsupported_draft`; weak | Writing story suggestions before mapping player action. |
| prototype without question | "prototype has no clear question"; "what should I prototype"; "prototype scope"; "test an idea" | Convert uncertainty into a small test. | Prototyping Master | Playtesting Master; Rules and Mechanics Master | What assumption is riskiest? What answer would change the design? What is the smallest test? | Prototype Question Lens; Learning Speed Lens; Disposable Prototype Lens; Feasibility Lens | Prototype Question Pack; Paper Prototype Pack; Digital Prototype Pack | prototype question sheet | `unsupported_draft`; weak | Turning prototype into production plan. |
| playtest planning | "how do I playtest"; "test plan"; "what questions to ask players"; "observe players" | Plan safe test, observation, interview, and decision rule. | Playtesting Master | Prototyping Master; Learning Coach and Socratic Tutor | What is being tested? Who should test it? What decision will results inform? | Playtest Signal Lens; Observation Quality Lens; Survey Usefulness Lens; Test Bias Lens | Playtest Plan Pack; Iteration Decision Pack | playtest plan and observation sheet | `unsupported_draft`; weak; no invented results | Inventing participant behavior or treating one test as universal doctrine. |
| pitch critique | "pitch is weak"; "sell this idea"; "one-liner"; "store page"; "presentation" | Clarify audience, promise, proof, scope, and risk. | Production and Pitch Master | Core Experience Master; Community and Ethics Master | Who is it for? What does the player do? What proof shows the promise? | Market Position Lens; Core Experience Lens; Player Fantasy Lens; Scope Lens | Game Idea to One-Page Concept Pack; Release Readiness and Risk Audit Pack | pitch critique and revised pitch skeleton | `unsupported_draft`; weak | Claiming market demand or feasibility without evidence. |
| ethical/community risk | "is this ethical"; "griefing"; "toxic community"; "monetization risk"; "accessibility risk" | Identify harm, exclusion, pressure, fairness, and mitigation. | Community and Ethics Master | UI/UX Feedback Master; Production and Pitch Master | Who may be harmed or excluded? What incentive creates risk? What mitigation is proportionate? | Ethical Risk Lens; Safety And Risk Lens; Accessibility Lens; Community Health Lens; Griefing Risk Lens | Release Readiness and Risk Audit Pack; Player Persona and Audience Pack | ethics and community risk memo | `unsupported_draft`; weak; avoid accusations without details | Moralizing or making legal claims without evidence. |
| concept teaching | "teach me"; "explain concept"; "what is"; "I want to learn" | Teach progressively and give exercise. | Learning Coach and Socratic Tutor | Relevant domain capability | What level are you at, if not obvious? | Confidence Calibration Lens; Human Review Lens; Evidence Gap Lens | AI Teaching Procedure; relevant domain workflow | concept lesson, example placeholder, mini exercise | `metadata_only` or `unsupported_draft`; do not present book doctrine as verified | Teaching exact book definitions without evidence. |
| reading guidance | "what should I read"; "which book next"; "reading plan"; "how to take notes" | Recommend source-safe reading and note prompts. | Learning Coach and Socratic Tutor | Core Experience Master; relevant domain capability | Which capability do you want to improve? Are you ready to write notes? | Evidence Gap Lens; Source-Bounded Retrieval Lens; Claim Traceability Lens | Reading to KB Pipeline; User Note to Card Workflow | reading priority recommendation and note prompts | `metadata_only`; reading route is not evidence | Implying the AI has read or summarized private books. |

## Default Output Footer

Every routed answer should end with:

- selected capability;
- selected lenses;
- selected workflow;
- output artifact produced;
- source_basis;
- confidence;
- assumptions;
- missing evidence;
- next smallest action.

