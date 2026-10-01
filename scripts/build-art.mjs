#!/usr/bin/env node
// Rebuilds assets/{hero,merges,activity}.svg and the OSS tables in README.md from live GitHub data.
// Why it exists: the hand-kept Landed/Open lists went stale within weeks. openai-node#2086 stayed "open"
// after it closed unmerged on 15-08-2026, while undici#5661, langgraphjs#2668 and hono middleware#2075
// merged and stayed listed as "open". Only upstream PRs count, so repos owned by ME are filtered out.
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'

const ME = 'edenbuilds'
const gql = (q) =>
  JSON.parse(execFileSync('gh', ['api', 'graphql', '-f', `query=${q}`], { encoding: 'utf8', maxBuffer: 1 << 26 })).data

const upstream = (state) =>
  gql(`{ search(query: "author:${ME} is:pr ${state}", type: ISSUE, first: 100) { nodes { ... on PullRequest {
    title url mergedAt reviewDecision repository { nameWithOwner owner { login } } } } } }`)
    .search.nodes.filter((p) => p.repository.owner.login !== ME)

const merged = upstream('is:merged')
const open = upstream('is:open')
const cal = gql(`{ user(login: "${ME}") { contributionsCollection { contributionCalendar { totalContributions
  weeks { contributionDays { contributionCount weekday } } } } } }`).user.contributionsCollection.contributionCalendar

const C = { ink: '#0B0B0C', white: '#FFFFFF', gray: '#E8E9EC', sky: '#9ED0F5', blue: '#4C6EF5', yellow: '#FFD60A', dim: '#2B2C30', mute: '#8A8D96' }
const FONT = "'Helvetica Neue',Helvetica,Arial,sans-serif"
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x))
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t) }

// Ordered dither: v in 0..1 becomes one of four marks (none, pixel, plus, block). The Bayer offset gives the stepped edge.
const BAYER = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]]
const level = (v, x, y) => clamp(Math.round(v * 3 + (BAYER[y & 3][x & 3] / 16 - 0.5) * 0.9), 0, 3)
const GLYPHS = '<path id="a" d="M4 4h4v4H4z"/><path id="b" d="M4 0h4v4h4v4H8v4H4V8H0V4h4z"/><path id="c" d="M1 1h10v10H1z"/>'
const use = (lvl, y) => `<use href="#${'abc'[lvl - 1]}" y="${y}"/>`

// One animated <g> per column keeps the file small; --i is the column index driving the stagger.
const column = (i, x, marks, extra = '') => `<g transform="translate(${x} 0)"><g class="c" style="--i:${i}"${extra}>${marks.join('')}</g></g>`
const svg = (w, h, label, css, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}">
<style>${css}@media (prefers-reduced-motion:reduce){.c,.l,.cv,.sc{animation:none!important}}</style>
<defs>${GLYPHS}</defs>
${body}
</svg>
`
const text = (x, y, size, fill, str, extra = '') =>
  `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" fill="${fill}" ${extra}>${str}</text>`

// Hero after usevisuals: full-bleed blue dither in seven tones on an 8px cell, with two frosted-glass cards.
// The card backdrop is the same field blurred and clipped to the card, because SVG has no backdrop-filter.
const BLUES = ['#EAF6FF', '#BFE3FB', '#8CC4F5', '#4F95EE', '#2A62DA', '#1B3FB0', '#12297A']
function hero() {
  const W = 1200, H = 540, S = 8, COLS = W / S, ROWS = Math.ceil(H / S)
  const paths = BLUES.map(() => [])
  for (let r = 0; r < ROWS; r++) {
    const tones = []
    for (let c = 0; c < COLS; c++) {
      const u = c / COLS, w = r / ROWS
      const ridge = 0.5 * Math.sin(u * 7 + 2.2 * Math.sin(w * 4.5 + 0.6)) + 0.5 * Math.sin(u * 3.1 - w * 6 + 1.3)
      const depth = clamp(w * 1.05 + 0.2 * ridge)
      tones.push(clamp(Math.round(depth * (BLUES.length - 1) + (BAYER[r & 3][c & 3] / 16 - 0.5) * 1.1), 0, BLUES.length - 1))
    }
    for (let c = 1, start = 0; c <= COLS; c++) {
      if (c === COLS || tones[c] !== tones[start]) {
        paths[tones[start]].push(`M${start * S} ${r * S}h${(c - start) * S}v${S}h${-(c - start) * S}z`)
        start = c
      }
    }
  }
  const field = paths.map((d, i) => `<path fill="${BLUES[i]}" d="${d.join('')}"/>`).join('')
  const A = { x: 56, y: 52, w: 800, h: 282 }, B = { x: 500, y: 386, w: 644, h: 112 }
  const rect = (k, extra) => `<rect x="${k.x}" y="${k.y}" width="${k.w}" height="${k.h}" rx="22" ${extra}/>`
  const glass = (k) => rect(k, 'fill="#0E1B4D" fill-opacity=".62" stroke="#fff" stroke-opacity=".28" stroke-width="1.5"')
  const box = (x, label) => `<rect x="${x}" y="408" width="250" height="68" fill="#fff" fill-opacity=".06" stroke="#fff" stroke-opacity=".4" stroke-width="1.5"/>`
    + text(x + 125, 452, 30, C.white, label, 'font-weight="500" text-anchor="middle"')
  const css = `.cv{transform-box:fill-box;transform-origin:right center;transform:scaleX(0);animation:wipe 1.7s cubic-bezier(.5,0,.15,1) both}
@keyframes wipe{from{transform:scaleX(1)}}
.sc{opacity:0;animation:scan 1.7s cubic-bezier(.5,0,.15,1) both}
@keyframes scan{from{opacity:1;transform:translateX(0)}88%{opacity:1}to{opacity:0;transform:translateX(1196px)}}
.l{animation:up .9s cubic-bezier(.16,1,.3,1) both;animation-delay:calc(var(--n)*110ms + 1100ms)}
@keyframes up{from{opacity:0;transform:translateY(18px)}}`
  const lines = ['Software that records', 'what happened and', 'who approved it.']
  const head = lines.map((t, n) => text(100, 150 + n * 70, 64, C.white, t, `font-weight="700" letter-spacing="-2" class="l" style="--n:${n}"`)).join('')
  return svg(W, H, 'Eden Builds. Software that records what happened and who approved it.', css, `<defs>
<g id="f" shape-rendering="crispEdges">${field}</g>
<filter id="bl"><feGaussianBlur stdDeviation="10"/></filter>
<clipPath id="ca">${rect(A, '')}</clipPath><clipPath id="cb">${rect(B, '')}</clipPath>
</defs>
<rect width="${W}" height="${H}" fill="${C.ink}"/>
<use href="#f"/>
<g clip-path="url(#ca)"><use href="#f" filter="url(#bl)"/></g>
<g clip-path="url(#cb)"><use href="#f" filter="url(#bl)"/></g>
${glass(A)}${glass(B)}
<rect class="cv" width="${W}" height="${H}" fill="${C.ink}"/>
<rect class="sc" width="4" height="${H}" fill="${C.yellow}"/>
${head}
<g class="l" style="--n:3">${box(524, 'What happened')}<path d="M800 442h44M800 442l9-9M800 442l9 9M844 442l-9-9M844 442l-9 9" stroke="#fff" stroke-opacity=".7" stroke-width="2" fill="none"/>${box(870, 'Who approved')}</g>
<rect x="56" y="414" width="56" height="56" fill="${C.yellow}"/>
<g transform="translate(70 428) scale(2.33)" fill="${C.ink}"><use href="#b"/></g>
${text(132, 456, 40, C.white, 'EDEN BUILDS<tspan dy="-14" font-size="16">©</tspan>', 'font-weight="700" letter-spacing="0.5"')}`)
}

function mergesChart() {
  const t = merged.map((p) => Date.parse(p.mergedAt)).sort((a, b) => a - b)
  const t0 = t[0], t1 = Date.now(), N = 77, ROWS = 20, S = 14
  const per = Array(N).fill(0)
  t.forEach((x) => per[Math.min(N - 1, Math.floor(((x - t0) / (t1 - t0)) * N))]++)
  let run = 0
  const cols = per.map((n, i) => {
    run += n
    const h = Math.round((run / t.length) * ROWS), marks = []
    for (let r = 0; r < h; r++) {
      const l = level(0.12 + 0.88 * smooth(0, 9, h - 1 - r), i, r)
      if (l) marks.push(use(l, (ROWS - r) * 12))
    }
    if (n) marks.push(`<use href="#b" y="${(ROWS - h) * 12}" fill="${C.ink}"/>`) // one ink plus on top of the column per merge day
    return column(i, i * 12, marks, ` fill="${C.blue}"`)
  })
  const css = `.c{animation:rise .8s cubic-bezier(.16,1,.3,1) both;animation-delay:calc(var(--i)*26ms)}
@keyframes rise{from{opacity:0;transform:translateY(14px)}}`
  const d = (ms) => new Date(ms).toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata' }).replaceAll('/', '-')
  return svg(1200, 500, 'Cumulative upstream merges from 15-07-2026 to today, drawn as a dithered area chart.', css, `<rect width="1200" height="500" fill="${C.gray}"/>
<g transform="translate(56 36) scale(${S / 12})">${cols.join('')}</g>
<rect y="330" width="1200" height="170" fill="${C.ink}"/>
${text(56, 428, 104, C.white, merged.length, 'font-weight="700" letter-spacing="-3"')}
${text(58, 480, 38, '#C9CBD1', 'merged upstream')}
${text(400, 428, 104, C.white, open.length, 'font-weight="700" letter-spacing="-3"')}
${text(402, 480, 38, '#C9CBD1', 'in review')}
${text(1144, 480, 32, '#C9CBD1', `${d(t0)} to ${d(t1)}`, 'text-anchor="end"')}`)
}

function activity() {
  const days = cal.weeks.flatMap((w) => w.contributionDays.map((x) => x.contributionCount)).filter(Boolean).sort((a, b) => a - b)
  const q = [0.25, 0.5, 0.75].map((p) => days[Math.floor(p * (days.length - 1))])
  const cell = (1200 - 112) / cal.weeks.length
  const cols = cal.weeks.map((wk, i) => {
    const marks = wk.contributionDays.map((d) => {
      const n = d.contributionCount, tier = n === 0 ? 0 : 1 + q.filter((x) => n > x).length
      return tier === 0 ? `<use href="#a" y="${d.weekday * 12}" fill="${C.dim}"/>`
        : `<use href="#${'abbc'[tier - 1]}" y="${d.weekday * 12}" fill="${tier === 4 ? C.yellow : tier === 1 ? C.mute : C.white}"/>`
    })
    return column(i, i * 12, marks)
  })
  const css = '.c{animation:in .6s ease-out both;animation-delay:calc(var(--i)*18ms)}@keyframes in{from{opacity:0}}'
  return svg(1200, 340, 'Contribution activity over the last 12 months, drawn as a dot grid.', css, `<rect width="1200" height="340" fill="${C.ink}"/>
${text(56, 98, 64, C.white, cal.totalContributions.toLocaleString('en-US'), 'font-weight="700" letter-spacing="-2"')}
${text(58, 138, 34, C.mute, 'contributions in the last 12 months')}
<g transform="translate(56 160) scale(${cell / 12})">${cols.join('')}</g>`)
}

// README tables: one row per repo, one line per PR, conventional-commit prefix stripped from the title.
const tidy = (t) => { const s = t.replace(/^\w+(\([^)]*\))?!?:\s*/, ''); return s[0].toUpperCase() + s.slice(1) }
function table(prs, note = () => '') {
  const by = new Map()
  for (const p of prs) by.set(p.repository.nameWithOwner, [...(by.get(p.repository.nameWithOwner) ?? []), p])
  const rows = [...by].map(([repo, list]) =>
    `| [${repo}](https://github.com/${repo}) | ${list.map((p) => `[${tidy(p.title)}](${p.url})${note(p)}`).join('<br>')} |`)
  return `| Repository | Pull request |\n| :-- | :-- |\n${rows.join('\n')}`
}
merged.sort((a, b) => b.mergedAt.localeCompare(a.mergedAt))
const oss = `<!-- oss:start -->
### Merged

${table(merged)}

### In review

${table(open, (p) => (p.reviewDecision === 'APPROVED' ? ', approved' : ''))}
<!-- oss:end -->`

writeFileSync('assets/hero.svg', hero())
writeFileSync('assets/merges.svg', mergesChart())
writeFileSync('assets/activity.svg', activity())
const readme = readFileSync('README.md', 'utf8')
writeFileSync('README.md', readme.replace(/<!-- oss:start -->[\s\S]*<!-- oss:end -->/, () => oss))
console.log(`merged ${merged.length}, open ${open.length}, contributions ${cal.totalContributions}`)
