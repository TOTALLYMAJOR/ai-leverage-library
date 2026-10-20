---
id: EXP-20260915-001
title: "Independent governed trial of Constraint Compilation"
status: active
candidate_technique: AI-DISCOVER-001
owner: "repository maintainer"
started: 2026-09-15
completed:
source_kind: user-request
source_reference: "current-conversation-request-sanitized"
sensitivity: sanitized
retention_authorized: true
overlap_review: "AI-DISCOVER-001"
---

# Independent governed trial of Constraint Compilation

## Hypothesis

An independent practitioner who did not author the technique can use the canonical Constraint Compilation card to produce an outcome contract in which every constraint traces to supplied evidence, no preference is upgraded into authority, and an authorized reviewer can accept or reject the result against the documented contract.

## Conditions

- Workflow: compile the outcome contract for a searchable documentation/PWA experience.
- Frozen revision: `f0756da78ad0b985b0ac4997f5856ad4168d5e64`.
- Source packet: `README.md`, `PROJECT_STATE.md`, `BACKLOG.md`, and `docs/project/EXPLORATIONS.md`.
- Technique revision: `content/techniques/discover/constraint-compilation.md` at the frozen revision.
- Practitioner: fresh Codex thread `01a0c193-34a5-7d00-9c96-99195f18061c` using the supported default model; exact runtime model identifier is unavailable.
- Tools: read-only shell, `git show`, and SHA-256 calculation; no network source or repository write access.
- Reviewer: not named before execution; authorized human disposition remains required.
- The complete fingerprints, practitioner contract, and execution deviations are retained in `docs/project/evidence/EXP-20260915-001-outcome-contract.md`.

## Method

1. Fingerprint the safe source packet and canonical technique revision.
2. Give a fresh practitioner the bounded workflow, packet, and technique without implementation authority.
3. Require the complete Constraint Compilation output contract with line-level traces.
4. Require one plausible failure-scenario test.
5. Retain the output, launch failures, procedural deviations, and verification limits.
6. Request authorized human acceptance or rejection before completing the experiment or changing technique status.

## Results

The practitioner produced a source-traced outcome contract with ten constraints. It kept static documentation and PWA as alternatives, treated offline reading as a hypothesis, separated repository, deployment, acceptance, and outcome evidence, and left the retrieval contract, framework, accessibility baseline, deployment target, reviewer, and license unresolved.

The complete retained result is `docs/project/evidence/EXP-20260915-001-outcome-contract.md`. No website/PWA was implemented, tested, deployed, used, or accepted.

## Verification

- All five supplied SHA-256 fingerprints matched content retrieved from the frozen commit.
- Every compiled constraint C1-C10 includes frozen-packet line citations.
- The failure scenario correctly rejected mandatory offline-PWA behavior because the source labels it a hypothesis and preserves a static-site alternative.
- The controller identified no automatic technique promotion or implementation authority in the result.
- Human acceptance is recorded below. Practitioner historical non-authorship, exact runtime model identity, repeatability, and user value remain `UNVERIFIED`.

## Failures and surprises

- Launch attempt 1 failed because the requested `gpt-5.4` model was unsupported by the ChatGPT-backed Codex account.
- Launch attempt 2 received an empty prompt because the subprocess environment payload was dropped; it produced no artifact.
- The successful runtime automatically inspected operational skill and scope files beyond the six repository files. Those files supplied no product constraints, but the literal inspection boundary was not met.
- No authorized reviewer was named before execution. This protocol deviation required later human disposition, which is recorded below and retained as a limitation.

## Decision

The repository owner, acting as the authorized human reviewer, accepted the retained outcome contract and its documented deviations on 2026-09-24. Keep the experiment `active` for independent repetition. This acceptance establishes one human-reviewed bounded trial; it does not prove repeatability, implementation, deployment, use, or user value and does not authorize changing `AI-DISCOVER-001` from `experimental`/`concept`.

## Human authority

Repository maintainers may refine the protocol. The repository owner accepted the retained artifact with its stated limitations on 2026-09-24. Lifecycle promotion remains a separate human decision. This record does not grant implementation, deployment, licensing, or promotion authority.
