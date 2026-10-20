# Capability Register

Canonical lifecycle state lives in [`.project/state.json`](../../.project/state.json). A source file can prove implementation; it cannot by itself prove correctness, deployment, use, or value.

| Capability | Intended Outcome | State | Evidence | Missing Proof | Blocker |
| --- | --- | --- | --- | --- | --- |
| `CAP-001` Canonical technique cards | Portable, authority-bounded technique definitions | `IMPLEMENTED` | `AGENTS.md`; `content/techniques/discover/constraint-compilation.md` | Independent use and outcome evidence | None |
| `CAP-002` Technique contract and catalog drift validation | Detect invalid metadata, duplicate IDs, and catalog divergence | `TESTED` | `scripts/validate.mjs`; local validation and merged-main run in the [CI receipt](evidence/CI-20261020-pr3-main-validation.md) | Later revisions require new check results | None |
| `CAP-003` Human and machine catalogs | Human navigation and deterministic machine metadata | `IMPLEMENTED` | `CATALOG.md`; `catalog.yaml`; exact committed snapshot validation | Automated catalog-writing command and user navigation evidence | None |
| `CAP-004` Constraint Compilation workflow | Convert scattered constraints into an inspectable outcome contract | `SPECIFIED` | Canonical technique card; two owner-accepted-with-limitations bounded results and the retained human disposition | Independent runtime/isolation proof and observed outcome | `BLK-004` |
| `CAP-005` Pull-request and main-branch validation configuration | Run checks through GitHub Actions | `IMPLEMENTED` | `.github/workflows/validate.yml`; successful PR/main provider runs with exact SHAs in the [CI receipt](evidence/CI-20261020-pr3-main-validation.md) | Later revisions require their own provider receipts | None |
| `CAP-006` Searchable documentation site or PWA | Searchable user-facing access to techniques | `SPECIFIED` | README roadmap | Design, implementation, tests, deployment, and use | None recorded |
| `CAP-007` Codex skill adapter | Retrieve and apply relevant techniques in Codex | `SPECIFIED` | README roadmap | Contract, implementation, tests, and governed consumption | None recorded |
| `CAP-008` Catalog CLI | Search, create, recommend, and validate from a CLI | `SPECIFIED` | README roadmap | Interface design, implementation, tests, and use | None recorded |
| `CAP-009` MCP adapter | Expose a stable retrieval contract through MCP | `IDEA` | README roadmap explicitly defers it | Stable catalog/retrieval contract and all implementation proof | None recorded |
| `CAP-010` Canonical state and drift detection | Keep project claims, evidence, decisions, blockers, and next proof synchronized | `TESTED` | `.project/state.json`; `scripts/validate-project-state.mjs`; local passing check on 2026-09-24; successful merged-main validation in the [CI receipt](evidence/CI-20261020-pr3-main-validation.md) | Long-term operating adoption and later-revision checks | None |
| `CAP-011` Experiment, playbook, and case-study retention scaffolds | Retain trials, sequences, outcomes, and useful failures | `IMPLEMENTED` | Templates, content directories, and two retained active experiments | A case study or observed outcome | `BLK-004` |
| `CAP-012` Governed experiment intake and validation | Convert a sanitized signal into a collision-safe proposed experiment without claiming execution | `TESTED` | Intake command; experiment schema and validator; 11 passing local tests and structural validation on 2026-09-24; two active trials | Independent contributor intake use and observed outcome evidence | None |

## State Counts

| State | Count |
| --- | ---: |
| `IDEA` | 1 |
| `SPECIFIED` | 4 |
| `IMPLEMENTED` | 4 |
| `TESTED` | 3 |
| `BLOCKED` | 0 |
| `VERIFIED` | 0 |
| `DEPLOYED` | 0 |
| `USED` | 0 |
| `COMMERCIALLY_PROVEN` | 0 |

## Required Distinctions

- **Claimed:** prose or a roadmap says a capability exists or should exist.
- **Implemented:** inspectable source or configuration exists.
- **Verified:** claim-matched evidence demonstrates expected behavior; no current capability is at this state.
- **Operational:** target-environment evidence exists; none is retained here.
- **Proven:** actual users or organizations achieved the intended outcome; none is retained here.

The seed technique's card-level `experimental` label does not elevate `CAP-004`: both bounded results have qualified owner acceptance, while the card remains at `concept`, reproducibility remains unverified, and no separate promotion decision was made.
