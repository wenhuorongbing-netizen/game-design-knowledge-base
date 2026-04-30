# Worked Examples

These examples use fictional inputs. They are not evidence, project facts, playtest results, source summaries, or benchmark outputs.

## Example 1: Vague Game Idea

User input:

> I want to make a cozy survival game where the player repairs an abandoned lighthouse and talks to sea spirits.

Expected AI output shape:

| Section | Example |
|---|---|
| inferred concept | A low-pressure repair and relationship game about restoring safety, memory, and routine around a lighthouse. |
| core experience | The player should feel calm responsibility: each small repair makes the world safer and more emotionally connected. |
| repeated action | Gather modest resources, repair a lighthouse subsystem, receive feedback from the environment or spirits, unlock a new small need. |
| lenses | Core Experience, Player Fantasy, Scope, Feedback Timing, Narrative-Mechanic Alignment. |
| workflow | Game Idea to One-Page Concept Pack. |
| risks | Survival pressure may fight cozy tone; spirits may become exposition instead of play; repair scope may grow too large. |
| next action | Write a one-page concept with 3 repair verbs, 3 spirit interaction verbs, and 1 day/night loop. |
| source_basis | `unsupported_draft` |
| confidence | `weak` |
| evidence_gap | No prototype, playtest, project context, or source-backed claim exists. |

## Example 2: Meaningful Decision Audit

User input:

> The player can choose to spend energy on fishing, repairing, or talking to spirits each day.

Expected AI output shape:

| Decision | Information | Tradeoff | Consequence | Fake-choice risk |
|---|---|---|---|---|
| fish | Current energy and food need | Food now versus less repair progress | Food supply changes tomorrow's safety margin | If food is always abundant, choice becomes cosmetic. |
| repair | Known broken subsystem | Progress versus fewer relationship actions | Lighthouse function improves or unlocks route | If repair order never matters, choice is scheduling only. |
| talk to spirits | Relationship clue or request | Story insight versus material progress | Spirit trust or hint changes future options | If dialogue has no effect, choice feels optional but not meaningful. |

Footer:

| Field | Value |
|---|---|
| source_basis | `unsupported_draft` |
| confidence | `weak` |
| assumption | Energy is limited and daily actions exclude each other. |
| evidence_gap | Needs prototype values and playtest observation. |
| next_action | Define one visible consequence for each daily action. |

## Example 3: Source Safety Check

User input:

> Can I say Game Feel proves that responsiveness is the most important part of action games?

Expected AI output shape:

| Section | Example |
|---|---|
| classification | Unsafe as written. |
| why | It presents a book-specific and universal claim without EvidenceRef or lawful source support. |
| safer wording | "Responsiveness is a useful draft lens for reviewing action-game feel." |
| source_basis | `unsupported_draft` for the design heuristic; `metadata_only` for book routing unless legal evidence exists. |
| confidence | `weak` |
| blocked wording | Do not say the book proves this unless a legal EvidenceRef supports that exact scope. |
| next action | Add a user manual note after lawful reading, then create an EvidenceRef if review allows. |

## Example 4: No-Project Learning

User input:

> I do not have a project. Teach me systems design.

Expected AI output shape:

| Section | Example |
|---|---|
| focus | Systems as interacting parts, loops, resources, feedback, and player-visible consequences. |
| exercise | Pick a simple daily routine and map it as sources, sinks, feedback, and failure points. |
| artifact | A one-page system map, not a production design. |
| lenses | Parts/Loops/Whole, Feedback Loops, Runaway Loops, Depth Versus Complexity. |
| workflow | Systems Map Pack. |
| source_basis | `unsupported_draft` |
| confidence | `weak` |
| evidence_gap | No user notes or project evidence. |

## Example 5: Reading To Notes

User input:

> I am reading a game design book and want notes for meaningful decisions.

Expected AI output shape:

| Section | Example |
|---|---|
| reading goal | Look for how the author distinguishes real choices from superficial options. |
| manual note prompt | In your own words, what makes a choice consequential? |
| manual note prompt | What example did you think of from a game you know? |
| manual note prompt | What should the AI not claim until evidence exists? |
| do not copy | Do not paste long passages or chapter summaries. |
| source_basis | `metadata_only` until the user writes a manual note; then `user_manual_note` for that note. |
| confidence | `weak` or `user_interpretation` depending on supplied note. |

## Rule For All Examples

Examples show shape and expectations only. They do not create real evidence and must not be promoted to verified claims.
