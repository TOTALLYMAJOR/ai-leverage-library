# Exploration Register

Explorations are unresolved questions, not requirements or authority to execute.

## EXP-001 - Searchable documentation site or PWA

```text
Exploration: Searchable documentation adapter
Question: What smallest static or PWA surface makes canonical techniques discoverable without duplicating their authority?
Why It Matters: Manual catalog browsing will not scale with the collection.
Hypothesis: A generated static search index and offline-capable reader can remain a thin adapter.
Evidence Gathered: README roadmap only; no design, framework, or deployment configuration exists.
Alternatives: Static site; PWA; generated documentation; repository-only browsing.
Current Conclusion: Direction is specified, implementation choice is OPEN.
Decision Required: Select the retrieval contract, framework, accessibility baseline, and deployment target.
Status: OPEN
```

## EXP-002 - Codex skill adapter

```text
Exploration: Technique retrieval and application through a Codex skill
Question: How should a skill select a technique and preserve its evidence and human gates?
Why It Matters: Agent consumption is a stated delivery direction.
Hypothesis: The catalog can retrieve candidates while the canonical card supplies the workflow and authority boundary.
Evidence Gathered: README roadmap only.
Alternatives: Static skill package; generated skill; CLI-backed retrieval.
Current Conclusion: Contract and implementation are unresolved.
Decision Required: Define selection, versioning, failure, and provenance behavior.
Status: OPEN
```

## EXP-003 - Catalog CLI

```text
Exploration: Search, authoring, recommendation, and validation CLI
Question: Which operations belong in a portable CLI rather than repository scripts or adapters?
Why It Matters: A CLI is the proposed third delivery slice.
Hypothesis: Search and validation can stabilize retrieval contracts before an MCP surface is built.
Evidence Gathered: README roadmap and existing Node validator.
Alternatives: Extend npm scripts; standalone package; website-only operations.
Current Conclusion: Scope is specified but interface design is OPEN.
Decision Required: Define commands, output contract, installation, and compatibility guarantees.
Status: OPEN
```

## EXP-004 - MCP server

```text
Exploration: MCP adapter
Question: When are catalog and retrieval contracts stable enough for a server interface?
Why It Matters: Premature publication would harden an unproven contract.
Hypothesis: CLI and real usage evidence should precede MCP design.
Evidence Gathered: README explicitly places MCP after contract stabilization.
Alternatives: Build early; omit MCP; expose only static or CLI adapters.
Current Conclusion: Intentionally deferred.
Decision Required: Demonstrate stable retrieval requirements and authorize the server boundary.
Status: PARKED
```

## EXP-005 - Distribution license

```text
Exploration: Downstream reuse and contribution license
Question: Should the public repository grant reuse rights, and under what terms?
Why It Matters: Public visibility currently does not permit external use or distribution.
Hypothesis: A deliberate license will be needed before broad downstream adoption.
Evidence Gathered: LICENSE is all-rights-reserved; package.json says UNLICENSED.
Alternatives: Remain all-rights-reserved; open-source license; source-available terms; commercial license.
Current Conclusion: Rights remain reserved.
Decision Required: Rights holder selects terms before representing the library as reusable public infrastructure.
Status: OPEN
```
