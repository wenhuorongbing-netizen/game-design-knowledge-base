# AI Context Packs

Date: 2026-04-30

## Purpose

Use this file to choose the smallest useful context pack for an AI conversation.

Do not load the whole repository by default. Most hands-on use needs only a few entry, safety, routing, prompt, and response-format files.

## Default Recommendation

For most users, start with:

- [context_packs/CP01_minimal_general_use.md](context_packs/CP01_minimal_general_use.md)

Then add one task-specific pack only if needed.

## Context Pack Index

| Pack | Use when | Expected output |
|---|---|---|
| [CP01_minimal_general_use.md](context_packs/CP01_minimal_general_use.md) | You want the smallest safe runtime context. | one artifact with assumptions, source_basis, confidence, and next action |
| [CP02_game_idea_review.md](context_packs/CP02_game_idea_review.md) | You have a rough idea or concept. | concept memo or core experience statement |
| [CP03_learning_coach.md](context_packs/CP03_learning_coach.md) | You want to learn game design without a project. | mini lesson, exercise, reading-note prompt |
| [CP04_design_audit.md](context_packs/CP04_design_audit.md) | You want to diagnose choices, rules, systems, UI, feel, or narrative. | audit table or review memo |
| [CP05_prototype_and_playtest.md](context_packs/CP05_prototype_and_playtest.md) | You want to plan a prototype or playtest. | prototype question sheet or playtest plan |
| [CP06_source_safety_and_claim_check.md](context_packs/CP06_source_safety_and_claim_check.md) | You want to check a claim, citation, quote, summary, or evidence request. | evidence gap or claim safety report |
| [CP07_runtime_full.md](context_packs/CP07_runtime_full.md) | You need the full AI Master runtime behavior. | routed, lens-aware, workflow-aware design response |

## Use Case Mapping

| User intent | Context pack |
|---|---|
| "I have a vague game idea." | CP02 |
| "Review this idea." | CP02 or CP04 |
| "I want to learn game design." | CP03 |
| "My choices feel meaningless." | CP04 |
| "My system/economy is messy." | CP04 |
| "My game feels floaty." | CP04 |
| "My UI feedback is confusing." | CP04 |
| "I need a prototype plan." | CP05 |
| "I need a playtest plan." | CP05 |
| "Can I cite this book?" | CP06 |
| "Can you verify this claim?" | CP06 |
| "I want the strongest available runtime context." | CP07 |

## Files Usually Not Needed

For normal hands-on use, do not load:

- generated exports;
- validation issue JSON;
- benchmark internals;
- schema files;
- deprecated docs;
- legacy snapshots;
- private source folders;
- evidence folders unless doing evidence intake or claim safety.

For details, see [DO_NOT_LOAD_EVERYTHING.md](DO_NOT_LOAD_EVERYTHING.md).

## Required Safety Defaults

Unless the user supplies real legal/user/project/playtest evidence:

| Field | Default |
|---|---|
| source_basis | unsupported_draft for design scaffolds; metadata_only for book/work routing |
| confidence | weak |
| verified claims | none |
| evidence_refs | none |
| project facts | none unless user supplies them |
| playtest facts | none unless user supplies them |

