import path from "node:path";
import { indexesRoot, loadJson, nowIso, writeJson } from "./_common.mjs";
import { loadKnowledgeRegistry, loadNormalizedCards, loadNormalizedWorks } from "./_library.mjs";

const registry = loadKnowledgeRegistry();
const works = loadNormalizedWorks();
const cards = loadNormalizedCards();
const promptPackIndex = loadJson(path.join(indexesRoot, "prompt-pack-index.json"), { packs: [] });

const phaseOrder = new Map(
  [...(registry.taxonomy.phase_groups ?? [])]
    .sort((left, right) => left.sort_order - right.sort_order)
    .map((phase, index) => [phase.id, index + 1])
);

function resourceLabel(kind) {
  return registry.resourceKindMap[kind]?.label ?? registry.cardKindMap[kind]?.label ?? kind;
}

function itemKey(entityType, id) {
  return `${entityType}:${id}`;
}

function buildWorkItem(work) {
  const availabilityId = work.availability_effective_id ?? work.access_mode;
  return {
    key: itemKey("work", work.id),
    entity_type: "work",
    id: work.id,
    title: work.title,
    subtitle: `${(work.authors ?? []).join(" / ")}${work.year ? ` · ${work.year}` : ""}`,
    authors: work.authors ?? [],
    year: work.year ?? null,
    summary: work.summary,
    phase_group: work.phase_group,
    phase_groups: work.phase_group ? [work.phase_group] : [],
    phase_label: work.phase_label,
    deliverable_type: work.deliverable_type,
    deliverable_label: work.deliverable_label,
    resource_kind: work.kind,
    resource_label: resourceLabel(work.kind),
    card_kind: "",
    card_kind_label: "",
    availability: availabilityId,
    availability_label: work.availability_label,
    source_ids: work.source_ids ?? [],
    source_labels: work.source_labels ?? [],
    theme_tags: work.theme_tags ?? [],
    theme_labels: work.theme_labels ?? [],
    downloaded: work.downloaded,
    needs_user_file: work.needs_user_file,
    local_file_count: work.local_files.length,
    card_count: 0,
    local_links: work.local_files.map((file) => ({ label: path.basename(file.relative_path), relative_path: file.relative_path })),
    official_links: work.official_links ?? [],
    related_keys: (work.related_work_ids ?? []).map((relatedId) => itemKey("work", relatedId)),
    sort_year: work.year ?? 0,
    list_modes: {
      all: true,
      downloaded_open: availabilityId === "downloaded_open",
      commercial_metadata: ["metadata_only", "user_file_needed", "external_only", "manual_review"].includes(availabilityId),
      user_pending: work.needs_user_file,
      promptish_cards: false
    },
    search_text: work.search_text
  };
}

function buildCardItem(card) {
  return {
    key: itemKey("card", card.id),
    entity_type: "card",
    id: card.id,
    title: card.title,
    subtitle: registry.cardKindMap[card.card_kind]?.label ?? card.card_kind,
    authors: [],
    year: null,
    summary: card.summary,
    phase_group: card.phase_group,
    phase_groups: card.phase_group ? [card.phase_group] : [],
    phase_label: registry.phaseGroupMap[card.phase_group]?.label ?? "",
    deliverable_type: card.deliverable_type,
    deliverable_label: registry.deliverableMap[card.deliverable_type]?.label ?? "",
    resource_kind: card.resource_kind,
    resource_label: resourceLabel(card.resource_kind),
    card_kind: card.card_kind,
    card_kind_label: registry.cardKindMap[card.card_kind]?.label ?? card.card_kind,
    availability: "downloaded_open",
    availability_label: registry.availabilityMap.downloaded_open?.label ?? "已下载开放全文",
    source_ids: [],
    source_labels: [],
    theme_tags: card.theme_tags ?? [],
    theme_labels: (card.theme_tags ?? []).map((themeId) => registry.themeMap[themeId]?.label).filter(Boolean),
    downloaded: true,
    needs_user_file: false,
    local_file_count: (card.local_links ?? []).length,
    card_count: 0,
    local_links: card.local_links ?? [],
    official_links: card.official_links ?? [],
    related_keys: [
      ...(card.related_work_ids ?? []).map((relatedId) => itemKey("work", relatedId)),
      ...(card.related_card_ids ?? []).map((relatedId) => itemKey("card", relatedId))
    ],
    sort_year: 0,
    list_modes: {
      all: true,
      downloaded_open: true,
      commercial_metadata: false,
      user_pending: false,
      promptish_cards: ["prompt_template", "checklist", "spec_template", "phase_guide"].includes(card.card_kind)
    },
    search_text: card.search_text
  };
}

function buildPackItem(pack) {
  const resourceKind = "pack_bundle";
  const resourceLabel =
    pack.type === "prompt_pack" ? "Prompt Pack" : pack.type === "checklist_pack" ? "Checklist Pack" : "Use Case Pack";
  const localLinks = [];
  if (pack.starter_prompt_relative_markdown_path) {
    localLinks.push({ label: "Starter prompt", relative_path: pack.starter_prompt_relative_markdown_path });
  }
  if (pack.starter_relative_markdown_path) {
    localLinks.push({ label: "Ready-to-run", relative_path: pack.starter_relative_markdown_path });
  }
  localLinks.push({ label: "Full pack", relative_path: pack.relative_markdown_path });
  const subtitleParts = [pack.kind_label || resourceLabel, pack.phase_label || "跨阶段"];
  return {
    key: itemKey("pack", pack.id),
    entity_type: "pack",
    id: pack.id,
    title: pack.title,
    subtitle: subtitleParts.filter(Boolean).join(" · "),
    authors: [],
    year: null,
    summary: pack.summary ?? "",
    phase_group: pack.phase_group ?? "",
    phase_groups: pack.phase_groups ?? (pack.phase_group ? [pack.phase_group] : []),
    phase_label: pack.phase_label ?? "跨阶段",
    deliverable_type: "",
    deliverable_label: "",
    resource_kind: resourceKind,
    resource_label: resourceLabel,
    card_kind: "",
    card_kind_label: "",
    pack_type: pack.type,
    pack_type_label: pack.kind_label || resourceLabel,
    starter_relative_markdown_path: pack.starter_relative_markdown_path ?? "",
    starter_prompt_relative_markdown_path: pack.starter_prompt_relative_markdown_path ?? "",
    availability: "downloaded_open",
    availability_label: registry.availabilityMap.downloaded_open?.label ?? "已下载开放全文",
    source_ids: [],
    source_labels: [],
    theme_tags: [],
    theme_labels: [],
    downloaded: true,
    needs_user_file: false,
    local_file_count: localLinks.length,
    card_count: (pack.card_ids ?? []).length,
    prompt_count: pack.prompt_count ?? 0,
    checklist_count: pack.checklist_count ?? 0,
    other_count: pack.other_count ?? 0,
    when_to_use: pack.when_to_use ?? "",
    required_inputs: pack.required_inputs ?? [],
    starter_steps: pack.starter_steps ?? [],
    local_links: localLinks,
    official_links: [],
    related_keys: (pack.card_ids ?? []).map((cardId) => itemKey("card", cardId)),
    sort_year: 0,
    list_modes: {
      all: true,
      downloaded_open: true,
      commercial_metadata: false,
      user_pending: false,
      promptish_cards: false,
      pack_bundles: true
    },
    search_text: [
      pack.title,
      pack.summary,
      pack.phase_label,
      pack.kind_label,
      pack.when_to_use ?? "",
      ...(pack.required_inputs ?? []),
      ...(pack.starter_steps ?? []),
      ...(pack.card_ids ?? [])
    ].join(" ")
  };
}

const workItems = works.map(buildWorkItem);
const cardItems = cards.map(buildCardItem);
const packItems = (promptPackIndex.packs ?? []).map(buildPackItem);
const entityOrder = {
  work: 0,
  card: 1,
  pack: 2
};
const items = [...workItems, ...cardItems, ...packItems].sort((left, right) => {
  const phaseDelta = (phaseOrder.get(left.phase_group) ?? 999) - (phaseOrder.get(right.phase_group) ?? 999);
  if (phaseDelta !== 0) {
    return phaseDelta;
  }
  if (left.entity_type !== right.entity_type) {
    return (entityOrder[left.entity_type] ?? 99) - (entityOrder[right.entity_type] ?? 99);
  }
  return left.title.localeCompare(right.title);
});

const libraryIndex = {
  generated_at: nowIso(),
  stats: {
    work_count: works.length,
    card_count: cards.length,
    pack_count: packItems.length,
    use_case_pack_count: packItems.filter((item) => item.pack_type === "use_case_pack").length,
    downloaded_work_count: works.filter((work) => work.downloaded).length,
    pending_user_file_count: works.filter((work) => work.needs_user_file).length,
    featured_phase_group_ids: (registry.taxonomy.phase_groups ?? []).filter((phase) => phase.featured).map((phase) => phase.id)
  },
  taxonomy: {
    phase_groups: registry.taxonomy.phase_groups ?? [],
    deliverable_types: registry.taxonomy.deliverable_types ?? [],
    theme_tags: registry.taxonomy.theme_tags ?? [],
    resource_kinds: registry.taxonomy.resource_kinds ?? [],
    availability: registry.taxonomy.availability ?? [],
    card_kinds: registry.taxonomy.card_kinds ?? [],
    sources: registry.sources ?? []
  },
  works: works.map((work) => ({
    id: work.id,
    title: work.title,
    summary: work.summary,
    authors: work.authors,
    year: work.year,
    kind: work.kind,
    phase_group: work.phase_group,
    deliverable_type: work.deliverable_type,
    access_mode: work.access_mode,
    downloaded: work.downloaded,
    needs_user_file: work.needs_user_file,
    theme_tags: work.theme_tags,
    source_ids: work.source_ids,
    key: itemKey("work", work.id)
  })),
  cards: cards.map((card) => ({
    id: card.id,
    title: card.title,
    summary: card.summary,
    card_kind: card.card_kind,
    phase_group: card.phase_group,
    deliverable_type: card.deliverable_type,
    key: itemKey("card", card.id)
  })),
  packs: (promptPackIndex.packs ?? []).map((pack) => ({
    id: pack.id,
    title: pack.title,
    summary: pack.summary ?? "",
    type: pack.type,
    phase_group: pack.phase_group ?? "",
    phase_groups: pack.phase_groups ?? (pack.phase_group ? [pack.phase_group] : []),
    phase_labels: pack.phase_labels ?? [],
    card_ids: pack.card_ids ?? [],
    prompt_count: pack.prompt_count ?? 0,
    checklist_count: pack.checklist_count ?? 0,
    when_to_use: pack.when_to_use ?? "",
    required_inputs: pack.required_inputs ?? [],
    starter_steps: pack.starter_steps ?? [],
    starter_relative_markdown_path: pack.starter_relative_markdown_path ?? "",
    starter_prompt_relative_markdown_path: pack.starter_prompt_relative_markdown_path ?? "",
    relative_markdown_path: pack.relative_markdown_path ?? "",
    key: itemKey("pack", pack.id)
  })),
  items
};
libraryIndex.taxonomy.resource_kinds = [
  ...(libraryIndex.taxonomy.resource_kinds ?? []),
  { id: "pack_bundle", label: "汇总包" }
];

const searchIndex = {
  generated_at: libraryIndex.generated_at,
  items: items.map((item) => ({
    key: item.key,
    entity_type: item.entity_type,
    title: item.title,
    subtitle: item.subtitle,
    summary: item.summary,
    phase_group: item.phase_group,
    phase_groups: item.phase_groups ?? [],
    deliverable_type: item.deliverable_type,
    resource_kind: item.resource_kind,
    availability: item.availability,
    downloaded: item.downloaded,
    needs_user_file: item.needs_user_file,
    pack_type: item.pack_type ?? "",
    search_text: item.search_text
  }))
};

writeJson(path.join(indexesRoot, "library-index.json"), libraryIndex);
writeJson(path.join(indexesRoot, "search-index.json"), searchIndex);

console.log(`index build complete: ${items.length} searchable items`);
