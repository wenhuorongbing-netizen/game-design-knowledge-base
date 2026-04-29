# Problem To Reading Map

Date: 2026-04-29

## Purpose

This map tells the user what to read next based on a design problem, without implying that the AI has ingested or summarized the books.

The listed works are reading priorities and capability routes only.

## Runtime Routing Hardening

Use reading routes only when the user asks what to study, asks for theory context, or needs user notes to upgrade the KB. Reading recommendations are not evidence, summaries, or verified author claims.

## Reading Routes

| Problem | First Reading Route | Secondary Reading Route | Notes To Capture |
|---|---|---|---|
| I have a vague game idea | The Art of Game Design | Game Design Workshop; A Theory of Fun | lens questions, player promise, scope, concept review |
| I do not know what my game is about | The Art of Game Design | A Theory of Fun; Play Matters | player fantasy, emotional goal, play framing, exclusions |
| My core experience is unclear | A Theory of Fun | The Art of Game Design; The Aesthetic of Play | player experience, learning, pleasure, challenge, emotion |
| My choices feel meaningless | Game Mechanics | Rules of Play; MDA; Characteristics of Games | decisions, tradeoffs, consequences, uncertainty |
| My rules are confusing | Rules of Play | Game Mechanics; The Game Design Reader; Formal Abstract Design Tools | formal elements, rules, procedures, boundaries, outcomes |
| My system has too many parts | Advanced Game Design | Game Mechanics; Characteristics of Games | parts, loops, feedback, coupling, cut criteria |
| My economy may inflate | Game Mechanics | Advanced Game Design; Characteristics of Games | resources, sources, sinks, progression, balance risks |
| My game feels boring | A Theory of Fun | Game Design Workshop; The Art of Game Design | learning, challenge, curiosity, player motivation |
| My feedback is weak | Game Feel | Level Up!; The Art of Game Design | control, response, feedback timing, polish, readability |
| My UI is confusing | Level Up! | Game Feel; Better Game Characters by Design | information priority, feedback, affordance, accessibility |
| My narrative does not support mechanics | Level Up! | Better Game Characters by Design; Chris Crawford works | player role, character function, world rules, story/mechanic fit |
| My prototype has no clear question | Game Design Workshop | Challenges for Game Designers; Game Feel | prototype question, assumption test, exercise output |
| I do not know how to playtest | Game Design Workshop | The Art of Game Design; Challenges for Game Designers | test goal, observation, interpretation, iteration |
| My design is too complex | Rules of Play | Game Mechanics; Advanced Game Design; Level Up! | formal simplification, system coupling, scope cuts |
| My pitch is weak | Level Up! | Game Design Workshop; The Art of Game Design | promise, audience, proof features, scope, pitch artifact |
| I do not know what to read next | Work Priority Index | Reading Priority Matrix; Book Role Summary | choose capability target and write 3 to 5 notes |
| I want AI to teach me game design | Game Design Workshop | Challenges for Game Designers; The Art of Game Design; A Theory of Fun | exercises, teaching sequence, reflection questions |

## Note Capture Rule

For every reading route, the user should capture:

- one concept note;
- one lens or diagnostic question note;
- one workflow or artifact note;
- one evidence gap or "AI should not claim yet" note.

## Source Boundary

The AI may recommend reading based on metadata and registered work roles.

The AI must not:

- summarize private chapters;
- quote from books;
- claim what an author says;
- teach exact book definitions;
- promote the reading route to verified evidence.

Default source_basis for reading routes: `metadata_only`.

Default confidence: `weak`.
