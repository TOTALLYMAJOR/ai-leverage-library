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

## Status ladder

`idea` -> `experimental` -> `validated` -> `field-tested` -> `deprecated`
