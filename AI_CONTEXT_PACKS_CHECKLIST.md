# AI Context Packs Maintenance Checklist

Date: 2026-04-30

Use this checklist before adding or changing a context pack.

## Required Sections

Every context pack must include:

- When To Use
- Files To Load
- Files Not Needed
- Max Recommended Context Size
- Required Safety Rules
- Recommended Prompt
- Expected Output Artifact

## Required Safety Rules

Every context pack must preserve these defaults:

- do not parse private or high-risk source bodies;
- do not summarize copyrighted or private chapters;
- do not extract or invent quotes;
- do not invent citations;
- do not invent EvidenceRefs;
- do not invent user notes;
- do not invent legal sidecars;
- do not invent project facts;
- do not invent playtest observations;
- do not invent telemetry;
- do not claim verified status without EvidenceRef and review;
- label assumptions, source_basis, confidence, evidence gaps, and next action.

## Required Exclusions

Every pack should explicitly exclude files not needed for the use case, especially:

- generated exports;
- benchmark internals;
- schema files;
- private source folders;
- deprecated material;
- legacy folders;
- evidence records unless the task requires evidence intake or claim safety.

## Pack Scope Rules

| Pack type | Rule |
|---|---|
| general use | keep smallest and safest; default to CP01. |
| task-specific use | include only the prompt, route, and safety files needed. |
| source safety | load CP06 and source-governance files; do not load private source bodies. |
| full runtime | keep CP07 available but not default. |

## Reject A Context Pack If

Reject or revise the pack if it:

- tells users to load the whole repo for normal use;
- includes generated exports as normal reading material;
- includes private source bodies;
- allows source-backed claims without evidence;
- omits source_basis or confidence rules;
- omits a concrete output artifact;
- lacks max context size guidance;
- asks for benchmark internals when not benchmarking.

