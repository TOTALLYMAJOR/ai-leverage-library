# AI Leverage Library

A Git-native field manual for useful things people can accomplish with AI that are rarely taught as a coherent practice.

This is not a prompt dump. Each technique defines an outcome, required inputs, a reproducible workflow, verification, predictable failure modes, and the point where human authority remains required.

## Design principles

- Organize by outcomes, not vendors or models.
- Treat prompts as ingredients inside a workflow.
- Prefer reproducible evidence over impressive demonstrations.
- Keep recommendations, execution, provider state, human acceptance, and observed outcomes separate.
- Preserve failed experiments when they teach a reusable boundary.
- Keep the content core portable; websites, skills, CLIs, and MCP tools are adapters.

## Library map

- **Discover** - expose structure, requirements, causes, and opportunities.
- **Decide** - compare options, rehearse consequences, and challenge assumptions.
- **Create** - produce designs, code, media, writing, and prototypes.
- **Operate** - coordinate repeatable work and bounded automation.
- **Verify** - test claims, audit evidence, and red-team results.
- **Compound** - turn completed work into memory, skills, and reusable playbooks.

## Repository structure

```text
content/
  techniques/       Canonical technique cards by outcome
  playbooks/        Multi-technique workflows
  case-studies/     Real applications and measured results
  experiments/      Inbox, active trials, and useful failures
schema/              Machine-readable content contracts
templates/           Authoring templates
scripts/             Validation and catalog checks
catalog.yaml         Machine-readable generated index
CATALOG.md           Human-readable entry point
```

## Start here

1. Browse [CATALOG.md](CATALOG.md).
2. Copy [templates/technique-card.md](templates/technique-card.md).
3. Add the card to the matching `content/techniques/<category>/` directory.
4. Update `catalog.yaml` to match the canonical card.
5. Run `npm run validate`.

## Technique lifecycle

```text
Capture -> Normalize -> Trial -> Validate -> Field-test -> Publish -> Reassess
```

Status meanings:

- `idea`: plausible, not yet trialed.
- `experimental`: trial underway or demonstrated once.
- `validated`: reproducible under documented conditions.
- `field-tested`: used successfully in a real workflow with retained evidence.
- `deprecated`: retained for history with a replacement or reason.

## Delivery roadmap

1. A searchable static documentation site or PWA.
2. A Codex skill that retrieves and applies relevant techniques.
3. A small CLI for search, creation, recommendation, and validation.
4. An MCP server after the catalog and retrieval contract stabilize.

## Current state

Version 0.1.0 establishes the repository contract, templates, validation, CI, and one seed technique. It does not yet claim a complete or field-validated library.
