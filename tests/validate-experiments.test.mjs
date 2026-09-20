import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

function createFixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ai-leverage-experiments-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  for (const directory of ["inbox", "active", "rejected"]) {
    fs.mkdirSync(path.join(root, "content", "experiments", directory), { recursive: true });
  }
  return root;
}

function validExperiment(overrides = {}) {
  const values = {
    id: "EXP-20260915-001",
    title: "Independent constraint compilation trial",
    status: "proposed",
    candidateTechnique: "AI-DISCOVER-001",
    owner: "unassigned",
    started: "2026-09-15",
    completed: "",
    sourceKind: "user-request",
    sourceReference: "sanitized-conversation-2026-09-15",
    sensitivity: "sanitized",
    retentionAuthorized: "true",
    ...overrides
  };
  return `---
id: ${values.id}
title: "${values.title}"
status: ${values.status}
candidate_technique: ${values.candidateTechnique}
owner: "${values.owner}"
started: ${values.started}
completed: ${values.completed}
source_kind: ${values.sourceKind}
source_reference: "${values.sourceReference}"
sensitivity: ${values.sensitivity}
retention_authorized: ${values.retentionAuthorized}
overlap_review: "AI-DISCOVER-001"
---

# ${values.title}

## Hypothesis

An independent practitioner can preserve every supplied constraint.

## Conditions

Not yet run under the recorded bounded conditions.

## Method

1. Run the bounded workflow.

## Results

Not run. No result or outcome is claimed.

## Verification

Trace every output constraint to supplied evidence.

## Failures and surprises

None observed because the experiment has not run.

## Decision

Proposed pending execution and review.

## Human authority

An authorized human reviews execution and any lifecycle change.
`;
}

test("a complete proposed experiment record passes validation", async (t) => {
  const root = createFixture(t);
  fs.writeFileSync(
    path.join(root, "content", "experiments", "inbox", "EXP-20260915-001-independent-trial.md"),
    validExperiment()
  );

  let result;
  await assert.doesNotReject(async () => {
    const validation = await import("../scripts/validate-experiments.mjs");
    result = validation.validateExperiments(root);
  });
  assert.equal(result.count, 1);
  assert.deepEqual(result.errors, []);
});

test("template placeholders and missing sections are rejected", async (t) => {
  const root = createFixture(t);
  fs.writeFileSync(
    path.join(root, "content", "experiments", "inbox", "EXP-20260915-001-incomplete.md"),
    validExperiment({ title: "Experiment title" }).replace("## Human authority", "## Unfinished")
  );
  const { validateExperiments } = await import("../scripts/validate-experiments.mjs");

  const result = validateExperiments(root);

  assert.match(result.errors.join("\n"), /unresolved placeholder/i);
  assert.match(result.errors.join("\n"), /missing section: Human authority/i);
});

test("metadata enforces directory state, ID date, and retention authority", async (t) => {
  const root = createFixture(t);
  fs.writeFileSync(
    path.join(root, "content", "experiments", "active", "EXP-20260915-001-independent-trial.md"),
    validExperiment({ started: "2026-09-14", retentionAuthorized: "false" })
  );
  const { validateExperiments } = await import("../scripts/validate-experiments.mjs");

  const result = validateExperiments(root);
  const errors = result.errors.join("\n");

  assert.match(errors, /active directory requires status active/i);
  assert.match(errors, /started date must match experiment ID/i);
  assert.match(errors, /retention_authorized must be true/i);
});

test("records outside lifecycle directories are rejected", async (t) => {
  const root = createFixture(t);
  const other = path.join(root, "content", "experiments", "other");
  fs.mkdirSync(other);
  fs.writeFileSync(
    path.join(other, "EXP-20260915-001-independent-trial.md"),
    validExperiment()
  );
  const { validateExperiments } = await import("../scripts/validate-experiments.mjs");

  const result = validateExperiments(root);

  assert.match(result.errors.join("\n"), /unsupported lifecycle directory other/i);
});

test("duplicate experiment IDs are rejected across lifecycle directories", async (t) => {
  const root = createFixture(t);
  fs.writeFileSync(
    path.join(root, "content", "experiments", "inbox", "EXP-20260915-001-first.md"),
    validExperiment()
  );
  fs.writeFileSync(
    path.join(root, "content", "experiments", "rejected", "EXP-20260915-001-second.md"),
    validExperiment({ status: "rejected", completed: "2026-09-16" })
  );
  const { validateExperiments } = await import("../scripts/validate-experiments.mjs");

  const result = validateExperiments(root);

  assert.match(result.errors.join("\n"), /duplicate experiment id EXP-20260915-001/i);
});
