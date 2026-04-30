# Copy-Paste Prompts

These prompts are the small first-use kit. They intentionally do not ask the AI to parse private books, invent evidence, invent playtest results, or treat draft KB content as verified.

## How To Use

1. Give the AI the minimal context from [AI_CONTEXT_MINIMAL.md](AI_CONTEXT_MINIMAL.md).
2. Copy one prompt below.
3. Replace bracketed fields with your information.
4. Require the response footer with `source_basis`, confidence, assumptions, evidence gaps, and next action.

## 1. Route My Problem

> Use the Game Design Knowledgebase as an AI Game Design Master runtime. Route my problem to the right capability, lenses, workflow, and output artifact. Ask at most 3 high-value missing-input questions if needed. If you can proceed with assumptions, produce a partial artifact and label assumptions.
>
> My problem: [describe the problem]

## 2. Review A Vague Game Idea

> Use the KB as draft/source-governed scaffolding. Review this rough game idea and produce a one-page concept memo. Include core experience, player fantasy, likely loop, scope risks, 3 diagnostic questions, and one next action. Label `source_basis`, confidence, assumptions, and evidence gaps.
>
> Idea: [one or two sentences]

## 3. Define Core Experience

> Help me define the core experience for this game idea. Produce a core experience statement, player promise, 3 design pillars, what to exclude, and a smallest prototype question. Do not assume player reactions are proven.
>
> Idea/context: [text]

## 4. Run A Lens-Based Design Review

> Run a lens-based design review on this concept. Select 3 to 5 lenses, explain why each lens applies, ask only essential questions, and produce a prioritized issue list plus next design action. Mark all claims as draft unless evidence is supplied.
>
> Concept: [text]

## 5. Audit Meaningful Decisions

> Audit whether the player choices in this idea are meaningful. Produce a decision audit matrix with options, information available, tradeoff, consequence, reversibility, risk, reward, and fake-choice warning. Do not assume the choices work without playtest evidence.
>
> Choices or loop: [text]

## 6. Map A System Or Economy

> Map this system or economy. Produce a system map in text, identify resources, sources, sinks, loops, runaway risks, missing constraints, and one testable design question. Do not invent numbers or telemetry.
>
> System/economy description: [text]

## 7. Improve Game Feel Or UI Feedback

> Diagnose this game feel or UI feedback problem. Separate input, response, context, polish, information priority, and accessibility issues. Produce a tuning checklist or UI feedback audit. Do not invent player observations.
>
> Problem description: [text]

## 8. Teach Me A Game Design Concept

> Teach me this game design concept using the KB as draft/source-governed scaffolding. Explain it simply, give a small exercise, show when to use it, when not to use it, and what evidence would be needed to verify stronger claims.
>
> Concept: [concept name]

## 9. Create A Source-Safe Reading Plan

> Create a source-safe reading plan for improving this AI master capability. Use only metadata-level book routing and existing KB structures. Do not summarize chapters or claim the books say specific things unless evidence exists. Include note prompts I can answer manually.
>
> Capability or topic: [topic]

## 10. Check Whether A Claim Is Supported

> Check this claim for source safety. Classify whether it is unsupported_draft, metadata_only, user_interpretation, weak, or verified. Identify what evidence would be required before it can be used as a source-backed claim. Do not invent citations or EvidenceRefs.
>
> Claim: [claim text]

## Required Response Footer

Ask the AI to end with:

| Field | Required value |
|---|---|
| capability | chosen master capability |
| lenses | selected lenses or none with reason |
| workflow | selected workflow or none with reason |
| output_artifact | concrete artifact produced |
| source_basis | likely `unsupported_draft` or `metadata_only` unless evidence exists |
| confidence | likely `weak` unless evidence exists |
| assumptions | what the AI inferred |
| evidence_gaps | what is missing |
| next_action | one concrete next step |
