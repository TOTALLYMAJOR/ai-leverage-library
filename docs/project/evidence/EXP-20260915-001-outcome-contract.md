# EXP-20260915-001 Practitioner Outcome Contract

## Practitioner metadata

- Experiment: `EXP-20260915-001`.
- Practitioner: fresh Codex thread `01a0c193-34a5-7d00-9c96-99195f18061c`; it did not author the technique in that thread. Historical authorship independence was not independently verified.
- Runtime model: exact identifier unavailable. The practitioner's self-report named “GPT-6” from its developer context; that is retained but is not accepted as runtime proof.
- Access used: read-only shell, `git show`, and SHA-256 calculation. No repository writes, implementation, or network sources.
- Inspection boundary: the six listed repository files were inspected. The runtime also automatically read its operational skills and task-scope manifest; those supplied no product constraints.
- Source commit: `f0756da78ad0b985b0ac4997f5856ad4168d5e64`.
- Integrity: all supplied hashes matched. `AGENTS.md` was additionally hashed as `8f716d63aebf72fbda39843a2d35d01bd4a1f8fd9b68d2ebea413d422230867e`.

| File | SHA-256 |
| --- | --- |
| `README.md` | `1af92560eb35c51804214b0d0df08c50b00afa787cece264c900245e860a946c` |
| `PROJECT_STATE.md` | `da0597c6b936d4deb175b9cca2fde691f84bbf5afb317a4e0512f4e0e10ec72e` |
| `BACKLOG.md` | `fe80fa0e0bf7611473ea9ebeed58834568b6c5b50ccdb0bd7f6c09f0bc31192b` |
| `docs/project/EXPLORATIONS.md` | `b8ce79e9bd3af927d9b0486b93711c1e1ff138c0aa47a4d1b3e3162b85cec094` |
| `content/techniques/discover/constraint-compilation.md` | `3adeffddfa2643d9be80f1805afb32b8d618c3c947cd6f5d9b661b917039c664` |

Citations below refer to the frozen files at the source commit. `Method` means `content/techniques/discover/constraint-compilation.md`.

## Desired outcome

**C1 —** A practitioner can search the library for an outcome or problem, reach the canonical technique, and obtain its inputs, workflow, verification requirements, and human-authority boundaries without hidden context. Acceptance requires demonstrating that journey against an approved retrieval contract. Search relevance criteria remain unresolved. Sources: `README.md:5,9,69`; `PROJECT_STATE.md:21,35-44`.

This contract does not authorize or demonstrate implementation. The adapter is specified/planned, with no implementation. Sources: `Method:34-35,75`; `PROJECT_STATE.md:61`.

## In-scope surfaces

**C2 —** The smallest candidate surface is documentation discovery/search and technique reading, presented through a static documentation site or PWA. The contract does not require both. The portable content core remains authoritative independently of the adapter. Sources: `README.md:14,29,36,69`; `PROJECT_STATE.md:25`; `docs/project/EXPLORATIONS.md:11-17`.

The exploration's generated search index and offline reader are hypotheses, not approved requirements. Source: `docs/project/EXPLORATIONS.md:3,13-17`.

## Preserved invariants

- **C3 — Canonical authority:** Technique cards define behavior; the adapter must preserve their inputs, workflow, verification, and human gates rather than create competing authority. Organize discovery around outcomes, not vendors. Sources: `README.md:5,9,14`; `PROJECT_STATE.md:25,40-44`.
- **C4 — Evidence separation:** Implementation, local testing, provider acknowledgement, human acceptance, use, and observed value remain separate claims. Missing evidence stays `UNVERIFIED`; one demonstration cannot establish reproducibility or field use. Sources: `README.md:11-12,61-65`; `PROJECT_STATE.md:21,30-31`.
- **C5 — Planning authority:** Backlog entries and exploration hypotheses do not become requirements, capabilities, or execution permission through compilation. Adapter work does not replace `PROOF-001`. Sources: `PROJECT_STATE.md:28-29,98`; `BACKLOG.md:273-276`; `docs/project/EXPLORATIONS.md:3`.
- **C6 — Safe trial evidence:** Retained trial inputs must exclude secrets and proprietary material; preserve failures and surprises alongside human disposition. Sources: `PROJECT_STATE.md:90-94`; `README.md:13,44-45`.

## Out-of-scope actions

**C7 —** This boundary excludes implementing the separate Codex skill, general CLI, MCP server, or horizon capabilities. Their roadmap presence does not enlarge the requested documentation experience. Sources: `README.md:69-72`; `PROJECT_STATE.md:29`; `BACKLOG.md:273-275`.

No automatic technique promotion, authority expansion, or claim of downstream reuse permission follows from creating an adapter. Licensing remains unresolved. Sources: `PROJECT_STATE.md:64,104`; `BACKLOG.md:276`; `Method:75`.

## Required evidence

**C8 — Claim-matched acceptance evidence:**

| Claim | Minimum evidence |
| --- | --- |
| Searchable documentation works | Retained demonstration of an approved query leading to the correct canonical technique and usable workflow; expected results derive from the open retrieval contract. |
| Authority and portability are preserved | Comparison of displayed technique content and boundaries with its canonical source. |
| Implementation or testing exists | Revision-specific source and retained test results; neither establishes deployment or acceptance. |
| Deployment occurred, if authorized | Provider acknowledgement tied to the delivered revision; this alone does not establish use or value. |
| The experiment was accepted or rejected | Safe inputs, this contract, verification results, failures/surprises, and an authorized human disposition. |
| User or organizational value occurred | Retained use and outcome evidence appropriate to that claim. |

These are derived acceptance checks, not evidence already obtained. Sources: `PROJECT_STATE.md:21,25,30-31,86-94`; `Method:50,68-71`.

## Human approval points

**C9 —** An authorized human must review material scope changes, consequential execution, and interpretations creating authority. Contract agreement is not execution authorization. Sources: `Method:53,75,81`.

Before product work proceeds, resolve the material implementation choices below. Before claiming `PROOF-001` acceptance, identify the authorized reviewer and retain acceptance or rejection. Before representing the library as reusable public infrastructure, obtain the rights holder's terms decision. Sources: `docs/project/EXPLORATIONS.md:17,73`; `PROJECT_STATE.md:86-94`.

## Stop conditions

**C10 —** Stop the affected action or claim when:

- A required decision or source is missing and proceeding would substitute invented certainty. Sources: `Method:34,51,79`.
- A hypothesis, backlog option, or planning agreement is treated as authority to execute. Sources: `docs/project/EXPLORATIONS.md:3`; `BACKLOG.md:3`; `Method:81`.
- The adapter changes canonical behavior or erases evidence/human boundaries. Sources: `PROJECT_STATE.md:25,30`; `Method:75`.
- Safe evidence retention cannot be assured, or human disposition is absent when acceptance is claimed. Sources: `PROJECT_STATE.md:90-94`.
- Implementation, deployment, acceptance, or value is claimed without matching evidence. Source: `PROJECT_STATE.md:30-31`.

## Unresolved material decisions

| Decision or conflict | Disposition |
| --- | --- |
| Static documentation versus PWA; offline/installable behavior | OPEN. “Documentation/PWA” does not resolve the alternatives. Offline reading remains a hypothesis. `README.md:69`; `docs/project/EXPLORATIONS.md:13-17`. |
| Retrieval contract | OPEN: search scope, matching behavior, expected results, and failure/no-result behavior need approval. `docs/project/EXPLORATIONS.md:17`. |
| Framework, accessibility baseline, deployment target | OPEN; no choice or numeric threshold is authorized. `docs/project/EXPLORATIONS.md:14-17`; `PROJECT_STATE.md:15`. |
| Authorized reviewer and acceptance responsibility | Not named in the frozen packet or practitioner brief. Human review remains outstanding. `PROJECT_STATE.md:80,90-92,102`. |
| Distribution rights | Rights remain reserved; rights-holder decision outstanding. `PROJECT_STATE.md:64`; `docs/project/EXPLORATIONS.md:67-74`. |
| Seed technique status | `experimental` with `concept` evidence and no accepted trial at the frozen baseline. Preserve the discrepancy; do not relabel or promote. `Method:5,9`; `PROJECT_STATE.md:74,104`. |

Unsupported assumptions: no search technology, hosting provider, mandatory offline mode, accessibility standard, latency target, analytics requirement, or licensing grant is assumed.

## Constraint trace

| Constraint | Primary authority |
| --- | --- |
| C1 — Find and apply a technique | `README.md:5,69`; `PROJECT_STATE.md:21,35-44` |
| C2 — Minimal documentation adapter | `README.md:14,69`; `docs/project/EXPLORATIONS.md:3,11-17` |
| C3 — Canonical content and outcome organization | `README.md:5,9,14`; `PROJECT_STATE.md:25` |
| C4 — Evidence separation | `README.md:61-65`; `PROJECT_STATE.md:30-31` |
| C5 — No planning-to-authority promotion | `PROJECT_STATE.md:28-29,98`; `BACKLOG.md:273-276` |
| C6 — Safe evidence and retained failures | `README.md:13,44-45`; `PROJECT_STATE.md:90-94` |
| C7 — Excluded adapters and automatic promotion | `README.md:69-72`; `PROJECT_STATE.md:64,104`; `BACKLOG.md:273-276` |
| C8 — Claim-matched proof | `PROJECT_STATE.md:21,30-31,86-94`; `Method:50,68-71` |
| C9 — Human decisions | `Method:53,75,81`; `PROJECT_STATE.md:90-92`; `docs/project/EXPLORATIONS.md:17,73` |
| C10 — Stop on unsupported authority or claims | `Method:34,75,79-82`; `PROJECT_STATE.md:25,30-31,90-94` |

## Failure-scenario test

Scenario: an implementer reads the exploration's offline-reader hypothesis and declares, “An offline PWA is mandatory; a searchable static site fails acceptance.”

1. `docs/project/EXPLORATIONS.md:13` labels offline reading a hypothesis.
2. Lines 3 and 15-17 preserve alternatives and unresolved implementation choice.
3. `README.md:69` permits a static documentation site or PWA.
4. C2 and C5 reject mandatory offline behavior; C10 stops dependent work pending a human decision under C9.

Result: the contract detects constraint laundering and preserves the simpler static-site option. This is a logical scenario check, not a software test or proof of real-world effectiveness. Method basis: `Method:69-70,80,83`.

## Self-verification

- Every compiled constraint C1-C10 has frozen-packet citations.
- Exploration hypotheses and backlog options remain non-authoritative.
- Hash checks and the logical failure test were performed.
- Human acceptance is recorded below. Implementation, deployment, repeatability, and user value remain `UNVERIFIED`.
- No product capability changed state; no canonical decision was introduced or superseded.
- `PROOF-001` received an authorized acceptance-with-limitations disposition on 2026-09-24; repeatability and downstream outcome claims remain unverified.

## Controller verification and deviations

- The successful practitioner run was read-only and returned the required output sections.
- The first launch failed because `gpt-5.4` was unsupported; the second received an empty prompt because its environment payload was dropped. Neither produced a trial artifact. The third used the supported default model and stdin prompt delivery.
- The runtime automatically read operational skill and scope files beyond the six repository files. They were not used as product evidence, but the literal “only listed files were inspected” condition was not met.
- The exact runtime model identifier and historical non-authorship remain unverified.
- No authorized reviewer was named before execution. The repository owner later reviewed and accepted the retained artifact with this deviation preserved; no automatic promotion follows.

## Human review disposition

- Reviewer: repository owner acting as the authorized human reviewer.
- Date: 2026-09-24.
- Disposition: **ACCEPTED WITH RETAINED LIMITATIONS**.
- Accepted evidence: the source-traced constraints, integrity checks, failure-scenario result, launch failures, and inspection-boundary deviation.
- Limits preserved: historical practitioner non-authorship and exact runtime model identity remain unverified; one accepted trial does not prove repeatability, implementation, deployment, use, or user value.
- Authority boundary: this disposition does not promote the technique, authorize implementation or deployment, or grant distribution rights.
