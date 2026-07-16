---
name: greyhound-platform-audit
description: Use when the user asks to audit, crawl, test, secure, improve, or prompt-upgrade any platform, including Lovable, Framer, webapps, dashboards, AI/agent systems, Tauri apps, and monorepos. Orchestrates Greyhound's browser, UI/UX, performance, security, compliance, de-slop, and remediation subskills.
---

# Greyhound Platform Audit

Greyhound is the master orchestrator for end-to-end platform discovery, audit, and remediation.

Use it when the task spans any of:
- Authenticated browser traversal
- Visual/UI/UX review
- Performance and load testing
- Security, infra, and dependency review
- Framer-specific inspection
- Lovable and other low-code platform review
- Code, architecture, or remediation planning
- Prompt and instruction uplift for the product itself

## Default Workflow

1. Define scope, target URL(s), auth mode, and success criteria.
2. Traverse the platform with the browser layer.
3. Run targeted sub-audits in parallel where safe.
4. Rank findings by user impact, risk, and effort.
5. Produce evidence-backed output: screenshots, URLs, traces, diffs, scores.
6. If asked to fix, generate PR-ready changes and re-audit.
7. Always include prompt upgrades, clearer instructions, and de-slop rewrites where they improve operator quality.

## Operating Rules

- Prefer proof over guesses.
- Never hardcode secrets; use env vars, secret stores, or safe user-provided input.
- Respect existing auth, session state, RBAC, and rate limits.
- Use incremental crawling for large platforms.
- For dynamic SPAs, verify with live browser interaction before concluding.
- Separate findings, recommendations, and implemented changes.
- Optimize token use without compromising evidence or precision.
- Default to concise, human, direct output. No fluff.
- Use the least amount of context needed to stay correct.

## Subskill Routing

- Browser traversal and extraction: [`greyhound-browser-agent`](./greyhound-browser-agent/SKILL.md)
- UI/UX, accessibility, and visual review: [`greyhound-ui-ux-audit`](./greyhound-ui-ux-audit/SKILL.md)
- Performance and stress testing: [`greyhound-perf-stress`](./greyhound-perf-stress/SKILL.md)
- Security, infra, and governance: [`greyhound-security-infra`](./greyhound-security-infra/SKILL.md)
- Framer-specific review and fixes: [`greyhound-framer-specialist`](./greyhound-framer-specialist/SKILL.md)
- GDPR and privacy compliance: [`greyhound-gdpr`](./greyhound-gdpr/SKILL.md)
- DPDP and India privacy compliance: [`greyhound-dpdp`](./greyhound-dpdp/SKILL.md)
- Humanize and de-slop rewrite layer: [`greyhound-humanize-deslop`](./greyhound-humanize-deslop/SKILL.md)
- Prompt and instruction uplift: [`greyhound-prompt-upgrade`](./greyhound-prompt-upgrade/SKILL.md)
- Fix planning and re-audit loop: [`greyhound-remediation-loop`](./greyhound-remediation-loop/SKILL.md)

## When To Use The References

- Install and setup details: [`references/install.md`](./references/install.md)
- Overall architecture: [`references/architecture.md`](./references/architecture.md)
- Threat model and guardrails: [`references/threat-model.md`](./references/threat-model.md)
- Example workflow: [`references/workflows.md`](./references/workflows.md)
- Extensibility templates: [`references/extensibility.md`](./references/extensibility.md)
- Prompt upgrade rules: [`references/prompt-upgrade.md`](./references/prompt-upgrade.md)
- Validation plan: [`references/validation.md`](./references/validation.md)

## Response Shape

For audits, return:
- Scope
- Coverage
- Findings with severity
- Evidence
- Fix recommendations
- Optional patch plan or diff
- Prompt upgrade suggestions for the product, workflow, or assistant
- Humanized summary rewritten for operators

For remediation, return:
- Changes made
- Risk
- Verification status
- Follow-up re-audit items

## Default Quality Bar

Every Greyhound run should also improve the product's own instructions when useful:
- Clarify ambiguous prompts
- Tighten flows and guardrails
- Strip slop from UX copy and operator instructions
- Suggest better slash commands, templates, and helper prompts

