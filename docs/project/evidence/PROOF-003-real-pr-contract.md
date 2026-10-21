# PROOF-003: approved real-PR trial plan

## Owner disposition and current boundaries

On 2026-10-20 the repository owner replied **"accept"** to the immediately
preceding draft, titled **"Draft next proof contract — test usefulness on one
real PR"**. This record preserves that approved method. It is plan acceptance,
not acceptance of a trial result.

- Plan: **APPROVED**.
- Target repository, PR, and commit: **NEEDS_OWNER_INPUT**.
- Owner confirmation of the target requirements: **PENDING**.
- Trial execution: **NOT_AUTHORIZED / NOT_STARTED**.
- Reviewer: repository owner.

PROOF-003 remains the NEXT contract-selection event until the concrete target
and its requirements are settled. Its previous generic placeholder is narrowed
by this approval; no experiment result, completed event, or lifecycle promotion
is asserted.

## Approved contract

**Purpose:** Determine whether Constraint Compilation catches requirements or
ambiguities that the existing PR description misses.

**Task:** Review one owner-selected PR in AgentFlow, PROOFLOOM, Design
Intelligence, or DecisionIntelligence. The exact PR remains unselected.

**Method:**

1. Freeze the PR commit and relevant owner instructions.
2. Confirm the intended requirements with the owner before evaluating the result.
3. Produce a short contract listing each requirement, its source, acceptance
   check, and unresolved questions.
4. Compare that contract with the existing PR description and implementation.
5. Have the owner review the findings.

**Evidence retained:** Commit SHA, source references, requirement checklist,
comparison, verification results, and the owner's verdict. Exclude secrets and
private inputs.

**Success criteria:**

- Every confirmed requirement has a source and an observable check.
- Missing evidence is explicitly marked unverified.
- Agent suggestions are clearly distinguished from owner requirements.
- The owner confirms at least one material omission or ambiguity that the
  contract helped expose.

**If no useful finding emerges:** Record **"no added value demonstrated in this
trial"**, preserving the result.

**Authority and stop conditions:** Read-only review. No implementation, merge,
deployment, technique promotion, or new visual direction. Pause affected
conclusions when authority, requirements, or evidence are missing.

**What this could establish:** Practical usefulness on this particular PR.
Broader reliability, time savings, and reduced rework would require further
evidence.

## Remaining inputs

The owner must identify the PR. Its exact snapshot and intended requirements
must be confirmed before evaluation. Execution remains separately authorized;
approval of this plan does not choose the target or start the trial.
