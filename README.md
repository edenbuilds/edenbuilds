<div align="center">
  <img src="./assets/hero-animated.svg" alt="Eden: systems underneath hard problems" width="100%" />
</div>

<br />

<p align="center">
  <img src="https://img.shields.io/badge/role-founder%20operator-2a2118?style=flat-square&labelColor=faf8f4&color=b65c28" alt="Founder operator" />
  &nbsp;
  <img src="https://img.shields.io/badge/focus-agents%20%2B%20LegalTech-2a2118?style=flat-square&labelColor=faf8f4&color=6b5b4a" alt="Agents and LegalTech" />
  &nbsp;
  <img src="https://img.shields.io/badge/mode-build%20%2F%20operate%20%2F%20refine-2a2118?style=flat-square&labelColor=faf8f4&color=e8e0d4" alt="Build operate refine" />
</p>

---

## What I do

I build the reliable layers for **AI systems** and **legal operators**: routing, memory, approvals, and the control surfaces that keep autonomous work accountable.

In plain terms:

- Agents that act need budgets, logs, and a human approval path
- Chambers need matter memory and hearing workflows that match real court rhythm
- Private tools (camera, clipboard, documents) should stay on the machine by default

Not demos. Systems that still hold when operations get messy.

---

## Open source

Evidence over claims. Real bugs, tests, and review cycles on libraries people actually install.

### Landed

| Repo | Contribution |
| :--- | :--- |
| **[mastra-ai/mastra](https://github.com/mastra-ai/mastra/pull/20961)** | DurableAgent clears `workflow.events.v2` on cleanup · [PG/DSQL PoolClient serialization](https://github.com/mastra-ai/mastra/pull/20869) · [workflow `/start` rejection catch](https://github.com/mastra-ai/mastra/pull/20876) |
| **[genspark-ai/genoffice](https://github.com/genspark-ai/genoffice/pull/27)** | Fixed empty post-tool AI turns that poisoned multi-turn history · [also Linux maximize layout](https://github.com/genspark-ai/genoffice/pull/20) |
| **[iamshouvikmitra/bharat-courts](https://github.com/iamshouvikmitra/bharat-courts/pull/7)** | Cause-list PDF links joined on the wrong path (always 404) |

### In review (high-signal stacks)

| Repo | Focus |
| :--- | :--- |
| **[openai/openai-node](https://github.com/openai/openai-node/pull/2086)** | Compose the caller AbortSignal · no leaked listener · Deno hang regression |
| **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl/pull/4253)** | Await crawl-status WS send · [stop polling on disconnect](https://github.com/firecrawl/firecrawl/pull/4261) · [sitemap `getCrawl` try/finally](https://github.com/firecrawl/firecrawl/pull/4266) |
| **[vercel/ai](https://github.com/vercel/ai/pull/18465)** | Resume partial tool streams · [WorkflowAgent `prepareCall` retries/abort](https://github.com/vercel/ai/pull/18593) |
| **[better-auth/better-auth](https://github.com/better-auth/better-auth/pull/10717)** | Validate password before burning reset tokens · [TikTok `clientId`](https://github.com/better-auth/better-auth/pull/10699) · [account cookie on link](https://github.com/better-auth/better-auth/pull/10700) |
| **[honojs/middleware](https://github.com/honojs/middleware/pull/2069)** | zod-openapi `z` binding survives tree-shake · [SSE abort → `onclose`](https://github.com/honojs/middleware/pull/2075) |
| **[langchain-ai/langchainjs](https://github.com/langchain-ai/langchainjs/pull/11306)** | Script-aware token counting · [empty tool-call args](https://github.com/langchain-ai/langchainjs/pull/11314) · [nested `anyOf`](https://github.com/langchain-ai/langchainjs/pull/11315) |
| **[alex8088/electron-vite](https://github.com/alex8088/electron-vite/pull/919)** | ESM-shim: ignore import-like text inside strings/comments |

<!-- signal:start -->
<!-- signal:end -->

---

## Who this is for

| If you are… | You probably need… |
| :--- | :--- |
| Running AI coding agents | A plan-and-check harness, not another chat window |
| Operating a chambers | Matter, hearing, and diary tools that fit Indian practice |
| Building private interfaces | On-device defaults so sensitive data does not leave |
| Evaluating agent infrastructure | Approvals, budgets, and reconstructable logs |

---

## Selected systems

Public proof. Open the repos that ship.

### Coding agents

| System | What it does |
| :--- | :--- |
| **[agentloop](https://github.com/edenbuilds/agentloop)** | Helps coding agents plan, check, and finish safely across Cursor, Claude, Codex, Copilot, and Windsurf |
| **[blackbox](https://github.com/edenbuilds/blackbox)** | Flight recorder for AI coding tools — messy transcripts into a searchable event log |

### Indian legal work

| System | What it does |
| :--- | :--- |
| **[arya-ai](https://github.com/edenbuilds/arya-ai)** | Specialist helpers for Indian law — drafting protocols and verification before anything goes out |
| **[SHB Case Manager](https://github.com/edenbuilds/shb-case-manager)** | Chambers OS: matters, hearings, deadlines, diary · Supabase live, Sheets as staging |
| **Optimist Prime** | Telegram-first legal assistant: cause lists, document memory, drafting, budgeted AI |

### Private interfaces

| System | What it does |
| :--- | :--- |
| **[bloom](https://github.com/edenbuilds/bloom)** | Gesture UI on-device; camera never leaves the machine |
| **klyppr** | Native macOS clipboard: offline cleaning, local history, zero telemetry |

### Operating layer

| System | What it does |
| :--- | :--- |
| **[signal](https://github.com/edenbuilds/signal)** | Selective GitHub intelligence for the edenbuilds surface |
| **Klint** | Multi-provider AI gateway with spend governance |
| **AgentDock** | Messaging-first agent command center |
| **Stylekit / BrandFrames** | Brand extraction and governed content generation in Framer |

---

## How I choose tools

Control and production discipline — not fashion.

**Languages:** TypeScript · Python · Swift · Rust  
**Products:** Next.js · React · Vite · Tailwind  
**Data:** Supabase · PostgreSQL · SQLite  
**Deploy:** Vercel · Railway · Cloudflare · Docker  
**Agents:** Claude · GPT · MCP · Loop · Zeroshot  

<details>
<summary><strong>Full capability map</strong></summary>
<br />

```text
Languages     TypeScript · Python · Swift · Rust · JavaScript
Web           Next.js · React · Vite · Tailwind · shadcn/ui
Desktop       Swift · Tauri · Rust · macOS menu-bar apps
Data          Supabase · PostgreSQL · SQLite · Sheets adapters
Edge          Cloudflare Workers · Vercel · Railway · Render · Fly.io
AI            Claude · GPT · OpenRouter · MCP · Loop · Zeroshot
Design        Framer plugins · BrandKit extraction · Zod LayoutDocs
On-device     MediaPipe · local history · offline cleaning
Messaging     Telegram · approval inboxes · silent digests
```

</details>

---

## Operating principles

1. **Make authority explicit.** Autonomous work needs approvals, budgets, ledgers, and kill switches.
2. **Prefer local when the problem is private.** Clipboard, vision, and legal documents should not default to the cloud.
3. **Ship for operators.** Chambers, partners, and agents need control planes, not demos.
4. **Curate ruthlessly.** Few systems, deep ownership, production discipline over catalogue sprawl.
5. **Prove it in the open.** Prefer tight OSS fixes on high-use libraries over private noise.

---

## At a glance

```text
┌──────────────────┬────────────────────────────────────────────┐
│ Legal depth      │  Specialist agents · drafting protocols    │
│ Court surface    │  District · HC · SC intelligence rails     │
│ AI routing       │  Multi-provider gateway + partner plane    │
│ Open source      │  Mastra · Firecrawl · OpenAI · Vercel AI   │
│ Operating mode   │  Build · operate · refine                  │
└──────────────────┴────────────────────────────────────────────┘
```

---

## Telemetry

<div align="center">

<img
  src="https://streak-stats.demolab.com?user=edenbuilds&hide_border=true&background=faf8f4&stroke=e8e0d4&ring=b65c28&fire=b65c28&currStreakLabel=b65c28&sideLabels=6b5b4a&currStreakNum=2a2118&sideNums=2a2118&dates=6b5b4a"
  alt="Commit streak" height="170" />

<br /><br />

<img
  src="https://github-readme-activity-graph.vercel.app/graph?username=edenbuilds&theme=react&bg_color=faf8f4&color=2a2118&line=b65c28&point=b65c28&area=true&area_color=b65c28&hide_border=true&custom_title=Commit%20activity"
  alt="Commit activity over time" width="100%" />

</div>

<sub>Live cards from the GitHub API. Public widgets that 503 for long stretches are avoided; a broken image is worse than one fewer card.</sub>

---

<div align="center">

<br />

**Systems underneath hard problems.**

<br />

<sub>
  EDEN · <code>edenbuilds</code>
  &nbsp;·&nbsp;
  <a href="https://github.com/edenbuilds">github.com/edenbuilds</a>
</sub>

<br /><br />

<sub>For systems work and operating infrastructure, open a conversation through GitHub.</sub>

</div>
