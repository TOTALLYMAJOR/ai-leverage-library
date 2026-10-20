---
id: EXP-20260924-001
title: "Independent repetition of Constraint Compilation"
status: active
candidate_technique: AI-DISCOVER-001
owner: "repository maintainer"
started: 2026-09-24
completed:
source_kind: user-request
source_reference: "completion-goal-proof-002-sanitized"
sensitivity: sanitized
retention_authorized: true
overlap_review: "AI-DISCOVER-001"
human_disposition: accepted_with_limitations
---

# Independent repetition of Constraint Compilation

## Hypothesis

A second practitioner who did not author the technique can independently produce a source-traced outcome contract under the documented inspection boundary, with materially consistent authority constraints and retained differences from PROOF-001.

## Conditions

Technical repetition completed; the repository owner accepted the bounded result with its documented limitations on 2026-10-20. The [human disposition](../../../docs/project/evidence/EXP-20260924-001-human-disposition.md) records the decision. The execution conditions below remain historical.

- Purpose: repeat `PROOF-001` without treating its accepted result as reproducibility evidence.
- Frozen source revision: `f0756da78ad0b985b0ac4997f5856ad4168d5e64`, matching `PROOF-001`.
- Source packet: `README.md`, `PROJECT_STATE.md`, `BACKLOG.md`, and `docs/project/EXPLORATIONS.md` from the frozen revision.
- Technique: `content/techniques/discover/constraint-compilation.md` from the frozen revision.
- Practitioner brief: `docs/project/evidence/EXP-20260924-001-practitioner-brief.md`.
- Integrity manifest: `docs/project/evidence/EXP-20260924-001-source-manifest.md`.
- Practitioner boundary: use a practitioner who did not author the technique or `PROOF-001` artifact and who cannot inspect `docs/project/evidence/EXP-20260915-001-outcome-contract.md` before returning a final result.
- Inspection boundary: provide an isolated packet containing only the named source files, technique, and task brief. Do not expose repository history, current project state, prior result, operational skills, or unrelated workspace files to the practitioner.
- Authority boundary: the practitioner may produce an outcome contract only. No repository write, implementation, deployment, promotion, or lifecycle authority is granted.
- Reviewer: an authorized human must accept or reject the repetition after the controller compares it with `PROOF-001`.
- Practitioner: fresh context-isolated agent task `/root/proof002_practitioner`; runtime model identity is `UNVERIFIED`.
- Retained result: `docs/project/evidence/EXP-20260924-001-practitioner-outcome-contract.md`.
- Controller comparison: `docs/project/evidence/EXP-20260924-001-controller-comparison.md`.

## Method

1. Confirm practitioner non-authorship and record the basis for that conclusion.
2. Build the isolated source packet from the frozen revision and record SHA-256 fingerprints for every supplied file.
3. Give the practitioner the bounded searchable-documentation/PWA workflow and require the complete Constraint Compilation output contract plus one failure-scenario test.
4. Retain the practitioner output, runtime identity evidence, launch failures, inspection deviations, and observable side effects without exposing the `PROOF-001` result.
5. After the practitioner finalizes its result, compare constraint coverage, source traceability, authority boundaries, unresolved decisions, and failure behavior with `PROOF-001`.
6. Run claim-matched verification and retain negative evidence. Do not infer reproducibility from textual similarity alone.
7. Obtain an authorized human disposition before changing experiment status, blocker state, capability state, or technique evidence level.

## Results

The second practitioner returned a complete outcome contract with twenty source-traced constraints and a passing preference-to-authority failure test. The result preserves canonical-card authority, static-site/PWA alternatives, the offline hypothesis boundary, evidence separation, licensing limits, human decisions, and the prohibition on automatic implementation or lifecycle promotion.

The controller found no material contradiction with `PROOF-001`. Differences were compatible elaborations, including finer constraint granularity and an explicit honest no-result state. This is a completed practitioner output, not proof of implementation, deployment, observed use, user value, or accepted reproducibility.

## Verification

Execution verification established the following:

- all six supplied files matched the recorded fingerprints; the packet contained zero symlinks and was read-only;
- every compiled constraint `C01`-`C20` traces to the supplied packet;
- the prior outcome was not supplied and the practitioner reported inspecting only the six packet files;
- the result preserves scope and authority boundaries;
- controller comparison classified the observed differences as compatible variations or elaborations and found no material contradiction;
- the failure-scenario test detected mandatory offline-PWA behavior, invented framework choice, and local-evidence inflation; and
- human acceptance was pending at execution time; the 2026-10-20 qualified acceptance is recorded separately.

Practitioner non-authorship and prior-result blindness are only partially verified: the task used a fresh context and the practitioner reported compliance, but historical identity and broader-filesystem non-access were not independently proven.

## Failures and surprises

- Runtime model identity is unavailable.
- The practitioner packet directory was read-only, but broader filesystem read access was not technically prevented. The practitioner reported no access outside the six supplied files.
- The first combined packet display truncated part of `BACKLOG.md`; the practitioner reread only that permitted file in bounded line ranges.
- The repetition independently selected the same offline-PWA constraint-laundering failure pattern as `PROOF-001`; this is a consistent signal but not, by itself, proof of reproducibility.

## Decision

The repository owner accepted the bounded repetition artifact with its documented non-authorship and access-control limitations on 2026-10-20. Close the missing-disposition condition in `BLK-001`; keep the experiment `active` for retained follow-up and preserve every limitation. Technique status and evidence level remain unchanged. Stronger reproducibility or independence claims require additional evidence and separate review.

## Human authority

AI may prepare the isolated packet, run mechanical integrity checks, and compare retained outputs. An authorized human must approve the practitioner assignment, any inspection-boundary deviation, the final disposition, removal of `BLK-001`, and any lifecycle or evidence-level change. This proposal does not itself authorize execution by a practitioner who fails the non-authorship requirement.
