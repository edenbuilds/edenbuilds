---
name: greyhound-privacy-docs
description: Use when the user wants a privacy policy, cookie policy, terms and conditions, or related legal copy generated from audit context and product facts, with clarification questions when accuracy is enabled or facts are missing.
---

# Greyhound Privacy Docs

Use this skill to draft privacy policies, terms and conditions, cookie policies, and related legal pages from product context.

## Inputs

- Audit findings
- Data flow notes
- Jurisdiction
- Business model
- User types
- Vendor list
- Cookie and tracking stack
- Retention and deletion rules

## Rules

- Use audit evidence as the source of truth.
- If facts are missing and accuracy matters, ask clarifying questions before drafting.
- If the user wants speed over completeness, draft with explicit assumptions and a list of unknowns.
- Never invent legal guarantees.
- Mark any placeholder text clearly.

## Workflow

1. Read the audit context.
2. Identify missing facts.
3. Ask questions if accuracy is enabled or the gaps are material.
4. Draft the policy.
5. Cross-check wording against the actual product behavior.
6. Return a redline-ready version and a risk note.

## Output

- Draft policy text
- Assumptions
- Open questions
- Risk flags
- Suggested review points for counsel

