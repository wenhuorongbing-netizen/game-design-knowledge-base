
# Knowledge Gap Backlog

## Summary

| Metric | Count |
|---|---:|
| validation warnings carried from Prompt 9 | 41 |
| weak coverage cells | 17 |
| missing coverage cells | 32 |
| high-risk sources needing user/legal action | 14 |

## Backlog Items

| gap_id | severity | affected_phase | affected_domain | affected_entities | why_it_matters | recommended_fix | required_source_basis | estimated_effort |
|---|---|---|---|---|---|---|---|---|
| gap_legal_sidecars | critical | all | all source-backed domains | src-archive-knowledge-7z; src-file-advanced-game-design-systems-approach-zlib; src-file-challenges-for-game-designers-zlib; src-file-characteristics-of-games-ann; src-file-game-design-workshop-zlib; src-file-game-feel-epub-zlib; src-file-game-feel-pdf-zlib; src-file-game-mechanics-epub-zlib; src-file-level-up-epub-zlib; src-file-play-matters-pdf-zlib; src-file-aesthetic-of-play-pdf-zlib; src-file-art-of-game-design-annas; src-file-game-design-reader-zlib; src-file-theory-of-fun-zlib | No commercial book body can be processed without legal confirmation. | User provides sidecar or lawful replacement per source. | user_legal_file or official_metadata | high |
| gap_user_notes | high | all | all | game-feel-a-game-designers-guide-to-virtual-sensation; play-matters; the-aesthetic-of-play; the-art-of-game-design-a-book-of-lenses; the-game-design-reader-a-rules-of-play-anthology; a-theory-of-fun-for-game-design; advanced-game-design-a-systems-approach; challenges-for-game-designers | Dossiers cannot become detailed without legal notes or user reading notes. | Add user reading notes for priority works. | user_manual_note | high |
| gap_chapter_maps | high | all | source routing | all BookDossier records | Chapter-level navigation is unavailable. | Add legal TOC metadata or user chapter notes. | official_metadata or user_manual_note | medium |
| gap_claim_evidence | high | all | all | claim_graph.json | Claims are draft placeholders. | Attach evidence_refs or keep claims as needs_evidence. | user_manual_note, official_metadata, open_fulltext, or user_legal_file | high |
| gap_card_related_work_warnings | medium | all | prompt_engineering; governance; production | 41 validation warnings | Importer warning count prevents clean release dashboard. | Attach governance docs as related sources or define exemption for governance cards. | user_manual_note or official_metadata | low |
| gap_project_overlay | high | all | production; playtesting | ProjectOverlay | KB cannot yet record real project application history. | Implement project overlay entity set and sample project. | project_application | medium |
| gap_forum_templates | medium | testing / review | community | forum templates | Forum discussion is not normalized into import/export graph. | Create forum thread schema files and example threads. | user_manual_note | medium |
| gap_playtest_logs | high | 测试 / 验收 / 审计 | playtesting | PlaytestLog | No claims can be playtest-validated. | Create playtest log template and run one project playtest. | playtest_observation | medium |
| gap_design_decisions | medium | 开发实�?| production | DesignDecision | Workflow outputs are not yet turned into durable decisions. | Create design decision log template and connect workflows. | project_application | medium |
| gap_quote_cards | medium | all | source evidence | QuoteCard | No legally allowed quotations are available. | User supplies short manual quotes with source details. | user_manual_quote | medium |
| gap_case_studies | medium | all | all | case_study_cards | The KB lacks concrete applied examples. | Create project-safe case studies from user projects or public/open examples. | user_manual_note or open_fulltext | high |
| gap_bookos_integration_test | medium | all | search/graph | GDKB importer | Exports exist but have not been imported into a live GDKB database. | Run seed import into GDKB and verify search/graph UI. | metadata_only plus generated exports | medium |
| gap_domain_vocab_migration | low | all | ontology | compatibility domain nodes | Prompt 9 generated compatibility nodes for old domain vocabulary. | Normalize older domain IDs into the Prompt 3 taxonomy. | user_manual_note | low |
| gap_coverage_weak_cells | medium | various | various | 17 weak coverage cells | Some phase/domain cells have shallow structural coverage. | Add targeted exercises, lenses, and workflow routing for weak cells. | unsupported_draft then user evidence | medium |
| gap_real_examples | high | all | all production domains | workflows and lessons | Workflows are usable but abstract. | Attach one real project example per major workflow family. | project_application | high |
