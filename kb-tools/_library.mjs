import fs from "node:fs";
import path from "node:path";
import {
  incomingRoot,
  loadJson,
  normalizedCardsRoot,
  normalizedWorksRoot,
  portalRoot,
  readText,
  registryRoot,
  relativeToRepo,
  stripMarkdown
} from "./_common.mjs";

export function loadKnowledgeRegistry() {
  const taxonomy = loadJson(path.join(registryRoot, "taxonomy.json"), {});
  const baseWorks = loadJson(path.join(registryRoot, "works.json"), []);
  const addedWorks = loadJson(path.join(registryRoot, "works-v2-additions.json"), []);
  const workEnrichments = loadJson(path.join(registryRoot, "work-enrichments.json"), {});
  const works = [...baseWorks, ...addedWorks].reduce((map, work) => {
    const previous = map.get(work.id) ?? {};
    map.set(work.id, {
      ...previous,
      ...work,
      ...(workEnrichments[work.id] ?? {})
    });
    return map;
  }, new Map());
  const sources = loadJson(path.join(registryRoot, "sources.json"), []);
  const materialRequests = loadJson(path.join(registryRoot, "material-requests.json"), []);
  const mergedWorks = [...works.values()];
  return {
    taxonomy,
    works: mergedWorks,
    sources,
    materialRequests,
    sourceMap: indexById(sources),
    workMap: indexById(mergedWorks),
    phaseGroupMap: indexById(taxonomy.phase_groups ?? []),
    deliverableMap: indexById(taxonomy.deliverable_types ?? []),
    themeMap: indexById(taxonomy.theme_tags ?? []),
    availabilityMap: indexById(taxonomy.availability ?? []),
    resourceKindMap: indexById(taxonomy.resource_kinds ?? []),
    cardKindMap: indexById(taxonomy.card_kinds ?? [])
  };
}

export function indexById(items) {
  return Object.fromEntries(items.map((item) => [item.id, item]));
}

export function groupBy(items, keySelector) {
  const output = new Map();
  for (const item of items) {
    const key = keySelector(item);
    if (!output.has(key)) {
      output.set(key, []);
    }
    output.get(key).push(item);
  }
  return output;
}

export function priorityWeight(priority) {
  return {
    P0: 0,
    P1: 1,
    P2: 2
  }[priority] ?? 99;
}

export function extractLeadParagraph(markdown) {
  const blocks = String(markdown)
    .split(/\r?\n\r?\n/)
    .map((block) => stripMarkdown(block))
    .filter(Boolean);
  return blocks[0] ?? "";
}

export function loadNormalizedWorks() {
  if (!fs.existsSync(normalizedWorksRoot)) {
    return [];
  }
  return fs
    .readdirSync(normalizedWorksRoot)
    .filter((entry) => entry.endsWith(".json"))
    .map((entry) => loadJson(path.join(normalizedWorksRoot, entry)))
    .filter(Boolean);
}

export function loadNormalizedCards() {
  if (!fs.existsSync(normalizedCardsRoot)) {
    return [];
  }
  return fs
    .readdirSync(normalizedCardsRoot)
    .filter((entry) => entry.endsWith(".json"))
    .map((entry) => loadJson(path.join(normalizedCardsRoot, entry)))
    .filter(Boolean);
}

export function toPortalRelativePath(repoRelativePath) {
  return path.relative(portalRoot, path.join(path.dirname(portalRoot), repoRelativePath)).replaceAll("\\", "/");
}

export function toRepoRelativePath(target) {
  return relativeToRepo(target);
}

export function listIncomingFiles() {
  if (!fs.existsSync(incomingRoot)) {
    return [];
  }
  return fs.readdirSync(incomingRoot);
}

export function readMarkdown(relativePath) {
  return readText(path.join(path.dirname(registryRoot), relativePath));
}
