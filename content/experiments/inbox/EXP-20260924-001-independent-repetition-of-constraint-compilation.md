---
id: EXP-20260924-001
title: "Independent repetition of Constraint Compilation"
status: proposed
candidate_technique: AI-DISCOVER-001
owner: "repository maintainer"
started: 2026-09-24
completed:
source_kind: user-request
source_reference: "completion-goal-proof-002-sanitized"
sensitivity: sanitized
retention_authorized: true
overlap_review: "AI-DISCOVER-001"
---

# Independent repetition of Constraint Compilation

## Hypothesis

A second practitioner who did not author the technique can independently produce a source-traced outcome contract under the documented inspection boundary, with materially consistent authority constraints and retained differences from PROOF-001.

## Conditions

Not yet run.

- Purpose: repeat `PROOF-001` without treating its accepted result as reproducibility evidence.
- Frozen source revision: `f0756da78ad0b985b0ac4997f5856ad4168d5e64`, matching `PROOF-001`.
- Source packet: `README.md`, `PROJECT_STATE.md`, `BACKLOG.md`, and `docs/project/EXPLORATIONS.md` from the frozen revision.
- Technique: `content/techniques/discover/constraint-compilation.md` from the frozen revision.
- Practitioner boundary: use a practitioner who did not author the technique or `PROOF-001` artifact and who cannot inspect `docs/project/evidence/EXP-20260915-001-outcome-contract.md` before returning a final result.
- Inspection boundary: provide an isolated packet containing only the named source files, technique, and task brief. Do not expose repository history, current project state, prior result, operational skills, or unrelated workspace files to the practitioner.
- Authority boundary: the practitioner may produce an outcome contract only. No repository write, implementation, deployment, promotion, or lifecycle authority is granted.
- Reviewer: an authorized human must accept or reject the repetition after the controller compares it with `PROOF-001`.

## Method

1. Confirm practitioner non-authorship and record the basis for that conclusion.
2. Build the isolated source packet from the frozen revision and record SHA-256 fingerprints for every supplied file.
3. Give the practitioner the bounded searchable-documentation/PWA workflow and require the complete Constraint Compilation output contract plus one failure-scenario test.
4. Retain the practitioner output, runtime identity evidence, launch failures, inspection deviations, and observable side effects without exposing the `PROOF-001` result.
5. After the practitioner finalizes its result, compare constraint coverage, source traceability, authority boundaries, unresolved decisions, and failure behavior with `PROOF-001`.
6. Run claim-matched verification and retain negative evidence. Do not infer reproducibility from textual similarity alone.
7. Obtain an authorized human disposition before changing experiment status, blocker state, capability state, or technique evidence level.

## Results

Not run. No result or outcome is claimed.

## Verification

Pending execution. Verification must establish all of the following:

- every supplied file matches its recorded frozen-revision fingerprint;
- every compiled constraint traces to the supplied packet;
- the practitioner did not inspect the prior outcome contract before finalizing;
- the result preserves scope and authority boundaries;
- differences from `PROOF-001` are classified as compatible variation, contradiction, omission, or unsupported addition;
- the failure-scenario test detects at least one attempted upgrade of a hypothesis or preference into authority;
- an authorized human accepts or rejects the repetition with retained reasons.

## Failures and surprises

None observed because the experiment has not run.

## Decision

Proposed. Promote, revise, repeat, or reject only after execution and human review.

## Human authority

AI may prepare the isolated packet, run mechanical integrity checks, and compare retained outputs. An authorized human must approve the practitioner assignment, any inspection-boundary deviation, the final disposition, removal of `BLK-001`, and any lifecycle or evidence-level change. This proposal does not itself authorize execution by a practitioner who fails the non-authorship requirement.
