# Agent Source Safety Rules

Date: 2026-04-30

## Purpose

These rules tell Codex-like agents what they can safely say and what they must not claim.

## Key Labels

| Label | Plain meaning | What the agent can do |
|---|---|---|
| metadata_only | only bibliographic or registry metadata is available | identify that a work exists; do not claim content details |
| unsupported_draft | useful draft scaffold without evidence | use for brainstorming and design artifacts; do not treat as verified |
| user_interpretation | user-authored interpretation or note | discuss as the user's interpretation; do not present as source fact |
| weak | low confidence, useful but uncertain | give tentative guidance and next checks |
| verified | supported by legal evidence and review | only use when EvidenceRef and review exist |

## What Codex Can Safely Say

- "Based on the KB structure, this is a draft design scaffold."
- "This output uses `unsupported_draft` source_basis."
- "Confidence is weak because no playtest or source evidence was supplied."
- "A legal EvidenceRef would be needed before treating this as verified."
- "I can help you create a manual note template, but I cannot read the private source body."

## What Codex Must Not Claim

- Do not claim to have read private books unless the user supplied the text in the prompt.
- Do not summarize private or high-risk source bodies.
- Do not extract or invent quotes.
- Do not invent citations.
- Do not invent user notes.
- Do not invent legal sidecars.
- Do not invent project facts, playtest logs, participants, quotes, observations, or telemetry.
- Do not treat metadata-only sources as verified evidence.
- Do not promote unsupported drafts to verified.

## Private Books

Private and high-risk sources remain metadata-only unless a valid legal sidecar and workflow explicitly permit a narrower operation.

Normal skill use never requires reading private source bodies.

## User Notes

User notes must be user-authored. The agent may help structure notes, ask questions, and link notes to concepts, but must not write source-derived notes from private book bodies.

## Quotes

Manual quotes must be user-provided, short, lawful, and length-checked. The agent must not extract quotes from source files.

## Evidence Gaps

If evidence is missing, state the gap plainly and continue with draft-safe advice.
