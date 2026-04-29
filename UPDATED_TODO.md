# Updated TODO

Date: 2026-04-29

## Completed

- Master Framework acceptance review created.
- Benchmark smoke and regression run scaffolds created.
- Benchmark expanded to at least 100 cases.
- Benchmark dashboards and scoreboards created.
- Prompt library repaired for stronger diagnostic, artifact, and source-safety behavior.
- Routing layer repaired for problem-to-capability, lens, workflow, and artifact selection.
- AI Master Runtime Pack created.
- Runtime Pack acceptance review created.
- Benchmark acceptance review created.
- Readiness report updated for the benchmark/runtime hardening phase.

## Current Blockers

- Target AI outputs have not been supplied.
- Benchmark responses cannot be scored until raw target outputs exist.
- Capability and domain readiness remain not_tested until real scoring exists.
- User has not supplied a legal sidecar.
- User has not supplied manual notes.
- User has not supplied an optional lawful short manual quote.
- User has not supplied real project context.
- User has not supplied real playtest data.

## Next Engineering Work

Run the prepared benchmark against a real target AI and collect raw responses. Do not score missing responses and do not fabricate outputs.

## Next Exact Prompt

`begin-first-target-ai-benchmark-run-with-real-outputs`

## Later Work

- Score collected benchmark outputs.
- Repair prompts and routing only from real failures.
- Begin user reading notes intake only after the user supplies actual notes.
- Begin evidence-backed claim work only after EvidenceRefs exist.
- Begin project/playtest workflows only after real user project or playtest data exists.

## Ongoing Rules

- Do not parse high-risk source bodies.
- Do not summarize copyrighted books.
- Do not extract quotes from source files.
- Do not invent legal sidecars, user notes, quotes, projects, or playtests.
- Do not invent benchmark outputs or benchmark scores.
- Do not promote claims without EvidenceRefs and reviewer rationale.
