import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
export const knowledgeRoot = path.join(repoRoot, "knowledge");
export const kbRoot = path.join(repoRoot, "knowledge", "50-game-design-masters-kb");
export const registryRoot = path.join(kbRoot, "registry");
export const rawRoot = path.join(kbRoot, "raw");
export const openWebRoot = path.join(rawRoot, "open-web");
export const officialMetadataRoot = path.join(rawRoot, "official-metadata");
export const incomingRoot = path.join(kbRoot, "incoming");
export const userSuppliedRoot = path.join(incomingRoot, "user-supplied");
export const normalizedRoot = path.join(kbRoot, "normalized");
export const normalizedWorksRoot = path.join(normalizedRoot, "works");
export const normalizedCardsRoot = path.join(normalizedRoot, "cards");
export const normalizedPacksRoot = path.join(normalizedRoot, "packs");
export const indexesRoot = path.join(kbRoot, "indexes");
export const reportsRoot = path.join(kbRoot, "reports");
export const portalRoot = path.join(repoRoot, "kb-portal");

export function ensureDir(target) {
  fs.mkdirSync(target, { recursive: true });
}

export function fileExists(target) {
  return fs.existsSync(target);
}

export function loadJson(target, fallback = null) {
  if (!fs.existsSync(target)) {
    return fallback;
  }
  return JSON.parse(fs.readFileSync(target, "utf8"));
}

export function writeJson(target, data) {
  ensureDir(path.dirname(target));
  fs.writeFileSync(target, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

export function writeText(target, value) {
  ensureDir(path.dirname(target));
  fs.writeFileSync(target, value, "utf8");
}

export function readText(target) {
  return fs.readFileSync(target, "utf8");
}

export function fileSize(target) {
  return fs.statSync(target).size;
}

export function listFilesRecursive(root, predicate = () => true) {
  if (!fs.existsSync(root)) {
    return [];
  }
  const output = [];
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const absolutePath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        queue.push(absolutePath);
        continue;
      }
      if (predicate(absolutePath)) {
        output.push(absolutePath);
      }
    }
  }
  output.sort();
  return output;
}

export function sha256File(target) {
  const hash = crypto.createHash("sha256");
  hash.update(fs.readFileSync(target));
  return hash.digest("hex");
}

export function nowIso() {
  return new Date().toISOString();
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchText(url, { delayMs = 0 } = {}) {
  if (delayMs > 0) {
    await sleep(delayMs);
  }
  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch text ${url}: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

export async function fetchBuffer(url, { delayMs = 0 } = {}) {
  if (delayMs > 0) {
    await sleep(delayMs);
  }
  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch binary ${url}: ${response.status} ${response.statusText}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

export function relativeToRepo(target) {
  return path.relative(repoRoot, target).replaceAll("\\", "/");
}

export function absoluteFromRepo(relativePath) {
  return path.join(repoRoot, relativePath);
}

export function sanitizeFileName(value) {
  return value.replace(/[<>:"/\\|?*\u0000-\u001F]/g, "-").replace(/\s+/g, " ").trim();
}

export function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function uniqueStrings(values) {
  return [...new Set(values.filter(Boolean))];
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function decodeHtmlEntities(value) {
  if (!value) {
    return "";
  }
  return value
    .replaceAll("&nbsp;", " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

export function stripHtmlTags(value) {
  return decodeHtmlEntities(
    String(value)
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

export function stripMarkdown(value) {
  return String(value)
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/\|/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractHtmlMetadata(html) {
  const title =
    html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() ?? "";
  const description =
    html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i)?.[1]?.trim() ??
    html.match(/<meta\s+property=["']og:description["']\s+content=["']([\s\S]*?)["']/i)?.[1]?.trim() ??
    "";
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() ?? "";
  return {
    title,
    description,
    h1
  };
}

export function extractJsonLdObjects(html) {
  const objects = [];
  const matches = html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  for (const match of matches) {
    const raw = match[1].trim();
    if (!raw) {
      continue;
    }
    try {
      const parsed = JSON.parse(raw);
      const stack = Array.isArray(parsed) ? [...parsed] : [parsed];
      while (stack.length > 0) {
        const value = stack.pop();
        if (!value || typeof value !== "object") {
          continue;
        }
        if (Array.isArray(value["@graph"])) {
          stack.push(...value["@graph"]);
        }
        objects.push(value);
      }
    } catch {
      continue;
    }
  }
  return objects;
}

export function extractBookLikeMetadata(html, url = "") {
  const htmlMeta = extractHtmlMetadata(html);
  const jsonLdObjects = extractJsonLdObjects(html);
  const preferredJsonLd =
    jsonLdObjects.find((item) => {
      const types = Array.isArray(item["@type"]) ? item["@type"] : [item["@type"]];
      return types.some((value) => ["Book", "Product", "Course", "CreativeWork", "WebPage"].includes(value));
    }) ?? jsonLdObjects[0] ?? {};
  const jsonLdAuthors = compact(
    (Array.isArray(preferredJsonLd.author) ? preferredJsonLd.author : [preferredJsonLd.author]).map((author) => {
      if (!author) {
        return "";
      }
      if (typeof author === "string") {
        return author;
      }
      return author.name ?? "";
    })
  );
  const isbnMatch =
    html.match(/\bISBN(?:-13|-10)?[:\s]*([0-9Xx\-]{10,20})\b/i) ??
    html.match(/"isbn"\s*:\s*"([^"]+)"/i);
  const title =
    preferredJsonLd.name ??
    preferredJsonLd.headline ??
    preferredJsonLd.alternateName ??
    htmlMeta.h1 ??
    htmlMeta.title;
  const description =
    preferredJsonLd.description ??
    preferredJsonLd.abstract ??
    preferredJsonLd.summary ??
    htmlMeta.description;
  const publisher =
    preferredJsonLd.publisher?.name ??
    (typeof preferredJsonLd.publisher === "string" ? preferredJsonLd.publisher : "") ??
    "";
  return {
    url,
    title: stripHtmlTags(title),
    description: stripHtmlTags(description),
    authors: uniqueStrings(jsonLdAuthors.map((value) => stripHtmlTags(value))),
    isbn: isbnMatch?.[1]?.trim() ?? "",
    publisher: stripHtmlTags(publisher),
    date_published: preferredJsonLd.datePublished ?? "",
    json_ld_type:
      (Array.isArray(preferredJsonLd["@type"]) ? preferredJsonLd["@type"].join(", ") : preferredJsonLd["@type"]) ??
      ""
  };
}

export function parseUserFileName(fileName) {
  const extension = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName, extension);
  const match = baseName.match(/^(?<author>.+?)\s+-\s+(?<title>.+?)(?:\s+\((?<meta>.+)\))?$/);
  if (!match?.groups) {
    return {
      author: "",
      title: baseName,
      meta: ""
    };
  }
  return {
    author: match.groups.author.trim(),
    title: match.groups.title.trim(),
    meta: (match.groups.meta ?? "").trim()
  };
}

export function toHeadingId(text) {
  return text
    .toLowerCase()
    .replace(/[`~!@#$%^&*()+={}\[\]|\\:;"'<>,.?/]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function extractMarkdownHeadings(markdown) {
  return markdown
    .split(/\r?\n/)
    .map((line) => line.match(/^(#{1,6})\s+(.+)$/))
    .filter(Boolean)
    .map((match) => ({
      level: match[1].length,
      text: match[2].trim(),
      id: toHeadingId(match[2].trim())
    }));
}

export function compact(value) {
  return value.filter(Boolean);
}

function formatInlineMarkdown(value) {
  let html = escapeHtml(value);
  html = html.replace(/`([^`]+)`/g, (_match, code) => `<code>${escapeHtml(code)}</code>`);
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (_match, alt, url) => `<img alt="${escapeHtml(alt)}" src="${escapeHtml(url)}">`
  );
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_match, label, url) => `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`
  );
  html = html.replace(
    /&lt;(https?:\/\/[^&]+)&gt;/g,
    (_match, url) => `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(url)}</a>`
  );
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return html;
}

function renderTable(lines, startIndex) {
  const tableLines = [];
  let index = startIndex;
  while (index < lines.length && /\|/.test(lines[index])) {
    tableLines.push(lines[index]);
    index += 1;
  }
  if (tableLines.length < 2 || !/^\s*\|?[\s:-|]+\|?\s*$/.test(tableLines[1])) {
    return null;
  }
  const rows = tableLines
    .map((line) =>
      line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim())
    )
    .filter((row) => row.length > 0);
  const [header, _separator, ...bodyRows] = rows;
  const headerHtml = header.map((cell) => `<th>${formatInlineMarkdown(cell)}</th>`).join("");
  const bodyHtml = bodyRows
    .map((row) => `<tr>${row.map((cell) => `<td>${formatInlineMarkdown(cell)}</td>`).join("")}</tr>`)
    .join("");
  return {
    html: `<table><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>`,
    nextIndex: index
  };
}

export function markdownToHtml(markdown) {
  const lines = String(markdown).replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let index = 0;
  let paragraph = [];
  let listType = "";
  let listItems = [];
  let codeFence = "";
  let codeLines = [];

  function flushParagraph() {
    if (paragraph.length === 0) {
      return;
    }
    html.push(`<p>${formatInlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (listItems.length === 0) {
      return;
    }
    const tag = listType === "ol" ? "ol" : "ul";
    html.push(`<${tag}>${listItems.map((item) => `<li>${formatInlineMarkdown(item)}</li>`).join("")}</${tag}>`);
    listItems = [];
    listType = "";
  }

  function flushCode() {
    if (!codeFence) {
      return;
    }
    const info = codeFence.trim();
    const className = info ? ` class="language-${escapeHtml(info)}"` : "";
    html.push(`<pre><code${className}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
    codeFence = "";
    codeLines = [];
  }

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    const fenceMatch = trimmed.match(/^```(.*)$/);
    if (fenceMatch) {
      flushParagraph();
      flushList();
      if (codeFence) {
        flushCode();
      } else {
        codeFence = fenceMatch[1] ?? "";
      }
      index += 1;
      continue;
    }

    if (codeFence) {
      codeLines.push(line);
      index += 1;
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      flushList();
      index += 1;
      continue;
    }

    const table = renderTable(lines, index);
    if (table) {
      flushParagraph();
      flushList();
      html.push(table.html);
      index = table.nextIndex;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      flushParagraph();
      flushList();
      html.push("<hr>");
      index += 1;
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      html.push(`<h${level} id="${toHeadingId(text)}">${formatInlineMarkdown(text)}</h${level}>`);
      index += 1;
      continue;
    }

    const quoteMatch = trimmed.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      flushParagraph();
      flushList();
      html.push(`<blockquote>${formatInlineMarkdown(quoteMatch[1])}</blockquote>`);
      index += 1;
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      flushParagraph();
      if (listType && listType !== "ol") {
        flushList();
      }
      listType = "ol";
      listItems.push(orderedMatch[1].trim());
      index += 1;
      continue;
    }

    const bulletMatch = trimmed.match(/^[-*+]\s+(.+)$/);
    if (bulletMatch) {
      flushParagraph();
      if (listType && listType !== "ul") {
        flushList();
      }
      listType = "ul";
      listItems.push(bulletMatch[1].trim());
      index += 1;
      continue;
    }

    flushList();
    paragraph.push(trimmed);
    index += 1;
  }

  flushParagraph();
  flushList();
  flushCode();
  return html.join("\n");
}
