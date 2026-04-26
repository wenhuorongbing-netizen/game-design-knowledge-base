const fs = require('fs');
const path = require('path');

const root = process.cwd();
const kb = path.join(root, 'kb');
const workflowRoot = path.join(kb, '08_workflows');
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
  workflowRoot,
  path.join(workflowRoot, 'packs'),
  path.join(workflowRoot, 'exercises'),
  path.join(workflowRoot, 'prompts')
];
for (const dir of dirs) fs.mkdirSync(dir, { recursive: true });
for (const dir of dirs.slice(1)) {
  for (const file of fs.readdirSync(dir).filter((name) => name.endsWith('.md'))) fs.unlinkSync(path.join(dir, file));
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
const frameworkDir = path.join(kb, '05_cards', 'framework_cards');
const concepts = fs.readdirSync(conceptDir).filter((file) => file.endsWith('.md')).map((file) => parseFrontmatter(path.join(conceptDir, file)));
const frameworks = fs.readdirSync(frameworkDir).filter((file) => file.endsWith('.md')).map((file) => parseFrontmatter(path.join(frameworkDir, file)));
const cardByTitle = new Map([...concepts, ...frameworks].map((card) => [slugify(card.title), card.card_id]));
const allCardIds = new Set([...concepts, ...frameworks].map((card) => card.card_id));
const lensIndex = JSON.parse(fs.readFileSync(path.join(kb, '06_lenses', 'lens_index.json'), 'utf8'));
const lenses = lensIndex.lenses || [];
const allLensIds = new Set(lenses.map((lens) => lens.lens_id));
const lessonIndex = JSON.parse(fs.readFileSync(path.join(kb, '07_lessons', 'lesson_index.json'), 'utf8'));
const lessons = lessonIndex.lessons || [];
const allLessonIds = new Set(lessons.map((lesson) => lesson.lesson_id));

function cardIds(names) {
  const ids = [];
  for (const name of names) {
    const id = cardByTitle.get(slugify(name)) || cardByTitle.get(slugify(name.replace(/\//g, ' ')));
    if (id) ids.push(id);
  }
  for (const fallback of ['problem statement', 'player experience', 'prototype', 'playtest', 'design document']) {
    if (ids.length >= 3) break;
    const id = cardByTitle.get(slugify(fallback));
    if (id) ids.push(id);
  }
  return uniq(ids).slice(0, 8);
}

function selectLenses(terms, domains, count = 4) {
  const keywordTerms = terms.flatMap((term) => slugify(term).split('-')).filter((term) => term.length > 2);
  return lenses
    .map((lens) => {
      const haystack = `${slugify(lens.title)} ${slugify(lens.family || '')} ${slugify(lens.domain || '')}`;
      let score = 0;
      for (const term of keywordTerms) if (haystack.includes(term)) score += 5;
      if (domains && domains.includes(lens.domain)) score += 4;
      return { lens, score };
    })
    .sort((a, b) => b.score - a.score || a.lens.lens_id.localeCompare(b.lens.lens_id))
    .map((item) => item.lens.lens_id)
    .slice(0, count);
}

function selectLessons(terms, domains, count = 4) {
  const keywordTerms = terms.flatMap((term) => slugify(term).split('-')).filter((term) => term.length > 2);
  return lessons
    .map((lesson) => {
      const haystack = `${slugify(lesson.title)} ${(lesson.domains || []).join(' ')}`;
      let score = 0;
      for (const term of keywordTerms) if (haystack.includes(term)) score += 5;
      if ((lesson.domains || []).some((domain) => domains.includes(domain))) score += 4;
      return { lesson, score };
    })
    .sort((a, b) => b.score - a.score || a.lesson.lesson_id.localeCompare(b.lesson.lesson_id))
    .map((item) => item.lesson.lesson_id)
    .slice(0, count);
}

const promptDefs = [
  ['summarize-user-notes-into-cards', 'Summarize User Notes Into Cards', 'Convert user-authored notes into source-governed card drafts.'],
  ['turn-card-into-lens', 'Turn Card Into Lens', 'Convert a concept or framework card into an original diagnostic lens.'],
  ['turn-lens-into-checklist', 'Turn Lens Into Checklist', 'Convert diagnostic questions into a review checklist.'],
  ['run-design-audit', 'Run Design Audit', 'Evaluate a design artifact with linked cards and lenses.'],
  ['run-game-feel-audit', 'Run Game Feel Audit', 'Review input, response, context, polish, and tuning risks.'],
  ['run-balance-audit', 'Run Balance Audit', 'Inspect economy, progression, sources, sinks, and balance risks.'],
  ['generate-playtest-questions', 'Generate Playtest Questions', 'Create testable playtest questions from a prototype goal.'],
  ['classify-note-by-taxonomy', 'Classify Note By Taxonomy', 'Route a note into phase groups, domains, cards, and lessons.'],
  ['detect-unsupported-claims', 'Detect Unsupported Claims', 'Find claims that lack source_basis, confidence, or evidence refs.'],
  ['propose-project-applications', 'Propose Project Applications', 'Turn general KB items into project overlay candidates.'],
  ['generate-forum-discussion-prompts', 'Generate Forum Discussion Prompts', 'Create structured forum prompts for critique and evidence gathering.'],
  ['compare-two-concepts', 'Compare Two Concepts', 'Compare two concepts without inventing source claims.'],
  ['create-exercises-from-concepts', 'Create Exercises From Concepts', 'Generate original practice tasks from concept cards.'],
  ['produce-design-decision-log', 'Produce Design Decision Log', 'Turn findings into a decision with rationale, evidence, and next test.'],
  ['update-project-overlay', 'Update Project Overlay', 'Update project-specific applications from workflow outputs.']
];

const prompts = promptDefs.map(([slug, title, useCase]) => ({
  prompt_id: `prompt_${slug}`,
  title,
  use_case: useCase,
  required_context: [
    'Relevant KB object IDs and their source_basis/confidence.',
    'User-provided artifact or notes.',
    'Any project constraints, if this is project-facing.'
  ],
  user_inputs: ['artifact_or_notes', 'desired_output', 'known_constraints', 'evidence_refs_if_available'],
  guardrails: [
    'Do not use high-risk source body text.',
    'Do not invent book claims.',
    'Label assumptions separately from evidence.',
    'Return source_basis and confidence for every substantive claim.'
  ],
  prompt_text: `You are using the BookOS Game Design KB. Task: ${useCase} Use only the provided context. Do not invent source claims. Separate source-backed statements, user interpretation, AI hypothesis, and project application. Output must include missing evidence and next actions.`,
  expected_output_format: [
    'summary',
    'source_basis_map',
    'confidence_map',
    'findings_or_generated_objects',
    'missing_evidence',
    'next_actions'
  ],
  failure_modes: [
    'Inventing facts from missing source material.',
    'Treating draft cards or lenses as verified.',
    'Skipping project constraints.',
    'Producing generic advice with no output artifact.'
  ],
  review_checklist: [
    'Every claim has source_basis and confidence.',
    'Unsupported assumptions are marked.',
    'The output artifact is usable.',
    'Next actions are concrete.'
  ],
  source_basis: 'unsupported_draft',
  confidence: 'unsupported_draft',
  status: 'draft',
  created_at: now,
  updated_at: now
}));

const promptIds = prompts.map((prompt) => prompt.prompt_id);

const workflowDefs = [
  ['game-idea-to-one-page-concept', 'Game Idea to One-Page Concept Pack', 'Transforms a vague idea into a one-page concept.', [phase.direction], ['player_experience', 'business_pitch_release'], 'beginner', '45 minutes', 'solo_designer', ['ideation', 'problem statement', 'player experience', 'pitch'], ['core experience', 'audience', 'feasibility']],
  ['core-experience-definition', 'Core Experience Definition Pack', 'Defines player fantasy, emotional target, and experience goals.', [phase.direction, phase.core], ['player_experience', 'player_psychology'], 'beginner', '60 minutes', 'design_team', ['player experience', 'experience goal', 'player identity', 'pleasure'], ['core experience', 'player fantasy', 'emotional goal']],
  ['player-persona-and-audience', 'Player Persona and Audience Pack', 'Defines target players, skill levels, motivations, and access needs.', [phase.direction, phase.test], ['player_psychology', 'business_pitch_release', 'ui_ux_feedback'], 'beginner', '60 minutes', 'product_team', ['audience', 'mastery', 'learning', 'player rights'], ['audience', 'motivation', 'accessibility']],
  ['meaningful-decision-audit', 'Meaningful Decision Audit Pack', 'Checks whether choices actually matter.', [phase.core, phase.test], ['rules_and_mechanics', 'player_experience'], 'intermediate', '75 minutes', 'design_team', ['meaningful decisions', 'tradeoffs', 'dilemmas', 'agency'], ['meaningful decisions', 'tradeoffs', 'dilemma quality']],
  ['core-loop-design', 'Core Loop Design Pack', 'Defines actions, feedback, rewards, friction, and repetition.', [phase.core, phase.dev, phase.test], ['systems_design', 'rules_and_mechanics'], 'intermediate', '90 minutes', 'design_team', ['loop', 'mechanics', 'feedback', 'resources'], ['core loop', 'feedback loops', 'parts/loops/whole']],
  ['rules-and-formal-elements', 'Rules and Formal Elements Pack', 'Turns gameplay into formal elements: players, objectives, procedures, rules, resources, conflict, boundaries, outcome.', [phase.core, phase.dev], ['formal_game_design', 'rules_and_mechanics'], 'intermediate', '75 minutes', 'student', ['formal elements', 'objectives', 'procedures', 'rules', 'resources', 'conflict', 'boundaries', 'outcome'], ['rule clarity', 'rules as constraints', 'depth versus complexity']],
  ['systems-map', 'Systems Map Pack', 'Maps parts, loops, wholes, feedback, and emergent risks.', [phase.core, phase.economy, phase.test], ['systems_design', 'economy_and_balance'], 'advanced', '90 minutes', 'design_team', ['system', 'part', 'loop', 'whole', 'feedback loop', 'emergence'], ['parts/loops/whole', 'feedback loops', 'emergent possibility']],
  ['economy-and-balance', 'Economy and Balance Pack', 'Designs sources, sinks, currencies, progression, and balance risks.', [phase.economy, phase.test], ['economy_and_balance', 'systems_design'], 'advanced', '90 minutes', 'design_team', ['economy', 'source', 'sink', 'faucet', 'drain', 'balance', 'progression curve'], ['source/sink balance', 'economy readability', 'balance resilience']],
  ['skill-chance-challenge', 'Skill / Chance / Challenge Pack', 'Tunes skill, randomness, risk, and difficulty.', [phase.core, phase.economy, phase.test], ['rules_and_mechanics', 'player_experience'], 'intermediate', '75 minutes', 'design_team', ['skill', 'twitch skill', 'strategic skill', 'chance', 'challenge', 'uncertainty'], ['skill/chance mix', 'challenge', 'uncertainty']],
  ['game-feel-prototype', 'Game Feel Prototype Pack', 'Designs input, response, context, polish, and tuning experiments.', [phase.core, phase.art, phase.dev, phase.test], ['game_feel', 'ui_ux_feedback'], 'advanced', '90 minutes', 'solo_designer', ['game feel', 'input metric', 'response metric', 'context metric', 'polish metric', 'responsiveness'], ['real-time control', 'input responsiveness', 'response clarity', 'tight versus floaty']],
  ['ui-feedback', 'UI Feedback Pack', 'Audits information hierarchy, input mapping, feedback, affordance, and accessibility.', [phase.art, phase.dev, phase.test], ['ui_ux_feedback', 'player_experience'], 'intermediate', '75 minutes', 'product_team', ['interface', 'feedback', 'mental model', 'player rights'], ['information priority', 'input mapping', 'feedback immediacy', 'accessibility']],
  ['narrative-mechanic-alignment', 'Narrative-Mechanic Alignment Pack', 'Checks whether story and mechanics support each other.', [phase.narrative, phase.core, phase.test], ['narrative_design', 'rules_and_mechanics'], 'advanced', '90 minutes', 'design_team', ['story', 'premise', 'mechanics', 'agency', 'emergent story'], ['story function', 'narrative agency', 'thematic resonance']],
  ['world-and-character-function', 'World and Character Function Pack', 'Defines world logic, character roles, avatar identity, and player relation.', [phase.narrative, phase.art, phase.test], ['worldbuilding', 'character_design', 'player_psychology'], 'intermediate', '75 minutes', 'design_team', ['worldbuilding', 'character function', 'avatar', 'player identity', 'status'], ['world coherence', 'character function', 'avatar identity']],
  ['prototype-question', 'Prototype Question Pack', 'Forces every prototype to answer one clear design question.', [phase.direction, phase.core, phase.dev, phase.test], ['prototyping', 'playtesting'], 'beginner', '45 minutes', 'student', ['prototype', 'problem statement', 'experience goal', 'playtest'], ['prototype question', 'learning speed', 'test bias']],
  ['paper-prototype', 'Paper Prototype Pack', 'Converts systems into testable non-digital prototypes.', [phase.core, phase.dev, phase.test], ['prototyping', 'rules_and_mechanics'], 'beginner', '60 minutes', 'student', ['paper prototype', 'rules', 'procedures', 'resources'], ['disposable prototype', 'rule clarity', 'playtest signal']],
  ['digital-prototype', 'Digital Prototype Pack', 'Plans rapid digital implementation.', [phase.dev, phase.test], ['prototyping', 'production_process', 'game_feel'], 'intermediate', '90 minutes', 'solo_designer', ['digital prototype', 'prototype', 'iteration', 'game feel'], ['prototype question', 'input responsiveness', 'learning speed']],
  ['playtest-plan', 'Playtest Plan Pack', 'Defines who, where, what, how, data, observation, and interview.', [phase.test], ['playtesting', 'player_experience'], 'intermediate', '75 minutes', 'design_team', ['playtest', 'audience', 'feedback', 'problem statement'], ['playtest signal', 'observation quality', 'survey usefulness']],
  ['iteration-decision', 'Iteration Decision Pack', 'Turns playtest findings into design changes.', [phase.dev, phase.test], ['playtesting', 'production_process'], 'advanced', '60 minutes', 'design_team', ['iteration', 'playtest', 'feedback', 'design document'], ['iteration decision', 'confidence calibration', 'claim traceability']],
  ['design-lens-review', 'Design Lens Review Pack', 'Runs multiple lenses on a project artifact.', [phase.direction, phase.core, phase.economy, phase.art, phase.test], ['design_lenses', 'prompt_engineering_for_game_design'], 'advanced', '75 minutes', 'educator', ['design document', 'player experience', 'iteration'], ['core experience', 'meaningful decisions', 'feedback loops', 'source-bounded retrieval']],
  ['release-readiness-risk-audit', 'Release Readiness and Risk Audit Pack', 'Checks design, UX, production, community, ethics, and launch risks.', [phase.test, phase.ops], ['business_pitch_release', 'production_process', 'ethics_responsibility'], 'professional', '120 minutes', 'product_team', ['release readiness', 'community', 'business model', 'responsibility'], ['launch readiness', 'community health', 'business alignment', 'responsibility']]
];

function workflowFromDef(def) {
  const [slug, title, purpose, phaseGroups, domains, difficulty, estimatedTime, targetUser, conceptNames, lensTerms] = def;
  const relatedCards = cardIds(conceptNames);
  const relatedLenses = selectLenses(lensTerms, domains, 4);
  const relatedLessons = selectLessons([title, ...conceptNames], domains, 5);
  const workflowId = `workflow_${slug}`;
  const primaryPromptIds = uniq([
    'prompt_run-design-audit',
    domains.includes('game_feel') ? 'prompt_run-game-feel-audit' : null,
    domains.includes('economy_and_balance') ? 'prompt_run-balance-audit' : null,
    domains.includes('playtesting') ? 'prompt_generate-playtest-questions' : null,
    'prompt_produce-design-decision-log',
    'prompt_update-project-overlay'
  ]);
  return {
    workflow_id: workflowId,
    title,
    purpose,
    phase_groups: phaseGroups,
    domains,
    difficulty,
    estimated_time: estimatedTime,
    target_user: targetUser,
    when_to_use: [
      'Use when a design question needs to become a concrete output artifact.',
      'Use before accepting a feature, system, prototype, or release decision as stable.',
      'Use when the team needs evidence, assumptions, risks, and next actions separated.'
    ],
    when_not_to_use: [
      'Do not use as a substitute for playtesting or human review.',
      'Do not use to create book-derived claims without legal evidence.',
      'Do not use when required inputs are unavailable or the question is too broad.'
    ],
    required_inputs: [
      'current design question',
      'game idea, feature spec, prototype notes, or project artifact',
      'known constraints and target player experience',
      'available evidence and explicit assumptions'
    ],
    step_by_step_process: [
      'State the design question in one sentence.',
      'List inputs, constraints, assumptions, and missing evidence.',
      'Review linked concept cards as vocabulary anchors, not verified claims.',
      'Run the linked lenses and record strengths, risks, and contradictions.',
      'Draft the output artifact using the workflow output format.',
      'Apply the quality checklist and human review questions.',
      'Record the project overlay update and next action.'
    ],
    related_cards: relatedCards,
    related_lenses: relatedLenses,
    related_lessons: relatedLessons,
    output_artifacts: [
      `${title.replace(/ Pack$/, '')} worksheet`,
      'design decision log entry',
      'missing evidence list',
      'next experiment or playtest question',
      'project overlay update'
    ],
    quality_checklist: [
      'The design question is specific.',
      'Every claim is labeled as evidence, assumption, or hypothesis.',
      'At least two lenses were used.',
      'The output artifact can be reviewed by another person.',
      'The next action is small enough to execute this week.'
    ],
    AI_prompt_templates: primaryPromptIds,
    human_review_questions: [
      'What would make this workflow output wrong?',
      'What evidence is missing before the team should commit?',
      'Which assumption is riskiest?',
      'What is the smallest useful next test?'
    ],
    forum_thread_template: `Thread title: ${title} review for [artifact]. Include context, intended player experience, workflow output, missing evidence, and one question for reviewers.`,
    project_overlay_update: `Append the ${title} output to the project overlay with changed decisions, evidence gaps, and next experiments.`,
    success_criteria: [
      'The output artifact is concrete enough to use in production or class critique.',
      'Unsupported claims remain marked.',
      'The team has a clear next action.'
    ],
    common_failure_modes: [
      'The workflow produces broad advice instead of an artifact.',
      'Draft cards or lenses are treated as verified knowledge.',
      'The review skips evidence gaps.',
      'The next action is too large to execute.'
    ],
    source_basis: 'unsupported_draft',
    confidence: 'unsupported_draft',
    status: 'draft',
    created_at: now,
    updated_at: now
  };
}

const workflows = workflowDefs.map(workflowFromDef);

const exerciseCategories = [
  ['ideation', 15, 'Ideation', ['ideation', 'problem statement', 'experience goal', 'pitch'], [phase.direction], ['player_experience', 'prototyping']],
  ['rules_mechanics', 10, 'Rules / Mechanics', ['rules', 'mechanics', 'procedures', 'objectives'], [phase.core], ['rules_and_mechanics', 'formal_game_design']],
  ['meaningful_decision', 10, 'Meaningful Decision', ['meaningful decisions', 'tradeoffs', 'dilemmas', 'risk versus reward'], [phase.core, phase.test], ['rules_and_mechanics', 'player_experience']],
  ['systems_economy', 10, 'Systems / Economy', ['system', 'loop', 'economy', 'source', 'sink'], [phase.core, phase.economy], ['systems_design', 'economy_and_balance']],
  ['game_feel', 10, 'Game Feel', ['game feel', 'input metric', 'response metric', 'feedback'], [phase.core, phase.art, phase.dev], ['game_feel', 'ui_ux_feedback']],
  ['ui_feedback', 10, 'UI / Feedback', ['interface', 'feedback', 'mental model', 'player rights'], [phase.art, phase.test], ['ui_ux_feedback', 'player_experience']],
  ['narrative_world', 10, 'Narrative / World', ['story', 'premise', 'worldbuilding', 'character function'], [phase.narrative, phase.test], ['narrative_design', 'worldbuilding', 'character_design']],
  ['ethics_community', 5, 'Ethics / Community', ['ethics', 'responsibility', 'community', 'griefing'], [phase.direction, phase.ops], ['ethics_responsibility', 'multiplayer_community']],
  ['pitch_release', 5, 'Pitch / Release', ['pitch', 'audience', 'business model', 'release readiness'], [phase.direction, phase.ops], ['business_pitch_release', 'production_process']]
];

function selectLessonForExercise(category, index, domains) {
  return selectLessons([category, String(index)], domains, 1)[0] || lessons[index % lessons.length].lesson_id;
}

const exercises = [];
for (const [categoryId, count, label, conceptNames, phaseGroups, domains] of exerciseCategories) {
  for (let i = 1; i <= count; i++) {
    const slug = `${categoryId}_${String(i).padStart(2, '0')}`;
    const title = `${label} Exercise ${String(i).padStart(2, '0')}: ${['compress', 'invert', 'map', 'stress-test', 'compare', 'prototype', 'audit', 'rewrite', 'observe', 'cut'][i % 10]} a design assumption`;
    const relatedCards = cardIds(conceptNames);
    const relatedLenses = selectLenses([label, ...conceptNames], domains, 2);
    const relatedLesson = selectLessonForExercise(label, i, domains);
    exercises.push({
      exercise_id: `exercise_${slug}`,
      title,
      category: categoryId,
      purpose: `Practice turning ${label.toLowerCase()} knowledge into a concrete design artifact without relying on unsupported source claims.`,
      difficulty: i <= Math.ceil(count / 3) ? 'beginner' : i <= Math.ceil((count * 2) / 3) ? 'intermediate' : 'advanced',
      estimated_time: i % 3 === 0 ? '60 minutes' : '30 minutes',
      solo_or_group: i % 2 === 0 ? 'group' : 'solo',
      materials: ['timer', 'blank worksheet', 'current game idea or prototype note', 'linked cards and lenses'],
      setup: 'Choose one concrete artifact. State the intended player experience and current evidence before starting.',
      steps: [
        'Write the current assumption in one sentence.',
        'Use the linked cards as vocabulary anchors.',
        'Run the linked lenses and record three findings.',
        'Create the expected output artifact.',
        'Mark missing evidence and one next experiment.'
      ],
      constraints: [
        'Do not use book body text.',
        'Do not cite a card or lens as verified unless it has evidence.',
        'Keep the output reviewable in one page or one board.'
      ],
      expected_output: `${label} one-page exercise output with assumptions, evidence gaps, and next action.`,
      evaluation_rubric: ['clarity', 'evidence discipline', 'design usefulness', 'testability', 'reflection quality'],
      related_lesson: relatedLesson,
      related_cards: relatedCards,
      related_lenses: relatedLenses,
      phase_groups: phaseGroups,
      source_basis: 'unsupported_draft',
      confidence: 'unsupported_draft',
      status: 'draft',
      created_at: now,
      updated_at: now
    });
  }
}

function schemaForWorkflow() {
  const fields = [
    'workflow_id',
    'title',
    'purpose',
    'phase_groups',
    'domains',
    'difficulty',
    'estimated_time',
    'target_user',
    'when_to_use',
    'when_not_to_use',
    'required_inputs',
    'step_by_step_process',
    'related_cards',
    'related_lenses',
    'related_lessons',
    'output_artifacts',
    'quality_checklist',
    'AI_prompt_templates',
    'human_review_questions',
    'forum_thread_template',
    'project_overlay_update',
    'success_criteria',
    'common_failure_modes',
    'source_basis',
    'confidence',
    'status'
  ];
  return {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: 'bookos.game_design.workflow_pack.schema.v1',
    title: 'BookOS Game Design WorkflowPack',
    type: 'object',
    additionalProperties: true,
    required: fields,
    properties: {
      workflow_id: { type: 'string' },
      title: { type: 'string' },
      purpose: { type: 'string' },
      phase_groups: { type: 'array', items: { type: 'string' } },
      domains: { type: 'array', items: { type: 'string' } },
      difficulty: { type: 'string', enum: ['beginner', 'intermediate', 'advanced', 'professional'] },
      estimated_time: { type: 'string' },
      target_user: { type: 'string', enum: ['solo_designer', 'student', 'design_team', 'product_team', 'educator'] },
      source_basis: { type: 'string' },
      confidence: { type: 'string' },
      status: { type: 'string' }
    }
  };
}

write(path.join(workflowRoot, 'workflow_pack_schema.json'), `${JSON.stringify(schemaForWorkflow(), null, 2)}\n`);

write(
  path.join(workflowRoot, 'workflow_pack_template.md'),
  `# Workflow Pack Template\n\n${frontmatter({
    workflow_id: '',
    title: '',
    purpose: '',
    phase_groups: [],
    domains: [],
    difficulty: 'beginner',
    estimated_time: '',
    target_user: 'solo_designer',
    when_to_use: [],
    when_not_to_use: [],
    required_inputs: [],
    step_by_step_process: [],
    related_cards: [],
    related_lenses: [],
    related_lessons: [],
    output_artifacts: [],
    quality_checklist: [],
    AI_prompt_templates: [],
    human_review_questions: [],
    forum_thread_template: '',
    project_overlay_update: '',
    success_criteria: [],
    common_failure_modes: [],
    source_basis: 'unsupported_draft',
    confidence: 'unsupported_draft',
    status: 'draft'
  })}\n## Purpose\n\nPending.\n\n## Step-By-Step Process\n\n${mdList(['Pending.'])}\n\n## Quality Checklist\n\n${mdList(['Pending.'])}\n`
);

function workflowMarkdown(workflow) {
  return `${frontmatter(workflow)}# ${workflow.title}\n\n## Purpose\n\n${workflow.purpose}\n\n## When To Use\n\n${mdList(workflow.when_to_use)}\n\n## When Not To Use\n\n${mdList(workflow.when_not_to_use)}\n\n## Required Inputs\n\n${mdList(workflow.required_inputs)}\n\n## Step-By-Step Process\n\n${mdList(workflow.step_by_step_process)}\n\n## Related Cards\n\n${mdList(workflow.related_cards)}\n\n## Related Lenses\n\n${mdList(workflow.related_lenses)}\n\n## Related Lessons\n\n${mdList(workflow.related_lessons)}\n\n## Output Artifacts\n\n${mdList(workflow.output_artifacts)}\n\n## Quality Checklist\n\n${mdList(workflow.quality_checklist)}\n\n## AI Prompt Templates\n\n${mdList(workflow.AI_prompt_templates)}\n\n## Human Review Questions\n\n${mdList(workflow.human_review_questions)}\n\n## Forum Thread Template\n\n${workflow.forum_thread_template}\n\n## Project Overlay Update\n\n${workflow.project_overlay_update}\n\n## Success Criteria\n\n${mdList(workflow.success_criteria)}\n\n## Common Failure Modes\n\n${mdList(workflow.common_failure_modes)}\n\n## Source Governance\n\n- source_basis: ${workflow.source_basis}\n- confidence: ${workflow.confidence}\n- status: ${workflow.status}\n- No high-risk source body text was used.\n`;
}

function exerciseMarkdown(exercise) {
  return `${frontmatter(exercise)}# ${exercise.title}\n\n## Purpose\n\n${exercise.purpose}\n\n## Materials\n\n${mdList(exercise.materials)}\n\n## Setup\n\n${exercise.setup}\n\n## Steps\n\n${mdList(exercise.steps)}\n\n## Constraints\n\n${mdList(exercise.constraints)}\n\n## Expected Output\n\n${exercise.expected_output}\n\n## Evaluation Rubric\n\n${mdList(exercise.evaluation_rubric)}\n\n## Related Lesson\n\n- ${exercise.related_lesson}\n\n## Related Cards\n\n${mdList(exercise.related_cards)}\n\n## Related Lenses\n\n${mdList(exercise.related_lenses)}\n\n## Source Governance\n\n- source_basis: ${exercise.source_basis}\n- confidence: ${exercise.confidence}\n`;
}

function promptMarkdown(prompt) {
  return `${frontmatter(prompt)}# ${prompt.title}\n\n## Use Case\n\n${prompt.use_case}\n\n## Required Context\n\n${mdList(prompt.required_context)}\n\n## User Inputs\n\n${mdList(prompt.user_inputs)}\n\n## Guardrails\n\n${mdList(prompt.guardrails)}\n\n## Prompt Text\n\n\`\`\`text\n${prompt.prompt_text}\n\`\`\`\n\n## Expected Output Format\n\n${mdList(prompt.expected_output_format)}\n\n## Failure Modes\n\n${mdList(prompt.failure_modes)}\n\n## Review Checklist\n\n${mdList(prompt.review_checklist)}\n`;
}

for (const workflow of workflows) write(path.join(workflowRoot, 'packs', `${workflow.workflow_id}.md`), workflowMarkdown(workflow));
for (const exercise of exercises) write(path.join(workflowRoot, 'exercises', `${exercise.exercise_id}.md`), exerciseMarkdown(exercise));
for (const prompt of prompts) write(path.join(workflowRoot, 'prompts', `${prompt.prompt_id}.md`), promptMarkdown(prompt));

let workflowIndex = '# Workflow Pack Index\n\n';
workflowIndex += 'Prompt 8 converts the KB into practical design work. Workflow packs are original production scaffolds, not source-derived book processes. All packs start as `unsupported_draft` until project evidence or legal/user notes promote them.\n\n';
workflowIndex += '| Workflow Pack | Phase Groups | Domains | Difficulty | Target User | Outputs | Related Lessons |\n|---|---|---|---|---|---|---|\n';
for (const workflow of workflows) {
  workflowIndex += `| [${workflow.title}](packs/${workflow.workflow_id}.md) | ${workflow.phase_groups.join('; ')} | ${workflow.domains.join('; ')} | ${workflow.difficulty} | ${workflow.target_user} | ${workflow.output_artifacts.join('; ')} | ${workflow.related_lessons.join('; ')} |\n`;
}
write(path.join(workflowRoot, 'WORKFLOW_PACK_INDEX.md'), workflowIndex);

let exerciseLibrary = '# Exercise Library\n\n';
exerciseLibrary += 'Prompt 8 creates original exercises for practice and workshop use. Exercises do not copy copyrighted exercise text and do not use high-risk source bodies.\n\n';
exerciseLibrary += '## Category Counts\n\n';
for (const [categoryId, count, label] of exerciseCategories) exerciseLibrary += `- ${label}: ${count}\n`;
exerciseLibrary += `- total: ${exercises.length}\n\n`;
exerciseLibrary += '| Exercise | Category | Difficulty | Time | Solo/Group | Related Lesson | Output |\n|---|---|---|---|---|---|---|\n';
for (const exercise of exercises) {
  exerciseLibrary += `| [${exercise.title}](exercises/${exercise.exercise_id}.md) | ${exercise.category} | ${exercise.difficulty} | ${exercise.estimated_time} | ${exercise.solo_or_group} | ${exercise.related_lesson} | ${exercise.expected_output} |\n`;
}
write(path.join(workflowRoot, 'EXERCISE_LIBRARY.md'), exerciseLibrary);

let promptLibrary = '# Prompt Library\n\n';
promptLibrary += 'Reusable source-governed prompts for BookOS game design work. Every prompt requires source_basis, confidence, missing evidence, and next actions in outputs.\n\n';
promptLibrary += '| Prompt | Use Case | Guardrail Focus | Status |\n|---|---|---|---|\n';
for (const prompt of prompts) {
  promptLibrary += `| [${prompt.title}](prompts/${prompt.prompt_id}.md) | ${prompt.use_case} | ${prompt.guardrails.join('; ')} | ${prompt.status} |\n`;
}
write(path.join(workflowRoot, 'PROMPT_LIBRARY.md'), promptLibrary);

write(path.join(workflowRoot, 'workflow_index.json'), `${JSON.stringify({ schema_version: 'bookos.workflow_packs.v1', updated_date: now, total_workflows: workflows.length, workflows }, null, 2)}\n`);
write(path.join(workflowRoot, 'exercise_index.json'), `${JSON.stringify({ schema_version: 'bookos.exercises.v1', updated_date: now, total_exercises: exercises.length, exercises }, null, 2)}\n`);
write(path.join(workflowRoot, 'prompt_index.json'), `${JSON.stringify({ schema_version: 'bookos.prompt_library.v1', updated_date: now, total_prompts: prompts.length, prompts }, null, 2)}\n`);
write(
  path.join(workflowRoot, 'PROMPT_8_GENERATION_SUMMARY.json'),
  `${JSON.stringify(
    {
      total_workflows: workflows.length,
      total_exercises: exercises.length,
      total_prompts: prompts.length,
      exercise_categories: Object.fromEntries(exerciseCategories.map(([id, count]) => [id, count])),
      legal_note: 'Original workflow, exercise, and prompt scaffolds. No high-risk source body text used.'
    },
    null,
    2
  )}\n`
);

console.log(JSON.stringify({ total_workflows: workflows.length, total_exercises: exercises.length, total_prompts: prompts.length }, null, 2));
