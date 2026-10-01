# Handoff

Profile README for github.com/edenbuilds. Redesigned 01-10-2026.

## State

- `README.md` is hand-written except the block between `<!-- oss:start -->` and `<!-- oss:end -->`, which `scripts/build-art.mjs` rewrites.
- `assets/{hero,merges,activity}.svg` are generated. Do not edit them by hand.
- `.github/workflows/refresh.yml` runs the script daily at 07:00 IST and commits when anything changed.
- Design rules are in `DESIGN.md`. Audience and tone are in `PRODUCT.md`.

## Run locally

```bash
node scripts/build-art.mjs   # needs gh logged in as edenbuilds
```

## Known limits

- The workflow token sees only public contributions, so the activity number can differ from the one the local run prints.
- Fonts are system fonts (Helvetica Neue, then Arial), so text width shifts slightly between operating systems.
- `shb-case-manager` and `signal` are private repos. Do not link them from the README.

## Paste-ready prompt

Open ~/edenbuilds. Run `node scripts/build-art.mjs`, check the three SVGs at 390px and desktop on github.com/edenbuilds, and fix anything that clips or reads small. Keep copy under the no-ai-slop rules (petergyang/no-ai-slop). Commit as edenbuilds <279970382+edenbuilds@users.noreply.github.com> and push to main.
