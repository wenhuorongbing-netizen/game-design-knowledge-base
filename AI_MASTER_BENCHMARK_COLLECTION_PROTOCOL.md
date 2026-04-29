# AI Master Benchmark Collection Protocol

Date: 2026-04-29

## Purpose

This protocol defines how to collect target AI responses for Smoke Test Batch 001 without fabricating outputs or weakening source governance.

## Collection Rule

Target AI responses must be real outputs from a named model, agent, or runtime configuration. If no target output is available, the benchmark must remain blocked or waiting. Empty response slots must never be scored.

## Prohibited Actions

- Do not fabricate target AI outputs.
- Do not score empty responses.
- Do not repair weak responses before scoring.
- Do not parse private or high-risk source bodies.
- Do not invent legal sidecars, user notes, manual quotes, project facts, or playtest logs.
- Do not promote any claim to verified.

## Required Collection Metadata

For every collected response, record:

- case_id;
- prompt sent to target AI;
- target AI identity;
- response text;
- response_status;
- collection_notes;
- evaluator_notes;
- date collected;
- whether source-policy instructions were included.

## Allowed Response Status Values

| Status | Meaning |
|---|---|
| response_collected | A real target AI response was captured and preserved without edits. |
| waiting_for_target_ai_output | A target model exists, but output has not yet been collected. |
| blocked_no_target_ai | No target AI/model/runtime has been provided. |
| invalid_response_format | A response exists but is unusable for benchmark scoring. |
| skipped_with_reason | The case was deliberately skipped and reason is recorded. |

## Collection Procedure

1. Select target AI system and record identity in `AI_MASTER_BENCHMARK_TARGET_MODEL_NOTES.md`.
2. Send each case prompt exactly as listed in `AI_MASTER_BENCHMARK_RUN_001_RESPONSES.md`.
3. Preserve the full response text without cleanup.
4. Mark response status.
5. Do not score until response collection is complete or intentionally partial.
6. Score only real responses using `AI_MASTER_BENCHMARK_SCORING_TEMPLATE.md`.

## Current State

Run 001 is blocked because no target AI outputs or target AI identity were supplied in the current task.

