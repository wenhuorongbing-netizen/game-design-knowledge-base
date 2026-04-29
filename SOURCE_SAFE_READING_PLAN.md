# Source-Safe Reading Plan

Date: 2026-04-29

## Purpose

This plan tells the user how to read and annotate collected game design books so the Game Design Knowledgebase can improve without violating source governance.

The AI must not read private or high-risk book bodies. The user may read their own lawful copies and provide manual notes.

## Current Legal State

| Source Category | Current Status | Allowed Now |
|---|---|---|
| high-risk uploaded PDF/EPUB/archive files | metadata-only quarantined | record metadata only; attach user-created notes later |
| prompt-referenced works | reference-list only | route to capabilities; request official metadata or user notes |
| legal sidecars | none approved | none |
| user manual notes | none supplied | request notes |
| user manual quotes | none supplied | request optional short lawful quotes only |
| verified claims | 0 | no verification allowed |

## Safe Reading Workflow

1. User chooses one work from `WORK_PRIORITY_INDEX.md`.
2. User reads a lawful copy outside the AI.
3. User creates short manual notes in their own words.
4. User records page/chapter/section location if available, without copying long text.
5. User marks whether the note is a summary, interpretation, question, method, comparison, or application.
6. AI converts only user notes into EvidenceRefs, cards, prompt hooks, or capability upgrades.
7. AI keeps confidence at `user_interpretation` or `weak` unless stronger legal evidence and review exist.

## Note Template

| Field | What To Provide |
|---|---|
| work_id | Existing `work_id` from `BOOK_TO_CAPABILITY_MAP.md`. |
| source_document_id | Optional source ID if using a registered source handle. |
| location | Chapter, section, page, timestamp, or "whole work reflection". |
| note_type | concept_note, method_note, comparison_note, reading_reflection, project_application_note. |
| user_summary | Your own short summary in your own words. |
| user_interpretation | What you think it means for game design practice. |
| AI capability target | Which master capability this note should improve. |
| related concepts | Existing concepts if known. |
| related workflows | Existing workflows if known. |
| evidence limitations | What this note does not prove. |

## Priority Note Packets

### Packet 1: Lens And Design Review

- recommended work: The Art of Game Design
- capability target: Lens Review Master
- notes needed: what makes a useful design lens; when to apply lenses; what output a lens review should produce.

### Packet 2: Process, Prototype, Playtest

- recommended work: Game Design Workshop
- capability targets: Prototyping Master; Playtesting Master
- notes needed: how to form prototype questions; how to observe players; how to turn results into iteration decisions.

### Packet 3: Mechanics And Formal Structure

- recommended works: Game Mechanics; Rules of Play; MDA
- capability targets: Rules and Mechanics Master; Meaningful Decision Master
- notes needed: mechanics vocabulary; formal elements; how decisions become meaningful; how mechanics connect to experience.

### Packet 4: Systems And Economy

- recommended works: Advanced Game Design; Characteristics of Games; Game Mechanics
- capability target: Systems and Economy Master
- notes needed: system parts, loops, feedback, economy, source/sink, balance risks.

### Packet 5: Player Experience

- recommended works: A Theory of Fun; Play Matters; The Aesthetic of Play
- capability target: Play and Player Experience Master
- notes needed: fun, play, learning, challenge, agency, pleasure, ethics, player meaning.

### Packet 6: Practical Production And Expression

- recommended works: Level Up!; Game Feel; Better Game Characters by Design
- capability targets: Game Feel and Feedback Master; UI/UX Feedback Master; Narrative-System Integration Master; Production and Pitch Master
- notes needed: practical specs, feedback, UI, character function, level flow, pitch, release readiness.

## Manual Quote Policy

Quotes are optional. If the user provides one, it must be short, lawful, user-provided, and explicitly marked as a quote. The AI must not extract quotes from source files.

## Upgrade Path

| User Provides | Possible KB Upgrade |
|---|---|
| manual note | EvidenceRef, user_interpretation confidence, card/lens/workflow refinement |
| legal sidecar | source operation permission review |
| short manual quote | quote card or EvidenceRef if safe |
| official/open metadata | stronger bibliographic registry |
| project application | ProjectOverlay later, if a real project exists |
| playtest observation | PlaytestLog later, if real data exists |

## Current Best Next Action

Create three to five manual notes from one foundational work. Recommended first work: The Art of Game Design or Game Design Workshop, depending on whether the user wants lens-review mastery or practical design-process mastery first.
