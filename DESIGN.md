# Design

Replaces the earlier paper-and-ember look (reset 01-10-2026).

## Language

Dot-matrix and ordered dither on flat blocks. Tight bold grotesk, large. Black, pale gray, sky blue, one strong blue, one yellow. References: ATIA Labs, usevisuals, Core Stack, New Interfaces.

The dither unit is a 12-unit cell holding one of three marks: pixel, plus, block. The plus is also the logo glyph. Every field comes from `scripts/build-art.mjs`, so the dots are data or a deliberate shape, never decoration.

| File | Shape | Data |
| :-- | :-- | :-- |
| `assets/hero.svg` | Full-bleed blue dither in seven tones, two frosted-glass cards, yellow mark. A yellow scan line writes it left to right once. | None |
| `assets/merges.svg` | Core Stack style area chart, blue on gray. Ink plus marks the days a PR merged. | Upstream merged PRs |
| `assets/activity.svg` | Halftone grid on black. Mark size and color follow quartiles of daily count. | Contribution calendar |

## Rules

- Text in the SVGs is live text in the system grotesk stack. Smallest size is 32 units so it reads at 390px.
- Animation runs once on load, staggered per column. `prefers-reduced-motion` turns it all off.
- Dates are DD-MM-YYYY, Asia/Kolkata.
- No emoji, no badges, no icon walls, no hosted stat widgets.
- Copy follows petergyang/no-ai-slop: no em dashes, no binary contrasts, no recap lines.
