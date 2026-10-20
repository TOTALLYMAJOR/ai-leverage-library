import fs from "node:fs";
import path from "node:path";

const SOURCE_KINDS = new Set([
  "user-request",
  "observed-workflow",
  "correction",
  "failure",
  "external-reference",
  "research"
]);
const SENSITIVITY_LEVELS = new Set(["public", "sanitized"]);

function requireValue(options, name) {
  const value = options[name]?.trim();
  if (!value) throw new Error(`Missing required option --${name.replaceAll("_", "-")}`);
  return value;
}

function quote(value) {
  return JSON.stringify(String(value));
}

function slugify(value) {
  const slug = value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64)
    .replace(/-$/g, "");
  if (!slug) throw new Error("Title must contain at least one letter or number");
  return slug;
}

function localDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function validateDate(value, optionName) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(`${optionName} must use YYYY-MM-DD`);
  }
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) {
    throw new Error(`${optionName} must be a real calendar date`);
  }
}

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

function nextExperimentId(root, started) {
  const compactDate = started.replaceAll("-", "");
  const prefix = `EXP-${compactDate}-`;
  const numbers = walk(path.join(root, "content", "experiments"))
    .map((file) => path.basename(file).match(new RegExp(`^${prefix}(\\d{3})(?:-|\\.)`)))
    .filter(Boolean)
    .map((match) => Number(match[1]));
  const next = Math.max(0, ...numbers) + 1;
  if (next > 999) throw new Error(`No experiment IDs remain for ${started}`);
  return `${prefix}${String(next).padStart(3, "0")}`;
}

function catalogOverlap(root, candidateTechnique) {
  if (!candidateTechnique || candidateTechnique === "unassigned") return [];
  const catalogPath = path.join(root, "catalog.yaml");
  if (!fs.existsSync(catalogPath)) return [];
  const catalog = fs.readFileSync(catalogPath, "utf8");
  const ids = [...catalog.matchAll(/^\s*-?\s*id:\s*["']?([^"'\s]+)["']?\s*$/gm)]
    .map((match) => match[1]);
  return ids.includes(candidateTechnique) ? [candidateTechnique] : [];
}

export function parseArguments(argv) {
  const options = {};
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (!argument.startsWith("--")) throw new Error(`Unexpected argument: ${argument}`);
    const key = argument.slice(2).replaceAll("-", "_");
    if (["write", "retention_authorized"].includes(key)) {
      options[key] = true;
      continue;
    }
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) throw new Error(`Missing value for ${argument}`);
    options[key] = value;
    index += 1;
  }
  return options;
}

export function renderExperiment(metadata) {
  const overlapReview = metadata.overlap.length ? metadata.overlap.join(", ") : "none-found";
  return `---
id: ${metadata.id}
title: ${quote(metadata.title)}
status: proposed
candidate_technique: ${metadata.candidateTechnique}
owner: ${quote(metadata.owner)}
started: ${metadata.started}
completed:
source_kind: ${metadata.sourceKind}
source_reference: ${quote(metadata.sourceReference)}
sensitivity: ${metadata.sensitivity}
retention_authorized: ${metadata.retentionAuthorized}
overlap_review: ${quote(overlapReview)}
---

# ${metadata.title}

## Hypothesis

${metadata.hypothesis}

## Conditions

Not yet run. Before execution, record the model, tools, safe source material, constraints, and meaningful configuration without secrets.

## Method

1. Confirm the source reference is sanitized and retention remains authorized.
2. Define bounded inputs, the expected output contract, and stop conditions.
3. Run the candidate workflow and retain observable side effects.
4. Verify the result against the stated claim.
5. Obtain the required human disposition before changing technique status.

## Results

Not run. No result or outcome is claimed.

## Verification

Pending execution. Verification must match the hypothesis and retain negative evidence.

## Failures and surprises

None observed because the experiment has not run.

## Decision

Proposed. Promote, revise, repeat, or reject only after execution and human review.

## Human authority

AI may prepare this experiment record. An authorized human must approve sensitive inputs, consequential execution, acceptance, and any lifecycle promotion.
`;
}

export function planExperimentIntake(root, options) {
  if ("prompt" in options || "raw_source" in options) {
    throw new Error("Raw prompt or source input is not accepted; provide a sanitized --source-reference instead");
  }
  if (options.write && !options.retention_authorized) {
    throw new Error("Write mode requires explicit retention authorization via --retention-authorized");
  }
  const title = requireValue(options, "title");
  const hypothesis = requireValue(options, "hypothesis");
  const sourceKind = requireValue(options, "source_kind");
  const sourceReference = requireValue(options, "source_reference");
  if (!SOURCE_KINDS.has(sourceKind)) {
    throw new Error(`Unsupported --source-kind: ${sourceKind}`);
  }
  const sensitivity = options.sensitivity?.trim() || "sanitized";
  if (!SENSITIVITY_LEVELS.has(sensitivity)) {
    throw new Error("--sensitivity must be public or sanitized");
  }
  const started = options.started?.trim() || localDate();
  validateDate(started, "--started");
  const candidateTechnique = options.candidate_technique?.trim() || "unassigned";
  if (candidateTechnique !== "unassigned" && !/^AI-[A-Z]+-\d{3}$/.test(candidateTechnique)) {
    throw new Error(`Invalid candidate technique ID: ${candidateTechnique}`);
  }
  const owner = options.owner?.trim() || "unassigned";
  const id = nextExperimentId(root, started);
  const relativePath = path.posix.join(
    "content",
    "experiments",
    "inbox",
    `${id}-${slugify(title)}.md`
  );
  const overlap = catalogOverlap(root, candidateTechnique);
  const metadata = {
    id,
    title,
    hypothesis,
    sourceKind,
    sourceReference,
    sensitivity,
    started,
    candidateTechnique,
    owner,
    overlap,
    retentionAuthorized: Boolean(options.retention_authorized)
  };
  return {
    id,
    path: relativePath,
    written: false,
    overlap,
    content: renderExperiment(metadata)
  };
}

export function writeExperimentPlan(root, plan) {
  const normalizedRoot = path.resolve(root);
  const target = path.resolve(normalizedRoot, plan.path);
  if (!target.startsWith(`${normalizedRoot}${path.sep}`)) {
    throw new Error("Experiment path must remain inside the repository root");
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  try {
    fs.writeFileSync(target, plan.content, { encoding: "utf8", flag: "wx" });
  } catch (error) {
    if (error.code === "EEXIST") throw new Error(`Experiment already exists: ${plan.path}`);
    throw error;
  }
  return { ...plan, written: true };
}
