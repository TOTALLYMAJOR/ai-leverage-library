# Contributing

## Capture an experiment candidate

1. Search `CATALOG.md` and existing experiment records for overlap.
2. Use `npm run experiment:new -- --title "..." --hypothesis "..." --source-kind <kind> --source-reference "<sanitized-reference>"` to preview the record.
3. Review the preview for secrets, private customer data, credentials, proprietary material, unsupported claims, and mistaken authority.
4. Add `--write --retention-authorized` only when retaining the sanitized record is authorized.
5. Run `npm run validate:experiments`.

The intake command intentionally does not accept `--prompt` or `--raw-source`. Retain a safe reference and the testable hypothesis; add only source material that the repository is authorized to hold.
It rejects malformed candidate technique IDs before writing. Experiment records
must use the lifecycle directory and status pairs `inbox`/`proposed`,
`active`/`active`, or `rejected`/`rejected`.

## Add a technique

1. Search `CATALOG.md` and `content/techniques/` for overlap.
2. If the idea is untried, begin with a validated experiment log under `content/experiments/inbox/`.
3. Copy `templates/technique-card.md` into the appropriate category.
4. Assign a unique ID using `AI-<CATEGORY>-<NUMBER>`.
5. State the capability as a testable claim.
6. Document unsuitable uses, verification, human authority, and failure modes.
7. Add the card to `catalog.yaml` in deterministic ID order.
8. Update `CATALOG.md` and `CHANGELOG.md`.
9. Run `npm run validate`.

Do not keep template copies or placeholder drafts under `content/techniques/`.
That directory is the canonical published technique set and must always match
`catalog.yaml`. Keep uncertain ideas as validated experiment records under
`content/experiments/inbox/`; create the technique card only after replacing
every template placeholder and preparing its catalog entry.

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
