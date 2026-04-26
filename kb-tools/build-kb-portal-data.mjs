import path from "node:path";
import { ensureDir, fileExists, indexesRoot, loadJson, markdownToHtml, portalRoot, readText, writeText } from "./_common.mjs";
import { loadNormalizedCards, loadNormalizedWorks } from "./_library.mjs";

ensureDir(portalRoot);

const libraryIndex = loadJson(path.join(indexesRoot, "library-index.json"), null);
const searchIndex = loadJson(path.join(indexesRoot, "search-index.json"), null);
const promptPackIndex = loadJson(path.join(indexesRoot, "prompt-pack-index.json"), { packs: [] });
const works = loadNormalizedWorks();
const cards = loadNormalizedCards();

if (!libraryIndex || !searchIndex) {
  throw new Error("Missing library indexes. Run build-kb-index.mjs first.");
}

const content = {};

function absoluteFromRelative(relativePath = "") {
  if (!relativePath) {
    return "";
  }
  return path.join(path.dirname(portalRoot), relativePath);
}

function readMarkdownBlock(relativePath = "") {
  if (!relativePath) {
    return null;
  }
  const absolutePath = absoluteFromRelative(relativePath);
  if (!fileExists(absolutePath)) {
    return null;
  }
  const markdown = readText(absolutePath);
  return {
    relative_path: relativePath,
    headings: markdown.match(/^#{1,6}\s+.+$/gm) ?? [],
    markdown,
    html: markdownToHtml(markdown)
  };
}

function extractFirstCodeFence(markdown = "") {
  const match = markdown.match(/```(?:[\w-]+)?\r?\n([\s\S]*?)\r?\n```/);
  return match?.[1]?.trim() ?? "";
}

for (const work of works) {
  content[`work:${work.id}`] = {
    title: work.title,
    summary: work.summary,
    headings: work.content_markdown ? work.content_markdown.match(/^#{1,6}\s+.+$/gm) ?? [] : [],
    markdown: work.content_markdown,
    html: work.content_html
  };
}

for (const card of cards) {
  content[`card:${card.id}`] = {
    title: card.title,
    summary: card.summary,
    headings: card.headings ?? [],
    markdown: card.body_markdown,
    html: card.body_html
  };
}

for (const pack of promptPackIndex.packs ?? []) {
  const fullBlock = readMarkdownBlock(pack.relative_markdown_path);
  const starterBlock = readMarkdownBlock(pack.starter_relative_markdown_path);
  const starterPromptBlock = readMarkdownBlock(pack.starter_prompt_relative_markdown_path);
  content[`pack:${pack.id}`] = {
    title: pack.title,
    summary: pack.summary ?? "",
    headings: fullBlock?.headings ?? [],
    markdown: fullBlock?.markdown ?? "",
    html: fullBlock?.html ?? "",
    starter_markdown: starterBlock?.markdown ?? "",
    starter_html: starterBlock?.html ?? "",
    starter_relative_path: starterBlock?.relative_path ?? "",
    starter_prompt_markdown: starterPromptBlock?.markdown ?? "",
    starter_prompt_html: starterPromptBlock?.html ?? "",
    starter_prompt_relative_path: starterPromptBlock?.relative_path ?? "",
    starter_prompt_text: extractFirstCodeFence(starterPromptBlock?.markdown ?? "")
  };
}

const portalData = {
  generated_at: libraryIndex.generated_at,
  stats: libraryIndex.stats,
  taxonomy: libraryIndex.taxonomy,
  items: libraryIndex.items,
  search: searchIndex.items,
  packs: libraryIndex.packs ?? [],
  defaults: {
    featured_phase_groups: (libraryIndex.taxonomy.phase_groups ?? []).filter((phase) => phase.featured).map((phase) => phase.id),
    mode: "all"
  }
};

writeText(path.join(portalRoot, "data.js"), `window.KB_DATA = ${JSON.stringify(portalData, null, 2)};\n`);
writeText(path.join(portalRoot, "content.js"), `window.KB_CONTENT = ${JSON.stringify(content, null, 2)};\n`);

console.log(`portal data build complete: ${Object.keys(content).length} content blocks`);
