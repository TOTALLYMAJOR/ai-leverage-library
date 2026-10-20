# Decision Ledger

These entries recover only decisions that materially govern current behavior. Missing rationale is marked `UNVERIFIED`; it is not reconstructed from preference.

## DEC-001 - Technique cards are canonical

```text
Decision ID: DEC-001
Date: 2026-08-20
Context: Technique detail must not diverge across navigation and machine indexes.
Decision: Cards under content/techniques are canonical; CATALOG.md and catalog.yaml are derived navigation.
Alternatives Considered: UNVERIFIED - no alternatives record exists.
Why Chosen: README and AGENTS.md describe a portable Git-native content core with deterministic catalog checks.
Authority: AGENTS.md
Affected Components: content/techniques, catalog.yaml, CATALOG.md, scripts/validate.mjs
Evidence: AGENTS.md; CATALOG.md; scripts/validate.mjs
Reversible? yes, through an explicit authority change and migration
Supersedes: None found
Status: ACTIVE
Revisit Trigger: A new canonical content store is proposed or catalog generation ownership changes.
```

## DEC-002 - Organize by outcomes, not providers

```text
Decision ID: DEC-002
Date: 2026-08-20
Context: Model- or vendor-specific prompt collections age quickly and hide transferable practice.
Decision: Organize techniques by outcomes; label provider-specific details as adapters or portability notes.
Alternatives Considered: Provider-, model-, and prompt-oriented organization are implied rejected alternatives; evaluation details are UNVERIFIED.
Why Chosen: Preserve portable reasoning and repeatable workflows.
Authority: README.md and technique template
Affected Components: content/techniques, templates, catalogs, future adapters
Evidence: README.md; templates/technique-card.md
Reversible? yes
Supersedes: None found
Status: ACTIVE
Revisit Trigger: Evidence shows outcome categories prevent reliable retrieval or authoring.
```

## DEC-003 - Evidence and human gates constrain promotion

```text
Decision ID: DEC-003
Date: 2026-08-20
Context: A demonstration or generated artifact can be mistaken for validated or operational capability.
Decision: Separate evidence levels, lifecycle status, tool execution, provider state, human acceptance, and observed outcomes; require human review for authority changes or field-tested promotion.
Alternatives Considered: Automatic promotion from passing validation or one-off success is explicitly rejected.
Why Chosen: Prevent evidence inflation and unsafe authority drift.
Authority: AGENTS.md and CONTRIBUTING.md
Affected Components: technique metadata, promotion workflow, reviews, completion reports
Evidence: AGENTS.md; CONTRIBUTING.md; schema/technique.schema.json
Reversible? no without changing the repository's core evidence model
Supersedes: None found
Status: ACTIVE
Revisit Trigger: Human review roles or the status ladder are formally replaced.
```

## DEC-004 - Adapters remain separate from the content core

```text
Decision ID: DEC-004
Date: 2026-08-20
Context: Delivery surfaces will evolve faster than canonical technique contracts.
Decision: Treat websites, skills, CLIs, and MCP servers as adapters over the portable content core.
Alternatives Considered: Embedding canonical technique truth in each adapter is implicitly rejected; detailed analysis is UNVERIFIED.
Why Chosen: Avoid duplicating authority and preserve portability.
Authority: README.md
Affected Components: roadmap, future website/PWA, skill, CLI, MCP
Evidence: README.md
Reversible? yes
Supersedes: None found
Status: ACTIVE
Revisit Trigger: An adapter requires a capability the content contract cannot represent.
```

## DEC-005 - Public source remains all-rights-reserved

```text
Decision ID: DEC-005
Date: 2026-08-20
Context: Repository visibility and legal permission are separate states.
Decision: Grant no license to copy, modify, distribute, sublicense, or use the contents outside authorized work until a separate license is added.
Alternatives Considered: A future separate license is mentioned; license options and commercial intent are UNKNOWN.
Why Chosen: UNVERIFIED - no rationale record exists.
Authority: LICENSE and package.json
Affected Components: distribution, contribution expectations, commercialization, downstream use
Evidence: LICENSE; package.json license=UNLICENSED
Reversible? yes, by the rights holder
Supersedes: None found
Status: ACTIVE
Revisit Trigger: Public distribution, external contribution, or downstream reuse is intentionally enabled.
```

## DEC-006 - Capability horizons are not roadmap commitments

```text
Decision ID: DEC-006
Date: 2026-09-15
Context: The project needs to preserve ambitious future capability options without inflating current capability state, competing with the next proof event, or treating speculation as authorization.
Decision: BACKLOG.md is a non-authoritative capability-horizon inventory. A horizon entry must be explicitly promoted through a bounded exploration and product decision before it becomes a roadmap commitment or canonical capability.
Alternatives Considered: Add speculative items directly to the canonical capability ledger; mix them into the current exploration register; omit long-horizon options entirely.
Why Chosen: Separating horizons from active state preserves strategic range while keeping evidence, priority, and authority claims accurate.
Authority: Repository maintainers under the canonical project-state contract
Affected Components: BACKLOG.md, PROJECT_STATE.md, .project/state.json, docs/project/EXPLORATIONS.md
Evidence: BACKLOG.md; PROJECT_STATE.md
Reversible? yes, through an explicit replacement of the planning contract and reconciliation of affected state artifacts
Supersedes: None found
Status: ACTIVE
Revisit Trigger: A horizon entry is promoted, the project adopts a different portfolio-governance model, or backlog entries begin driving work without explicit decisions.
```

## DEC-007 - Experiment acquisition is preview-first and retention-gated

```text
Decision ID: DEC-007
Date: 2026-09-15
Context: Promising prompts and workflows need a reproducible intake path, but raw source capture can leak private data and a generated record can be mistaken for completed evidence.
Decision: Experiment intake previews by default, rejects raw prompt and raw-source flags, records only a sanitized source reference, and requires explicit retention authorization before writing a proposed record.
Alternatives Considered: Store raw prompts; write by default; rely on unvalidated manual template copies; automatically promote successful-looking records.
Why Chosen: The boundary creates a useful acquisition path while preserving privacy, provenance, human authority, and the distinction between a proposal and an executed trial.
Authority: Repository maintainers under AGENTS.md privacy and evidence boundaries
Affected Components: scripts/create-experiment.mjs, scripts/lib/experiment-intake.mjs, schema/experiment.schema.json, templates/experiment-log.md, content/experiments, CONTRIBUTING.md
Evidence: Passing local intake tests and experiment validation; proposed EXP-20260915-001 record
Reversible? yes, but weakening retention or promotion gates requires explicit authority and updated safety evidence
Supersedes: None found
Status: ACTIVE
Revisit Trigger: Authorized users cannot capture legitimate experiments without raw source retention, or evidence shows the current guard fails to prevent sensitive or misleading records.
```

## DEC-008 - Accept PROOF-002 within its documented limits

```text
Decision ID: DEC-008
Date: 2026-10-20
Context: The owner reviewed the linked controller comparison and replied "accept" after the input-packet retention and PR merge.
Decision: Record ACCEPTED_WITH_LIMITATIONS for the bounded artifact and close BLK-001's missing-disposition condition. Retain unknown runtime/practitioner identity and non-enforced broader-filesystem isolation as limitations. Keep technique and capability lifecycle states unchanged.
Authority: Repository owner acting as the authorized human reviewer
Affected Components: PROOF-002, BLK-001, current project state, experiment record, proof register
Evidence: docs/project/evidence/EXP-20260924-001-human-disposition.md; reviewed main 75d30dfb766bb8c94bd6265144d228b24c95ed37
Reversible? A later owner decision may supersede this disposition while retaining the original record.
Supersedes: Pending human disposition only; no source-evidence or lifecycle authority is replaced.
Status: ACTIVE
Revisit Trigger: New evidence contradicts the bounded result or a stronger reproducibility, promotion, or outcome claim is proposed.
```

## Contradictions Requiring Authority

Both bounded results have owner acceptance with documented limitations. The seed card remains `experimental`/`concept`; neither acceptance supplies independent runtime/isolation proof, real-world outcomes, or a lifecycle-promotion decision. Stronger claims require claim-matched evidence and explicit review. The next proof contract remains `NEEDS_OWNER_INPUT`.
