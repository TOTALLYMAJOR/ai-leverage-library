# Agent Instructions

## Mission

Maintain a portable, evidence-aware library of reproducible AI techniques.

## Boundaries

- Technique cards under `content/techniques/` are the canonical technique source.
- `catalog.yaml` is a generated index and must match the canonical cards.
- Do not present a one-off demonstration as validated or field-tested.
- Keep AI recommendations, tool execution, provider acknowledgement, human acceptance, and observed outcomes distinct.
- Preserve failed experiments when they contain reusable lessons.
- Never add secrets, private customer data, credentials, or proprietary source material to examples.

## Required workflow

1. Search the catalog before adding a technique.
2. Start uncertain ideas under `content/experiments/inbox/`.
3. Create or update a technique with the template.
4. Run `npm run validate`.
5. Update `CATALOG.md` and `CHANGELOG.md` when publishing or deprecating a technique.
6. Require human review before changing a technique's authority boundary or promoting it to `field-tested`.
7. Reconcile `PROJECT_STATE.md`, `.project/state.json`, and the affected register under `docs/project/` when work materially changes project capability, architecture, lifecycle state, dependencies, blockers, proof status, product behavior, or the next proof event.

## Canonical project state contract

- `PROJECT_STATE.md` is the human-readable project definition; `.project/state.json` is its machine-readable ledger.
- Detailed capability, decision, exploration, proof, blocker, and executive views live under `docs/project/` and must not create competing state.
- Missing required evidence is `UNVERIFIED`. Documentation, implementation, tests, verification, deployment, use, and proven outcomes are distinct.
- Run `npm run validate:project-state` after changing canonical project state and `npm run validate` before publishing repository changes.
- Do not use the word `DONE` without qualification. Use `IMPLEMENTED`, `TESTED`, `VERIFIED`, `DEPLOYED`, `USED`, or `PROVEN` according to retained evidence.

Every agent completion report must answer:

- What changed?
- What capability changed state?
- What evidence proves it?
- What remains unverified?
- What decision was introduced or superseded?
- What blocker was created or removed?
- Did the next proof event change?
- Were canonical state artifacts updated? If not, why were they unaffected?

## Status ladder

`idea` -> `experimental` -> `validated` -> `field-tested` -> `deprecated`
