
# Usability Audit

## Status

Usability classification: **usable for learning and draft production work; partial for forum and project overlays**.

## Scenario Tests

| Scenario | Route | Key Objects | Result | Limitation |
|---|---|---|---|---|
| I have a game idea. What do I read and do first? | Start with Track 1 lessons, then run Game Idea to One-Page Concept Pack and Core Experience Definition Pack. | <code>lesson_01_foundations_01_what-a-game-designer-actually-decides</code>; <code>lesson_01_foundations_08_the-difference-between-ideas-and-designs</code>; <code>workflow_game-idea-to-one-page-concept</code>; <code>workflow_core-experience-definition</code>; <code>lens_project-direction_core-experience</code> | usable | Outputs are draft project artifacts until reviewed or playtested. |
| I need to design a core loop. Which cards/lenses/workflows apply? | Use concept_loop, framework_core-loop-map, Core Loop Lens, and Core Loop Design Pack. | <code>concept_loop</code>; <code>framework_core-loop-map</code>; <code>lens_mechanics-and-rules_core-loop</code>; <code>workflow_core-loop-design</code>; <code>lesson_04_systems_economy_02_parts-loops-and-wholes</code> | usable | Core loop concepts are scaffolded; add project examples and playtest evidence. |
| My game feels floaty. Which Game Feel resources apply? | Use Game Feel track lessons, Tight Versus Floaty Lens, Input Responsiveness Lens, and Game Feel Prototype Pack. | <code>concept_floatiness</code>; <code>concept_tightness</code>; <code>lens_game-feel_tight-versus-floaty</code>; <code>lens_game-feel_input-responsiveness</code>; <code>workflow_game-feel-prototype</code> | usable | No legal Game Feel book body has been ingested; use project tuning data. |
| My economy is broken. Which economy/balance workflow applies? | Use Economy and Balance Pack, Source/Sink Balance Lens, Runaway Loops Lens, and systems/economy lessons. | <code>workflow_economy-and-balance</code>; <code>framework_source-sink-economy-map</code>; <code>lens_systems-and-economy_source-sink-balance</code>; <code>lens_systems-and-economy_runaway-loops</code>; <code>lesson_04_systems_economy_06_economy-sources-and-sinks</code> | usable | Needs real economy numbers and telemetry/playtest evidence. |
| I need to run a playtest. Which workflow pack applies? | Use Playtest Plan Pack, Prototype Question Pack, and Track 8 playtesting lessons. | <code>workflow_playtest-plan</code>; <code>workflow_prototype-question</code>; <code>lesson_08_prototyping_playtesting_iteration_06_playtest-planning</code>; <code>lesson_08_prototyping_playtesting_iteration_08_interpreting-feedback</code>; <code>prompt_generate-playtest-questions</code> | usable | PlaytestLog entity exists in ontology but a full log template remains future work. |
| I need to write a pitch. Which lessons and templates apply? | Use Pitching a Game lesson, Game Idea to One-Page Concept Pack, Player Persona and Audience Pack, and release/pitch prompt cards. | <code>lesson_09_production_team_community_release_03_pitching-a-game</code>; <code>workflow_game-idea-to-one-page-concept</code>; <code>workflow_player-persona-and-audience</code>; <code>prompt_release-page-critique</code>; <code>concept_pitch</code> | usable | Market evidence and store-page examples are not yet attached. |
| I want to discuss a quote or concept in the forum. Which template applies? | Use concept cards discussion prompts and future forum template placeholders. | <code>concept_agency</code>; <code>concept_play</code>; <code>kb/10_forum_templates/forum_thread_templates.md</code>; <code>kb/10_forum_templates/discussion_quality_rules.md</code> | partial | Forum templates are not yet fully structured entity files; implement in Prompt 12. |
| I want to apply a book concept to my project. How does ProjectOverlay work? | Use Project Application Guide, project overlay template, Project Overlay Workshop lesson, and Update Project Overlay prompt. | <code>kb/09_project_overlays/project_overlay_template.md</code>; <code>kb/09_project_overlays/PROJECT_APPLICATION_GUIDE.md</code>; <code>lesson_10_advanced_design_studio_07_project-overlay-workshop</code>; <code>prompt_update-project-overlay</code> | partial | ProjectOverlay is scaffolded but not implemented with real project records; run Prompt 11. |

## Navigation Verdict

- A beginner can start with the curriculum and run a workflow pack.
- A designer can find core-loop, game-feel, economy, UI, narrative, playtest, and release materials by phase.
- A team can use workflows to produce artifacts, then attach results to a future project overlay.
- AI can retrieve from search index safely because source_basis and confidence are included.

## Friction Points

- ProjectOverlay is not yet complete enough for real project history.
- Forum templates are present but not normalized into Prompt 9 entity exports.
- Many cards are intentionally generic scaffolds and need evidence-backed prose.
- There are no real user notes, quotes, playtest logs, or design decision logs yet.

## Immediate Usability Repairs

1. Implement ProjectOverlay records and templates in Prompt 11.
2. Implement forum thread templates as normalized entities in Prompt 12.
3. Add one sample project overlay that uses at least three workflow outputs.
4. Attach user notes to the top 20 concept cards.
5. Add a "start here" pointer from BookOS to `KB_README.md`.
