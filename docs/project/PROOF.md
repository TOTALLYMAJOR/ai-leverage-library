# Proof Register

Verdicts describe evidence available in this reconciliation, not likelihood.

| Claim | Required Evidence | Current Evidence | Verdict |
| --- | --- | --- | --- |
| The repository defines a portable technique-card contract. | Canonical location, template, schema, example, and governance authority | `AGENTS.md`, `templates/technique-card.md`, `schema/technique.schema.json`, and the seed card exist | `PROVEN` as repository structure only |
| Technique metadata and catalog agreement are validated locally. | Validator source plus a passing local check | `scripts/validate.mjs` exists and `npm run validate` passed locally on 2026-09-24 | `PROVEN` locally; CI remains `UNVERIFIED` |
| The canonical project state detects obvious drift. | Ledger, schema, validator, and passing targeted execution | `.project/state.json`, its schema, and `npm run validate:project-state` passing locally on 2026-09-24 | `PROVEN` locally; CI remains `UNVERIFIED` |
| Experiment candidates can be captured as governed proposed records. | Preview-first intake, explicit retention authorization, safe source references, overlap review, lifecycle validation, and passing tests | Intake command, schema, validator, automated tests, and one structurally valid proposed record | `PROVEN` locally as intake structure only; independent use is `UNVERIFIED` |
| Constraint Compilation is reproducible under documented conditions. | At least one retained, human-reviewed bounded trial, followed by repetition under documented conditions and claim-matched verification | The repository owner accepted one retained practitioner result with documented limitations; a validated repetition protocol exists but has not been run | `UNVERIFIED` |
| The seed technique satisfies the repository's `experimental` bounded-trial requirement. | At least one bounded trial with recorded conditions and required human review | One active trial retains an owner-accepted-with-limitations practitioner result and its procedural deviations | `PROVEN` for the bounded-trial requirement only; no automatic promotion or evidence-level change |
| Pull requests and main pushes are validated by GitHub Actions. | Provider run for the exact revision with a successful conclusion | Workflow configuration exists; no provider receipt was inspected in this reconciliation | `UNVERIFIED` operationally |
| Users can search the library through a website or PWA. | Implemented search/UI, tests, deployed route, and user evidence | README roadmap only; no application source or deployment configuration exists | `CONTRADICTED` if stated as current capability |
| The library has produced accepted user or organizational outcomes. | Retained usage, human disposition, and measured outcome evidence | One artifact is accepted with limitations, but no observed use, case study, measured outcome, or organizational result exists | `UNVERIFIED` |
| The library is commercially validated. | Target buyer, offer, activation, usage, retention, measured value, and transaction evidence | Economic buyer, offer, customers, usage, and revenue are `UNKNOWN` or `UNVERIFIED` | `UNVERIFIED` |

## Evidence Boundaries

- Repository source can prove what is written or configured.
- A local command result can prove behavior only for the inspected working tree and environment.
- A workflow file cannot prove a provider executed it.
- A deployment configuration cannot prove a deployment exists.
- A generated result cannot prove human acceptance.
- One accepted result cannot prove repeatability, retention, or commercial value.
- External claims require provider, user, organizational, or transaction evidence as applicable.

## Promotion Rule

This register never promotes a technique or capability. It records evidence and contradictions. Human review remains required where `AGENTS.md` assigns authority.
