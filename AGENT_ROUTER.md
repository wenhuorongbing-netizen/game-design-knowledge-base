# Agent Router

Date: 2026-04-30

## Purpose

Use this file to map a user request to one skill.

Do not route normal game design work through benchmark files or broad repository browsing.

## Routing Rules

| Trigger phrases | Likely intent | Chosen skill | Fallback skill | Minimum questions | Default artifact | Context pack | Source safety reminder |
|---|---|---|---|---|---|---|---|
| "review my idea", "is this idea good", "shape this concept" | improve rough idea | game_idea_review | core_experience_definition | What is the player doing? Who is it for? What should it feel like? | one-page concept memo | `CP02` | do not invent project facts |
| "what is my game about", "core experience", "player fantasy" | define experience | core_experience_definition | game_idea_review | What should the player feel? What action repeats? What is unique? | core experience statement | `CP02` | label assumptions |
| "use lenses", "lens review", "critique through lenses" | structured review | lens_review | game_idea_review | What is the object of review? What concern matters most? | lens review report | `CP04` | lenses are draft tools |
| "choices feel fake", "meaningless choices", "obvious decisions" | decision diagnosis | meaningful_decision_audit | lens_review | What are the options? What information does the player have? What are consequences? | decision audit | `CP04` | do not claim verified theory |
| "system is messy", "economy broken", "inflation", "resources" | systems/economy diagnosis | systems_economy_audit | prototype_plan | What resources exist? What creates them? What removes them? | systems map or economy audit | `CP04` | do not invent telemetry |
| "floaty", "sluggish", "feedback weak", "game feel" | feel and feedback diagnosis | game_feel_feedback_audit | ui_feedback_audit | What input feels wrong? What feedback is delayed? What should feel different? | game feel audit | `CP04` | do not cite private books |
| "UI confusing", "players miss feedback", "interface unclear" | UI feedback diagnosis | ui_feedback_audit | game_feel_feedback_audit | What state is unclear? What should the player notice? What action follows? | UI feedback audit | `CP04` | use supplied screen facts only |
| "story and mechanics", "narrative mismatch", "world does not fit" | narrative-system alignment | narrative_mechanic_alignment | core_experience_definition | What is the premise? What are the mechanics? Where is the mismatch? | alignment report | `CP04` | do not invent lore |
| "prototype plan", "what should I build first", "test a question" | prototype planning | prototype_plan | game_idea_review | What uncertainty matters most? What can be tested smallest? | prototype plan | `CP05` | no fake project evidence |
| "playtest plan", "how to test", "what should I observe" | playtest planning | playtest_plan | prototype_plan | What is the prototype? What is the test goal? Who participates? | playtest plan | `CP05` | no fake observations |
| "teach me", "learn game design", "study plan" | learning support | learning_coach | reading_note_intake | What topic? What level? What artifact do you want? | learning plan or mini lesson | `CP03` | no fake citations |
| "reading notes", "turn reading into notes", "book note prompt" | source-safe note planning | reading_note_intake | learning_coach | Which work? What note type? Did user author the note? | reading note intake plan | `CP03` | do not summarize book body |
| "is this claim supported", "can I say verified", "check evidence" | claim safety | claim_safety_check | reading_note_intake | What is the claim? What evidence exists? What source_basis? | claim safety report | `CP06` | metadata_only cannot verify |
| "pitch critique", "improve pitch", "sell this idea" | pitch review | pitch_critique | game_idea_review | Who is the audience? What is the hook? What constraints exist? | pitch critique | `CP04` | do not invent market data |

## Fallback Rule

If the request is unclear, choose `game_idea_review` for design tasks or `learning_coach` for learning tasks.

Ask at most three high-value questions before proceeding.

If the request asks for unsafe source processing, route to `claim_safety_check` and explain the refusal boundary.
