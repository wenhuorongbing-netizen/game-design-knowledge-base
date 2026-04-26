const fs = require('fs');
const path = require('path');

const root = process.cwd();
const kb = path.join(root, 'kb');
const cardsRoot = path.join(kb, '05_cards');
const now = '2026-04-26';

const phase = {
  direction: '\u7acb\u9879\u4e0e\u65b9\u5411',
  core: '\u6838\u5fc3\u73a9\u6cd5\u4e0e\u7cfb\u7edf\u8bbe\u8ba1',
  economy: '\u6570\u503c\u4e0e\u7ecf\u6d4e\u8bbe\u8ba1',
  narrative: '\u5185\u5bb9\u4e0e\u53d9\u4e8b',
  art: '\u7f8e\u672f / UI / \u4f53\u9a8c\u8868\u8fbe',
  dev: '\u5f00\u53d1\u5b9e\u73b0',
  test: '\u6d4b\u8bd5 / \u9a8c\u6536 / \u5ba1\u8ba1',
  ops: '\u8fd0\u8425\u4e0e\u53d1\u5e03'
};

const dirs = [
  cardsRoot,
  'concept_cards',
  'framework_cards',
  'quote_cards',
  'comparison_cards',
  'application_cards',
  'checklist_cards',
  'prompt_cards',
  'exercise_cards',
  'anti_pattern_cards',
  'case_study_cards'
].map((dir) => (dir === cardsRoot ? dir : path.join(cardsRoot, dir)));

for (const dir of dirs) fs.mkdirSync(dir, { recursive: true });

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\+/g, ' plus ')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96);
}

function yamlArray(items) {
  if (!items || items.length === 0) return '[]';
  return `[${items.map((item) => JSON.stringify(item)).join(', ')}]`;
}

function mdList(items) {
  return items && items.length ? items.map((item) => `- ${item}`).join('\n') : '- Pending evidence.';
}

function frontmatter(fields) {
  return `---\n${Object.entries(fields)
    .map(([key, value]) => `${key}: ${Array.isArray(value) ? yamlArray(value) : JSON.stringify(value)}`)
    .join('\n')}\n---\n`;
}

function write(file, text) {
  fs.writeFileSync(file, text.replace(/\r\n/g, '\n'), 'utf8');
}

const universalFields = [
  'card_id',
  'card_type',
  'title',
  'aliases',
  'one_sentence_summary',
  'detailed_explanation',
  'source_basis',
  'confidence',
  'evidence_refs',
  'related_works',
  'related_dossiers',
  'related_concepts',
  'related_lenses',
  'phase_groups',
  'domains',
  'production_roles',
  'when_to_use',
  'when_not_to_use',
  'required_inputs',
  'output_artifacts',
  'common_misunderstandings',
  'examples_or_placeholders',
  'application_to_project',
  'discussion_prompts',
  'AI_prompt_hooks',
  'status',
  'version',
  'created_at',
  'updated_at'
];

const cardTypes = [
  'concept_card',
  'framework_card',
  'quote_card',
  'comparison_card',
  'application_card',
  'checklist_card',
  'prompt_card',
  'exercise_card',
  'anti_pattern_card',
  'case_study_card'
];

const sourceBasis = [
  'open_fulltext',
  'official_metadata',
  'user_legal_file',
  'user_manual_note',
  'user_manual_quote',
  'derived_from_user_note',
  'derived_from_public_metadata',
  'metadata_only',
  'unsupported_draft'
];

const confidenceLevels = [
  'verified',
  'strong',
  'medium',
  'weak',
  'unsupported_draft',
  'user_interpretation',
  'ai_hypothesis'
];

const statuses = ['draft', 'needs_evidence', 'user_review_needed', 'verified', 'retired'];

const template = `# Card Template

Use this template for every reusable knowledge card. Do not fill source-backed sections unless the evidence basis permits it.

${frontmatter({
  card_id: '',
  card_type: '',
  title: '',
  aliases: [],
  one_sentence_summary: '',
  detailed_explanation: '',
  source_basis: 'unsupported_draft',
  confidence: 'unsupported_draft',
  evidence_refs: [],
  related_works: [],
  related_dossiers: [],
  related_concepts: [],
  related_lenses: [],
  phase_groups: [],
  domains: [],
  production_roles: [],
  when_to_use: [],
  when_not_to_use: [],
  required_inputs: [],
  output_artifacts: [],
  common_misunderstandings: [],
  examples_or_placeholders: [],
  application_to_project: '',
  discussion_prompts: [],
  AI_prompt_hooks: [],
  status: 'draft',
  version: '0.1.0',
  created_at: now,
  updated_at: now
})}
## One-Sentence Summary

Pending.

## Detailed Explanation

State whether this is source-backed, user-authored, or a draft placeholder. Never imply a book-specific claim without allowed evidence.

## Source Basis And Confidence

- source_basis: must be one of ${sourceBasis.join(', ')}
- confidence: must be one of ${confidenceLevels.join(', ')}
- evidence_refs: list SourceDocument, UserNote, Quote, Dossier, PlaytestLog, or official metadata references

## Related Works And Dossiers

- related_works: []
- related_dossiers: []

## Related Concepts And Lenses

- related_concepts: []
- related_lenses: []

## Production Routing

- phase_groups: []
- domains: []
- production_roles: []

## When To Use

- Pending.

## When Not To Use

- Do not use as verified knowledge until confidence and source_basis support it.

## Required Inputs

- Pending.

## Output Artifacts

- Pending.

## Common Misunderstandings

- Treating a placeholder as a source-backed claim.

## Examples Or Placeholders

- Add user examples here.

## Application To Project

- Attach project overlays or design decision logs here.

## Discussion Prompts

- What evidence would promote this card?
- Where has this idea been tested in a project?

## AI Prompt Hooks

- Use only with source-bounded retrieval.
- Ask the AI to cite source_basis and confidence for every output.

## Status

- draft | needs_evidence | user_review_needed | verified | retired
`;

write(path.join(cardsRoot, 'card_template.md'), template);

const schema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: 'bookos.game_design.card.schema.v1',
  title: 'BookOS Game Design Knowledge Card',
  type: 'object',
  additionalProperties: false,
  required: universalFields,
  properties: Object.fromEntries(universalFields.map((field) => [field, { type: ['string', 'array', 'object'] }]))
};

schema.properties.card_id = { type: 'string', minLength: 1 };
schema.properties.card_type = { type: 'string', enum: cardTypes };
schema.properties.aliases = { type: 'array', items: { type: 'string' } };
schema.properties.source_basis = { type: 'string', enum: sourceBasis };
schema.properties.confidence = { type: 'string', enum: confidenceLevels };
schema.properties.evidence_refs = { type: 'array', items: { type: 'string' } };
schema.properties.related_works = { type: 'array', items: { type: 'string' } };
schema.properties.related_dossiers = { type: 'array', items: { type: 'string' } };
schema.properties.related_concepts = { type: 'array', items: { type: 'string' } };
schema.properties.related_lenses = { type: 'array', items: { type: 'string' } };
schema.properties.phase_groups = { type: 'array', items: { type: 'string' } };
schema.properties.domains = { type: 'array', items: { type: 'string' } };
schema.properties.production_roles = { type: 'array', items: { type: 'string' } };
schema.properties.status = { type: 'string', enum: statuses };
schema.properties.version = { type: 'string' };
schema.properties.created_at = { type: 'string' };
schema.properties.updated_at = { type: 'string' };

write(path.join(cardsRoot, 'card_schema.json'), `${JSON.stringify(schema, null, 2)}\n`);

const families = [
  {
    family: 'Play and Experience',
    concepts: [
      'play',
      'playfulness',
      'magic circle',
      'play as context',
      'play as appropriation',
      'play as disruption',
      'play as free movement within constraints',
      'player experience',
      'pleasure',
      'fun',
      'challenge',
      'mastery',
      'learning',
      'flow',
      'curiosity',
      'uncertainty',
      'tension',
      'agency'
    ],
    domains: ['play_theory', 'player_experience', 'player_psychology'],
    phases: [phase.direction, phase.core, phase.test],
    roles: ['game director', 'game designer', 'UX researcher'],
    works: [
      'play-matters',
      'the-aesthetic-of-play',
      'a-theory-of-fun-for-game-design',
      'the-art-of-game-design-a-book-of-lenses'
    ]
  },
  {
    family: 'Game Structure',
    concepts: [
      'game',
      'rules',
      'mechanics',
      'dynamics',
      'aesthetics',
      'formal elements',
      'objectives',
      'procedures',
      'resources',
      'conflict',
      'boundaries',
      'outcome',
      'meaningful decisions',
      'tradeoffs',
      'dilemmas',
      'risk versus reward',
      'chance',
      'skill',
      'twitch skill',
      'strategic skill',
      'balance'
    ],
    domains: ['formal_game_design', 'rules_and_mechanics', 'player_experience'],
    phases: [phase.direction, phase.core, phase.test],
    roles: ['systems designer', 'game designer', 'creative director'],
    works: [
      'rules-of-play',
      'mda-mechanics-dynamics-aesthetics',
      'characteristics-of-games',
      'game-mechanics-advanced-game-design'
    ]
  },
  {
    family: 'Systems',
    concepts: [
      'system',
      'part',
      'loop',
      'whole',
      'emergence',
      'feedback loop',
      'game+player system',
      'mental model',
      'progression curve',
      'power curve',
      'economy',
      'source',
      'sink',
      'faucet',
      'drain',
      'transitive balance',
      'intransitive balance'
    ],
    domains: ['systems_design', 'economy_and_balance', 'rules_and_mechanics'],
    phases: [phase.core, phase.economy, phase.test],
    roles: ['systems designer', 'economy designer', 'technical designer'],
    works: [
      'advanced-game-design-a-systems-approach',
      'game-mechanics-advanced-game-design',
      'characteristics-of-games'
    ]
  },
  {
    family: 'Game Feel and Interaction',
    concepts: [
      'game feel',
      'real-time control',
      'simulated space',
      'polish',
      'input metric',
      'response metric',
      'context metric',
      'polish metric',
      'metaphor metric',
      'rules metric',
      'responsiveness',
      'tightness',
      'floatiness',
      'juiciness',
      'feedback',
      'interface',
      'camera feel',
      'avatar feel',
      'kinesthetic prototype'
    ],
    domains: ['game_feel', 'interactivity', 'ui_ux_feedback', 'prototyping'],
    phases: [phase.core, phase.art, phase.dev, phase.test],
    roles: ['gameplay designer', 'UX designer', 'technical designer', 'programmer'],
    works: ['game-feel-a-game-designers-guide-to-virtual-sensation', 'level-up-the-guide-to-great-video-game-design']
  },
  {
    family: 'Design Process',
    concepts: [
      'ideation',
      'problem statement',
      'experience goal',
      'playcentric design',
      'prototype',
      'paper prototype',
      'digital prototype',
      'playtest',
      'iteration',
      'design document',
      'pitch',
      'production phase',
      'release readiness'
    ],
    domains: ['prototyping', 'playtesting', 'production_process', 'business_pitch_release'],
    phases: [phase.direction, phase.core, phase.dev, phase.test, phase.ops],
    roles: ['producer', 'game designer', 'game director', 'QA lead'],
    works: [
      'game-design-workshop-a-playcentric-approach',
      'challenges-for-game-designers',
      'level-up-the-guide-to-great-video-game-design'
    ]
  },
  {
    family: 'Narrative, World, Character',
    concepts: [
      'premise',
      'story',
      'dramatic arc',
      'emergent story',
      'narrative architecture',
      'worldbuilding',
      'character function',
      'avatar',
      'player identity',
      'status',
      'transformation'
    ],
    domains: ['narrative_design', 'worldbuilding', 'character_design', 'player_psychology'],
    phases: [phase.direction, phase.narrative, phase.art, phase.test],
    roles: ['narrative designer', 'writer', 'creative director', 'character designer'],
    works: [
      'better-game-characters-by-design',
      'level-up-the-guide-to-great-video-game-design',
      'chris-crawford-on-game-design'
    ]
  },
  {
    family: 'Community, Ethics, Business',
    concepts: [
      'multiplayer pattern',
      'community',
      'griefing',
      'player rights',
      'ethics',
      'responsibility',
      'transformational games',
      'serious games',
      'business model',
      'pitch',
      'audience'
    ],
    domains: ['multiplayer_community', 'ethics_responsibility', 'business_pitch_release', 'education_serious_games'],
    phases: [phase.direction, phase.core, phase.test, phase.ops],
    roles: ['game director', 'community manager', 'producer', 'business lead'],
    works: ['bartle-player-types', 'play-matters', 'the-game-design-reader-a-rules-of-play-anthology']
  }
];

function uniq(items) {
  return [...new Set(items)];
}

const conceptMap = new Map();
for (const family of families) {
  for (const name of family.concepts) {
    const key = name.toLowerCase();
    const existing = conceptMap.get(key);
    if (existing) {
      existing.family = uniq(`${existing.family}; ${family.family}`.split('; ').filter(Boolean)).join('; ');
      existing.domains = uniq([...existing.domains, ...family.domains]);
      existing.phases = uniq([...existing.phases, ...family.phases]);
      existing.roles = uniq([...existing.roles, ...family.roles]);
      existing.works = uniq([...existing.works, ...family.works]);
    } else {
      const slug = slugify(name);
      conceptMap.set(key, {
        family: family.family,
        domains: family.domains,
        phases: family.phases,
        roles: family.roles,
        works: family.works,
        name,
        slug,
        card_id: `concept_${slug}`
      });
    }
  }
}

const concepts = [...conceptMap.values()];

function dossierIds(works) {
  return works.map((work) => `dossier_${work}`);
}

function conceptCard(concept) {
  const summary = `Working vocabulary placeholder for ${concept.name}; requires legal source evidence or user notes before it is treated as source-backed knowledge.`;
  const explanation = `This card records ${concept.name} as a draft game design concept for retrieval, discussion, and future evidence attachment. It is not a chapter summary and does not claim that any registered book defines the term this way. Use the card to collect user notes, legal quotations, official metadata references, playtest observations, and project applications. Promote the card only after evidence_refs point to legally usable sources or explicit user notes.`;
  const fields = {
    card_id: concept.card_id,
    card_type: 'concept_card',
    title: concept.name,
    aliases: [],
    one_sentence_summary: summary,
    detailed_explanation: explanation,
    source_basis: 'derived_from_public_metadata',
    confidence: 'weak',
    evidence_refs: [],
    related_works: concept.works,
    related_dossiers: dossierIds(concept.works),
    related_concepts: [],
    related_lenses: [],
    phase_groups: concept.phases,
    domains: concept.domains,
    production_roles: concept.roles,
    when_to_use: [
      `Use as a retrieval hook when asking AI or humans to discuss ${concept.name}.`,
      'Use as a note container while reading legally usable sources.',
      'Use as a project overlay anchor after a project example is attached.'
    ],
    when_not_to_use: [
      'Do not cite this card as a verified definition.',
      'Do not use it to represent what a specific book says without evidence.',
      'Do not generate production decisions from this card alone.'
    ],
    required_inputs: ['At least one legal evidence reference or user note.', 'Optional project example, playtest log, or design decision log.'],
    output_artifacts: ['Concept definition candidate.', 'Evidence-backed claim nodes.', 'Linked design lens or workflow pack in later prompts.'],
    common_misunderstandings: ['Confusing a general vocabulary placeholder with a verified source claim.', 'Treating phase/domain routing as evidence.'],
    examples_or_placeholders: [`Placeholder project example: attach a game scene, mechanic, UI element, or playtest observation where ${concept.name} is relevant.`],
    application_to_project: `Use this card to ask: what concrete design artifact would change if our understanding of ${concept.name} improved? Record the answer in a ProjectOverlay rather than editing this general card.`,
    discussion_prompts: [
      `Which legal source or user note should define ${concept.name} first?`,
      'What project decision would this concept help clarify?',
      'What playtest observation could support or challenge this concept?'
    ],
    AI_prompt_hooks: [
      `Explain ${concept.name} only from attached evidence; label unsupported parts as hypotheses.`,
      `Convert my user notes about ${concept.name} into claims with source_basis and confidence.`,
      `Find contradictions between project assumptions and evidence attached to ${concept.name}.`
    ],
    status: 'needs_evidence',
    version: '0.1.0',
    created_at: now,
    updated_at: now
  };

  return `${frontmatter(fields)}# ${concept.name}

## One-Sentence Summary

${summary}

## Detailed Explanation

${explanation}

## Source Basis And Confidence

- source_basis: derived_from_public_metadata
- confidence: weak
- evidence_refs: none yet
- promotion rule: attach user_manual_note, user_legal_file, open_fulltext, official_metadata, or user_manual_quote before using this as a source-backed definition.

## Related Works And Dossiers

${mdList(concept.works.map((work) => `work: ${work}`))}

${mdList(dossierIds(concept.works).map((dossier) => `dossier: ${dossier}`))}

## Related Concepts And Lenses

- Related concepts are intentionally empty until claim graph relations are reviewed.
- Related lenses should be linked in Prompt 6.

## Production Routing

- family: ${concept.family}
- phase_groups: ${concept.phases.join('; ')}
- domains: ${concept.domains.join('; ')}
- production_roles: ${concept.roles.join('; ')}

## When To Use

${mdList(fields.when_to_use)}

## When Not To Use

${mdList(fields.when_not_to_use)}

## Required Inputs

${mdList(fields.required_inputs)}

## Output Artifacts

${mdList(fields.output_artifacts)}

## Common Misunderstandings

${mdList(fields.common_misunderstandings)}

## Examples Or Placeholders

${mdList(fields.examples_or_placeholders)}

## Application To Project

${fields.application_to_project}

## Discussion Prompts

${mdList(fields.discussion_prompts)}

## AI Prompt Hooks

${mdList(fields.AI_prompt_hooks)}
`;
}

for (const concept of concepts) write(path.join(cardsRoot, 'concept_cards', `${concept.slug}.md`), conceptCard(concept));

const frameworkDefs = [
  ['mda-routing-scaffold', 'MDA Routing Scaffold', ['formal_game_design', 'rules_and_mechanics', 'player_experience'], [phase.direction, phase.core, phase.test], ['mda-mechanics-dynamics-aesthetics']],
  ['formal-elements-map', 'Formal Elements Map', ['formal_game_design', 'rules_and_mechanics'], [phase.direction, phase.core], ['rules-of-play', 'the-game-design-reader-a-rules-of-play-anthology']],
  ['core-loop-map', 'Core Loop Map', ['systems_design', 'rules_and_mechanics'], [phase.core, phase.dev, phase.test], ['advanced-game-design-a-systems-approach', 'game-mechanics-advanced-game-design']],
  ['game-feel-metrics-scaffold', 'Game Feel Metrics Scaffold', ['game_feel', 'interactivity', 'ui_ux_feedback'], [phase.core, phase.art, phase.dev, phase.test], ['game-feel-a-game-designers-guide-to-virtual-sensation']],
  ['source-sink-economy-map', 'Source-Sink Economy Map', ['economy_and_balance', 'systems_design'], [phase.economy, phase.test], ['game-mechanics-advanced-game-design', 'characteristics-of-games']],
  ['meaningful-decision-test', 'Meaningful Decision Test', ['rules_and_mechanics', 'player_experience'], [phase.core, phase.test], ['rules-of-play', 'characteristics-of-games']],
  ['player-motivation-hypothesis-map', 'Player Motivation Hypothesis Map', ['player_psychology', 'player_experience'], [phase.direction, phase.core, phase.test], ['a-theory-of-fun-for-game-design', 'bartle-player-types']],
  ['playtest-question-framework', 'Playtest Question Framework', ['playtesting', 'player_experience'], [phase.test], ['game-design-workshop-a-playcentric-approach']],
  ['prototype-assumption-matrix', 'Prototype Assumption Matrix', ['prototyping', 'production_process'], [phase.direction, phase.core, phase.dev, phase.test], ['game-design-workshop-a-playcentric-approach', 'challenges-for-game-designers']],
  ['narrative-function-map', 'Narrative Function Map', ['narrative_design', 'worldbuilding'], [phase.narrative, phase.test], ['level-up-the-guide-to-great-video-game-design', 'chris-crawford-on-game-design']],
  ['character-function-sheet', 'Character Function Sheet', ['character_design', 'player_psychology'], [phase.narrative, phase.art, phase.test], ['better-game-characters-by-design']],
  ['level-flow-map', 'Level Flow Map', ['level_design', 'player_experience', 'ui_ux_feedback'], [phase.core, phase.art, phase.dev, phase.test], ['level-up-the-guide-to-great-video-game-design']],
  ['ethics-risk-review', 'Ethics Risk Review', ['ethics_responsibility', 'multiplayer_community'], [phase.direction, phase.core, phase.test, phase.ops], ['play-matters']],
  ['release-readiness-gate', 'Release Readiness Gate', ['production_process', 'business_pitch_release'], [phase.test, phase.ops], ['level-up-the-guide-to-great-video-game-design']],
  ['ai-source-bounded-retrieval-framework', 'AI Source-Bounded Retrieval Framework', ['prompt_engineering_for_game_design', 'ai_assisted_design'], [phase.direction, phase.dev, phase.test], []]
];

function genericCard(definition, type, folder) {
  const [slug, title, domains, phases, works] = definition;
  const id = `${type.replace('_card', '')}_${slug}`;
  const summary = `Draft ${type.replace('_', ' ')} for ${title}; use only as a structure until evidence is attached.`;
  const explanation = 'This is a legally safe placeholder. It converts a known design topic into a reusable production structure without asserting source-body claims. The card must remain draft until user notes, legal sources, open fulltext, or official metadata provide evidence.';
  const fields = {
    card_id: id,
    card_type: type,
    title,
    aliases: [],
    one_sentence_summary: summary,
    detailed_explanation: explanation,
    source_basis: 'unsupported_draft',
    confidence: 'unsupported_draft',
    evidence_refs: [],
    related_works: works,
    related_dossiers: dossierIds(works),
    related_concepts: [],
    related_lenses: [],
    phase_groups: phases,
    domains,
    production_roles: ['game designer', 'producer', 'AI-assisted design operator'],
    when_to_use: [`Use when you need a structured prompt, checklist, or production worksheet for ${title}.`, 'Use only with explicit evidence labels.'],
    when_not_to_use: ['Do not present this as a verified method from a specific author or book.', 'Do not use it as a final project gate without project-specific review.'],
    required_inputs: ['User notes or legal source references.', 'Project context if applied to a real game.'],
    output_artifacts: ['Draft worksheet, checklist, prompt, or application note.', 'Evidence gaps for later verification.'],
    common_misunderstandings: ['Mistaking a workflow scaffold for a source-backed framework.', 'Treating a generated checklist as complete without playtest or project evidence.'],
    examples_or_placeholders: ['Placeholder: add a project-specific example before using in production.'],
    application_to_project: 'Attach this card to a ProjectOverlay and record whether it changed a design decision, test plan, or implementation task.',
    discussion_prompts: ['What evidence would verify this card?', 'What project artifact should this card produce?', 'What failure mode should this card prevent?'],
    AI_prompt_hooks: ['Use this card as a structure only; cite evidence for every claim.', 'Ask for unsupported assumptions to be separated from source-backed notes.'],
    status: 'needs_evidence',
    version: '0.1.0',
    created_at: now,
    updated_at: now
  };
  const body = `${frontmatter(fields)}# ${title}

## One-Sentence Summary

${summary}

## Detailed Explanation

${explanation}

## Source Basis And Confidence

- source_basis: unsupported_draft
- confidence: unsupported_draft
- evidence_refs: none yet

## Related Works And Dossiers

${mdList(works.map((work) => `work: ${work}`))}

## Related Concepts And Lenses

- Link concepts after claim review.
- Link lenses in Prompt 6.

## Production Routing

- phase_groups: ${phases.join('; ')}
- domains: ${domains.join('; ')}

## When To Use

${mdList(fields.when_to_use)}

## When Not To Use

${mdList(fields.when_not_to_use)}

## Required Inputs

${mdList(fields.required_inputs)}

## Output Artifacts

${mdList(fields.output_artifacts)}

## Common Misunderstandings

${mdList(fields.common_misunderstandings)}

## Examples Or Placeholders

${mdList(fields.examples_or_placeholders)}

## Application To Project

${fields.application_to_project}

## Discussion Prompts

${mdList(fields.discussion_prompts)}

## AI Prompt Hooks

${mdList(fields.AI_prompt_hooks)}
`;
  write(path.join(cardsRoot, folder, `${slug}.md`), body);
  return { id, slug, title, type, domains, phases, works };
}

const generatedNonConcept = [];
for (const definition of frameworkDefs) generatedNonConcept.push(genericCard(definition, 'framework_card', 'framework_cards'));

const checklistDefs = [
  ['source-governance-checklist', 'Source Governance Checklist', ['ethics_responsibility', 'prompt_engineering_for_game_design'], [phase.dev, phase.test], []],
  ['legal-sidecar-checklist', 'Legal Sidecar Checklist', ['ethics_responsibility'], [phase.dev, phase.test], []],
  ['concept-card-evidence-checklist', 'Concept Card Evidence Checklist', ['prompt_engineering_for_game_design'], [phase.test], []],
  ['core-loop-checklist', 'Core Loop Checklist', ['systems_design', 'rules_and_mechanics'], [phase.core, phase.test], []],
  ['mechanic-spec-checklist', 'Mechanic Spec Checklist', ['rules_and_mechanics', 'production_process'], [phase.core, phase.dev, phase.test], []],
  ['economy-source-sink-checklist', 'Economy Source Sink Checklist', ['economy_and_balance', 'systems_design'], [phase.economy, phase.test], []],
  ['game-feel-audit-checklist', 'Game Feel Audit Checklist', ['game_feel', 'ui_ux_feedback'], [phase.art, phase.dev, phase.test], []],
  ['ui-feedback-checklist', 'UI Feedback Checklist', ['ui_ux_feedback', 'player_experience'], [phase.art, phase.test], []],
  ['playtest-plan-checklist', 'Playtest Plan Checklist', ['playtesting', 'player_experience'], [phase.test], []],
  ['dossier-promotion-checklist', 'Dossier Promotion Checklist', ['prompt_engineering_for_game_design'], [phase.test], []],
  ['quote-card-safety-checklist', 'Quote Card Safety Checklist', ['ethics_responsibility'], [phase.test], []],
  ['project-overlay-checklist', 'Project Overlay Checklist', ['production_process'], [phase.direction, phase.core, phase.test], []],
  ['release-readiness-checklist', 'Release Readiness Checklist', ['business_pitch_release', 'production_process'], [phase.ops], []],
  ['hallucination-audit-checklist', 'Hallucination Audit Checklist', ['prompt_engineering_for_game_design', 'ethics_responsibility'], [phase.test], []],
  ['claim-graph-review-checklist', 'Claim Graph Review Checklist', ['prompt_engineering_for_game_design'], [phase.test], []]
];

for (const definition of checklistDefs) generatedNonConcept.push(genericCard(definition, 'checklist_card', 'checklist_cards'));

const promptDefs = [
  ['source-bounded-card-extraction', 'Source-Bounded Card Extraction Prompt', ['prompt_engineering_for_game_design'], [phase.dev, phase.test], []],
  ['dossier-note-ingestion', 'Dossier Note Ingestion Prompt', ['prompt_engineering_for_game_design'], [phase.dev, phase.test], []],
  ['claim-graph-audit', 'Claim Graph Audit Prompt', ['prompt_engineering_for_game_design'], [phase.test], []],
  ['concept-comparison', 'Concept Comparison Prompt', ['formal_game_design'], [phase.core, phase.test], []],
  ['framework-extraction-from-user-notes', 'Framework Extraction From User Notes Prompt', ['prompt_engineering_for_game_design'], [phase.dev, phase.test], []],
  ['playtest-analysis', 'Playtest Analysis Prompt', ['playtesting'], [phase.test], []],
  ['core-loop-critique', 'Core Loop Critique Prompt', ['systems_design', 'rules_and_mechanics'], [phase.core, phase.test], []],
  ['economy-balance-critique', 'Economy Balance Critique Prompt', ['economy_and_balance'], [phase.economy, phase.test], []],
  ['game-feel-critique', 'Game Feel Critique Prompt', ['game_feel'], [phase.art, phase.dev, phase.test], []],
  ['ui-feedback-critique', 'UI Feedback Critique Prompt', ['ui_ux_feedback'], [phase.art, phase.test], []],
  ['narrative-premise-critique', 'Narrative Premise Critique Prompt', ['narrative_design'], [phase.narrative, phase.test], []],
  ['character-review', 'Character Review Prompt', ['character_design', 'player_psychology'], [phase.narrative, phase.art, phase.test], []],
  ['release-page-critique', 'Release Page Critique Prompt', ['business_pitch_release'], [phase.ops], []],
  ['project-overlay-generation', 'Project Overlay Generation Prompt', ['production_process', 'prompt_engineering_for_game_design'], [phase.direction, phase.core, phase.test], []],
  ['evidence-gap-finder', 'Evidence Gap Finder Prompt', ['prompt_engineering_for_game_design'], [phase.test], []]
];

for (const definition of promptDefs) generatedNonConcept.push(genericCard(definition, 'prompt_card', 'prompt_cards'));

const applicationDefs = [
  ['apply-core-loop-to-prototype', 'Apply Core Loop To Prototype', ['systems_design', 'prototyping'], [phase.core, phase.dev, phase.test], []],
  ['apply-game-feel-audit', 'Apply Game Feel Audit', ['game_feel', 'ui_ux_feedback'], [phase.art, phase.dev, phase.test], []],
  ['apply-source-sink-economy-map', 'Apply Source Sink Economy Map', ['economy_and_balance'], [phase.economy, phase.test], []],
  ['apply-playtest-findings', 'Apply Playtest Findings', ['playtesting', 'production_process'], [phase.test, phase.dev], []],
  ['apply-narrative-function-map', 'Apply Narrative Function Map', ['narrative_design'], [phase.narrative, phase.test], []],
  ['apply-character-function', 'Apply Character Function', ['character_design', 'player_psychology'], [phase.narrative, phase.art, phase.test], []],
  ['apply-release-readiness', 'Apply Release Readiness', ['business_pitch_release', 'production_process'], [phase.ops], []],
  ['apply-ethics-review', 'Apply Ethics Review', ['ethics_responsibility'], [phase.direction, phase.core, phase.ops], []],
  ['apply-community-segmentation', 'Apply Community Segmentation', ['multiplayer_community', 'business_pitch_release'], [phase.direction, phase.core, phase.ops], []],
  ['apply-ai-source-governance', 'Apply AI Source Governance', ['prompt_engineering_for_game_design', 'ethics_responsibility'], [phase.dev, phase.test], []]
];

for (const definition of applicationDefs) generatedNonConcept.push(genericCard(definition, 'application_card', 'application_cards'));

for (const folder of ['quote_cards', 'comparison_cards', 'exercise_cards', 'anti_pattern_cards', 'case_study_cards']) {
  write(
    path.join(cardsRoot, folder, 'README.md'),
    `# ${folder.replace(/_/g, ' ')}

This card type is implemented in the universal card schema and template. No generated cards were created in Prompt 5 because safe evidence or project cases are required before these cards should contain substantive content.
`
  );
}

let inventory = '# Concept Inventory\n\n';
inventory += 'Prompt 5 creates a legally safe concept inventory. These entries are routing and vocabulary placeholders, not source-backed book definitions. Every generated concept card starts as `source_basis: derived_from_public_metadata`, `confidence: weak`, and `status: needs_evidence`.\n\n';
inventory += '| Family | Concept | Card | Domains | Phase Groups | Evidence Status |\n';
inventory += '|---|---|---|---|---|---|\n';
for (const concept of concepts) {
  inventory += `| ${concept.family} | ${concept.name} | concept_cards/${concept.slug}.md | ${concept.domains.join('; ')} | ${concept.phases.join('; ')} | needs legal/user evidence |\n`;
}
write(path.join(cardsRoot, 'CONCEPT_INVENTORY.md'), inventory);

const claims = [];
for (const concept of concepts) {
  claims.push({
    claim_id: `claim_${concept.slug}_tracked_as_draft_concept`,
    claim_text: `${concept.name} is tracked as a draft game design vocabulary item in this KB and requires legal source evidence or user notes before it becomes a source-backed definition.`,
    claim_type: 'definition',
    source_basis: 'derived_from_public_metadata',
    confidence: 'weak',
    evidence_refs: [],
    related_concepts: [concept.card_id],
    related_cards: [concept.card_id],
    supports: [],
    challenges: [],
    contradicted_by: [],
    phase_groups: concept.phases,
    domains: concept.domains,
    status: 'needs_evidence'
  });
}

for (const card of generatedNonConcept) {
  claims.push({
    claim_id: `claim_${card.slug}_is_draft_structure`,
    claim_text: `${card.title} is a draft production structure and must not be treated as a source-backed method until evidence is attached.`,
    claim_type: card.type === 'prompt_card' ? 'method' : 'application',
    source_basis: 'unsupported_draft',
    confidence: 'unsupported_draft',
    evidence_refs: [],
    related_concepts: [],
    related_cards: [card.id],
    supports: [],
    challenges: [],
    contradicted_by: [],
    phase_groups: card.phases,
    domains: card.domains,
    status: 'needs_evidence'
  });
}

const claimGraph = {
  schema_version: 'bookos.claim_graph.v1',
  updated_date: now,
  governance: {
    legal_rule: 'No high-risk source body text was used. Claims are placeholders unless evidence_refs identify legally usable sources or user notes.',
    default_source_basis: 'derived_from_public_metadata or unsupported_draft',
    default_confidence: 'weak or unsupported_draft'
  },
  counts: {
    claims: claims.length,
    concept_claims: concepts.length,
    non_concept_claims: generatedNonConcept.length
  },
  claims
};

write(path.join(cardsRoot, 'claim_graph.json'), `${JSON.stringify(claimGraph, null, 2)}\n`);

let claimMd = '# Claim Graph\n\n';
claimMd += 'The Prompt 5 claim graph is intentionally conservative. It records placeholder claims that explain what is tracked, what is unsupported, and what evidence is needed. No high-risk source body text was read, summarized, quoted, embedded, or transformed.\n\n';
claimMd += `## Counts\n\n- total claims: ${claims.length}\n- concept placeholder claims: ${concepts.length}\n- non-concept structure claims: ${generatedNonConcept.length}\n\n`;
claimMd += '## Legal Gate\n\nA claim can become production knowledge only when it includes evidence_refs from one or more allowed bases: `user_manual_note`, `user_manual_quote`, `user_legal_file`, `open_fulltext`, or `official_metadata`.\n\n';
claimMd += '| Claim ID | Type | Source Basis | Confidence | Status | Related Cards |\n';
claimMd += '|---|---|---|---|---|---|\n';
for (const claim of claims) {
  claimMd += `| ${claim.claim_id} | ${claim.claim_type} | ${claim.source_basis} | ${claim.confidence} | ${claim.status} | ${claim.related_cards.join('; ')} |\n`;
}
write(path.join(cardsRoot, 'CLAIM_GRAPH.md'), claimMd);

let gaps = '# Evidence Gaps\n\n';
gaps += 'Prompt 5 deliberately creates many weak or unsupported draft cards so the KB can be searched and expanded safely. These gaps must be closed before the cards are used as source-backed game design knowledge.\n\n';
gaps += '## Global Gaps\n\n';
gaps += '- No uploaded commercial book file has a legal sidecar enabling body-level processing.\n';
gaps += '- No generated concept definition is backed by an allowed quote, chapter note, or legal source file.\n';
gaps += '- No quote cards were generated because no user_manual_quote or open_fulltext quote was provided.\n';
gaps += '- Framework, checklist, prompt, and application cards are workflow scaffolds, not verified author methods.\n';
gaps += '- Dossier pending sections cannot produce verified cards until user notes or legal sources are attached.\n\n';
gaps += '## Concept Evidence Queue\n\n';
gaps += '| Concept Card | Evidence Needed | Recommended User Action |\n';
gaps += '|---|---|---|\n';
for (const concept of concepts) {
  gaps += `| ${concept.card_id} | legal definition source, user reading note, or project/playtest example | Add user note or approve legal sidecar before promotion |\n`;
}
gaps += '\n## Structure Card Evidence Queue\n\n';
gaps += '| Card | Evidence Needed | Recommended User Action |\n';
gaps += '|---|---|---|\n';
for (const card of generatedNonConcept) {
  gaps += `| ${card.id} | source-backed method details or project validation | Attach user notes, official metadata, or a project overlay |\n`;
}
write(path.join(cardsRoot, 'EVIDENCE_GAPS.md'), gaps);

const summary = {
  concept_cards: concepts.length,
  framework_cards: frameworkDefs.length,
  checklist_cards: checklistDefs.length,
  prompt_cards: promptDefs.length,
  application_cards: applicationDefs.length,
  total_generated_cards: concepts.length + generatedNonConcept.length,
  claims: claims.length
};

write(path.join(cardsRoot, 'PROMPT_5_GENERATION_SUMMARY.json'), `${JSON.stringify(summary, null, 2)}\n`);
console.log(JSON.stringify(summary, null, 2));
