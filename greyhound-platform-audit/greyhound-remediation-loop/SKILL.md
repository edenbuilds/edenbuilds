---
name: greyhound-remediation-loop
description: Use when the user wants Greyhound to turn audit findings into code changes, diffs, refactors, PR-ready patches, and a re-audit cycle.
---

# Greyhound Remediation Loop

Use this skill after an audit when the goal is to fix issues, not just report them.

## Flow

1. Convert findings into a ranked change plan.
2. Apply the smallest safe fix first.
3. Preserve rollback clarity.
4. Re-test the affected surface.
5. Re-audit to verify the issue is actually gone.

## Output

- Change plan
- Files or components touched
- Risk notes
- Verification result
- Remaining gaps

## Rules

- Do not merge speculative refactors into urgent fixes.
- Prefer incremental patches over broad rewrites.
- Keep audit evidence linked to each fix.

