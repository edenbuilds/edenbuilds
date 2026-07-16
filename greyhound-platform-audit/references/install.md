# Install And Setup

Preferred setup:

```bash
npx skills add https://github.com/addyosmani/agent-skills
npx skills add https://github.com/browser-use/browser-use --skill browser-use
```

Then place Greyhound in:

```text
~/.codex/skills/greyhound-platform-audit
```

Use with:
- Codex: automatic discovery from the skills directory
- Claude Code or Cursor: load the pack as a local skill reference
- MCP-based IDEs: expose the same workflows through a wrapper service if desired

Credential handling:
- Prefer env vars or secret managers
- Use per-run input for PINs, cookies, or OAuth tokens
- Never hardcode secrets into the skill files

