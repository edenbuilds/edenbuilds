# Design

Replaces the earlier paper-and-ember look (reset 01-10-2026). Type changed to Geist and Geist Pixel the same day.

## Language

Dot-matrix and ordered dither on flat blocks. Tight bold grotesk, large. Black, pale gray, sky blue, one strong blue, one yellow. References: ATIA Labs, usevisuals, Core Stack, New Interfaces.

The dither unit is a 12-unit cell holding one of three marks: pixel, plus, block. The plus is also the logo glyph. Every field comes from `scripts/build-art.mjs`, so the dots are data or a deliberate shape, never decoration.

| File | Shape | Data |
| :-- | :-- | :-- |
| `assets/hero.svg` | Full-bleed blue dither in seven tones, two frosted-glass cards, yellow mark. A yellow scan line writes it left to right once. | None |
| `assets/merges.svg` | Core Stack style area chart, blue on gray. Ink plus marks the days a PR merged. | Upstream merged PRs |
| `assets/maintain.svg` | Six flat tiles, one per repo. Each tile carries a shape for what the repo does: gate, ring, recorder, gauge, bloom, columns. | Date of the last push |
| `assets/build.svg` | Four flat tiles for the build rules: approvals, budgets, kill switch, on device. A small drawing in the same marks sits in each. | None |
| `assets/activity.svg` | Halftone grid on black. Mark size and color follow quartiles of daily count. | Contribution calendar |
| `assets/close.svg` | Centered slide in the ATIA manner. The dither closes in from both edges and the domain types out once. Wrapped in a link to edenbuilds.me. | None |

## Type

- Geist (variable, 500 and 700) for headlines and labels. Geist Pixel Square for names, numerals and the wordmark. Geist Pixel Grid only for the closing slide, at 128 units, because its dot texture breaks up below that.
- Both are SIL OFL fonts from the `geist` npm package, subset to Latin and committed in `scripts/fonts/` with the license. They are embedded in each SVG as base64, because an SVG shown through `<img>` cannot fetch fonts. Only the faces a file uses are embedded.
- Smallest size is 32 units so it reads at 390px.

## Rules

- Animation runs once on load, staggered per column. `prefers-reduced-motion` turns it all off, and the base styles already show the final state.
- Each tile gets its own color and shape. No one color or motif repeats across a section.
- Dates are DD-MM-YYYY, Asia/Kolkata.
- No emoji, no badges, no icon walls, no hosted stat widgets.
- Copy follows petergyang/no-ai-slop: no em dashes, no binary contrasts, no recap lines.
