# Capability Horizon Backlog

This backlog records capabilities the AI Leverage Library could eventually develop beyond its current exploration set. It is an option inventory, not an active roadmap, implementation claim, or authorization to execute.

The current explorations remain the searchable documentation/PWA, Codex skill, catalog CLI, MCP adapter, and distribution license questions in [`docs/project/EXPLORATIONS.md`](docs/project/EXPLORATIONS.md). The canonical next proof event remains `PROOF-001`: independent, governed use of Constraint Compilation.

## How a Horizon Item Becomes Work

```text
Capability horizon
-> observed problem or repeated demand
-> bounded exploration with a falsifiable hypothesis
-> explicit product and authority decision
-> canonical capability entry with dependencies and proof requirements
-> implementation
-> claim-matched verification
-> observed use and outcomes
```

A horizon item must not enter the active roadmap until all of the following are explicit:

- a named practitioner or organizational problem;
- evidence that the problem recurs or is strategically important;
- the smallest experiment that could disprove the proposed value;
- data, privacy, security, and human-authority boundaries;
- prerequisites and the current work it would displace;
- an accountable owner and reviewer;
- a proof event that distinguishes implementation from useful capability.

Passing source validation does not promote a horizon item. A human decision is required to move one into active exploration or canonical capability state.

## Selection Lens

When an activation signal appears, compare candidates by:

1. proximity to retained user or outcome evidence;
2. leverage across multiple techniques and adapters;
3. ability to expose failure rather than merely generate output;
4. reversibility and privacy risk;
5. dependencies unlocked relative to maintenance cost;
6. displacement of the current next proof event.

The sequence below is directional. It identifies dependency order, not delivery commitments.

## Horizon A — Observe and Learn From Real Work

### HZN-001 — Evidence lineage compiler

**Future capability:** Produce a privacy-safe execution receipt that links a technique version, supplied context, model and tool configuration, actions, verification, human decisions, and observed outcome without storing secrets or proprietary source material.

**Why it matters:** The library cannot learn reliably from prompts or demonstrations when the conditions that produced an outcome are missing or collapsed into a success story.

**Prerequisites:** At least one retained end-to-end trial; a redaction policy; stable identifiers for technique versions, experiments, and human dispositions.

**First discriminating evidence:** Generate a receipt from a real bounded trial, reconstruct the trial from it, and show that an independent reviewer can identify both what happened and what remains unknown.

**Authority boundary:** Collection must be opt-in. The compiler may record evidence and provenance; it may not infer consent, acceptance, causation, or permission to retain sensitive inputs.

**Activation signal:** Two or more trials become difficult to compare because their execution conditions or approval history are incomplete.

### HZN-002 — Reproducibility and adversarial evaluation lab

**Future capability:** Run technique cards against controlled task suites, negative cases, authority traps, and repeated conditions to measure reproducibility, failure detection, and portability.

**Why it matters:** A useful example does not reveal whether a technique is robust, brittle, unsafe, or dependent on hidden context.

**Prerequisites:** Multiple retained trials, stable output contracts, safe evaluation fixtures, and claim-matched scoring rules.

**First discriminating evidence:** Repeat one technique across at least two operators or model configurations and retain disagreements, failures, and reviewer dispositions.

**Authority boundary:** Evaluation may challenge a status claim; it may not automatically promote or demote a technique.

**Activation signal:** A technique is being considered for `validated` status or repeated use in higher-risk work.

### HZN-003 — Technique and environment drift sentinel

**Future capability:** Detect when model behavior, tools, providers, dependencies, policies, or referenced sources have changed enough to invalidate a technique's last verification.

**Why it matters:** Calendar age alone is a weak proxy for whether an AI workflow still behaves as documented.

**Prerequisites:** Evidence lineage, versioned external assumptions, verification fixtures, and explicit drift thresholds.

**First discriminating evidence:** Identify a real upstream change, rerun only the affected verification, and correctly preserve unaffected claims.

**Authority boundary:** The sentinel may mark evidence stale or request re-verification; it may not silently rewrite a canonical card or assert that a provider change caused an observed outcome.

**Activation signal:** A retained technique depends on a changing model, API, policy, or tool contract.

### HZN-004 — Longitudinal outcome observatory

**Future capability:** Relate technique use to later human acceptance, rework, cycle time, error rate, retention, and organizational outcomes across repeated work.

**Why it matters:** Immediate output quality is not the same as durable value, and prompt wording is rarely the only variable affecting an outcome.

**Prerequisites:** Opt-in outcome definitions, evidence receipts, privacy controls, repeated use, and a defensible attribution model.

**First discriminating evidence:** Follow one technique through repeated use and show whether its predicted benefit persists, decays, or transfers under changed conditions.

**Authority boundary:** Report association, contribution, and uncertainty separately. Do not claim causality or commercial value without evidence designed for those claims.

**Activation signal:** The same technique has multiple accepted uses and stakeholders need to decide whether to standardize, revise, or retire it.

## Horizon B — Select, Compose, and Improve Techniques

### HZN-005 — Contextual technique router with abstention

**Future capability:** Translate an outcome, risk level, available evidence, and authority context into a ranked set of applicable techniques, including an explicit `no safe match` result.

**Why it matters:** Search surfaces return content; a governed router would explain applicability, missing inputs, conflicts, and why it declined to recommend a technique.

**Prerequisites:** A sufficiently diverse catalog, machine-readable applicability rules, evaluation cases, and stable provenance links back to canonical cards.

**First discriminating evidence:** On a blinded task set, improve appropriate selection without hiding ambiguity or selecting unsafe techniques for excluded conditions.

**Authority boundary:** The router recommends and explains. It does not expand execution authority or bypass a card's human gate.

**Activation signal:** Practitioners repeatedly find the wrong technique, combine incompatible techniques, or cannot identify when none applies.

### HZN-006 — Governed playbook compiler

**Future capability:** Compose multiple technique cards into an executable workflow graph with typed handoffs, evidence dependencies, stop conditions, recovery paths, and human approvals.

**Why it matters:** High-value outcomes usually require sequences of techniques; naïve chaining can erase authority boundaries and propagate uncertain outputs as facts.

**Prerequisites:** Stable input and output contracts, several verified techniques, playbook examples, and rules for evidence inheritance.

**First discriminating evidence:** Compile and execute one bounded multi-technique workflow while preserving provenance, uncertainty, and approval gates across every handoff.

**Authority boundary:** Compilation may propose the smallest coherent sequence. Consequential steps remain paused until the designated human or system authority approves them.

**Activation signal:** Repeated work uses the same multi-technique sequence and manual handoffs create errors or duplicated verification.

### HZN-007 — Capability-gap and failure-pattern miner

**Future capability:** Analyze opted-in experiment records, corrections, rejected outputs, and failed workflows to propose missing techniques, boundary refinements, or evaluation cases.

**Why it matters:** New capabilities are often visible first as recurring corrections and failure chains, not as polished prompts.

**Prerequisites:** A meaningful corpus of structured failures, de-identification rules, provenance, and duplicate-detection against the catalog.

**First discriminating evidence:** Recover a recurring failure pattern that independent reviewers agree warrants a bounded experiment rather than a wording tweak.

**Authority boundary:** The miner may propose candidates under `content/experiments/inbox/`; it may not publish technique cards, infer user intent as fact, or promote lifecycle status.

**Activation signal:** Similar failures or user corrections recur across multiple techniques, operators, or projects.

### HZN-008 — Counterfactual workflow rehearsal

**Future capability:** Rehearse a proposed AI workflow against synthetic edge cases, alternative decisions, failure injections, and authority violations before it touches real operations.

**Why it matters:** Some failure modes are too costly, rare, or sensitive to discover first in production work.

**Prerequisites:** A validated simulation contract, representative scenarios, explicit limits on transfer to reality, and human review criteria.

**First discriminating evidence:** Predict a failure that later appears in a bounded real trial, while documenting false positives and missed failures.

**Authority boundary:** Simulation results are planning evidence only. They do not prove real-world safety, readiness, acceptance, or outcomes.

**Activation signal:** A proposed technique affects money, privacy, identity, legal commitments, production state, or another difficult-to-reverse boundary.

## Horizon C — Adapt Knowledge Without Fragmenting Authority

### HZN-009 — Organization-specific policy and authority overlays

**Future capability:** Apply local roles, policies, risk tolerances, evidence requirements, and escalation paths to portable techniques without forking their canonical reasoning contract.

**Why it matters:** Organizations need context-specific controls, but embedding those controls in shared cards would reduce portability and create competing authority.

**Prerequisites:** A stable overlay schema, precedence rules, conflict detection, signed ownership, and safe defaults when an overlay is missing.

**First discriminating evidence:** Apply one technique in two organizations with different approval rules while producing the same portable core result and correctly different gates.

**Authority boundary:** Only an authorized organization owner may define an overlay. An overlay may narrow authority but must not silently grant authority absent from the host system.

**Activation signal:** Two legitimate adopters require different governance while sharing the same underlying technique.

### HZN-010 — Practitioner mastery and deliberate-practice graph

**Future capability:** Model which techniques a practitioner can apply independently, which failures recur, and which bounded exercises would create the next useful skill gain.

**Why it matters:** A searchable library can answer what exists; a learning system could help people build durable judgment rather than dependence on generated answers.

**Prerequisites:** Consent, transparent competency criteria, retained practice evidence, appeal and correction mechanisms, and separation from employment evaluation.

**First discriminating evidence:** A recommended exercise leads to independently reviewed improvement on a later task without increasing unsafe automation or hidden-context dependence.

**Authority boundary:** The graph supports learning and self-assessment. It must not make employment, credentialing, or access decisions without separately authorized governance and evidence.

**Activation signal:** Repeat practitioners use the library and request progression, practice, or evidence of capability rather than isolated answers.

### HZN-011 — Peer replication and evidence review network

**Future capability:** Let independent practitioners reproduce a technique, submit structured evidence, challenge claims, and retain disagreements without changing canonical status by popularity.

**Why it matters:** Independent replication is stronger than author demonstrations, but unstructured community ratings reward confidence and novelty rather than evidence quality.

**Prerequisites:** Contributor identity and consent rules, review schemas, conflict-of-interest disclosure, moderation, and licensing decisions.

**First discriminating evidence:** Two independent replications produce comparable receipts and a reviewer can explain why the evidence agrees or conflicts.

**Authority boundary:** Replication contributes evidence. Canonical status changes remain governed by explicit maintainership and human-review rules.

**Activation signal:** External practitioners are legally permitted and practically ready to contribute trials or reviews.

### HZN-012 — Privacy-preserving evidence federation

**Future capability:** Aggregate cross-organization evidence about technique reliability and failure patterns without centralizing sensitive prompts, source material, customer data, or credentials.

**Why it matters:** The strongest generalization evidence may exist across organizations that cannot share raw work.

**Prerequisites:** A threat model, minimum cohort rules, privacy budget or equivalent disclosure controls, interoperable evidence contracts, and independent security review.

**First discriminating evidence:** Answer one pre-registered reliability question across isolated datasets without revealing protected inputs or producing re-identification risk above the accepted threshold.

**Authority boundary:** Federation may aggregate approved facts. It may not weaken source consent, local retention rules, or organizational ownership.

**Activation signal:** Multiple organizations have comparable retained evidence and a legitimate shared question that cannot be answered safely through direct exchange.

## Horizon D — Establish a Trustworthy Ecosystem

### HZN-013 — Signed technique packages and supply-chain provenance

**Future capability:** Distribute versioned technique bundles with signatures, dependency declarations, evidence manifests, revocation status, and verifiable lineage back to canonical sources.

**Why it matters:** Once techniques travel through skills, CLIs, servers, or third-party collections, consumers need to know what changed, who attested to it, and whether evidence remains applicable.

**Prerequisites:** A distribution license, stable packaging contract, maintainer identity model, key rotation and revocation, and compatibility rules.

**First discriminating evidence:** Detect and reject a tampered or revoked package while accepting a valid update and preserving its evidence history.

**Authority boundary:** A signature proves origin and integrity, not correctness, safety, acceptance, or permission to execute.

**Activation signal:** Techniques are distributed outside the repository or consumed by more than one adapter implementation.

### HZN-014 — Capability portfolio intelligence

**Future capability:** Compare investment in techniques and adapters using retained demand, evidence quality, maintenance burden, risk reduction, time saved, and observed outcome data.

**Why it matters:** A large library can become an inventory of interesting ideas unless it can distinguish breadth from leverage and activity from value.

**Prerequisites:** Outcome observability, cost definitions, usage evidence, decision rights, and a policy against converting uncertain proxies into financial claims.

**First discriminating evidence:** Recommend stopping, revising, or investing in one capability, then retain the decision and later outcome for calibration.

**Authority boundary:** Portfolio intelligence informs prioritization. Humans retain budget, staffing, deprecation, and commercial authority.

**Activation signal:** The repository has more credible opportunities than available capacity and must choose among them using more than intuition.

## Dependency Order

```text
PROOF-001 and retained trials
├── HZN-001 Evidence lineage
│   ├── HZN-003 Drift sentinel
│   ├── HZN-004 Outcome observatory
│   └── HZN-014 Portfolio intelligence
├── HZN-002 Evaluation lab
│   ├── HZN-005 Technique router
│   └── HZN-008 Counterfactual rehearsal
├── Stable technique contracts
│   ├── HZN-006 Playbook compiler
│   └── HZN-009 Policy overlays
└── External governed participation
    ├── HZN-011 Peer replication
    ├── HZN-012 Evidence federation
    └── HZN-013 Signed packages
```

`HZN-007` becomes useful when failure evidence accumulates. `HZN-010` becomes useful when repeat practitioners exist. Neither should be activated merely because the enabling software is feasible.

## Explicit Non-Commitments

- No horizon item is a current capability, active exploration, delivery promise, or funded initiative.
- No item changes the technique lifecycle or promotes the seed technique.
- No item displaces `PROOF-001` without an explicit canonical decision.
- No automated system may grant authority, acceptance, or lifecycle promotion.
- No evidence feature may retain secrets, private customer data, credentials, or proprietary material by default.
- No ecosystem or commercial capability should proceed while licensing and adopter evidence remain unresolved.
