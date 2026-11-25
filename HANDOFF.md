# Handoff

Profile README for github.com/edenbuilds. Redesigned 01-10-2026, type moved to Geist the same day.

## State

- `README.md` is hand-written except the block between `<!-- oss:start -->` and `<!-- oss:end -->`, which `scripts/build-art.mjs` rewrites.
- `assets/*.svg` (hero, merges, maintain, build, activity, close) are generated. Do not edit them by hand.
- `.github/workflows/refresh.yml` runs the script daily at 07:00 IST and commits when anything changed.
- Design rules are in `DESIGN.md`. Audience and tone are in `PRODUCT.md`.
- Fonts live in `scripts/fonts/` (Geist, Geist Pixel Square and Grid, subset to Latin, SIL OFL). To add a character, re-subset from the `geist` npm package with `python3 -m fontTools.subset`.

## Run locally

```bash
node scripts/build-art.mjs   # needs gh logged in as edenbuilds
```

## Known limits

- The workflow token sees only public contributions, so the activity number can differ from the one the local run prints.
- The six repos in `maintain.svg` come from `MINE` in the script. The table under it in `README.md` is hand-written, so a new repo needs a line in both, plus an `ART` shape and a `look` entry.
- `shb-case-manager` and `signal` are private repos. Do not link them from the README.
- Upstream bump comments were posted on 01-10-2026 (firecrawl#4253, cloudflare/ai#635 and #639). Do not bump those again before maintainers reply.

## Update 25-11-2026

- The generated open-PR table no longer labels automated approvals as human approvals. Firecrawl #4263 links to its continuation #5923.
- GitHub search returned 16 upstream merges and 17 open upstream PRs. Anthropic #1143 has independent reproduction and awaits maintainer review; Firecrawl #4263 conflicts with current main and is continued by #5923.
- The refresh script runs under the caller’s GitHub identity; restore generated activity art after a local run if it includes private contributions.

## Paste-ready prompt

Open ~/edenbuilds. Run `node scripts/build-art.mjs`, check the six SVGs at 390px and desktop on github.com/edenbuilds, and fix anything that clips or reads small. Keep copy under the no-ai-slop rules (petergyang/no-ai-slop). Commit as edenbuilds <279970382+edenbuilds@users.noreply.github.com> and push to main.
