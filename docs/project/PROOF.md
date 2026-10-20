# Proof Register

Verdicts describe evidence available in this reconciliation, not likelihood.

| Claim | Required Evidence | Current Evidence | Verdict |
| --- | --- | --- | --- |
| The repository defines a portable technique-card contract. | Canonical location, template, schema, example, and governance authority | `AGENTS.md`, `templates/technique-card.md`, `schema/technique.schema.json`, and the seed card exist | `PROVEN` as repository structure only |
| Technique metadata and catalog agreement are validated locally. | Validator source plus a passing local check | `scripts/validate.mjs` exists and `npm run validate` passed locally on 2026-09-24 | `PROVEN` locally and in the merged-main validation run documented in the [CI receipt](evidence/CI-20261020-pr3-main-validation.md); later revisions need their own checks |
| The canonical project state detects obvious drift. | Ledger, schema, validator, and passing targeted execution | `.project/state.json`, its schema, and `npm run validate:project-state` passing locally on 2026-09-24 | `PROVEN` locally and in the merged-main validation run documented in the [CI receipt](evidence/CI-20261020-pr3-main-validation.md); later revisions need their own checks |
| Experiment candidates can be captured as governed proposed records. | Preview-first intake, explicit retention authorization, safe source references, overlap review, lifecycle validation, and passing tests | Intake command, schema, validator, automated tests, and two structurally valid active experiment records | `PROVEN` locally as intake structure only; independent contributor use is `UNVERIFIED` |
| The bounded PROOF-002 artifact received authorized human disposition. | Explicit owner acceptance or rejection bound to the reviewed artifact and its limitations | `docs/project/evidence/EXP-20260924-001-human-disposition.md` records the owner reply and reviewed main revision on 2026-10-20 | `ACCEPTED_WITH_LIMITATIONS` as an artifact only |
| Constraint Compilation is reproducible under documented conditions. | At least one retained, human-reviewed bounded trial, followed by repetition under documented conditions and claim-matched verification | Both bounded results have owner acceptance with documented limitations; independent runtime identity and technically enforced isolation remain unverified | `UNVERIFIED` as a reproducibility claim; qualified artifact acceptance is recorded |
| The original six-file repetition input packet can be checked without unpublished Git history. | Retained original files, original manifest hashes, verifier, and negative-case tests | `docs/project/evidence/packets/EXP-20260924-001/`, the source manifest, and `npm run validate:proof-packet`; all six hashes and seven local tests passed on 2026-10-20 | `PROVEN` locally as packet byte identity only; practitioner independence and reproducibility remain `UNVERIFIED`; human artifact acceptance is recorded separately |
| The seed technique satisfies the repository's `experimental` bounded-trial requirement. | At least one bounded trial with recorded conditions and required human review | One active trial retains an owner-accepted-with-limitations practitioner result and its procedural deviations | `PROVEN` for the bounded-trial requirement only; no automatic promotion or evidence-level change |
| Pull requests and main pushes are validated by GitHub Actions. | Provider run for the exact revision with a successful conclusion | PR #3 run 39514826108 and merged-main run 39515288921 both succeeded; exact SHAs and passing checks are retained in the [CI receipt](evidence/CI-20261020-pr3-main-validation.md) | `VERIFIED` provider execution for the two listed snapshots only |
| Users can search the library through a website or PWA. | Implemented search/UI, tests, deployed route, and user evidence | README roadmap only; no application source or deployment configuration exists | `CONTRADICTED` if stated as current capability |
| The library has produced accepted user or organizational outcomes. | Retained usage, human disposition, and measured outcome evidence | Two bounded artifacts are accepted with limitations; no observed use, case study, measured outcome, or organizational result is established | `UNVERIFIED` |
| The library is commercially validated. | Target buyer, offer, activation, usage, retention, measured value, and transaction evidence | Economic buyer, offer, customers, usage, and revenue are `UNKNOWN` or `UNVERIFIED` | `UNVERIFIED` |

## Evidence Boundaries

- Repository source can prove what is written or configured.
- A local command result can prove behavior only for the inspected working tree and environment.
- A workflow file cannot prove a provider executed it.
- A deployment configuration cannot prove a deployment exists.
- A generated result cannot prove human acceptance.
- Two generated results cannot prove accepted repeatability, observed use, retention, or commercial value without the required human and outcome evidence.
- External claims require provider, user, organizational, or transaction evidence as applicable.

## Promotion Rule

This register never promotes a technique or capability. It records evidence and contradictions. Human review remains required where `AGENTS.md` assigns authority.
