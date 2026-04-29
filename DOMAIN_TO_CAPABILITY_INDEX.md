# Domain To Capability Index

Date: 2026-04-29

## Purpose

This index tells the AI which master capability should handle each game design domain.

The mapping is operational. It does not assert source-backed theory or book-specific claims.

## Capability Routing Table

| Domain | Primary Capability | Secondary Capabilities | AI Should Ask First | AI Should Produce First | Evidence Boundary |
|---|---|---|---|---|---|
| Game Design Foundations | Core Experience Master | Lens Review Master; Production and Pitch Master | What player experience is being promised? | one-page concept or design pillar sheet | draft/source-governed only |
| Player Experience | Play and Player Experience Master | Core Experience Master; UI/UX Feedback Master | What should the player perceive, feel, learn, or choose? | experience hypothesis | draft/source-governed only |
| Play Theory | Play and Player Experience Master | Community and Ethics Master; Lens Review Master | What kind of play context is being created? | play framing memo | metadata-only routing |
| Fun, Learning, and Mastery | Play and Player Experience Master | Learning Coach and Socratic Tutor; Playtesting Master | What does the player learn or master? | challenge/mastery ladder | metadata-only routing |
| Rules and Mechanics | Rules and Mechanics Master | Meaningful Decision Master; Prototyping Master | What can the player do and what changes state? | mechanic spec | draft/source-governed only |
| Meaningful Decisions | Meaningful Decision Master | Rules and Mechanics Master; Playtesting Master | What choice matters and why? | decision audit matrix | draft/source-governed only |
| Skill, Chance, Challenge, and Balance | Meaningful Decision Master | Systems and Economy Master; Playtesting Master | Which outcomes depend on skill, chance, or tuning? | skill/chance/balance matrix | draft/source-governed only |
| Systems, Loops, and Economy | Systems and Economy Master | Meaningful Decision Master; Production and Pitch Master | What loops, feedback, and resources interact? | system map and source/sink table | draft/source-governed only |
| Game Feel and Feedback | Game Feel and Feedback Master | UI/UX Feedback Master; Prototyping Master | What interaction feels wrong or unclear? | feel audit | draft/source-governed only |
| UI, UX, and Interface | UI/UX Feedback Master | Game Feel and Feedback Master; Community and Ethics Master | What state, action, or consequence is unclear? | UI feedback audit | draft/source-governed only |
| Narrative, World, and Character | Narrative-System Integration Master | Core Experience Master; Play and Player Experience Master | How do story, world, and character support player action? | narrative-mechanic alignment map | draft/source-governed only |
| Space and Level Design | Narrative-System Integration Master | Game Feel and Feedback Master; Prototyping Master | What spatial action, path, or encounter is being shaped? | level flow map | weak structural coverage |
| Prototyping | Prototyping Master | Playtesting Master; Rules and Mechanics Master | What assumption should be tested? | prototype question | draft/source-governed only |
| Playtesting and Iteration | Playtesting Master | Prototyping Master; Production and Pitch Master | What observation would change the design? | playtest plan | no real playtest data yet |
| Community and Multiplayer | Community and Ethics Master | Production and Pitch Master; Play and Player Experience Master | What social incentive or risk is present? | community risk map | metadata-only routing |
| Ethics and Responsibility | Community and Ethics Master | UI/UX Feedback Master; Production and Pitch Master | Who may be harmed, pressured, or excluded? | ethics risk memo | draft/source-governed only |
| Production, Documentation, and Pitch | Production and Pitch Master | Core Experience Master; Learning Coach and Socratic Tutor | Who needs the artifact and what decision does it support? | design brief or pitch outline | draft/source-governed only |
| Business and Release | Production and Pitch Master | Community and Ethics Master; Core Experience Master | What promise, audience, and release risk are being managed? | release readiness memo | weak evidence; project needed |
| AI-Assisted Design and Prompt Engineering | Learning Coach and Socratic Tutor | Lens Review Master; all capabilities | What should the AI do and what sources may it use? | source-bounded prompt or review report | no prompt-run evidence yet |

## Capability Load

| Capability | Domains Served | Current Risk |
|---|---|---|
| Core Experience Master | Game Design Foundations; Player Experience; Business and Release | Can become vague unless forced to output artifacts. |
| Lens Review Master | Game Design Foundations; Play Theory; AI-Assisted Design | Must not imply lenses are copied or verified from books. |
| Meaningful Decision Master | Meaningful Decisions; Skill, Chance, Challenge, and Balance | Needs user examples before stronger claims. |
| Rules and Mechanics Master | Rules and Mechanics; Meaningful Decisions | Needs source-backed definitions later. |
| Systems and Economy Master | Systems, Loops, and Economy; Skill/Balance | Needs project data before balance conclusions. |
| Game Feel and Feedback Master | Game Feel and Feedback; Space/Level; UI/UX | Needs artifacts or prototype observations for diagnosis. |
| Play and Player Experience Master | Player Experience; Play Theory; Fun/Learning/Mastery | Needs legal/user notes for theory specificity. |
| Prototyping Master | Prototyping; Rules and Mechanics; Game Feel | Needs user project assumptions to choose prototype type. |
| Playtesting Master | Playtesting and Iteration; Prototyping; Player Experience | Must not invent observations. |
| Narrative-System Integration Master | Narrative/World/Character; Space/Level | Needs project context for meaningful application. |
| UI/UX Feedback Master | UI/UX; Game Feel; Ethics | Needs UI artifact, flow, or screenshot for concrete critique. |
| Community and Ethics Master | Community/Multiplayer; Ethics; Business/Release | Needs explicit risk scope and should avoid universal claims. |
| Production and Pitch Master | Production/Documentation/Pitch; Business/Release | Needs project or market context before final pitch claims. |
| Learning Coach and Socratic Tutor | AI-Assisted Design; Fun/Learning; Foundations | Must keep source boundaries visible. |

