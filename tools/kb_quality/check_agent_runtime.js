const fs = require("fs");
const path = require("path");

const root = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();

const requiredRootFiles = [
  "AGENT_START.md",
  "AGENT_RUNTIME_OVERVIEW.md",
  "AGENT_SKILL_MANIFEST.md",
  "AGENT_SKILL_MANIFEST.json",
  "AGENT_ROUTER.md",
  "AGENT_CONTEXT_LOADING_PROTOCOL.md",
  "AGENT_OUTPUT_CONTRACTS.md",
  "AGENT_SOURCE_SAFETY_RULES.md",
  "AGENT_DO_NOT_LOAD.md",
  "CODEX_USAGE_GUIDE.md",
  "AGENT_RUNTIME_ACCEPTANCE_CRITERIA.md"
];

const requiredSkillHeadings = [
  "## Skill ID",
  "## Purpose",
  "## When To Use",
  "## When Not To Use",
  "## Required User Input",
  "## Optional User Input",
  "## Files To Load",
  "## Files Not To Load",
  "## Related Context Pack",
  "## Related Prompt File",
  "## Related KB Domains",
  "## Related Cards/Lenses/Workflows",
  "## Output Artifact",
  "## Output Contract",
  "## Source Safety Rules",
  "## Confidence Rules",
  "## Minimum Questions To Ask",
  "## Execution Protocol",
  "## Common Failure Modes",
  "## Acceptance Criteria"
];

const forbiddenLoadFragments = [
  "_private_sources/",
  "AI_MASTER_BENCHMARK_",
  "kb/11_import_export/export/",
  "docs/deprecated/",
  "50-game-design-masters-kb/",
  "kb-tools/"
];

const errors = [];

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

for (const file of requiredRootFiles) {
  if (!exists(file)) errors.push(`missing required agent runtime file: ${file}`);
}

let manifest;
try {
  manifest = JSON.parse(fs.readFileSync(path.join(root, "AGENT_SKILL_MANIFEST.json"), "utf8"));
} catch (error) {
  errors.push(`AGENT_SKILL_MANIFEST.json is not valid JSON: ${error.message}`);
}

if (manifest) {
  if (!Array.isArray(manifest.skills)) {
    errors.push("AGENT_SKILL_MANIFEST.json must contain skills array");
  } else if (manifest.skills.length < 14) {
    errors.push(`expected at least 14 skills, found ${manifest.skills.length}`);
  } else {
    for (const skill of manifest.skills) {
      if (!skill.skill_id) {
        errors.push("skill missing skill_id");
        continue;
      }

      const skillFile = path.join("skills", skill.skill_id, "SKILL.md");
      if (!exists(skillFile)) {
        errors.push(`missing SKILL.md for ${skill.skill_id}`);
        continue;
      }

      const text = fs.readFileSync(path.join(root, skillFile), "utf8");
      for (const heading of requiredSkillHeadings) {
        if (!text.includes(heading)) {
          errors.push(`${skillFile} missing heading: ${heading}`);
        }
      }

      const output = skill.expected_output_artifact;
      const outputFiles = Array.isArray(output) ? output : [output];
      for (const rawOutput of outputFiles) {
        if (!rawOutput) continue;
        const candidates = [
          path.join("agent_output_contracts", `${rawOutput}.md`),
          path.join("agent_output_contracts", `${String(rawOutput).replace("_or_", "_")}.md`)
        ];
        const hasContract = candidates.some((candidate) => exists(candidate));
        if (!hasContract && !String(rawOutput).includes("_or_")) {
          errors.push(`${skill.skill_id} references missing output contract: ${rawOutput}`);
        }
      }

      const filesToLoad = Array.isArray(skill.files_to_load) ? skill.files_to_load : [];
      for (const loadedFile of filesToLoad) {
        for (const forbidden of forbiddenLoadFragments) {
          if (loadedFile.includes(forbidden)) {
            errors.push(`${skill.skill_id} files_to_load includes forbidden path: ${loadedFile}`);
          }
        }
      }
    }
  }
}

const contractsDir = path.join(root, "agent_output_contracts");
if (!fs.existsSync(contractsDir)) {
  errors.push("missing agent_output_contracts directory");
} else {
  const contracts = fs.readdirSync(contractsDir).filter((name) => name.endsWith(".md") && name !== "README.md");
  if (contracts.length < 14) {
    errors.push(`expected at least 14 output contracts, found ${contracts.length}`);
  }
}

if (errors.length) {
  console.error(JSON.stringify({ result: "FAIL", errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  result: "PASS",
  skills: manifest && Array.isArray(manifest.skills) ? manifest.skills.length : 0
}, null, 2));
