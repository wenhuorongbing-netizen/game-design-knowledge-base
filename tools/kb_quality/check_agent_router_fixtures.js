const fs = require("fs");
const path = require("path");

const root = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();

const fixtureFile = path.join(root, "agent_runtime_tests", "ROUTER_FIXTURES.json");
const manifestFile = path.join(root, "AGENT_SKILL_MANIFEST.json");

const requiredFields = [
  "fixture_id",
  "category",
  "user_request",
  "expected_skill",
  "fallback_skill",
  "expected_context_pack",
  "expected_output_contract",
  "expected_safety_behavior",
  "should_ask_questions",
  "maximum_question_count",
  "should_refuse",
  "reason"
];

const requiredCategories = [
  "vague game idea",
  "core experience",
  "lens review",
  "meaningful decision audit",
  "systems/economy audit",
  "game feel feedback audit",
  "UI feedback audit",
  "narrative mechanic alignment",
  "prototype plan",
  "playtest plan",
  "learning coach",
  "reading note intake",
  "claim safety check",
  "pitch critique",
  "unsafe private book summary request",
  "fake playtest request",
  "fake citation request",
  "verified claim request without evidence",
  "request to build BookOS",
  "ambiguous design request"
];

const errors = [];

function readJson(file, label) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    errors.push(`${label} is not valid JSON: ${error.message}`);
    return null;
  }
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

const manifest = readJson(manifestFile, "AGENT_SKILL_MANIFEST.json");
const suite = readJson(fixtureFile, "ROUTER_FIXTURES.json");

const skillIds = new Set();
if (manifest && Array.isArray(manifest.skills)) {
  for (const skill of manifest.skills) {
    if (skill.skill_id) skillIds.add(skill.skill_id);
  }
} else {
  errors.push("AGENT_SKILL_MANIFEST.json must contain skills array");
}

const fixtureIds = new Set();
const categories = new Set();
let fixtureCount = 0;

if (suite) {
  if (!Array.isArray(suite.fixtures)) {
    errors.push("ROUTER_FIXTURES.json must contain fixtures array");
  } else {
    fixtureCount = suite.fixtures.length;
    if (fixtureCount < 20) {
      errors.push(`expected at least 20 router fixtures, found ${fixtureCount}`);
    }

    for (const fixture of suite.fixtures) {
      const id = fixture.fixture_id || "<missing fixture_id>";
      for (const field of requiredFields) {
        if (!(field in fixture)) errors.push(`${id} missing field: ${field}`);
      }

      if (fixtureIds.has(id)) errors.push(`duplicate fixture_id: ${id}`);
      fixtureIds.add(id);

      if (fixture.category) categories.add(fixture.category);

      if (fixture.expected_skill && !skillIds.has(fixture.expected_skill)) {
        errors.push(`${id} expected_skill not in manifest: ${fixture.expected_skill}`);
      }

      if (fixture.fallback_skill && !skillIds.has(fixture.fallback_skill)) {
        errors.push(`${id} fallback_skill not in manifest: ${fixture.fallback_skill}`);
      }

      if (fixture.expected_context_pack && !exists(fixture.expected_context_pack)) {
        errors.push(`${id} expected_context_pack missing: ${fixture.expected_context_pack}`);
      }

      if (fixture.expected_output_contract && !exists(fixture.expected_output_contract)) {
        errors.push(`${id} expected_output_contract missing: ${fixture.expected_output_contract}`);
      }

      if (typeof fixture.should_ask_questions !== "boolean") {
        errors.push(`${id} should_ask_questions must be boolean`);
      }

      if (typeof fixture.should_refuse !== "boolean") {
        errors.push(`${id} should_refuse must be boolean`);
      }

      if (!Number.isInteger(fixture.maximum_question_count)) {
        errors.push(`${id} maximum_question_count must be integer`);
      } else if (fixture.maximum_question_count < 0 || fixture.maximum_question_count > 3) {
        errors.push(`${id} maximum_question_count must be between 0 and 3`);
      }
    }

    for (const category of requiredCategories) {
      if (!categories.has(category)) errors.push(`missing required category: ${category}`);
    }
  }
}

if (errors.length) {
  console.error(JSON.stringify({ result: "FAIL", errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  result: "PASS",
  fixtures: fixtureCount,
  skills_referenced: skillIds.size
}, null, 2));
