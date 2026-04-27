import path from "node:path";
import { kbRoot, loadJson, requireLegacyToolOptIn, slugify, userSuppliedRoot, writeJson, writeText } from "./_common.mjs";
import { groupBy, loadKnowledgeRegistry, priorityWeight } from "./_library.mjs";

requireLegacyToolOptIn("kb-tools/report-missing-materials.mjs");

const registry = loadKnowledgeRegistry();
const userManifest = loadJson(path.join(userSuppliedRoot, "manifest.json"), { entries: [] });
const userFilesByWork = groupBy(
  (userManifest.entries ?? []).filter((entry) => entry.matched_work_id),
  (entry) => entry.matched_work_id
);

function findWorkByRequest(request) {
  const requestSlug = slugify(request.title);
  return (
    registry.works.find((work) => slugify(work.title) === requestSlug) ??
    registry.works.find((work) => slugify(work.title).includes(requestSlug) || requestSlug.includes(slugify(work.title)))
  );
}

const updatedRequests = [...registry.materialRequests]
  .map((request) => {
    const work = findWorkByRequest(request);
    const matchedFiles = work ? userFilesByWork.get(work.id) ?? [] : [];
    const acceptedFiles = matchedFiles.filter((entry) => entry.source_review_status === "accepted");
    const reviewFiles = matchedFiles.filter((entry) => entry.source_review_status !== "accepted");
    return {
      ...request,
      matched_work_id: work?.id ?? "",
      matched_files: matchedFiles.map((entry) => ({
        file_name: entry.file_name,
        relative_path: entry.relative_path,
        source_review_status: entry.source_review_status ?? "pending_review"
      })),
      status: acceptedFiles.length > 0 ? "provided" : reviewFiles.length > 0 ? "review_required" : "needed"
    };
  })
  .sort((left, right) => {
    const priorityDelta = priorityWeight(left.priority) - priorityWeight(right.priority);
    if (priorityDelta !== 0) {
      return priorityDelta;
    }
    return left.title.localeCompare(right.title);
  });

writeJson(path.join(kbRoot, "registry", "material-requests.json"), updatedRequests);

const lines = [];
lines.push("# 缺失材料报告");
lines.push("");
lines.push(`- 待补材料总数：${updatedRequests.filter((request) => request.status !== "provided").length}`);
lines.push(`- 已匹配用户文件：${updatedRequests.filter((request) => request.status === "provided").length}`);
lines.push(`- 已有文件但待复核：${updatedRequests.filter((request) => request.status === "review_required").length}`);
lines.push("");

for (const priority of ["P0", "P1", "P2"]) {
  const requests = updatedRequests.filter((request) => request.priority === priority);
  if (requests.length === 0) {
    continue;
  }
  lines.push(`## ${priority}`);
  lines.push("");
  for (const request of requests) {
    const statusLabel =
      request.status === "provided"
        ? "已提供本地文件"
        : request.status === "review_required"
          ? "已有本地文件，但来源待复核"
          : "待提供";
    lines.push(`### ${request.title}`);
    lines.push("");
    lines.push(`- 作者：${request.author}`);
    lines.push(`- 状态：${statusLabel}`);
    lines.push(`- 原因：${request.reason}`);
    lines.push(`- 建议格式：${request.preferred_format}`);
    if ((request.matched_files ?? []).length > 0) {
      lines.push("- 已匹配文件：");
      for (const file of request.matched_files) {
        lines.push(`  - \`${file.relative_path}\`${file.source_review_status !== "accepted" ? " (review)" : ""}`);
      }
    }
    lines.push("- 官方入口：");
    for (const url of request.official_links ?? []) {
      lines.push(`  - <${url}>`);
    }
    lines.push("");
  }
}

writeText(path.join(kbRoot, "reports", "missing-materials.md"), `${lines.join("\n").trim()}\n`);

console.log(`missing-materials report complete: ${updatedRequests.length} requests tracked`);
