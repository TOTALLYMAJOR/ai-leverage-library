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

## Contradictions Requiring Authority

The `experimental` label on the seed card conflicts with the promotion evidence described in `CONTRIBUTING.md`. This ledger does not silently convert either the card or the policy. A human reviewer must reconcile the status after evidence is produced or explicitly correct the historical label.
