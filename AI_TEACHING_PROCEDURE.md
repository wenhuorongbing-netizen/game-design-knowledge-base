# AI Teaching Procedure

Date: 2026-04-29

## Purpose

This procedure tells the AI how to teach game design concepts using the KB without pretending unsupported concepts are verified.

## Teaching Modes

| Mode | When To Use | Output |
|---|---|---|
| beginner explanation | user says they do not understand | simple definition, example, exercise |
| intermediate explanation | user knows basics | tradeoffs, failure modes, artifacts |
| advanced explanation | user wants deeper theory | domain links, lenses, comparisons, evidence gaps |
| production coaching | user wants to apply it | workflow, checklist, design artifact |
| Socratic teaching | user is learning by doing | guided questions and practice |

## Teaching Procedure

1. Identify the concept.
2. Infer learner level.
3. State a working definition.
4. State what it is not.
5. Explain why it matters in production.
6. Link to domain, capability, cards, lenses, and workflows.
7. Give a small example placeholder.
8. Give a practice exercise.
9. Mark source_basis, confidence, and evidence gaps.
10. Offer next learning step.

## Teaching Output Structure

| Section | Content |
|---|---|
| Short answer | One to three sentences. |
| Why it matters | What decision it changes. |
| How to use it | Practical design move. |
| What to watch out for | Common misunderstanding. |
| Mini exercise | A short task with output. |
| KB route | Domain, capability, card, lens, workflow. |
| Source/confidence | Source boundary and evidence gap. |

## Teaching Concept Without Verified Evidence

Use this pattern:

- "Working definition: ..."
- "Use this as a design scaffold, not a verified book definition."
- "Evidence gap: no legal/user note currently supports a source-specific claim."

## Common Misunderstandings To Correct

| Concept Area | Misunderstanding | Correction |
|---|---|---|
| game idea | "A theme is a design." | A design needs player action, rules, feedback, and testable experience. |
| fun | "Fun is one thing." | Treat fun as a hypothesis about experience, learning, challenge, or pleasure. |
| rules | "Rules are only restrictions." | Rules also define possibilities, state changes, goals, and consequences. |
| decisions | "More options means better choices." | Choices need meaningful tradeoffs, information, and consequences. |
| systems | "A system is a list of features." | A system is relationships, loops, feedback, and state changes. |
| balance | "Balance means equal numbers." | Balance depends on goals, context, skill, pacing, and player perception. |
| game feel | "Feel is polish." | Feel includes control, response, context, timing, feedback, and embodiment. |
| UI | "UI is visual layout." | UI communicates state, available actions, consequences, and errors. |
| narrative | "Story is separate from mechanics." | In games, story often works through player role, constraints, actions, and consequences. |
| playtest | "Feedback equals truth." | Playtests produce observations and interpretations, not universal doctrine. |

## Teaching With Works

The AI may say:

- "The KB routes this topic to Game Design Workshop and The Art of Game Design."
- "User notes from these works would improve this explanation."

The AI must not say:

- "This book defines it as..."
- "The author argues..."
- "Chapter X says..."

unless governed legal evidence exists.

## Mini Exercise Format

Every teaching answer should be able to include:

| Field | Example |
|---|---|
| task | "Write one player action and one consequence." |
| output | "A two-row rule table." |
| constraint | "No lore or theme words allowed." |
| review question | "What changed in game state?" |

## Source Boundary

Default teaching source status:

- source_basis: `unsupported_draft`
- confidence: `weak`

If teaching from user notes:

- source_basis: `user_manual_note`
- confidence: `user_interpretation`

If teaching from verified evidence:

- source_basis: governed evidence source
- confidence: `verified`

