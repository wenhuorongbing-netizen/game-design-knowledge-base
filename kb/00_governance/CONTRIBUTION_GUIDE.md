# Contribution Guide

## Goal

Contributors are not adding random notes.

They are adding governed knowledge units.

## Contribution Order

Always work in this order:

1. register the source
2. classify legal status
3. assign `source_basis`
4. assign confidence
5. create or update work record
6. create dossier or cards only if basis allows it

## Required Intake Checklist

Before adding any knowledge object, confirm:

- source file or page is recorded in `/kb/01_sources/sources.json`
- legal status is explicit
- `source_basis` is explicit
- confidence is explicit
- the object is marked as general KB or project overlay

## What Not To Do

Do not:

- summarize mirror-marked files
- quote long passages
- copy body text from suspicious sources
- import legacy generated text as verified material
- blur source facts with personal opinion

## Acceptable Prompt 1 Contributions

Allowed in Prompt 1:

- governance docs
- ontology docs
- source audit
- work intake scaffolding
- template files
- quality backlogs

Not allowed in Prompt 1:

- chapter summaries from restricted books
- quote cards from high-risk files
- concept cards pretending to come from high-risk body text

## Frontmatter Minimum

Every future reusable object should include:

```yaml
id:
title:
entity_type:
source_basis:
confidence:
source_ids: []
phase_groups: []
cross_cutting_domains: []
claim_scope:
status:
```

## Source Separation Rule

If you are unsure whether a sentence is:

- from the source
- from the user
- from AI inference

do not merge them. Split them into separate fields.

## Review Gate

Any contribution based on a user file must answer:

1. Is the file legally usable?
2. What exact basis is being claimed?
3. What confidence does this object deserve?
4. Is this general knowledge or a project overlay?

## Next-Step Policy

If a contributor is blocked by legal status, the correct action is:

- create intake metadata
- write the blocking note
- request or wait for a legal sidecar

The correct action is not to “just summarize it anyway.”
