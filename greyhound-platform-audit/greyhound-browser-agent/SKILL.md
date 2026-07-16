---
name: greyhound-browser-agent
description: Use when the user needs authenticated browser traversal, crawling, scraping, screenshot capture, DOM inspection, form filling, or live interaction with a web platform, SPA, dashboard, or Framer site.
---

# Greyhound Browser Agent

Use this skill for live traversal and extraction.

## What To Do

1. Establish auth safely.
2. Reuse existing sessions where possible.
3. Crawl routes, menus, modals, drawers, and gated views.
4. Capture screenshots, DOM snapshots, console errors, and network traces.
5. Extract structured data with a schema when possible.
6. Record URLs and state transitions for every important step.

## Browser Rules

- Prefer real navigation over static assumptions.
- For SPAs, wait for network idle and visible state changes.
- Handle infinite scroll, pagination, and lazy-loaded content.
- If a step fails, retry once with a narrower interaction path.
- If CAPTCHA or hard anti-bot controls block access, stop and report the blocker.

## Auth Handling

- Accept PINs, cookies, OAuth, API-key-backed sessions, or shared logins.
- Store secrets outside the prompt when possible.
- Never echo credentials back in the response.

## Output

Return:
- Crawled paths or routes
- Key screenshots
- Notable DOM or console issues
- Data extracted
- Blockers and access gaps

