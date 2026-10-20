import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const verifier = fileURLToPath(new URL("../scripts/verify-proof-packet.mjs", import.meta.url));
const evidenceDirectory = "docs/project/evidence";
const packetDirectory = `${evidenceDirectory}/packets/EXP-20260924-001`;
const manifestPath = `${evidenceDirectory}/EXP-20260924-001-source-manifest.md`;
const packetPaths = [
  "BACKLOG.md",
  "PROJECT_STATE.md",
  "README.md",
  "content/techniques/discover/constraint-compilation.md",
  "docs/project/EXPLORATIONS.md",
  "EXP-20260924-001-practitioner-brief.md"
];

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ai-leverage-packet-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const digest = "9c45da1b799a603c167323bd7ed4f52034ec28ea5e04373045a9c11f1ddc5446";
  for (const relativePath of packetPaths) {
    const target = path.join(root, packetDirectory, relativePath);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, "frozen\n");
  }
  fs.writeFileSync(path.join(root, manifestPath), [
    "# Frozen packet",
    "| Packet path | SHA-256 |",
    "| --- | --- |",
    ...packetPaths.map((name) => `| \`${name}\` | \`${digest}\` |`),
    ""
  ].join("\n"));
  return root;
}

function verify(root) {
  return spawnSync(process.execPath, [verifier], { cwd: root, encoding: "utf8" });
}

test("a complete packet verifies without Git history or network access", (t) => {
  const root = fixture(t);
  const result = verify(root);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /6 files verified/);
  assert.equal(fs.existsSync(path.join(root, ".git")), false);
});

test("changed frozen bytes fail verification", (t) => {
  const root = fixture(t);
  fs.appendFileSync(path.join(root, packetDirectory, "README.md"), "changed\n");
  const result = verify(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /SHA-256 mismatch.*README\.md/);
});

test("a missing packet file fails verification", (t) => {
  const root = fixture(t);
  fs.unlinkSync(path.join(root, packetDirectory, "README.md"));
  const result = verify(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /missing.*README\.md/);
});

test("unlisted files fail the six-file packet boundary", (t) => {
  const root = fixture(t);
  fs.writeFileSync(path.join(root, packetDirectory, "prior-result.md"), "not an input\n");
  const result = verify(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /unexpected.*prior-result\.md/);
});

test("symlinked packet files fail even when their bytes match", (t) => {
  const root = fixture(t);
  const target = path.join(root, packetDirectory, "README.md");
  fs.unlinkSync(target);
  fs.symlinkSync("BACKLOG.md", target);
  const result = verify(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /symlink/);
});

test("an empty or duplicate manifest cannot pass as a complete packet", (t) => {
  const root = fixture(t);
  const manifest = path.join(root, manifestPath);
  const original = fs.readFileSync(manifest, "utf8");
  fs.writeFileSync(manifest, "# No hashes\n");
  assert.notEqual(verify(root).status, 0);
  const rows = original.split("\n");
  rows[4] = rows[3];
  fs.writeFileSync(manifest, rows.join("\n"));
  const result = verify(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /duplicate/);
});

test("a manifest path cannot escape the retained packet", (t) => {
  const root = fixture(t);
  const manifest = path.join(root, manifestPath);
  fs.writeFileSync(manifest, fs.readFileSync(manifest, "utf8").replace("`README.md`", "`../README.md`"));
  const result = verify(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /invalid packet path/);
});
