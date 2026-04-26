import fs from "node:fs";
import path from "node:path";
import {
  compact,
  ensureDir,
  extractMarkdownHeadings,
  fileExists,
  kbRoot,
  loadJson,
  markdownToHtml,
  normalizedCardsRoot,
  normalizedWorksRoot,
  nowIso,
  openWebRoot,
  officialMetadataRoot,
  rawRoot,
  readText,
  repoRoot,
  registryRoot,
  relativeToRepo,
  stripMarkdown,
  writeJson,
  writeText
} from "./_common.mjs";
import { extractLeadParagraph, groupBy, loadKnowledgeRegistry } from "./_library.mjs";

const registry = loadKnowledgeRegistry();
const openManifest = loadJson(path.join(openWebRoot, "manifest.json"), { resources: [] });
const officialManifest = loadJson(path.join(officialMetadataRoot, "manifest.json"), { records: [] });
const userManifest = loadJson(path.join(kbRoot, "incoming", "user-supplied", "manifest.json"), { entries: [] });
const extractManifest = loadJson(path.join(rawRoot, "private-library", "extract-manifest.json"), { entries: [] });
const comparisonSeeds = loadJson(path.join(registryRoot, "comparison-seeds.json"), []);

ensureDir(normalizedWorksRoot);
ensureDir(normalizedCardsRoot);

for (const root of [normalizedWorksRoot, normalizedCardsRoot]) {
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (entry.isFile() && [".json", ".md"].includes(path.extname(entry.name).toLowerCase())) {
      fs.unlinkSync(path.join(root, entry.name));
    }
  }
}

const openByBundle = groupBy(openManifest.resources ?? [], (resource) => resource.bundle_id);
const officialByWork = groupBy(officialManifest.records ?? [], (record) => record.work_id);
const userByWork = groupBy(
  (userManifest.entries ?? []).filter((entry) => entry.matched_work_id),
  (entry) => entry.matched_work_id
);
const extractsByWork = groupBy(
  (extractManifest.entries ?? []).filter((entry) => entry.matched_work_id),
  (entry) => entry.matched_work_id
);

function titleCaseLinks(links) {
  return (links ?? []).map((url) => ({
    label: new URL(url).hostname.replace(/^www\./, ""),
    url
  }));
}

function toLocalLink(relativePath) {
  return {
    relative_path: relativePath,
    label: path.basename(relativePath),
    exists: fileExists(path.join(kbRoot, "..", relativePath.replace(/\//g, path.sep)))
  };
}

function summarizeText(value, limit = 180) {
  const text = stripMarkdown(value);
  return text.length > limit ? `${text.slice(0, limit - 1)}…` : text;
}

const artifactCache = new Map();

function absoluteFromRelative(relativePath = "") {
  return relativePath ? path.join(repoRoot, relativePath.replace(/\//g, path.sep)) : "";
}

function loadArtifact(relativePath = "") {
  if (!relativePath) {
    return null;
  }
  if (artifactCache.has(relativePath)) {
    return artifactCache.get(relativePath);
  }
  const absolutePath = absoluteFromRelative(relativePath);
  const artifact = fileExists(absolutePath) ? loadJson(absolutePath, null) : null;
  artifactCache.set(relativePath, artifact);
  return artifact;
}

function editionToken(value = "") {
  const match = String(value).match(/\b(first|second|third|fourth|fifth|1st|2nd|3rd|4th|5th)\s+edition\b/i);
  return match?.[1]?.toLowerCase() ?? "";
}

function humanizeProvenanceFlag(flag = "") {
  return {
    anna_archive_name: "Anna's Archive 标记",
    mirror_library_name: "镜像站文件名标记",
    mirror_watermark_name: "镜像导出标记"
  }[flag] ?? flag;
}

function usableTocEntries(artifact, limit = 12) {
  if (!artifact?.toc?.length) {
    return [];
  }
  const filtered = artifact.toc
    .filter((entry) => typeof entry?.label === "string" && entry.label.trim())
    .filter((entry) => !/^unknown$/i.test(entry.label.trim()))
    .filter((entry) => !/^(front cover|back cover|cover|copyright page|copyright)$/i.test(entry.label.trim()));
  const preferred = filtered.filter((entry) => (entry.depth ?? 0) <= 1);
  const source = preferred.length >= 5 ? preferred : filtered;
  const seen = new Set();
  const labels = [];
  for (const entry of source) {
    const label = entry.label.replace(/\s+/g, " ").trim();
    const key = label.toLowerCase();
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    labels.push(label);
    if (labels.length >= limit) {
      break;
    }
  }
  return labels;
}

function choosePrimaryExtract(privateExtracts = []) {
  return [...privateExtracts].sort((left, right) => {
    const tocDelta = (right.toc_count ?? 0) - (left.toc_count ?? 0);
    if (tocDelta !== 0) {
      return tocDelta;
    }
    const sectionDelta = (right.section_count ?? 0) - (left.section_count ?? 0);
    if (sectionDelta !== 0) {
      return sectionDelta;
    }
    const formatDelta = (right.format === "epub" ? 1 : 0) - (left.format === "epub" ? 1 : 0);
    if (formatDelta !== 0) {
      return formatDelta;
    }
    return String(left.relative_path ?? "").localeCompare(String(right.relative_path ?? ""));
  })[0];
}

function usableTocEvidenceEntries(artifact, limit = 10) {
  if (!artifact?.toc?.length) {
    return [];
  }
  const blockedLabels = /^(front cover|back cover|cover|endorsements page|half title|title page|copyright page|copyright|table of contents|contents|image credits and copyright notices|about the author|unknown)$/i;
  const entries = [];
  const seen = new Set();
  for (const entry of artifact.toc ?? []) {
    const label = String(entry?.label ?? "").replace(/\s+/g, " ").trim();
    if (!label) {
      continue;
    }
    if (blockedLabels.test(label)) {
      continue;
    }
    if ((entry?.depth ?? 0) > 1) {
      continue;
    }
    const key = `${(entry?.depth ?? 0)}:${label.toLowerCase()}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    entries.push({
      label,
      page: entry?.page ?? null,
      depth: entry?.depth ?? 0
    });
    if (entries.length >= limit) {
      break;
    }
  }
  return entries;
}

function truncateExcerpt(value = "", limit = 220) {
  const normalized = String(value).replace(/\s+/g, " ").trim();
  if (!normalized) {
    return "";
  }
  return normalized.length > limit ? `${normalized.slice(0, limit - 1)}…` : normalized;
}

function usableSampleSections(artifact, limit = 3) {
  if (!artifact?.sample_sections?.length) {
    return [];
  }
  const blockedPatterns = [
    /all rights reserved/i,
    /copyright/i,
    /www\.[^\s]+/i,
    /printed in the united states/i,
    /cover designer/i,
    /proofreader/i
  ];
  const sections = [];
  for (const section of artifact.sample_sections ?? []) {
    const text = String(section?.text ?? "").replace(/\s+/g, " ").trim();
    if (text.length < 140) {
      continue;
    }
    if (blockedPatterns.some((pattern) => pattern.test(text))) {
      continue;
    }
    sections.push({
      label: section?.label ?? "Sample",
      text: truncateExcerpt(text, 260)
    });
    if (sections.length >= limit) {
      break;
    }
  }
  return sections;
}

function normalizePhraseKey(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanConceptLabel(label = "") {
  let text = String(label).replace(/\s+/g, " ").trim();
  text = text
    .replace(/^chapter\s+[\w.-]+\s*[:.]?\s*/i, "")
    .replace(/^part\s+[\w.-]+\s*/i, "")
    .replace(/^appendix\s+[\w.-]+\s*[:.]?\s*/i, "")
    .replace(/^[0-9]+\s*[.:)\-]\s*/, "")
    .trim();
  if (!text) {
    return "";
  }
  if (
    /^(summary|conclusion|foreword|preface|acknowledgments|acknowledgements|end notes|notes|bibliography|introduction|about this book|about the author|designer perspective|cover|front cover|back cover|contents|endorsements page|half title|title page|copyright page|table of contents|image credits and copyright notices|unknown)$/i.test(
      text
    )
  ) {
    return "";
  }
  if (/^(designer perspective|further reading|end notes)\b/i.test(text)) {
    return "";
  }
  return text;
}

function conceptCandidates(work, limit = 8) {
  if (!work?.primary_private_artifact?.toc?.length) {
    return [];
  }
  const concepts = [];
  const seen = new Set();
  for (const entry of work.primary_private_artifact.toc ?? []) {
    if ((entry?.depth ?? 0) > 1) {
      continue;
    }
    const cleaned = cleanConceptLabel(entry?.label ?? "");
    if (!cleaned || cleaned.length < 4) {
      continue;
    }
    const key = normalizePhraseKey(cleaned);
    if (!key || seen.has(key)) {
      continue;
    }
    seen.add(key);
    concepts.push(cleaned);
    if (concepts.length >= limit) {
      break;
    }
  }
  return concepts;
}

function comparisonFocusList(work, limit = 4) {
  return compact([
    ...(work.purposes ?? []),
    ...(work.value_types ?? []),
    ...(work.knowledge_domains ?? [])
  ]).slice(0, limit);
}

function buildWorkBodyLegacy(work, normalizedWork) {
  const lines = [];
  lines.push(`# ${work.title}`);
  lines.push("");
  lines.push("## 基本信息");
  lines.push("");
  lines.push(`- 作者：${(work.authors ?? []).join(" / ") || "未知"}`);
  lines.push(`- 年份：${work.year ?? "未知"}`);
  lines.push(`- 类型：${work.kind}`);
  lines.push(`- 来源：${work.publisher_or_source}`);
  lines.push("");
  lines.push("## 摘要");
  lines.push("");
  lines.push(work.summary);
  lines.push("");
  lines.push("## 核心要点");
  lines.push("");
  for (const point of work.key_points ?? []) {
    lines.push(`- ${point}`);
  }
  lines.push("");
  lines.push("## 适用场景");
  lines.push("");
  lines.push(work.usage_relevance ?? "");
  lines.push("");
  lines.push("## 分类");
  lines.push("");
  lines.push(`- 一级分类：${normalizedWork.phase_label}`);
  lines.push(`- 二级输出物：${normalizedWork.deliverable_label}`);
  lines.push(`- 主题标签：${normalizedWork.theme_labels.join(" / ") || "未标注"}`);
  lines.push(`- 可用性：${normalizedWork.availability_label}`);
  lines.push("");
  lines.push("## 获取方式");
  lines.push("");
  if (normalizedWork.downloaded) {
    lines.push("- 已有本地文件，可直接打开。");
  } else if (normalizedWork.needs_user_file) {
    lines.push("- 需要你手动提供正版电子书或笔记文件。");
  } else if (work.access_mode === "metadata_only") {
    lines.push("- 当前只抓官方元数据，不保存商业书全文。");
  } else if (work.access_mode === "external_only") {
    lines.push("- 当前只保留外链，不在仓库托管源文件。");
  }
  lines.push("");
  if (normalizedWork.local_files.length > 0) {
    lines.push("## 本地文件");
    lines.push("");
    for (const file of normalizedWork.local_files) {
      lines.push(`- \`${file.relative_path}\`${file.user_supplied ? "（用户提供）" : ""}`);
    }
    lines.push("");
  }
  if (normalizedWork.private_extracts.length > 0) {
    lines.push("## 私有解析工件");
    lines.push("");
    for (const artifact of normalizedWork.private_extracts) {
      if (artifact.artifact_relative_path) {
        lines.push(`- \`${artifact.artifact_relative_path}\`（${artifact.extraction_status}）`);
      }
    }
    lines.push("");
  }
  lines.push("## 官方链接");
  lines.push("");
  for (const url of work.official_links ?? []) {
    lines.push(`- <${url}>`);
  }
  if (normalizedWork.official_metadata_pages.length > 0) {
    lines.push("");
    lines.push("## 元数据快照");
    lines.push("");
    for (const page of normalizedWork.official_metadata_pages) {
      lines.push(`- \`${page.relative_path}\``);
    }
  }
  if ((work.related_work_ids ?? []).length > 0) {
    lines.push("");
    lines.push("## 相关条目");
    lines.push("");
    for (const relatedWorkId of work.related_work_ids ?? []) {
      const relatedWork = registry.workMap[relatedWorkId];
      if (relatedWork) {
        lines.push(`- ${relatedWork.title}`);
      }
    }
  }
  return `${lines.join("\n").trim()}\n`;
}

function buildWorkBody(normalizedWork) {
  const lines = [];
  lines.push(`# ${normalizedWork.title}`);
  lines.push("");
  lines.push("## 基本信息");
  lines.push("");
  lines.push(`- 作者：${(normalizedWork.authors ?? []).join(" / ") || "未知"}`);
  lines.push(`- 年份：${normalizedWork.year ?? "未知"}`);
  lines.push(`- 类型：${normalizedWork.kind}`);
  lines.push(`- 来源：${normalizedWork.publisher_or_source}`);
  lines.push("");
  lines.push("## 摘要");
  lines.push("");
  lines.push(normalizedWork.summary);
  lines.push("");
  lines.push("## 核心要点");
  lines.push("");
  for (const point of normalizedWork.key_points ?? []) {
    lines.push(`- ${point}`);
  }
  lines.push("");
  lines.push("## 适用场景");
  lines.push("");
  lines.push(normalizedWork.usage_relevance ?? "");
  if (
    (normalizedWork.knowledge_domains ?? []).length > 0 ||
    (normalizedWork.purposes ?? []).length > 0 ||
    (normalizedWork.reading_modes ?? []).length > 0 ||
    (normalizedWork.value_types ?? []).length > 0 ||
    (normalizedWork.knowledge_lifecycle ?? []).length > 0
  ) {
    lines.push("");
    lines.push("## 知识定位");
    lines.push("");
    if ((normalizedWork.knowledge_domains ?? []).length > 0) {
      lines.push(`- 关注领域：${normalizedWork.knowledge_domains.join(" / ")}`);
    }
    if ((normalizedWork.purposes ?? []).length > 0) {
      lines.push(`- 主要用途：${normalizedWork.purposes.join(" / ")}`);
    }
    if ((normalizedWork.reading_modes ?? []).length > 0) {
      lines.push(`- 推荐读法：${normalizedWork.reading_modes.join(" / ")}`);
    }
    if ((normalizedWork.value_types ?? []).length > 0) {
      lines.push(`- 价值类型：${normalizedWork.value_types.join(" / ")}`);
    }
    if ((normalizedWork.knowledge_lifecycle ?? []).length > 0) {
      lines.push(`- 最适合介入的阶段：${normalizedWork.knowledge_lifecycle.join(" / ")}`);
    }
  }
  lines.push("");
  lines.push("## 分类");
  lines.push("");
  lines.push(`- 一级分类：${normalizedWork.phase_label}`);
  lines.push(`- 二级输出物：${normalizedWork.deliverable_label}`);
  lines.push(`- 主题标签：${normalizedWork.theme_labels.join(" / ") || "未标注"}`);
  lines.push(`- 可用性：${normalizedWork.availability_label}`);
  lines.push("");
  if (normalizedWork.primary_toc_preview?.length > 0 || normalizedWork.primary_private_artifact?.metadata?.title) {
    lines.push("## 解析结构");
    lines.push("");
    if (normalizedWork.primary_private_artifact?.metadata?.title) {
      lines.push(`- 解析标题：${normalizedWork.primary_private_artifact.metadata.title}`);
    }
    if (normalizedWork.primary_private_extract?.format) {
      lines.push(`- 解析格式：${normalizedWork.primary_private_extract.format}`);
    }
    if (normalizedWork.primary_private_artifact?.page_count) {
      lines.push(`- 页数：${normalizedWork.primary_private_artifact.page_count}`);
    }
    if ((normalizedWork.primary_toc_preview ?? []).length > 0) {
      lines.push("- 顶层目录预览：");
      for (const label of normalizedWork.primary_toc_preview ?? []) {
        lines.push(`  - ${label}`);
      }
    }
    lines.push("");
  }
  if (normalizedWork.has_private_source || (normalizedWork.source_review_notes ?? []).length > 0) {
    lines.push("## 来源状态");
    lines.push("");
    if (normalizedWork.has_private_source) {
      lines.push(`- 私有书源：${normalizedWork.private_source_count} 个`);
      lines.push(`- 其中待复核：${normalizedWork.private_source_review_required_count ?? 0} 个`);
    }
    if ((normalizedWork.private_source_provenance_flags ?? []).length > 0) {
      lines.push(
        `- 推断来源标记：${normalizedWork.private_source_provenance_flags.map(humanizeProvenanceFlag).join(" / ")}`
      );
    }
    for (const note of normalizedWork.source_review_notes ?? []) {
      lines.push(`- 注意：${note}`);
    }
    lines.push("");
  }
  lines.push("## 获取方式");
  lines.push("");
  if (normalizedWork.downloaded) {
    lines.push("- 已有本地文件，可直接打开。");
  } else if (normalizedWork.needs_user_file) {
    lines.push("- 还需要你手动补充本地文件。");
  } else if (normalizedWork.access_mode === "metadata_only") {
    lines.push("- 当前只保留官方元数据与定位信息，不对外托管商业书正文。");
  } else if (normalizedWork.access_mode === "external_only") {
    lines.push("- 当前只保留外链，不在仓库内托管源文件。");
  }
  lines.push("");
  if ((normalizedWork.local_files ?? []).length > 0) {
    lines.push("## 本地文件");
    lines.push("");
    for (const file of normalizedWork.local_files ?? []) {
      const tags = [];
      if (file.user_supplied) {
        tags.push("用户提供");
      }
      if (file.source_review_status === "needs_review") {
        tags.push("来源待复核");
      }
      if ((file.provenance_flags ?? []).length > 0) {
        tags.push(file.provenance_flags.map(humanizeProvenanceFlag).join(" / "));
      }
      lines.push(`- \`${file.relative_path}\`${tags.length > 0 ? `（${tags.join("；")}）` : ""}`);
    }
    lines.push("");
  }
  if ((normalizedWork.private_extracts ?? []).length > 0) {
    lines.push("## 私有解析工件");
    lines.push("");
    for (const artifact of normalizedWork.private_extracts ?? []) {
      if (artifact.artifact_relative_path) {
        lines.push(`- \`${artifact.artifact_relative_path}\`（${artifact.extraction_status}）`);
      }
    }
    lines.push("");
  }
  lines.push("## 官方链接");
  lines.push("");
  for (const url of normalizedWork.official_links ?? []) {
    lines.push(`- <${url}>`);
  }
  if ((normalizedWork.official_metadata_pages ?? []).length > 0) {
    lines.push("");
    lines.push("## 元数据快照");
    lines.push("");
    for (const page of normalizedWork.official_metadata_pages ?? []) {
      lines.push(`- \`${page.relative_path}\``);
    }
  }
  if ((normalizedWork.related_work_ids ?? []).length > 0) {
    lines.push("");
    lines.push("## 相关条目");
    lines.push("");
    for (const relatedWorkId of normalizedWork.related_work_ids ?? []) {
      const relatedWork = registry.workMap[relatedWorkId];
      if (relatedWork) {
        lines.push(`- ${relatedWork.title}`);
      }
    }
  }
  return `${lines.join("\n").trim()}\n`;
}

function buildSearchText(parts) {
  return compact(parts)
    .flatMap((value) => (Array.isArray(value) ? value : [value]))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

const normalizedWorks = registry.works.map((work) => {
  const phase = registry.phaseGroupMap[work.phase_group];
  const deliverable = registry.deliverableMap[work.deliverable_type];
  const openFiles = (openByBundle.get(work.seed_bundle) ?? []).map((resource) => ({
    relative_path: resource.relative_path,
    size_bytes: resource.size_bytes,
    extension: resource.extension,
    sha256: resource.sha256,
    resource_kind: resource.resource_kind,
    user_supplied: false
  }));
  const userFiles = (userByWork.get(work.id) ?? []).map((entry) => ({
    relative_path: entry.relative_path,
    size_bytes: entry.size_bytes,
    extension: entry.extension.replace(/^\./, ""),
    sha256: entry.sha256,
    resource_kind: work.kind,
    user_supplied: true,
    source_review_status: entry.source_review_status ?? "accepted",
    provenance_label: entry.provenance_label ?? "user_provided_file",
    provenance_flags: entry.provenance_flags ?? [],
    review_notes: entry.review_notes ?? []
  }));
  const localFiles = [...openFiles, ...userFiles].sort((left, right) => left.relative_path.localeCompare(right.relative_path));
  const officialMetadataPages = (officialByWork.get(work.id) ?? []).flatMap((record) => record.pages ?? []);
  const privateExtracts = extractsByWork.get(work.id) ?? [];
  const metadataSummary =
    officialMetadataPages.find((page) => page.metadata?.description)?.metadata?.description ??
    officialMetadataPages[0]?.metadata?.description ??
    "";
  const normalizedWork = {
    ...work,
    entity_type: "work",
    slug: work.id,
    phase_label: phase?.label ?? "",
    deliverable_label: deliverable?.label ?? "",
    theme_labels: (work.theme_tags ?? []).map((themeId) => registry.themeMap[themeId]?.label).filter(Boolean),
    availability_label: registry.availabilityMap[work.access_mode]?.label ?? work.access_mode,
    source_labels: (work.source_ids ?? []).map((sourceId) => registry.sourceMap[sourceId]?.name).filter(Boolean),
    official_link_entries: titleCaseLinks(work.official_links ?? []),
    local_files: localFiles,
    official_metadata_pages: officialMetadataPages,
    private_extracts: privateExtracts,
    downloaded: localFiles.length > 0,
    needs_user_file: work.access_mode === "user_file_needed" && localFiles.length === 0,
    has_private_source: userFiles.length > 0,
    private_source_count: userFiles.length,
    private_extract_count: privateExtracts.length,
    metadata_summary: metadataSummary,
    search_text: ""
  };
  const contentMarkdown = buildWorkBody(normalizedWork);
  normalizedWork.content_markdown = contentMarkdown;
  normalizedWork.content_html = markdownToHtml(contentMarkdown);
  normalizedWork.search_text = buildSearchText([
    work.title,
    work.authors,
    work.summary,
    work.key_points,
    work.usage_relevance,
    work.recommended_for,
    phase?.label,
    deliverable?.label,
    normalizedWork.theme_labels,
    normalizedWork.source_labels,
    metadataSummary
  ]);
  return normalizedWork;
});

for (const work of normalizedWorks) {
  const privateUserFiles = (work.local_files ?? []).filter((file) => file.user_supplied);
  work.knowledge_domains = work.knowledge_domains ?? [];
  work.purposes = work.purposes ?? [];
  work.reading_modes = work.reading_modes ?? [];
  work.value_types = work.value_types ?? [];
  work.knowledge_lifecycle = work.knowledge_lifecycle ?? [];
  work.primary_private_extract = choosePrimaryExtract(work.private_extracts ?? []) ?? null;
  work.primary_private_artifact = loadArtifact(work.primary_private_extract?.artifact_relative_path ?? "");
  work.primary_toc_preview = usableTocEntries(work.primary_private_artifact, 14);
  work.private_source_review_required_count = privateUserFiles.filter(
    (file) => file.source_review_status === "needs_review"
  ).length;
  work.private_source_provenance_flags = [...new Set(privateUserFiles.flatMap((file) => file.provenance_flags ?? []))];
  const extractedEdition = editionToken(
    [work.primary_private_artifact?.metadata?.title, work.primary_private_extract?.relative_path].filter(Boolean).join(" ")
  );
  const officialEdition = editionToken(
    [work.title, ...(work.official_metadata_pages ?? []).map((page) => page.metadata?.title ?? "")].filter(Boolean).join(" ")
  );
  work.source_review_notes = [];
  if (work.private_source_review_required_count > 0) {
    work.source_review_notes.push(
      "当前至少一个私有书源文件名显示出第三方镜像或转存痕迹，适合私人解析使用，但不应被表述成已验证来源。"
    );
  }
  if (extractedEdition && officialEdition && extractedEdition !== officialEdition) {
    work.source_review_notes.push(`解析文件版本与官方条目版本可能不一致：private=${extractedEdition}, official=${officialEdition}`);
  }
  work.availability_effective_id =
    work.private_source_review_required_count > 0 && privateUserFiles.length > 0 && !work.local_files.some((file) => !file.user_supplied)
      ? "manual_review"
      : work.access_mode;
  work.availability_label =
    work.private_source_review_required_count > 0 && privateUserFiles.length > 0 && !work.local_files.some((file) => !file.user_supplied)
      ? "已有私有书源，但来源待复核"
      : privateUserFiles.length > 0
        ? "已有私有书源"
        : registry.availabilityMap[work.access_mode]?.label ?? work.access_mode;
  work.content_markdown = buildWorkBody(work);
  work.content_html = markdownToHtml(work.content_markdown);
  work.search_text = buildSearchText([
    work.title,
    work.authors,
    work.summary,
    work.key_points,
    work.usage_relevance,
    work.recommended_for,
    work.knowledge_domains,
    work.purposes,
    work.reading_modes,
    work.value_types,
    work.knowledge_lifecycle,
    work.primary_toc_preview,
    work.phase_label,
    work.deliverable_label,
    work.theme_labels,
    work.source_labels,
    work.metadata_summary
  ]);
}

for (const work of normalizedWorks) {
  writeJson(path.join(normalizedWorksRoot, `${work.id}.json`), work);
}

const cards = [];

function buildBookPositioningBody(work) {
  const lines = [];
  lines.push(`# ${work.title}：知识定位`);
  lines.push("");
  lines.push("## 这本书最适合解决什么");
  lines.push("");
  lines.push(work.usage_relevance || work.summary);
  lines.push("");
  lines.push("## 主要关注");
  lines.push("");
  if ((work.knowledge_domains ?? []).length > 0) {
    lines.push(`- 关注领域：${work.knowledge_domains.join(" / ")}`);
  }
  if ((work.purposes ?? []).length > 0) {
    lines.push(`- 主要用途：${work.purposes.join(" / ")}`);
  }
  if ((work.reading_modes ?? []).length > 0) {
    lines.push(`- 推荐读法：${work.reading_modes.join(" / ")}`);
  }
  if ((work.value_types ?? []).length > 0) {
    lines.push(`- 价值类型：${work.value_types.join(" / ")}`);
  }
  if ((work.knowledge_lifecycle ?? []).length > 0) {
    lines.push(`- 适用阶段：${work.knowledge_lifecycle.join(" / ")}`);
  }
  lines.push("");
  lines.push("## 和相邻书目的关系");
  lines.push("");
  if ((work.related_work_ids ?? []).length === 0) {
    lines.push("- 当前未配置相邻书目。");
  } else {
    for (const relatedWorkId of work.related_work_ids ?? []) {
      const relatedWork = registry.workMap[relatedWorkId];
      if (relatedWork) {
        lines.push(`- ${relatedWork.title}`);
      }
    }
  }
  if ((work.primary_toc_preview ?? []).length > 0) {
    lines.push("");
    lines.push("## 结构证据");
    lines.push("");
    for (const label of (work.primary_toc_preview ?? []).slice(0, 8)) {
      lines.push(`- ${label}`);
    }
  }
  if ((work.source_review_notes ?? []).length > 0) {
    lines.push("");
    lines.push("## 来源备注");
    lines.push("");
    for (const note of work.source_review_notes ?? []) {
      lines.push(`- ${note}`);
    }
  }
  return `${lines.join("\n").trim()}\n`;
}

function buildChapterMapBody(work) {
  const lines = [];
  lines.push(`# ${work.title}：章节地图`);
  lines.push("");
  lines.push("## 顶层结构");
  lines.push("");
  (work.primary_toc_preview ?? []).forEach((label, index) => {
    lines.push(`${index + 1}. ${label}`);
  });
  lines.push("");
  lines.push("## 如何使用这份结构");
  lines.push("");
  lines.push(`- 把它当作 ${work.phase_label} / ${work.deliverable_label} 的阅读地图，而不是逐字摘抄模板。`);
  lines.push("- 先看与你当前问题最相关的章节，再回到 work 条目里的知识定位决定是否需要通读。");
  lines.push("- 如果你在做 AI 引用，优先把相关章节标题和你的项目问题一起交给模型，而不是笼统地说“参考整本书”。");
  lines.push("");
  lines.push("## 解析依据");
  lines.push("");
  if (work.primary_private_extract?.artifact_relative_path) {
    lines.push(`- 工件：\`${work.primary_private_extract.artifact_relative_path}\``);
  }
  if (work.primary_private_artifact?.metadata?.title) {
    lines.push(`- 解析标题：${work.primary_private_artifact.metadata.title}`);
  }
  return `${lines.join("\n").trim()}\n`;
}

function buildEvidenceBody(work) {
  const tocEntries = usableTocEvidenceEntries(work.primary_private_artifact, 10);
  const sampleSections = usableSampleSections(work.primary_private_artifact, 3);
  const lines = [];
  lines.push(`# ${work.title}：Evidence Note`);
  lines.push("");
  lines.push("## 这张卡的用途");
  lines.push("");
  lines.push("用来记录这本书目前在知识库里的可追踪依据：它有哪些目录结构、样本文本和版本/来源信息，以免后面的摘要和对比脱离书本本体。");
  lines.push("");
  lines.push("## Structural Evidence");
  lines.push("");
  if (work.primary_private_artifact?.metadata?.title) {
    lines.push(`- Extract title: ${work.primary_private_artifact.metadata.title}`);
  }
  if (work.primary_private_extract?.format) {
    lines.push(`- Format: ${work.primary_private_extract.format}`);
  }
  if (work.primary_private_artifact?.page_count) {
    lines.push(`- Page count: ${work.primary_private_artifact.page_count}`);
  }
  if (work.primary_private_extract?.artifact_relative_path) {
    lines.push(`- Artifact: \`${work.primary_private_extract.artifact_relative_path}\``);
  }
  lines.push("");
  if (tocEntries.length > 0) {
    lines.push("## TOC Anchors");
    lines.push("");
    for (const entry of tocEntries) {
      lines.push(`- ${entry.label}${entry.page ? ` (p.${entry.page})` : ""}`);
    }
    lines.push("");
  }
  if (sampleSections.length > 0) {
    lines.push("## Sample Text Signals");
    lines.push("");
    for (const sample of sampleSections) {
      lines.push(`- ${sample.label}: ${sample.text}`);
    }
    lines.push("");
  }
  lines.push("## Why It Matters For The KB");
  lines.push("");
  lines.push(`- 当前定位：${work.usage_relevance || work.summary}`);
  if ((work.purposes ?? []).length > 0) {
    lines.push(`- 主要用途：${work.purposes.join(" / ")}`);
  }
  if ((work.value_types ?? []).length > 0) {
    lines.push(`- 输出价值：${work.value_types.join(" / ")}`);
  }
  lines.push("");
  if ((work.source_review_notes ?? []).length > 0) {
    lines.push("## Source Review Notes");
    lines.push("");
    for (const note of work.source_review_notes ?? []) {
      lines.push(`- ${note}`);
    }
  }
  return `${lines.join("\n").trim()}\n`;
}

function buildConceptSeedBody(work) {
  const concepts = conceptCandidates(work, 10);
  const tocEntries = usableTocEvidenceEntries(work.primary_private_artifact, 6);
  const lines = [];
  lines.push(`# ${work.title}：Concept Seeds`);
  lines.push("");
  lines.push("## 可继续长成卡片的概念种子");
  lines.push("");
  for (const concept of concepts) {
    lines.push(`- ${concept}`);
  }
  lines.push("");
  lines.push("## 这本书最可能回答的问题");
  lines.push("");
  lines.push(`- ${work.usage_relevance || work.summary}`);
  if ((work.purposes ?? []).length > 0) {
    for (const purpose of work.purposes.slice(0, 4)) {
      lines.push(`- 围绕“${purpose}”去检索相关章节和证据。`);
    }
  }
  lines.push("");
  lines.push("## AI 引用建议");
  lines.push("");
  lines.push("- 先把相关章节标题和你的项目问题一起给模型，而不是笼统地说“参考整本书”。");
  lines.push("- 如果需要更稳的回答，优先同时引用这本书的 `book entry`、`chapter map note` 和这张 `concept seeds` 卡。");
  lines.push("");
  if (tocEntries.length > 0) {
    lines.push("## Evidence Anchors");
    lines.push("");
    for (const entry of tocEntries) {
      lines.push(`- ${entry.label}${entry.page ? ` (p.${entry.page})` : ""}`);
    }
  }
  return `${lines.join("\n").trim()}\n`;
}

function buildComparisonBody(seed, leftWork, rightWork) {
  const leftAnchors = usableTocEvidenceEntries(leftWork.primary_private_artifact, 5);
  const rightAnchors = usableTocEvidenceEntries(rightWork.primary_private_artifact, 5);
  const lines = [];
  lines.push(`# ${leftWork.title} vs ${rightWork.title}`);
  lines.push("");
  lines.push(`> ${seed.summary}`);
  lines.push("");
  lines.push("## Comparison Axis");
  lines.push("");
  lines.push(`- ${seed.angle}`);
  lines.push("");
  lines.push(`## ${leftWork.title} 更强在什么地方`);
  lines.push("");
  for (const item of comparisonFocusList(leftWork, 4)) {
    lines.push(`- ${item}`);
  }
  lines.push(`- Use when: ${seed.use_left_when}`);
  lines.push("");
  lines.push(`## ${rightWork.title} 更强在什么地方`);
  lines.push("");
  for (const item of comparisonFocusList(rightWork, 4)) {
    lines.push(`- ${item}`);
  }
  lines.push(`- Use when: ${seed.use_right_when}`);
  lines.push("");
  lines.push("## 如何一起使用");
  lines.push("");
  lines.push(`- ${seed.use_together}`);
  lines.push("");
  lines.push(`## ${leftWork.title} 的结构证据`);
  lines.push("");
  if (leftAnchors.length === 0) {
    lines.push("- 这本书当前没有提取出足够强的 TOC anchors，优先参考它的 work 条目和 evidence note。");
  } else {
    for (const entry of leftAnchors) {
      lines.push(`- ${entry.label}${entry.page ? ` (p.${entry.page})` : ""}`);
    }
  }
  lines.push("");
  lines.push(`## ${rightWork.title} 的结构证据`);
  lines.push("");
  if (rightAnchors.length === 0) {
    lines.push("- 这本书当前没有提取出足够强的 TOC anchors，优先参考它的 work 条目和 evidence note。");
  } else {
    for (const entry of rightAnchors) {
      lines.push(`- ${entry.label}${entry.page ? ` (p.${entry.page})` : ""}`);
    }
  }
  return `${lines.join("\n").trim()}\n`;
}

for (const work of normalizedWorks) {
  const cardId = `work-${work.id}`;
  const cardKind = work.kind === "course" ? "source_overview" : "book_entry";
  const card = {
    id: cardId,
    entity_type: "card",
    title: work.title,
    summary: summarizeText(work.summary),
    card_kind: cardKind,
    phase_group: work.phase_group,
    deliverable_type: work.deliverable_type,
    resource_kind: work.kind,
    source_work_id: work.id,
    source_markdown_path: "",
    theme_tags: work.theme_tags ?? [],
    related_work_ids: work.related_work_ids ?? [],
    related_card_ids: [],
    official_links: work.official_links ?? [],
    local_links: work.local_files.map((file) => ({ label: path.basename(file.relative_path), relative_path: file.relative_path })),
    body_markdown: work.content_markdown,
    body_html: work.content_html,
    headings: extractMarkdownHeadings(work.content_markdown),
    search_text: work.search_text
  };
  cards.push(card);
  writeText(path.join(normalizedCardsRoot, `${cardId}.md`), work.content_markdown);
  writeJson(path.join(normalizedCardsRoot, `${cardId}.json`), card);

  const positioningMarkdown = buildBookPositioningBody(work);
  const positioningCard = {
    id: `note-book-positioning-${work.id}`,
    entity_type: "card",
    title: `${work.title}：知识定位`,
    summary: summarizeText(work.usage_relevance || work.summary),
    card_kind: "book_positioning_note",
    phase_group: work.phase_group,
    deliverable_type: work.deliverable_type,
    resource_kind: "note",
    source_work_id: work.id,
    source_markdown_path: "",
    theme_tags: work.theme_tags ?? [],
    related_work_ids: [work.id, ...(work.related_work_ids ?? [])],
    related_card_ids: [cardId],
    official_links: work.official_links ?? [],
    local_links: work.local_files.map((file) => ({ label: path.basename(file.relative_path), relative_path: file.relative_path })),
    body_markdown: positioningMarkdown,
    body_html: markdownToHtml(positioningMarkdown),
    headings: extractMarkdownHeadings(positioningMarkdown),
    search_text: buildSearchText([
      work.title,
      work.summary,
      work.usage_relevance,
      work.knowledge_domains,
      work.purposes,
      work.reading_modes,
      work.value_types,
      work.knowledge_lifecycle
    ])
  };
  cards.push(positioningCard);
  writeText(path.join(normalizedCardsRoot, `${positioningCard.id}.md`), positioningMarkdown);
  writeJson(path.join(normalizedCardsRoot, `${positioningCard.id}.json`), positioningCard);

  let chapterMapCardId = "";
  if ((work.primary_toc_preview ?? []).length >= 5) {
    const chapterMapMarkdown = buildChapterMapBody(work);
    const chapterMapCard = {
      id: `note-chapter-map-${work.id}`,
      entity_type: "card",
      title: `${work.title}：章节地图`,
      summary: summarizeText((work.primary_toc_preview ?? []).join(" / "), 160),
      card_kind: "chapter_map_note",
      phase_group: work.phase_group,
      deliverable_type: work.deliverable_type,
      resource_kind: "note",
      source_work_id: work.id,
      source_markdown_path: "",
      theme_tags: work.theme_tags ?? [],
      related_work_ids: [work.id, ...(work.related_work_ids ?? [])],
      related_card_ids: [cardId, positioningCard.id],
      official_links: work.official_links ?? [],
      local_links: work.primary_private_extract?.artifact_relative_path
        ? [{ label: path.basename(work.primary_private_extract.artifact_relative_path), relative_path: work.primary_private_extract.artifact_relative_path }]
        : [],
      body_markdown: chapterMapMarkdown,
      body_html: markdownToHtml(chapterMapMarkdown),
      headings: extractMarkdownHeadings(chapterMapMarkdown),
      search_text: buildSearchText([work.title, work.primary_toc_preview, work.phase_label, work.deliverable_label])
    };
    cards.push(chapterMapCard);
    writeText(path.join(normalizedCardsRoot, `${chapterMapCard.id}.md`), chapterMapMarkdown);
    writeJson(path.join(normalizedCardsRoot, `${chapterMapCard.id}.json`), chapterMapCard);
    chapterMapCardId = chapterMapCard.id;
  }

  const evidenceEntries = usableTocEvidenceEntries(work.primary_private_artifact, 10);
  const evidenceSamples = usableSampleSections(work.primary_private_artifact, 3);
  if (evidenceEntries.length > 0 || evidenceSamples.length > 0 || (work.source_review_notes ?? []).length > 0) {
    const evidenceMarkdown = buildEvidenceBody(work);
    const evidenceCard = {
      id: `note-evidence-${work.id}`,
      entity_type: "card",
      title: `${work.title}：Evidence Note`,
      summary: summarizeText("记录这本书目前在知识库里的目录、样本文本、解析工件与来源审查依据。", 160),
      card_kind: "evidence_note",
      phase_group: work.phase_group,
      deliverable_type: work.deliverable_type,
      resource_kind: "note",
      source_work_id: work.id,
      source_markdown_path: "",
      theme_tags: work.theme_tags ?? [],
      related_work_ids: [work.id, ...(work.related_work_ids ?? [])],
      related_card_ids: [cardId, positioningCard.id, chapterMapCardId].filter(Boolean),
      official_links: work.official_links ?? [],
      local_links: compact([
        ...(work.primary_private_extract?.artifact_relative_path
          ? [{ label: path.basename(work.primary_private_extract.artifact_relative_path), relative_path: work.primary_private_extract.artifact_relative_path }]
          : []),
        ...work.local_files.map((file) => ({ label: path.basename(file.relative_path), relative_path: file.relative_path }))
      ]),
      body_markdown: evidenceMarkdown,
      body_html: markdownToHtml(evidenceMarkdown),
      headings: extractMarkdownHeadings(evidenceMarkdown),
      search_text: buildSearchText([
        work.title,
        work.summary,
        work.usage_relevance,
        evidenceEntries.map((entry) => entry.label),
        evidenceSamples.map((sample) => sample.text),
        work.source_review_notes
      ])
    };
    cards.push(evidenceCard);
    writeText(path.join(normalizedCardsRoot, `${evidenceCard.id}.md`), evidenceMarkdown);
    writeJson(path.join(normalizedCardsRoot, `${evidenceCard.id}.json`), evidenceCard);
  }

  const concepts = conceptCandidates(work, 10);
  if (concepts.length >= 4) {
    const conceptSeedMarkdown = buildConceptSeedBody(work);
    const conceptSeedCard = {
      id: `note-concept-seeds-${work.id}`,
      entity_type: "card",
      title: `${work.title}：Concept Seeds`,
      summary: summarizeText(concepts.join(" / "), 160),
      card_kind: "concept_seed_note",
      phase_group: work.phase_group,
      deliverable_type: work.deliverable_type,
      resource_kind: "note",
      source_work_id: work.id,
      source_markdown_path: "",
      theme_tags: work.theme_tags ?? [],
      related_work_ids: [work.id, ...(work.related_work_ids ?? [])],
      related_card_ids: [cardId, positioningCard.id, chapterMapCardId].filter(Boolean),
      official_links: work.official_links ?? [],
      local_links: work.primary_private_extract?.artifact_relative_path
        ? [{ label: path.basename(work.primary_private_extract.artifact_relative_path), relative_path: work.primary_private_extract.artifact_relative_path }]
        : [],
      body_markdown: conceptSeedMarkdown,
      body_html: markdownToHtml(conceptSeedMarkdown),
      headings: extractMarkdownHeadings(conceptSeedMarkdown),
      search_text: buildSearchText([work.title, concepts, work.usage_relevance, work.purposes, work.primary_toc_preview])
    };
    cards.push(conceptSeedCard);
    writeText(path.join(normalizedCardsRoot, `${conceptSeedCard.id}.md`), conceptSeedMarkdown);
    writeJson(path.join(normalizedCardsRoot, `${conceptSeedCard.id}.json`), conceptSeedCard);
  }
}

for (const seed of comparisonSeeds) {
  const leftWork = normalizedWorks.find((work) => work.id === seed.left_work_id);
  const rightWork = normalizedWorks.find((work) => work.id === seed.right_work_id);
  if (!leftWork || !rightWork) {
    continue;
  }
  const markdown = buildComparisonBody(seed, leftWork, rightWork);
  const card = {
    id: `note-compare-${seed.id}`,
    entity_type: "card",
    title: `${leftWork.title} vs ${rightWork.title}`,
    summary: summarizeText(seed.summary, 180),
    card_kind: "comparison_note",
    phase_group: leftWork.phase_group,
    deliverable_type: leftWork.deliverable_type,
    resource_kind: "note",
    source_work_id: leftWork.id,
    source_markdown_path: "",
    theme_tags: [...new Set([...(leftWork.theme_tags ?? []), ...(rightWork.theme_tags ?? [])])],
    related_work_ids: [leftWork.id, rightWork.id],
    related_card_ids: [`work-${leftWork.id}`, `work-${rightWork.id}`],
    official_links: [...new Set([...(leftWork.official_links ?? []), ...(rightWork.official_links ?? [])])],
    local_links: [],
    body_markdown: markdown,
    body_html: markdownToHtml(markdown),
    headings: extractMarkdownHeadings(markdown),
    search_text: buildSearchText([
      leftWork.title,
      rightWork.title,
      seed.angle,
      seed.summary,
      seed.use_left_when,
      seed.use_right_when,
      seed.use_together,
      leftWork.purposes,
      rightWork.purposes
    ])
  };
  cards.push(card);
  writeText(path.join(normalizedCardsRoot, `${card.id}.md`), markdown);
  writeJson(path.join(normalizedCardsRoot, `${card.id}.json`), card);
}

const noteCardSpecs = [
  {
    id: "kb-overview",
    relative_path: "README.md",
    card_kind: "source_overview",
    phase_group: "initiation-direction",
    deliverable_type: "director-review",
    theme_tags: ["design-fundamentals"],
    related_work_ids: ["the-art-of-game-design", "game-design-concepts-course"]
  },
  {
    id: "legal-policy-and-scope",
    relative_path: "catalog/01-legal-policy-and-scope.md",
    card_kind: "reading_note",
    phase_group: "development-implementation",
    deliverable_type: "technical-solution-spec",
    theme_tags: ["project-audit"],
    related_work_ids: ["the-art-of-game-design", "rules-of-play"]
  },
  {
    id: "core-books-and-official-links",
    relative_path: "catalog/02-core-books-and-official-links.md",
    card_kind: "source_overview",
    phase_group: "initiation-direction",
    deliverable_type: "game-direction-convergence",
    theme_tags: ["design-fundamentals"],
    related_work_ids: ["the-art-of-game-design", "rules-of-play", "game-design-workshop"]
  },
  {
    id: "downloaded-open-resources",
    relative_path: "catalog/03-downloaded-open-resources.md",
    card_kind: "source_overview",
    phase_group: "development-implementation",
    deliverable_type: "technical-solution-spec",
    theme_tags: ["playtesting", "project-audit"],
    related_work_ids: ["game-design-concepts-course", "mit-ocw-2016-introduction-to-game-design-methods", "designing-virtual-worlds"]
  },
  {
    id: "master-map",
    relative_path: "catalog/04-master-map.md",
    card_kind: "reading_note",
    phase_group: "initiation-direction",
    deliverable_type: "director-review",
    theme_tags: ["systems-thinking"],
    related_work_ids: ["the-art-of-game-design", "designing-virtual-worlds", "mda-formal-approach"]
  },
  {
    id: "kb-technical-spec",
    relative_path: "catalog/05-kb-technical-spec.md",
    card_kind: "spec_template",
    phase_group: "development-implementation",
    deliverable_type: "technical-solution-spec",
    theme_tags: ["project-audit", "prompt-design"],
    related_work_ids: []
  },
  {
    id: "kb-rebuild-spec-v2",
    relative_path: "catalog/06-kb-rebuild-spec-v2.md",
    card_kind: "spec_template",
    phase_group: "development-implementation",
    deliverable_type: "technical-solution-spec",
    theme_tags: ["project-audit", "systems-thinking"],
    related_work_ids: ["the-art-of-game-design", "game-design-workshop", "game-mechanics-advanced-game-design"]
  },
  {
    id: "rebuild-progress-v2",
    relative_path: "reports/rebuild-progress-v2.md",
    card_kind: "reading_note",
    phase_group: "development-implementation",
    deliverable_type: "technical-solution-spec",
    theme_tags: ["project-audit", "systems-thinking"],
    related_work_ids: ["the-art-of-game-design", "game-design-workshop", "game-mechanics-advanced-game-design"]
  },
  {
    id: "private-library-audit",
    relative_path: "reports/private-library-audit.md",
    card_kind: "reading_note",
    phase_group: "development-implementation",
    deliverable_type: "technical-solution-spec",
    theme_tags: ["project-audit"],
    related_work_ids: ["the-art-of-game-design", "game-design-workshop", "game-feel"]
  },
  {
    id: "private-book-extraction",
    relative_path: "reports/private-book-extraction.md",
    card_kind: "reading_note",
    phase_group: "development-implementation",
    deliverable_type: "technical-solution-spec",
    theme_tags: ["project-audit", "systems-thinking"],
    related_work_ids: ["the-art-of-game-design", "game-design-workshop", "game-feel"]
  },
  {
    id: "study-paths",
    relative_path: "notes/01-study-paths.md",
    card_kind: "reading_note",
    phase_group: "initiation-direction",
    deliverable_type: "game-direction-convergence",
    theme_tags: ["design-fundamentals"],
    related_work_ids: ["the-art-of-game-design", "game-design-concepts-course", "rules-of-play"]
  },
  {
    id: "applying-the-kb-to-projects",
    relative_path: "notes/02-applying-the-kb-to-projects.md",
    card_kind: "checklist",
    phase_group: "testing-acceptance-audit",
    deliverable_type: "project-status-audit",
    theme_tags: ["project-audit"],
    related_work_ids: ["the-art-of-game-design", "game-design-concepts-course", "game-mechanics-advanced-game-design"]
  },
  {
    id: "jesse-schell-and-playcentric-design",
    relative_path: "notes/03-jesse-schell-and-playcentric-design.md",
    card_kind: "reading_note",
    phase_group: "initiation-direction",
    deliverable_type: "core-gameplay-judgment",
    theme_tags: ["design-fundamentals", "player-motivation"],
    related_work_ids: ["the-art-of-game-design", "game-design-workshop"]
  },
  {
    id: "schreiber-romero-and-exercise-driven-design",
    relative_path: "notes/04-schreiber-romero-and-exercise-driven-design.md",
    card_kind: "reading_note",
    phase_group: "core-gameplay-systems",
    deliverable_type: "single-mechanic-prototype-design",
    theme_tags: ["playtesting", "prompt-design"],
    related_work_ids: ["game-design-concepts-course", "mit-ocw-2016-introduction-to-game-design-methods", "challenges-for-game-designers"]
  },
  {
    id: "koster-crawford-bartle-and-systems-thinking",
    relative_path: "notes/05-koster-crawford-bartle-and-systems-thinking.md",
    card_kind: "reading_note",
    phase_group: "core-gameplay-systems",
    deliverable_type: "core-loop-design",
    theme_tags: ["fun-theory", "systems-thinking", "online-worlds"],
    related_work_ids: ["a-theory-of-fun-for-game-design", "designing-virtual-worlds"]
  },
  {
    id: "rules-feel-and-formalism",
    relative_path: "notes/06-rules-feel-and-formalism.md",
    card_kind: "reading_note",
    phase_group: "art-ui-experience",
    deliverable_type: "motion-hit-feel-expression",
    theme_tags: ["formalism", "hit-feel", "ui-ux"],
    related_work_ids: ["rules-of-play", "game-feel", "mda-formal-approach"]
  }
];

for (const spec of noteCardSpecs) {
  const absolutePath = path.join(kbRoot, spec.relative_path.replace(/\//g, path.sep));
  if (!fileExists(absolutePath)) {
    continue;
  }
  const markdown = readText(absolutePath);
  const title = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? spec.id;
  const card = {
    id: `note-${spec.id}`,
    entity_type: "card",
    title,
    summary: summarizeText(extractLeadParagraph(markdown)),
    card_kind: spec.card_kind,
    phase_group: spec.phase_group,
    deliverable_type: spec.deliverable_type,
    resource_kind: "note",
    source_work_id: "",
    source_markdown_path: relativeToRepo(absolutePath),
    theme_tags: spec.theme_tags,
    related_work_ids: spec.related_work_ids,
    related_card_ids: [],
    official_links: [],
    local_links: [{ label: path.basename(spec.relative_path), relative_path: relativeToRepo(absolutePath) }],
    body_markdown: markdown,
    body_html: markdownToHtml(markdown),
    headings: extractMarkdownHeadings(markdown),
    search_text: buildSearchText([title, markdown, spec.theme_tags, spec.related_work_ids])
  };
  cards.push(card);
  writeText(path.join(normalizedCardsRoot, `${card.id}.md`), `${markdown.trim()}\n`);
  writeJson(path.join(normalizedCardsRoot, `${card.id}.json`), card);
}

const workflowCardSpecs = [
  {
    id: "prompt-initiation-direction",
    title: "立项与方向 Prompt 模板",
    summary: "把模糊项目概念收束成方向判断、目标市场、平台适配和 MVP 裁剪结论。",
    card_kind: "prompt_template",
    phase_group: "initiation-direction",
    deliverable_type: "game-direction-convergence",
    theme_tags: ["design-fundamentals", "project-audit", "prompt-design"],
    related_work_ids: ["the-art-of-game-design", "game-design-workshop", "game-design-concepts-course"],
    related_card_ids: ["phase-guide-initiation-direction", "checklist-initiation-direction"],
    use_case: "当一个项目还停留在概念、愿景、题材或一堆好点子阶段时，用它把高层讨论压回“做什么、不做什么、先验证什么”。",
    inputs: [
      "项目一句话概念与核心 fantasy",
      "目标玩家、目标市场与参考竞品",
      "平台、发行、预算、周期和团队约束",
      "必须保留的创意与当前最大不确定性",
      "你已经讨论过但仍然分歧很大的方向点"
    ],
    output_sections: [
      "方向收敛结论",
      "核心玩法判断",
      "玩家画像与目标市场",
      "平台适配判断",
      "主要风险预判",
      "MVP 范围裁剪",
      "下一轮验证动作"
    ],
    prompt: [
      "你是一个世界级游戏总监、系统设计研究者和项目审查顾问。",
      "请不要按岗位分工回答，而是按“开发阶段 -> 输出物”组织分析。",
      "",
      "项目背景：",
      "- 项目名：{{project_name}}",
      "- 一句话概念：{{one_sentence_pitch}}",
      "- 核心 fantasy：{{core_fantasy}}",
      "- 目标玩家：{{target_players}}",
      "- 参考竞品：{{comparables}}",
      "- 平台：{{platforms}}",
      "- 商业/发行约束：{{business_constraints}}",
      "- 团队与周期：{{team_and_timeline}}",
      "- 当前不确定点：{{top_unknowns}}",
      "- 必须保留元素：{{must_keep}}",
      "",
      "请输出：",
      "1. 方向收敛结论：一句话说明应该做什么，不该做什么。",
      "2. 核心玩法判断：当前概念真正可成立的玩法核心是什么。",
      "3. 玩家画像与目标市场：最应该服务谁，为什么。",
      "4. 平台适配判断：哪些平台适合，哪些平台会拉垮设计。",
      "5. 风险预判：列出 3-5 个最高风险，并给出验证方法。",
      "6. MVP 范围裁剪：保留项、推迟项、删除项。",
      "7. 下一轮验证动作：一周内应该做的最小验证件。",
      "",
      "要求：",
      "- 结论必须可执行，避免空泛愿景描述。",
      "- 明确指出互相冲突的目标。",
      "- 需要做取舍时，优先保留最能定义项目 identity 的部分。"
    ],
    followups: [
      "再给出两个方向变体：更商业化 / 更作者性。",
      "如果团队资源砍半，重新给出 MVP。"
    ]
  },
  {
    id: "checklist-initiation-direction",
    title: "立项与方向审查 Checklist",
    summary: "在立项阶段检查概念是否已经收束到能推进的程度。",
    card_kind: "checklist",
    phase_group: "initiation-direction",
    deliverable_type: "director-review",
    theme_tags: ["project-audit", "design-fundamentals"],
    related_work_ids: ["the-art-of-game-design", "game-design-concepts-course"],
    related_card_ids: ["phase-guide-initiation-direction", "prompt-initiation-direction"],
    use_case: "用于方向评审会、立项文档 review，或决定一个点子是否进入原型阶段。",
    checklist_items: [
      "一句话概念能清楚区分“是什么”和“不是什麽”。",
      "目标玩家不是泛泛而谈，而是可命名的具体群体。",
      "核心玩法不依赖世界观堆叠就能成立。",
      "平台选择与控制、时长、商业化约束相匹配。",
      "至少列出两个最高风险并有明确验证办法。",
      "MVP 已经做过保留项 / 推迟项 / 删除项切分。",
      "团队能在当前周期内做出一个最小验证件。"
    ],
    pass_criteria: [
      "团队成员能用相近的话复述项目方向。",
      "能解释为什么这个项目值得做，以及为什么现在做。",
      "能说清第一轮验证要证明什么。"
    ],
    failure_signals: [
      "所有亮点都建立在“以后会更完整”上。",
      "没有明确目标玩家，只是在罗列可能喜欢的人群。",
      "MVP 仍然试图保留完整世界和所有系统。"
    ]
  },
  {
    id: "prompt-core-gameplay-systems",
    title: "核心玩法与系统设计 Prompt 模板",
    summary: "把核心 fantasy 压成核心循环、机制、状态变化和可验证原型。",
    card_kind: "prompt_template",
    phase_group: "core-gameplay-systems",
    deliverable_type: "core-loop-design",
    theme_tags: ["design-fundamentals", "playtesting", "prompt-design"],
    related_work_ids: ["game-design-concepts-course", "mit-ocw-2014-game-design", "game-design-workshop", "mda-formal-approach"],
    related_card_ids: ["phase-guide-core-gameplay-systems", "checklist-core-gameplay-systems"],
    use_case: "当你已经知道项目大方向，但不知道核心循环、战斗、成长或 onboarding 应该怎样互相咬合时使用。",
    inputs: [
      "玩家 fantasy 与主要目标",
      "玩家的核心动词集合",
      "关键资源、状态与反馈",
      "一局或一个循环的时长",
      "失败条件、胜利条件与当前痛点",
      "你最想验证的一条机制命题"
    ],
    output_sections: [
      "核心循环设计",
      "单机制原型切分",
      "状态与资源流转",
      "失败/胜利条件",
      "难度曲线与 onboarding",
      "最小验证原型方案",
      "试玩问题清单"
    ],
    prompt: [
      "你是一个世界级玩法设计师和系统设计研究者。",
      "请把以下概念拆成可测试的玩法系统，而不是写一篇概念介绍。",
      "",
      "输入：",
      "- 玩家 fantasy：{{player_fantasy}}",
      "- 核心目标：{{core_goal}}",
      "- 核心动词：{{core_verbs}}",
      "- 关键资源/状态：{{resources_and_states}}",
      "- 单局时长或循环长度：{{session_length}}",
      "- 当前担忧：{{current_pain_points}}",
      "- 最想验证的机制命题：{{mechanic_hypothesis}}",
      "",
      "请按以下结构输出：",
      "1. 核心循环：用 5-8 步描述一轮完整循环。",
      "2. 单机制原型：指出最小可独立验证的机制单元。",
      "3. 系统接口：说明战斗 / 关卡 / 成长 / 资源循环如何互相影响。",
      "4. 失败与胜利条件：给出具体条件与其设计意义。",
      "5. 难度与 onboarding：前 10 分钟如何教会玩家，后续如何抬升。",
      "6. 原型方案：做什么，不做什么，如何在一周内验证。",
      "7. 试玩问题：列出 5 个最应该观察的问题。",
      "",
      "要求：",
      "- 不要用“会很好玩”作为论证。",
      "- 所有结论都必须能落到原型和试玩。",
      "- 如果发现 fantasy 和机制冲突，要明确指出。"
    ],
    followups: [
      "把核心循环压缩成一个纸面原型版本。",
      "把 onboarding 进一步细化成前 5 分钟脚本。"
    ]
  },
  {
    id: "checklist-core-gameplay-systems",
    title: "核心玩法与系统设计 Checklist",
    summary: "检查玩法系统是否真的形成了可验证、可教学、可增长的循环。",
    card_kind: "checklist",
    phase_group: "core-gameplay-systems",
    deliverable_type: "single-mechanic-prototype-design",
    theme_tags: ["playtesting", "design-fundamentals"],
    related_work_ids: ["game-design-concepts-course", "mit-ocw-2016-introduction-to-game-design-methods", "mda-formal-approach"],
    related_card_ids: ["phase-guide-core-gameplay-systems", "prompt-core-gameplay-systems"],
    use_case: "用于原型评审、单机制设计 review，或检查“玩法散、系统多、没有核心”的问题。",
    checklist_items: [
      "核心循环已经能用 5-8 步清楚描述。",
      "玩家核心动词数量有限且各有功能差异。",
      "每个关键资源都能说明来源、用途和风险。",
      "失败条件与胜利条件不是装饰，而是真的塑造决策。",
      "前 5-10 分钟 onboarding 已经有具体教学方案。",
      "难度上升不是单纯堆数值，而是引入新理解。",
      "至少存在一个可一周内完成的验证原型。"
    ],
    pass_criteria: [
      "团队能指出当前系统里真正的最小验证件。",
      "试玩后能明确知道要删什么、保留什么。",
      "玩家行为和设计目标之间存在可观察映射。"
    ],
    failure_signals: [
      "循环只能靠世界观讲解，无法靠系统本身站住。",
      "系统很多，但每个系统都像平行存在的功能块。",
      "试玩反馈只能得到“感觉还行/不太行”。"
    ]
  },
  {
    id: "prompt-numbers-economy",
    title: "数值与经济设计 Prompt 模板",
    summary: "把资源、货币、成长、奖励与风险映射成可平衡的数值框架。",
    card_kind: "prompt_template",
    phase_group: "numbers-economy",
    deliverable_type: "numeric-framework-design",
    theme_tags: ["economy-loops", "systems-thinking", "prompt-design"],
    related_work_ids: ["game-mechanics-advanced-game-design", "characteristics-of-games", "advanced-game-design-a-systems-approach"],
    related_card_ids: ["phase-guide-numbers-economy", "checklist-numbers-economy"],
    use_case: "当资源循环已经存在，但产出、消耗、奖励和成长开始互相打架时使用。",
    inputs: [
      "全部货币、资源与成长维度",
      "每个资源的产出与消耗路径",
      "目标 session cadence 与付费/非付费约束",
      "当前平衡症状，例如通胀、卡点、奖励感不足",
      "你想控制的关键指标，如 TTK、进度速度、留存压力"
    ],
    output_sections: [
      "数值框架设计",
      "资源 faucet / sink 地图",
      "成长曲线与 gating",
      "掉落与奖励规则",
      "平衡风险",
      "测试与调参顺序"
    ],
    prompt: [
      "你是一个世界级数值与经济设计师。",
      "请把下面的系统描述整理成一个能调、能测、能扩展的数值框架。",
      "",
      "输入：",
      "- 货币/资源：{{currencies_and_resources}}",
      "- 产出路径：{{faucets}}",
      "- 消耗路径：{{sinks}}",
      "- 成长维度：{{progression_axes}}",
      "- 目标节奏：{{session_cadence}}",
      "- 商业化或非商业约束：{{monetization_constraints}}",
      "- 当前失衡症状：{{balance_symptoms}}",
      "- 关键指标：{{critical_metrics}}",
      "",
      "请输出：",
      "1. 数值框架：核心资源与层级关系。",
      "2. Faucet/Sink 地图：每个资源如何进入和离开系统。",
      "3. 成长曲线：短期、中期、长期目标与 gating。",
      "4. 奖励设计：掉落、奖励频率、风险回报关系。",
      "5. 风险：通胀、枯竭、无效资源、最优解固化等。",
      "6. 调参顺序：先调什么，再调什么，为什么。",
      "",
      "要求：",
      "- 把每个数值层的目的说清楚。",
      "- 明确指出哪些资源不应该同时承担多个冲突职责。",
      "- 如果存在商业化，单独指出其对平衡的扭曲风险。"
    ],
    followups: [
      "把成长曲线再拆成 early / mid / late game 三段。",
      "为掉落与奖励给出一个最小表格草案。"
    ]
  },
  {
    id: "checklist-numbers-economy",
    title: "数值与经济设计 Checklist",
    summary: "检查经济循环是否闭合、成长是否可控、奖励是否真正服务体验。",
    card_kind: "checklist",
    phase_group: "numbers-economy",
    deliverable_type: "economy-system-design",
    theme_tags: ["economy-loops", "systems-thinking"],
    related_work_ids: ["game-mechanics-advanced-game-design", "characteristics-of-games"],
    related_card_ids: ["phase-guide-numbers-economy", "prompt-numbers-economy"],
    use_case: "用于经济系统 review、战斗数值 review，或检查“调一处崩三处”的问题。",
    checklist_items: [
      "每个资源都能说明来源、去向和存在理由。",
      "不存在长期无用或只能囤积的死资源。",
      "成长曲线有明确的短中长期目标层次。",
      "奖励频率与风险程度匹配，不会长期失真。",
      "关键指标如 TTK、升级时长、稀缺资源速度有目标区间。",
      "没有某个资源既负责节奏控制又负责爽感奖励又负责商业化门槛。",
      "调参顺序已明确，不会所有表同时乱改。"
    ],
    pass_criteria: [
      "团队能说清经济循环闭环。",
      "玩家被卡住时能追到具体资源与规则，而不是只能凭感觉调。",
      "奖励与成长共同服务目标体验。"
    ],
    failure_signals: [
      "所有问题最后都靠加倍数或打折解决。",
      "资源系统靠例外规则维持平衡。",
      "奖励看起来很多，但没有真正改变玩家决策。"
    ]
  },
  {
    id: "prompt-development-implementation",
    title: "开发实现 Prompt 模板",
    summary: "把设计意图落成技术方案、模块边界、状态流和里程碑。",
    card_kind: "prompt_template",
    phase_group: "development-implementation",
    deliverable_type: "technical-solution-spec",
    theme_tags: ["project-audit", "prompt-design"],
    related_work_ids: ["level-up", "game-design-workshop", "mit-ocw-2016-introduction-to-game-design-methods"],
    related_card_ids: ["phase-guide-development-implementation", "checklist-development-implementation"],
    use_case: "当你已经有玩法方向，但还缺一份能让工程和策划同时执行的技术方案 spec 时使用。",
    inputs: [
      "目标平台与技术栈",
      "核心系统模块",
      "存档、状态机、输入、网络或工具需求",
      "性能预算与风险平台",
      "开发周期、里程碑与当前 blocker"
    ],
    output_sections: [
      "技术方案 spec",
      "模块边界与依赖",
      "状态与数据流",
      "存档/输入系统设计",
      "工具链与调试需求",
      "性能风险与优化顺序",
      "里程碑拆分"
    ],
    prompt: [
      "你是一个世界级游戏工程负责人和技术设计顾问。",
      "请把下面的设计目标整理成一份工程可执行的实现 spec。",
      "",
      "输入：",
      "- 平台与技术栈：{{platform_and_stack}}",
      "- 核心玩法模块：{{core_modules}}",
      "- 状态/数据问题：{{state_and_data_concerns}}",
      "- 存档/输入/网络需求：{{save_input_network_requirements}}",
      "- 工具与调试需求：{{tooling_needs}}",
      "- 性能预算：{{performance_budgets}}",
      "- 周期与 blocker：{{timeline_and_blockers}}",
      "",
      "请输出：",
      "1. 技术方案概览：为什么这样分层。",
      "2. 模块边界：每个模块负责什么，不负责什么。",
      "3. 状态与数据流：关键状态如何流转，谁拥有真值。",
      "4. 存档/状态机/输入系统：最低可行实现方案。",
      "5. 工具链：哪些内部工具最值得先做。",
      "6. 性能与风险：最可能炸的点和优先优化顺序。",
      "7. 里程碑：按周或按里程碑拆成最小交付。",
      "",
      "要求：",
      "- 不要输出泛泛架构图名词堆砌。",
      "- 对每个重要模块给出清晰 ownership。",
      "- 优先保留最能支撑验证的实现，不要先做豪华基础设施。"
    ],
    followups: [
      "把里程碑再细化成任务列表。",
      "单独展开存档 / 输入 / 状态机模块。"
    ]
  },
  {
    id: "checklist-development-implementation",
    title: "开发实现审查 Checklist",
    summary: "检查技术方案是否真正支撑验证、协作和后续扩展。",
    card_kind: "checklist",
    phase_group: "development-implementation",
    deliverable_type: "technical-solution-spec",
    theme_tags: ["project-audit"],
    related_work_ids: ["level-up", "mit-ocw-2016-introduction-to-game-design-methods"],
    related_card_ids: ["phase-guide-development-implementation", "prompt-development-implementation"],
    use_case: "用于实现前 spec review、版本技术审查或判断“为什么越做越乱”。",
    checklist_items: [
      "模块边界已经定义，重复 ownership 明显减少。",
      "关键状态有单一真值来源。",
      "存档、输入和状态机不是散落在功能代码里的隐式逻辑。",
      "调试与工具需求被单独列出，而不是默认以后再做。",
      "性能预算与高风险平台已经写清楚。",
      "里程碑先保证可验证，再考虑豪华封装。",
      "若砍半周期，知道优先保留哪些模块。"
    ],
    pass_criteria: [
      "工程和策划对交付范围理解一致。",
      "出现 bug 或性能问题时能快速定位到模块边界。",
      "技术方案支持快速迭代，而不是拖慢验证。"
    ],
    failure_signals: [
      "所有系统共用一套含糊的全局状态。",
      "关键风险被写成“后续优化”。",
      "工具、调试、观测能力完全缺失。"
    ]
  },
  {
    id: "prompt-testing-acceptance-audit",
    title: "测试、验收与审计 Prompt 模板",
    summary: "把当前版本转成清晰的验收标准、试玩问题、回归项和 stop/go 结论。",
    card_kind: "prompt_template",
    phase_group: "testing-acceptance-audit",
    deliverable_type: "project-status-audit",
    theme_tags: ["project-audit", "playtesting", "prompt-design"],
    related_work_ids: ["mit-ocw-2016-introduction-to-game-design-methods", "game-design-workshop", "game-design-concepts-course"],
    related_card_ids: ["phase-guide-testing-acceptance-audit", "checklist-testing-acceptance-audit"],
    use_case: "当版本开始可玩，但团队对“到底算不算通过”“先修什么”没有统一口径时使用。",
    inputs: [
      "当前 build 范围与目标玩家任务",
      "最新试玩发现和关键 bug",
      "已知高风险与 blocker",
      "版本目标与发版门槛",
      "你想验证的玩家体验问题"
    ],
    output_sections: [
      "玩法验收标准",
      "版本验收与 stop/go 判断",
      "Bug triage",
      "回归测试检查单",
      "试玩问题设计",
      "下一轮迭代优先级"
    ],
    prompt: [
      "你是一个世界级游戏测试负责人和项目审计顾问。",
      "请根据当前版本信息，输出一份能直接用于版本 review 的验收与审计结论。",
      "",
      "输入：",
      "- 当前 build 范围：{{build_scope}}",
      "- 目标玩家任务：{{target_tasks}}",
      "- 最新试玩反馈：{{latest_playtest_findings}}",
      "- 关键 bug / blocker：{{critical_bugs}}",
      "- 版本目标：{{release_goal}}",
      "- 发版门槛：{{release_bar}}",
      "- 重点体验问题：{{experience_questions}}",
      "",
      "请输出：",
      "1. 玩法验收标准：玩家必须完成什么才能算通过。",
      "2. 版本审计：当前是否达到目标，原因是什么。",
      "3. Bug triage：按严重度和影响链路排序。",
      "4. 回归测试检查单：每次构建必测项。",
      "5. 试玩问题设计：下一轮要重点问什么、观察什么。",
      "6. 优先级建议：先修什么，后修什么，哪些暂不修。",
      "",
      "要求：",
      "- 不要只列 bug，要说明影响的玩家任务和体验目标。",
      "- 明确 stop ship 条件。",
      "- 区分必须修复的问题和可以带病迭代的问题。"
    ],
    followups: [
      "把回归清单压成每日 smoke test 版本。",
      "单独输出一个给设计团队的体验问题清单。"
    ]
  },
  {
    id: "checklist-testing-acceptance-audit",
    title: "测试、验收与审计 Checklist",
    summary: "检查版本是否具备清楚的通过标准、回归边界和风险排序。",
    card_kind: "checklist",
    phase_group: "testing-acceptance-audit",
    deliverable_type: "regression-checklist",
    theme_tags: ["project-audit", "playtesting"],
    related_work_ids: ["mit-ocw-2016-introduction-to-game-design-methods", "game-design-workshop"],
    related_card_ids: ["phase-guide-testing-acceptance-audit", "prompt-testing-acceptance-audit"],
    use_case: "用于版本验收会、QA kickoff 或项目状态审计。",
    checklist_items: [
      "版本目标与通过标准已经写成玩家可执行任务。",
      "关键 bug 有严重度和影响路径，而不是一锅端待修。",
      "回归测试项覆盖核心循环、存档、输入和关键 UI。",
      "试玩问题有明确观察目标，不只是“随便玩玩看”。",
      "stop ship 条件写清楚并被全员接受。",
      "下一轮优先级按体验风险而不是按谁声音大排序。",
      "每次构建都能复用同一套基础 smoke test。"
    ],
    pass_criteria: [
      "团队知道当前版本到底在验什么。",
      "严重问题能快速归类为阻塞 / 非阻塞。",
      "试玩与 QA 结果能直接驱动下一轮取舍。"
    ],
    failure_signals: [
      "验收标准只写成主观句子，如“更流畅、更好玩”。",
      "版本会后仍然没人知道先修哪个问题。",
      "回归测试只能靠个人记忆。"
    ]
  },
  {
    id: "prompt-art-ui-experience",
    title: "美术、UI、体验表达 Prompt 模板",
    summary: "把视觉方向、HUD 结构、动效与可读性约束统一成可执行审查结论。",
    card_kind: "prompt_template",
    phase_group: "art-ui-experience",
    deliverable_type: "hud-ui-structure-design",
    theme_tags: ["ui-ux", "hit-feel", "prompt-design"],
    related_work_ids: ["game-feel", "level-up", "the-aesthetic-of-play"],
    related_card_ids: ["phase-guide-art-ui-experience", "checklist-art-ui-experience"],
    use_case: "当一个项目已经能玩，但界面拥挤、反馈发虚、风格不统一或移动阅读性差时使用。",
    inputs: [
      "视觉方向与参考图",
      "HUD / 菜单 / 信息层级现状",
      "目标设备、分辨率与输入方式",
      "当前反馈问题，例如打击感不足、动效拖沓、信息读不清",
      "可访问性或发行平台限制"
    ],
    output_sections: [
      "美术方向",
      "HUD / UI 结构设计",
      "视觉层级与可读性",
      "动效与打击感表达",
      "资产规格",
      "可访问性风险",
      "优先级最高的 polish 项"
    ],
    prompt: [
      "你是一个世界级游戏 UI / UX / art direction 顾问。",
      "请根据以下输入，把视觉表达和交互反馈整理成一份可执行的审查结论。",
      "",
      "输入：",
      "- 目标视觉方向：{{visual_direction}}",
      "- 参考作品：{{reference_titles}}",
      "- 当前 HUD / UI：{{hud_ui_state}}",
      "- 目标设备与输入方式：{{devices_and_input}}",
      "- 当前反馈问题：{{feedback_issues}}",
      "- 可访问性与平台限制：{{accessibility_constraints}}",
      "",
      "请输出：",
      "1. 美术方向：最应该保留的视觉 identity。",
      "2. HUD / UI 结构：信息层级、常驻元素、上下文元素。",
      "3. 可读性：字号、对比、留白、聚焦点问题。",
      "4. 动效与打击感：输入反馈、命中反馈、状态切换反馈。",
      "5. 资产规格：关键界面或美术资源需要怎样的规格约束。",
      "6. 可访问性风险：颜色、对比、操作复杂度、拥挤度。",
      "7. 优先级：最值得先修的 5 个 polish 项。",
      "",
      "要求：",
      "- 以玩家阅读和操作负担为中心。",
      "- 不要只说“做得更酷、更统一”，要指出具体结构问题。",
      "- 说明哪些问题影响理解，哪些问题只影响质感。"
    ],
    followups: [
      "把 HUD 结构细化成 wireframe 级描述。",
      "单独输出 hit-feel polish 清单。"
    ]
  },
  {
    id: "checklist-art-ui-experience",
    title: "美术、UI、体验表达 Checklist",
    summary: "检查视觉表达是否服务可读性、反馈闭环和整体体验节奏。",
    card_kind: "checklist",
    phase_group: "art-ui-experience",
    deliverable_type: "readability-accessibility-review",
    theme_tags: ["ui-ux", "hit-feel"],
    related_work_ids: ["game-feel", "level-up", "the-aesthetic-of-play"],
    related_card_ids: ["phase-guide-art-ui-experience", "prompt-art-ui-experience"],
    use_case: "用于 UI review、polish review 或判断“为什么看起来能玩但用起来发堵”。",
    checklist_items: [
      "屏幕上最重要的信息在 1 秒内能被看见。",
      "HUD 常驻信息与上下文信息分层清楚。",
      "输入、命中、受击、状态切换都有即时反馈。",
      "视觉风格统一，不同页面不会像来自不同游戏。",
      "字号、对比、颜色和动效速度对主要设备可读。",
      "关键信息不依赖颜色单独传达。",
      "最常见玩家任务不会被界面负担打断。"
    ],
    pass_criteria: [
      "玩家能快速理解当前状态和下一步动作。",
      "反馈闭环支撑了操作爽感与理解成本。",
      "视觉 identity 与玩法 identity 同向。"
    ],
    failure_signals: [
      "信息过多但没有层次，玩家只能扫全屏。",
      "动效很多却不能解释系统状态变化。",
      "界面问题只能靠玩家熟悉后去适应。"
    ]
  }
];

workflowCardSpecs.push(
  {
    id: "prompt-competitive-breakdown",
    title: "竞品拆解 Prompt 模板",
    summary: "把竞品分析压成方向判断、结构差异和可借鉴/不可抄用的结论。",
    card_kind: "prompt_template",
    phase_group: "initiation-direction",
    deliverable_type: "competitive-breakdown",
    theme_tags: ["design-fundamentals", "project-audit", "prompt-design"],
    related_work_ids: ["the-art-of-game-design", "game-design-workshop", "level-up"],
    related_card_ids: ["prompt-initiation-direction", "checklist-initiation-direction"],
    use_case: "当团队正在拿竞品做方向参照，但讨论停留在“像不像、酷不酷、卖得好不好”时使用。",
    inputs: [
      "你的项目一句话概念",
      "3-5 个直接竞品",
      "每个竞品最强与最弱的地方",
      "你最想借鉴和最怕重复的部分",
      "当前项目的资源和平台约束"
    ],
    output_sections: [
      "竞品分层",
      "核心差异判断",
      "可借鉴要素",
      "不可照搬要素",
      "机会区间",
      "对当前项目的方向建议"
    ],
    prompt: [
      "你是一个世界级游戏总监和竞品拆解顾问。",
      "请不要写市场套话，而是把竞品分析压成对项目方向有帮助的结论。",
      "",
      "输入：",
      "- 我们的项目：{{project_pitch}}",
      "- 竞品列表：{{competitors}}",
      "- 竞品优点：{{competitor_strengths}}",
      "- 竞品弱点：{{competitor_weaknesses}}",
      "- 想借鉴的部分：{{wanted_lessons}}",
      "- 不想重复的部分：{{avoid_copying}}",
      "- 资源/平台约束：{{constraints}}",
      "",
      "请输出：",
      "1. 竞品分层：哪些是直接竞品，哪些只是题材或情绪参考。",
      "2. 核心差异：我们的项目最应该和他们在哪些点拉开。",
      "3. 可借鉴要素：哪些机制、表达、节奏值得学。",
      "4. 不可照搬要素：哪些设计在我们的约束下会失真。",
      "5. 机会区间：还有哪些需求或体验没有被满足。",
      "6. 方向建议：这份竞品拆解会怎样改变我们的立项结论。",
      "",
      "要求：",
      "- 明确指出“看起来像机会、实际上是陷阱”的点。",
      "- 区分题材相似、体验相似、系统相似。",
      "- 最后给出一句方向建议。"
    ],
    followups: [
      "按 PC / 主机 / 移动端分别重做一版判断。",
      "只围绕核心循环再拆一层竞品差异。"
    ]
  },
  {
    id: "checklist-risk-precheck",
    title: "风险预判 Checklist",
    summary: "在原型前检查范围、资源、玩法和制作风险是否已经暴露。",
    card_kind: "checklist",
    phase_group: "initiation-direction",
    deliverable_type: "risk-precheck",
    theme_tags: ["project-audit", "design-fundamentals"],
    related_work_ids: ["the-art-of-game-design", "game-design-workshop"],
    related_card_ids: ["prompt-initiation-direction", "prompt-competitive-breakdown"],
    use_case: "用于立项会后、原型前和方向争议很大时的快速风险盘点。",
    checklist_items: [
      "核心玩法风险和制作风险被分开列出。",
      "最贵的系统、资产和技术假设已经点名。",
      "需要依赖未知外部条件的部分已被标红。",
      "范围膨胀风险已经落实到删减候选项。",
      "项目成功最依赖的 1-2 个假设已明确。",
      "每个高风险项都有验证动作，而不是只写担忧。",
      "失败后怎样止损也被提前考虑过。"
    ],
    pass_criteria: [
      "团队知道哪类风险先验证，哪类风险可以后置。",
      "高风险不再被包装成“以后再看”。",
      "原型阶段的重点足够聚焦。"
    ],
    failure_signals: [
      "所有风险都被写成“需要更多时间”。",
      "没有人能指出最可能导致项目失败的点。",
      "删减范围时没有任何预案。"
    ]
  },
  {
    id: "prompt-combat-system-design",
    title: "战斗系统设计 Prompt 模板",
    summary: "把战斗 fantasy 压成输入、状态、资源、反馈和 counterplay 结构。",
    card_kind: "prompt_template",
    phase_group: "core-gameplay-systems",
    deliverable_type: "combat-system-design",
    theme_tags: ["combat", "systems-thinking", "prompt-design"],
    related_work_ids: ["game-design-concepts-course", "game-feel", "mda-formal-approach"],
    related_card_ids: ["prompt-core-gameplay-systems", "checklist-core-gameplay-systems"],
    use_case: "当战斗开始成型，但动作、资源、反馈和职业/敌人差异还没有被整理成真正的战斗系统时使用。",
    inputs: [
      "战斗 fantasy 与视角",
      "玩家动词、武器/技能与敌人类型",
      "关键资源，如耐力、冷却、怒气、弹药",
      "期望的战斗节奏与时长",
      "当前战斗痛点，如站桩、乱、反馈弱、套路单一"
    ],
    output_sections: [
      "核心战斗循环",
      "输入与状态机框架",
      "资源与节奏控制",
      "敌我 counterplay",
      "命中/受击/失误反馈",
      "战斗原型验证方案"
    ],
    prompt: [
      "你是一个世界级战斗系统设计师。",
      "请把下面的战斗想法压成一个可测试、可扩展的战斗系统草案。",
      "",
      "输入：",
      "- 战斗 fantasy：{{combat_fantasy}}",
      "- 玩家动词：{{player_actions}}",
      "- 武器/技能：{{weapons_and_skills}}",
      "- 敌人类型：{{enemy_types}}",
      "- 关键资源：{{combat_resources}}",
      "- 目标节奏：{{combat_pacing}}",
      "- 当前痛点：{{combat_pain_points}}",
      "",
      "请输出：",
      "1. 核心战斗循环：接敌、博弈、爆发、收尾如何闭环。",
      "2. 输入与状态：关键状态、取消、硬直、窗口和风险。",
      "3. 资源设计：每个资源怎样塑造节奏，而不是只是限制。",
      "4. Counterplay：玩家对敌人、敌人对玩家各有哪些可读反制。",
      "5. 反馈：命中、受击、失误、处决或爆发的反馈设计重点。",
      "6. 原型验证：先做什么最能验证这套战斗有没有深度。",
      "",
      "要求：",
      "- 不要只堆技能名词。",
      "- 说明为什么战斗不会很快退化成单一最优打法。",
      "- 指出最可能出现的读不懂或不公平问题。"
    ],
    followups: [
      "把敌人 archetype 再拆成 4 类。",
      "把反馈设计单独整理成 hit-feel 清单。"
    ]
  },
  {
    id: "checklist-onboarding-design",
    title: "新手引导设计 Checklist",
    summary: "检查前 5-10 分钟是否真的教会了玩家，而不是只展示了功能。",
    card_kind: "checklist",
    phase_group: "core-gameplay-systems",
    deliverable_type: "onboarding-design",
    theme_tags: ["playtesting", "ui-ux"],
    related_work_ids: ["game-design-concepts-course", "game-design-workshop"],
    related_card_ids: ["prompt-core-gameplay-systems", "checklist-core-gameplay-systems"],
    use_case: "用于新手期设计 review、首玩试玩复盘，或排查“明明系统不复杂但玩家就是不会”的问题。",
    checklist_items: [
      "前 5 分钟只教最必要的动作和判断。",
      "教学顺序跟真实玩家任务顺序一致。",
      "每条教学后都有立即实践机会。",
      "失败反馈会告诉玩家哪里理解错，而不是只惩罚。",
      "UI 提示不会抢走玩家对战场/场景的注意力。",
      "玩家在学会核心循环前不会被塞进太多并行系统。",
      "试玩记录能指出具体卡点，而不是只知道“新手流失”。"
    ],
    pass_criteria: [
      "新玩家能在短时间内完成首个完整循环。",
      "教学内容与后续正式玩法一致。",
      "教学结束后玩家知道接下来自己该做什么。"
    ],
    failure_signals: [
      "教程像说明书，玩家只是在照本宣科。",
      "系统教会了，但玩家不知道为何而做。",
      "新手期把后续复杂度一次性前置。"
    ]
  },
  {
    id: "prompt-economy-system-design",
    title: "经济系统设计 Prompt 模板",
    summary: "把资源和货币系统整理成层级、流向、稀缺关系与调参点。",
    card_kind: "prompt_template",
    phase_group: "numbers-economy",
    deliverable_type: "economy-system-design",
    theme_tags: ["economy-loops", "systems-thinking", "prompt-design"],
    related_work_ids: ["game-mechanics-advanced-game-design", "characteristics-of-games"],
    related_card_ids: ["prompt-numbers-economy", "checklist-numbers-economy"],
    use_case: "当经济系统开始膨胀，资源名词越来越多，却没人能说清每个资源到底干什么时使用。",
    inputs: [
      "全部货币与资源",
      "短中长期消耗目标",
      "稀缺资源与爆点资源",
      "玩家获取方式与损失方式",
      "当前经济症状，如通胀、囤积、无意义 grind"
    ],
    output_sections: [
      "经济层级",
      "资源职责划分",
      "获取/消耗流向",
      "稀缺控制",
      "风险点",
      "调参与监控建议"
    ],
    prompt: [
      "你是一个世界级游戏经济设计师。",
      "请把以下经济系统整理成一个职责清晰、可维护的系统方案。",
      "",
      "输入：",
      "- 货币与资源：{{resources}}",
      "- 短中长期目标：{{short_mid_long_goals}}",
      "- 获取方式：{{earning_methods}}",
      "- 消耗方式：{{spending_methods}}",
      "- 稀缺资源：{{scarce_resources}}",
      "- 当前症状：{{economy_symptoms}}",
      "",
      "请输出：",
      "1. 经济层级：哪些资源负责日常、成长、稀缺、 prestige。",
      "2. 资源职责：每个资源该解决什么，不该解决什么。",
      "3. 获取/消耗流：玩家如何进入和离开每条资源链。",
      "4. 稀缺控制：哪些门槛在控节奏，哪些在控选择。",
      "5. 风险：通胀、囤积、失真、低价值资源。",
      "6. 调参建议：最先监控和最先动刀的点。",
      "",
      "要求：",
      "- 指出可以合并掉的冗余资源。",
      "- 区分“有价值的稀缺”和“令人烦躁的卡点”。",
      "- 最后给一个简版资源结构图描述。"
    ],
    followups: [
      "把经济系统压成一张资源流表。",
      "单独对稀缺资源做风险演算。"
    ]
  },
  {
    id: "checklist-growth-curve-design",
    title: "成长曲线设计 Checklist",
    summary: "检查成长是否真的带来新理解，而不是只是数字更大。",
    card_kind: "checklist",
    phase_group: "numbers-economy",
    deliverable_type: "growth-curve-design",
    theme_tags: ["economy-loops", "fun-theory"],
    related_work_ids: ["a-theory-of-fun-for-game-design", "game-mechanics-advanced-game-design"],
    related_card_ids: ["prompt-numbers-economy", "checklist-numbers-economy"],
    use_case: "用于成长系统 review、长期进度 review，或诊断“升级很多但没变强感”的问题。",
    checklist_items: [
      "成长每个阶段都带来新决策或新理解。",
      "升级不仅提高数值，也改变玩家行为选择。",
      "短期奖励、中期 build、长期目标彼此区分清楚。",
      "卡关时玩家知道缺的是什么，而不是只觉得更 grind。",
      "成长门槛不会与核心乐趣脱节。",
      "重复行为不会成为唯一进度来源。",
      "后期成长不会让前期系统全部失效。"
    ],
    pass_criteria: [
      "成长能持续提供掌握感或身份差异。",
      "玩家知道为什么要追求下一个阶段。",
      "成长路径和项目体验目标一致。"
    ],
    failure_signals: [
      "升级只意味着打得更久、刷得更多。",
      "后期所有 build 都收敛成同一个答案。",
      "成长系统像外接模块，和玩法循环无关。"
    ]
  },
  {
    id: "prompt-prototype-implementation",
    title: "原型实现 Prompt 模板",
    summary: "把一个设计命题压成最小实现范围、技术切片和验证顺序。",
    card_kind: "prompt_template",
    phase_group: "development-implementation",
    deliverable_type: "prototype-implementation-prompt",
    theme_tags: ["prompt-design", "project-audit"],
    related_work_ids: ["game-design-workshop", "mit-ocw-2016-introduction-to-game-design-methods"],
    related_card_ids: ["prompt-development-implementation", "checklist-development-implementation"],
    use_case: "当你知道要做原型，但总是一下子想把完整系统都做完时使用。",
    inputs: [
      "要验证的命题",
      "必须存在的玩法与 UI 元素",
      "可以 fake 或跳过的部分",
      "目标周期与验收标准",
      "主要技术约束和复用模块"
    ],
    output_sections: [
      "原型范围",
      "最小技术切片",
      "数据与状态简化",
      "临时实现与正式实现边界",
      "验收标准",
      "放弃项"
    ],
    prompt: [
      "你是一个世界级原型工程负责人。",
      "请把下面的设计命题压成一份最小可行原型实现方案。",
      "",
      "输入：",
      "- 设计命题：{{prototype_goal}}",
      "- 必要功能：{{must_have_features}}",
      "- 可 fake 项：{{fakeable_parts}}",
      "- 周期：{{timeline}}",
      "- 验收标准：{{acceptance_bar}}",
      "- 技术约束：{{technical_constraints}}",
      "",
      "请输出：",
      "1. 原型范围：哪些东西必须真的做出来。",
      "2. 最小技术切片：先做哪 3-5 个系统切片。",
      "3. 简化策略：哪些数据、状态、UI 可以先简化。",
      "4. 临时实现边界：哪些是 throwaway，哪些以后可复用。",
      "5. 验收标准：怎样才算验证成功。",
      "6. 放弃项：这次坚决不做什么。",
      "",
      "要求：",
      "- 目标是验证，不是生产级完整度。",
      "- 如果一个模块不是验证必需，优先删掉。",
      "- 明确指出最容易偷跑成正式开发的地方。"
    ],
    followups: [
      "把技术切片改成按天拆分。",
      "给每个切片补一个 smoke test。"
    ]
  },
  {
    id: "checklist-save-state-input-systems",
    title: "存档 / 状态机 / 输入系统 Checklist",
    summary: "检查基础运行系统是否已经足够稳定，不会成为后续迭代的隐形炸点。",
    card_kind: "checklist",
    phase_group: "development-implementation",
    deliverable_type: "save-state-input-systems",
    theme_tags: ["project-audit"],
    related_work_ids: ["level-up", "advanced-game-design-a-systems-approach"],
    related_card_ids: ["prompt-development-implementation", "checklist-development-implementation"],
    use_case: "用于系统底座 review、版本稳定性 review，或定位“功能都在加，但基础越来越脆”的问题。",
    checklist_items: [
      "关键状态有单一真值来源。",
      "存档内容和运行时状态边界清楚。",
      "输入映射、输入缓冲和禁用条件有统一规则。",
      "状态切换不是散落在各个功能里的隐式 if/else。",
      "异常中断和恢复路径有最小处理方案。",
      "调试时能观察到当前状态与输入。",
      "这些系统能在原型阶段先用简化版稳定跑起来。"
    ],
    pass_criteria: [
      "基础系统不再靠约定俗成维持。",
      "新增玩法时不会反复打穿底层状态逻辑。",
      "bug 定位可以从状态和输入链路切入。"
    ],
    failure_signals: [
      "任何新功能都能随意改全局状态。",
      "玩家卡死或读档异常时无法解释当前状态。",
      "输入冲突只能靠加补丁修。"
    ]
  },
  {
    id: "prompt-project-status-audit",
    title: "项目状态审计 Prompt 模板",
    summary: "把当前项目进度压成阶段判断、风险排序和 stop/continue 建议。",
    card_kind: "prompt_template",
    phase_group: "testing-acceptance-audit",
    deliverable_type: "project-status-audit",
    theme_tags: ["project-audit", "prompt-design"],
    related_work_ids: ["mit-ocw-2016-introduction-to-game-design-methods", "game-design-workshop"],
    related_card_ids: ["prompt-testing-acceptance-audit", "checklist-testing-acceptance-audit"],
    use_case: "用于 milestone review、版本停损判断，或团队觉得一直很忙但不确定到底有没有往前走时。",
    inputs: [
      "当前目标与本期范围",
      "已完成内容与未完成内容",
      "最近试玩/QA/用户反馈",
      "当前 blocker、技术债和制作债",
      "团队时间和资源变化"
    ],
    output_sections: [
      "阶段判断",
      "当前真实进展",
      "关键阻塞",
      "风险排序",
      "建议的 stop/continue/pivot 结论",
      "下一阶段最小目标"
    ],
    prompt: [
      "你是一个世界级项目审计顾问。",
      "请基于下面的信息，对项目当前状态做一次严格的阶段审计。",
      "",
      "输入：",
      "- 当前目标：{{current_goal}}",
      "- 本期范围：{{current_scope}}",
      "- 已完成内容：{{done_items}}",
      "- 未完成内容：{{undone_items}}",
      "- 最新试玩/QA：{{latest_findings}}",
      "- blocker 与技术债：{{blockers_and_debt}}",
      "- 资源变化：{{resource_changes}}",
      "",
      "请输出：",
      "1. 阶段判断：项目现在更像立项、原型、生产还是 polishing，为什么。",
      "2. 真实进展：哪些进展是真的，哪些只是忙碌感。",
      "3. 阻塞：当前最大的 3-5 个阻塞项。",
      "4. 风险排序：现在最该先解决什么。",
      "5. 结论：continue / stop / pivot，并说明理由。",
      "6. 下一阶段目标：只保留最小可推进目标。",
      "",
      "要求：",
      "- 不要安慰式总结。",
      "- 明确指出伪进展。",
      "- 需要停损时直接说。"
    ],
    followups: [
      "把下一阶段目标改成两周冲刺版本。",
      "只围绕最大 blocker 再展开一版解决路径。"
    ]
  },
  {
    id: "checklist-build-acceptance",
    title: "版本验收 Checklist",
    summary: "检查当前 build 是否达到可提交、可试玩、可继续迭代的最低门槛。",
    card_kind: "checklist",
    phase_group: "testing-acceptance-audit",
    deliverable_type: "build-acceptance",
    theme_tags: ["project-audit", "playtesting"],
    related_work_ids: ["mit-ocw-2016-introduction-to-game-design-methods", "game-design-concepts-course"],
    related_card_ids: ["prompt-testing-acceptance-audit", "checklist-testing-acceptance-audit"],
    use_case: "用于每周 build review、对外试玩前检查，或确认一个版本是否值得继续基于其迭代。",
    checklist_items: [
      "核心循环可完整跑通至少一轮。",
      "关键任务和关键路径不会被 blocker 卡死。",
      "高严重度 bug 已经单独列出并有处理结论。",
      "回归高风险项至少过一遍 smoke test。",
      "本版本的目标玩家问题有对应观测点。",
      "试玩者能在最小引导下完成主要任务。",
      "团队对“这个版本算不算通过”已有统一口径。"
    ],
    pass_criteria: [
      "版本可用于验证当前阶段目标。",
      "严重缺陷不会掩盖真正想观察的体验问题。",
      "本次 build 的价值和局限都已明确。"
    ],
    failure_signals: [
      "版本跑不通却仍试图讨论高层体验。",
      "所有问题都被当成同一个优先级。",
      "试玩后得不到与目标相关的结论。"
    ]
  },
  {
    id: "prompt-hud-ui-structure-design",
    title: "HUD / UI 结构设计 Prompt 模板",
    summary: "把 UI 面板、常驻信息和上下文反馈压成一套可读的结构方案。",
    card_kind: "prompt_template",
    phase_group: "art-ui-experience",
    deliverable_type: "hud-ui-structure-design",
    theme_tags: ["ui-ux", "prompt-design"],
    related_work_ids: ["game-feel", "level-up"],
    related_card_ids: ["prompt-art-ui-experience", "checklist-art-ui-experience"],
    use_case: "当画面上信息越来越多，团队都觉得“应该再整理一下”，但没人能说清结构应该怎样重排时使用。",
    inputs: [
      "当前 HUD 截图或元素清单",
      "玩家最常做的任务",
      "常驻信息、上下文信息和警报信息",
      "目标设备与输入方式",
      "当前阅读和操作痛点"
    ],
    output_sections: [
      "信息层级",
      "区域分配",
      "常驻/上下文元素拆分",
      "交互优先级",
      "危险拥挤点",
      "重排建议"
    ],
    prompt: [
      "你是一个世界级游戏 HUD / UI 架构顾问。",
      "请基于以下输入，把当前界面重组为一套更可读、更符合玩家任务流的 HUD 方案。",
      "",
      "输入：",
      "- 当前 HUD / UI：{{current_hud}}",
      "- 玩家常见任务：{{common_player_tasks}}",
      "- 常驻信息：{{persistent_info}}",
      "- 上下文信息：{{contextual_info}}",
      "- 警报/高优先级信息：{{alerts}}",
      "- 设备与输入：{{devices_and_input}}",
      "- 当前痛点：{{ui_pain_points}}",
      "",
      "请输出：",
      "1. 信息层级：什么必须常驻，什么只在上下文出现。",
      "2. 屏幕区域：左上/右上/底部/中心分别放什么。",
      "3. 任务导向结构：玩家在常见任务里最先看哪里。",
      "4. 拥挤与冲突：哪些元素在抢同一块注意力。",
      "5. 重排建议：删什么、合并什么、后置什么。",
      "6. 简版 wireframe 描述：按区域描述最终布局。",
      "",
      "要求：",
      "- 以玩家任务优先，而不是按功能部门分区。",
      "- 区分常驻信息和“只有设计师想看到”的信息。",
      "- 不要增加更多面板来解决拥挤。"
    ],
    followups: [
      "把最终布局再细化成移动端版本。",
      "单独评估战斗态 HUD。"
    ]
  },
  {
    id: "checklist-player-flow-review",
    title: "玩家体验流畅度评审 Checklist",
    summary: "检查玩家是否被界面、反馈、切换和等待打断了体验节奏。",
    card_kind: "checklist",
    phase_group: "art-ui-experience",
    deliverable_type: "player-flow-review",
    theme_tags: ["ui-ux", "hit-feel"],
    related_work_ids: ["game-feel", "the-aesthetic-of-play"],
    related_card_ids: ["prompt-art-ui-experience", "checklist-art-ui-experience"],
    use_case: "用于体验 polish review，或排查“没有大 bug 但玩起来总觉得卡、堵、断”的问题。",
    checklist_items: [
      "玩家最常见任务不会频繁被弹窗或层级跳转打断。",
      "关键状态切换有足够快且明确的反馈。",
      "等待、加载、过场和确认步骤数量可控。",
      "失败和重试的链路足够短。",
      "从一个系统跳到另一个系统时不会丢失上下文。",
      "需要玩家注意的信号强度与其重要性匹配。",
      "高频动作不会因为 UI 或动画过度而变慢。"
    ],
    pass_criteria: [
      "玩家能持续保持在目标任务流里。",
      "系统切换不会制造无谓摩擦。",
      "节奏问题可以被定位到具体节点。"
    ],
    failure_signals: [
      "体验被大量小停顿切碎。",
      "玩家总在问“我接下来去哪/看哪”。",
      "界面和动画为了表现自己而压过了操作节奏。"
    ]
  }
);

workflowCardSpecs.push(
  {
    id: "prompt-worldbuilding",
    title: "世界观设定 Prompt 模板",
    summary: "把世界观从背景设定压成与玩法、身份、资源和冲突真正相关的设计框架。",
    card_kind: "prompt_template",
    phase_group: "content-narrative",
    deliverable_type: "worldbuilding",
    theme_tags: ["worldbuilding", "systems-thinking", "prompt-design"],
    related_work_ids: ["designing-virtual-worlds", "the-art-of-game-design", "play-matters"],
    related_card_ids: ["note-applying-the-kb-to-projects", "phase-guide-content-narrative"],
    use_case: "当世界观文档越写越厚，但跟玩家行为、资源关系和系统冲突仍然脱节时使用。",
    inputs: [
      "项目题材与核心 fantasy",
      "玩家在世界中的身份",
      "关键势力、地点、资源和禁忌",
      "你想强调的价值冲突或生存压力",
      "当前世界观和玩法脱节的点"
    ],
    output_sections: [
      "世界观核心命题",
      "玩家身份与位置",
      "势力/地点/资源结构",
      "主要冲突",
      "世界规则如何作用于玩法",
      "应保留与应删除的设定"
    ],
    prompt: [
      "你是一个世界级游戏叙事设计师和系统世界构建顾问。",
      "请把以下世界观想法整理成一套能真正服务玩法和身份表达的世界框架。",
      "",
      "输入：",
      "- 题材与核心 fantasy：{{theme_and_fantasy}}",
      "- 玩家身份：{{player_role}}",
      "- 势力与地点：{{factions_and_places}}",
      "- 关键资源与禁忌：{{resources_and_taboos}}",
      "- 核心冲突：{{core_conflicts}}",
      "- 当前脱节点：{{worldbuilding_disconnects}}",
      "",
      "请输出：",
      "1. 世界观核心命题：这个世界最重要的规则和张力是什么。",
      "2. 玩家身份：玩家在这个世界里是谁，为什么重要。",
      "3. 势力/地点/资源结构：它们如何制造选择与风险。",
      "4. 主要冲突：哪些冲突会持续推动内容与系统。",
      "5. 对玩法的作用：世界规则如何落到循环、成长、叙事和经济。",
      "6. 删改建议：哪些设定值得保留，哪些只是装饰噪音。",
      "",
      "要求：",
      "- 不要写百科全书式背景介绍。",
      "- 所有设定都要能回答“它怎样影响玩家的行为或判断”。",
      "- 如果存在设定很酷但会拖垮玩法的部分，要直接指出。"
    ],
    followups: [
      "只围绕玩家身份与长期归属感再拆一版。",
      "只围绕势力冲突和资源政治再拆一版。"
    ]
  },
  {
    id: "checklist-narrative-structure-review",
    title: "叙事结构评审 Checklist",
    summary: "检查主线、支线和系统事件是否形成了清楚的叙事推进结构，而不是内容堆砌。",
    card_kind: "checklist",
    phase_group: "content-narrative",
    deliverable_type: "narrative-structure-review",
    theme_tags: ["worldbuilding", "player-motivation"],
    related_work_ids: ["the-aesthetic-of-play", "play-matters", "the-art-of-game-design"],
    related_card_ids: ["prompt-worldbuilding", "prompt-dialogue-writing"],
    use_case: "用于剧情结构 review、任务树审查，或处理“内容很多但推进无感”的问题。",
    checklist_items: [
      "主线推进与玩家核心目标一致。",
      "支线不是纯填充，而是在补角色、世界或系统理解。",
      "关键叙事节点有清楚的节奏变化和 stakes 上升。",
      "系统事件与剧情事件不会互相打断或互相否定。",
      "玩家在叙事中拥有足够的行动位置，而不是只看故事发生。",
      "叙事回报与玩法回报关系清楚。",
      "内容结构能支持后续扩展，而不是每条线都重新起炉灶。"
    ],
    pass_criteria: [
      "玩家能感知自己在往哪条线推进，以及为什么推进。",
      "叙事结构在系统层也成立，而不只是文本层成立。",
      "每条内容线都知道自己服务的目标。"
    ],
    failure_signals: [
      "剧情和系统像两套并行节目单。",
      "支线只能靠奖励来吸引玩家。",
      "关键节点出现时没有结构上的重量变化。"
    ]
  },
  {
    id: "prompt-dialogue-writing",
    title: "对话写作 Prompt 模板",
    summary: "把角色对话压成身份、关系、信息效率和可玩性兼顾的文本方案。",
    card_kind: "prompt_template",
    phase_group: "content-narrative",
    deliverable_type: "dialogue-writing",
    theme_tags: ["worldbuilding", "prompt-design"],
    related_work_ids: ["play-matters", "the-aesthetic-of-play", "designing-virtual-worlds"],
    related_card_ids: ["prompt-worldbuilding", "checklist-narrative-structure-review"],
    use_case: "当角色会说话了，但文本还在“交代信息”和“立角色”之间打架时使用。",
    inputs: [
      "角色身份、关系和当前场景目标",
      "玩家此刻最需要知道的信息",
      "这段对话要推动的任务或情绪",
      "角色口吻和禁区",
      "当前对话的问题，如啰嗦、平、信息塞车"
    ],
    output_sections: [
      "对话目标",
      "角色关系张力",
      "信息分配",
      "示例对话",
      "删减建议",
      "可交互点"
    ],
    prompt: [
      "你是一个世界级游戏对话写作者。",
      "请把下面的场景信息整理成一段既能立角色、又不拖垮节奏的游戏对话方案。",
      "",
      "输入：",
      "- 角色与关系：{{characters_and_relationships}}",
      "- 当前场景目标：{{scene_goal}}",
      "- 玩家必须知道的信息：{{must_know_info}}",
      "- 任务/情绪推进：{{quest_or_emotion_goal}}",
      "- 角色口吻：{{voice_constraints}}",
      "- 当前问题：{{dialogue_problems}}",
      "",
      "请输出：",
      "1. 对话目标：这段对话最该完成什么。",
      "2. 关系张力：角色之间最重要的拉扯是什么。",
      "3. 信息分配：哪些信息明说，哪些留白。",
      "4. 示例对话：写一段可直接进游戏的版本。",
      "5. 删减建议：哪些句子最容易变成废话。",
      "6. 交互点：玩家在哪些地方适合介入或选择。",
      "",
      "要求：",
      "- 不要用纯 exposition 对话。",
      "- 角色说话方式要能区分身份和关系。",
      "- 优先保证游戏节奏，不要把对话写成小说段落。"
    ],
    followups: [
      "改成更短、更适合高频交互的版本。",
      "只保留任务信息最小化版本。"
    ]
  },
  {
    id: "checklist-quest-text-design",
    title: "任务文本设计 Checklist",
    summary: "检查任务文本是否清楚、可执行、符合角色与世界规则。",
    card_kind: "checklist",
    phase_group: "content-narrative",
    deliverable_type: "quest-text-design",
    theme_tags: ["worldbuilding", "ui-ux"],
    related_work_ids: ["level-up", "the-aesthetic-of-play"],
    related_card_ids: ["prompt-dialogue-writing", "checklist-narrative-structure-review"],
    use_case: "用于任务文案 review、日志文案 review，或排查“玩家看了字但还是不知道做什么”。",
    checklist_items: [
      "任务目标写成玩家可执行动作，而不是含糊愿望。",
      "文本长度与玩家阅读负担匹配。",
      "关键信息不会埋在背景描述里。",
      "角色口吻与世界观一致。",
      "玩家读完后能知道去哪里、做什么、为什么做。",
      "日志文本、接受文本、完成文本之间信息分工清楚。",
      "文本不会误导玩家做错误路径判断。"
    ],
    pass_criteria: [
      "任务文本既能说明目标，也能保留角色味道。",
      "玩家不需要二次猜测系统意图。",
      "文本支持行动，而不是只做装饰。"
    ],
    failure_signals: [
      "文本很有风格，但任务目标不清楚。",
      "文本清楚了，但完全失去角色和世界语气。",
      "玩家只能靠 UI 高亮而不是文本理解任务。"
    ]
  },
  {
    id: "prompt-store-page-copy",
    title: "商店页文案 Prompt 模板",
    summary: "把项目卖点压成商店页 headline、短描述、长描述和 feature bullets。",
    card_kind: "prompt_template",
    phase_group: "operations-release",
    deliverable_type: "store-page-copy",
    theme_tags: ["release-ops", "prompt-design"],
    related_work_ids: ["level-up", "the-art-of-game-design"],
    related_card_ids: ["checklist-pre-release-check", "checklist-update-roadmap"],
    use_case: "当项目准备对外曝光，但文案还停留在内部语言或世界观堆砌时使用。",
    inputs: [
      "项目一句话概念与目标玩家",
      "最想强调的 3-5 个卖点",
      "参考竞品商店页",
      "目标平台与商店限制",
      "最怕被误解的点"
    ],
    output_sections: [
      "headline",
      "short description",
      "feature bullets",
      "long description structure",
      "误解风险",
      "A/B 方向"
    ],
    prompt: [
      "你是一个世界级游戏发行文案顾问。",
      "请把以下项目信息整理成适合商店页的对外文案结构。",
      "",
      "输入：",
      "- 项目概念：{{project_pitch}}",
      "- 目标玩家：{{target_players}}",
      "- 核心卖点：{{key_features}}",
      "- 参考商店页：{{reference_store_pages}}",
      "- 平台限制：{{store_constraints}}",
      "- 最怕被误解的点：{{misunderstandings}}",
      "",
      "请输出：",
      "1. headline：一行抓住项目定位。",
      "2. short description：简短说明玩家会做什么、为什么值得玩。",
      "3. feature bullets：3-6 条高强度卖点。",
      "4. long description 结构：分段说明项目体验。",
      "5. 误解风险：哪些说法会把玩家带偏。",
      "6. 两个文案方向：更系统导向 / 更情绪导向。",
      "",
      "要求：",
      "- 不要写内部术语。",
      "- 少讲概念，多讲玩家实际会做什么。",
      "- 必须能和竞品形成差异。"
    ],
    followups: [
      "改成更偏 Steam 的写法。",
      "改成更偏主机商店的短文案版本。"
    ]
  },
  {
    id: "checklist-pre-release-check",
    title: "发布前检查 Checklist",
    summary: "检查项目在对外试玩、上架或发版本前是否已经满足最基本的发布条件。",
    card_kind: "checklist",
    phase_group: "operations-release",
    deliverable_type: "pre-release-check",
    theme_tags: ["release-ops", "project-audit"],
    related_work_ids: ["level-up", "game-design-workshop"],
    related_card_ids: ["prompt-store-page-copy", "checklist-build-acceptance"],
    use_case: "用于外部 demo、封测、商店页上线或公开活动前的最后一轮通读。",
    checklist_items: [
      "版本目标和对外承诺一致。",
      "最容易触发的 blocker 已有结论。",
      "商店页文案、截图、视频和实际版本体验方向一致。",
      "最基本的新手路径可在外部环境下走通。",
      "已知高风险问题有公开说明或内部预案。",
      "反馈收集方式已经准备好。",
      "团队知道发布后第一时间要盯什么。"
    ],
    pass_criteria: [
      "对外版本不会因为基础问题完全失焦。",
      "玩家第一印象与文案承诺一致。",
      "团队具备发布后的响应准备。"
    ],
    failure_signals: [
      "对外承诺超过当前版本实际可交付。",
      "出了问题没人知道先看哪里。",
      "发布被当成结束，而不是下一轮输入开始。"
    ]
  },
  {
    id: "prompt-retention-optimization",
    title: "留存优化 Prompt 模板",
    summary: "把留存问题压成具体的流失节点、驱动力缺口和可实验优化点。",
    card_kind: "prompt_template",
    phase_group: "operations-release",
    deliverable_type: "retention-optimization",
    theme_tags: ["release-ops", "player-motivation", "prompt-design"],
    related_work_ids: ["designing-virtual-worlds", "a-theory-of-fun-for-game-design", "play-matters"],
    related_card_ids: ["prompt-player-market-definition", "checklist-update-roadmap"],
    use_case: "当团队已经感受到玩家流失，但还停留在“多做点内容/多发点奖励”这类粗放反应时使用。",
    inputs: [
      "目标留存周期和目标玩家",
      "玩家进入、回流和流失节点",
      "当前留存症状",
      "已有系统如任务、成长、社交、活动",
      "你怀疑最影响留存的 2-3 个原因"
    ],
    output_sections: [
      "留存问题拆分",
      "关键流失节点",
      "驱动力缺口",
      "短中长期优化点",
      "不该做的伪优化",
      "实验优先级"
    ],
    prompt: [
      "你是一个世界级 live ops 与玩家留存顾问。",
      "请把下面的留存问题整理成能实际实验和验证的优化方案。",
      "",
      "输入：",
      "- 目标玩家与周期：{{retention_target}}",
      "- 进入/回流/流失节点：{{retention_funnel}}",
      "- 当前症状：{{retention_symptoms}}",
      "- 现有系统：{{current_systems}}",
      "- 怀疑原因：{{suspected_causes}}",
      "",
      "请输出：",
      "1. 留存问题拆分：这到底是 onboarding、目标感、奖励、社交还是节奏问题。",
      "2. 流失节点：玩家最容易在哪些时刻离开。",
      "3. 驱动力缺口：哪些动机没有被接住。",
      "4. 短中长期优化点：哪些可以立刻试，哪些需要结构改动。",
      "5. 伪优化：哪些做法看似加内容，实际上只会拖慢判断。",
      "6. 实验优先级：先做哪 3 个实验，为什么。",
      "",
      "要求：",
      "- 不要默认“多奖励”就是答案。",
      "- 重点指出留存问题和核心体验是否矛盾。",
      "- 最后给一个最小实验列表。"
    ],
    followups: [
      "只围绕次日留存重做一版。",
      "只围绕中长期目标感重做一版。"
    ]
  },
  {
    id: "checklist-update-roadmap",
    title: "更新路线图 Checklist",
    summary: "检查 roadmap 是否围绕玩家价值和阶段判断，而不是杂乱功能愿望单。",
    card_kind: "checklist",
    phase_group: "operations-release",
    deliverable_type: "update-roadmap",
    theme_tags: ["release-ops", "project-audit"],
    related_work_ids: ["level-up", "designing-virtual-worlds"],
    related_card_ids: ["prompt-retention-optimization", "prompt-project-status-audit"],
    use_case: "用于内容 roadmap review、版本路线整理，或防止更新计划退化成功能堆叠。",
    checklist_items: [
      "roadmap 的阶段顺序有清楚逻辑，而不是谁想加什么就排什么。",
      "每个版本目标对应明确的玩家价值。",
      "短期修复、中期系统优化、长期扩展被区分清楚。",
      "路线图没有承诺超出团队真实产能的内容。",
      "每个版本都有可验证的成功标准。",
      "更新项不会持续背离项目核心体验。",
      "有明确的删减与顺延规则。"
    ],
    pass_criteria: [
      "roadmap 能指导实际取舍，而不是只做展示。",
      "团队知道为什么这个版本先于那个版本。",
      "更新路线和玩家反馈形成闭环。"
    ],
    failure_signals: [
      "路线图只是在维护期待，没有维护焦点。",
      "每个版本都在同时做修 bug、加系统、加内容、改方向。",
      "版本顺序无法解释。"
    ]
  },
  {
    id: "prompt-platform-fit-evaluation",
    title: "平台适配判断 Prompt 模板",
    summary: "把项目与平台之间的控制、节奏、会话长度和商业预期冲突压成明确判断。",
    card_kind: "prompt_template",
    phase_group: "initiation-direction",
    deliverable_type: "platform-fit-evaluation",
    theme_tags: ["design-fundamentals", "project-audit", "prompt-design"],
    related_work_ids: ["level-up", "the-art-of-game-design", "game-design-workshop"],
    related_card_ids: ["prompt-initiation-direction", "prompt-player-market-definition"],
    use_case: "当团队同时想上多个平台，但没有真正分析输入、节奏、展示和市场预期是否匹配时使用。",
    inputs: [
      "项目概念与核心循环",
      "目标平台列表",
      "输入方式和会话长度",
      "性能与资源约束",
      "团队最担心的平台错配点"
    ],
    output_sections: [
      "平台适配结论",
      "匹配点",
      "冲突点",
      "移植或并行开发风险",
      "推荐平台顺序",
      "为适配需要牺牲什么"
    ],
    prompt: [
      "你是一个世界级游戏产品与平台适配顾问。",
      "请根据以下信息，对项目的平台匹配度做一次清晰判断。",
      "",
      "输入：",
      "- 项目概念：{{project_pitch}}",
      "- 核心循环：{{core_loop}}",
      "- 目标平台：{{target_platforms}}",
      "- 输入与会话长度：{{input_and_session}}",
      "- 性能/资源约束：{{constraints}}",
      "- 担心的错配点：{{platform_risks}}",
      "",
      "请输出：",
      "1. 平台适配结论：哪些平台适合，哪些不适合。",
      "2. 匹配点：这个项目在哪些维度天然适合某平台。",
      "3. 冲突点：哪类平台会拖垮设计或产能。",
      "4. 风险：移植或并行开发最危险的地方。",
      "5. 推荐顺序：先做哪个平台版本，为什么。",
      "6. 适配代价：如果一定要上不匹配平台，需要牺牲什么。",
      "",
      "要求：",
      "- 不要默认“全平台都上”是好事。",
      "- 重点分析输入、阅读负担、会话长度和产能匹配。",
      "- 最后给一句平台策略建议。"
    ],
    followups: [
      "只围绕移动端适配再做一版。",
      "把 UI/HUD 适配代价单独展开。"
    ]
  },
  {
    id: "checklist-level-mechanic-design",
    title: "关卡机制设计 Checklist",
    summary: "检查关卡是否真的在教、测、变奏和回收机制，而不是只换皮放敌人。",
    card_kind: "checklist",
    phase_group: "core-gameplay-systems",
    deliverable_type: "level-mechanic-design",
    theme_tags: ["design-fundamentals", "playtesting"],
    related_work_ids: ["mit-ocw-2014-game-design", "game-design-workshop", "game-design-concepts-course"],
    related_card_ids: ["prompt-core-gameplay-systems", "prompt-core-loop-design"],
    use_case: "用于关卡设计 review、原型到量产过渡时，或排查“关卡能过但没意思”的问题。",
    checklist_items: [
      "关卡明确知道自己在教什么、测什么、变奏什么。",
      "机制引入顺序不会一下子堆满。",
      "空间、敌人、资源和节奏共同服务同一设计目的。",
      "关卡挑战来自机制组合，而不只是堆数量和数值。",
      "失败反馈能帮助玩家理解机制，而不是只重复受罚。",
      "关卡结束后玩家对系统理解发生变化。",
      "重复关卡不会只靠换素材和换敌人维持新鲜感。"
    ],
    pass_criteria: [
      "关卡推进和系统学习互相支撑。",
      "玩家通过关卡后能掌握新判断或新技巧。",
      "关卡内容服务整体循环，而不是单独自嗨。"
    ],
    failure_signals: [
      "关卡只是战斗和场景的容器。",
      "机制变化没有被空间与节奏放大。",
      "难度提升只靠更厚的血条和更多的怪。"
    ]
  },
  {
    id: "prompt-currency-system-design",
    title: "货币系统设计 Prompt 模板",
    summary: "把多个货币和稀缺资源整理成层级清晰、目标明确的货币结构。",
    card_kind: "prompt_template",
    phase_group: "numbers-economy",
    deliverable_type: "currency-system-design",
    theme_tags: ["economy-loops", "systems-thinking", "prompt-design"],
    related_work_ids: ["game-mechanics-advanced-game-design", "characteristics-of-games"],
    related_card_ids: ["prompt-economy-system-design", "prompt-numbers-economy"],
    use_case: "当项目里出现多个货币、代币、材料，但没人能说清为什么需要这么多时使用。",
    inputs: [
      "现有货币和材料列表",
      "每种货币对应的使用场景",
      "获取频率和消耗频率",
      "稀缺与 prestige 目标",
      "当前玩家困惑或经济问题"
    ],
    output_sections: [
      "货币层级",
      "每种货币职责",
      "获取与消耗逻辑",
      "冗余与合并建议",
      "风险点",
      "监控建议"
    ],
    prompt: [
      "你是一个世界级游戏货币系统设计师。",
      "请把下面的货币与材料系统整理成职责清晰、便于调优的结构。",
      "",
      "输入：",
      "- 货币/材料列表：{{currencies}}",
      "- 使用场景：{{use_cases}}",
      "- 获取频率：{{earn_rate}}",
      "- 消耗频率：{{spend_rate}}",
      "- 稀缺/ prestige 目标：{{scarcity_goals}}",
      "- 当前问题：{{currency_problems}}",
      "",
      "请输出：",
      "1. 货币层级：哪些是日常、成长、稀缺、身份性货币。",
      "2. 职责：每种货币主要解决什么，不该解决什么。",
      "3. 获取/消耗逻辑：它们如何形成经济节奏。",
      "4. 合并建议：哪些货币是冗余的。",
      "5. 风险：通胀、囤积、无感、认知负担。",
      "6. 监控建议：哪些指标最该跟踪。",
      "",
      "要求：",
      "- 减少认知负担优先于表面丰富度。",
      "- 明确指出哪些货币只是把复杂度堆出来了。",
      "- 最后给一版简化后的货币方案。"
    ],
    followups: [
      "只围绕移动端轻量化经济重做一版。",
      "单独展开稀缺货币与 prestige 货币。"
    ]
  },
  {
    id: "checklist-resource-production-consumption",
    title: "资源产出消耗设计 Checklist",
    summary: "检查资源流是否真的形成节奏与选择，而不是只形成等待与堆积。",
    card_kind: "checklist",
    phase_group: "numbers-economy",
    deliverable_type: "resource-production-consumption",
    theme_tags: ["economy-loops", "systems-thinking"],
    related_work_ids: ["game-mechanics-advanced-game-design", "characteristics-of-games", "a-theory-of-fun-for-game-design"],
    related_card_ids: ["prompt-economy-system-design", "prompt-currency-system-design"],
    use_case: "用于资源循环 review、制作/生存系统 review，或排查“资源很多但决策很少”。",
    checklist_items: [
      "每种资源都能说明主要来源和主要去向。",
      "产出速度与消耗压力形成真实决策，而不是纯等待。",
      "玩家能通过玩法改变资源结构，而不是只能被动接受。",
      "资源之间存在清楚的层级和转换关系。",
      "资源短缺能制造张力，但不会长期让玩家失去行动权。",
      "过剩资源不会长期堆积成无意义数字。",
      "资源循环与核心玩法、成长、世界规则保持一致。"
    ],
    pass_criteria: [
      "资源系统推动玩家做选择。",
      "资源压力与爽感是结构性的，而不是临时调出来的。",
      "资源循环可被解释、观测和调优。"
    ],
    failure_signals: [
      "资源系统只是在拖时长。",
      "玩家永远缺同一种东西，其他资源都没意义。",
      "资源转换只是层层套娃，没有新决策。"
    ]
  }
);

workflowCardSpecs.push(
  {
    id: "prompt-player-market-definition",
    title: "玩家画像与目标市场 Prompt 模板",
    summary: "把抽象的“面向所有人”改写成明确玩家群、使用场景和买点结构。",
    card_kind: "prompt_template",
    phase_group: "initiation-direction",
    deliverable_type: "player-market-definition",
    theme_tags: ["design-fundamentals", "player-motivation", "prompt-design"],
    related_work_ids: ["the-art-of-game-design", "level-up", "designing-virtual-worlds"],
    related_card_ids: ["prompt-initiation-direction", "prompt-competitive-breakdown"],
    use_case: "当团队在说“应该有更广人群”“做给所有玩家玩”时，用它把目标受众收束到具体的玩家画像与市场位置。",
    inputs: [
      "项目概念与核心体验",
      "最像的竞品和最不想像的竞品",
      "目标平台、价格和游玩时长",
      "你认为玩家会为什么而来、为什么而留",
      "团队最担心的市场错位"
    ],
    output_sections: [
      "核心玩家画像",
      "次级玩家画像",
      "使用场景",
      "买点与阻力",
      "市场位置",
      "不该服务的人群"
    ],
    prompt: [
      "你是一个世界级游戏总监和用户研究顾问。",
      "请把下面的项目信息整理成明确的玩家画像和目标市场判断。",
      "",
      "输入：",
      "- 项目概念：{{project_concept}}",
      "- 核心体验：{{core_experience}}",
      "- 参考竞品：{{reference_titles}}",
      "- 目标平台/价格：{{platform_and_price}}",
      "- 单次游玩时长：{{session_shape}}",
      "- 你认为玩家会为什么而来：{{entry_motives}}",
      "- 你认为玩家会为什么而留：{{retention_motives}}",
      "- 市场错位担忧：{{market_mismatch_fears}}",
      "",
      "请输出：",
      "1. 核心玩家画像：最应该优先服务的人是谁。",
      "2. 次级玩家画像：还能覆盖谁，但不应为其扭曲主设计。",
      "3. 使用场景：玩家在什么情境下最愿意打开这款游戏。",
      "4. 买点与阻力：玩家最容易被什么吸引，又会被什么劝退。",
      "5. 市场位置：该项目在同类中最该占什么位置。",
      "6. 明确指出不该优先服务的人群。",
      "",
      "要求：",
      "- 不要用泛化人群词汇，如“所有策略玩家”。",
      "- 如果项目同时想服务两个相互冲突的群体，要指出并取舍。",
      "- 最后给一句目标人群定义。"
    ],
    followups: [
      "改成更商业化版本的人群定位。",
      "只围绕 Steam / 主机市场重做一版。"
    ]
  },
  {
    id: "checklist-mvp-scope-cut",
    title: "MVP 范围裁剪 Checklist",
    summary: "检查一个项目的首版范围是否已经被压到可验证、可交付、可止损。",
    card_kind: "checklist",
    phase_group: "initiation-direction",
    deliverable_type: "mvp-scope-cut",
    theme_tags: ["project-audit", "design-fundamentals"],
    related_work_ids: ["the-art-of-game-design", "game-design-workshop"],
    related_card_ids: ["prompt-initiation-direction", "checklist-risk-precheck"],
    use_case: "用于原型前、pre-production 前或 scope 膨胀后的一次硬裁剪。",
    checklist_items: [
      "首版只保留验证核心体验所必需的系统。",
      "可延后内容被明确标记，不再混在当前里程碑里。",
      "每个保留项都能回答“如果没有它，核心体验还成立吗”。",
      "世界观、内容量和生产规模没有先于验证目标。",
      "最贵的资产和技术项被延后或替换为轻量方案。",
      "首版完成后能得出清楚的 go / no-go 结论。",
      "如果周期砍半，团队已经知道下一轮继续删什么。"
    ],
    pass_criteria: [
      "MVP 目标和最终完整版目标被区分清楚。",
      "团队知道当前版本是在验证，而不是在完工。",
      "范围缩减不会破坏项目身份。"
    ],
    failure_signals: [
      "每个人都觉得自己那部分不能删。",
      "范围看起来像正式版的缩小复制，而不是验证版。",
      "删减只能靠砍内容量，不能砍系统复杂度。"
    ]
  },
  {
    id: "prompt-core-loop-design",
    title: "核心循环设计 Prompt 模板",
    summary: "把玩家的动机、动作、回报和下一轮驱动力压成清晰闭环。",
    card_kind: "prompt_template",
    phase_group: "core-gameplay-systems",
    deliverable_type: "core-loop-design",
    theme_tags: ["design-fundamentals", "systems-thinking", "prompt-design"],
    related_work_ids: ["game-design-concepts-course", "mda-formal-approach", "a-theory-of-fun-for-game-design"],
    related_card_ids: ["prompt-core-gameplay-systems", "prompt-combat-system-design"],
    use_case: "当团队一直在讲机制，但没人能用一句话说清“玩家反复在做什么、为什么继续做”时使用。",
    inputs: [
      "玩家目标与 fantasy",
      "核心动词和关键资源",
      "短期回报、中期目标、长期目标",
      "当前循环断点或无聊点",
      "想让玩家反复追求的感觉"
    ],
    output_sections: [
      "核心循环 5-7 步",
      "循环中的驱动力",
      "回报与风险",
      "断点与掉速点",
      "最小验证方案"
    ],
    prompt: [
      "你是一个世界级玩法设计师。",
      "请把下面的信息压成一个真正可运转的核心循环，而不是一串功能列表。",
      "",
      "输入：",
      "- 玩家目标：{{player_goal}}",
      "- 玩家 fantasy：{{player_fantasy}}",
      "- 核心动词：{{core_verbs}}",
      "- 关键资源：{{key_resources}}",
      "- 短中长期回报：{{rewards}}",
      "- 当前循环问题：{{loop_breakpoints}}",
      "- 目标感觉：{{target_feeling}}",
      "",
      "请输出：",
      "1. 核心循环：5-7 步闭环描述。",
      "2. 每一步驱动力：玩家为什么会愿意进入下一步。",
      "3. 风险与回报：哪里制造张力，哪里提供满足。",
      "4. 掉速点：循环最容易塌在哪里。",
      "5. 最小验证：先做什么能证明这个循环成立。",
      "",
      "要求：",
      "- 每一步都要有玩家动机。",
      "- 如果某一步只是为了串联流程、没有设计意义，要指出。",
      "- 最后给一句核心循环总结。"
    ],
    followups: [
      "把核心循环压成适合纸面原型的版本。",
      "分析循环在哪一步最容易产生无聊感。"
    ]
  },
  {
    id: "checklist-single-mechanic-prototype-design",
    title: "单机制原型 Checklist",
    summary: "检查一个原型是否真的只在验证一个机制，而不是偷带了半个游戏。",
    card_kind: "checklist",
    phase_group: "core-gameplay-systems",
    deliverable_type: "single-mechanic-prototype-design",
    theme_tags: ["playtesting", "design-fundamentals"],
    related_work_ids: ["mit-ocw-2014-game-design", "game-design-concepts-course"],
    related_card_ids: ["prompt-core-gameplay-systems", "prompt-core-loop-design"],
    use_case: "用于纸面原型、玩法实验或团队在“先做一个小实验”时的范围把控。",
    checklist_items: [
      "原型要验证的机制命题只有一个主轴。",
      "辅助系统不会掩盖主机制的成败。",
      "胜负或反馈足够快，能在短时间内重复测试。",
      "试玩者能在极少说明下开始使用该机制。",
      "评价指标对应机制本身，而不是美术包装或故事包装。",
      "原型失败后仍能明确知道是机制问题还是实现噪音。",
      "如果要扩展，也知道下一步只加哪一个变量。"
    ],
    pass_criteria: [
      "原型结果足以支持删、改、保留的判断。",
      "主机制成功与否不会被其他系统噪音遮住。",
      "一轮试玩就能获得有效结论。"
    ],
    failure_signals: [
      "原型越做越像完整游戏切片。",
      "试玩后不知道到底在验证什么。",
      "主机制没站住，但大家在讨论包装。"
    ]
  },
  {
    id: "prompt-combat-balance",
    title: "战斗数值平衡 Prompt 模板",
    summary: "把战斗系统整理成 TTK、输出窗口、生存压力和风险回报的平衡结构。",
    card_kind: "prompt_template",
    phase_group: "numbers-economy",
    deliverable_type: "combat-balance",
    theme_tags: ["combat", "economy-loops", "prompt-design"],
    related_work_ids: ["game-mechanics-advanced-game-design", "characteristics-of-games", "game-feel"],
    related_card_ids: ["prompt-combat-system-design", "prompt-numbers-economy"],
    use_case: "当战斗已经能玩，但出现秒杀、刮痧、单一 build 或节奏失衡时使用。",
    inputs: [
      "玩家输出与防御结构",
      "敌人血量、伤害、护甲和行为频率",
      "关键战斗资源和冷却",
      "目标 TTK、容错和风险回报",
      "当前失衡症状"
    ],
    output_sections: [
      "平衡目标",
      "核心战斗指标",
      "敌我数值关系",
      "风险回报结构",
      "失衡来源",
      "调参顺序"
    ],
    prompt: [
      "你是一个世界级战斗数值设计师。",
      "请根据以下战斗数据与目标，输出一份可操作的平衡分析方案。",
      "",
      "输入：",
      "- 玩家输出/防御：{{player_combat_stats}}",
      "- 敌人输出/防御：{{enemy_combat_stats}}",
      "- 资源与冷却：{{resources_and_cooldowns}}",
      "- 目标 TTK 与容错：{{target_ttk_and_margin}}",
      "- 风险回报预期：{{risk_reward_expectation}}",
      "- 当前症状：{{balance_symptoms}}",
      "",
      "请输出：",
      "1. 平衡目标：理想战斗节奏应该是什么。",
      "2. 核心指标：最该监控哪些数值关系。",
      "3. 敌我关系：输出、承伤、窗口、容错是否合理。",
      "4. 风险回报：高风险操作是否真的给出高回报。",
      "5. 症状来源：当前最可能导致失衡的机制或数值层。",
      "6. 调参顺序：先调哪些参数，再调哪些参数。",
      "",
      "要求：",
      "- 先指出结构问题，再谈具体数字。",
      "- 不要只给“削一点/加强一点”的建议。",
      "- 说明为什么会出现最优打法固化。"
    ],
    followups: [
      "把平衡指标改成 boss 战版本。",
      "单独为高风险技能做收益校准。"
    ]
  },
  {
    id: "checklist-drop-reward-design",
    title: "掉落与奖励设计 Checklist",
    summary: "检查奖励是否真的驱动玩家决策，而不是只做表面兴奋剂。",
    card_kind: "checklist",
    phase_group: "numbers-economy",
    deliverable_type: "drop-reward-design",
    theme_tags: ["economy-loops", "player-motivation"],
    related_work_ids: ["a-theory-of-fun-for-game-design", "game-mechanics-advanced-game-design"],
    related_card_ids: ["prompt-economy-system-design", "checklist-growth-curve-design"],
    use_case: "用于掉落表、奖励节奏或长期奖励 review。",
    checklist_items: [
      "奖励频率与玩家风险投入匹配。",
      "高价值奖励真的改变 build、进度或选择。",
      "奖励不会长期稀释到毫无感觉。",
      "不同奖励层级有明确职责，不是都在做同一种激励。",
      "重复奖励不会快速贬值成垃圾噪音。",
      "低概率奖励不会成为唯一有效驱动力。",
      "奖励不会直接破坏经济和成长层级。"
    ],
    pass_criteria: [
      "玩家能区分普通奖励、关键奖励和身份奖励。",
      "奖励真正影响后续决策和期待。",
      "奖励节奏与项目目标体验一致。"
    ],
    failure_signals: [
      "奖励很多，但玩家对掉落没有任何判断和期待。",
      "奖励只能通过堆稀有度显得重要。",
      "奖励表变成掩盖平衡问题的止痛药。"
    ]
  },
  {
    id: "prompt-toolchain-development",
    title: "工具链开发 Prompt 模板",
    summary: "把内部工具需求压成最值回票价的工具链路线，而不是想到什么做什么。",
    card_kind: "prompt_template",
    phase_group: "development-implementation",
    deliverable_type: "toolchain-development",
    theme_tags: ["project-audit", "prompt-design"],
    related_work_ids: ["level-up", "advanced-game-design-a-systems-approach"],
    related_card_ids: ["prompt-development-implementation", "prompt-prototype-implementation"],
    use_case: "当团队开始觉得“手工流程太痛了”，但又不确定到底该先做编辑器、调试面板、表工具还是自动化时使用。",
    inputs: [
      "当前最痛的手工流程",
      "团队角色与使用者",
      "高频改动内容",
      "当前出错点和返工点",
      "工具开发预算和周期"
    ],
    output_sections: [
      "工具优先级",
      "使用者与价值",
      "最小工具方案",
      "自动化机会",
      "先不做的工具",
      "里程碑建议"
    ],
    prompt: [
      "你是一个世界级游戏工具链负责人。",
      "请根据下面的工作流痛点，给出一份最小但高回报的工具链方案。",
      "",
      "输入：",
      "- 当前痛点流程：{{painful_workflows}}",
      "- 使用者：{{users}}",
      "- 高频改动：{{frequent_changes}}",
      "- 出错与返工：{{error_and_rework_points}}",
      "- 工具预算：{{tool_budget}}",
      "",
      "请输出：",
      "1. 工具优先级：最该先做的 1-3 个工具。",
      "2. 每个工具解决谁的什么问题。",
      "3. 最小工具方案：先做到什么就够了。",
      "4. 自动化机会：哪些环节适合脚本化或批处理。",
      "5. 先不做什么：哪些工具现在看起来诱人但回报低。",
      "6. 里程碑：按最小可交付拆分。",
      "",
      "要求：",
      "- 以节省返工和降低出错为核心。",
      "- 不要设计成巨型平台工程。",
      "- 如果手工流程频率不高，要明确指出不值得工具化。"
    ],
    followups: [
      "只围绕策划编辑器再细化一版。",
      "只围绕调试与可视化再细化一版。"
    ]
  },
  {
    id: "checklist-performance-optimization",
    title: "性能优化 Checklist",
    summary: "检查性能问题是否被拆成可定位、可排序、可验证的优化工作，而不是一团“后面再优化”。",
    card_kind: "checklist",
    phase_group: "development-implementation",
    deliverable_type: "performance-optimization",
    theme_tags: ["project-audit"],
    related_work_ids: ["level-up", "advanced-game-design-a-systems-approach"],
    related_card_ids: ["prompt-development-implementation", "checklist-development-implementation"],
    use_case: "用于性能 review、移植前审查或判断当前卡顿到底来自哪里。",
    checklist_items: [
      "目标平台和帧率/内存预算明确。",
      "性能问题被拆成渲染、逻辑、IO、资源加载等来源。",
      "最常见卡顿场景有稳定复现方法。",
      "关键指标能被采集或观测，而不是凭感觉。",
      "高成本系统已按优先级排序。",
      "优化不会先破坏验证效率和开发效率。",
      "“后面优化”不再是无边界借口。"
    ],
    pass_criteria: [
      "团队知道先测什么、先砍什么、先观察什么。",
      "优化顺序服从项目当前阶段目标。",
      "性能问题可以被持续跟踪。"
    ],
    failure_signals: [
      "所有问题都被归结为“机器太差”。",
      "没有固定场景能复现卡顿。",
      "优化动作全是随机试错。"
    ]
  },
  {
    id: "prompt-bug-triage",
    title: "Bug Triage Prompt 模板",
    summary: "把一堆 bug 清单压成严重度、影响链路和实际修复优先级。",
    card_kind: "prompt_template",
    phase_group: "testing-acceptance-audit",
    deliverable_type: "bug-triage",
    theme_tags: ["project-audit", "prompt-design"],
    related_work_ids: ["mit-ocw-2016-introduction-to-game-design-methods", "game-design-concepts-course"],
    related_card_ids: ["prompt-testing-acceptance-audit", "prompt-project-status-audit"],
    use_case: "当 bug 越堆越多，团队开始只看数量、不再看影响链路时使用。",
    inputs: [
      "当前 bug 清单",
      "每个 bug 的复现路径和范围",
      "影响到的玩家任务",
      "版本目标和发版门槛",
      "已知修复成本"
    ],
    output_sections: [
      "严重度排序",
      "影响链路",
      "必须立即修复",
      "可带病迭代",
      "可延期处理",
      "triage 结论"
    ],
    prompt: [
      "你是一个世界级 QA lead。",
      "请根据以下 bug 清单，给出一份真正可执行的 triage 结论。",
      "",
      "输入：",
      "- bug 清单：{{bug_list}}",
      "- 复现路径：{{repro_steps}}",
      "- 影响玩家任务：{{affected_player_tasks}}",
      "- 版本目标：{{build_goal}}",
      "- 发版门槛：{{release_bar}}",
      "- 修复成本：{{fix_cost_estimates}}",
      "",
      "请输出：",
      "1. 严重度排序：按真实体验影响排序，而不是按直觉。",
      "2. 影响链路：每个高优先级 bug 会破坏什么玩家任务。",
      "3. 立即修复：哪些必须马上处理。",
      "4. 可带病迭代：哪些不会遮住当前验证目标。",
      "5. 可延期：哪些问题可以安全后置。",
      "6. triage 结论：给出本轮处理建议。",
      "",
      "要求：",
      "- 同时考虑严重度、频率和验证目标影响。",
      "- 不要只按技术复杂度排序。",
      "- 结论要能直接指导本轮冲刺。"
    ],
    followups: [
      "把立即修复项改成今日必须完成版本。",
      "为每类 bug 给出最简回归方法。"
    ]
  },
  {
    id: "checklist-regression-checklist",
    title: "回归测试 Checklist",
    summary: "把版本的必测路径压成稳定、可复用的回归基线。",
    card_kind: "checklist",
    phase_group: "testing-acceptance-audit",
    deliverable_type: "regression-checklist",
    theme_tags: ["project-audit", "playtesting"],
    related_work_ids: ["mit-ocw-2016-introduction-to-game-design-methods", "game-design-workshop"],
    related_card_ids: ["checklist-testing-acceptance-audit", "checklist-build-acceptance"],
    use_case: "用于每次 build smoke test、版本回归和大改动后的最低保底检查。",
    checklist_items: [
      "核心循环至少跑通一轮。",
      "关键存档/读档路径过一遍。",
      "关键输入路径和重绑定/冲突场景过一遍。",
      "高风险 UI / HUD 交互过一遍。",
      "上一轮修复过的高优先级 bug 有针对性回归。",
      "跨系统切换链路至少走一遍。",
      "所有必测项都能被新成员读懂并执行。"
    ],
    pass_criteria: [
      "回归清单足够小，能持续执行。",
      "它覆盖的是最容易炸且最值钱的路径。",
      "版本风险不会因为“忘测”而失控。"
    ],
    failure_signals: [
      "清单太长，团队根本不跑。",
      "清单过于泛泛，谁跑都得靠自己理解。",
      "修过的 bug 总在下个版本重复回来。"
    ]
  },
  {
    id: "prompt-motion-hit-feel-expression",
    title: "动效与打击感表达 Prompt 模板",
    summary: "把输入响应、命中反馈、镜头与音画配合整理成可执行的 hit-feel 方案。",
    card_kind: "prompt_template",
    phase_group: "art-ui-experience",
    deliverable_type: "motion-hit-feel-expression",
    theme_tags: ["hit-feel", "ui-ux", "prompt-design"],
    related_work_ids: ["game-feel", "the-aesthetic-of-play"],
    related_card_ids: ["prompt-art-ui-experience", "prompt-combat-system-design"],
    use_case: "当团队觉得“手感不对”“动作发飘”“打中像没打中”时使用。",
    inputs: [
      "目标动作或战斗感觉",
      "输入延迟、角色响应、移动曲线",
      "命中、受击、位移、镜头和音效现状",
      "参考作品",
      "当前最明显的手感问题"
    ],
    output_sections: [
      "目标 feel 描述",
      "输入与响应链",
      "命中与受击反馈",
      "视觉/音频/镜头配合",
      "过度表现风险",
      "优先级最高的 polish 项"
    ],
    prompt: [
      "你是一个世界级 game-feel 顾问。",
      "请把下面的问题整理成一份可执行的动效与打击感优化方案。",
      "",
      "输入：",
      "- 目标 feel：{{target_feel}}",
      "- 输入与响应：{{input_and_response}}",
      "- 命中/受击现状：{{hit_reaction_state}}",
      "- 镜头/音效/动效：{{camera_audio_vfx}}",
      "- 参考作品：{{references}}",
      "- 当前问题：{{current_feel_problems}}",
      "",
      "请输出：",
      "1. 目标 feel：玩家应该感受到什么。",
      "2. 响应链：输入到反馈之间每一步哪里在拖后腿。",
      "3. 命中反馈：命中、受击、错失、爆发各自要强调什么。",
      "4. 多模态配合：镜头、动画、音效、粒子如何分工。",
      "5. 风险：哪些过度表现会伤害可控性和可读性。",
      "6. 优先级：最值得先修的 5 个点。",
      "",
      "要求：",
      "- 先保玩家控制感，再谈视觉炫技。",
      "- 区分“反馈不足”和“动作设计本身有问题”。",
      "- 不要让 hit-feel 牺牲信息清晰度。"
    ],
    followups: [
      "只围绕移动手感重做一版。",
      "只围绕近战命中反馈重做一版。"
    ]
  },
  {
    id: "checklist-readability-accessibility-review",
    title: "可读性与可访问性评审 Checklist",
    summary: "检查视觉表达是否真正可读、可理解、可操作，而不是只在熟手眼里成立。",
    card_kind: "checklist",
    phase_group: "art-ui-experience",
    deliverable_type: "readability-accessibility-review",
    theme_tags: ["ui-ux"],
    related_work_ids: ["level-up", "game-feel", "the-aesthetic-of-play"],
    related_card_ids: ["prompt-art-ui-experience", "prompt-hud-ui-structure-design"],
    use_case: "用于 UI / HUD review、设备适配 review，或排查“看起来很美但玩家读不懂”。",
    checklist_items: [
      "关键状态和目标信息能在短时间内被识别。",
      "字号、对比和层级对目标设备可读。",
      "颜色不是唯一的信息通道。",
      "高频操作不依赖细小或难点的交互目标。",
      "视觉装饰不会遮蔽关键反馈和路径。",
      "动效速度不会妨碍理解和操作。",
      "新玩家和熟手都能快速找到下一步行动信息。"
    ],
    pass_criteria: [
      "玩家能在正常负荷下看清、看懂、做对。",
      "界面和视觉反馈没有排斥关键玩家群体。",
      "可读性是结构层成立的，而不是靠玩家适应。"
    ],
    failure_signals: [
      "只有熟手才知道信息在哪。",
      "为了美观牺牲了判断速度。",
      "重要状态需要多次确认才能看清。"
    ]
  }
);

function buildWorkflowCardMarkdown(spec) {
  const lines = [];
  lines.push(`# ${spec.title}`);
  lines.push("");
  lines.push("## 适用场景");
  lines.push("");
  lines.push(spec.use_case);
  lines.push("");
  if (spec.card_kind === "prompt_template") {
    lines.push("## 使用前提供");
    lines.push("");
    for (const item of spec.inputs ?? []) {
      lines.push(`- ${item}`);
    }
    lines.push("");
    lines.push("## 预期输出");
    lines.push("");
    spec.output_sections.forEach((section, index) => {
      lines.push(`${index + 1}. ${section}`);
    });
    lines.push("");
    lines.push("## Prompt 模板");
    lines.push("");
    lines.push("```text");
    for (const line of spec.prompt) {
      lines.push(line);
    }
    lines.push("```");
    lines.push("");
    lines.push("## 二次追问");
    lines.push("");
    for (const item of spec.followups ?? []) {
      lines.push(`- ${item}`);
    }
  } else {
    lines.push("## 检查项");
    lines.push("");
    for (const item of spec.checklist_items ?? []) {
      lines.push(`- ${item}`);
    }
    lines.push("");
    lines.push("## 通过标准");
    lines.push("");
    for (const item of spec.pass_criteria ?? []) {
      lines.push(`- ${item}`);
    }
    lines.push("");
    lines.push("## 常见失败信号");
    lines.push("");
    for (const item of spec.failure_signals ?? []) {
      lines.push(`- ${item}`);
    }
  }
  return `${lines.join("\n").trim()}\n`;
}

for (const spec of workflowCardSpecs) {
  const markdown = buildWorkflowCardMarkdown(spec);
  const card = {
    id: spec.id,
    entity_type: "card",
    title: spec.title,
    summary: spec.summary,
    card_kind: spec.card_kind,
    phase_group: spec.phase_group,
    deliverable_type: spec.deliverable_type,
    resource_kind: spec.card_kind === "prompt_template" ? "prompt-guide" : "checklist",
    source_work_id: "",
    source_markdown_path: "",
    theme_tags: spec.theme_tags,
    related_work_ids: spec.related_work_ids,
    related_card_ids: spec.related_card_ids,
    official_links: [],
    local_links: [],
    body_markdown: markdown,
    body_html: markdownToHtml(markdown),
    headings: extractMarkdownHeadings(markdown),
    search_text: buildSearchText([
      spec.title,
      spec.summary,
      spec.use_case,
      spec.inputs,
      spec.output_sections,
      spec.checklist_items,
      spec.pass_criteria,
      spec.failure_signals,
      spec.theme_tags
    ])
  };
  cards.push(card);
  writeText(path.join(normalizedCardsRoot, `${card.id}.md`), markdown);
  writeJson(path.join(normalizedCardsRoot, `${card.id}.json`), card);
}

const worksByPhase = groupBy(normalizedWorks, (work) => work.phase_group);

for (const phase of [...(registry.taxonomy.phase_groups ?? [])].sort((left, right) => left.sort_order - right.sort_order)) {
  const phaseWorks = (worksByPhase.get(phase.id) ?? []).sort((left, right) => {
    if (left.downloaded !== right.downloaded) {
      return left.downloaded ? -1 : 1;
    }
    return left.title.localeCompare(right.title);
  });
  const deliverables = (registry.taxonomy.deliverable_types ?? [])
    .filter((item) => item.phase_group_id === phase.id)
    .map((item) => item.label);
  const localWorks = phaseWorks.filter((work) => work.downloaded).slice(0, 6);
  const neededWorks = phaseWorks.filter((work) => work.needs_user_file).slice(0, 6);
  const lines = [];
  lines.push(`# ${phase.label}导向卡`);
  lines.push("");
  lines.push("## 这个阶段解决什么");
  lines.push("");
  lines.push(phase.description);
  lines.push("");
  lines.push("## 常见输出物");
  lines.push("");
  for (const label of deliverables) {
    lines.push(`- ${label}`);
  }
  lines.push("");
  lines.push("## 推荐先看");
  lines.push("");
  for (const work of phaseWorks.slice(0, 6)) {
    lines.push(`- ${work.title}`);
  }
  lines.push("");
  lines.push("## 已本地可读");
  lines.push("");
  if (localWorks.length === 0) {
    lines.push("- 当前没有归档到本地的全文材料。");
  } else {
    for (const work of localWorks) {
      lines.push(`- ${work.title}`);
    }
  }
  lines.push("");
  lines.push("## 仍建议补齐");
  lines.push("");
  if (neededWorks.length === 0) {
    lines.push("- 当前这一类没有优先级很高的待补正版文件。");
  } else {
    for (const work of neededWorks) {
      lines.push(`- ${work.title}`);
    }
  }
  lines.push("");
  lines.push("## 对具体项目的落点");
  lines.push("");
  lines.push(`- 先把这个阶段的问题收束成 ${deliverables.slice(0, 3).join(" / ")} 这样的具体输出物。`);
  lines.push(`- 再用本类材料检查当前项目文档是否真的给出了可执行结论。`);
  const markdown = `${lines.join("\n").trim()}\n`;
  const card = {
    id: `phase-guide-${phase.id}`,
    entity_type: "card",
    title: `${phase.label}导向卡`,
    summary: phase.description,
    card_kind: "phase_guide",
    phase_group: phase.id,
    deliverable_type: "",
    resource_kind: "prompt-guide",
    source_work_id: "",
    source_markdown_path: "",
    theme_tags: [],
    related_work_ids: phaseWorks.slice(0, 8).map((work) => work.id),
    related_card_ids: [],
    official_links: [],
    local_links: [],
    body_markdown: markdown,
    body_html: markdownToHtml(markdown),
    headings: extractMarkdownHeadings(markdown),
    search_text: buildSearchText([phase.label, phase.description, deliverables, phaseWorks.map((work) => work.title)])
  };
  cards.push(card);
  writeText(path.join(normalizedCardsRoot, `${card.id}.md`), markdown);
  writeJson(path.join(normalizedCardsRoot, `${card.id}.json`), card);
}

console.log(`normalize complete: ${normalizedWorks.length} works, ${cards.length} cards`);
