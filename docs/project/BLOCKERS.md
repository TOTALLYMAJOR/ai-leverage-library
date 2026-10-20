# Blocker Register

Only conditions that prevent the next meaningful outcome belong here. Broader ideas remain in `EXPLORATIONS.md`.

## BLK-001 - Repetition awaiting disposition

```text
Priority: P1
Evidence: `EXP-20260924-001` produced a materially consistent source-traced result, but runtime identity is unverified and broader filesystem non-access was practitioner-reported rather than technically enforced.
Affected Goal: GOAL-USER; GOAL-ORGANIZATIONAL
Affected Journey: JOURNEY-PRIMARY
Dependencies: CAP-004; CAP-011; CAP-012
Resolution Condition: An authorized human accepts or rejects PROOF-002 and explicitly decides whether the retained independence and access-control limitations satisfy the proof contract or require a stricter rerun.
Status: CLOSED on 2026-10-20
Resolution: Repository owner accepted the linked bounded result with its documented limitations. See evidence/EXP-20260924-001-human-disposition.md. Runtime identity and technically enforced broader-filesystem isolation remain unverified.
```

## BLK-004 - Next proof contract awaits owner selection

```text
Priority: P1
Evidence: PROOF-002 is accepted with limitations; no subsequent workflow, evidence threshold, reviewer, or execution authority has been selected.
Affected Goal: GOAL-USER; GOAL-ORGANIZATIONAL
Affected Journey: JOURNEY-PRIMARY
Dependencies: CAP-004; CAP-011
Resolution Condition: Owner selects a bounded next proof contract, including workflow, evidence, reviewer, pass/fail conditions, and stop conditions. Execution requires separate authorization.
Status: OPEN
```

## Priority Definitions

- `P0`: prevents correctness or safe operation.
- `P1`: prevents the primary journey or next proof event.
- `P2`: prevents production, organizational adoption, or commercialization.
- `P3`: materially degrades user experience or operations.
- `P4`: enhancement.
