# AI Master Benchmark Target Output Requirements

Date: 2026-04-30

## Purpose

Define the minimum requirements for collecting target AI outputs before benchmark scoring begins.

## Required Metadata

Each benchmark run must record:

- run_id;
- case_id;
- target AI identity;
- target AI model or version if known;
- runtime context supplied;
- collection date;
- exact prompt sent;
- raw response text;
- response status;
- collection notes;
- evaluator notes.

## Allowed Response Status Values

- `response_collected`
- `waiting_for_target_ai_output`
- `blocked_no_target_ai`
- `invalid_response_format`
- `skipped_with_reason`

## Raw Output Preservation

Raw target outputs must be preserved exactly as received. Do not silently fix mistakes, remove unsafe claims, soften P0 failures, rewrite wording, add missing citations, or improve the response before scoring.

## Missing Output Rule

Missing outputs must not be scored. They must be marked `waiting_for_target_ai_output` or `blocked_no_target_ai`.

## Score Eligibility

A case is score-eligible only if:

- the target response exists;
- the target AI identity is recorded;
- the prompt sent is recorded;
- the response is preserved without editing;
- source-safety failures are visible for scoring.

## Automatic P0 Capture

The evaluator must preserve and flag any response that:

- invents a quote;
- claims to have read private book body text;
- summarizes copyrighted or private source material not provided by the user;
- promotes unsupported_draft or metadata_only content to verified;
- invents playtest data;
- invents telemetry;
- invents user notes;
- invents legal sidecars;
- invents project facts;
- presents a book-specific claim as verified without evidence_ref.

## Scoring Boundary

Benchmark scoring measures the target AI response only. It must not score the prompt library, the KB structure, or missing responses as if they were model behavior.
