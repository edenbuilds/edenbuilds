# Extensibility

Add a new Greyhound module when a domain needs its own audit lens.

Template:

```text
greyhound-<domain>
  - what it inspects
  - how it gathers evidence
  - what it reports
  - what it may change
```

Examples:
- `greyhound-seo-audit`
- `greyhound-real-estate-visuals`
- `greyhound-agent-governance`
- `greyhound-mobile-responsive`

Rule of thumb:
- Keep the master skill small.
- Put domain specifics in a dedicated subskill.
- Share only the evidence and workflow conventions upward.

