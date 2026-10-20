# EXP-20260924-001 Controller Comparison

Status: `ACCEPTED_WITH_LIMITATIONS`

This comparison evaluates the second practitioner contract against `docs/project/evidence/EXP-20260915-001-outcome-contract.md`. Its execution checks and controller verdict below retain the pre-disposition record. The repository owner's 2026-10-20 acceptance, including the retained limitations, is recorded in [the human disposition](EXP-20260924-001-human-disposition.md).

## Execution checks (historical, before human disposition)

| Check | Evidence | Controller result |
| --- | --- | --- |
| Frozen product inputs | All five SHA-256 values regenerated from `f0756da78ad0b985b0ac4997f5856ad4168d5e64` and matched both experiment manifests | `PASS` |
| Packet contents | Five frozen product files plus one practitioner brief; zero symlinks; packet directory was read-only | `PASS` |
| Prior outcome blindness | The prior outcome was not supplied; practitioner reported inspecting only the six packet files | `PARTIAL` — broader filesystem read access was not independently prevented |
| Practitioner non-authorship | Fresh context-isolated agent task reported no authorship of the technique or prior experiment result | `PARTIAL` — historical identity and runtime model are independently `UNVERIFIED` |
| Source traceability | `C01`-`C20` cite the supplied frozen packet; controller spot checks found the cited authority and non-commitment claims at the recorded lines | `PASS` |
| Scope and authority | Contract preserves canonical-card authority, human decisions, evidence separation, licensing limits, and no implementation/deployment authority | `PASS` |
| Failure behavior | Contract rejects mandatory offline-PWA behavior, invented framework choice, deployment claims, and local-evidence inflation | `PASS` |
| Human disposition | No authorized human acceptance or rejection has been supplied for this repetition | `PENDING` |

## Comparison with PROOF-001 (historical, before human disposition)

| Comparison area | PROOF-001 | PROOF-002 practitioner result | Classification |
| --- | --- | --- | --- |
| Smallest surface | Static documentation or PWA remained alternatives | Static site, PWA, generated documentation, and repository-only experience remain alternatives | Compatible variation |
| Canonical authority | Adapter cannot compete with technique cards | Adapter must render or reference canonical card content without becoming authority | Consistent |
| Offline behavior | Offline reader remained a hypothesis | Offline capability remains a hypothesis and cannot become mandatory | Consistent |
| Evidence boundaries | Source, local, provider, acceptance, use, and outcomes separated | Same boundaries retained with explicit future evidence classes | Consistent |
| Human decisions | Retrieval contract, framework, accessibility baseline, deployment target, reviewer, and license unresolved | Same decisions remain unresolved; audience and outcome threshold are additionally explicit | Compatible elaboration |
| Lifecycle authority | No automatic technique promotion | Current `experimental`/`concept` state preserved; no promotion authorized | Consistent |
| Failure scenario | Rejected mandatory offline PWA | Independently selected and rejected the same preference-to-authority failure pattern | Consistent signal |
| Constraint granularity | Ten compiled constraints | Twenty finer-grained constraints | Compatible elaboration |
| Empty/no-result behavior | Stop on missing authority or evidence | Adds an explicit empty or `UNVERIFIED` state | Compatible derived behavior, not implementation authority |
| Proof-event wording at execution time | Frozen packet identified `PROOF-001` as next | Repetition correctly reports the frozen packet's `PROOF-001` state | Expected frozen-baseline result; repository state at execution time remained `PROOF-002` |

## Contradictions and unsupported additions

- No material contradiction with `PROOF-001` was found.
- No product implementation, deployment, use, or outcome claim was introduced.
- The explicit no-result state is a derived adapter behavior supported by the technique's false-completeness boundary and the horizon router's abstention concept. It remains a proposed contract term, not an implemented capability.
- Practitioner independence and source isolation are not proven strongly enough for automatic blocker removal because runtime identity is unavailable and broader filesystem read access was not technically denied.

## Controller verdict (historical, before human disposition)

The repetition produced a complete, source-traced contract whose core constraints are materially consistent with `PROOF-001` and whose differences are compatible elaborations rather than contradictions. The result is suitable for authorized human review.

Keep `BLK-001` open and keep `PROOF-002` as the next proof event until an authorized human accepts or rejects the repetition and explicitly decides whether the retained independence and access-control limitations satisfy the proof contract. Do not change technique status or evidence level automatically.
