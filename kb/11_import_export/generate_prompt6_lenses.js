const fs = require('fs');
const path = require('path');

const root = process.cwd();
const kb = path.join(root, 'kb');
const lensRoot = path.join(kb, '06_lenses');
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

const aiPrompt =
  'Use this lens to review the following game design artifact. First identify the intended player experience. Then ask the diagnostic questions. Then produce: strengths, risks, missing evidence, suggested experiments, and next design actions. Do not invent facts. Mark assumptions.';

const requiredFields = [
  'lens_id',
  'title',
  'one_sentence_purpose',
  'domain',
  'phase_groups',
  'related_cards',
  'related_works',
  'source_basis',
  'confidence',
  'when_to_use',
  'what_it_reveals',
  'diagnostic_questions',
  'required_inputs',
  'recommended_outputs',
  'red_flags',
  'common_false_positives',
  'example_usage_template',
  'forum_thread_template',
  'AI_review_prompt',
  'status'
];

const dirs = [
  lensRoot,
  path.join(lensRoot, 'cards'),
  path.join(lensRoot, 'by_phase'),
  path.join(lensRoot, 'by_domain')
];
for (const dir of dirs) fs.mkdirSync(dir, { recursive: true });

for (const dir of [path.join(lensRoot, 'cards'), path.join(lensRoot, 'by_phase'), path.join(lensRoot, 'by_domain')]) {
  for (const file of fs.readdirSync(dir).filter((name) => name.endsWith('.md'))) {
    fs.unlinkSync(path.join(dir, file));
  }
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\+/g, ' plus ')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function phaseSlug(value) {
  const entries = [
    [phase.direction, '01_project_direction'],
    [phase.core, '02_core_play_systems'],
    [phase.economy, '03_numbers_economy'],
    [phase.narrative, '04_content_narrative'],
    [phase.art, '05_art_ui_experience'],
    [phase.dev, '06_development_implementation'],
    [phase.test, '07_testing_acceptance_audit'],
    [phase.ops, '08_operations_release']
  ];
  return (entries.find(([label]) => label === value) || [null, slugify(value) || 'unknown_phase'])[1];
}

function uniq(items) {
  return [...new Set((items || []).filter(Boolean))];
}

function yamlArray(items) {
  if (!items || items.length === 0) return '[]';
  return `[${items.map((item) => JSON.stringify(item)).join(', ')}]`;
}

function yamlValue(value) {
  return Array.isArray(value) ? yamlArray(value) : JSON.stringify(value ?? '');
}

function frontmatter(fields) {
  return `---\n${Object.entries(fields)
    .map(([key, value]) => `${key}: ${yamlValue(value)}`)
    .join('\n')}\n---\n`;
}

function mdList(items) {
  return items && items.length ? items.map((item) => `- ${item}`).join('\n') : '- Evidence gap: no related item has been attached yet.';
}

function write(file, text) {
  fs.writeFileSync(file, text.replace(/\r\n/g, '\n'), 'utf8');
}

function concept(name) {
  return `concept_${slugify(name)}`;
}

function framework(slug) {
  return `framework_${slug}`;
}

const workByDomain = {
  play_theory: ['play-matters', 'the-aesthetic-of-play', 'rules-of-play'],
  player_experience: ['a-theory-of-fun-for-game-design', 'the-art-of-game-design-a-book-of-lenses'],
  player_psychology: ['a-theory-of-fun-for-game-design', 'better-game-characters-by-design'],
  rules_and_mechanics: ['game-mechanics-advanced-game-design', 'rules-of-play', 'characteristics-of-games'],
  formal_game_design: ['rules-of-play', 'mda-mechanics-dynamics-aesthetics', 'formal-abstract-design-tools'],
  systems_design: ['advanced-game-design-a-systems-approach', 'game-mechanics-advanced-game-design', 'characteristics-of-games'],
  economy_and_balance: ['game-mechanics-advanced-game-design', 'characteristics-of-games'],
  game_feel: ['game-feel-a-game-designers-guide-to-virtual-sensation'],
  interactivity: ['game-feel-a-game-designers-guide-to-virtual-sensation', 'chris-crawford-on-game-design'],
  ui_ux_feedback: ['level-up-the-guide-to-great-video-game-design', 'game-feel-a-game-designers-guide-to-virtual-sensation'],
  narrative_design: ['level-up-the-guide-to-great-video-game-design', 'chris-crawford-on-game-design'],
  worldbuilding: ['level-up-the-guide-to-great-video-game-design'],
  character_design: ['better-game-characters-by-design', 'level-up-the-guide-to-great-video-game-design'],
  prototyping: ['game-design-workshop-a-playcentric-approach', 'challenges-for-game-designers'],
  playtesting: ['game-design-workshop-a-playcentric-approach', 'the-art-of-game-design-a-book-of-lenses'],
  production_process: ['game-design-workshop-a-playcentric-approach', 'level-up-the-guide-to-great-video-game-design'],
  multiplayer_community: ['bartle-player-types', 'characteristics-of-games'],
  ethics_responsibility: ['play-matters', 'better-game-characters-by-design'],
  business_pitch_release: ['level-up-the-guide-to-great-video-game-design', 'bartle-player-types'],
  education_serious_games: ['a-theory-of-fun-for-game-design', 'the-game-design-reader-a-rules-of-play-anthology'],
  design_lenses: ['the-art-of-game-design-a-book-of-lenses'],
  prompt_engineering_for_game_design: [],
  ai_assisted_design: []
};

const familyDefaults = {
  'Project Direction Lenses': {
    domain: 'business_pitch_release',
    phases: [phase.direction, phase.test],
    deliverable: 'vision brief or risk memo',
    concepts: ['player experience', 'audience', 'pitch'],
    frameworks: ['prototype-assumption-matrix']
  },
  'Player Experience Lenses': {
    domain: 'player_experience',
    phases: [phase.direction, phase.core, phase.test],
    deliverable: 'experience target and playtest questions',
    concepts: ['player experience', 'agency', 'challenge'],
    frameworks: ['player-motivation-hypothesis-map']
  },
  'Play Theory Lenses': {
    domain: 'play_theory',
    phases: [phase.direction, phase.core, phase.test],
    deliverable: 'play framing note',
    concepts: ['play', 'playfulness', 'rules'],
    frameworks: ['formal-elements-map']
  },
  'Mechanics and Rules Lenses': {
    domain: 'rules_and_mechanics',
    phases: [phase.core, phase.dev, phase.test],
    deliverable: 'mechanic spec or rule audit',
    concepts: ['mechanics', 'rules', 'meaningful decisions'],
    frameworks: ['core-loop-map', 'meaningful-decision-test']
  },
  'Systems and Economy Lenses': {
    domain: 'economy_and_balance',
    phases: [phase.core, phase.economy, phase.test],
    deliverable: 'system map or balance test',
    concepts: ['system', 'loop', 'economy', 'balance'],
    frameworks: ['source-sink-economy-map', 'core-loop-map']
  },
  'Game Feel Lenses': {
    domain: 'game_feel',
    phases: [phase.core, phase.art, phase.dev, phase.test],
    deliverable: 'feel audit and tuning experiment',
    concepts: ['game feel', 'feedback', 'responsiveness'],
    frameworks: ['game-feel-metrics-scaffold']
  },
  'UI / UX / Feedback Lenses': {
    domain: 'ui_ux_feedback',
    phases: [phase.art, phase.dev, phase.test],
    deliverable: 'UX audit or feedback spec',
    concepts: ['interface', 'feedback', 'player experience'],
    frameworks: ['game-feel-metrics-scaffold']
  },
  'Narrative / World / Character Lenses': {
    domain: 'narrative_design',
    phases: [phase.direction, phase.narrative, phase.art, phase.test],
    deliverable: 'narrative review note',
    concepts: ['story', 'worldbuilding', 'character function'],
    frameworks: ['narrative-function-map', 'character-function-sheet']
  },
  'Prototype and Playtest Lenses': {
    domain: 'playtesting',
    phases: [phase.direction, phase.core, phase.dev, phase.test],
    deliverable: 'playtest plan or iteration decision',
    concepts: ['prototype', 'playtest', 'iteration'],
    frameworks: ['playtest-question-framework', 'prototype-assumption-matrix']
  },
  'Production / Release / Community Lenses': {
    domain: 'production_process',
    phases: [phase.dev, phase.test, phase.ops],
    deliverable: 'release checklist or production decision log',
    concepts: ['design document', 'community', 'release readiness'],
    frameworks: ['release-readiness-gate']
  },
  'AI-Assisted Design and KB Governance Lenses': {
    domain: 'prompt_engineering_for_game_design',
    phases: [phase.direction, phase.dev, phase.test],
    deliverable: 'source-bounded AI review or evidence audit',
    concepts: ['design document', 'problem statement', 'iteration'],
    frameworks: ['ai-source-bounded-retrieval-framework']
  }
};

const requiredFamilies = [
  {
    family: 'Project Direction Lenses',
    items: [
      ['core experience', ['player experience', 'experience goal', 'loop'], ['core-loop-map'], 'player_experience'],
      ['audience', ['audience', 'player experience', 'business model'], [], 'business_pitch_release'],
      ['player fantasy', ['player identity', 'avatar', 'agency'], ['player-motivation-hypothesis-map'], 'player_psychology'],
      ['emotional goal', ['pleasure', 'tension', 'player experience'], [], 'player_experience'],
      ['novelty', ['curiosity', 'playfulness', 'premise'], [], 'player_experience'],
      ['feasibility', ['prototype', 'production phase', 'problem statement'], ['prototype-assumption-matrix'], 'production_process'],
      ['scope', ['MVP scope', 'prototype', 'production phase'].filter((x) => x !== 'MVP scope'), ['prototype-assumption-matrix'], 'production_process'],
      ['market position', ['audience', 'pitch', 'business model'], ['release-readiness-gate'], 'business_pitch_release'],
      ['ethical risk', ['ethics', 'responsibility', 'player rights'], ['ethics-risk-review'], 'ethics_responsibility']
    ]
  },
  {
    family: 'Player Experience Lenses',
    items: [
      ['agency', ['agency', 'meaningful decisions', 'player experience'], ['meaningful-decision-test'], 'player_experience'],
      ['motivation', ['mastery', 'curiosity', 'audience'], ['player-motivation-hypothesis-map'], 'player_psychology'],
      ['challenge', ['challenge', 'skill', 'tension'], ['meaningful-decision-test'], 'player_experience'],
      ['mastery', ['mastery', 'learning', 'progression curve'], ['player-motivation-hypothesis-map'], 'player_psychology'],
      ['flow', ['flow', 'challenge', 'skill'], [], 'player_experience'],
      ['curiosity', ['curiosity', 'uncertainty', 'worldbuilding'], [], 'player_experience'],
      ['uncertainty', ['uncertainty', 'chance', 'risk versus reward'], ['meaningful-decision-test'], 'player_experience'],
      ['tension curve', ['tension', 'dramatic arc', 'progression curve'], [], 'player_experience'],
      ['pleasure variety', ['pleasure', 'fun', 'playfulness'], [], 'player_experience'],
      ['accessibility', ['interface', 'feedback', 'player rights'], [], 'ui_ux_feedback'],
      ['onboarding', ['learning', 'mental model', 'feedback'], [], 'ui_ux_feedback']
    ]
  },
  {
    family: 'Play Theory Lenses',
    items: [
      ['play context', ['play as context', 'boundaries', 'play'], [], 'play_theory'],
      ['playfulness', ['playfulness', 'curiosity', 'play'], [], 'play_theory'],
      ['rules as constraints', ['rules', 'boundaries', 'procedures'], ['formal-elements-map'], 'play_theory'],
      ['appropriation', ['play as appropriation', 'agency', 'community'], [], 'play_theory'],
      ['disruption', ['play as disruption', 'playfulness', 'conflict'], [], 'play_theory'],
      ['voluntary engagement', ['play', 'agency', 'pleasure'], [], 'play_theory'],
      ['safety and risk', ['player rights', 'risk versus reward', 'ethics'], ['ethics-risk-review'], 'ethics_responsibility'],
      ['player-created meaning', ['emergent story', 'community', 'player identity'], [], 'play_theory']
    ]
  },
  {
    family: 'Mechanics and Rules Lenses',
    items: [
      ['core loop', ['loop', 'mechanics', 'objectives'], ['core-loop-map'], 'rules_and_mechanics'],
      ['meaningful decisions', ['meaningful decisions', 'tradeoffs', 'agency'], ['meaningful-decision-test'], 'rules_and_mechanics'],
      ['tradeoffs', ['tradeoffs', 'resources', 'risk versus reward'], ['meaningful-decision-test'], 'rules_and_mechanics'],
      ['dilemma quality', ['dilemmas', 'conflict', 'outcome'], ['meaningful-decision-test'], 'rules_and_mechanics'],
      ['rule clarity', ['rules', 'procedures', 'boundaries'], ['formal-elements-map'], 'rules_and_mechanics'],
      ['emergent possibility', ['emergence', 'system', 'mechanics'], ['core-loop-map'], 'systems_design'],
      ['skill/chance mix', ['skill', 'chance', 'uncertainty'], ['meaningful-decision-test'], 'rules_and_mechanics'],
      ['exploitability', ['rules', 'economy', 'balance'], ['source-sink-economy-map'], 'rules_and_mechanics'],
      ['depth versus complexity', ['strategic skill', 'mental model', 'rules'], ['formal-elements-map'], 'formal_game_design']
    ]
  },
  {
    family: 'Systems and Economy Lenses',
    items: [
      ['parts/loops/whole', ['part', 'loop', 'whole'], ['core-loop-map'], 'systems_design'],
      ['feedback loops', ['feedback loop', 'system', 'emergence'], ['core-loop-map'], 'systems_design'],
      ['source/sink balance', ['source', 'sink', 'economy'], ['source-sink-economy-map'], 'economy_and_balance'],
      ['progression curve', ['progression curve', 'mastery', 'learning'], [], 'economy_and_balance'],
      ['power curve', ['power curve', 'progression curve', 'balance'], [], 'economy_and_balance'],
      ['systemic coupling', ['system', 'part', 'emergence'], ['core-loop-map'], 'systems_design'],
      ['runaway loops', ['feedback loop', 'economy', 'balance'], ['source-sink-economy-map'], 'economy_and_balance'],
      ['stagnation', ['loop', 'progression curve', 'curiosity'], [], 'systems_design'],
      ['economy readability', ['economy', 'resources', 'feedback'], ['source-sink-economy-map'], 'economy_and_balance'],
      ['balance resilience', ['balance', 'transitive balance', 'intransitive balance'], ['source-sink-economy-map'], 'economy_and_balance']
    ]
  },
  {
    family: 'Game Feel Lenses',
    items: [
      ['real-time control', ['real-time control', 'game feel', 'responsiveness'], ['game-feel-metrics-scaffold'], 'game_feel'],
      ['input responsiveness', ['input metric', 'responsiveness', 'tightness'], ['game-feel-metrics-scaffold'], 'game_feel'],
      ['response clarity', ['response metric', 'feedback', 'interface'], ['game-feel-metrics-scaffold'], 'game_feel'],
      ['context readability', ['context metric', 'interface', 'feedback'], ['game-feel-metrics-scaffold'], 'game_feel'],
      ['polish support', ['polish', 'polish metric', 'juiciness'], ['game-feel-metrics-scaffold'], 'game_feel'],
      ['camera feel', ['camera feel', 'simulated space', 'context metric'], ['game-feel-metrics-scaffold'], 'game_feel'],
      ['avatar embodiment', ['avatar feel', 'avatar', 'player identity'], ['game-feel-metrics-scaffold'], 'game_feel'],
      ['tight versus floaty', ['tightness', 'floatiness', 'responsiveness'], ['game-feel-metrics-scaffold'], 'game_feel'],
      ['feedback timing', ['feedback', 'response metric', 'game feel'], ['game-feel-metrics-scaffold'], 'game_feel'],
      ['juiciness versus noise', ['juiciness', 'feedback', 'polish'], ['game-feel-metrics-scaffold'], 'game_feel']
    ]
  },
  {
    family: 'UI / UX / Feedback Lenses',
    items: [
      ['information priority', ['interface', 'feedback', 'player experience'], [], 'ui_ux_feedback'],
      ['input mapping', ['input metric', 'interface', 'real-time control'], ['game-feel-metrics-scaffold'], 'ui_ux_feedback'],
      ['feedback immediacy', ['feedback', 'response metric', 'responsiveness'], ['game-feel-metrics-scaffold'], 'ui_ux_feedback'],
      ['mode clarity', ['interface', 'mental model', 'rules'], [], 'ui_ux_feedback'],
      ['affordance', ['interface', 'feedback', 'mental model'], [], 'ui_ux_feedback'],
      ['visibility', ['interface', 'feedback', 'context metric'], [], 'ui_ux_feedback'],
      ['cognitive load', ['mental model', 'interface', 'learning'], [], 'ui_ux_feedback'],
      ['error recovery', ['feedback', 'learning', 'player rights'], [], 'ui_ux_feedback'],
      ['accessibility', ['player rights', 'interface', 'feedback'], [], 'ui_ux_feedback']
    ]
  },
  {
    family: 'Narrative / World / Character Lenses',
    items: [
      ['story function', ['story', 'premise', 'dramatic arc'], ['narrative-function-map'], 'narrative_design'],
      ['world coherence', ['worldbuilding', 'premise', 'narrative architecture'], ['narrative-function-map'], 'worldbuilding'],
      ['player role', ['player identity', 'avatar', 'agency'], ['character-function-sheet'], 'narrative_design'],
      ['character function', ['character function', 'status', 'transformation'], ['character-function-sheet'], 'character_design'],
      ['avatar identity', ['avatar', 'player identity', 'avatar feel'], ['character-function-sheet'], 'character_design'],
      ['narrative agency', ['agency', 'story', 'emergent story'], ['narrative-function-map'], 'narrative_design'],
      ['environmental storytelling', ['worldbuilding', 'emergent story', 'simulated space'], ['narrative-function-map'], 'worldbuilding'],
      ['thematic resonance', ['premise', 'transformation', 'player experience'], ['narrative-function-map'], 'narrative_design'],
      ['dramatic pacing', ['dramatic arc', 'tension', 'story'], ['narrative-function-map'], 'narrative_design']
    ]
  },
  {
    family: 'Prototype and Playtest Lenses',
    items: [
      ['prototype question', ['prototype', 'problem statement', 'experience goal'], ['prototype-assumption-matrix'], 'prototyping'],
      ['learning speed', ['learning', 'iteration', 'prototype'], ['prototype-assumption-matrix'], 'prototyping'],
      ['disposable prototype', ['prototype', 'paper prototype', 'digital prototype'], ['prototype-assumption-matrix'], 'prototyping'],
      ['playtest signal', ['playtest', 'feedback', 'player experience'], ['playtest-question-framework'], 'playtesting'],
      ['observation quality', ['playtest', 'mental model', 'feedback'], ['playtest-question-framework'], 'playtesting'],
      ['survey usefulness', ['playtest', 'audience', 'player experience'], ['playtest-question-framework'], 'playtesting'],
      ['iteration decision', ['iteration', 'playtest', 'design document'], ['playtest-question-framework'], 'playtesting'],
      ['test bias', ['playtest', 'audience', 'problem statement'], ['playtest-question-framework'], 'playtesting']
    ]
  },
  {
    family: 'Production / Release / Community Lenses',
    items: [
      ['documentation', ['design document', 'production phase', 'iteration'], [], 'production_process'],
      ['team communication', ['design document', 'problem statement', 'production phase'], [], 'production_process'],
      ['community health', ['community', 'player rights', 'responsibility'], ['ethics-risk-review'], 'multiplayer_community'],
      ['griefing risk', ['griefing', 'community', 'ethics'], ['ethics-risk-review'], 'multiplayer_community'],
      ['launch readiness', ['release readiness', 'pitch', 'business model'], ['release-readiness-gate'], 'business_pitch_release'],
      ['retention', ['progression curve', 'community', 'business model'], ['release-readiness-gate'], 'business_pitch_release'],
      ['update loop', ['iteration', 'community', 'release readiness'], ['release-readiness-gate'], 'production_process'],
      ['business alignment', ['business model', 'audience', 'pitch'], ['release-readiness-gate'], 'business_pitch_release'],
      ['responsibility', ['responsibility', 'ethics', 'player rights'], ['ethics-risk-review'], 'ethics_responsibility']
    ]
  },
  {
    family: 'AI-Assisted Design and KB Governance Lenses',
    items: [
      ['source-bounded retrieval', ['design document', 'problem statement'], ['ai-source-bounded-retrieval-framework'], 'prompt_engineering_for_game_design'],
      ['evidence gap', ['problem statement', 'design document'], ['ai-source-bounded-retrieval-framework'], 'prompt_engineering_for_game_design'],
      ['assumption separation', ['problem statement', 'experience goal'], ['ai-source-bounded-retrieval-framework'], 'prompt_engineering_for_game_design'],
      ['hallucination risk', ['design document', 'iteration'], ['ai-source-bounded-retrieval-framework'], 'prompt_engineering_for_game_design'],
      ['prompt output artifact', ['design document', 'pitch'], ['ai-source-bounded-retrieval-framework'], 'prompt_engineering_for_game_design'],
      ['provenance trail', ['design document', 'playtest'], ['ai-source-bounded-retrieval-framework'], 'prompt_engineering_for_game_design'],
      ['project overlay fit', ['problem statement', 'experience goal', 'iteration'], ['ai-source-bounded-retrieval-framework'], 'prompt_engineering_for_game_design'],
      ['legal source gate', ['design document', 'responsibility'], ['ai-source-bounded-retrieval-framework'], 'ethics_responsibility'],
      ['confidence calibration', ['playtest', 'feedback', 'iteration'], ['ai-source-bounded-retrieval-framework'], 'prompt_engineering_for_game_design'],
      ['claim traceability', ['design document', 'problem statement'], ['ai-source-bounded-retrieval-framework'], 'prompt_engineering_for_game_design'],
      ['human review', ['iteration', 'responsibility', 'playtest'], ['ai-source-bounded-retrieval-framework'], 'prompt_engineering_for_game_design'],
      ['reusable prompt quality', ['problem statement', 'pitch', 'design document'], ['ai-source-bounded-retrieval-framework'], 'prompt_engineering_for_game_design']
    ]
  }
];

function familyData(family) {
  return familyDefaults[family] || familyDefaults['Project Direction Lenses'];
}

function buildQuestions(title, family, domain) {
  return [
    `What exact artifact, player behavior, or production decision is the ${title} lens examining?`,
    `What player experience is intended, and where is that intention visible rather than assumed?`,
    `Which rule, feedback signal, content beat, UI element, or production constraint most strongly affects ${title}?`,
    `What evidence do we have now, and what evidence is missing before this judgment should influence scope?`,
    `What small experiment, playtest prompt, prototype change, or review task would test the riskiest assumption this week?`
  ];
}

function buildLens(family, item) {
  const [name, concepts, frameworks, domainOverride] = item;
  const defaults = familyData(family);
  const domain = domainOverride || defaults.domain;
  const id = `lens_${slugify(family.replace(/ Lenses$/, ''))}_${slugify(name)}`;
  const relatedConceptCards = uniq((concepts || defaults.concepts).map(concept));
  const relatedFrameworks = uniq((frameworks || defaults.frameworks).map(framework));
  const relatedCards = uniq([...relatedConceptCards, ...relatedFrameworks]);
  const relatedWorks = uniq(workByDomain[domain] || workByDomain[defaults.domain] || []);
  const title = `${name.replace(/\b\w/g, (letter) => letter.toUpperCase())} Lens`;
  const purpose = `Diagnose whether the design artifact has a clear, testable position on ${name} without inventing facts or relying on unsupported source claims.`;
  return {
    lens_id: id,
    title,
    family,
    one_sentence_purpose: purpose,
    domain,
    phase_groups: defaults.phases,
    related_cards: relatedCards,
    related_concept_cards: relatedConceptCards,
    related_frameworks: relatedFrameworks,
    related_works: relatedWorks,
    source_basis: 'unsupported_draft',
    confidence: 'unsupported_draft',
    when_to_use: [
      `Use during ${defaults.phases.join(', ')} when ${name} is likely to affect player experience or production risk.`,
      'Use before accepting a design decision as stable.',
      'Use after a prototype, playtest, design review, or project overlay produces new evidence.'
    ],
    what_it_reveals: [
      `Whether ${name} is defined as an observable design concern.`,
      'Which assumptions are unsupported.',
      'Which next experiment would produce better evidence.'
    ],
    diagnostic_questions: buildQuestions(name, family, domain),
    required_inputs: [
      'A game idea, feature spec, prototype recording, playtest note, system map, UI mockup, narrative outline, or production decision.',
      'The intended player experience or project goal.',
      'Known constraints, risks, and available evidence.'
    ],
    recommended_outputs: [
      defaults.deliverable,
      'strengths',
      'risks',
      'missing evidence',
      'suggested experiments',
      'next design actions'
    ],
    red_flags: [
      'The review depends on assumed player reactions without evidence.',
      'The artifact cannot show where the lens concern appears.',
      'The proposed action changes scope without a testable reason.'
    ],
    common_false_positives: [
      'A polished presentation hides an untested design assumption.',
      'A familiar genre convention is mistaken for proof that the design works.',
      'A single player anecdote is treated as broad validation.'
    ],
    example_usage_template: `Artifact: [paste or link]. Intended experience: [state]. Use the ${title} to identify strengths, risks, missing evidence, suggested experiments, and next design actions.`,
    forum_thread_template: `Thread title: ${title} review for [artifact]. Opening post: What is the intended experience, what evidence exists, which diagnostic question is most uncertain, and what experiment should be run next?`,
    AI_review_prompt: aiPrompt,
    deliverable: defaults.deliverable,
    evidence_gap: 'This is an original diagnostic lens generated from the KB architecture. Attach legal/user evidence or project validation before treating it as verified doctrine.',
    status: 'draft',
    created_at: now,
    updated_at: now
  };
}

const lenses = [];
for (const family of requiredFamilies) {
  for (const item of family.items) lenses.push(buildLens(family.family, item));
}

const schema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: 'bookos.game_design.design_lens.schema.v1',
  title: 'BookOS Game Design DesignLens',
  type: 'object',
  additionalProperties: true,
  required: requiredFields,
  properties: {
    lens_id: { type: 'string', minLength: 1 },
    title: { type: 'string', minLength: 1 },
    one_sentence_purpose: { type: 'string' },
    domain: { type: 'string' },
    phase_groups: { type: 'array', items: { type: 'string' } },
    related_cards: { type: 'array', items: { type: 'string' } },
    related_works: { type: 'array', items: { type: 'string' } },
    source_basis: {
      type: 'string',
      enum: [
        'open_fulltext',
        'official_metadata',
        'user_legal_file',
        'user_manual_note',
        'user_manual_quote',
        'derived_from_user_note',
        'derived_from_public_metadata',
        'metadata_only',
        'unsupported_draft'
      ]
    },
    confidence: {
      type: 'string',
      enum: ['verified', 'strong', 'medium', 'weak', 'unsupported_draft', 'user_interpretation', 'ai_hypothesis']
    },
    when_to_use: { type: 'array', items: { type: 'string' } },
    what_it_reveals: { type: 'array', items: { type: 'string' } },
    diagnostic_questions: { type: 'array', minItems: 1, items: { type: 'string' } },
    required_inputs: { type: 'array', items: { type: 'string' } },
    recommended_outputs: { type: 'array', items: { type: 'string' } },
    red_flags: { type: 'array', items: { type: 'string' } },
    common_false_positives: { type: 'array', items: { type: 'string' } },
    example_usage_template: { type: 'string' },
    forum_thread_template: { type: 'string' },
    AI_review_prompt: { type: 'string' },
    status: { type: 'string', enum: ['draft', 'needs_evidence', 'user_review_needed', 'verified', 'retired'] }
  }
};

write(path.join(lensRoot, 'lens_schema.json'), `${JSON.stringify(schema, null, 2)}\n`);

const templateFields = Object.fromEntries(
  requiredFields.map((field) => {
    if (['phase_groups', 'related_cards', 'related_works', 'when_to_use', 'what_it_reveals', 'diagnostic_questions', 'required_inputs', 'recommended_outputs', 'red_flags', 'common_false_positives'].includes(field)) return [field, []];
    if (field === 'source_basis') return [field, 'unsupported_draft'];
    if (field === 'confidence') return [field, 'unsupported_draft'];
    if (field === 'AI_review_prompt') return [field, aiPrompt];
    if (field === 'status') return [field, 'draft'];
    return [field, ''];
  })
);

write(
  path.join(lensRoot, 'lens_template.md'),
  `# Design Lens Template

${frontmatter({ ...templateFields, created_at: now, updated_at: now })}
## Purpose

State the diagnostic purpose in original wording. Do not copy proprietary lens wording.

## When To Use

${mdList(['Pending.'])}

## What It Reveals

${mdList(['Pending.'])}

## Diagnostic Questions

${mdList(['Pending.'])}

## Required Inputs

${mdList(['Pending.'])}

## Recommended Outputs

${mdList(['Pending.'])}

## Red Flags

${mdList(['Pending.'])}

## Common False Positives

${mdList(['Pending.'])}

## Example Usage Template

Pending.

## Forum Thread Template

Pending.

## AI Review Prompt

${aiPrompt}

## Evidence Gap

Record missing evidence, legal source needs, user note needs, or project validation needs.
`
);

function lensMarkdown(lens) {
  const fm = { ...lens };
  delete fm.related_concept_cards;
  delete fm.related_frameworks;
  delete fm.deliverable;
  delete fm.evidence_gap;
  return `${frontmatter(fm)}# ${lens.title}

## Purpose

${lens.one_sentence_purpose}

## When To Use

${mdList(lens.when_to_use)}

## What It Reveals

${mdList(lens.what_it_reveals)}

## Diagnostic Questions

${mdList(lens.diagnostic_questions)}

## Required Inputs

${mdList(lens.required_inputs)}

## Recommended Outputs

${mdList(lens.recommended_outputs)}

## Red Flags

${mdList(lens.red_flags)}

## Common False Positives

${mdList(lens.common_false_positives)}

## Related Cards

${mdList(lens.related_cards)}

## Related Works

${mdList(lens.related_works)}

## Source Basis And Confidence

- source_basis: ${lens.source_basis}
- confidence: ${lens.confidence}
- evidence_gap: ${lens.evidence_gap}

## Example Usage Template

${lens.example_usage_template}

## Forum Thread Template

${lens.forum_thread_template}

## AI Review Prompt

${lens.AI_review_prompt}
`;
}

for (const lens of lenses) {
  write(path.join(lensRoot, 'cards', `${lens.lens_id}.md`), lensMarkdown(lens));
}

const byFamily = new Map();
const byPhase = new Map();
const byDomain = new Map();
for (const lens of lenses) {
  if (!byFamily.has(lens.family)) byFamily.set(lens.family, []);
  byFamily.get(lens.family).push(lens);
  for (const p of lens.phase_groups) {
    if (!byPhase.has(p)) byPhase.set(p, []);
    byPhase.get(p).push(lens);
  }
  if (!byDomain.has(lens.domain)) byDomain.set(lens.domain, []);
  byDomain.get(lens.domain).push(lens);
}

let bank = '# Design Lens Bank\n\n';
bank += 'Prompt 6 creates an original diagnostic question bank. These lenses are practice tools, not copied book lens text and not verified source doctrine. Every generated lens starts as `source_basis: unsupported_draft`, `confidence: unsupported_draft`, and `status: draft`.\n\n';
bank += `## Counts\n\n- total lenses: ${lenses.length}\n- families: ${byFamily.size}\n- domains: ${byDomain.size}\n- phase groups: ${byPhase.size}\n\n`;
bank += '## Legal And Originality Note\n\nNo existing proprietary lens wording was copied. Related works are routing metadata only. A lens can be promoted only after user notes, legal source evidence, official metadata, open fulltext, project overlays, or playtest logs support it.\n\n';
bank += '## Lens-To-Card Mapping\n\n';
bank += '| Lens | Related Concept Cards | Related Frameworks | Related Work | Phase Group | Deliverable |\n';
bank += '|---|---|---|---|---|---|\n';
for (const lens of lenses) {
  bank += `| [${lens.title}](cards/${lens.lens_id}.md) | ${lens.related_concept_cards.join('; ') || 'Evidence gap'} | ${lens.related_frameworks.join('; ') || 'Evidence gap'} | ${lens.related_works.join('; ') || 'Evidence gap'} | ${lens.phase_groups.join('; ')} | ${lens.deliverable} |\n`;
}
bank += '\n## Families\n\n';
for (const [family, familyLenses] of byFamily.entries()) {
  bank += `### ${family}\n\n`;
  for (const lens of familyLenses) bank += `- [${lens.title}](cards/${lens.lens_id}.md) - ${lens.one_sentence_purpose}\n`;
  bank += '\n';
}
write(path.join(lensRoot, 'DESIGN_LENS_BANK.md'), bank);

for (const [phaseName, phaseLenses] of byPhase.entries()) {
  const file = path.join(lensRoot, 'by_phase', `${phaseSlug(phaseName)}.md`);
  let md = `# ${phaseName}\n\n| Lens | Domain | Deliverable | Status |\n|---|---|---|---|\n`;
  for (const lens of phaseLenses) md += `| [${lens.title}](../cards/${lens.lens_id}.md) | ${lens.domain} | ${lens.deliverable} | ${lens.status} |\n`;
  write(file, md);
}

for (const [domain, domainLenses] of byDomain.entries()) {
  const file = path.join(lensRoot, 'by_domain', `${slugify(domain)}.md`);
  let md = `# ${domain}\n\n| Lens | Phase Groups | Related Cards | Status |\n|---|---|---|---|\n`;
  for (const lens of domainLenses) md += `| [${lens.title}](../cards/${lens.lens_id}.md) | ${lens.phase_groups.join('; ')} | ${lens.related_cards.join('; ') || 'Evidence gap'} | ${lens.status} |\n`;
  write(file, md);
}

write(
  path.join(lensRoot, 'lens_index.json'),
  `${JSON.stringify(
    {
      schema_version: 'bookos.design_lens_bank.v1',
      updated_date: now,
      total_lenses: lenses.length,
      legal_note: 'Original diagnostic lenses generated from KB architecture. No high-risk source body text or proprietary lens wording used.',
      lenses
    },
    null,
    2
  )}\n`
);

write(
  path.join(lensRoot, 'PROMPT_6_GENERATION_SUMMARY.json'),
  `${JSON.stringify(
    {
      total_lenses: lenses.length,
      families: Object.fromEntries([...byFamily.entries()].map(([key, value]) => [key, value.length])),
      domains: Object.fromEntries([...byDomain.entries()].map(([key, value]) => [key, value.length])),
      phase_groups: Object.fromEntries([...byPhase.entries()].map(([key, value]) => [key, value.length]))
    },
    null,
    2
  )}\n`
);

console.log(JSON.stringify({ total_lenses: lenses.length, families: byFamily.size, domains: byDomain.size, phase_groups: byPhase.size }, null, 2));
