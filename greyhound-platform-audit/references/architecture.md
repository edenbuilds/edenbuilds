# Greyhound Architecture

```mermaid
flowchart TD
  U["User request"] --> M["Greyhound master orchestrator"]
  M --> B["Browser agent"]
  M --> UX["UI/UX audit"]
  M --> P["Performance and stress"]
  M --> S["Security and infra"]
  M --> F["Framer specialist"]
  M --> R["Remediation loop"]
  B --> E["Evidence: screenshots, DOM, traces, routes"]
  UX --> E
  P --> E
  S --> E
  F --> E
  E --> R
  R --> V["Re-audit and verify"]
```

Composition model:
- Browser traversal layer from Playwright or browser-use style tooling
- Audit modules for visual, performance, security, and Framer checks
- Remediation loop that emits diffs or patch plans
- Evidence-first reporting for every run

