import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const STATE_PATH = path.join(ROOT, ".project", "state.json");
const REQUIRED_FILES = [
  "PROJECT_STATE.md",
  ".project/state.json",
  "schema/project-state.schema.json",
  "docs/project/CAPABILITIES.md",
  "docs/project/DECISIONS.md",
  "docs/project/EXPLORATIONS.md",
  "docs/project/PROOF.md",
  "docs/project/BLOCKERS.md",
  "docs/project/EXECUTIVE_STATE.md"
];
const MARKDOWN_LINK_FILES = [
  "README.md",
  "CATALOG.md",
  "PROJECT_STATE.md",
  "docs/project/CAPABILITIES.md",
  "docs/project/DECISIONS.md",
  "docs/project/EXPLORATIONS.md",
  "docs/project/PROOF.md",
  "docs/project/BLOCKERS.md",
  "docs/project/EXECUTIVE_STATE.md"
];
const REQUIRED_TOP_LEVEL = [
  "schemaVersion",
  "reconciledAt",
  "validationPolicy",
  "project",
  "goals",
  "capabilities",
  "journeys",
  "decisions",
  "integrations",
  "risks",
  "blockers",
  "proofEvents",
  "commercialEvidence",
  "nextActions"
];
const REQUIRED_CAPABILITY_FIELDS = [
  "id",
  "name",
  "description",
  "lifecycle_state",
  "confidence",
  "evidence",
  "dependencies",
  "blockers",
  "last_verified",
  "owner_or_authority",
  "is_current"
];
const LIFECYCLE_STATES = new Set([
  "IDEA",
  "SPECIFIED",
  "DESIGNED",
  "IMPLEMENTED",
  "TESTED",
  "VERIFIED",
  "DEPLOYED",
  "USED",
  "COMMERCIALLY_PROVEN",
  "DEPRECATED",
  "BLOCKED"
]);
const CONFIDENCE_LEVELS = new Set(["HIGH", "MEDIUM", "LOW"]);
const PLACEHOLDER_PATTERN = /\b(?:UNKNOWN|UNVERIFIED|TBD|TODO|YYYY-MM-DD)\b/;
const HIGH_ASSURANCE_STATES = new Set([
  "VERIFIED",
  "DEPLOYED",
  "USED",
  "COMMERCIALLY_PROVEN"
]);

const errors = [];

function addError(message) {
  errors.push(message);
}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function readJson(relativePath) {
  try {
    return JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), "utf8"));
  } catch (error) {
    addError(`${relativePath}: ${error.message}`);
    return null;
  }
}

function isRepositoryPath(value) {
  if (typeof value !== "string" || value.includes(" ") || value.includes("://")) return false;
  return value.includes("/") || /(?:^|\.)(?:md|json|ya?ml|mjs)$/.test(value) || value === "LICENSE";
}

function checkRepositoryPath(relativePath, context) {
  if (!isRepositoryPath(relativePath)) return;
  if (path.isAbsolute(relativePath) || relativePath.split("/").includes("..")) {
    addError(`${context}: evidence path must stay repository-relative: ${relativePath}`);
    return;
  }
  if (!fs.existsSync(path.join(ROOT, relativePath))) {
    addError(`${context}: referenced file does not exist: ${relativePath}`);
  }
}

function visitEvidence(value, context) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => visitEvidence(item, `${context}[${index}]`));
    return;
  }
  if (typeof value === "string") {
    checkRepositoryPath(value, context);
    return;
  }
  if (!isRecord(value)) return;
  if (typeof value.path === "string") checkRepositoryPath(value.path, `${context}.path`);
  for (const [key, child] of Object.entries(value)) {
    if (key !== "path" && (Array.isArray(child) || isRecord(child))) {
      visitEvidence(child, `${context}.${key}`);
    }
  }
}

function checkUniqueIds(items, collectionName) {
  const ids = new Set();
  for (const [index, item] of items.entries()) {
    if (!isRecord(item) || typeof item.id !== "string" || !item.id) {
      addError(`${collectionName}[${index}]: missing string id`);
      continue;
    }
    if (ids.has(item.id)) addError(`${collectionName}: duplicate id ${item.id}`);
    ids.add(item.id);
  }
  return ids;
}

function parseDate(value, context) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    addError(`${context}: expected YYYY-MM-DD`);
    return null;
  }
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) {
    addError(`${context}: invalid date ${value}`);
    return null;
  }
  return date;
}

function checkRecordedTest(evidence, capabilityId, packageJson) {
  if (!isRecord(evidence) || evidence.type !== "test-result" || evidence.outcome !== "PASS") return;
  if (!evidence.path) {
    addError(`${capabilityId}: passing test result lacks a test or validator path`);
  }
  const commandMatch = typeof evidence.command === "string"
    ? evidence.command.match(/^npm run ([\w:-]+)$/)
    : null;
  if (commandMatch && !packageJson.scripts?.[commandMatch[1]]) {
    addError(`${capabilityId}: passing test command no longer exists in package.json: ${evidence.command}`);
  }
}

function checkMarkdownLinks(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) return;
  const source = fs.readFileSync(absolutePath, "utf8");
  const links = source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g);
  for (const match of links) {
    const target = match[1].trim().replace(/^<|>$/g, "").split("#", 1)[0];
    if (!target || /^(?:https?:|mailto:)/.test(target)) continue;
    const resolved = path.resolve(ROOT, path.dirname(relativePath), target);
    const rootPrefix = `${ROOT}${path.sep}`;
    if (resolved !== ROOT && !resolved.startsWith(rootPrefix)) {
      addError(`${relativePath}: link escapes the repository: ${target}`);
    } else if (!fs.existsSync(resolved)) {
      addError(`${relativePath}: linked file does not exist: ${target}`);
    }
  }
}

for (const relativePath of REQUIRED_FILES) {
  if (!fs.existsSync(path.join(ROOT, relativePath))) addError(`missing required file: ${relativePath}`);
}
for (const relativePath of MARKDOWN_LINK_FILES) checkMarkdownLinks(relativePath);

const state = fs.existsSync(STATE_PATH) ? readJson(".project/state.json") : null;
const schema = readJson("schema/project-state.schema.json");
const packageJson = readJson("package.json") ?? {};

if (schema && schema.$schema !== "https://json-schema.org/draft/2020-12/schema") {
  addError("schema/project-state.schema.json: expected JSON Schema draft 2020-12");
}

if (state) {
  for (const key of REQUIRED_TOP_LEVEL) {
    if (!(key in state)) addError(`.project/state.json: missing top-level field ${key}`);
  }
  if (state.schemaVersion !== 1) addError(".project/state.json: schemaVersion must equal 1");
  parseDate(state.reconciledAt, ".project/state.json reconciledAt");

  for (const key of [
    "goals",
    "capabilities",
    "journeys",
    "decisions",
    "integrations",
    "risks",
    "blockers",
    "proofEvents",
    "commercialEvidence",
    "nextActions"
  ]) {
    if (!Array.isArray(state[key])) addError(`.project/state.json: ${key} must be an array`);
  }

  const capabilities = Array.isArray(state.capabilities) ? state.capabilities : [];
  const blockers = Array.isArray(state.blockers) ? state.blockers : [];
  const journeys = Array.isArray(state.journeys) ? state.journeys : [];
  const proofEvents = Array.isArray(state.proofEvents) ? state.proofEvents : [];
  const capabilityIds = checkUniqueIds(capabilities, "capabilities");
  const blockerIds = checkUniqueIds(blockers, "blockers");
  checkUniqueIds(Array.isArray(state.goals) ? state.goals : [], "goals");
  checkUniqueIds(journeys, "journeys");
  checkUniqueIds(Array.isArray(state.decisions) ? state.decisions : [], "decisions");
  checkUniqueIds(Array.isArray(state.integrations) ? state.integrations : [], "integrations");
  checkUniqueIds(Array.isArray(state.risks) ? state.risks : [], "risks");
  checkUniqueIds(proofEvents, "proofEvents");
  checkUniqueIds(Array.isArray(state.commercialEvidence) ? state.commercialEvidence : [], "commercialEvidence");

  const maxAgeDays = state.validationPolicy?.maxVerificationAgeDays;
  if (!Number.isInteger(maxAgeDays) || maxAgeDays < 1) {
    addError("validationPolicy.maxVerificationAgeDays must be a positive integer");
  }
  const now = new Date();

  for (const [index, capability] of capabilities.entries()) {
    if (!isRecord(capability)) {
      addError(`capabilities[${index}]: must be an object`);
      continue;
    }
    for (const field of REQUIRED_CAPABILITY_FIELDS) {
      if (!(field in capability)) addError(`${capability.id ?? `capabilities[${index}]`}: missing ${field}`);
    }
    if (!LIFECYCLE_STATES.has(capability.lifecycle_state)) {
      addError(`${capability.id}: invalid lifecycle_state ${capability.lifecycle_state}`);
    }
    if (!CONFIDENCE_LEVELS.has(capability.confidence)) {
      addError(`${capability.id}: invalid confidence ${capability.confidence}`);
    }
    if (!Array.isArray(capability.evidence)) addError(`${capability.id}: evidence must be an array`);
    if (!Array.isArray(capability.dependencies)) addError(`${capability.id}: dependencies must be an array`);
    if (!Array.isArray(capability.blockers)) addError(`${capability.id}: blockers must be an array`);

    const verifiedAt = parseDate(capability.last_verified, `${capability.id}.last_verified`);
    if (verifiedAt && Number.isInteger(maxAgeDays)) {
      const ageDays = Math.floor((now - verifiedAt) / 86_400_000);
      if (ageDays > maxAgeDays) {
        addError(`${capability.id}: verification is stale (${ageDays} days; maximum ${maxAgeDays})`);
      }
      if (ageDays < -1) addError(`${capability.id}: last_verified is in the future`);
    }

    for (const dependency of capability.dependencies ?? []) {
      if (!capabilityIds.has(dependency)) addError(`${capability.id}: unresolved capability dependency ${dependency}`);
    }
    for (const blocker of capability.blockers ?? []) {
      if (!blockerIds.has(blocker)) addError(`${capability.id}: unresolved blocker reference ${blocker}`);
    }
    if (capability.lifecycle_state === "BLOCKED" && !(capability.blockers?.length > 0)) {
      addError(`${capability.id}: BLOCKED capability must reference a blocker`);
    }
    if (capability.lifecycle_state === "DEPRECATED" && capability.is_current !== false) {
      addError(`${capability.id}: deprecated capability cannot be described as current`);
    }
    if (HIGH_ASSURANCE_STATES.has(capability.lifecycle_state) && PLACEHOLDER_PATTERN.test(JSON.stringify(capability))) {
      addError(`${capability.id}: ${capability.lifecycle_state} capability contains unresolved placeholders`);
    }

    const evidence = Array.isArray(capability.evidence) ? capability.evidence : [];
    for (const item of evidence) checkRecordedTest(item, capability.id, packageJson);
    if (capability.lifecycle_state === "TESTED" && !evidence.some((item) => isRecord(item) && item.type === "test-result" && item.outcome === "PASS")) {
      addError(`${capability.id}: TESTED requires a passing test-result evidence item`);
    }
    const requiredEvidenceType = {
      VERIFIED: "verification",
      DEPLOYED: "deployment",
      USED: "usage",
      COMMERCIALLY_PROVEN: "commercial"
    }[capability.lifecycle_state];
    if (requiredEvidenceType && !evidence.some((item) => isRecord(item) && item.type === requiredEvidenceType)) {
      addError(`${capability.id}: ${capability.lifecycle_state} requires ${requiredEvidenceType} evidence`);
    }
  }

  for (const journey of journeys) {
    for (const blocker of journey.blockers ?? []) {
      if (!blockerIds.has(blocker)) addError(`${journey.id}: unresolved blocker reference ${blocker}`);
    }
  }
  if (journeys.filter((journey) => journey.kind === "primary").length !== 1) {
    addError("journeys: exactly one primary journey is required");
  }

  for (const blocker of blockers) {
    for (const dependency of blocker.dependencies ?? []) {
      if (!capabilityIds.has(dependency)) addError(`${blocker.id}: unresolved capability dependency ${dependency}`);
    }
  }

  const nextProofEvents = proofEvents.filter((event) => event.status === "NEXT");
  if (nextProofEvents.length !== 1) {
    addError(`proofEvents: expected exactly one NEXT proof event, found ${nextProofEvents.length}`);
  }
  for (const proofEvent of proofEvents) {
    for (const blocker of proofEvent.currentBlockers ?? []) {
      if (!blockerIds.has(blocker)) addError(`${proofEvent.id}: unresolved blocker reference ${blocker}`);
    }
  }

  if ((state.nextActions?.length ?? 0) > 5) addError("nextActions: maximum is five");
  for (const collectionName of [
    "goals",
    "capabilities",
    "journeys",
    "decisions",
    "integrations",
    "risks",
    "blockers",
    "commercialEvidence"
  ]) {
    for (const item of state[collectionName] ?? []) {
      if (item.evidence) visitEvidence(item.evidence, `${collectionName}.${item.id}.evidence`);
    }
  }

  const documentChecks = [
    ["docs/project/CAPABILITIES.md", capabilities.map((item) => item.id)],
    ["docs/project/DECISIONS.md", (state.decisions ?? []).map((item) => item.id)],
    ["docs/project/BLOCKERS.md", blockers.map((item) => item.id)]
  ];
  for (const [relativePath, ids] of documentChecks) {
    if (!fs.existsSync(path.join(ROOT, relativePath))) continue;
    const source = fs.readFileSync(path.join(ROOT, relativePath), "utf8");
    for (const id of ids) {
      if (!source.includes(id)) addError(`${relativePath}: missing ledger id ${id}`);
    }
  }
  if (fs.existsSync(path.join(ROOT, "docs/project/CAPABILITIES.md"))) {
    const source = fs.readFileSync(path.join(ROOT, "docs/project/CAPABILITIES.md"), "utf8");
    for (const capability of capabilities) {
      const registerLine = source.split(/\r?\n/).find((line) => line.includes(capability.id));
      if (registerLine && !registerLine.includes(`\`${capability.lifecycle_state}\``)) {
        addError(`docs/project/CAPABILITIES.md: ${capability.id} does not match ledger state ${capability.lifecycle_state}`);
      }
    }
  }

  if (fs.existsSync(path.join(ROOT, "PROJECT_STATE.md"))) {
    const projectState = fs.readFileSync(path.join(ROOT, "PROJECT_STATE.md"), "utf8");
    const headings = projectState.match(/^## NEXT PROOF EVENT$/gm) ?? [];
    if (headings.length !== 1) {
      addError(`PROJECT_STATE.md: expected exactly one canonical NEXT PROOF EVENT heading, found ${headings.length}`);
    }
    if (nextProofEvents[0] && !projectState.includes(nextProofEvents[0].id)) {
      addError(`PROJECT_STATE.md: missing next proof event id ${nextProofEvents[0].id}`);
    }
  }
  if (nextProofEvents[0] && fs.existsSync(path.join(ROOT, "docs/project/EXECUTIVE_STATE.md"))) {
    const executiveState = fs.readFileSync(path.join(ROOT, "docs/project/EXECUTIVE_STATE.md"), "utf8");
    if (!executiveState.includes(nextProofEvents[0].id)) {
      addError(`docs/project/EXECUTIVE_STATE.md: missing next proof event id ${nextProofEvents[0].id}`);
    }
  }
}

if (errors.length) {
  console.error("Canonical project state validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Canonical project state validation passed: ${state.capabilities.length} capabilities, ${state.blockers.length} blockers, 1 next proof event.`);
