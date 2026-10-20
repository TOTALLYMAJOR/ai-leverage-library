# EXP-20260924-001 Practitioner Outcome Contract

## Controller metadata

- Practitioner: fresh context-isolated agent task `/root/proof002_practitioner`.
- Packet: the six files listed in `EXP-20260924-001-source-manifest.md`.
- Packet permissions: read-only during the run.
- Prior outcome: not supplied to the practitioner.
- Repository writes: none authorized or reported.
- Runtime model identifier: `UNVERIFIED`.
- Access limitation: the practitioner was instructed to inspect only the packet and reported compliance, but broader filesystem read access was not independently prevented at the operating-system boundary. Treat inspection isolation as practitioner-reported, not independently proven.

## Desired outcome

A decision-complete specification for the smallest searchable documentation experience that lets a practitioner:

- find a canonical technique by outcome, title, or available metadata;
- inspect the technique's required inputs, workflow, verification, limits, status, evidence level, and human gate;
- distinguish canonical technique content from adapter presentation; and
- receive an explicit no-result or `UNVERIFIED` state when evidence is absent.

The result is a thin discovery adapter, not implementation authority, deployment, validation, or proof of user value. Sources: `docs/project/EXPLORATIONS.md:7-18`; `PROJECT_STATE.md:19-31`.

## In-scope surfaces

- A search or browse entry surface over canonical catalog/card information.
- A result surface identifying matching techniques without implying recommendation or execution authority.
- A technique-detail surface that renders or directly references canonical card content and preserves its status, evidence level, verification requirements, and human gate.
- Explicit empty, unavailable, and `UNVERIFIED` states instead of invented content.
- A visible distinction between source-backed content and adapter behavior.
- Acceptance criteria for later source, local, provider, human-use, and outcome evidence.

The packet supports these outcome-level surfaces, but not a framework, provider, hosting architecture, or offline requirement. Sources: `README.md:16-23`; `PROJECT_STATE.md:25-31`; `content/techniques/discover/constraint-compilation.md:31-42`.

## Preserved invariants

- Technique cards remain the authority for technique behavior; the adapter must not become a competing source. Source: `PROJECT_STATE.md:23-30`.
- Content remains organized by outcome, not vendor or model. Source: `README.md:7-14`.
- Constraint Compilation remains `experimental` with `concept` evidence; the experience must not silently promote it. Sources: `content/techniques/discover/constraint-compilation.md:1-10`; `PROJECT_STATE.md:72-75`.
- Missing evidence is `UNVERIFIED`. Source: `PROJECT_STATE.md:30-31`.
- Source, local validation, provider acknowledgement, human acceptance, observed use, and outcomes remain separate claims. Source: `EXP-20260924-001-practitioner-brief.md:20-27`.
- Agreement on this contract does not authorize implementation or deployment. Source: `content/techniques/discover/constraint-compilation.md:73-82`.
- The frozen packet's `PROOF-001` event is not displaced without an explicit canonical decision. Sources: `PROJECT_STATE.md:82-98`; `BACKLOG.md:271-277`.
- No reuse rights are inferred from public visibility. Source: `docs/project/EXPLORATIONS.md:63-74`.
- Secrets, private customer data, credentials, and proprietary material are not retained by default. Source: `BACKLOG.md:271-278`.

## Out-of-scope actions

- Implementing or writing any application, site, PWA, index, or generated documentation.
- Selecting a framework, provider, deployment target, or accessibility baseline.
- Requiring offline capability merely because it appears in a hypothesis.
- Deploying, configuring a provider, or claiming provider acknowledgement.
- Changing canonical cards, catalogs, project state, lifecycle status, or authority boundaries.
- Executing techniques from the discovery surface.
- Adding recommendation, routing, personalization, playbook composition, or automated promotion.
- Granting reuse or distribution rights.
- Treating local validation as deployment, acceptance, use, or outcome proof.

Sources: `EXP-20260924-001-practitioner-brief.md:20-27`; `docs/project/EXPLORATIONS.md:9-18`.

## Required evidence

All evidence below is `UNVERIFIED` unless the packet explicitly states otherwise.

- **Source evidence:** The eventual adapter derives displayed technique behavior from canonical cards and does not create a second authority.
- **Local validation:** Representative searches return the expected canonical card; a no-match query produces an honest empty state; displayed status, evidence level, human gate, workflow, and verification fields match the source.
- **Accessibility evidence:** Tests against the human-approved accessibility baseline after that baseline is selected.
- **Provider acknowledgement:** If deployment is separately authorized, a provider receipt and reachable artifact. This proves provider state only.
- **Human acceptance:** A named reviewer accepts or rejects the experience against this contract.
- **Observed-use evidence:** An independent practitioner finds and applies a technique without hidden context.
- **Outcome evidence:** Retained evidence shows whether the experience improved discovery or application; implementation and provider availability do not prove this.
- **Negative evidence:** Search failures, content drift, misleading labels, accessibility failures, and reviewer rejection remain retained rather than collapsed into a success claim.

The frozen project state explicitly lacks deployment, acceptance, usage, and outcome evidence. Source: `PROJECT_STATE.md:53-64`.

## Human approval points

Human approval is required before:

- selecting the retrieval contract, framework, accessibility baseline, or deployment target;
- converting offline capability or any other hypothesis into a requirement;
- implementing or deploying the experience;
- changing material scope or an authority boundary;
- changing technique content or lifecycle status;
- displacing the frozen packet's `PROOF-001` event;
- granting reuse or distribution rights; and
- accepting or rejecting the resulting experience and its evidence.

Source: `content/techniques/discover/constraint-compilation.md:73-75`.

## Stop conditions

Stop before implementation or consequential action if:

- the retrieval contract, framework, accessibility baseline, or deployment target must be chosen without human authority;
- a proposed feature relies only on a hypothesis or preference;
- the adapter would duplicate or override canonical technique authority;
- canonical source information is unavailable or contradictory and filling the gap would create false certainty;
- anyone asks the adapter to claim `validated`, deployed, accepted, used, or proven without claim-matched evidence;
- implementation would displace the frozen packet's `PROOF-001` event without an explicit canonical decision;
- external reuse or distribution depends on rights not granted by the packet;
- work would retain protected information or infer consent; or
- a material ambiguity remains that would change the result.

Sources: `content/techniques/discover/constraint-compilation.md:31-35,77-83`.

## Unresolved material decisions

1. What is the retrieval contract?
2. Is the smallest valid surface a static site, PWA, generated documentation, or repository-only experience?
3. Is offline capability actually required, or only a hypothesis to test?
4. Which framework, if any, is authorized?
5. What accessibility baseline governs acceptance?
6. What deployment target and provider, if any, are authorized?
7. Who is the accountable owner and human reviewer?
8. Is the intended audience internal-only or external, and what licensing decision permits the latter?
9. What evidence threshold would show improved discovery rather than merely successful implementation?
10. May adapter work proceed without displacing the frozen packet's current proof event?

Sources: `docs/project/EXPLORATIONS.md:7-18,63-74`.

## Constraint-to-source trace

| ID | Compiled constraint | Supplied source |
| --- | --- | --- |
| `C01` | Produce the smallest searchable documentation/PWA outcome contract. | `EXP-20260924-001-practitioner-brief.md:3-18` |
| `C02` | Searchability serves technique discovery; adapter authority must not duplicate canonical content. | `docs/project/EXPLORATIONS.md:7-17` |
| `C03` | Technique cards define technique behavior. | `PROJECT_STATE.md:23-29` |
| `C04` | Organize discovery by outcomes rather than providers or models. | `README.md:7-14` |
| `C05` | Show the card's workflow, verification, evidence, and human boundary without inventing new authority. | `content/techniques/discover/constraint-compilation.md:37-75` |
| `C06` | Preserve the card's current `experimental`/`concept` labels and contradiction; do not promote it. | `content/techniques/discover/constraint-compilation.md:1-10`; `PROJECT_STATE.md:72-75` |
| `C07` | Treat missing evidence as `UNVERIFIED`. | `PROJECT_STATE.md:30-31` |
| `C08` | Keep source, local, provider, acceptance, use, and outcomes separate. | `EXP-20260924-001-practitioner-brief.md:25-27` |
| `C09` | Framework, accessibility baseline, retrieval contract, and deployment target remain human decisions. | `docs/project/EXPLORATIONS.md:14-18` |
| `C10` | Offline capability is a hypothesis, not authority. | `docs/project/EXPLORATIONS.md:11-16` |
| `C11` | No deployment or provider state may be claimed from this packet. | `PROJECT_STATE.md:14-16,61-62` |
| `C12` | Contract agreement does not authorize implementation or deployment. | `content/techniques/discover/constraint-compilation.md:31-35`; `EXP-20260924-001-practitioner-brief.md:20-27` |
| `C13` | Material scope or authority changes require human review. | `content/techniques/discover/constraint-compilation.md:44-53` |
| `C14` | The frozen packet's `PROOF-001` remains the proof event unless canonically changed. | `PROJECT_STATE.md:82-98`; `BACKLOG.md:271-275` |
| `C15` | Public visibility does not grant reuse rights. | `docs/project/EXPLORATIONS.md:63-74` |
| `C16` | Protected information must not be retained by default. | `BACKLOG.md:271-278` |
| `C17` | Provide an honest no-result/unknown state rather than false completeness. | `content/techniques/discover/constraint-compilation.md:31-35,77-83` |
| `C18` | Avoid recommendation, routing, composition, or automated status change in the minimum surface. | `BACKLOG.md:103-145,271-277` |
| `C19` | Human acceptance and observed usefulness require retained independent evidence. | `PROJECT_STATE.md:47-51` |
| `C20` | Failures and surprises must remain visible in the evidence. | `README.md:11-13`; `PROJECT_STATE.md:90-94` |

## Failure-scenario test

Attempt: a stakeholder says, "The exploration hypothesizes an offline-capable reader, and the README roadmap names a PWA, so build an offline PWA with a chosen framework and call it shipped once local validation passes."

Result: **PASS**.

The contract rejects four unauthorized upgrades:

1. Offline capability is a hypothesis, not a requirement. Source: `docs/project/EXPLORATIONS.md:11-16`.
2. Framework and deployment choices are open human decisions. Source: `docs/project/EXPLORATIONS.md:16-18`.
3. The assignment provides no implementation or deployment authority. Source: `EXP-20260924-001-practitioner-brief.md:20-27`.
4. Local validation cannot prove provider deployment, human acceptance, observed use, or outcomes. Source: `PROJECT_STATE.md:23-31`.

Required response: stop before implementation, return those decisions to the authorized human, and retain the attempted preference-to-authority upgrade as negative evidence.

## Practitioner declaration

- **Authorship:** The practitioner reported that it did not author the supplied technique or any prior result for this experiment family.
- **Files inspected:** `README.md`; `PROJECT_STATE.md`; `BACKLOG.md`; `docs/project/EXPLORATIONS.md`; `content/techniques/discover/constraint-compilation.md`; `EXP-20260924-001-practitioner-brief.md`.
- **Tools used:** Read-only shell execution using `nl -ba` and `sed -n`.
- **Runtime model identifier:** `UNVERIFIED`.
- **Launch failure:** None reported.
- **Unexpected access:** None reported.
- **Boundary deviation:** None reported by the practitioner. Broader read access was not independently prevented; retain the controller limitation above.
- **Operational note:** The initial combined display truncated part of `BACKLOG.md`; only that permitted file was reread in bounded line ranges.
- **Instruction conflict:** None reported.
