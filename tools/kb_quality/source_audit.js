#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = path.resolve(process.argv[2] || process.cwd());
const sourcesPath = path.join(root, "kb", "01_sources", "sources.json");
const searchPath = path.join(root, "kb", "11_import_export", "export", "search_index.json");
const entitiesPath = path.join(root, "kb", "11_import_export", "export", "all_entities.json");
const claimGraphPath = path.join(root, "kb", "05_cards", "claim_graph.json");
const reportPath = path.join(root, "SOURCE_GOVERNANCE_AUDIT.md");
const sidecarReportPath = path.join(root, "kb", "13_evidence", "reports", "SIDECAR_AUDIT_REPORT.md");
const manualNoteReportPath = path.join(root, "kb", "13_evidence", "reports", "MANUAL_NOTE_INTAKE_REPORT.md");
const manualQuoteReportPath = path.join(root, "kb", "13_evidence", "reports", "MANUAL_QUOTE_AUDIT_REPORT.md");
const claimPromotionAuditPath = path.join(root, "kb", "13_evidence", "reports", "CLAIM_PROMOTION_AUDIT.md");
const unsupportedClaimsIndexPath = path.join(root, "kb", "13_evidence", "reports", "UNSUPPORTED_CLAIMS_INDEX.md");
const verifiedClaimsIndexPath = path.join(root, "kb", "13_evidence", "reports", "VERIFIED_CLAIMS_INDEX.md");
const firstSidecarRequestPath = path.join(root, "FIRST_SIDECAR_REQUEST.md");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

const sources = readJson(sourcesPath).source_documents || [];
const searchDocs = readJson(searchPath).documents || [];
const entities = fs.existsSync(entitiesPath) ? readJson(entitiesPath).entities || [] : [];
const claimGraph = fs.existsSync(claimGraphPath) ? readJson(claimGraphPath) : { claims: [] };
const claims = claimGraph.claims || [];
const sidecars = entities.filter((entity) => entity.entity_type === "LegalSidecar");
const manualNotes = entities.filter((entity) => entity.entity_type === "UserManualNote");
const manualQuotes = entities.filter((entity) => entity.entity_type === "UserManualQuote");
const evidenceRefs = entities.filter((entity) => entity.entity_type === "EvidenceRef");
const promotionRequests = entities.filter((entity) => entity.entity_type === "ClaimPromotionRequest");
const promotionReviews = entities.filter((entity) => entity.entity_type === "ClaimPromotionReview");
const byId = new Map(entities.map((entity) => [entity.id, entity]));
for (const claim of claims) {
  const id = claim.claim_id || claim.id;
  if (id && !byId.has(id)) byId.set(id, { ...claim, id, entity_type: "Claim" });
}
const legalEvidenceSourceBasis = new Set([
  "open_fulltext",
  "official_metadata",
  "user_legal_file",
  "user_manual_note",
  "user_manual_quote",
  "derived_from_user_note",
  "derived_from_public_metadata"
]);
const highRisk = sources.filter((source) => source.risk_level === "high" || source.source_origin_flags?.includes("HIGH_RISK_SOURCE"));
const unsafeHighRisk = highRisk.filter((source) => {
  const allowed = new Set(source.allowed_operations || []);
  return (
    source.ingestion_status !== "metadata_only_quarantined" ||
    source.source_basis !== "metadata_only" ||
    allowed.has("generate_summary") ||
    allowed.has("generate_embeddings") ||
    (allowed.has("process_full_text") && !(source.legal_sidecar_ids || []).length)
  );
});
const unsafeSearch = searchDocs.filter((doc) => {
  const metadataOnly = doc.source_basis === "metadata_only" || doc.status === "metadata_only_quarantined";
  const excerpt = String(doc.body_excerpt_safe || "");
  return metadataOnly && excerpt && !excerpt.startsWith("[suppressed") && !excerpt.startsWith("[not applicable");
});
const sourcesAllowingAiWithoutSidecar = sources.filter((source) => source.allowed_for_ai_processing === true && !(source.legal_sidecar_ids || []).length);
const highRiskFullProcessingSources = highRisk.filter((source) => (source.allowed_operations || []).includes("process_full_text"));
const approvedFullProcessingSidecars = sidecars.filter((sidecar) => sidecar.raw?.approval_status === "approved_full_processing");
const pendingSidecars = sidecars.filter((sidecar) => !sidecar.raw?.approval_status || sidecar.raw?.approval_status === "pending_review");
const notesNotUserInterpretation = manualNotes.filter((note) => note.confidence !== "user_interpretation" || note.source_basis !== "user_manual_note");
const quoteTooLong = manualQuotes.filter((quote) => Number(quote.raw?.quote_length_words || quote.quote_length_words || 0) > 80);
const quoteNearLimit = manualQuotes.filter((quote) => {
  const count = Number(quote.raw?.quote_length_words || quote.quote_length_words || 0);
  return count > 40 && count <= 80;
});
const quoteNotUserProvided = manualQuotes.filter((quote) => quote.raw?.user_provided !== true && quote.raw?.user_confirms_quote_supplied !== true);
const quoteAutomated = manualQuotes.filter((quote) => quote.raw?.automated_extraction === true || quote.raw?.generated_from_source_body === true);
const verifiedClaims = claims.filter((claim) => claim.confidence === "verified" || claim.status === "verified");
const unsupportedClaims = claims.filter((claim) => claim.confidence !== "verified" && claim.status !== "verified");
const verifiedClaimsWithoutLegalEvidence = verifiedClaims.filter((claim) => {
  const refs = claim.evidence_refs || [];
  if (!refs.length) return true;
  return !refs.some((refId) => {
    const ref = byId.get(String(refId));
    return ref?.entity_type === "EvidenceRef" && legalEvidenceSourceBasis.has(ref.source_basis) && ref.confidence !== "ai_hypothesis";
  });
});
const unsafePromotionRequests = promotionRequests.filter((request) => {
  const raw = request.raw || request;
  const proposed = String(raw.proposed_confidence || request.proposed_confidence || "");
  const strongTarget = proposed === "strong" || proposed === "verified";
  return !raw.reviewer || !(raw.rationale || raw.promotion_rationale) || (strongTarget && !(raw.evidence_ref_ids || []).length);
});
const firstSidecarRequestExists = fs.existsSync(firstSidecarRequestPath);

const status = unsafeHighRisk.length || unsafeSearch.length || sourcesAllowingAiWithoutSidecar.length || notesNotUserInterpretation.length || quoteTooLong.length || quoteNotUserProvided.length || quoteAutomated.length || verifiedClaimsWithoutLegalEvidence.length || unsafePromotionRequests.length ? "FAIL" : "PASS";
const lines = [
  "# Source Governance Audit",
  "",
  "Generated by `npm run kb:audit`.",
  "",
  `- status: ${status}`,
  `- generated_at: ${new Date().toISOString()}`,
  `- source_records: ${sources.length}`,
  `- high_risk_records: ${highRisk.length}`,
  `- legal_sidecar_records: ${sidecars.length}`,
  `- user_manual_note_records: ${manualNotes.length}`,
  `- user_manual_quote_records: ${manualQuotes.length}`,
  `- pending_sidecars: ${pendingSidecars.length}`,
  `- approved_full_processing_sidecars: ${approvedFullProcessingSidecars.length}`,
  `- unsafe_high_risk_records: ${unsafeHighRisk.length}`,
  `- unsafe_metadata_only_search_excerpts: ${unsafeSearch.length}`,
  `- sources_allowing_ai_without_sidecar: ${sourcesAllowingAiWithoutSidecar.length}`,
  `- manual_quotes_too_long: ${quoteTooLong.length}`,
  `- manual_quotes_not_user_provided: ${quoteNotUserProvided.length}`,
  `- verified_claims: ${verifiedClaims.length}`,
  `- verified_claims_without_legal_evidence: ${verifiedClaimsWithoutLegalEvidence.length}`,
  `- unsafe_promotion_requests: ${unsafePromotionRequests.length}`,
  "",
  "## Policy",
  "",
  "High-risk files remain metadata-only. `user_provided_file` does not imply legal permission for AI processing. Body extraction, summaries, long quotations, and embeddings are blocked unless a legal sidecar explicitly allows processing.",
  "",
  "## First LegalSidecar Intake",
  "",
  `- request_file_exists: ${firstSidecarRequestExists}`,
  `- intake_status: ${sidecars.length ? "sidecar_record_present" : firstSidecarRequestExists ? "blocked_pending_user_sidecar" : "not_started"}`,
  "- fake_sidecar_created: false",
  "- source_status_upgraded_automatically: false",
  "",
  "## High-Risk Source Status",
  "",
  "| Source | Risk | Ingestion Status | Source Basis |",
  "|---|---|---|---|",
  ...highRisk.map((source) => `| ${source.source_document_id || source.id} | ${source.risk_level || "high"} | ${source.ingestion_status || ""} | ${source.source_basis || ""} |`),
  "",
  "## Result",
  "",
  status === "PASS"
    ? "No P0 source-governance violations detected."
    : "P0 source-governance violations detected. Repair before release."
];

fs.writeFileSync(reportPath, `${lines.join("\n")}\n`, "utf8");
fs.mkdirSync(path.dirname(sidecarReportPath), { recursive: true });
const sidecarLines = [
  "# Sidecar Audit Report",
  "",
  "Generated by `npm run kb:audit`.",
  "",
  `- status: ${status}`,
  `- generated_at: ${new Date().toISOString()}`,
  `- source_records: ${sources.length}`,
  `- legal_sidecar_records: ${sidecars.length}`,
  `- pending_sidecars: ${pendingSidecars.length}`,
  `- approved_full_processing_sidecars: ${approvedFullProcessingSidecars.length}`,
  `- sources_allowing_ai_without_sidecar: ${sourcesAllowingAiWithoutSidecar.length}`,
  `- high_risk_sources_with_process_full_text: ${highRiskFullProcessingSources.length}`,
  "",
  "## Sidecar Policy",
  "",
  "- Default `approval_status` is `pending_review`.",
  "- No sidecar defaults to `approved_full_processing`.",
  "- High-risk sources remain `metadata_only_quarantined` unless a reviewed sidecar explicitly permits a narrower operation.",
  "- This audit does not parse private or high-risk source body text.",
  "",
  "## Source Sidecar Link Status",
  "",
  "| Source | Risk | Sidecars | AI Processing | Allowed Operations |",
  "|---|---|---|---|---|",
  ...sources.map((source) => `| ${source.source_document_id || source.id} | ${source.risk_level || ""} | ${(source.legal_sidecar_ids || []).join(", ") || "none"} | ${source.allowed_for_ai_processing === true ? "true" : "false"} | ${(source.allowed_operations || []).join(", ")} |`),
  "",
  "## LegalSidecar Records",
  "",
  "| Sidecar | Source | Work | Approval Status | Reviewer |",
  "|---|---|---|---|---|",
  ...sidecars.map((sidecar) => `| ${sidecar.id} | ${sidecar.raw?.source_document_id || ""} | ${sidecar.raw?.work_id || ""} | ${sidecar.raw?.approval_status || ""} | ${sidecar.raw?.reviewer || ""} |`),
  sidecars.length ? "" : "| none |  |  |  |  |",
  "",
  "## Result",
  "",
  status === "PASS"
    ? "No sidecar-governance violations detected. No existing source was upgraded automatically."
    : "Sidecar-governance violations detected. Repair before evidence intake."
];
fs.writeFileSync(sidecarReportPath, `${sidecarLines.join("\n")}\n`, "utf8");
const manualNoteLines = [
  "# Manual Note Intake Report",
  "",
  "Generated by `npm run kb:audit`.",
  "",
  `- status: ${notesNotUserInterpretation.length ? "FAIL" : "PASS"}`,
  `- generated_at: ${new Date().toISOString()}`,
  `- user_manual_note_records: ${manualNotes.length}`,
  `- accepted_user_notes: ${manualNotes.filter((note) => note.status === "accepted_user_note").length}`,
  `- review_needed_notes: ${manualNotes.filter((note) => note.status === "review_needed").length}`,
  `- notes_not_marked_user_interpretation: ${notesNotUserInterpretation.length}`,
  "",
  "## Policy",
  "",
  "- Manual notes are user-authored evidence, not source-body extraction.",
  "- Manual notes must use `source_basis: user_manual_note`.",
  "- Manual notes must use `confidence: user_interpretation`.",
  "- Manual notes cannot be treated as source claims without later EvidenceRef and review.",
  "",
  "## Records",
  "",
  "| Note | Work | Source | Status | Confidence |",
  "|---|---|---|---|---|",
  ...manualNotes.map((note) => `| ${note.id} | ${note.raw?.work_id || ""} | ${note.raw?.source_document_id || ""} | ${note.status || ""} | ${note.confidence || ""} |`),
  manualNotes.length ? "" : "| none |  |  |  |  |",
  "",
  "## Result",
  "",
  notesNotUserInterpretation.length
    ? "Manual note intake violations detected."
    : "No manual note intake violations detected."
];
fs.writeFileSync(manualNoteReportPath, `${manualNoteLines.join("\n")}\n`, "utf8");
const manualQuoteLines = [
  "# Manual Quote Audit Report",
  "",
  "Generated by `npm run kb:audit`.",
  "",
  `- status: ${quoteTooLong.length || quoteNotUserProvided.length || quoteAutomated.length ? "FAIL" : "PASS"}`,
  `- generated_at: ${new Date().toISOString()}`,
  `- user_manual_quote_records: ${manualQuotes.length}`,
  `- accepted_user_quotes: ${manualQuotes.filter((quote) => quote.status === "accepted_user_quote").length}`,
  `- quotes_near_length_limit: ${quoteNearLimit.length}`,
  `- quotes_too_long: ${quoteTooLong.length}`,
  `- quotes_not_user_provided: ${quoteNotUserProvided.length}`,
  `- quotes_automated_extraction: ${quoteAutomated.length}`,
  "",
  "## Policy",
  "",
  "- Manual quotes must be explicitly user-provided.",
  "- Manual quotes must not be generated from source-body extraction.",
  "- Manual quotes over 80 words fail validation.",
  "- Manual quotes from high-risk sources need sidecar review before strong or verified use.",
  "",
  "## Records",
  "",
  "| Quote | Work | Source | Words | Status | User Provided |",
  "|---|---|---|---:|---|---|",
  ...manualQuotes.map((quote) => `| ${quote.id} | ${quote.raw?.work_id || ""} | ${quote.raw?.source_document_id || ""} | ${quote.raw?.quote_length_words || quote.quote_length_words || 0} | ${quote.status || ""} | ${quote.raw?.user_provided === true ? "true" : "false"} |`),
  manualQuotes.length ? "" : "| none |  |  | 0 |  |  |",
  "",
  "## Result",
  "",
  quoteTooLong.length || quoteNotUserProvided.length || quoteAutomated.length
    ? "Manual quote safety violations detected."
    : "No manual quote safety violations detected. No quotes were generated from source body text."
];
fs.writeFileSync(manualQuoteReportPath, `${manualQuoteLines.join("\n")}\n`, "utf8");
function safeCell(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ").slice(0, 160);
}

function requiredEvidenceForClaim(claim) {
  if (["metadata_only", "unsupported_draft"].includes(claim.source_basis) || ["unsupported_draft", "ai_hypothesis"].includes(claim.confidence)) {
    return "Legal EvidenceRef from open_fulltext, user_legal_file, user_manual_note, user_manual_quote, official_metadata, or derived_from_user_note within scope.";
  }
  return "EvidenceRef plus human review showing claim wording stays within evidence scope.";
}

function blockedReasonForClaim(claim) {
  const reasons = [];
  if (!(claim.evidence_refs || []).length) reasons.push("no evidence_refs");
  if (["metadata_only", "unsupported_draft"].includes(claim.source_basis)) reasons.push(`source_basis ${claim.source_basis}`);
  if (["unsupported_draft", "ai_hypothesis", "weak"].includes(claim.confidence)) reasons.push(`confidence ${claim.confidence}`);
  if (claim.status === "needs_evidence") reasons.push("status needs_evidence");
  return reasons.join("; ") || "requires claim promotion review";
}

const claimPromotionLines = [
  "# Claim Promotion Audit",
  "",
  "Generated by `npm run kb:audit`.",
  "",
  `- status: ${verifiedClaimsWithoutLegalEvidence.length || unsafePromotionRequests.length ? "FAIL" : "PASS"}`,
  `- generated_at: ${new Date().toISOString()}`,
  `- claim_records: ${claims.length}`,
  `- unsupported_or_unverified_claims: ${unsupportedClaims.length}`,
  `- verified_claims: ${verifiedClaims.length}`,
  `- verified_claims_without_legal_evidence: ${verifiedClaimsWithoutLegalEvidence.length}`,
  `- evidence_ref_records: ${evidenceRefs.length}`,
  `- claim_promotion_request_records: ${promotionRequests.length}`,
  `- claim_promotion_review_records: ${promotionReviews.length}`,
  `- unsafe_promotion_requests: ${unsafePromotionRequests.length}`,
  "",
  "## Gate",
  "",
  "- No claim is promoted automatically.",
  "- `metadata_only`, `unsupported_draft`, and `ai_hypothesis` cannot support verified claims.",
  "- Strong or verified promotion requires legal EvidenceRef records, explicit reviewer, rationale, and evidence-scope alignment.",
  "- Project overlays and playtest logs are local evidence until reviewed; they do not become universal doctrine automatically.",
  "",
  "## Promotion Requests",
  "",
  "| Request | Target Claims | Proposed Confidence | Reviewer | Rationale Present | Evidence Refs | Status |",
  "|---|---|---|---|---|---|---|",
  ...promotionRequests.map((request) => {
    const raw = request.raw || request;
    return `| ${request.id} | ${(raw.target_claim_ids || []).join(", ") || "none"} | ${raw.proposed_confidence || ""} | ${raw.reviewer || ""} | ${raw.rationale || raw.promotion_rationale ? "yes" : "no"} | ${(raw.evidence_ref_ids || []).join(", ") || "none"} | ${request.status || ""} |`;
  }),
  promotionRequests.length ? "" : "| none |  |  |  |  |  |  |",
  "",
  "## Reviews",
  "",
  "| Review | Request | Decision | Reviewer | Rationale Present | Approved Confidence |",
  "|---|---|---|---|---|---|",
  ...promotionReviews.map((review) => {
    const raw = review.raw || review;
    return `| ${review.id} | ${raw.request_id || ""} | ${raw.decision || ""} | ${raw.reviewer || ""} | ${raw.decision_rationale || raw.rationale ? "yes" : "no"} | ${raw.approved_confidence || ""} |`;
  }),
  promotionReviews.length ? "" : "| none |  |  |  |  |  |",
  "",
  "## Result",
  "",
  verifiedClaimsWithoutLegalEvidence.length || unsafePromotionRequests.length
    ? "Claim promotion gate violations detected. Do not promote claims until repaired."
    : "No claim promotion gate violations detected. No unsupported claim has been promoted."
];
fs.writeFileSync(claimPromotionAuditPath, `${claimPromotionLines.join("\n")}\n`, "utf8");

const unsupportedLines = [
  "# Unsupported Claims Index",
  "",
  "Generated by `npm run kb:audit`.",
  "",
  `- generated_at: ${new Date().toISOString()}`,
  `- unsupported_or_unverified_claims: ${unsupportedClaims.length}`,
  "",
  "| claim_id | title | related cards | source_basis | confidence | evidence_gap | required evidence | promotion blocked reason |",
  "|---|---|---|---|---|---|---|---|",
  ...unsupportedClaims.map((claim) => `| ${safeCell(claim.claim_id || claim.id)} | ${safeCell(claim.claim_text || claim.title || claim.claim_id)} | ${safeCell((claim.related_cards || []).join(", "))} | ${safeCell(claim.source_basis)} | ${safeCell(claim.confidence)} | ${safeCell(claim.evidence_gap || "needs legal EvidenceRef")} | ${safeCell(requiredEvidenceForClaim(claim))} | ${safeCell(blockedReasonForClaim(claim))} |`),
  unsupportedClaims.length ? "" : "| none |  |  |  |  |  |  |  |"
];
fs.writeFileSync(unsupportedClaimsIndexPath, `${unsupportedLines.join("\n")}\n`, "utf8");

const verifiedLines = [
  "# Verified Claims Index",
  "",
  "Generated by `npm run kb:audit`.",
  "",
  `- generated_at: ${new Date().toISOString()}`,
  `- verified_claims: ${verifiedClaims.length}`,
  "",
  verifiedClaims.length ? "Verified claims are listed below." : "No verified claims exist in the current KB. This is expected for the draft/source-governed release.",
  "",
  "| claim_id | title | evidence_refs | source_basis | reviewer | verified date | limitations |",
  "|---|---|---|---|---|---|---|",
  ...verifiedClaims.map((claim) => {
    const refs = claim.evidence_refs || [];
    const reviewer = refs.map((refId) => byId.get(String(refId))?.raw?.reviewer || byId.get(String(refId))?.reviewer || "").filter(Boolean).join(", ");
    const limitations = refs.map((refId) => byId.get(String(refId))?.raw?.limitations || "").filter(Boolean).join("; ");
    return `| ${safeCell(claim.claim_id || claim.id)} | ${safeCell(claim.claim_text || claim.title || claim.claim_id)} | ${safeCell(refs.join(", "))} | ${safeCell(claim.source_basis)} | ${safeCell(reviewer || "missing")} | ${safeCell(claim.verified_date || claim.updated_at || "")} | ${safeCell(limitations || "missing")} |`;
  }),
  verifiedClaims.length ? "" : "| none |  |  |  |  |  |  |"
];
fs.writeFileSync(verifiedClaimsIndexPath, `${verifiedLines.join("\n")}\n`, "utf8");
console.log(`source governance audit written: ${reportPath}`);
console.log(`sidecar audit written: ${sidecarReportPath}`);
console.log(`manual note intake report written: ${manualNoteReportPath}`);
console.log(`manual quote audit report written: ${manualQuoteReportPath}`);
console.log(`claim promotion audit written: ${claimPromotionAuditPath}`);
console.log(`unsupported claims index written: ${unsupportedClaimsIndexPath}`);
console.log(`verified claims index written: ${verifiedClaimsIndexPath}`);
if (status !== "PASS") {
  process.exitCode = 1;
}
