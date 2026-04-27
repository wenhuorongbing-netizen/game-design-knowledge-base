const fs = require('fs');
const path = require('path');

const root = process.cwd();
const kb = path.join(root, 'kb');
const lessonRoot = path.join(kb, '07_lessons');
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

const dirs = [lessonRoot, path.join(lessonRoot, 'lesson_cards')];
for (const dir of dirs) fs.mkdirSync(dir, { recursive: true });
for (const file of fs.readdirSync(path.join(lessonRoot, 'lesson_cards')).filter((name) => name.endsWith('.md'))) {
  fs.unlinkSync(path.join(lessonRoot, 'lesson_cards', file));
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\+/g, ' plus ')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function titleCase(value) {
  return value.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
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
  return items && items.length ? items.map((item) => `- ${item}`).join('\n') : '- Pending.';
}

function write(file, text) {
  fs.writeFileSync(file, text.replace(/\r\n/g, '\n'), 'utf8');
}

function parseFrontmatter(file) {
  const text = fs.readFileSync(file, 'utf8');
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const out = {};
  for (const line of match[1].split(/\n/)) {
    const index = line.indexOf(':');
    if (index < 0) continue;
    const key = line.slice(0, index);
    const raw = line.slice(index + 1).trim();
    try {
      out[key] = JSON.parse(raw);
    } catch {
      out[key] = raw;
    }
  }
  return out;
}

const conceptDir = path.join(kb, '05_cards', 'concept_cards');
const concepts = fs
  .readdirSync(conceptDir)
  .filter((file) => file.endsWith('.md'))
  .map((file) => parseFrontmatter(path.join(conceptDir, file)));
const conceptByTitle = new Map(concepts.map((concept) => [slugify(concept.title), concept.card_id]));
const allConceptIds = new Set(concepts.map((concept) => concept.card_id));

const lensIndex = JSON.parse(fs.readFileSync(path.join(kb, '06_lenses', 'lens_index.json'), 'utf8'));
const lenses = lensIndex.lenses || [];
const allLensIds = new Set(lenses.map((lens) => lens.lens_id));

const claimGraph = JSON.parse(fs.readFileSync(path.join(kb, '05_cards', 'claim_graph.json'), 'utf8'));
const claimIdsByCard = new Map();
for (const claim of claimGraph.claims || []) {
  for (const cardId of claim.related_cards || []) {
    if (!claimIdsByCard.has(cardId)) claimIdsByCard.set(cardId, []);
    claimIdsByCard.get(cardId).push(claim.claim_id);
  }
}

const works = JSON.parse(fs.readFileSync(path.join(kb, '03_works', 'works.json'), 'utf8')).works || [];
const worksByDomain = new Map();
for (const work of works) {
  for (const domain of uniq([work.main_domain, ...(work.secondary_domains || [])])) {
    if (!worksByDomain.has(domain)) worksByDomain.set(domain, []);
    worksByDomain.get(domain).push(work.work_id);
  }
}

const schemaFields = [
  'lesson_id',
  'title',
  'level',
  'estimated_time',
  'prerequisite_lessons',
  'phase_groups',
  'domains',
  'learning_objectives',
  'key_concepts',
  'related_cards',
  'related_lenses',
  'related_work_dossiers',
  'source_basis',
  'confidence',
  'opening_question',
  'teaching_notes',
  'practical_exercise',
  'design_deliverable',
  'reflection_prompt',
  'forum_discussion_prompt',
  'project_application',
  'assessment_rubric',
  'AI_tutor_prompt',
  'next_lessons',
  'status'
];

const extraFields = [
  'related_claims',
  'exercise_ids',
  'forum_thread_placeholders',
  'project_application_ids',
  'project_overlay_placeholders',
  'future_workflow_packs',
  'reading_targets',
  'created_at',
  'updated_at'
];

const tracks = [
  {
    id: 'track_01_foundations',
    title: 'Track 1 - Foundations of Game Design',
    level: 'beginner',
    domains: ['player_experience', 'rules_and_mechanics', 'formal_game_design'],
    phases: [phase.direction, phase.core, phase.test],
    defaultConcepts: ['game', 'player experience', 'rules', 'mechanics', 'problem statement'],
    lessons: [
      'What a Game Designer Actually Decides',
      'Player-Centric Design',
      'Games as Experiences',
      'Games as Systems of Rules',
      'Meaningful Decisions',
      'Challenge, Skill, Chance, and Uncertainty',
      'Play as Context and Constraint',
      'The Difference Between Ideas and Designs'
    ]
  },
  {
    id: 'track_02_play_player_experience',
    title: 'Track 2 - Play and Player Experience',
    level: 'beginner',
    domains: ['play_theory', 'player_experience', 'player_psychology'],
    phases: [phase.direction, phase.core, phase.test],
    defaultConcepts: ['play', 'player experience', 'pleasure', 'learning', 'agency'],
    lessons: [
      'Play, Playfulness, and Context',
      'Pleasure, Fun, Learning, and Mastery',
      'Motivation and Player Desire',
      'Flow and Challenge Curves',
      'Player Types and Play Styles',
      'Player Agency and Identity',
      'Safety, Disruption, Dark Play, and Ethics'
    ]
  },
  {
    id: 'track_03_mechanics_rules_formal_systems',
    title: 'Track 3 - Mechanics, Rules, and Formal Systems',
    level: 'intermediate',
    domains: ['formal_game_design', 'rules_and_mechanics', 'player_experience'],
    phases: [phase.core, phase.dev, phase.test],
    defaultConcepts: ['formal elements', 'rules', 'mechanics', 'objectives', 'procedures'],
    lessons: [
      'Formal Elements',
      'Objectives and Procedures',
      'Resources, Conflict, Boundaries, and Outcomes',
      'Mechanics, Dynamics, and Experience',
      'Tradeoffs and Dilemmas',
      'Strategic Skill',
      'Twitch Skill',
      'Chance and Probability',
      'Balance Fundamentals'
    ]
  },
  {
    id: 'track_04_systems_economy',
    title: 'Track 4 - Systems and Economy',
    level: 'intermediate',
    domains: ['systems_design', 'economy_and_balance', 'rules_and_mechanics'],
    phases: [phase.core, phase.economy, phase.test],
    defaultConcepts: ['system', 'loop', 'economy', 'balance', 'feedback loop'],
    lessons: [
      'Games as Systems',
      'Parts, Loops, and Wholes',
      'Game+Player System',
      'Feedback Loops',
      'Progression and Power Curves',
      'Economy Sources and Sinks',
      'Transitive and Intransitive Balance',
      'Emergence and Systemic Risk',
      'System Documentation'
    ]
  },
  {
    id: 'track_05_game_feel_interaction',
    title: 'Track 5 - Game Feel and Interaction',
    level: 'intermediate',
    domains: ['game_feel', 'interactivity', 'ui_ux_feedback'],
    phases: [phase.core, phase.art, phase.dev, phase.test],
    defaultConcepts: ['game feel', 'real-time control', 'feedback', 'responsiveness', 'interface'],
    lessons: [
      'What Game Feel Is',
      'Real-Time Control',
      'Simulated Space',
      'Polish and Perceptual Conviction',
      'Input Metrics',
      'Response Metrics',
      'Context Metrics',
      'Polish Metrics',
      'Tuning Tightness, Floatiness, and Responsiveness',
      'Game Feel Prototype Lab'
    ]
  },
  {
    id: 'track_06_ui_ux_feedback',
    title: 'Track 6 - UI / UX / Feedback',
    level: 'intermediate',
    domains: ['ui_ux_feedback', 'player_experience', 'game_feel'],
    phases: [phase.art, phase.dev, phase.test],
    defaultConcepts: ['interface', 'feedback', 'mental model', 'learning', 'player rights'],
    lessons: [
      'Interface as Player Contact',
      'Information Priority',
      'Input Mapping',
      'Feedback Timing',
      'Affordance and Readability',
      'Modes and Errors',
      'Accessibility',
      'UI Playtest Methods'
    ]
  },
  {
    id: 'track_07_narrative_world_character',
    title: 'Track 7 - Narrative, World, and Character',
    level: 'intermediate',
    domains: ['narrative_design', 'worldbuilding', 'character_design'],
    phases: [phase.direction, phase.narrative, phase.art, phase.test],
    defaultConcepts: ['story', 'premise', 'worldbuilding', 'character function', 'player identity'],
    lessons: [
      'Story Versus Game Structure',
      'Premise and Dramatic Arc',
      'Narrative Agency',
      'Environmental Storytelling',
      'Worldbuilding',
      'Avatar and Player Identity',
      'Character Function',
      'Emergent Narrative'
    ]
  },
  {
    id: 'track_08_prototyping_playtesting_iteration',
    title: 'Track 8 - Prototyping, Playtesting, and Iteration',
    level: 'professional',
    domains: ['prototyping', 'playtesting', 'production_process'],
    phases: [phase.direction, phase.core, phase.dev, phase.test],
    defaultConcepts: ['prototype', 'playtest', 'iteration', 'experience goal', 'problem statement'],
    lessons: [
      'Experience Goals',
      'Prototype Questions',
      'Paper Prototypes',
      'Digital Prototypes',
      'Kinesthetic Prototypes',
      'Playtest Planning',
      'Observation and Interview',
      'Interpreting Feedback',
      'Iteration Decisions'
    ]
  },
  {
    id: 'track_09_production_team_community_release',
    title: 'Track 9 - Production, Team, Community, and Release',
    level: 'professional',
    domains: ['production_process', 'multiplayer_community', 'business_pitch_release'],
    phases: [phase.direction, phase.dev, phase.test, phase.ops],
    defaultConcepts: ['design document', 'production phase', 'community', 'pitch', 'release readiness'],
    lessons: [
      'Design Documentation',
      'Team Communication',
      'Pitching a Game',
      'Scope and Feasibility',
      'Community Design',
      'Griefing and Moderation',
      'Business Model Awareness',
      'Release Readiness'
    ]
  },
  {
    id: 'track_10_advanced_design_studio',
    title: 'Track 10 - Advanced Design Studio',
    level: 'advanced',
    domains: ['design_lenses', 'systems_design', 'game_feel', 'economy_and_balance', 'ethics_responsibility'],
    phases: [phase.direction, phase.core, phase.economy, phase.art, phase.dev, phase.test, phase.ops],
    defaultConcepts: ['design document', 'system', 'game feel', 'economy', 'responsibility'],
    lessons: [
      'Design Lens Reviews',
      'Systemic Design Audit',
      'Game Feel Audit',
      'Economy Balance Audit',
      'Narrative-Mechanic Integration',
      'Ethical Design Review',
      'Project Overlay Workshop',
      'Capstone Design Review'
    ]
  }
];

const keywordConcepts = [
  [/designer|decides/i, ['problem statement', 'experience goal', 'design document']],
  [/player-centric|player/i, ['player experience', 'audience', 'agency']],
  [/experience/i, ['player experience', 'experience goal', 'pleasure']],
  [/systems? of rules|rules/i, ['game', 'system', 'rules']],
  [/meaningful/i, ['meaningful decisions', 'tradeoffs', 'agency']],
  [/challenge/i, ['challenge', 'skill', 'chance', 'uncertainty']],
  [/context|constraint/i, ['play as context', 'rules', 'boundaries']],
  [/ideas|designs/i, ['ideation', 'problem statement', 'prototype']],
  [/playfulness/i, ['play', 'playfulness', 'play as context']],
  [/pleasure|fun|mastery/i, ['pleasure', 'fun', 'learning', 'mastery']],
  [/motivation|desire/i, ['mastery', 'curiosity', 'audience']],
  [/flow/i, ['flow', 'challenge', 'progression curve']],
  [/types|styles/i, ['audience', 'player identity', 'multiplayer pattern']],
  [/identity/i, ['player identity', 'avatar', 'agency']],
  [/safety|ethics|dark/i, ['ethics', 'responsibility', 'player rights']],
  [/formal/i, ['formal elements', 'objectives', 'procedures']],
  [/objectives|procedures/i, ['objectives', 'procedures', 'outcome']],
  [/resources|conflict|boundaries|outcomes/i, ['resources', 'conflict', 'boundaries', 'outcome']],
  [/mechanics|dynamics/i, ['mechanics', 'dynamics', 'player experience']],
  [/tradeoffs|dilemmas/i, ['tradeoffs', 'dilemmas', 'risk versus reward']],
  [/strategic/i, ['strategic skill', 'meaningful decisions', 'mental model']],
  [/twitch/i, ['twitch skill', 'real-time control', 'responsiveness']],
  [/chance|probability/i, ['chance', 'uncertainty', 'risk versus reward']],
  [/balance/i, ['balance', 'transitive balance', 'intransitive balance']],
  [/parts|loops|wholes/i, ['part', 'loop', 'whole']],
  [/game\+player/i, ['game+player system', 'mental model', 'feedback loop']],
  [/feedback loops/i, ['feedback loop', 'system', 'emergence']],
  [/progression|power/i, ['progression curve', 'power curve', 'mastery']],
  [/sources|sinks/i, ['source', 'sink', 'economy']],
  [/emergence|systemic/i, ['emergence', 'system', 'feedback loop']],
  [/documentation/i, ['design document', 'system', 'production phase']],
  [/game feel/i, ['game feel', 'real-time control', 'feedback']],
  [/real-time/i, ['real-time control', 'responsiveness', 'tightness']],
  [/simulated/i, ['simulated space', 'camera feel', 'avatar feel']],
  [/polish/i, ['polish', 'polish metric', 'juiciness']],
  [/input/i, ['input metric', 'interface', 'real-time control']],
  [/response/i, ['response metric', 'feedback', 'responsiveness']],
  [/context metrics/i, ['context metric', 'interface', 'feedback']],
  [/tightness|floatiness|responsiveness/i, ['tightness', 'floatiness', 'responsiveness']],
  [/interface/i, ['interface', 'feedback', 'player experience']],
  [/information/i, ['interface', 'feedback', 'mental model']],
  [/mapping/i, ['input metric', 'interface', 'real-time control']],
  [/timing/i, ['feedback', 'response metric', 'game feel']],
  [/affordance|readability/i, ['interface', 'mental model', 'feedback']],
  [/modes|errors/i, ['interface', 'feedback', 'learning']],
  [/accessibility/i, ['player rights', 'interface', 'feedback']],
  [/ui playtest/i, ['playtest', 'interface', 'feedback']],
  [/story/i, ['story', 'premise', 'dramatic arc']],
  [/premise|dramatic/i, ['premise', 'dramatic arc', 'tension']],
  [/narrative agency/i, ['agency', 'story', 'emergent story']],
  [/environmental/i, ['worldbuilding', 'emergent story', 'simulated space']],
  [/worldbuilding/i, ['worldbuilding', 'premise', 'narrative architecture']],
  [/avatar/i, ['avatar', 'player identity', 'avatar feel']],
  [/character/i, ['character function', 'status', 'transformation']],
  [/emergent narrative/i, ['emergent story', 'system', 'player identity']],
  [/prototype questions/i, ['prototype', 'problem statement', 'experience goal']],
  [/paper/i, ['paper prototype', 'prototype', 'playtest']],
  [/digital/i, ['digital prototype', 'prototype', 'iteration']],
  [/kinesthetic/i, ['kinesthetic prototype', 'game feel', 'prototype']],
  [/playtest planning/i, ['playtest', 'problem statement', 'prototype']],
  [/observation|interview/i, ['playtest', 'mental model', 'feedback']],
  [/interpreting/i, ['playtest', 'feedback', 'iteration']],
  [/iteration/i, ['iteration', 'playtest', 'design document']],
  [/team/i, ['design document', 'problem statement', 'production phase']],
  [/pitch/i, ['pitch', 'audience', 'business model']],
  [/scope|feasibility/i, ['prototype', 'production phase', 'problem statement']],
  [/community/i, ['community', 'audience', 'responsibility']],
  [/griefing|moderation/i, ['griefing', 'community', 'ethics']],
  [/business/i, ['business model', 'audience', 'pitch']],
  [/release/i, ['release readiness', 'pitch', 'business model']],
  [/lens reviews/i, ['design document', 'player experience', 'iteration']],
  [/audit/i, ['design document', 'playtest', 'iteration']],
  [/economy/i, ['economy', 'source', 'sink', 'balance']],
  [/narrative-mechanic/i, ['story', 'mechanics', 'player experience']],
  [/project overlay|capstone/i, ['problem statement', 'design document', 'iteration']]
];

function conceptIdsFor(lessonTitle, track) {
  const names = [];
  for (const [pattern, items] of keywordConcepts) {
    if (pattern.test(lessonTitle)) names.push(...items);
  }
  names.push(...track.defaultConcepts);
  const ids = uniq(names.map((name) => conceptByTitle.get(slugify(name))).filter(Boolean));
  for (const fallback of ['player experience', 'problem statement', 'prototype', 'playtest', 'iteration', 'design document']) {
    if (ids.length >= 3) break;
    const id = conceptByTitle.get(slugify(fallback));
    if (id && !ids.includes(id)) ids.push(id);
  }
  return ids.slice(0, Math.max(3, Math.min(ids.length, 5)));
}

function selectLenses(lessonTitle, domains, conceptIds) {
  const terms = slugify(lessonTitle).split('-').filter((term) => term.length > 2);
  const scored = lenses.map((lens) => {
    let score = 0;
    const lensText = `${slugify(lens.title)} ${slugify(lens.family || '')}`;
    for (const term of terms) if (lensText.includes(term)) score += 5;
    if (domains.includes(lens.domain)) score += 4;
    if ((lens.related_cards || []).some((card) => conceptIds.includes(card))) score += 3;
    return { lens, score };
  });
  const selected = scored
    .sort((a, b) => b.score - a.score || a.lens.lens_id.localeCompare(b.lens.lens_id))
    .map((item) => item.lens.lens_id)
    .filter((id, index, arr) => arr.indexOf(id) === index)
    .slice(0, 2);
  if (selected.length >= 2) return selected;
  for (const lens of lenses) {
    if (selected.length >= 2) break;
    if (!selected.includes(lens.lens_id)) selected.push(lens.lens_id);
  }
  return selected;
}

function dossierIdsFor(domains) {
  const workIds = [];
  for (const domain of domains) workIds.push(...(worksByDomain.get(domain) || []));
  if (!workIds.length) workIds.push('the-art-of-game-design-a-book-of-lenses', 'game-design-workshop-a-playcentric-approach');
  return uniq(workIds).slice(0, 3).map((workId) => `dossier_${workId}`);
}

function levelFor(track, lessonIndex) {
  if (track.id === 'track_10_advanced_design_studio') return lessonIndex < 2 ? 'advanced' : 'professional';
  if (track.id === 'track_09_production_team_community_release' || track.id === 'track_08_prototyping_playtesting_iteration') return 'professional';
  if (track.id === 'track_03_mechanics_rules_formal_systems' || track.id === 'track_04_systems_economy') return lessonIndex < 3 ? 'intermediate' : 'advanced';
  return track.level;
}

function estimatedTime(level) {
  return {
    beginner: '45 minutes',
    intermediate: '60 minutes',
    advanced: '75 minutes',
    professional: '90 minutes'
  }[level];
}

const lessons = [];
for (const track of tracks) {
  track.lessons.forEach((title, lessonIndex) => {
    const lessonNumber = lessonIndex + 1;
    const id = `lesson_${track.id.replace(/^track_/, '')}_${String(lessonNumber).padStart(2, '0')}_${slugify(title)}`;
    const level = levelFor(track, lessonIndex);
    const keyConcepts = conceptIdsFor(title, track);
    const relatedLenses = selectLenses(title, track.domains, keyConcepts);
    const exerciseId = `exercise_${slugify(title)}`;
    const projectApplicationId = `project_application_${slugify(title)}`;
    const projectOverlayId = `project_overlay_${slugify(title)}`;
    const workflowPackId = `workflow_pack_${slugify(title)}`;
    const relatedClaims = uniq(keyConcepts.flatMap((cardId) => claimIdsByCard.get(cardId) || [])).slice(0, 5);
    const prereq = lessonIndex === 0 ? [] : [`lesson_${track.id.replace(/^track_/, '')}_${String(lessonIndex).padStart(2, '0')}_${slugify(track.lessons[lessonIndex - 1])}`];
    const next = lessonIndex + 1 >= track.lessons.length ? [] : [`lesson_${track.id.replace(/^track_/, '')}_${String(lessonIndex + 2).padStart(2, '0')}_${slugify(track.lessons[lessonIndex + 1])}`];
    const lesson = {
      lesson_id: id,
      track_id: track.id,
      track_title: track.title,
      lesson_number: lessonNumber,
      title,
      level,
      estimated_time: estimatedTime(level),
      prerequisite_lessons: prereq,
      phase_groups: track.phases,
      domains: track.domains,
      learning_objectives: [
        `Explain why ${title} matters as a design decision rather than a vague preference.`,
        `Use related concept cards and lenses to inspect a concrete game artifact.`,
        `Produce a small design deliverable that can be reviewed, tested, or revised.`
      ],
      key_concepts: keyConcepts,
      related_cards: keyConcepts,
      related_claims: relatedClaims,
      related_lenses: relatedLenses,
      related_work_dossiers: dossierIdsFor(track.domains),
      source_basis: 'unsupported_draft',
      confidence: 'unsupported_draft',
      opening_question: `What would change in a real project if the team misunderstood ${title}?`,
      teaching_notes: [
        `This lesson is an original teaching scaffold for ${title}.`,
        'It uses cards, lenses, and dossier shells as navigation anchors, not as verified source claims.',
        'Promote this lesson only after user notes, legal sources, project overlays, or playtest logs support its claims.'
      ],
      practical_exercise: `Create ${exerciseId}: choose one existing or imagined game artifact, inspect it with the linked lenses, and write three revision hypotheses.`,
      exercise_ids: [exerciseId],
      design_deliverable: `${title} design note: one page containing intent, artifact, evidence, risks, and next test.`,
      reflection_prompt: `Which part of your answer to ${title} is evidence-backed, and which part is still an assumption?`,
      forum_discussion_prompt: `Post a ${title} review: share the artifact, intended player experience, strongest lens finding, missing evidence, and one experiment.`,
      forum_thread_placeholders: [`forum_thread_${slugify(title)}`],
      project_application: `Apply ${title} to your current project by writing one design decision and one playtest question it changes.`,
      project_application_ids: [projectApplicationId],
      project_overlay_placeholders: [projectOverlayId],
      assessment_rubric: 'Use the Prompt 7 rubric: clarity, evidence discipline, design usefulness, testability, and reflection quality.',
      AI_tutor_prompt: `Tutor me through ${title}. Use only attached lesson fields, linked cards, linked lenses, and my notes. Do not invent source claims. Separate assumptions from evidence and end with a practical exercise.`,
      next_lessons: next,
      future_workflow_packs: [workflowPackId],
      reading_targets: [
        'Review related dossier metadata only.',
        'Add user notes or legal sidecars before treating any source as content evidence.',
        'Review linked concept cards and lenses as draft scaffolds.'
      ],
      status: 'draft',
      created_at: now,
      updated_at: now
    };
    lessons.push(lesson);
  });
}

const schema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: 'gdkb.game_design.lesson.schema.v1',
  title: 'GDKB Game Design Masterclass Lesson',
  type: 'object',
  additionalProperties: true,
  required: schemaFields,
  properties: {
    lesson_id: { type: 'string', minLength: 1 },
    title: { type: 'string', minLength: 1 },
    level: { type: 'string', enum: ['beginner', 'intermediate', 'advanced', 'professional'] },
    estimated_time: { type: 'string' },
    prerequisite_lessons: { type: 'array', items: { type: 'string' } },
    phase_groups: { type: 'array', items: { type: 'string' } },
    domains: { type: 'array', items: { type: 'string' } },
    learning_objectives: { type: 'array', minItems: 1, items: { type: 'string' } },
    key_concepts: { type: 'array', minItems: 3, items: { type: 'string' } },
    related_cards: { type: 'array', minItems: 3, items: { type: 'string' } },
    related_lenses: { type: 'array', minItems: 2, items: { type: 'string' } },
    related_work_dossiers: { type: 'array', items: { type: 'string' } },
    source_basis: { type: 'string' },
    confidence: { type: 'string' },
    opening_question: { type: 'string' },
    teaching_notes: { type: 'array', items: { type: 'string' } },
    practical_exercise: { type: 'string' },
    design_deliverable: { type: 'string' },
    reflection_prompt: { type: 'string' },
    forum_discussion_prompt: { type: 'string' },
    project_application: { type: 'string' },
    assessment_rubric: { type: 'string' },
    AI_tutor_prompt: { type: 'string' },
    next_lessons: { type: 'array', items: { type: 'string' } },
    status: { type: 'string', enum: ['draft', 'needs_evidence', 'user_review_needed', 'verified', 'retired'] }
  }
};

write(path.join(lessonRoot, 'lesson_schema.json'), `${JSON.stringify(schema, null, 2)}\n`);

const templateFields = Object.fromEntries([...schemaFields, ...extraFields].map((field) => {
  if (['prerequisite_lessons', 'phase_groups', 'domains', 'learning_objectives', 'key_concepts', 'related_cards', 'related_claims', 'related_lenses', 'related_work_dossiers', 'teaching_notes', 'next_lessons', 'exercise_ids', 'forum_thread_placeholders', 'project_application_ids', 'project_overlay_placeholders', 'future_workflow_packs', 'reading_targets'].includes(field)) return [field, []];
  if (field === 'level') return [field, 'beginner'];
  if (field === 'source_basis') return [field, 'unsupported_draft'];
  if (field === 'confidence') return [field, 'unsupported_draft'];
  if (field === 'status') return [field, 'draft'];
  if (field === 'created_at' || field === 'updated_at') return [field, now];
  return [field, ''];
}));

write(
  path.join(lessonRoot, 'lesson_template.md'),
  `# Lesson Template

${frontmatter(templateFields)}
## Opening Question

Pending.

## Learning Objectives

${mdList(['Pending.'])}

## Teaching Notes

State whether this is original teaching, user-note-derived, project-tested, or source-backed. Do not create book-derived claims without allowed evidence.

## Related Knowledge

- Concept cards: []
- Claims: []
- Design lenses: []
- Dossiers: []

## Practical Exercise

Pending.

## Design Deliverable

Pending.

## Reflection Prompt

Pending.

## Forum Discussion Prompt

Pending.

## Project Application

Pending.

## Assessment Rubric

Pending.

## AI Tutor Prompt

Use only the lesson fields, linked cards, linked lenses, and user notes. Do not invent source claims.
`
);

function lessonMarkdown(lesson) {
  const fm = { ...lesson };
  return `${frontmatter(fm)}# ${lesson.title}

## Opening Question

${lesson.opening_question}

## Learning Objectives

${mdList(lesson.learning_objectives)}

## Teaching Notes

${mdList(lesson.teaching_notes)}

## Related Concept Cards

${mdList(lesson.related_cards)}

## Related Claims

${mdList(lesson.related_claims)}

## Related Design Lenses

${mdList(lesson.related_lenses)}

## Related Work Dossiers

${mdList(lesson.related_work_dossiers)}

## Reading Targets

${mdList(lesson.reading_targets)}

## Practical Exercise

${lesson.practical_exercise}

## Design Deliverable

${lesson.design_deliverable}

## Reflection Prompt

${lesson.reflection_prompt}

## Forum Discussion Prompt

${lesson.forum_discussion_prompt}

## Project Application

${lesson.project_application}

## Future Workflow Pack

${mdList(lesson.future_workflow_packs)}

## Assessment Rubric

${lesson.assessment_rubric}

## AI Tutor Prompt

${lesson.AI_tutor_prompt}

## Source Governance

- source_basis: ${lesson.source_basis}
- confidence: ${lesson.confidence}
- status: ${lesson.status}
- This lesson is not a book summary and contains no high-risk source body text.
`;
}

for (const lesson of lessons) {
  write(path.join(lessonRoot, 'lesson_cards', `${lesson.lesson_id}.md`), lessonMarkdown(lesson));
}

let curriculum = '# Masterclass Curriculum\n\n';
curriculum += 'Prompt 7 turns the KB into a structured learning system. Lessons are original teaching scaffolds and production practice units, not book summaries. All generated lessons start as `source_basis: unsupported_draft`, `confidence: unsupported_draft`, and `status: draft`.\n\n';
curriculum += '## Governance Rule\n\nNo copyrighted source body text was used. Related dossiers are reading targets and metadata anchors only. Any lesson can be promoted only after user notes, legal source evidence, project overlays, or playtest logs support it.\n\n';
curriculum += `## Counts\n\n- tracks: ${tracks.length}\n- lessons: ${lessons.length}\n- levels: beginner, intermediate, advanced, professional\n\n`;
curriculum += '## Learning Paths\n\n';
curriculum += '- Beginner path: Track 1, Track 2, selected Track 3 basics.\n';
curriculum += '- Intermediate path: Track 3, Track 4, Track 5, Track 6, Track 7.\n';
curriculum += '- Advanced path: Track 4 advanced lessons, Track 7 integration, Track 10 audits.\n';
curriculum += '- Project-team path: Track 8, Track 9, Track 10, with weekly project overlays and playtest logs.\n\n';
curriculum += '## Track Overview\n\n';
for (const track of tracks) {
  const trackLessons = lessons.filter((lesson) => lesson.track_id === track.id);
  curriculum += `### ${track.title}\n\n`;
  curriculum += `Level: ${track.level}\n\n`;
  curriculum += '| # | Lesson | Level | Key Deliverable |\n|---:|---|---|---|\n';
  for (const lesson of trackLessons) {
    curriculum += `| ${lesson.lesson_number} | [${lesson.title}](lesson_cards/${lesson.lesson_id}.md) | ${lesson.level} | ${lesson.design_deliverable} |\n`;
  }
  curriculum += '\n';
}
write(path.join(lessonRoot, 'MASTERCLASS_CURRICULUM.md'), curriculum);

let trackIndex = '# Track Index\n\n';
trackIndex += '| Track | Lessons | Level Range | Domains | Phase Groups |\n|---|---:|---|---|---|\n';
for (const track of tracks) {
  const trackLessons = lessons.filter((lesson) => lesson.track_id === track.id);
  const levels = uniq(trackLessons.map((lesson) => lesson.level)).join('; ');
  trackIndex += `| ${track.title} | ${trackLessons.length} | ${levels} | ${track.domains.join('; ')} | ${track.phases.join('; ')} |\n`;
}
trackIndex += '\n## Lesson Index\n\n| Track | # | Lesson | Concepts | Lenses | Exercise | Future Workflow Pack |\n|---|---:|---|---|---|---|---|\n';
for (const lesson of lessons) {
  trackIndex += `| ${lesson.track_title} | ${lesson.lesson_number} | [${lesson.title}](lesson_cards/${lesson.lesson_id}.md) | ${lesson.key_concepts.join('; ')} | ${lesson.related_lenses.join('; ')} | ${lesson.exercise_ids[0]} | ${lesson.future_workflow_packs[0]} |\n`;
}
write(path.join(lessonRoot, 'TRACK_INDEX.md'), trackIndex);

let rubrics = '# Assessment Rubrics\n\n';
rubrics += 'Use these rubrics for every lesson until project-specific rubrics are created.\n\n';
rubrics += '| Criterion | Beginner | Intermediate | Advanced / Professional |\n|---|---|---|---|\n';
rubrics += '| Clarity | States the design artifact and intent. | Separates artifact, player experience, and design decision. | Shows consequences, tradeoffs, and alternatives. |\n';
rubrics += '| Evidence discipline | Labels assumptions. | Links claims to cards, lenses, notes, or playtest evidence. | Refuses unsupported source claims and identifies missing evidence. |\n';
rubrics += '| Design usefulness | Produces a concrete note. | Produces a usable spec, test, or revision plan. | Produces a decision-ready artifact for a team. |\n';
rubrics += '| Testability | Suggests a simple test. | Defines success/failure signals. | Defines experiment design, risks, and next iteration. |\n';
rubrics += '| Reflection quality | Names what is uncertain. | Explains why it is uncertain. | Converts uncertainty into backlog, playtest, or research action. |\n\n';
rubrics += '## Promotion Rubric\n\n';
rubrics += '- A lesson remains `unsupported_draft` until it is backed by allowed evidence.\n';
rubrics += '- A lesson can become `user_interpretation` after user notes are attached and reviewed.\n';
rubrics += '- A lesson can become `project_applied` after a project overlay records use.\n';
rubrics += '- A lesson can become `playtest_tested` after a playtest log validates or challenges it.\n';
rubrics += '- A lesson can become `verified` only when source basis and confidence rules permit it.\n';
write(path.join(lessonRoot, 'assessment_rubrics.md'), rubrics);

const weeks = [
  ['Days 1-7', 'Foundations of design decisions and player-centric thinking', ['Track 1 lessons 1-4'], ['concept_game', 'concept_player-experience', 'concept_rules'], 'Write a one-page game decision map.', 'Apply Track 1 to a tiny game idea.', 'Post one artifact review.', 'Checkpoint: can you distinguish idea, design, and evidence?'],
  ['Days 8-14', 'Experience, decisions, chance, and play context', ['Track 1 lessons 5-8'], ['concept_meaningful-decisions', 'concept_chance', 'concept_play-as-context'], 'Write a decision matrix.', 'Revise the tiny game idea into a playable design question.', 'Post a meaningful-decision critique.', 'Checkpoint: every claim has a source_basis label.'],
  ['Days 15-21', 'Play, motivation, mastery, and agency', ['Track 2 lessons 1-4'], ['concept_play', 'concept_mastery', 'concept_flow'], 'Create a motivation hypothesis map.', 'Define the target player experience for one prototype.', 'Post a play experience hypothesis.', 'Checkpoint: assumptions are separated from observations.'],
  ['Days 22-28', 'Player identity, play styles, ethics', ['Track 2 lessons 5-7'], ['concept_player-identity', 'concept_audience', 'concept_ethics'], 'Run an ethics risk review.', 'Add audience and safety notes to the project.', 'Post an ethics question.', 'Checkpoint: risks have next experiments.'],
  ['Days 29-35', 'Formal mechanics and decisions', ['Track 3 lessons 1-5'], ['concept_formal-elements', 'concept_mechanics', 'concept_tradeoffs'], 'Create a formal elements map.', 'Write a mechanic spec for the prototype.', 'Post a rule clarity review.', 'Checkpoint: rules can be tested by another person.'],
  ['Days 36-42', 'Skill, chance, and balance', ['Track 3 lessons 6-9'], ['concept_strategic-skill', 'concept_twitch-skill', 'concept_balance'], 'Create a balance risk table.', 'Define one skill test and one chance test.', 'Post a balance uncertainty.', 'Checkpoint: balance claims are not treated as facts without tests.'],
  ['Days 43-49', 'Systems and economy', ['Track 4 lessons 1-5'], ['concept_system', 'concept_loop', 'concept_progression-curve'], 'Draw a system map.', 'Connect the prototype loop to progression.', 'Post a system coupling question.', 'Checkpoint: loops and outputs are visible.'],
  ['Days 50-56', 'Economy sources, sinks, emergence', ['Track 4 lessons 6-9'], ['concept_source', 'concept_sink', 'concept_emergence'], 'Build a source/sink sheet.', 'Create one systemic risk experiment.', 'Post an economy readability review.', 'Checkpoint: economy claims have measurable signals.'],
  ['Days 57-63', 'Game feel and interaction', ['Track 5 lessons 1-5'], ['concept_game-feel', 'concept_real-time-control', 'concept_input-metric'], 'Make a feel tuning table.', 'Prototype one input-response variation.', 'Post a control feel observation.', 'Checkpoint: feel changes are tied to player perception.'],
  ['Days 64-70', 'Polish, UI, and feedback', ['Track 5 lessons 6-10; Track 6 lessons 1-4'], ['concept_feedback', 'concept_interface', 'concept_polish'], 'Create a feedback timing audit.', 'Improve one UI/feedback loop.', 'Post a UI evidence gap.', 'Checkpoint: feedback reveals state, action, and consequence.'],
  ['Days 71-77', 'Narrative, world, character, and UI accessibility', ['Track 6 lessons 5-8; Track 7 lessons 1-4'], ['concept_worldbuilding', 'concept_story', 'concept_player-rights'], 'Create a narrative-function note.', 'Add one narrative or accessibility revision.', 'Post a role and agency thread.', 'Checkpoint: story supports play instead of replacing it.'],
  ['Days 78-84', 'Prototyping, playtesting, production', ['Track 7 lessons 5-8; Track 8 lessons 1-5'], ['concept_prototype', 'concept_playtest', 'concept_iteration'], 'Prepare a playtest script.', 'Run or simulate one tiny playtest.', 'Post a playtest plan.', 'Checkpoint: prototype question is specific.'],
  ['Days 85-90', 'Release, community, and capstone review', ['Track 8 lessons 6-9; Track 9; Track 10 capstone selection'], ['concept_release-readiness', 'concept_community', 'concept_design-document'], 'Run a capstone design review.', 'Create a final project overlay and next roadmap.', 'Post final retrospective.', 'Checkpoint: final output has strengths, risks, missing evidence, and next actions.']
];

let plan = '# 90-Day Study Plan\n\n';
plan += 'This plan uses the generated lessons as a structured practice path. Reading targets are metadata and user-note targets only until legal sidecars or open sources are attached.\n\n';
plan += '| Timebox | Weekly Focus | Reading Targets | Card Review Targets | Exercises | Project Applications | Forum Posts | Reflection / Checkpoint |\n';
plan += '|---|---|---|---|---|---|---|---|\n';
for (const [timebox, focus, reading, cards, exercise, project, forum, checkpoint] of weeks) {
  plan += `| ${timebox} | ${focus} | ${reading.join('; ')} | ${cards.join('; ')} | ${exercise} | ${project} | ${forum} | ${checkpoint} |\n`;
}
write(path.join(lessonRoot, '90_DAY_STUDY_PLAN.md'), plan);

let exercisePlaceholders = '# Exercise Placeholders\n\n';
exercisePlaceholders += 'Prompt 7 lessons require exercise links. These placeholders must be expanded in Prompt 8.\n\n';
exercisePlaceholders += '| Exercise ID | Lesson | Future Status |\n|---|---|---|\n';
for (const lesson of lessons) exercisePlaceholders += `| ${lesson.exercise_ids[0]} | ${lesson.title} | expand in Prompt 8 exercise library |\n`;
write(path.join(lessonRoot, 'EXERCISE_PLACEHOLDERS.md'), exercisePlaceholders);

let workflowPlaceholders = '# Future Workflow Pack Placeholders\n\n';
workflowPlaceholders += 'Prompt 7 lessons require future workflow pack links. These placeholders must be implemented in Prompt 8.\n\n';
workflowPlaceholders += '| Workflow Pack ID | Lesson | Intended Output |\n|---|---|---|\n';
for (const lesson of lessons) workflowPlaceholders += `| ${lesson.future_workflow_packs[0]} | ${lesson.title} | ${lesson.design_deliverable} |\n`;
write(path.join(lessonRoot, 'FUTURE_WORKFLOW_PACK_PLACEHOLDERS.md'), workflowPlaceholders);

let projectOverlayPlaceholders = '# Project Overlay Placeholders\n\n';
projectOverlayPlaceholders += 'Prompt 7 lessons require project application links. These placeholders should become full project overlays in Prompt 9.\n\n';
projectOverlayPlaceholders += '| Project Overlay ID | Lesson | Project Application |\n|---|---|---|\n';
for (const lesson of lessons) projectOverlayPlaceholders += `| ${lesson.project_overlay_placeholders[0]} | ${lesson.title} | ${lesson.project_application} |\n`;
write(path.join(lessonRoot, 'PROJECT_OVERLAY_PLACEHOLDERS.md'), projectOverlayPlaceholders);

write(
  path.join(lessonRoot, 'lesson_index.json'),
  `${JSON.stringify(
    {
      schema_version: 'gdkb.masterclass_lessons.v1',
      updated_date: now,
      total_tracks: tracks.length,
      total_lessons: lessons.length,
      legal_note: 'Original lesson scaffolds. No high-risk source body text used.',
      tracks,
      lessons
    },
    null,
    2
  )}\n`
);

write(
  path.join(lessonRoot, 'PROMPT_7_GENERATION_SUMMARY.json'),
  `${JSON.stringify(
    {
      total_tracks: tracks.length,
      total_lessons: lessons.length,
      lessons_by_track: Object.fromEntries(tracks.map((track) => [track.title, lessons.filter((lesson) => lesson.track_id === track.id).length])),
      lessons_by_level: lessons.reduce((acc, lesson) => {
        acc[lesson.level] = (acc[lesson.level] || 0) + 1;
        return acc;
      }, {}),
      exercise_placeholders: lessons.length,
      future_workflow_pack_placeholders: lessons.length,
      project_overlay_placeholders: lessons.length
    },
    null,
    2
  )}\n`
);

console.log(JSON.stringify({ total_tracks: tracks.length, total_lessons: lessons.length }, null, 2));
