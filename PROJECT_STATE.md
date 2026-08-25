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
Current Product Stage: 0.1.0 repository scaffold with one seed technique; product use and organizational value are UNVERIFIED.
Primary Deployment Target: UNVERIFIED - a static documentation site or PWA is specified, but no provider or deployment configuration exists.
Last Evidence Reconciliation: 2026-08-25 against the committed repository snapshot.
```

## North-Star Goal

Technical success means the repository keeps portable technique definitions, evidence contracts, catalogs, and drift checks consistent. User success means a practitioner can find and apply a technique without hidden context and can verify the result. Operational success means publication and lifecycle promotion are reproducible, reviewable, and resistant to evidence inflation. Organizational or commercial success requires observed improvement in real work; that outcome and any economic buyer, offer, adoption, retention, or revenue remain `UNVERIFIED`.

## Evidence Authority

- Technique cards under `content/techniques/` define technique behavior.
- `.project/state.json` defines machine-readable project state and relationships.
- This document summarizes that ledger for humans.
- `docs/project/` provides detailed registers; it does not independently promote capability state.
- Source proves implementation, local commands prove only the environment and revision they ran against, provider receipts prove provider acknowledgement, and human or user evidence proves acceptance or use. None substitutes for another.
- Missing evidence is `UNVERIFIED`, not a pass or a failure.

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

The repository implements the card and catalog portion of this journey. Independent use, human acceptance, measured outcome, and repeatability are `UNVERIFIED`.

Supporting journey: a contributor searches for overlap, records an uncertain idea as an experiment, authors a card, updates the catalogs, runs validation, and obtains required review. This journey is documented and structurally implemented; a retained example completing the entire review workflow remains missing.

## Current Evidence-Based Reality

- The repository contains one canonical technique card, Constraint Compilation.
- It contains authoring templates, a JSON schema for technique metadata, a machine catalog, a human catalog, a no-dependency validator, and GitHub Actions configuration.
- The canonical-state ledger and both validation layers are locally `TESTED` against the exact committed snapshot by `npm run validate` for this reconciliation.
- No searchable website/PWA, Codex skill, CLI, or MCP implementation exists. These remain specified or planned adapters.
- No experiment record, case study, deployment receipt, user acceptance, usage, retention, measured outcome, paid customer, or revenue evidence exists in the repository.
- Before this control-plane commit, available history contained two commits and one material branch, `main`; no additional worktree was registered.
- The public source remains `UNLICENSED`; public visibility is not reuse permission.

## Reconciled Contradictions

- `content/techniques/discover/constraint-compilation.md` labels the technique `experimental` while its `evidence_level` is `concept`; `CONTRIBUTING.md` requires at least one bounded trial for experimental status. No retained trial exists. The capability is therefore recorded as `SPECIFIED`, and the card was not silently relabeled.
- GitHub Actions configuration proves intended CI behavior, not a current provider run. Current CI execution is `UNVERIFIED` in this reconciliation.

## Critical Blockers

- `BLK-001` (P1): no retained bounded trial or independent outcome proves the seed technique or primary journey.
- `BLK-003` (P2): no reviewer, design partner, or adopting organization is recorded for outcome acceptance.

## NEXT PROOF EVENT

**ID:** `PROOF-001`

**Proof Event:** An independent practitioner uses the canonical Constraint Compilation card on a bounded real workflow, and an authorized human reviews the result.

**Why It Matters:** This is the smallest observable event that distinguishes a well-structured technique card from a technique that creates reproducible user value.

**Prerequisites:** Name a reviewer and bounded workflow; retain the trial without secrets or proprietary material.

**Acceptance Criteria:** The practitioner did not author the card; every compiled constraint traces to supplied evidence; authority and scope boundaries are preserved; a human accepts or rejects the result against the documented contract; failures and surprises are retained.

**Required Evidence:** Experiment record, safe inputs or redactions, produced outcome contract, verification results, and human disposition.

**Current Blockers:** `BLK-001`, `BLK-003`.

Engineering work is derived backward from this event. Building an adapter does not replace the proof event.

## Next Actions

1. Select a bounded real workflow, independent practitioner, and authorized reviewer for `PROOF-001`.
2. Run and retain the trial, including negative evidence and human disposition.
3. Reconcile the seed technique status and adapter roadmap from the evidence without automatic promotion.

## Reconciliation Rule

Any material change to capability, architecture, lifecycle state, dependency, blocker, proof status, product behavior, or the next proof event must update this document, `.project/state.json`, and the affected detailed register before completion is claimed.
