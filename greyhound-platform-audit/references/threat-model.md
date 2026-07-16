# Threat Model

Primary risks:
- Credential leakage
- Over-broad crawl scope
- Destructive changes during remediation
- False confidence from static analysis alone
- Load tests that impact shared environments

Controls:
- Explicit scope and auth mode
- Read-only default for audits
- Separate fix and verify phases
- Rate limits and backoff for crawls
- Evidence and traceability for every action

Operational rules:
- Stop on data loss risk
- Do not bypass access controls
- Do not log plaintext secrets
- Verify fixes before declaring success

