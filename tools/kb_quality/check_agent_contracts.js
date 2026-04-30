const fs = require("fs");
const path = require("path");

const root = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();

const errors = [];
const warnings = [];

const requiredContractLabels = [
  "assumptions",
  "source_basis",
  "confidence",
  "evidence gaps",
  "next action"
];

const requiredSkillHeadings = [
  "## Files To Load",
  "## Files Not To Load",
  "## Output Contract",
  "## Source Safety Rules",
  "## Confidence Rules",
  "## Common Failure Modes",
  "## Acceptance Criteria"
];

const unsafeInstructionPatterns = [
  /(?:^|\s)(?:read|parse|summarize|quote|extract|cite)\s+(?:from\s+)?(?:private|high-risk)\s+(?:source|book|file|body|chapter|text)/i,
  /(?:^|\s)(?:invent|fabricate|make up)\s+(?:evidence|citations?|quotes?|user notes?|legal sidecars?|project facts?|playtest)/i,
  /metadata_only\s+(?:can|may|should|is allowed to)\s+(?:support|verify|be verified|promote)/i,
  /promote\s+metadata_only\s+to\s+verified/i
];

const negationPattern = /\b(do not|don't|never|cannot|can't|must not|without|no fake|no invented|not allowed|blocked|failure mode|common failure|risk)\b/i;

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function relativeExists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function readText(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function readJson(relativePath) {
  try {
    return JSON.parse(readText(relativePath));
  } catch (error) {
    fail(`${relativePath} is not valid JSON: ${error.message}`);
    return null;
  }
}

function normalizeArtifactName(value) {
  return String(value || "").trim();
}

function artifactContractCandidates(artifactName) {
  const raw = normalizeArtifactName(artifactName);
  const values = new Set();
  if (!raw) return [];
  values.add(raw);
  values.add(raw.replace("_or_", "_"));
  values.add(raw.replace(/_or_.*/, ""));
  return Array.from(values).map((name) => path.join("agent_output_contracts", `${name}.md`));
}

function hasAnyExistingContract(artifactName) {
  return artifactContractCandidates(artifactName).some(relativeExists);
}

function checkPathExists(owner, field, relativePath) {
  if (!relativePath || typeof relativePath !== "string") {
    fail(`${owner} ${field} must be a non-empty string`);
    return;
  }
  if (!relativeExists(relativePath)) {
    fail(`${owner} ${field} missing path: ${relativePath}`);
  }
}

function checkOptionalPrompt(owner, relativePath) {
  if (!relativePath || typeof relativePath !== "string") {
    fail(`${owner} related_prompt_file must be a non-empty string or explicitly optional in the skill markdown`);
    return;
  }
  if (!relativeExists(relativePath)) {
    fail(`${owner} related_prompt_file missing path: ${relativePath}`);
  }
}

function checkUnsafeInstructions(relativePath, text) {
  const lines = text.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line) continue;
    for (const pattern of unsafeInstructionPatterns) {
      if (pattern.test(line) && !negationPattern.test(line)) {
        fail(`${relativePath}:${index + 1} appears to contain unsafe affirmative instruction: ${line}`);
      }
    }
  }
}

function checkContractFile(relativePath) {
  const text = readText(relativePath);
  const lower = text.toLowerCase();
  for (const label of requiredContractLabels) {
    if (!lower.includes(label)) {
      fail(`${relativePath} missing required output label: ${label}`);
    }
  }
  checkUnsafeInstructions(relativePath, text);
}

function checkSkillFile(skillId, skillFile) {
  const text = readText(skillFile);
  for (const heading of requiredSkillHeadings) {
    if (!text.includes(heading)) {
      fail(`${skillFile} missing heading: ${heading}`);
    }
  }
  if (!/## Files Not To Load[\s\S]*?(?:_private_sources\/|private source|private book)/i.test(text)) {
    fail(`${skillFile} Files Not To Load must explicitly block private sources`);
  }
  if (!/## Source Safety Rules[\s\S]*?(?:do not|never|cannot|metadata-only|metadata_only|unsupported)/i.test(text)) {
    fail(`${skillFile} Source Safety Rules must include a clear safety boundary`);
  }
  checkUnsafeInstructions(skillFile, text);

  const contractMatch = text.match(/agent_output_contracts\/[A-Za-z0-9_\-]+\.md/);
  if (!contractMatch) {
    fail(`${skillFile} must reference an output contract path`);
  } else if (!relativeExists(contractMatch[0])) {
    fail(`${skillFile} references missing output contract: ${contractMatch[0]}`);
  }

  return skillId;
}

const manifest = readJson("AGENT_SKILL_MANIFEST.json");

if (manifest && Array.isArray(manifest.skills)) {
  const seenSkills = new Set();
  for (const skill of manifest.skills) {
    const skillId = skill.skill_id;
    if (!skillId) {
      fail("manifest skill missing skill_id");
      continue;
    }
    if (seenSkills.has(skillId)) {
      fail(`duplicate manifest skill_id: ${skillId}`);
    }
    seenSkills.add(skillId);

    const owner = `manifest skill ${skillId}`;
    const skillFile = path.join("skills", skillId, "SKILL.md");
    checkPathExists(owner, "skill file", skillFile);

    if (Array.isArray(skill.files_to_load)) {
      if (!skill.files_to_load.length) {
        fail(`${owner} files_to_load must not be empty`);
      }
      for (const fileToLoad of skill.files_to_load) {
        checkPathExists(owner, "files_to_load", fileToLoad);
      }
    } else {
      fail(`${owner} files_to_load must be an array`);
    }

    if (Array.isArray(skill.files_not_to_load)) {
      if (!skill.files_not_to_load.some((item) => String(item).includes("_private_sources/"))) {
        fail(`${owner} files_not_to_load must include _private_sources/`);
      }
    } else {
      fail(`${owner} files_not_to_load must be an array`);
    }

    checkPathExists(owner, "related_context_pack", skill.related_context_pack);
    checkOptionalPrompt(owner, skill.related_prompt_file);

    const outputs = Array.isArray(skill.expected_output_artifact)
      ? skill.expected_output_artifact
      : [skill.expected_output_artifact];
    for (const artifact of outputs) {
      if (!artifact) {
        fail(`${owner} expected_output_artifact contains empty value`);
      } else if (!hasAnyExistingContract(artifact)) {
        fail(`${owner} expected_output_artifact has no matching contract: ${artifact}`);
      }
    }

    if (relativeExists(skillFile)) {
      checkSkillFile(skillId, skillFile);
    }
  }
} else {
  fail("AGENT_SKILL_MANIFEST.json must contain a skills array");
}

const contractDir = path.join(root, "agent_output_contracts");
if (!fs.existsSync(contractDir)) {
  fail("missing agent_output_contracts directory");
} else {
  const contractFiles = fs.readdirSync(contractDir)
    .filter((name) => name.endsWith(".md") && name !== "README.md")
    .map((name) => path.join("agent_output_contracts", name));
  if (contractFiles.length < 14) {
    fail(`expected at least 14 output contract files, found ${contractFiles.length}`);
  }
  for (const contractFile of contractFiles) {
    checkContractFile(contractFile);
  }
}

if (errors.length) {
  console.error(JSON.stringify({ result: "FAIL", errors, warnings }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  result: "PASS",
  contracts_checked: fs.existsSync(contractDir)
    ? fs.readdirSync(contractDir).filter((name) => name.endsWith(".md") && name !== "README.md").length
    : 0,
  skills_checked: manifest && Array.isArray(manifest.skills) ? manifest.skills.length : 0,
  warnings
}, null, 2));
