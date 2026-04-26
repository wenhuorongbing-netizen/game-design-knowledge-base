import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import {
  ensureDir,
  kbRoot,
  loadJson,
  nowIso,
  rawRoot,
  relativeToRepo,
  repoRoot,
  reportsRoot,
  writeJson,
  writeText
} from "./_common.mjs";

const userManifest = loadJson(path.join(kbRoot, "incoming", "user-supplied", "manifest.json"), { entries: [] });
const extractRoot = path.join(rawRoot, "private-library", "extracted");
const extractManifestPath = path.join(rawRoot, "private-library", "extract-manifest.json");
const reportPath = path.join(reportsRoot, "private-book-extraction.md");
const scriptPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "extract_private_book_artifacts.py");

ensureDir(extractRoot);
ensureDir(reportsRoot);

function resolvePythonExecutable() {
  const candidates = [
    process.env.BOOK_KB_PYTHON,
    process.env.CODEX_PYTHON,
    process.env.USERPROFILE
      ? path.join(
          process.env.USERPROFILE,
          ".cache",
          "codex-runtimes",
          "codex-primary-runtime",
          "dependencies",
          "python",
          "python.exe"
        )
      : "",
    "python"
  ].filter(Boolean);
  for (const candidate of candidates) {
    if (candidate === "python" || fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return "python";
}

const pythonExecutable = resolvePythonExecutable();

const extractableEntries = (userManifest.entries ?? []).filter((entry) => [".pdf", ".epub"].includes(entry.extension));
const results = [];

for (const entry of extractableEntries) {
  const sourcePath = path.join(repoRoot, entry.relative_path.replace(/\//g, path.sep));
  if (!fs.existsSync(sourcePath)) {
    results.push({
      relative_path: entry.relative_path,
      matched_work_id: entry.matched_work_id ?? "",
      extraction_status: "missing-source",
      artifact_relative_path: "",
      warnings: ["Source file missing"]
    });
    continue;
  }

  const artifactId = `${entry.matched_work_id || "unmatched"}-${entry.sha256.slice(0, 12)}`;
  const artifactPath = path.join(extractRoot, `${artifactId}.json`);
  const artifactRelativePath = relativeToRepo(artifactPath);

  const shouldReuse = fs.existsSync(artifactPath);
  if (!shouldReuse) {
    const result = spawnSync(pythonExecutable, [scriptPath, sourcePath, artifactPath], {
      stdio: "inherit"
    });
    if (result.status !== 0) {
      results.push({
        relative_path: entry.relative_path,
        matched_work_id: entry.matched_work_id ?? "",
        extraction_status: "failed",
        artifact_relative_path: artifactRelativePath,
        warnings: [`Extractor exited with status ${result.status ?? "unknown"}`]
      });
      continue;
    }
  }

  const artifact = loadJson(artifactPath, {});
  results.push({
    relative_path: entry.relative_path,
    matched_work_id: entry.matched_work_id ?? "",
    extraction_status: artifact.extraction_status ?? (shouldReuse ? "reused" : "ok"),
    artifact_relative_path: artifactRelativePath,
    format: artifact.format ?? entry.extension.replace(/^\./, ""),
    section_count: (artifact.sample_sections ?? []).length,
    toc_count: (artifact.toc ?? []).length,
    warnings: artifact.warnings ?? []
  });
}

writeJson(extractManifestPath, {
  generated_at: nowIso(),
  python_executable: pythonExecutable,
  entries: results
});

const lines = [];
lines.push("# 私有书籍解析报告");
lines.push("");
lines.push(`- 生成时间：${nowIso()}`);
lines.push(`- 可解析文件：${extractableEntries.length}`);
lines.push(`- 成功或复用：${results.filter((item) => ["ok", "reused"].includes(item.extraction_status)).length}`);
lines.push(`- 失败：${results.filter((item) => !["ok", "reused"].includes(item.extraction_status)).length}`);
lines.push("");
lines.push("## 明细");
lines.push("");
for (const item of results) {
  lines.push(`- \`${item.relative_path}\``);
  lines.push(`  - 状态：${item.extraction_status}`);
  lines.push(`  - 关联 work：${item.matched_work_id || "未匹配"}`);
  lines.push(`  - 工件：\`${item.artifact_relative_path || "无"}\``);
  lines.push(`  - TOC 条数：${item.toc_count ?? 0}`);
  lines.push(`  - 样本文本段数：${item.section_count ?? 0}`);
  for (const warning of item.warnings ?? []) {
    lines.push(`  - 警告：${warning}`);
  }
}

writeText(reportPath, `${lines.join("\n").trim()}\n`);

console.log(
  `private-book extraction complete: ${extractableEntries.length} files scanned, ${results.filter((item) => ["ok", "reused"].includes(item.extraction_status)).length} succeeded/reused`
);
