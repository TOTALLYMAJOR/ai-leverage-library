import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import * as intake from "../scripts/lib/experiment-intake.mjs";

function createFixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ai-leverage-intake-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.writeFileSync(path.join(root, "catalog.yaml"), [
    "schemaVersion: 1",
    "techniques:",
    '  - id: "AI-DISCOVER-001"',
    '    title: "Constraint compilation"',
    ""
  ].join("\n"));
  return root;
}

test("preview plans a sanitized experiment without writing a file", (t) => {
  const root = createFixture(t);
  const plan = intake.planExperimentIntake(root, {
    title: "Independent constraint compilation trial",
    hypothesis: "An independent practitioner can preserve every supplied constraint.",
    source_kind: "user-request",
    source_reference: "sanitized-conversation-2026-09-15",
    candidate_technique: "AI-DISCOVER-001",
    started: "2026-09-15"
  });

  assert.equal(plan.id, "EXP-20260915-001");
  assert.equal(plan.path, "content/experiments/inbox/EXP-20260915-001-independent-constraint-compilation-trial.md");
  assert.equal(plan.written, false);
  assert.deepEqual(plan.overlap, ["AI-DISCOVER-001"]);
  assert.match(plan.content, /retention_authorized: false/);
  assert.match(plan.content, /Not run\. No result or outcome is claimed\./);
  assert.equal(fs.existsSync(path.join(root, plan.path)), false);
});

test("write mode requires explicit retention authorization", (t) => {
  const root = createFixture(t);

  assert.throws(() => intake.planExperimentIntake(root, {
    title: "Independent constraint compilation trial",
    hypothesis: "An independent practitioner can preserve every supplied constraint.",
    source_kind: "user-request",
    source_reference: "sanitized-conversation-2026-09-15",
    candidate_technique: "AI-DISCOVER-001",
    started: "2026-09-15",
    write: true
  }), /retention authorization/i);
});

test("authorized write allocates the next ID and never overwrites", (t) => {
  const root = createFixture(t);
  const inbox = path.join(root, "content", "experiments", "inbox");
  fs.mkdirSync(inbox, { recursive: true });
  fs.writeFileSync(path.join(inbox, "EXP-20260915-001-existing.md"), "existing\n");
  const plan = intake.planExperimentIntake(root, {
    title: "Independent constraint compilation trial",
    hypothesis: "An independent practitioner can preserve every supplied constraint.",
    source_kind: "user-request",
    source_reference: "sanitized-conversation-2026-09-15",
    candidate_technique: "AI-DISCOVER-001",
    started: "2026-09-15",
    write: true,
    retention_authorized: true
  });

  let written;
  assert.doesNotThrow(() => {
    written = intake.writeExperimentPlan(root, plan);
  });
  assert.equal(written.id, "EXP-20260915-002");
  assert.equal(written.written, true);
  assert.match(fs.readFileSync(path.join(root, written.path), "utf8"), /retention_authorized: true/);
  assert.throws(() => intake.writeExperimentPlan(root, plan), /already exists/i);
});

test("unsafe or malformed intake metadata is rejected", (t) => {
  const root = createFixture(t);
  const base = {
    title: "Independent constraint compilation trial",
    hypothesis: "An independent practitioner can preserve every supplied constraint.",
    source_kind: "user-request",
    source_reference: "sanitized-conversation-2026-09-15",
    started: "2026-09-15"
  };

  assert.throws(
    () => intake.planExperimentIntake(root, { ...base, prompt: "raw private prompt" }),
    /raw prompt or source input is not accepted/i
  );
  assert.throws(
    () => intake.planExperimentIntake(root, { ...base, source_kind: "unknown" }),
    /unsupported --source-kind/i
  );
  assert.throws(
    () => intake.planExperimentIntake(root, { ...base, started: "2026-02-30" }),
    /real calendar date/i
  );
  assert.throws(
    () => intake.planExperimentIntake(root, { ...base, title: "" }),
    /missing required option --title/i
  );
});

test("invalid candidate technique IDs are rejected before writing", (t) => {
  const root = createFixture(t);

  assert.throws(() => intake.planExperimentIntake(root, {
    title: "Independent constraint compilation trial",
    hypothesis: "An independent practitioner can preserve every supplied constraint.",
    source_kind: "user-request",
    source_reference: "sanitized-conversation-2026-09-15",
    candidate_technique: "not-a-technique-id",
    started: "2026-09-15",
    write: true,
    retention_authorized: true
  }), /invalid candidate technique/i);
});

test("CLI arguments preserve values and explicit authority flags", () => {
  const options = intake.parseArguments([
    "--title", "Candidate",
    "--source-kind", "failure",
    "--write",
    "--retention-authorized"
  ]);

  assert.deepEqual(options, {
    title: "Candidate",
    source_kind: "failure",
    write: true,
    retention_authorized: true
  });
  assert.throws(() => intake.parseArguments(["--title"]), /missing value for --title/i);
});
