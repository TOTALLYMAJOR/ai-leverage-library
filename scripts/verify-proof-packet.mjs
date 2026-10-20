#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const root = process.cwd();
const evidenceDirectory = path.join(root, "docs", "project", "evidence");
const packetDirectory = path.join(evidenceDirectory, "packets", "EXP-20260924-001");
const manifestPath = path.join(evidenceDirectory, "EXP-20260924-001-source-manifest.md");

function packetFiles(directory, prefix = "") {
  if (!fs.lstatSync(directory).isDirectory()) throw new Error("packet must be a regular directory, not a symlink");
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isSymbolicLink()) throw new Error(`packet contains a symlink: ${relativePath}`);
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...packetFiles(target, relativePath));
    else if (entry.isFile()) files.push(relativePath);
    else throw new Error(`packet contains a non-regular file: ${relativePath}`);
  }
  return files;
}

try {
  const manifest = fs.readFileSync(manifestPath, "utf8");
  const expected = new Map();
  for (const match of manifest.matchAll(/^\| `([^`]+)` \| `([a-f0-9]{64})` \|\r?$/gm)) {
    const [, relativePath, digest] = match;
    if (path.posix.isAbsolute(relativePath) || relativePath.includes("\\")
      || relativePath.split("/").some((part) => !part || part === "." || part === "..")) {
      throw new Error(`invalid packet path: ${relativePath}`);
    }
    if (expected.has(relativePath)) throw new Error(`duplicate manifest path: ${relativePath}`);
    expected.set(relativePath, digest);
  }
  if (expected.size !== 6) throw new Error("manifest must declare exactly six unique packet files");
  const actual = new Set(packetFiles(packetDirectory));
  for (const relativePath of actual) {
    if (!expected.has(relativePath)) throw new Error(`unexpected packet file: ${relativePath}`);
  }
  for (const [relativePath, digest] of expected) {
    if (!actual.has(relativePath)) throw new Error(`missing packet file: ${relativePath}`);
    const bytes = fs.readFileSync(path.join(packetDirectory, relativePath));
    const actualDigest = createHash("sha256").update(bytes).digest("hex");
    if (actualDigest !== digest) throw new Error(`SHA-256 mismatch: ${relativePath}`);
  }
  process.stdout.write("Frozen PROOF-002 packet: 6 files verified against the retained manifest. No acceptance or reproducibility verdict is implied.\n");
} catch (error) {
  process.stderr.write(`Frozen packet verification failed: ${error.message}\n`);
  process.exitCode = 1;
}
