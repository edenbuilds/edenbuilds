# Greyhound 🐺 Platform Audit

<div align="center">
  <img src="./assets/greyhound-hero.svg" alt="Greyhound hero banner" width="100%" />
</div>

<br />

<p align="center">
  <img src="https://img.shields.io/badge/mode-audit%20%2F%20build%20%2F%20elevate-0a0f0d?style=flat-square&labelColor=050607&color=10b981" alt="Audit build elevate" />
  &nbsp;
  <img src="https://img.shields.io/badge/scope-any%20platform-0a0f0d?style=flat-square&labelColor=050607&color=e8e4dc" alt="Any platform" />
  &nbsp;
  <img src="https://img.shields.io/badge/style-builder%20first-0a0f0d?style=flat-square&labelColor=050607&color=8b949e" alt="Builder first" />
  &nbsp;
  <img src="https://img.shields.io/badge/brand-wolf%20mode-0a0f0d?style=flat-square&labelColor=050607&color=10b981" alt="Wolf mode" />
</p>

---

## Positioning

Greyhound is the platform mastery pack for serious operators.

It audits and improves any product surface:
- Lovable apps
- Framer sites
- Dashboards and internal tools
- AI and agent systems
- Tauri apps
- Webapps and monorepos

It does not stop at findings. It also upgrades prompts, instructions, workflows, and operator copy so the platform gets sharper, not just cleaner.

Aliases:
- `greyhound`
- `greyhound-audit`
- `greyhound-platform-audit`

## What It Does

| Layer | Focus | Output |
| :--- | :--- | :--- |
| Browser | Authenticated traversal, crawling, screenshots, DOM and network evidence | Real surface coverage |
| UI and UX | Visual hierarchy, accessibility, responsiveness, friction, design system drift | Prioritized interface fixes |
| Performance | Lighthouse, CWV, runtime, bundle, load and stress testing | Measured bottlenecks |
| Security and infra | Secrets, RBAC, auth, logging, dependency and config risk | Risk and remediation plan |
| Compliance | GDPR, DPDP, privacy-by-design, retention, consent, rights handling | Compliance gap review |
| Compliance+ | CCPA/CPRA, UK GDPR, ePrivacy, SOC 2, ISO 27001, PCI DSS, HIPAA, COPPA | Broader control mapping |
| De-slop | Humanize, tighten, and clarify prompts and instructions | Better operator text |
| Policy docs | Privacy policy, T&C, cookie policy, and legal copy from audit context | Drafts with questions if needed |
| Remediation | Diffs, refactors, patch plans, re-audit loop | PR-ready change set |

## Core Modules

| Skill | Role |
| :--- | :--- |
| `greyhound-platform-audit` | Master orchestrator |
| `greyhound-browser-agent` | Browser traversal and structured extraction |
| `greyhound-ui-ux-audit` | UI, UX, accessibility, and visual review |
| `greyhound-perf-stress` | Performance and load testing |
| `greyhound-security-infra` | Security, infra, and observability review |
| `greyhound-framer-specialist` | Framer-specific inspection and fixes |
| `greyhound-gdpr` | GDPR privacy review |
| `greyhound-dpdp` | India DPDP review |
| `greyhound-compliance-suite` | Broader compliance matrix |
| `greyhound-humanize-deslop` | Humanize, de-slop, and sharpen outputs |
| `greyhound-prompt-upgrade` | Improve prompts, commands, and instructions |
| `greyhound-privacy-docs` | Privacy policy and T&C generation |
| `greyhound-remediation-loop` | Fix, verify, and re-audit cycle |

## Icons and Stack

<p align="center">
  <img src="../assets/stack/claude.svg" height="32" alt="Claude" />
  &nbsp;&nbsp;
  <img src="../assets/stack/openai.svg" height="32" alt="OpenAI" />
  &nbsp;&nbsp;
  <img src="../assets/stack/mcp.svg" height="32" alt="MCP" />
  &nbsp;&nbsp;
  <img src="../assets/stack/framer.svg" height="32" alt="Framer" />
  &nbsp;&nbsp;
  <img src="../assets/stack/tauri.svg" height="32" alt="Tauri" />
  &nbsp;&nbsp;
  <img src="../assets/stack/react.svg" height="32" alt="React" />
  &nbsp;&nbsp;
  <img src="../assets/stack/zod.svg" height="32" alt="Zod" />
</p>

<p align="center">
  <img src="../assets/stack/nextjs.svg" height="30" alt="Next.js" />
  &nbsp;&nbsp;
  <img src="../assets/stack/vite.svg" height="30" alt="Vite" />
  &nbsp;&nbsp;
  <img src="../assets/stack/pnpm.svg" height="30" alt="pnpm" />
  &nbsp;&nbsp;
  <img src="../assets/stack/turborepo.svg" height="30" alt="Turborepo" />
  &nbsp;&nbsp;
  <img src="../assets/stack/supabase.svg" height="30" alt="Supabase" />
  &nbsp;&nbsp;
  <img src="../assets/stack/docker.svg" height="30" alt="Docker" />
</p>

<p align="center">
  <img src="./assets/wolf.svg" height="48" alt="Wolf icon" />
</p>

## Install

If you want the skill pack foundation:

```bash
npx skills add https://github.com/addyosmani/agent-skills
npx skills add https://github.com/browser-use/browser-use --skill browser-use
```

Then copy or symlink this pack into your skill directory:

```text
~/.codex/skills/greyhound-platform-audit
```

## How To Use

Example prompts:

```text
Use $greyhound-platform-audit to audit this Lovable app end-to-end, then give me fixes and better prompts.
```

```text
Use $greyhound-platform-audit to review this Framer site, check GDPR and DPDP risk, and rewrite the operator instructions so they are cleaner.
```

```text
Use $greyhound-platform-audit to crawl this dashboard, find the highest-risk issues, and generate PR-ready remediation steps.
```

```text
Use $greyhound-privacy-docs with the audit context to draft a privacy policy and terms page. Ask me questions first if accuracy matters.
```

## Operating Model

1. Discover the surface with the browser layer.
2. Audit each layer with evidence.
3. Rank by impact, risk, and effort.
4. Rewrite bad prompts and instructions.
5. Apply fixes when asked.
6. Re-audit to confirm the result.

## Rules

- No hardcoded secrets.
- No fake confidence.
- No generic slop.
- Token use should be efficient, not wasteful.
- Output should be direct, human, and usable.
- Policy docs must match observed behavior and ask questions when enabled or needed for accuracy.

## Extensibility

Add a new skill when the platform needs a dedicated lens.

Examples:
- SEO
- Mobile responsiveness
- Real estate visuals
- Agent governance
- Data residency review
- Legal docs

Keep the master orchestrator small. Put domain detail in the subskill.

## Repo Layout

```text
greyhound-platform-audit/
├── SKILL.md
├── agents/openai.yaml
├── assets/
├── references/
└── greyhound-*.md
```

## Quick Reads

- Architecture: [references/architecture.md](./references/architecture.md)
- Threat model: [references/threat-model.md](./references/threat-model.md)
- Install: [references/install.md](./references/install.md)
- Prompt upgrades: [references/prompt-upgrade.md](./references/prompt-upgrade.md)
- Validation: [references/validation.md](./references/validation.md)
