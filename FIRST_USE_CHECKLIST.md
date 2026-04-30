# First-Use Checklist

Use this after the AI answers your first prompt.

## A Useful First Answer Should Include

| Check | Pass if |
|---|---|
| artifact | The answer produced a concrete memo, matrix, map, plan, checklist, lesson, or evidence gap report. |
| capability | The answer chose a relevant AI Game Design Master capability. |
| lenses | The answer selected useful lenses or explained why none were needed. |
| workflow | The answer chose one workflow or explained why a workflow was not needed. |
| assumptions | The answer listed what it inferred from your prompt. |
| source_basis | The answer used a safe label such as `unsupported_draft` or `metadata_only`. |
| confidence | The answer used a realistic confidence label, usually `weak` unless evidence exists. |
| evidence gaps | The answer said what evidence is missing. |
| next action | The answer gave one concrete next step. |
| no fake evidence | The answer did not invent quotes, citations, user notes, legal sidecars, project facts, playtest data, telemetry, or benchmark results. |

## Good Enough For First Use

The answer is good enough if:

- it gives you one useful artifact;
- it marks uncertainty clearly;
- it does not pretend to be verified;
- it gives you one next action.

## Reject Or Rerun If

- It claims to have read private/high-risk book text.
- It summarizes a private chapter.
- It invents a quote or citation.
- It invents project facts or playtest results.
- It marks draft guidance as verified.
- It gives generic advice without an artifact.
- It asks a long questionnaire before helping.

## Rerun Prompt

If the first answer is weak, paste:

> Rerun this using the Game Design Knowledgebase runtime. Produce one concrete artifact first. Ask at most 3 missing-input questions. Label assumptions, `source_basis`, confidence, evidence gaps, and one next action. Do not invent evidence, quotes, project facts, or playtest results.
