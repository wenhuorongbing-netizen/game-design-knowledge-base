# Reading Session Is Not An App

Date: 2026-04-29

## Purpose

This file prevents scope drift.

The repository does not need a reading app, reading progress tracker, personal library dashboard, user account system, quote collection app, or forum to support the Game Design Knowledgebase.

## What "Reading Session" Means Here

In this KB, a reading session is only a lightweight manual note capture moment:

| Element | Meaning |
|---|---|
| selected work | Which registered work the user read. |
| reading goal | Which AI capability or design problem the user wants to improve. |
| manual notes | User-authored notes written in the user's own words. |
| optional quote | Short lawful user-provided quote, if any. |
| target KB object | Concept, lens, workflow, card, or evidence gap. |

## What This Must Not Become

Do not build:

- login;
- user auth;
- personal library CRUD;
- reading progress;
- reading streaks;
- book shelves;
- reading sessions database;
- note editor UI;
- quote feed;
- forum comments;
- likes;
- mobile reading UI;
- full-stack app layer.

## Safe Reading Session Template

| Field | Fill This |
|---|---|
| work_id | Registered work ID. |
| reading_goal | Capability, domain, concept, lens, or workflow to improve. |
| location | Chapter, section, page range, or whole work reflection. |
| notes_created | List note IDs the user wrote. |
| quotes_created | List quote IDs, if any. |
| evidence_gaps_found | Questions or missing proof. |
| AI_next_action | Convert note to card, lens, workflow, or EvidenceRef later. |

## Rule

The KB only stores useful, source-governed knowledge artifacts. It does not track the user's reading life.

