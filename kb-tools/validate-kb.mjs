import fs from "node:fs";
import path from "node:path";
import {
  fileExists,
  kbRoot,
  loadJson,
  nowIso,
  openWebRoot,
  officialMetadataRoot,
  repoRoot,
  reportsRoot,
  writeText
} from "./_common.mjs";
import { loadKnowledgeRegistry, loadNormalizedCards, loadNormalizedWorks } from "./_library.mjs";

const registry = loadKnowledgeRegistry();
const works = loadNormalizedWorks();
const cards = loadNormalizedCards();
const libraryIndex = loadJson(path.join(kbRoot, "indexes", "library-index.json"), { items: [] });
const searchIndex = loadJson(path.join(kbRoot, "indexes", "search-index.json"), { items: [] });
const promptPackIndex = loadJson(path.join(kbRoot, "indexes", "prompt-pack-index.json"), { packs: [] });
const openManifest = loadJson(path.join(openWebRoot, "manifest.json"), { bundles: [], resources: [], errors: [] });
const officialManifest = loadJson(path.join(officialMetadataRoot, "manifest.json"), { records: [], errors: [] });
const userManifest = loadJson(path.join(kbRoot, "incoming", "user-supplied", "manifest.json"), { entries: [], ignored: [] });
const privateBookManifest = loadJson(path.join(kbRoot, "raw", "private-library", "manifest.json"), { entries: [], ignored: [] });
const extractManifest = loadJson(path.join(kbRoot, "raw", "private-library", "extract-manifest.json"), { entries: [] });

const errors = [];
const warnings = [];

function assertUnique(items, label) {
  const seen = new Set();
  for (const item of items) {
    if (seen.has(item.id)) {
      errors.push(`${label} id duplicated: ${item.id}`);
    }
    seen.add(item.id);
  }
}

assertUnique(registry.sources, "source");
assertUnique(registry.works, "work");
assertUnique(registry.materialRequests, "material request");
assertUnique(cards, "card");

for (const work of registry.works) {
  if (!registry.phaseGroupMap[work.phase_group]) {
    errors.push(`work ${work.id} references unknown phase_group ${work.phase_group}`);
  }
  if (!registry.deliverableMap[work.deliverable_type]) {
    errors.push(`work ${work.id} references unknown deliverable_type ${work.deliverable_type}`);
  }
  for (const sourceId of work.source_ids ?? []) {
    if (!registry.sourceMap[sourceId]) {
      errors.push(`work ${work.id} references unknown source ${sourceId}`);
    }
  }
  for (const themeId of work.theme_tags ?? []) {
    if (!registry.themeMap[themeId]) {
      errors.push(`work ${work.id} references unknown theme ${themeId}`);
    }
  }
  if (!work.summary?.trim()) {
    errors.push(`work ${work.id} is missing summary`);
  }
  if (!fileExists(path.join(kbRoot, "normalized", "works", `${work.id}.json`))) {
    errors.push(`normalized work file missing for ${work.id}`);
  }
}

for (const card of cards) {
  if (!registry.cardKindMap[card.card_kind]) {
    errors.push(`card ${card.id} references unknown card_kind ${card.card_kind}`);
  }
  if (card.phase_group && !registry.phaseGroupMap[card.phase_group]) {
    errors.push(`card ${card.id} references unknown phase_group ${card.phase_group}`);
  }
  if (card.deliverable_type && !registry.deliverableMap[card.deliverable_type]) {
    errors.push(`card ${card.id} references unknown deliverable_type ${card.deliverable_type}`);
  }
  for (const themeId of card.theme_tags ?? []) {
    if (!registry.themeMap[themeId]) {
      errors.push(`card ${card.id} references unknown theme ${themeId}`);
    }
  }
  for (const workId of card.related_work_ids ?? []) {
    if (!registry.workMap[workId]) {
      errors.push(`card ${card.id} references unknown related work ${workId}`);
    }
  }
  for (const localLink of card.local_links ?? []) {
    if (!fileExists(path.join(repoRoot, localLink.relative_path.replace(/\//g, path.sep)))) {
      warnings.push(`card ${card.id} local link missing: ${localLink.relative_path}`);
    }
  }
}

for (const pack of promptPackIndex.packs ?? []) {
  const absolutePackPath = path.join(repoRoot, pack.relative_markdown_path.replace(/\//g, path.sep));
  if (!fileExists(absolutePackPath)) {
    errors.push(`prompt pack missing: ${pack.relative_markdown_path}`);
  }
  for (const cardId of pack.card_ids ?? []) {
    if (!cards.find((card) => card.id === cardId)) {
      errors.push(`prompt pack ${pack.id} references unknown card ${cardId}`);
    }
  }
}

for (const work of works) {
  for (const file of work.local_files ?? []) {
    if (!fileExists(path.join(repoRoot, file.relative_path.replace(/\//g, path.sep)))) {
      errors.push(`work ${work.id} local file missing: ${file.relative_path}`);
    }
  }
}

const indexKeys = new Set((libraryIndex.items ?? []).map((item) => item.key));
const searchKeys = new Set((searchIndex.items ?? []).map((item) => item.key));
for (const work of works) {
  const key = `work:${work.id}`;
  if (!indexKeys.has(key)) {
    errors.push(`library index missing ${key}`);
  }
  if (!searchKeys.has(key)) {
    errors.push(`search index missing ${key}`);
  }
}
for (const card of cards) {
  const key = `card:${card.id}`;
  if (!indexKeys.has(key)) {
    errors.push(`library index missing ${key}`);
  }
  if (!searchKeys.has(key)) {
    errors.push(`search index missing ${key}`);
  }
}

const rootFiles = fs
  .readdirSync(kbRoot, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name !== "README.md")
  .map((entry) => entry.name);

for (const fileName of rootFiles) {
  const warning = `仓库根目录出现未纳入托管流程的文件：${fileName}`;
  warnings.push(warning);
  if (/anna.?s archive/i.test(fileName)) {
    warnings.push(`疑似第三方镜像来源文件，已排除在索引之外：${fileName}`);
  }
}

for (const ignored of userManifest.ignored ?? []) {
  warnings.push(`ignored incoming file: ${ignored.relative_path} (${ignored.reason})`);
}

for (const entry of privateBookManifest.entries ?? []) {
  if (!entry.matched_work_id) {
    warnings.push(`unmatched private book: ${entry.relative_path}`);
  }
  if (entry.source_review_status === "needs_review") {
    warnings.push(`private book source needs review: ${entry.relative_path}${entry.matched_work_id ? ` -> ${entry.matched_work_id}` : ""}`);
  }
}

for (const extraction of extractManifest.entries ?? []) {
  if (!["ok", "reused"].includes(extraction.extraction_status)) {
    warnings.push(`private extraction issue: ${extraction.relative_path} (${extraction.extraction_status})`);
  }
}

for (const error of officialManifest.errors ?? []) {
  warnings.push(`official metadata fetch issue: ${error.work_id} -> ${error.message}`);
}

const auditLines = [];
auditLines.push("# 来源审计");
auditLines.push("");
auditLines.push(`- 生成时间：${nowIso()}`);
auditLines.push(`- 开放全文资源：${openManifest.resources?.length ?? 0}`);
auditLines.push(`- 官方元数据快照：${(officialManifest.records ?? []).reduce((sum, record) => sum + (record.pages?.length ?? 0), 0)}`);
auditLines.push(`- 用户提供文件：${userManifest.entries?.length ?? 0}`);
auditLines.push(`- 私有书源发现：${privateBookManifest.entries?.length ?? 0}`);
auditLines.push(`- 私有书源已匹配：${(privateBookManifest.entries ?? []).filter((entry) => entry.matched_work_id).length}`);
auditLines.push(`- 私有书源已解析：${(extractManifest.entries ?? []).filter((entry) => ["ok", "reused"].includes(entry.extraction_status)).length}`);
auditLines.push(`- 校验错误：${errors.length}`);
auditLines.push(`- 校验警告：${warnings.length}`);
auditLines.push("");
auditLines.push("## 开放全文包");
auditLines.push("");
for (const bundle of openManifest.bundles ?? []) {
  auditLines.push(`- ${bundle.id}: ${bundle.actual_count}/${bundle.expected_count}`);
}
auditLines.push("");
auditLines.push("## 官方元数据快照");
auditLines.push("");
for (const record of officialManifest.records ?? []) {
  auditLines.push(`- ${record.work_id}: ${(record.pages ?? []).length} 页`);
}
auditLines.push("");
auditLines.push("## 用户文件");
auditLines.push("");
for (const entry of userManifest.entries ?? []) {
  auditLines.push(`- ${entry.file_name}${entry.matched_work_id ? ` -> ${entry.matched_work_id}` : ""}`);
}
auditLines.push("");
auditLines.push("## 私有书源");
auditLines.push("");
for (const entry of privateBookManifest.entries ?? []) {
  auditLines.push(`- ${entry.file_name}${entry.matched_work_id ? ` -> ${entry.matched_work_id}` : ""}`);
}
auditLines.push("");
auditLines.push("## 警告");
auditLines.push("");
if (warnings.length === 0) {
  auditLines.push("- 无");
} else {
  for (const warning of warnings) {
    auditLines.push(`- ${warning}`);
  }
}
auditLines.push("");
auditLines.push("## 错误");
auditLines.push("");
if (errors.length === 0) {
  auditLines.push("- 无");
} else {
  for (const error of errors) {
    auditLines.push(`- ${error}`);
  }
}

writeText(path.join(reportsRoot, "source-audit.md"), `${auditLines.join("\n").trim()}\n`);

console.log(`validation complete: ${errors.length} errors, ${warnings.length} warnings`);

if (errors.length > 0) {
  process.exitCode = 1;
}
