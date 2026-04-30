# Documentation Deprecation Policy

Date: 2026-04-30

## Purpose

Deprecation keeps old or superseded documentation from confusing users while preserving historical context when needed.

## When To Deprecate

Deprecate a document when:

- it has been superseded by a clearer hub or policy;
- it duplicates a canonical file;
- it points to inactive workflows;
- it is no longer linked by the progressive-disclosure model;
- it has no owner;
- it creates first-use confusion;
- it contains historical instructions that must not be followed.

## Deprecation Requirements

A deprecated document must:

- state that it is not active;
- point to the active replacement if one exists;
- say who should still read it, if anyone;
- avoid active imperative language;
- be removed from first-use navigation;
- be listed as deprecated or legacy in structure maps when relevant.

## Archive Candidate Requirements

An `archive_candidate` document must:

- stay out of first-use navigation;
- have a reason for possible archive;
- have a review owner;
- have a decision deadline or next milestone.

## What Not To Do

- Do not delete canonical KB content without a reversible migration plan.
- Do not delete audit history just to reduce visible file count.
- Do not hide source-governance evidence.
- Do not leave inactive instructions at the same priority as active instructions.

## Review Flow

1. Mark the file as `archive_candidate`.
2. Check incoming links.
3. Identify the active replacement.
4. Update hubs and maps.
5. Change the file to `deprecated` or merge it into the active replacement.
6. Run validation.

