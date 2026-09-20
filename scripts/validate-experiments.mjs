#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REQUIRED_SECTIONS = [
  "Hypothesis",
  "Conditions",
  "Method",
  "Results",
  "Verification",
  "Failures and surprises",
  "Decision",
  "Human authority"
];
const PLACEHOLDER_PATTERN = /\b(?:EXP-YYYYMMDD-000|Experiment title|A falsifiable claim|AI-CATEGORY-000|YYYY-MM-DD)\b/i;
const REQUIRED_FIELDS = [
  "id",
  "title",
  "status",
  "candidate_technique",
  "owner",
  "started",
  "source_kind",
  "source_reference",
  "sensitivity",
  "retention_authorized",
  "overlap_review"
];
const DIRECTORY_STATUS = {
  inbox: "proposed",
  active: "active",
  rejected: "rejected"
};
const SOURCE_KINDS = new Set([
  "user-request",
  "observed-workflow",
  "correction",
  "failure",
  "external-reference",
  "research"
]);

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

function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

export function validateExperiments(root) {
  const files = walk(path.join(root, "content", "experiments"))
    .filter((file) => file.endsWith(".md"));
  const errors = [];
  const seenIds = new Map();
  for (const file of files) {
    const relativePath = path.relative(root, file).replaceAll(path.sep, "/");
    const source = fs.readFileSync(file, "utf8");
    if (PLACEHOLDER_PATTERN.test(source)) {
      errors.push(`${relativePath}: unresolved placeholder text`);
    }
    const headings = new Set(
      [...source.matchAll(/^## (.+)$/gm)].map((match) => match[1].trim())
    );
    for (const section of REQUIRED_SECTIONS) {
      if (!headings.has(section)) errors.push(`${relativePath}: missing section: ${section}`);
    }
    let metadata;
    try {
      metadata = parseFrontmatter(source, relativePath);
    } catch (error) {
      errors.push(error.message);
      continue;
    }
    for (const field of REQUIRED_FIELDS) {
      if (!metadata[field]) errors.push(`${relativePath}: missing required field ${field}`);
    }
    const idMatch = metadata.id?.match(/^EXP-(\d{4})(\d{2})(\d{2})-(\d{3})$/);
    if (metadata.id && !idMatch) errors.push(`${relativePath}: invalid experiment id ${metadata.id}`);
    if (metadata.id && seenIds.has(metadata.id)) {
      errors.push(`${relativePath}: duplicate experiment id ${metadata.id}; first seen in ${seenIds.get(metadata.id)}`);
    } else if (metadata.id) {
      seenIds.set(metadata.id, relativePath);
    }
    if (metadata.id && !path.basename(file).startsWith(`${metadata.id}-`)) {
      errors.push(`${relativePath}: filename must begin with ${metadata.id}-`);
    }
    const directory = path.basename(path.dirname(file));
    const requiredStatus = DIRECTORY_STATUS[directory];
    if (!requiredStatus) {
      errors.push(`${relativePath}: unsupported lifecycle directory ${directory}`);
    } else if (metadata.status !== requiredStatus) {
      errors.push(`${relativePath}: ${directory} directory requires status ${requiredStatus}`);
    }
    if (metadata.started && !validDate(metadata.started)) {
      errors.push(`${relativePath}: started must use a real YYYY-MM-DD date`);
    }
    if (idMatch && metadata.started) {
      const idDate = `${idMatch[1]}-${idMatch[2]}-${idMatch[3]}`;
      if (metadata.started !== idDate) {
        errors.push(`${relativePath}: started date must match experiment ID date ${idDate}`);
      }
    }
    if (metadata.completed && !validDate(metadata.completed)) {
      errors.push(`${relativePath}: completed must use a real YYYY-MM-DD date`);
    }
    if (["proposed", "active"].includes(metadata.status) && metadata.completed) {
      errors.push(`${relativePath}: ${metadata.status} experiment cannot have a completed date`);
    }
    if (metadata.status === "rejected" && !metadata.completed) {
      errors.push(`${relativePath}: rejected experiment requires a completed date`);
    }
    if (metadata.source_kind && !SOURCE_KINDS.has(metadata.source_kind)) {
      errors.push(`${relativePath}: unsupported source_kind ${metadata.source_kind}`);
    }
    if (metadata.sensitivity && !["public", "sanitized"].includes(metadata.sensitivity)) {
      errors.push(`${relativePath}: sensitivity must be public or sanitized`);
    }
    if (metadata.retention_authorized !== "true") {
      errors.push(`${relativePath}: retention_authorized must be true`);
    }
    if (metadata.candidate_technique
      && metadata.candidate_technique !== "unassigned"
      && !/^AI-[A-Z]+-\d{3}$/.test(metadata.candidate_technique)) {
      errors.push(`${relativePath}: invalid candidate_technique ${metadata.candidate_technique}`);
    }
  }
  return { count: files.length, errors };
}

const isMain = process.argv[1]
  && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isMain) {
  const result = validateExperiments(process.cwd());
  if (result.errors.length) {
    process.stderr.write("Experiment validation failed:\n");
    for (const error of result.errors) process.stderr.write(`- ${error}\n`);
    process.exitCode = 1;
  } else {
    process.stdout.write(`Experiment validation passed: ${result.count} record(s).\n`);
  }
}
