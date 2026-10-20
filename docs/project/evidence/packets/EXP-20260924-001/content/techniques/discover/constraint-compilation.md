---
id: AI-DISCOVER-001
title: Constraint compilation
category: discover
status: experimental
difficulty: intermediate
risk: low
human_gate: review-before-execution
evidence_level: concept
last_verified: 2026-08-20
tags: requirements, planning, ambiguity
---

# Constraint compilation

## What AI can do

Transform a messy request, conversation, or collection of notes into a decision-complete outcome contract: the desired result, preserved invariants, exclusions, evidence requirements, open decisions, and stopping conditions.

## Why it matters

Many AI failures begin before implementation. The system optimizes for the visible request while silently losing constraints scattered across earlier messages, documentation, examples, or operational rules. Constraint compilation turns those fragments into an inspectable contract before consequential work begins.

## Use it when

- A request includes multiple goals, exceptions, or implied boundaries.
- Several documents disagree or assign overlapping authority.
- Work could affect production, money, identity, privacy, or irreversible state.
- Multiple people or agents need the same definition of done.

## Do not use it when

- The task is a trivial, reversible action with an obvious result.
- The source material is unavailable and filling gaps would create false certainty.
- Compilation would be mistaken for approval to execute.

## Required inputs

- The requested outcome.
- Applicable instructions and sources of truth.
- Known current state and existing work.
- Exclusions, approval requirements, and evidence expectations.

## Workflow

1. Extract every desired outcome as a testable statement.
2. Separate preserved invariants from implementation preferences.
3. Record exclusions and actions requiring fresh authority.
4. Identify the source of truth for each disputed fact.
5. Convert completion language into evidence requirements.
6. List unresolved decisions that materially change the result.
7. Produce the smallest execution boundary satisfying the contract.
8. Ask for review when the contract changes scope or authority.

## Output contract

- Desired outcome
- In-scope surfaces
- Preserved invariants
- Out-of-scope actions
- Required evidence
- Human approval points
- Stop conditions
- Unresolved material decisions

## Verification

- Trace every compiled constraint to a supplied source.
- Check that no preference was upgraded into authority.
- Test the contract against a plausible failure scenario.
- Confirm that implemented, deployed, and accepted remain separate when applicable.

## Human authority

AI may organize and identify constraints. A human must approve material scope changes, consequential execution, and interpretations that create new authority.

## Failure modes

- **False completeness:** Missing context is presented as resolved.
- **Constraint laundering:** A suggestion becomes a mandatory requirement.
- **Approval drift:** Agreement on a plan is treated as authorization to execute.
- **Evidence collapse:** Local output is presented as deployment or outcome proof.
- **Overfitting:** The contract blocks a simpler valid solution.

## Worked example

A request to "ship the new workflow" may compile into separate requirements for source completion, tests, merge, configuration, deployment, provider acknowledgement, tenant activation, and human acceptance. The technique exposes which steps were requested and which require additional authority.

## Portability notes

Repository-specific commands, risk tiers, and approval roles belong in project adapters. The portable technique defines the reasoning workflow and evidence boundary only.
