# Hands-On Prompt Pack Checklist

Use this checklist before adding or changing a hands-on prompt.

## Required Sections

Every prompt file must include:

- `## Use Case`
- `## Copy-Paste Prompt`
- `## What To Replace`
- `## What AI Should Produce`
- `## Output Format`
- `## Source And Confidence Rules`
- `## No Fake Evidence Rule`
- `## Follow-Up Prompt`
- `## Self-Check Prompt`

## Required Prompt Rules

Every copy-paste prompt must explicitly tell the AI to:

- not invent facts;
- label assumptions;
- label `source_basis`;
- label confidence;
- ask at most 3 high-value questions if needed;
- produce a concrete artifact;
- not cite books unless evidence is available;
- not claim verified status without EvidenceRef and review;
- not parse private or high-risk source bodies;
- not invent evidence, quotes, notes, sidecars, project facts, playtest results, telemetry, or benchmark outputs.

## Required Artifact Rule

Each prompt must produce one concrete artifact, such as:

- concept memo;
- core experience statement;
- diagnostic question set;
- lens review report;
- decision audit matrix;
- system map;
- economy table;
- feel checklist;
- UI feedback audit;
- narrative-mechanic alignment map;
- prototype plan;
- playtest plan;
- mini lesson;
- reading plan;
- claim safety report;
- pitch critique.

## Required Footer Rule

Each prompt must require:

| Field | Required? |
|---|---|
| capability | yes |
| lenses | yes, or none with reason |
| workflow | yes, or none with reason |
| artifact | yes |
| source_basis | yes |
| confidence | yes |
| assumptions | yes |
| evidence gaps | yes |
| next action | yes |

## Reject A Prompt If

- It asks the AI to summarize private or high-risk source bodies.
- It asks the AI to invent evidence.
- It asks for book citations without EvidenceRefs.
- It treats metadata-only routing as verified knowledge.
- It asks for playtest results that do not exist.
- It asks for project facts the user did not supply.
- It produces advice but no artifact.
- It omits source/confidence labels.

## Review Cadence

Review this prompt pack after:

- real first-use smoke tests;
- target AI output collection;
- user reports of confusing prompts;
- new use-case additions;
- changes to source-governance policy.
