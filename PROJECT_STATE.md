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
Current Product Stage: 0.1.0 repository scaffold with one seed technique, tested experiment intake, one accepted-with-limitations trial, and one completed repetition awaiting human disposition; product use and organizational value are UNVERIFIED.
Primary Deployment Target: UNVERIFIED - a static documentation site or PWA is specified, but no provider or deployment configuration exists.
Last Evidence Reconciliation: 2026-10-20 for current-state wording and frozen-packet retention; the historical PROOF-001 disposition and pending PROOF-002 disposition remain unchanged.
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
practitioner independence, or reproducibility.

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

The repository implements the card and catalog portion of this journey. One source-traced contract was accepted with limitations; a second materially consistent contract is retained but awaits human disposition of its independence and access-control limitations. Accepted repeatability, real use, and measured outcome remain `UNVERIFIED`.

Supporting journey: a contributor searches for overlap, records an uncertain idea as an experiment, authors a card, updates the catalogs, runs validation, and obtains required review. This journey is documented and structurally implemented; a retained example completing the entire review workflow remains missing.

Acquisition journey: a contributor or AI agent previews a sanitized experiment record, reviews catalog overlap, explicitly authorizes retention, and validates the proposed record. The command and validator are locally `TESTED`; independent contributor use of the intake command remains `UNVERIFIED`.

## Current Evidence-Based Reality

- The repository contains one canonical technique card, Constraint Compilation.
- It contains authoring templates, a JSON schema for technique metadata, a machine catalog, a human catalog, a no-dependency validator, and GitHub Actions configuration.
- The scoped backlog, intake, experiment, tests, and state changes passed `npm run validate` locally on 2026-09-24.
- A preview-first experiment-intake command and lifecycle validator are implemented and locally `TESTED`. The command rejects raw prompt/source flags and requires explicit retention authorization before writing.
- One sanitized active experiment operationalized `PROOF-001`. A fresh practitioner produced a retained contract and failure-scenario check; the repository owner accepted the artifact with its documented deviations on 2026-09-24.
- `PROOF-002` produced a second source-traced contract and controller comparison. The result is materially consistent with `PROOF-001`, but runtime identity is unverified and broader filesystem non-access was practitioner-reported rather than technically enforced. Human disposition remains pending.
- A capability-horizon backlog now records speculative options beyond the current adapter and licensing explorations; none of its entries is implemented, prioritized, or promoted into canonical capability state.
- No searchable website/PWA, Codex skill, general catalog CLI, or MCP implementation exists. These remain specified or planned adapters; the experiment-intake command is a narrower tested workflow.
- One accepted-with-limitations result and one repetition awaiting disposition are retained. No case study, deployment receipt, observed user use, retention, measured outcome, paid customer, or revenue evidence exists in the repository.
- Before this control-plane commit, available history contained two commits and one material branch, `main`; no additional worktree was registered.
- The public source remains `UNLICENSED`; public visibility is not reuse permission.

## Capability Horizon

[`BACKLOG.md`](BACKLOG.md) records future capabilities that extend beyond the five questions currently tracked in `docs/project/EXPLORATIONS.md`. Horizon entries require a recurring problem signal, a falsifiable experiment, explicit authority and privacy boundaries, an owner, and a displacement decision before they may become active explorations or canonical capabilities.

Creating the horizon backlog changes planning visibility, not product capability. It does not change capability counts, blockers, the next proof event, or the evidence status of any technique.

## Reconciled Contradictions

- `content/techniques/discover/constraint-compilation.md` labels the technique `experimental` while its `evidence_level` is `concept`. The accepted-with-limitations bounded trial now satisfies the minimum experimental trial requirement, but repeatability and observed outcomes remain unverified. The capability remains `SPECIFIED`, and the card was not silently relabeled or promoted.
- GitHub Actions configuration proves intended CI behavior, not a current provider run. Current CI execution is `UNVERIFIED` in this reconciliation.

## Critical Blockers

- `BLK-001` (P1): the retained repetition lacks authorized disposition and resolution of its independence and access-control limitations.

## NEXT PROOF EVENT

**ID:** `PROOF-002`

**Proof Event:** A second independent practitioner repeats Constraint Compilation on a bounded workflow under the documented conditions, with an authorized human reviewing the result.

**Why It Matters:** `PROOF-001` established one accepted-with-limitations bounded trial. Repetition is the smallest next event that can test reproducibility rather than one-run plausibility.

**Prerequisites:** Retain the `PROOF-001` artifact and disposition; retain the validated `EXP-20260924-001` protocol, result, and comparison; name an authorized reviewer; require an explicit ruling on the retained practitioner-independence and access-control limitations.

**Acceptance Criteria:** The second practitioner did not author the card; every compiled constraint traces to supplied evidence; authority and scope boundaries are preserved; results and failures are compared with `PROOF-001`; an authorized human accepts or rejects the repetition.

**Required Evidence:** Repetition record, safe inputs or redactions, produced outcome contract, comparison with `PROOF-001`, verification results, and human disposition.

**Current Blockers:** `BLK-001`.

Engineering work is derived backward from this event. Building an adapter does not replace the proof event.

## Next Actions

1. Obtain authorized human acceptance or rejection of `EXP-20260924-001`, explicitly ruling on its independence and access-control limitations.
2. If accepted, reconcile `BLK-001`, `PROOF-002`, and reproducibility claims without automatic lifecycle promotion; if rejected, retain reasons and run a stricter repetition.
3. Verify the published revision and provider CI after explicit push authorization.

## Reconciliation Rule

Any material change to capability, architecture, lifecycle state, dependency, blocker, proof status, product behavior, or the next proof event must update this document, `.project/state.json`, and the affected detailed register before completion is claimed.
