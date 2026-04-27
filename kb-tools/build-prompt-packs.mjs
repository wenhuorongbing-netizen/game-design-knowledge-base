import fs from "node:fs";
import path from "node:path";
import {
  ensureDir,
  indexesRoot,
  normalizedCardsRoot,
  normalizedPacksRoot,
  nowIso,
  requireLegacyToolOptIn,
  reportsRoot,
  relativeToRepo,
  writeJson,
  writeText
} from "./_common.mjs";
import { loadKnowledgeRegistry, loadNormalizedCards } from "./_library.mjs";

requireLegacyToolOptIn("kb-tools/build-prompt-packs.mjs");

const registry = loadKnowledgeRegistry();
const cards = loadNormalizedCards();
const phaseGroups = [...(registry.taxonomy.phase_groups ?? [])].sort((left, right) => left.sort_order - right.sort_order);
const phaseLabelById = new Map(phaseGroups.map((phase) => [phase.id, phase.label]));
const cardMap = new Map(cards.map((card) => [card.id, card]));

ensureDir(normalizedPacksRoot);

for (const entry of fs.readdirSync(normalizedPacksRoot, { withFileTypes: true })) {
  if (entry.isFile() && [".md", ".json"].includes(path.extname(entry.name).toLowerCase())) {
    fs.unlinkSync(path.join(normalizedPacksRoot, entry.name));
  }
}

const promptCards = cards
  .filter((card) => card.card_kind === "prompt_template")
  .sort((left, right) => left.title.localeCompare(right.title, "zh-CN"));
const checklistCards = cards
  .filter((card) => card.card_kind === "checklist")
  .sort((left, right) => left.title.localeCompare(right.title, "zh-CN"));

const useCasePackSpecs = [
  {
    id: "spec-pack",
    title: "Spec Pack",
    description: "Cross-phase bundle for turning a game idea into a structured design and implementation spec.",
    kindLabel: "Use Case Pack",
    whenToUse: "Use this when you need to align direction, lock the gameplay frame, and turn it into an executable implementation plan.",
    requiredInputs: [
      "One-sentence pitch and project identity",
      "Target players, market, and reference titles",
      "Core loop assumptions and economy goals",
      "Platform, scope, and team constraints"
    ],
    starterSteps: [
      "Start with direction framing and core loop definition.",
      "Resolve the economy and scope assumptions before implementation detail.",
      "Turn the approved design into a technical spec and HUD structure.",
      "Finish with MVP trimming and implementation review."
    ],
    cardIds: [
      "prompt-initiation-direction",
      "prompt-core-loop-design",
      "prompt-economy-system-design",
      "prompt-development-implementation",
      "prompt-hud-ui-structure-design",
      "checklist-mvp-scope-cut",
      "checklist-development-implementation"
    ]
  },
  {
    id: "audit-pack",
    title: "Audit Pack",
    description: "Cross-phase bundle for status review, risk discovery, regression checking, and delivery-quality audits.",
    kindLabel: "Use Case Pack",
    whenToUse: "Use this when a build feels unstable, unclear, late, or over-scoped and you need a structured review pass.",
    requiredInputs: [
      "Current build or branch state",
      "Known blockers, bugs, and risk areas",
      "Recent regressions or quality complaints",
      "Performance, UI, or onboarding pain points"
    ],
    starterSteps: [
      "Run a project-status audit to expose the current bottlenecks.",
      "Triage the known bugs and regression risk first.",
      "Review build acceptance, performance, and readability together.",
      "End with a concrete risk list and a fix order."
    ],
    cardIds: [
      "prompt-project-status-audit",
      "prompt-bug-triage",
      "checklist-build-acceptance",
      "checklist-regression-checklist",
      "checklist-performance-optimization",
      "checklist-readability-accessibility-review",
      "checklist-risk-precheck"
    ]
  },
  {
    id: "prototyping-pack",
    title: "Prototyping Pack",
    description: "Cross-phase bundle for validating a concept quickly through loop design, prototype implementation, and playtest framing.",
    kindLabel: "Use Case Pack",
    whenToUse: "Use this when the project is still proving whether the core idea is worth scaling up.",
    requiredInputs: [
      "Core fantasy and target player",
      "Single mechanic or loop hypothesis",
      "Prototype platform and implementation constraints",
      "Playtest questions you need answered"
    ],
    starterSteps: [
      "Frame the direction and define the smallest fun loop.",
      "Pick the one mechanic or interaction the prototype must prove.",
      "Build only the minimum playable implementation.",
      "Use the testing card to define what success or failure means."
    ],
    cardIds: [
      "prompt-initiation-direction",
      "prompt-core-gameplay-systems",
      "prompt-core-loop-design",
      "prompt-prototype-implementation",
      "checklist-single-mechanic-prototype-design",
      "checklist-onboarding-design",
      "prompt-testing-acceptance-audit"
    ]
  },
  {
    id: "release-pack",
    title: "Release Pack",
    description: "Cross-phase bundle for preparing a playable release candidate, external messaging, and post-launch planning.",
    kindLabel: "Use Case Pack",
    whenToUse: "Use this when a project is moving from internal development into public testing, store presence, or release preparation.",
    requiredInputs: [
      "Target release window and platform set",
      "Current build quality and known defects",
      "Store-facing fantasy, hook, and audience",
      "Retention goals and live-ops expectations"
    ],
    starterSteps: [
      "Validate the release target and platform fit first.",
      "Run pre-release and build-acceptance checks before marketing polish.",
      "Write store copy and retention framing against the real build.",
      "Close with a concrete post-launch update roadmap."
    ],
    cardIds: [
      "prompt-store-page-copy",
      "checklist-pre-release-check",
      "checklist-build-acceptance",
      "prompt-retention-optimization",
      "checklist-update-roadmap",
      "prompt-platform-fit-evaluation"
    ]
  },
  {
    id: "narrative-pack",
    title: "Narrative Pack",
    description: "Cross-phase bundle for worldbuilding, dialogue, quest text, and narrative structure reviews.",
    kindLabel: "Use Case Pack",
    whenToUse: "Use this when story content exists but lacks a clear structure, tone, or production-ready text workflow.",
    requiredInputs: [
      "World premise and role of the player",
      "Main cast, faction, or conflict outline",
      "Narrative format and delivery constraints",
      "Samples of current dialogue or quest text"
    ],
    starterSteps: [
      "Establish the world and narrative frame first.",
      "Write dialogue only after the structure and role logic are stable.",
      "Review quest text and narrative beats as production outputs.",
      "Use the final checklist to catch inconsistency and readability drift."
    ],
    cardIds: [
      "prompt-worldbuilding",
      "prompt-dialogue-writing",
      "checklist-narrative-structure-review",
      "checklist-quest-text-design"
    ]
  },
  {
    id: "balance-pack",
    title: "Balance Pack",
    description: "Cross-phase bundle for economy architecture, combat numbers, reward logic, and balance review loops.",
    kindLabel: "Use Case Pack",
    whenToUse: "Use this when the game has enough systems to show inflation, dead rewards, or unclear progression pressure.",
    requiredInputs: [
      "Key currencies and resource flows",
      "Combat stats and progression targets",
      "Reward tables, drop logic, or progression pacing",
      "Current balance pain points or telemetry symptoms"
    ],
    starterSteps: [
      "Map the economy layers before touching individual numbers.",
      "Separate currency roles from combat-balance roles.",
      "Review growth curve and reward logic after the system frame is clear.",
      "End with the smallest set of balance changes worth testing next."
    ],
    cardIds: [
      "prompt-numbers-economy",
      "prompt-economy-system-design",
      "prompt-currency-system-design",
      "prompt-combat-balance",
      "checklist-growth-curve-design",
      "checklist-drop-reward-design",
      "checklist-resource-production-consumption"
    ]
  }
];

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function sortCardsForPack(cardsForPack) {
  const kindOrder = new Map([
    ["prompt_template", 0],
    ["checklist", 1],
    ["spec_template", 2],
    ["phase_guide", 3]
  ]);
  return [...cardsForPack].sort((left, right) => {
    const kindDelta = (kindOrder.get(left.card_kind) ?? 99) - (kindOrder.get(right.card_kind) ?? 99);
    if (kindDelta !== 0) {
      return kindDelta;
    }
    return left.title.localeCompare(right.title, "zh-CN");
  });
}

function splitCardGroups(cardsForPack) {
  return {
    prompts: cardsForPack.filter((card) => card.card_kind === "prompt_template"),
    checklists: cardsForPack.filter((card) => card.card_kind === "checklist"),
    others: cardsForPack.filter((card) => !["prompt_template", "checklist"].includes(card.card_kind))
  };
}

function phaseIdsFromCards(cardsForPack, explicitPhase) {
  if (explicitPhase?.id) {
    return [explicitPhase.id];
  }
  return unique(cardsForPack.map((card) => card.phase_group));
}

function phaseLabelsFromIds(phaseIds) {
  return phaseIds.map((phaseId) => phaseLabelById.get(phaseId) ?? phaseId).filter(Boolean);
}

function buildGenericStarterSteps(kind, title) {
  if (kind === "prompt_pack") {
    return [
      `Pick the prompt template in ${title} that matches the deliverable you need right now.`,
      "Fill in the placeholders with project-specific constraints instead of generic design language.",
      "Keep only one answer path per prompt run so the result remains editable.",
      "Pass the output into a checklist or implementation review before treating it as final."
    ];
  }
  if (kind === "checklist_pack") {
    return [
      `Use ${title} as a review pass after a draft, prototype, or build already exists.`,
      "Mark the failed checks first, then group them into a short fix order.",
      "Do not treat every failed line as equally important; separate identity risks from polish issues.",
      "Repeat the checklist after the next meaningful revision."
    ];
  }
  return [
    "Open the included cards in order.",
    "Adapt them to the current project state.",
    "Carry the result into the next review pass."
  ];
}

function buildPackRecord({
  id,
  title,
  description,
  kind,
  kindLabel,
  cardsForPack,
  markdownPath,
  phase,
  whenToUse = "",
  requiredInputs = [],
  starterSteps = []
}) {
  const phaseIds = phaseIdsFromCards(cardsForPack, phase);
  const phaseLabels = phaseLabelsFromIds(phaseIds);
  const groups = splitCardGroups(cardsForPack);

  return {
    id,
    title,
    summary: description,
    phase_group: phase?.id ?? "",
    phase_label: phase?.label ?? "Cross-phase",
    phase_groups: phaseIds,
    phase_labels: phaseLabels,
    type: kind,
    kind_label: kindLabel,
    card_ids: cardsForPack.map((card) => card.id),
    count: cardsForPack.length,
    prompt_count: groups.prompts.length,
    checklist_count: groups.checklists.length,
    other_count: groups.others.length,
    when_to_use: whenToUse,
    required_inputs: requiredInputs,
    starter_steps: starterSteps,
    relative_markdown_path: relativeToRepo(markdownPath),
    generated_at: nowIso()
  };
}

function pushGroupList(lines, heading, cardsForGroup) {
  if (cardsForGroup.length === 0) {
    return;
  }
  lines.push(`### ${heading}`);
  lines.push("");
  for (const card of cardsForGroup) {
    lines.push(`- ${card.title}`);
  }
  lines.push("");
}

function buildPackMarkdown(record, cardsForPack) {
  const orderedCards = sortCardsForPack(cardsForPack);
  const groups = splitCardGroups(orderedCards);
  const lines = [];

  lines.push(`# ${record.title}`);
  lines.push("");
  lines.push(record.summary);
  lines.push("");
  lines.push("## Pack Snapshot");
  lines.push("");
  lines.push(`- Type: ${record.kind_label}`);
  lines.push(`- Cards: ${record.count}`);
  lines.push(`- Prompt templates: ${record.prompt_count}`);
  lines.push(`- Checklists: ${record.checklist_count}`);
  lines.push(`- Other cards: ${record.other_count}`);
  lines.push(`- Covered phases: ${record.phase_labels.join(" / ") || "Cross-phase"}`);

  if (record.when_to_use) {
    lines.push("");
    lines.push("## When To Use");
    lines.push("");
    lines.push(record.when_to_use);
  }

  if ((record.required_inputs ?? []).length > 0) {
    lines.push("");
    lines.push("## Inputs To Prepare");
    lines.push("");
    for (const input of record.required_inputs) {
      lines.push(`- ${input}`);
    }
  }

  if ((record.starter_steps ?? []).length > 0) {
    lines.push("");
    lines.push("## Suggested Workflow");
    lines.push("");
    for (const [index, step] of record.starter_steps.entries()) {
      lines.push(`${index + 1}. ${step}`);
    }
  }

  lines.push("");
  lines.push("## Included Cards");
  lines.push("");
  pushGroupList(lines, "Prompt Templates", groups.prompts);
  pushGroupList(lines, "Checklists", groups.checklists);
  pushGroupList(lines, "Other Cards", groups.others);

  lines.push("## Full Card Bodies");
  for (const card of orderedCards) {
    lines.push("");
    lines.push("---");
    lines.push("");
    lines.push(card.body_markdown.trim());
  }

  return `${lines.join("\n").trim()}\n`;
}

function cardMarkdownLink(card) {
  const relativeCardPath = path.relative(
    normalizedPacksRoot,
    path.join(normalizedCardsRoot, `${card.id}.md`)
  );
  return relativeCardPath.replaceAll("\\", "/");
}

function buildReadyToRunMarkdown(record, cardsForPack) {
  const orderedCards = [...cardsForPack];
  const lines = [];

  lines.push(`# ${record.title} Ready To Run`);
  lines.push("");
  lines.push(record.summary);
  lines.push("");
  lines.push("## Use This When");
  lines.push("");
  lines.push(record.when_to_use || "Use this starter when the current project need matches the pack title.");
  lines.push("");
  lines.push("## Prepare Before You Start");
  lines.push("");
  for (const input of record.required_inputs ?? []) {
    lines.push(`- [ ] ${input}`);
  }
  if ((record.required_inputs ?? []).length === 0) {
    lines.push("- [ ] Gather the project-specific constraints and current build context.");
  }
  lines.push("");
  lines.push("## Run Order");
  lines.push("");
  for (const [index, card] of orderedCards.entries()) {
    const kindLabel =
      card.card_kind === "prompt_template"
        ? "Prompt Template"
        : card.card_kind === "checklist"
          ? "Checklist"
          : "Card";
    lines.push(`${index + 1}. [${card.title}](${cardMarkdownLink(card)})`);
    lines.push(`    - Goal: ${card.summary}`);
    lines.push(`    - Type: ${kindLabel}`);
  }
  lines.push("");
  lines.push("## Working Rule");
  lines.push("");
  lines.push("Move in order. Treat each prompt card as a draft-producing step and each checklist as a decision gate before advancing.");
  lines.push("");
  lines.push("## Files");
  lines.push("");
  lines.push(`- Full pack: \`${record.relative_markdown_path}\``);
  lines.push(`- Starter index: \`knowledge/50-game-design-masters-kb/indexes/workflow-starter-index.json\``);

  return `${lines.join("\n").trim()}\n`;
}

function inputPlaceholder(label, index) {
  const slug = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return slug || `input_${index + 1}`;
}

function buildStarterPromptMarkdown(record, cardsForPack) {
  const orderedCards = [...cardsForPack];
  const lines = [];
  lines.push(`# ${record.title} Starter Prompt`);
  lines.push("");
  lines.push("Use the following copy-paste prompt when you want one integrated response instead of opening each card separately.");
  lines.push("");
  lines.push("## What This Prompt Does");
  lines.push("");
  lines.push(record.when_to_use || record.summary);
  lines.push("");
  lines.push("## Copy-Paste Prompt");
  lines.push("");
  lines.push("```text");
  lines.push(`You are a world-class game design director, systems designer, and production reviewer. I need you to run the "${record.title}" workflow.`);
  lines.push("");
  lines.push("Use the context below and produce one integrated response.");
  lines.push("");
  lines.push("Project context:");
  for (const [index, input] of (record.required_inputs ?? []).entries()) {
    lines.push(`- ${input}: {{${inputPlaceholder(input, index)}}}`);
  }
  if ((record.required_inputs ?? []).length === 0) {
    lines.push("- Project context: {{project_context}}");
  }
  lines.push("");
  lines.push("Workflow to follow:");
  for (const [index, card] of orderedCards.entries()) {
    lines.push(`${index + 1}. ${card.title}`);
    lines.push(`   Goal: ${card.summary}`);
    lines.push("");
  }
  lines.push("Output requirements:");
  lines.push("- Start with a short decision summary.");
  lines.push("- Then create one section per workflow step, in order.");
  lines.push("- Make assumptions explicit whenever the context is incomplete.");
  lines.push("- Separate draft generation from review findings.");
  lines.push("- End with the next 3 highest-value actions.");
  lines.push("");
  lines.push("Do not answer generically. Ground every section in the provided context and constraints.");
  lines.push("```");
  lines.push("");
  lines.push("## Included Cards");
  lines.push("");
  for (const card of orderedCards) {
    lines.push(`- [${card.title}](${cardMarkdownLink(card)})`);
  }

  return `${lines.join("\n").trim()}\n`;
}

function phasePromptDescription(phase) {
  return `Stage-specific prompt templates for ${phase.label}.`;
}

function phaseChecklistDescription(phase) {
  return `Stage-specific review checklists for ${phase.label}.`;
}

function writePack(record, cardsForPack) {
  const markdownPath = path.join(normalizedPacksRoot, `${record.id}.md`);
  const jsonPath = path.join(normalizedPacksRoot, `${record.id}.json`);
  const readyMarkdownPath =
    record.type === "use_case_pack" ? path.join(normalizedPacksRoot, `${record.id}-ready-to-run.md`) : "";
  const starterPromptPath =
    record.type === "use_case_pack" ? path.join(normalizedPacksRoot, `${record.id}-starter-prompt.md`) : "";
  const finalRecord = {
    ...record,
    relative_markdown_path: relativeToRepo(markdownPath),
    starter_relative_markdown_path: readyMarkdownPath ? relativeToRepo(readyMarkdownPath) : "",
    starter_prompt_relative_markdown_path: starterPromptPath ? relativeToRepo(starterPromptPath) : "",
    generated_at: nowIso()
  };
  writeText(markdownPath, buildPackMarkdown(finalRecord, cardsForPack));
  if (readyMarkdownPath) {
    writeText(readyMarkdownPath, buildReadyToRunMarkdown(finalRecord, cardsForPack));
  }
  if (starterPromptPath) {
    writeText(starterPromptPath, buildStarterPromptMarkdown(finalRecord, cardsForPack));
  }
  writeJson(jsonPath, finalRecord);
  return finalRecord;
}

const packRecords = [];

for (const phase of phaseGroups) {
  const phasePromptCards = promptCards.filter((card) => card.phase_group === phase.id);
  const phaseChecklistCards = checklistCards.filter((card) => card.phase_group === phase.id);

  if (phasePromptCards.length > 0) {
    packRecords.push(
      writePack(
        buildPackRecord({
          id: `${phase.id}-prompt-pack`,
          title: `${phase.label} Prompt Pack`,
          description: phasePromptDescription(phase),
          kind: "prompt_pack",
          kindLabel: "Prompt Pack",
          cardsForPack: phasePromptCards,
          markdownPath: path.join(normalizedPacksRoot, `${phase.id}-prompt-pack.md`),
          phase,
          whenToUse: `Use this when the current task belongs to ${phase.label} and you want reusable drafting prompts instead of starting from scratch.`,
          starterSteps: buildGenericStarterSteps("prompt_pack", `${phase.label} Prompt Pack`)
        }),
        phasePromptCards
      )
    );
  }

  if (phaseChecklistCards.length > 0) {
    packRecords.push(
      writePack(
        buildPackRecord({
          id: `${phase.id}-checklist-pack`,
          title: `${phase.label} Checklist Pack`,
          description: phaseChecklistDescription(phase),
          kind: "checklist_pack",
          kindLabel: "Checklist Pack",
          cardsForPack: phaseChecklistCards,
          markdownPath: path.join(normalizedPacksRoot, `${phase.id}-checklist-pack.md`),
          phase,
          whenToUse: `Use this after a draft, prototype, or build exists and you need a concentrated ${phase.label} review pass.`,
          starterSteps: buildGenericStarterSteps("checklist_pack", `${phase.label} Checklist Pack`)
        }),
        phaseChecklistCards
      )
    );
  }
}

packRecords.push(
  writePack(
    buildPackRecord({
      id: "all-prompts-pack",
      title: "All Prompts Pack",
      description: "Full-library export of every prompt template card.",
      kind: "prompt_pack",
      kindLabel: "Prompt Pack",
      cardsForPack: promptCards,
      markdownPath: path.join(normalizedPacksRoot, "all-prompts-pack.md"),
      whenToUse: "Use this when you want the whole prompt layer in one file for large-scale rewriting, comparison, or offline browsing.",
      starterSteps: buildGenericStarterSteps("prompt_pack", "All Prompts Pack")
    }),
    promptCards
  ),
  writePack(
    buildPackRecord({
      id: "all-checklists-pack",
      title: "All Checklists Pack",
      description: "Full-library export of every checklist card.",
      kind: "checklist_pack",
      kindLabel: "Checklist Pack",
      cardsForPack: checklistCards,
      markdownPath: path.join(normalizedPacksRoot, "all-checklists-pack.md"),
      whenToUse: "Use this when you want a broad review layer that spans multiple phases without switching files.",
      starterSteps: buildGenericStarterSteps("checklist_pack", "All Checklists Pack")
    }),
    checklistCards
  )
);

for (const spec of useCasePackSpecs) {
  const cardsForPack = spec.cardIds.map((cardId) => cardMap.get(cardId)).filter(Boolean);
  if (cardsForPack.length === 0) {
    continue;
  }
  packRecords.push(
    writePack(
      buildPackRecord({
        id: spec.id,
        title: spec.title,
        description: spec.description,
        kind: "use_case_pack",
        kindLabel: spec.kindLabel,
        cardsForPack,
        markdownPath: path.join(normalizedPacksRoot, `${spec.id}.md`),
        whenToUse: spec.whenToUse,
        requiredInputs: spec.requiredInputs,
        starterSteps: spec.starterSteps
      }),
      cardsForPack
    )
  );
}

writeJson(path.join(indexesRoot, "prompt-pack-index.json"), {
  generated_at: nowIso(),
  stats: {
    prompt_count: promptCards.length,
    checklist_count: checklistCards.length,
    pack_count: packRecords.length,
    use_case_pack_count: packRecords.filter((pack) => pack.type === "use_case_pack").length
  },
  packs: packRecords
});

writeJson(path.join(indexesRoot, "workflow-starter-index.json"), {
  generated_at: nowIso(),
  starters: packRecords
    .filter((pack) => pack.type === "use_case_pack")
    .map((pack) => ({
      id: pack.id,
      title: pack.title,
      summary: pack.summary,
      when_to_use: pack.when_to_use,
      required_inputs: pack.required_inputs,
      starter_steps: pack.starter_steps,
      prompt_count: pack.prompt_count,
      checklist_count: pack.checklist_count,
      phase_groups: pack.phase_groups,
      starter_relative_markdown_path: pack.starter_relative_markdown_path,
      starter_prompt_relative_markdown_path: pack.starter_prompt_relative_markdown_path,
      full_relative_markdown_path: pack.relative_markdown_path,
      relative_markdown_path: pack.relative_markdown_path
    }))
});

writeJson(path.join(indexesRoot, "starter-prompt-index.json"), {
  generated_at: nowIso(),
  prompts: packRecords
    .filter((pack) => pack.type === "use_case_pack")
    .map((pack) => ({
      id: pack.id,
      title: pack.title,
      summary: pack.summary,
      when_to_use: pack.when_to_use,
      required_inputs: pack.required_inputs,
      starter_steps: pack.starter_steps,
      prompt_count: pack.prompt_count,
      checklist_count: pack.checklist_count,
      phase_groups: pack.phase_groups,
      relative_markdown_path: pack.starter_prompt_relative_markdown_path
    }))
});

const overviewLines = [];
overviewLines.push("# Prompt Pack Overview");
overviewLines.push("");
overviewLines.push(`- Prompt templates: ${promptCards.length}`);
overviewLines.push(`- Checklists: ${checklistCards.length}`);
overviewLines.push(`- Packs: ${packRecords.length}`);
overviewLines.push(`- Use-case packs: ${packRecords.filter((pack) => pack.type === "use_case_pack").length}`);
overviewLines.push("");

for (const phase of phaseGroups) {
  const phasePrompts = promptCards.filter((card) => card.phase_group === phase.id);
  const phaseChecklists = checklistCards.filter((card) => card.phase_group === phase.id);
  const phasePackLinks = packRecords.filter((pack) => pack.phase_group === phase.id);
  overviewLines.push(`## ${phase.label}`);
  overviewLines.push("");
  overviewLines.push(`- Prompt templates: ${phasePrompts.length}`);
  overviewLines.push(`- Checklists: ${phaseChecklists.length}`);
  for (const pack of phasePackLinks) {
    overviewLines.push(`- \`${pack.relative_markdown_path}\``);
  }
  overviewLines.push("");
}

overviewLines.push("## Full-library Packs");
overviewLines.push("");
overviewLines.push("- `knowledge/50-game-design-masters-kb/normalized/packs/all-prompts-pack.md`");
overviewLines.push("- `knowledge/50-game-design-masters-kb/normalized/packs/all-checklists-pack.md`");
overviewLines.push("");
overviewLines.push("## Use-case Packs");
overviewLines.push("");
for (const pack of packRecords.filter((pack) => pack.type === "use_case_pack")) {
  overviewLines.push(
    `- ${pack.title}: full \`${pack.relative_markdown_path}\` | ready \`${pack.starter_relative_markdown_path}\` | prompt \`${pack.starter_prompt_relative_markdown_path}\``
  );
}
overviewLines.push("");

writeText(path.join(reportsRoot, "prompt-pack-overview.md"), `${overviewLines.join("\n").trim()}\n`);

const starterLines = [];
starterLines.push("# Workflow Starters");
starterLines.push("");
starterLines.push("Use these cross-phase starter bundles when you want to begin from a real task instead of browsing card by card.");
starterLines.push("");

for (const pack of packRecords.filter((pack) => pack.type === "use_case_pack")) {
  starterLines.push(`## ${pack.title}`);
  starterLines.push("");
  starterLines.push(pack.summary);
  starterLines.push("");
  starterLines.push(`- Ready file: \`${pack.starter_relative_markdown_path}\``);
  starterLines.push(`- Starter prompt: \`${pack.starter_prompt_relative_markdown_path}\``);
  starterLines.push(`- Full pack: \`${pack.relative_markdown_path}\``);
  starterLines.push(`- Prompt templates: ${pack.prompt_count}`);
  starterLines.push(`- Checklists: ${pack.checklist_count}`);
  starterLines.push(`- Covered phases: ${pack.phase_labels.join(" / ")}`);
  starterLines.push("");
  starterLines.push("### When To Use");
  starterLines.push("");
  starterLines.push(pack.when_to_use || "Open this when the described use case matches the current project need.");
  starterLines.push("");
  starterLines.push("### Inputs To Prepare");
  starterLines.push("");
  for (const input of pack.required_inputs ?? []) {
    starterLines.push(`- ${input}`);
  }
  starterLines.push("");
  starterLines.push("### Suggested Workflow");
  starterLines.push("");
  for (const [index, step] of (pack.starter_steps ?? []).entries()) {
    starterLines.push(`${index + 1}. ${step}`);
  }
  starterLines.push("");
}

writeText(path.join(reportsRoot, "workflow-starters.md"), `${starterLines.join("\n").trim()}\n`);

const starterPromptLines = [];
starterPromptLines.push("# Starter Prompts");
starterPromptLines.push("");
starterPromptLines.push("These short prompt files are the copy-paste layer for the six use-case workflows.");
starterPromptLines.push("");
for (const pack of packRecords.filter((pack) => pack.type === "use_case_pack")) {
  starterPromptLines.push(`- ${pack.title}: \`${pack.starter_prompt_relative_markdown_path}\``);
}
starterPromptLines.push("");

writeText(path.join(reportsRoot, "starter-prompts.md"), `${starterPromptLines.join("\n").trim()}\n`);

console.log(`prompt-pack build complete: ${packRecords.length} packs`);
