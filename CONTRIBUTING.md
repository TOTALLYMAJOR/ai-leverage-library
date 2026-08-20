# Contributing

## Add a technique

1. Search `CATALOG.md` and `content/techniques/` for overlap.
2. If the idea is untried, begin with an experiment log under `content/experiments/inbox/`.
3. Copy `templates/technique-card.md` into the appropriate category.
4. Assign a unique ID using `AI-<CATEGORY>-<NUMBER>`.
5. State the capability as a testable claim.
6. Document unsuitable uses, verification, human authority, and failure modes.
7. Add the card to `catalog.yaml` in deterministic ID order.
8. Update `CATALOG.md` and `CHANGELOG.md`.
9. Run `npm run validate`.

## Promotion requirements

- **Experimental:** At least one bounded trial with recorded conditions.
- **Validated:** Reproducible under the documented conditions with verification evidence.
- **Field-tested:** Used in a real workflow, reviewed by a human, with outcome evidence retained.
- **Deprecated:** Includes a reason and replacement when one exists.

A successful output alone is insufficient for promotion. Review factual accuracy, repeatability, side effects, authority boundaries, and failure behavior.

## Review checklist

- The title describes an outcome rather than a model feature.
- Inputs and outputs are explicit.
- The workflow is executable without hidden context.
- Verification matches the claim.
- Human authority is clear.
- Examples contain no secrets or sensitive customer data.
- Tool- or model-specific details are labeled as such.
