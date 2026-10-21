# Canonical Project State

This document is the human-readable authority for the current project definition. The machine-readable ledger is [`.project/state.json`](.project/state.json). Technique content remains governed by `AGENTS.md`: cards are canonical for techniques, while this control plane records what is known about the repository and its outcomes.

## Identity

```text
Project: AI Leverage Library
Repository: https://github.com/TOTALLYMAJOR/ai-leverage-library
Primary Purpose: A Git-native, evidence-aware library of reproducible AI techniques organized by outcome rather than provider.
Primary User / Actor: Practitioners and AI agents seeking reproducible, authority-bounded AI workflows.
Economic Buyer: UNKNOWN
Problem Solved: Useful AI workflows are scattered across prompts, demonstrations, and tribal knowledge without reproducible verification or explicit human authority boundaries.
Current Product Stage: 0.1.0 repository scaffold with one seed technique, tested experiment intake, and two accepted-with-limitations bounded results; product use and organizational value are UNVERIFIED.
Primary Deployment Target: UNVERIFIED - a static documentation site or PWA is specified, but no provider or deployment configuration exists.
Last Evidence Reconciliation: 2026-10-20 for qualified PROOF-002 acceptance and approval of the next real-PR trial method; its target and requirements remain pending, with execution separately authorized.
```

## North-Star Goal

Technical success means the repository keeps portable technique definitions, evidence contracts, catalogs, and drift checks consistent. User success means a practitioner can find and apply a technique without hidden context and can verify the result. Operational success means publication and lifecycle promotion are reproducible, reviewable, and resistant to evidence inflation. Organizational or commercial success requires observed improvement in real work; that outcome and any economic buyer, offer, adoption, retention, or revenue remain `UNVERIFIED`.

## Evidence Authority

- Technique cards under `content/techniques/` define technique behavior.
- `.project/state.json` defines machine-readable project state and relationships.
- This document summarizes that ledger for humans.
- `docs/project/` provides detailed registers; it does not independently promote capability state.
- [`BACKLOG.md`](BACKLOG.md) is a non-authoritative horizon inventory. Its entries are neither current capabilities nor active explorations, roadmap commitments, or execution authority.
- Source proves implementation, local commands prove only the environment and revision they ran against, provider receipts prove provider acknowledgement, and human or user evidence proves acceptance or use. None substitutes for another.
- Missing evidence is `UNVERIFIED`, not a pass or a failure.

The exact six-file `PROOF-002` input packet is retained under
`docs/project/evidence/packets/EXP-20260924-001/`. Its files are immutable historical
inputs, not current project authorities. `npm run validate:proof-packet` checks
them against the original SHA-256 manifest without requiring the unpublished
historical Git commit. Packet integrity does not establish acceptance,
practitioner independence, or reproducibility. The owner's qualified acceptance
is recorded separately in the [human disposition](docs/project/evidence/EXP-20260924-001-human-disposition.md).

## Canonical Journey

Primary journey:

```text
A practitioner has an outcome or problem
-> Practitioner or AI agent under human authority
-> Finds a canonical technique, supplies its inputs, follows the workflow, and verifies the claim
-> An ad hoc AI attempt becomes a bounded, inspectable workflow result
-> Technique card + retained verification evidence + required human review
-> Result or experiment is retained and the technique evidence status is reassessed
-> Useful outcome with explicit limits and authority
```

The repository implements the card and catalog portion of this journey. Both retained source-traced contracts have owner acceptance with documented limitations. Practitioner independence, enforced isolation, reproducibility, real use, and measured outcome remain `UNVERIFIED`.

Supporting journey: a contributor searches for overlap, records an uncertain idea as an experiment, authors a card, updates the catalogs, runs validation, and obtains required review. This journey is documented and structurally implemented; a retained example completing the entire review workflow remains missing.

Acquisition journey: a contributor or AI agent previews a sanitized experiment record, reviews catalog overlap, explicitly authorizes retention, and validates the proposed record. The command and validator are locally `TESTED`; independent contributor use of the intake command remains `UNVERIFIED`.

## Current Evidence-Based Reality

- The repository contains one canonical technique card, Constraint Compilation.
- It contains authoring templates, a JSON schema for technique metadata, a machine catalog, a human catalog, a no-dependency validator, and GitHub Actions configuration.
- The scoped backlog, intake, experiment, tests, and state changes passed `npm run validate` locally on 2026-09-24.
- A preview-first experiment-intake command and lifecycle validator are implemented and locally `TESTED`. The command rejects raw prompt/source flags and requires explicit retention authorization before writing.
- One sanitized active experiment operationalized `PROOF-001`. A fresh practitioner produced a retained contract and failure-scenario check; the repository owner accepted the artifact with its documented deviations on 2026-09-24.
- `PROOF-002` produced a second source-traced contract and controller comparison. The owner accepted the bounded artifact with its documented limitations on 2026-10-20. Runtime identity remains unverified and broader filesystem non-access was practitioner-reported rather than technically enforced.
- A capability-horizon backlog now records speculative options beyond the current adapter and licensing explorations; none of its entries is implemented, prioritized, or promoted into canonical capability state.
- No searchable website/PWA, Codex skill, general catalog CLI, or MCP implementation exists. These remain specified or planned adapters; the experiment-intake command is a narrower tested workflow.
- [PR #3](https://github.com/TOTALLYMAJOR/ai-leverage-library/pull/3) published the qualified disposition reconciliation; its PR and merged-main validation runs passed all 18 tests and the remaining validation checks. See the [snapshot-bound receipt](docs/project/evidence/CI-20261020-pr3-main-validation.md).
- Two accepted-with-limitations bounded results are retained. No case study, deployment receipt, observed user use, retention, measured outcome, paid customer, or revenue evidence is established by those artifacts.
- Before this control-plane commit, available history contained two commits and one material branch, `main`; no additional worktree was registered.
- The public source remains `UNLICENSED`; public visibility is not reuse permission.

## Capability Horizon

[`BACKLOG.md`](BACKLOG.md) records future capabilities that extend beyond the five questions currently tracked in `docs/project/EXPLORATIONS.md`. Horizon entries require a recurring problem signal, a falsifiable experiment, explicit authority and privacy boundaries, an owner, and a displacement decision before they may become active explorations or canonical capabilities.

Creating the horizon backlog changes planning visibility, not product capability. It does not change capability counts, blockers, the next proof event, or the evidence status of any technique.

## Reconciled Contradictions

- `content/techniques/discover/constraint-compilation.md` labels the technique `experimental` while its `evidence_level` is `concept`. The accepted-with-limitations bounded trial now satisfies the minimum experimental trial requirement, but repeatability and observed outcomes remain unverified. The capability remains `SPECIFIED`, and the card was not silently relabeled or promoted.
- GitHub Actions provider execution is verified for PR #3 and merged-main commit `9a9f8ddf7b6ed2c46e8f911a7348f351d3ca5f0f`: both runs succeeded on 2026-10-20. The [publication and CI receipt](docs/project/evidence/CI-20261020-pr3-main-validation.md) binds these claims to exact snapshots; later commits need their own results.

## Critical Blockers

- `BLK-004` (P1): the approved real-PR trial plan needs an owner-selected target and confirmed target requirements. Execution remains separately authorized.

`BLK-001` is retained as closed: the owner accepted the bounded `PROOF-002`
result with its limitations. The unresolved runtime and access-control facts
remain evidence limitations, not an outstanding acceptance request.

## NEXT PROOF EVENT

**ID:** `PROOF-003`

**Proof Event:** Complete target selection for the [approved read-only real-PR trial plan](docs/project/evidence/PROOF-003-real-pr-contract.md). Plan status: `APPROVED`; target selection: `NEEDS_OWNER_INPUT`; execution: `NOT_AUTHORIZED`.

**Why It Matters:** The approved method will test whether Constraint Compilation helps expose a material omission or ambiguity in one real PR. A concrete target and confirmed requirements are needed before evaluation. Prior evidence limitations remain unchanged.

**Prerequisites:** Retain both qualified dispositions and the approved plan; obtain the target PR, freeze its scope, and confirm intended requirements with the owner before evaluation.

**Acceptance Criteria:** Retain owner approval of the method, evidence, reviewer, success criteria, and stop conditions; obtain owner selection of the exact PR and confirmation of its frozen scope and intended requirements. Execution requires separate authorization.

**Required Evidence:** The approved plan and owner disposition, plus the selected PR, commit SHA, and confirmed requirements. Plan approval supplies no trial result.

**Current Blockers:** `BLK-004`.

Engineering work is derived backward from this event. Building an adapter does not replace the proof event.

## Next Actions

1. Obtain the target PR, freeze its scope, and confirm its requirements under the approved plan. Evaluation waits for separate execution authority.
2. Preserve the runtime-identity and access-control limitations, unverified outcomes, and separate promotion authority.

## Reconciliation Rule

Any material change to capability, architecture, lifecycle state, dependency, blocker, proof status, product behavior, or the next proof event must update this document, `.project/state.json`, and the affected detailed register before completion is claimed.
