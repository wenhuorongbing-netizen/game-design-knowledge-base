# Worked Examples Maintenance Checklist

Date: 2026-04-30

Use this checklist before adding or changing a worked example.

## Required Safety Labels

Each worked example must include this label line near the top:

Labels: demo_only, synthetic_example, not_user_evidence, not_project_evidence, not_benchmark_result, not_verified_claim.

## Required Sections

Every worked example must include:

- User Input
- Prompt Used
- Example AI Output
- Why This Output Is Useful
- Assumptions
- Source_basis
- Confidence
- Evidence Gaps
- What This Example Does Not Prove
- How User Can Adapt It

## Required Source Safety

Each example must:

- use fictional or generic input only;
- avoid private source body text;
- avoid book chapter summaries;
- avoid quotations from books;
- avoid invented benchmark outputs;
- avoid invented playtest results;
- avoid invented user notes;
- avoid invented legal sidecars;
- avoid verified claims.

## Required Output Behavior

Each example should show:

- one concrete artifact;
- assumptions;
- source_basis;
- confidence;
- evidence gaps;
- a safe next action.

## Reject The Example If

Reject or revise the example if it:

- presents itself as real evidence;
- implies a real user project exists;
- implies real playtest data exists;
- says a claim is verified without EvidenceRef and review;
- cites or quotes a book without supplied legal evidence;
- uses source_basis stronger than the example supports;
- omits what the example does not prove.

