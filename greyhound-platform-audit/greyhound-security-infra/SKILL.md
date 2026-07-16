---
name: greyhound-security-infra
description: Use when the user needs security, infra, compliance, observability, dependency, or architecture review for a web platform, dashboard, monorepo, or internal tool.
---

# Greyhound Security and Infra

Use this skill for secure-by-default system review.

## Review Areas

- SAST and dependency risk
- Secrets exposure
- Auth and session handling
- RBAC and permission boundaries
- Logging, tracing, and auditability
- Deployment and environment hygiene
- Error handling and fallback paths
- Scalability and resilience

## Rules

- Never expose plaintext secrets.
- Flag missing audit trails or weak authorization boundaries.
- Call out insecure defaults in configs, CI, or deployment pipelines.
- Prefer concrete remediation steps over generic advice.

## Output

- Findings with impact and risk
- Minimal reproduction or evidence
- Remediation steps
- Verification checklist

