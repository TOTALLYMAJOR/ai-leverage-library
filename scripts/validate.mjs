import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TECHNIQUE_ROOT = path.join(ROOT, "content", "techniques");
const CATALOG_PATH = path.join(ROOT, "catalog.yaml");
const requiredFiles = [
  "README.md", "CATALOG.md", "catalog.yaml", "CONTRIBUTING.md", "CHANGELOG.md",
  "schema/technique.schema.json", "templates/technique-card.md",
  "templates/playbook.md", "templates/experiment-log.md"
];
const requiredFields = [
  "id", "title", "category", "status", "difficulty", "risk",
  "human_gate", "evidence_level", "last_verified"
];
const allowed = {
  category: new Set(["discover", "decide", "create", "operate", "verify", "compound"]),
  status: new Set(["idea", "experimental", "validated", "field-tested", "deprecated"]),
  difficulty: new Set(["beginner", "intermediate", "advanced"]),
  risk: new Set(["low", "medium", "high"]),
  evidence_level: new Set(["concept", "one-off-demo", "reproducible", "multi-context", "operational"])
};

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

function parseFrontmatter(source, relativePath) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) throw new Error(`${relativePath}: missing YAML frontmatter`);
  const metadata = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const separator = line.indexOf(":");
    if (separator < 1) throw new Error(`${relativePath}: invalid frontmatter line: ${line}`);
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    metadata[key] = value;
  }
  return metadata;
}

function renderCatalog(techniques) {
  const lines = [
    "schemaVersion: 1",
    'generatedFrom: "content/techniques"',
    techniques.length ? "techniques:" : "techniques: []"
  ];
  for (const technique of techniques) {
    lines.push(
      `  - id: ${JSON.stringify(technique.id)}`,
      `    title: ${JSON.stringify(technique.title)}`,
      `    category: ${JSON.stringify(technique.category)}`,
      `    status: ${JSON.stringify(technique.status)}`,
      `    evidenceLevel: ${JSON.stringify(technique.evidence_level)}`,
      `    path: ${JSON.stringify(technique.path)}`
    );
  }
  return `${lines.join("\n")}\n`;
}

const errors = [];
for (const relativePath of requiredFiles) {
  if (!fs.existsSync(path.join(ROOT, relativePath))) errors.push(`missing required file: ${relativePath}`);
}

const ids = new Set();
const techniques = [];
for (const file of walk(TECHNIQUE_ROOT).filter((item) => item.endsWith(".md")).sort()) {
  const relativePath = path.relative(ROOT, file).replaceAll(path.sep, "/");
  try {
    const metadata = parseFrontmatter(fs.readFileSync(file, "utf8"), relativePath);
    for (const field of requiredFields) {
      if (!metadata[field]) errors.push(`${relativePath}: missing required field ${field}`);
    }
    if (metadata.id && !/^AI-[A-Z]+-[0-9]{3}$/.test(metadata.id)) {
      errors.push(`${relativePath}: invalid technique id ${metadata.id}`);
    }
    if (ids.has(metadata.id)) errors.push(`${relativePath}: duplicate technique id ${metadata.id}`);
    ids.add(metadata.id);
    for (const [field, values] of Object.entries(allowed)) {
      if (metadata[field] && !values.has(metadata[field])) {
        errors.push(`${relativePath}: invalid ${field} ${metadata[field]}`);
      }
    }
    if (metadata.category && metadata.category !== relativePath.split("/")[2]) {
      errors.push(`${relativePath}: category must match its directory`);
    }
    if (metadata.last_verified && !/^\d{4}-\d{2}-\d{2}$/.test(metadata.last_verified)) {
      errors.push(`${relativePath}: last_verified must use YYYY-MM-DD`);
    }
    techniques.push({ ...metadata, path: relativePath });
  } catch (error) {
    errors.push(error.message);
  }
}

techniques.sort((left, right) => left.id.localeCompare(right.id));
if (fs.existsSync(CATALOG_PATH)) {
  const expected = renderCatalog(techniques);
  const actual = fs.readFileSync(CATALOG_PATH, "utf8").replaceAll("\r\n", "\n");
  if (actual !== expected) errors.push("catalog.yaml is stale; update it to match the canonical technique cards");
}

if (errors.length) {
  console.error("AI Leverage validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`AI Leverage validation passed: ${techniques.length} technique(s), ${ids.size} unique ID(s).`);
