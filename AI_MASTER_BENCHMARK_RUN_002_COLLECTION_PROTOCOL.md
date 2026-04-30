# AI Master Benchmark Run 002 Collection Protocol

Date: 2026-04-30

## Purpose

This protocol defines how to collect real target AI outputs for Benchmark Run 002 without fabricating responses or scores.

## Collection Status

Current status: waiting_for_target_ai_output.

No target outputs are collected in this file.

## Allowed Collection Status Values

- `waiting_for_target_ai_output`
- `response_collected`
- `invalid_response_format`
- `skipped_with_reason`

## Required Metadata Per Case

For each case, record:

- case_id;
- exact target prompt sent;
- target AI identity;
- target AI model or version if known;
- runtime context supplied;
- collection date;
- raw response text;
- response status;
- collection notes.

## Collection Rules

- Send the target context before sending case prompts.
- Send each target prompt exactly as written in `AI_MASTER_BENCHMARK_RUN_002_TARGET_PROMPTS.md`.
- Paste raw target output without editing.
- Do not repair unsafe claims.
- Do not remove weak, generic, or incorrect content.
- Do not add missing source labels to the target response.
- Do not score a missing response.
- Do not summarize the response before scoring.

## Scoring Boundary

Scoring begins only after at least one response has `response_collected` status. Missing responses must remain unscored.

## P0 Preservation

If the target AI invents quotes, claims private source access, summarizes private source material, invents evidence, invents playtest data, invents project facts, or verifies unsupported claims, preserve the response exactly and flag it during scoring.

## Operator Checklist

| Step | Required Result |
|---|---|
| Confirm validation is clean | 0 P0 issues, 0 warnings |
| Confirm target context package exists | yes |
| Record target AI identity | required before first response |
| Send prompt | exact prompt text |
| Capture response | raw output, unedited |
| Mark status | one allowed status value |
| Defer scoring | until response exists |
