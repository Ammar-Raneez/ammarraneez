# Film Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dark + lime portfolio with a scroll-driven film of Ammar's journey that embeds three playable instruments, plus an archive page and restyled journey, notes and case-study pages.

**Architecture:** Same Vite 6 + React 18 SPA with a regex router in `src/App.jsx`.
Content stays in `src/content.js`, `src/journey.js`, `src/notes.js`, `src/cases.js`; film framing copy lives in a new `src/film/script.js` whose quotes are tested to be verbatim.
Instruments are canvas components over pure, tested logic modules; scroll motion is GSAP ScrollTrigger inside `gsap.matchMedia`.

**Tech Stack:** Vite 6, React 18, GSAP 3.15 (already installed), Node 20 built-in test runner (`node --test`), Playwright CLI 1.64.0 via `npx` for screenshots.

**Spec:** `docs/superpowers/specs/2026-10-13-film-redesign-design.md`.
Visual source of truth for porting: `docs/superpowers/prototypes/3-story.html` (film) and `docs/superpowers/prototypes/1-playable.html` (instruments).

## Global Constraints

- Never write the em dash character anywhere (code, copy, comments, commits). Use "-".
- Commit messages never include a `Co-Authored-By` line.
- Work on `master`; commit locally after each task; do not push until Ammar approves the finished redesign.
- No new runtime or dev dependencies. Playwright is used only through `npx -y playwright@1.64.0 ...`.
- Every fact on screen comes from the content files; every quote is verbatim from `journey.js` or `notes.js` and is checked by `tests/content.test.js`.
- Simulations carry an on-screen label: "Illustration" (forecaster, segmenter) or "Simulated" (call timings) and "Sample" (caller lines).
- Eras (exact values):
  - `night`: bg `#0A0A0A`, fg `#F2F2EF`, accent `#FF3B30`, muted `#9A9A96`.
  - `paper`: bg `#F2F2EF`, fg `#111111`, accent `#D6261C`, muted `#5E5E5A`, marker `#FFE14D`.
  - `forest`: bg `#0E3B2E`, fg `#E9F2EC`, accent `#B8F2D3`, muted `#9FC2B2`.
  - `gold`: bg `#E9B824`, fg `#141414`, accent `#141414`, muted `#4A3D0E`.
  - `red`: bg `#FF3B30`, fg `#111111`, accent `#111111`, muted `#3B0F0C`.
- Type: Archivo variable (`wdth` 62, weight 800 for scene type; `wdth` 100 for body) and IBM Plex Mono 400/500.
- Square corners, 1px hairlines, no box shadows.
- Desktop pins only at `(min-width: 900px)` with `(prefers-reduced-motion: no-preference)`; scrub only, no scroll-jacking or snapping; pinned timelines created first, in document order.
- Phone layout is verified at 390px wide with `document.documentElement.scrollWidth <= innerWidth` (no horizontal scroll).
- Every content hidden-state is set by GSAP at runtime, never by CSS, so the page reads fully without JS motion.

## Review Focus

1. Resizing a desktop window below 900px mid-film (or rotating a tablet): pins must revert cleanly with no blank gaps, no horizontal scroll, and the top bar still showing the scene in view. Pinned in Task 15, Step 3.
2. Arriving at `/#credits` (the new `/contact` redirect target) or `/#scene=6`: the page must land on that section after pins are measured, not at a pre-pin offset. Pinned in Task 9, Step 6.
3. Pressing "Place a call" repeatedly or flipping Fuzzy/Semantic mid-call: exactly one call runs at a time and the mode change applies to the next call. Pinned in Task 10, Step 5.
4. Keyboard-only use of every instrument: buttons and sliders reachable by Tab, operable with Enter/Space/arrows, with a visible focus ring on every era background. Pinned in Task 15, Step 3.
5. A visitor with `prefers-reduced-motion: reduce`: no pins, every final state visible (89.3%, collapsed labeling bar, lit pipeline nodes, struck 65%), instruments idle until used. Pinned in Task 15, Step 3.

## File map

| Path | Responsibility |
|---|---|
| `tests/content.test.js` | Content integrity: periods parse, no em dash, film quotes verbatim, journey chapters match entry dates. |
| `tests/instruments.test.js` | Pure logic of forecast, segment, callSim. |
| `src/instruments/random.js` | Seeded PRNG and gaussian helper. |
| `src/instruments/forecast.js` | Toy liquid forecaster state machine. |
| `src/instruments/segment.js` | Synthetic micrograph, blur, threshold, IoU. |
| `src/instruments/callSim.js` | Sample calls, timing plan, budget. |
| `src/instruments/Screen.jsx` | Shared dark instrument panel. |
| `src/instruments/useCanvas.js` | DPR-aware canvas sizing + visibility-paused animation loop hook. |
| `src/instruments/Forecaster.jsx`, `CallSimulator.jsx`, `Segmenter.jsx` | Instrument UIs. |
| `src/instruments/instruments.css` | Instrument styles. |
| `src/film/script.js` | Scene metadata, framing copy, verbatim quotes with sources, journey chapters. |
| `src/film/scenes/*.jsx` | One component per scene. |
| `src/film/Credits.jsx` | Closing credits. |
| `src/film/filmMotion.js` | Film scroll timelines. |
| `src/film/film.css` | Scene styles. |
| `src/components/Hud.jsx`, `Hud.css` | Top bar: film slate or page nav, progress line. |
| `src/motion.js` | Shared GSAP setup and generic page motion (`data-reveal`, `data-count`). |
| `src/styles/base.css` | Reset, era tokens, type utilities, buttons, links, focus. |
| `src/pages/*.jsx` + `src/pages/*.css` | Pages. |

Deleted by the end: `src/styles.css`, `src/components/Masthead.jsx`, `src/components/ForecastFigure.jsx`, `src/components/Timeline.jsx`.

---

### Task 1: Baseline the parked Work stage

Keep the data and the scroll-refresh fix from the parked stage; drop the timeline UI.

**Files:**
- Delete: `src/components/Timeline.jsx`
- Modify: `src/pages/Home.jsx` (remove the Timeline import and `<Timeline items={work} />`)
- Modify: `src/motion.js` (remove `timelineDraw` and its call; keep the two `document.addEventListener` refresh lines and the `.is-current` restore)
- Modify: `src/styles.css` (remove the `/* ---------- Work timeline ---------- */` block up to, not including, `/* Role figures inside an open ledger row`)
- Keep: `src/content.js` metrics/lane/Niftron changes, `src/components/Ledger.jsx` metrics + tool chips.

**Interfaces:**
- Produces: `work[i].metrics?: {value: string, label: string}[]`, `work[i].lane?: string` in `src/content.js`; `Ledger` renders metrics and tool chips.

- [ ] **Step 1: Remove the timeline**

```bash
rm src/components/Timeline.jsx
```

In `src/pages/Home.jsx` delete the line `import Timeline from "../components/Timeline.jsx";` and the line `          <Timeline items={work} />`.
In `src/motion.js` delete the whole `function timelineDraw(root) {...}` block and the line `      timelineDraw(root);`, and delete the `onToggle` line that toggles `.timeline__bar[data-key=...]`.

- [ ] **Step 2: Build**

Run: `yarn build`
Expected: `prerender-meta: 8 route pages and sitemap.xml written`, no errors.

- [ ] **Step 3: Commit**

```bash
git add -A src
git commit -m "content: role metrics and tool chips; refresh scroll triggers after layout changes"
```

---

### Task 2: Test harness and content checks

**Files:**
- Create: `tests/content.test.js`
- Modify: `package.json` (scripts)

**Interfaces:**
- Produces: `yarn test` runs every `tests/*.test.js` with `node --test`.

- [ ] **Step 1: Add the scripts**

In `package.json` add `"test": "node --test tests/"` to `"scripts"`, and change `"build"` to `"node --test tests/ && vite build && node scripts/prerender-meta.mjs"` so bad content fails the Vercel build, not the visitor.

- [ ] **Step 2: Write the content test**

```js
// tests/content.test.js
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { work, volunteering } from "../src/content.js";

const PERIOD = /^([A-Z][a-z]{2}) (\d{4}) - (?:([A-Z][a-z]{2}) (\d{4})|Present)$/;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

test("every work and volunteering period parses and runs forward", () => {
  for (const item of [...work, ...volunteering]) {
    const m = item.period.match(PERIOD);
    assert.ok(m, `bad period "${item.period}" on ${item.role}`);
    assert.ok(MONTHS.includes(m[1]), `bad month in "${item.period}"`);
    if (m[3]) {
      const start = Number(m[2]) * 12 + MONTHS.indexOf(m[1]);
      const end = Number(m[4]) * 12 + MONTHS.indexOf(m[3]);
      assert.ok(end >= start, `period ends before it starts: "${item.period}"`);
    }
  }
});

test("no em dash in any content or film file", () => {
  const files = ["content.js", "journey.js", "notes.js", "cases.js", "film/script.js"];
  for (const f of files) {
    let text;
    try {
      text = readFileSync(new URL(`../src/${f}`, import.meta.url), "utf8");
    } catch {
      continue; // film/script.js arrives in Task 8
    }
    assert.ok(!text.includes("\u2014"), `em dash in src/${f}`);
  }
});
```

- [ ] **Step 3: Run**

Run: `yarn test`
Expected: 2 tests pass.

- [ ] **Step 4: Commit**

```bash
git add package.json tests/content.test.js
git commit -m "test: content integrity checks with node --test"
```

---

### Task 3: Seeded random and the forecaster model

**Files:**
- Create: `src/instruments/random.js`, `src/instruments/forecast.js`
- Create: `tests/instruments.test.js`

**Interfaces:**
- Produces:
  - `seeded(seed: number): () => number` (uniform in [0, 1)).
  - `gaussian(random: () => number): () => number` (standard normal).
  - `PAST = 160`, `AHEAD = 36`.
  - `createForecaster({ random?, noise? }): Forecaster` where `noise` is 0..1 (default 0.35) and `Forecaster` is `{ series: number[], step(): void, shock(): void, calm(): void, setNoise(v: number): void, band(k: number): number, state(): { level, vol, tau, status: "shock" | "adapting" | "steady" } }`.

- [ ] **Step 1: Write the failing tests**

```js
// tests/instruments.test.js
import { test } from "node:test";
import assert from "node:assert/strict";
import { seeded } from "../src/instruments/random.js";
import { createForecaster, PAST, AHEAD } from "../src/instruments/forecast.js";

test("seeded random is deterministic and in range", () => {
  const a = seeded(42), b = seeded(42);
  for (let i = 0; i < 100; i++) {
    const x = a();
    assert.equal(x, b());
    assert.ok(x >= 0 && x < 1);
  }
});

test("forecaster starts full and steady", () => {
  const f = createForecaster({ random: seeded(1) });
  assert.equal(f.series.length, PAST);
  assert.equal(f.state().status, "steady");
});

test("a shock widens the band and shrinks tau, calm brings them back", () => {
  const f = createForecaster({ random: seeded(7) });
  for (let i = 0; i < 200; i++) f.step();
  const before = { band: f.band(AHEAD), tau: f.state().tau };
  f.shock();
  for (let i = 0; i < 8; i++) f.step();
  assert.ok(f.band(AHEAD) > before.band * 1.5, "band should widen after a shock");
  assert.ok(f.state().tau < before.tau, "tau should drop after a shock");
  f.calm();
  for (let i = 0; i < 400; i++) f.step();
  assert.ok(f.band(AHEAD) < before.band, "calm should narrow the band below its pre-shock width");
  assert.equal(f.state().status, "steady");
});

test("series length stays at PAST", () => {
  const f = createForecaster({ random: seeded(3) });
  for (let i = 0; i < 1000; i++) f.step();
  assert.equal(f.series.length, PAST);
});
```

- [ ] **Step 2: Run to see it fail**

Run: `yarn test`
Expected: FAIL, `Cannot find module '.../src/instruments/random.js'`.

- [ ] **Step 3: Implement**

```js
// src/instruments/random.js
// Small seeded PRNG (mulberry32) so tests and samples are reproducible.
export function seeded(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Box-Muller standard normal from a uniform source.
export function gaussian(random) {
  return () => {
    let u = 0, v = 0;
    while (!u) u = random();
    while (!v) v = random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };
}
```

```js
// src/instruments/forecast.js
// A toy "liquid" forecaster for illustration, not the published LTS model: an exponentially
// weighted level and volatility whose time constant tau shrinks when the last error is a
// surprise (adapt fast) and relaxes back toward 12 when things are calm.
import { gaussian } from "./random.js";

export const PAST = 160;
export const AHEAD = 36;
const SHOCK_STEPS = 22;

export function createForecaster({ random = Math.random, noise = 0.35 } = {}) {
  const normal = gaussian(random);
  const series = [];
  let level = 0, vol = 0.6, tau = 8, shockLeft = 0, calm = false;

  function next() {
    const prev = series.length ? series[series.length - 1] : 0;
    const base = noise * 1.6 + 0.15;
    const sigma = (calm ? 0.12 : base) * (shockLeft > 0 ? 3.2 : 1);
    if (shockLeft > 0) shockLeft--;
    return prev * 0.985 + sigma * normal();
  }

  function learn(x) {
    const err = x - level;
    const surprise = Math.min(4, Math.abs(err) / (vol + 1e-6));
    tau = Math.max(1.5, Math.min(12, tau + (12 - tau) * 0.06 - surprise * 1.2 + 0.4));
    const a = 1 / tau;
    level += a * err;
    vol = Math.sqrt((1 - a) * vol * vol + a * err * err);
  }

  function step() {
    const x = next();
    series.push(x);
    learn(x);
    if (series.length > PAST) series.shift();
  }

  for (let i = 0; i < PAST; i++) step();

  return {
    series,
    step,
    shock() { shockLeft = SHOCK_STEPS; calm = false; },
    calm() { calm = true; shockLeft = 0; },
    setNoise(v) { noise = Math.min(1, Math.max(0, v)); calm = false; },
    // 80% band, widening sub-linearly with horizon k.
    band: (k) => 1.28 * vol * Math.max(k, 1e-4) ** 0.4,
    state: () => ({ level, vol, tau, status: shockLeft > 0 ? "shock" : tau < 6 ? "adapting" : "steady" }),
  };
}
```

- [ ] **Step 4: Run tests**

Run: `yarn test`
Expected: all pass.
If "calm should narrow the band" fails, raise the calm loop in the test is NOT allowed; instead lower the calm sigma `0.12` to `0.08` in `forecast.js` and re-run.

- [ ] **Step 5: Commit**

```bash
git add src/instruments/random.js src/instruments/forecast.js tests/instruments.test.js
git commit -m "feat: forecaster model for the playable LTS illustration"
```

---

### Task 4: Segmenter model

**Files:**
- Create: `src/instruments/segment.js`
- Modify: `tests/instruments.test.js`

**Interfaces:**
- Produces: `W = 160`, `H = 110`, `makeSample(random?): { truth: Uint8Array, noisy: Float32Array }`, `blur(field: Float32Array, r: number): Float32Array`, `predict(field: Float32Array, threshold: number): Uint8Array`, `iou(pred: Uint8Array, truth: Uint8Array): number`.

- [ ] **Step 1: Append failing tests**

```js
// tests/instruments.test.js (append)
import { W, H, makeSample, blur, predict, iou } from "../src/instruments/segment.js";

test("iou on hand-made masks", () => {
  const a = Uint8Array.from([1, 1, 0, 0]);
  assert.equal(iou(a, a), 1);
  assert.equal(iou(a, Uint8Array.from([0, 0, 1, 1])), 0);
  assert.equal(iou(a, Uint8Array.from([1, 0, 1, 0])), 1 / 3);
  assert.equal(iou(new Uint8Array(4), new Uint8Array(4)), 0);
});

test("blur with radius 0 returns the same field", () => {
  const { noisy } = makeSample(seeded(5));
  assert.equal(blur(noisy, 0), noisy);
  assert.equal(blur(noisy, 2).length, W * H);
});

test("the game is winnable but not by default", () => {
  for (const seed of [1, 2, 3]) {
    const { truth, noisy } = makeSample(seeded(seed));
    let best = 0;
    for (let r = 0; r <= 4; r++) {
      const field = blur(noisy, r);
      for (let t = 20; t <= 80; t++) best = Math.max(best, iou(predict(field, t / 100), truth));
    }
    assert.ok(best >= 0.85, `seed ${seed}: best IoU ${best.toFixed(3)} should reach 85%`);
    assert.ok(iou(predict(noisy, 0.3), truth) < 0.85, `seed ${seed}: the default settings should not already win`);
  }
});
```

- [ ] **Step 2: Run to see it fail**

Run: `yarn test`
Expected: FAIL, cannot find `segment.js`.

- [ ] **Step 3: Implement**

```js
// src/instruments/segment.js
// Synthetic micrograph for the segmentation toy: a field of Gaussian grains is the ground
// truth; speckle noise on top is the input. Thresholding stands in for the CNN.
export const W = 160;
export const H = 110;

export function makeSample(random = Math.random) {
  const seeds = Array.from({ length: 30 }, () => ({ x: random() * W, y: random() * H, r: 4 + random() * 6 }));
  const truth = new Uint8Array(W * H);
  const noisy = new Float32Array(W * H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let f = 0;
      // max, not sum, so neighbouring grains stay separate like a real microstructure
      for (const s of seeds) f = Math.max(f, Math.exp(-((x - s.x) ** 2 + (y - s.y) ** 2) / (2 * s.r * s.r)));
      const i = y * W + x;
      truth[i] = f > 0.55 ? 1 : 0;
      noisy[i] = Math.min(1, Math.max(0, 0.2 + 0.6 * f + (random() - 0.5) * 0.6));
    }
  }
  return { truth, noisy };
}

// Box blur: the "pre-labeling" smoothing step.
export function blur(field, r) {
  if (!r) return field;
  const out = new Float32Array(W * H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let sum = 0, n = 0;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          const xx = x + dx, yy = y + dy;
          if (xx >= 0 && yy >= 0 && xx < W && yy < H) { sum += field[yy * W + xx]; n++; }
        }
      }
      out[y * W + x] = sum / n;
    }
  }
  return out;
}

export function predict(field, threshold) {
  const out = new Uint8Array(field.length);
  for (let i = 0; i < field.length; i++) out[i] = field[i] > threshold ? 1 : 0;
  return out;
}

export function iou(pred, truth) {
  let inter = 0, union = 0;
  for (let i = 0; i < pred.length; i++) {
    if (pred[i] && truth[i]) inter++;
    if (pred[i] || truth[i]) union++;
  }
  return union ? inter / union : 0;
}
```

- [ ] **Step 4: Run tests**

Run: `yarn test`
Expected: all pass.
If "winnable" fails for a seed, tune only the noise amplitude `0.6` in `makeSample` (try `0.5`), never the test thresholds.

- [ ] **Step 5: Commit**

```bash
git add src/instruments/segment.js tests/instruments.test.js
git commit -m "feat: segmentation toy model with IoU"
```

---

### Task 5: Call simulator model

**Files:**
- Create: `src/instruments/callSim.js`
- Modify: `tests/instruments.test.js`

**Interfaces:**
- Produces: `BUDGET_MS = 2000`, `STAGES = [{title, items}]` (3 entries), `SAMPLE_CALLS = [{said, fuzzy, semantic}]` (3 entries), `planTimings(random?): [number, number, number]`.

- [ ] **Step 1: Append failing tests**

```js
// tests/instruments.test.js (append)
import { BUDGET_MS, STAGES, SAMPLE_CALLS, planTimings } from "../src/instruments/callSim.js";

test("simulated calls always land inside the 2s budget", () => {
  const random = seeded(11);
  for (let i = 0; i < 1000; i++) {
    const t = planTimings(random);
    assert.equal(t.length, 3);
    assert.ok(t.every((ms) => Number.isInteger(ms) && ms > 0));
    assert.ok(t[0] + t[1] + t[2] < BUDGET_MS);
  }
});

test("pipeline stages and samples are complete", () => {
  assert.deepEqual(STAGES.map((s) => s.title), ["Ingest", "Understand", "Deliver"]);
  for (const c of SAMPLE_CALLS) assert.ok(c.said && c.fuzzy && c.semantic && c.fuzzy !== c.semantic);
});
```

- [ ] **Step 2: Run to see it fail**

Run: `yarn test`
Expected: FAIL, cannot find `callSim.js`.

- [ ] **Step 3: Implement**

```js
// src/instruments/callSim.js
// Toy version of the SoftSora real-time contact center path. Timings are random within a
// made-up range and always labelled "Simulated"; caller lines are labelled "Sample".
export const BUDGET_MS = 2000;

// Component names come from src/cases.js (ai-contact-center diagram).
export const STAGES = [
  { title: "Ingest", items: ["Kinesis Video Streams", "Lambda", "AWS Transcribe"] },
  { title: "Understand", items: ["Bedrock embeddings", "Semantic similarity", "Amazon Bedrock"] },
  { title: "Deliver", items: ["WebSocket pipeline", "Redis cache", "Live UI"] },
];

export const SAMPLE_CALLS = [
  {
    said: "Hi, I moved last week and need my parcels to go to the new place.",
    fuzzy: "Sorry, I can't help with lost parcels.",
    semantic: "Sure, I can update your delivery address. What's the new one?",
  },
  {
    said: "My card got charged twice for the same thing.",
    fuzzy: "Your card balance is shown in the app.",
    semantic: "Let me check that duplicate charge and start a refund for you.",
  },
  {
    said: "Can someone call me back after six? I'm in meetings till then.",
    fuzzy: "Our opening hours are nine to five.",
    semantic: "Done, I've booked a callback for after 6 pm.",
  },
];

// Worst case 600 + 680 + 440 = 1720 ms, so every simulated call fits the budget.
export function planTimings(random = Math.random) {
  return [380 + random() * 220, 420 + random() * 260, 260 + random() * 180].map(Math.round);
}
```

- [ ] **Step 4: Run tests**

Run: `yarn test`
Expected: all pass.

- [ ] **Step 5: Commit**

```bash
git add src/instruments/callSim.js tests/instruments.test.js
git commit -m "feat: call simulator model with a 2s budget"
```

---

### Task 6: New shell (base styles, top bar, shared motion)

Old pages render unstyled after this task until they are rebuilt; that is expected and local only.

**Files:**
- Create: `src/styles/base.css`, `src/components/Hud.jsx`, `src/components/Hud.css`
- Modify: `index.html`, `src/main.jsx`, `src/App.jsx`, `src/components/Footer.jsx`, `src/motion.js`
- Delete: `src/styles.css`, `src/components/Masthead.jsx`

**Interfaces:**
- Produces:
  - CSS: `[data-era="night|paper|forest|gold|red"]` sets `--bg --fg --accent --muted --trace`; utilities `.kicker`, `.mega`, `.big`, `.line > span`, `.quote` (+ `cite`), `.hl`, `.links`, `.button`, `.button--ghost`, `.stage`, `.skip`.
  - `<Hud film={boolean} path={string} />`: when `film`, it shows `NAME · SC nn / 08 TITLE · YEARS` from the `section[data-scene]` crossing 40% of the viewport and recolours to that section's era; otherwise it shows nav links Film `/`, Archive `/archive`, Journey `/journey`, Notes `/notes` plus a Colombo clock. Always renders the bottom progress line.
  - `src/motion.js` exports `gsap`, `ScrollTrigger`, `MOTION`, `DESKTOP`, and `usePageMotion(rootRef)` which runs fade-up entrances on `[data-reveal]` and count-ups on `[data-count]` under `MOTION`.

- [ ] **Step 1: index.html**

Replace the Google Fonts `<link>` with:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&family=IBM+Plex+Mono:wght@400;500&display=swap"
/>
```

Delete the theme pre-paint `<script>` block and its comment.
Change `<meta name="theme-color" content="#0B0C0B" />` to `content="#0A0A0A"`.
Keep the AdSense script, JSON-LD and meta tags unchanged.

- [ ] **Step 2: base.css**

Create `src/styles/base.css` by porting `docs/superpowers/prototypes/3-story.html` lines 13-92 (root tokens, reset, body, eras, `.stage`, `.kicker`, `.mega`, `.big`, `.line`, `.quote`, `.hl`), lines 172-174 (`.links`) and lines 239-240 (`.button`), with these changes:
- Add `--trace` per era: `night` and `paper` `#FF3B30`, `forest` `#B8F2D3`, `gold` and `red` `#0A0A0A`.
- Add `:root { --bg: #0A0A0A; --fg: #F2F2EF; --accent: #FF3B30; --muted: #9A9A96; --trace: #FF3B30; }` as the night defaults, and set `body { background: var(--bg); color: var(--fg); }`.
- `[data-era]` rules also set `background: var(--bg); color: var(--fg);`.
- `.button { ... background: var(--accent); color: var(--bg); }`, hover `background: var(--fg); color: var(--bg);`.
- Add `.button--ghost { background: transparent; color: var(--fg); box-shadow: inset 0 0 0 1px currentColor; }` (an inset hairline, not a shadow effect).
- Add a skip link and focus ring:

```css
.skip { position: absolute; left: -9999px; top: 8px; z-index: 100; padding: 8px 16px; background: var(--fg); color: var(--bg); }
.skip:focus { left: 8px; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
[data-era="gold"] :focus-visible, [data-era="red"] :focus-visible { outline-color: #111111; }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; } }
```

In `src/main.jsx` change `import "./styles.css";` to `import "./styles/base.css";` and delete `src/styles.css`.

- [ ] **Step 3: Hud**

```jsx
// src/components/Hud.jsx
import { useEffect, useRef, useState } from "react";
import { person } from "../content.js";
import "./Hud.css";

const NAV = [
  ["/", "Film"],
  ["/archive", "Archive"],
  ["/journey", "Journey"],
  ["/notes", "Notes"],
];

const clockFormat = new Intl.DateTimeFormat("en-GB", { timeZone: person.timeZone, hour: "2-digit", minute: "2-digit" });

function useClock() {
  const [now, setNow] = useState(() => clockFormat.format(new Date()));
  useEffect(() => {
    const id = setInterval(() => setNow(clockFormat.format(new Date())), 15000);
    return () => clearInterval(id);
  }, []);
  return now;
}

// The film slate follows whichever scene crosses 40% of the viewport and takes its era colours.
function useScene(enabled) {
  const [scene, setScene] = useState(null);
  useEffect(() => {
    if (!enabled) return;
    const scenes = [...document.querySelectorAll("section[data-scene]")];
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = innerHeight * 0.4;
      const el = scenes.find((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= line && r.bottom > line;
      }) ?? scenes[0];
      if (el) setScene({ num: el.dataset.scene, title: el.dataset.title, year: el.dataset.year, era: el.dataset.era });
    };
    const onScroll = () => (raf ||= requestAnimationFrame(update));
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);
  return scene;
}

function useProgress(barRef) {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      barRef.current.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    };
    const onScroll = () => (raf ||= requestAnimationFrame(update));
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [barRef]);
}

export default function Hud({ film, path }) {
  const scene = useScene(film);
  const clock = useClock();
  const bar = useRef(null);
  useProgress(bar);

  return (
    <>
      <header className="hud" data-era={film ? scene?.era ?? "night" : "night"}>
        <a className="hud__name" href="/">
          {person.name}
        </a>
        {film ? (
          <p className="hud__scene" aria-hidden="true">
            <span className="hud__dot" />
            <span>SC {scene?.num ?? "00"} / 08</span>
            <span className="hud__title">{scene?.title}</span>
          </p>
        ) : (
          <nav className="hud__nav" aria-label="Site">
            {NAV.map(([href, label]) => (
              <a key={href} href={href} aria-current={path === href || (href !== "/" && path.startsWith(href)) ? "page" : undefined}>
                {label}
              </a>
            ))}
          </nav>
        )}
        <p className="hud__meta">
          {film ? (
            <span className="hud__year">{scene?.year}</span>
          ) : (
            <span>
              Colombo <time>{clock}</time>
            </span>
          )}
        </p>
      </header>
      <div className="progress" ref={bar} aria-hidden="true" />
    </>
  );
}
```

`src/components/Hud.css`: port `3-story.html` lines 95-110 (`.hud`, `.hud__scene`, `.hud__dot`, `.hud__year`, `.progress`, `@keyframes rec`) with these changes:
- `.hud` uses `background: var(--bg); color: var(--fg);` (it carries `data-era`) and `pointer-events: auto`.
- `.progress { background: var(--accent); }` replaced by a fixed `#FF3B30`.
- Add `.hud__nav { display: flex; gap: 20px; justify-content: center; }`, `.hud__nav a { text-decoration: none; color: var(--muted); }`, `.hud__nav a[aria-current="page"], .hud__nav a:hover { color: var(--fg); }`, `.hud__meta { justify-self: end; }`, `.hud__name { text-decoration: none; }`.
- At `max-width: 899px`: `.hud { grid-template-columns: 1fr auto; }`, `.hud__title, .hud__meta { display: none; }`, `.hud__nav { gap: 14px; }`.

- [ ] **Step 4: App and Footer**

`src/App.jsx`: replace the Masthead import with `import Hud from "./components/Hud.jsx";` and render `<Hud film={Page === Home} path={path} />` in its place.
Delete `src/components/Masthead.jsx`.
`src/components/Footer.jsx`: render `<footer className="footer" data-era="night">` containing a `.kicker` row: `© {year} {person.name}`, `Colombo, Sri Lanka`, and links `CV`, `LinkedIn`, `GitHub` (from `person.resume`, `socials`). Style in `base.css`: `.footer { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; padding: 24px var(--gutter) 40px; border-top: 1px solid color-mix(in srgb, var(--fg) 20%, transparent); }`.

- [ ] **Step 5: Shared motion**

Rewrite `src/motion.js`:

```js
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MOTION = "(prefers-reduced-motion: no-preference)";
export const DESKTOP = "(min-width: 900px)";

// Fonts change line heights, and opening rows or "Read more" changes the page height below them,
// so every trigger is re-measured after those.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
document.addEventListener("transitionend", (e) => e.propertyName === "grid-template-rows" && ScrollTrigger.refresh());
document.addEventListener("toggle", () => ScrollTrigger.refresh(), true);

function reveals(root) {
  root.querySelectorAll("[data-reveal]").forEach((el) => {
    gsap.from(el, { opacity: 0, y: 24, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
  });
}

// Figures count up from zero, keeping prefix, suffix and decimals ("<2s", "89.3%").
function counters(root) {
  const restore = [];
  root.querySelectorAll("[data-count]").forEach((el) => {
    const text = el.textContent;
    const match = text.match(/-?\d+(\.\d+)?/);
    if (!match) return;
    const [number, fraction = ""] = match;
    const places = Math.max(0, fraction.length - 1);
    const [before, after] = [text.slice(0, match.index), text.slice(match.index + number.length)];
    const state = { value: 0 };
    el.setAttribute("aria-label", text);
    el.textContent = before + (0).toFixed(places) + after;
    restore.push(() => (el.textContent = text));
    gsap.to(state, {
      value: parseFloat(number),
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => (el.textContent = before + state.value.toFixed(places) + after),
    });
  });
  return () => restore.forEach((fn) => fn());
}

export function usePageMotion(rootRef) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION, () => {
      reveals(rootRef.current);
      return counters(rootRef.current);
    });
    return () => mm.revert();
  }, [rootRef]);
}

export { gsap, ScrollTrigger };
```

`src/pages/Home.jsx` and `src/pages/CaseStudy.jsx` still call `usePageMotion(root)` with a second argument or rely on removed effects; leave them until their tasks, but make sure the build passes (remove any import of names that no longer exist).

- [ ] **Step 6: Verify**

Run: `yarn build && yarn test`
Expected: both succeed.
Run `yarn dev`, open `/journey` and check the top bar shows nav links, the Colombo clock, and the red progress line grows when scrolling.

- [ ] **Step 7: Commit**

```bash
git add -A index.html src
git commit -m "feat: film shell with era tokens, top bar and shared motion"
```

---

### Task 7: Instrument shell and canvas hook

**Files:**
- Create: `src/instruments/Screen.jsx`, `src/instruments/useCanvas.js`, `src/instruments/instruments.css`

**Interfaces:**
- Produces:
  - `<Screen title={string} source={string} label={ReactNode} controls={ReactNode} note={string?}>{children}</Screen>`: renders `<figure className="instrument">` with a head row (`title`, `source`, spacer, `label`), the dark `.screen` holding `children`, a `.controls` row, an optional `.instrument__note`.
  - `useCanvas(ref, { height: number | (() => number), draw: (ctx, w, h) => void, tick?: () => void, interval?: number })`: sizes the canvas at device pixel ratio, calls `draw` on mount and resize, and when `tick` is given and motion is allowed, calls `tick(); draw()` every `interval` ms (default 90) only while the canvas is on screen. Returns `redraw()`.

- [ ] **Step 1: useCanvas**

```js
// src/instruments/useCanvas.js
import { useCallback, useEffect, useRef } from "react";

const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useCanvas(ref, { height, draw, tick, interval = 90 }) {
  const view = useRef(null);
  const latest = useRef({ draw, tick, height });
  latest.current = { draw, tick, height };

  const redraw = useCallback(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const dpr = Math.min(2, devicePixelRatio || 1);
    const h = typeof latest.current.height === "function" ? latest.current.height() : latest.current.height;
    const w = canvas.clientWidth;
    if (!view.current || view.current.w !== w || view.current.h !== h) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.height = `${h}px`;
      view.current = { w, h };
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    latest.current.draw(ctx, view.current.w, view.current.h);
  }, [ref]);

  useEffect(() => {
    const canvas = ref.current;
    redraw();
    const resize = new ResizeObserver(redraw);
    resize.observe(canvas);
    let timer = 0;
    const start = () => {
      if (timer || !latest.current.tick || reduced()) return;
      timer = setInterval(() => {
        latest.current.tick();
        redraw();
      }, interval);
    };
    const stop = () => {
      clearInterval(timer);
      timer = 0;
    };
    // Off screen, the loop stops; it resumes when the instrument scrolls back into view.
    const seen = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    seen.observe(canvas);
    return () => {
      stop();
      seen.disconnect();
      resize.disconnect();
    };
  }, [ref, redraw, interval]);

  return redraw;
}
```

- [ ] **Step 2: Screen**

```jsx
// src/instruments/Screen.jsx
import "./instruments.css";

export default function Screen({ title, source, label, controls, note, children }) {
  return (
    <figure className="instrument">
      <figcaption className="instrument__head kicker">
        <span className="instrument__title">{title}</span>
        <span>{source}</span>
        <span className="instrument__spacer" />
        <span>{label}</span>
      </figcaption>
      <div className="screen">{children}</div>
      {controls && <div className="controls">{controls}</div>}
      {note && <p className="instrument__note">{note}</p>}
    </figure>
  );
}
```

- [ ] **Step 3: instruments.css**

Port `docs/superpowers/prototypes/1-playable.html` lines 81-131 and 140-185 into `src/instruments/instruments.css` with these mappings:
- Screen tokens, defined on `.instrument`: `--screen: #141413; --screen-2: #1C1C1A; --screen-line: #2E2E2B; --screen-text: #F2F2EF; --screen-muted: #9A9A96;`. Keep `--trace` from the era.
- `--panel`, `--line`, `--ink`, `--muted` map to the era: `.instrument` has no background and no border; its head and controls use `var(--fg)` and `var(--muted)`.
- Every `border-radius` becomes `0`; delete every `box-shadow`.
- `--mag` and `--mag-ink` become `var(--accent)`; `--trace` stays `var(--trace)`.
- `.btn` becomes square: `border: 1px solid var(--fg); color: var(--fg);`, hover `background: var(--fg); color: var(--bg);`; `.btn--hot { background: var(--accent); border-color: var(--accent); color: var(--bg); }`.
- `.knob input { accent-color: var(--accent); }`.
- Fonts: `--display` stays Archivo for `h3` inside instruments with `font-variation-settings: "wdth" 70; font-weight: 750; text-transform: uppercase;`; `--sans` becomes `var(--display)` at `wdth` 100.
- Keep the `max-width: 860px` rules at lines 220-223.

- [ ] **Step 4: Build**

Run: `yarn build`
Expected: success (components are not mounted yet).

- [ ] **Step 5: Commit**

```bash
git add src/instruments
git commit -m "feat: instrument screen shell and visibility-paused canvas hook"
```

---

### Task 8: Film script and scenes 0 to 2 on the home page

**Files:**
- Create: `src/film/script.js`, `src/film/film.css`, `src/film/filmMotion.js`, `src/film/scenes/Title.jsx`, `src/film/scenes/ColdOpen.jsx`, `src/film/scenes/LearningFast.jsx`
- Modify: `src/pages/Home.jsx` (full rewrite), `tests/content.test.js`

**Interfaces:**
- Produces:
  - `scenes: {id: string, num: string, era: string, title: string, year: string}[]` (9 entries, num "00" to "08").
  - `quotes: Record<string, {text: string, from: string}>` where `from` is an exact `journey.completeJourney[i].date`.
  - `chapters: {from: string, era: string, title: string}[]` for the journey page (Task 13).
  - `<Scene id num era title year>{children}</Scene>` wrapper in `src/film/scenes/Scene.jsx` rendering `<section id={id} className={`scene scene--${id}`} data-scene={num} data-era data-title data-year>`.
  - `useFilmMotion(rootRef)` in `filmMotion.js`, which later tasks extend with one function per scene.

- [ ] **Step 1: Failing quote test**

Append to `tests/content.test.js`:

```js
import { journey } from "../src/journey.js";

test("film quotes are verbatim from the journey entry they cite", async () => {
  const { quotes } = await import("../src/film/script.js");
  for (const [key, q] of Object.entries(quotes)) {
    const entry = journey.completeJourney.find((e) => e.date === q.from);
    assert.ok(entry, `quote "${key}" cites missing journey date "${q.from}"`);
    assert.ok(entry.description.join(" ").includes(q.text), `quote "${key}" is not verbatim from ${q.from}`);
  }
});

test("journey chapters start at real entry dates, in order", async () => {
  const { chapters } = await import("../src/film/script.js");
  const dates = journey.completeJourney.map((e) => e.date);
  let last = -1;
  for (const c of chapters) {
    const at = dates.indexOf(c.from);
    assert.ok(at > last, `chapter "${c.title}" starts at "${c.from}", which is missing or out of order`);
    last = at;
  }
  assert.equal(chapters[0].from, dates[0]);
});
```

Run: `yarn test`
Expected: FAIL, cannot find `src/film/script.js`.

- [ ] **Step 2: script.js**

```js
// src/film/script.js
// Framing copy for the film. Facts come from the content files; every quote here must be
// verbatim from the journey entry it cites (tests/content.test.js enforces this).

export const scenes = [
  { id: "title", num: "00", era: "night", title: "Title", year: "2019 - Now" },
  { id: "cold-open", num: "01", era: "night", title: "Cold open", year: "2019" },
  { id: "learning-fast", num: "02", era: "paper", title: "Learning fast", year: "2019 - 2021" },
  { id: "research", num: "03", era: "forest", title: "Research", year: "2022 - 2023" },
  { id: "graduation", num: "04", era: "gold", title: "Graduation", year: "Nov 2023" },
  { id: "99x", num: "05", era: "paper", title: "99x", year: "2021 - 2025" },
  { id: "contact-center", num: "06", era: "night", title: "The contact center", year: "2025 - 2026" },
  { id: "plot-twist", num: "07", era: "red", title: "Plot twist", year: "2023 - Now" },
  { id: "now", num: "08", era: "night", title: "Now", year: "Now" },
];

export const quotes = {
  givingUp: {
    from: "Dec 2019",
    text: "As someone who had previously experienced academic success, this score was disheartening, and I contemplated the idea of giving up.",
  },
  morningTillNight: {
    from: "May - Sep 2020",
    text: "From morning till night, I immersed myself in my laptop, embarking on a relentless pursuit of knowledge.",
  },
  firstHtml: { from: "Jul 2019", text: "I found it fascinating to see the immediate results" },
  java: { from: "Jan 2020", text: "made a world of a difference" },
  certificates: { from: "May - Sep 2020", text: "100+ certificates, showcasing the breadth and depth of my learning journey" },
  daring: { from: "Nov 2022 - April 2023", text: "for some unknown reason, I made the daring choice to take it a step further." },
  fyp: { from: "Jul 2024", text: "time series forecasting all over again. Apparently my FYP was not done with me 😝" },
  longNights: { from: "2025", text: "This was the season of crazy long nights, and more than a few overnights at the office 🥲" },
  twist: { from: "Jul 2023", text: "Remember the guy who scored 65% on his first Python assignment? He now marks assignments" },
  awsQuiz: { from: "Sep 2025", text: "All those late nights in the AWS console finally paid off in a very unexpected way 😝" },
  gaps: {
    from: "Now",
    text: "it is not about being exceptional. It is about not waiting for the perfect block of time, and using the gaps.",
  },
  longWay: { from: "Now", text: "I still have a long way to go :)" },
};

// Journey page chapters: each starts at an existing entry date and runs until the next one.
export const chapters = [
  { from: "Jun 2019", era: "night", title: "Cold open" },
  { from: "Jan 2020", era: "paper", title: "Learning fast" },
  { from: "Jul 2022", era: "forest", title: "Research" },
  { from: "Jul 2023", era: "red", title: "Plot twist" },
  { from: "Oct - Nov 2023", era: "gold", title: "Graduation" },
  { from: "Jul 2024", era: "paper", title: "99x" },
  { from: "May - Jun 2025", era: "night", title: "SoftSora" },
];
```

Run: `yarn test`
Expected: all pass.
If a quote fails, copy the exact substring from `src/journey.js`; never edit `journey.js` to match.

- [ ] **Step 3: Scene wrapper and scenes 0 to 2**

```jsx
// src/film/scenes/Scene.jsx
export default function Scene({ scene, className = "", pin = true, children, after }) {
  return (
    <section
      id={scene.id}
      className={`scene scene--${scene.id} ${className}`}
      data-scene={scene.num}
      data-era={scene.era}
      data-title={scene.title}
      data-year={scene.year}
      aria-label={scene.title}
    >
      <div className="stage" data-pin={pin ? "" : undefined}>
        {children}
      </div>
      {after && <div className="scene__after">{after}</div>}
    </section>
  );
}
```

`src/film/scenes/Title.jsx`: port `3-story.html` lines 287-312.
Bind: roles line from `person.role`, `person.company`, `teaching.role` + "IIT", "IEEE published", `person.city` + ", Sri Lanka".
The chapter list maps `scenes.slice(1)` to `<a href={`#${s.id}`}>{s.num} {s.title}</a>`.
Use `<h1 className="mega">` with two `.line` spans: "Ammar" and "Raneez" plus `<span className="red">.</span>`.

`src/film/scenes/ColdOpen.jsx`: port lines 315-340.
The kicker above the score reads `Dec 2019 · Programming Principles I · <b>first Python assignment</b>`.
The blockquote renders `“{quotes.givingUp.text}”` with `<cite>Ammar, on his first Python assignment</cite>`.
The big intro lines stay "Chemistry, Physics / & Math. / Not a single line / of code." (framing of the Jun 2019 entry).

`src/film/scenes/LearningFast.jsx`: port lines 343-395 with cards built from data:

```jsx
import { competitions, projects } from "../../content.js";
import { quotes } from "../script.js";
import Scene from "./Scene.jsx";

const logos = import.meta.glob("../../assets/images/*_logo.png", { eager: true, query: "?url", import: "default" });
const logo = (file) => logos[`../../assets/images/${file}`];

export default function LearningFast({ scene }) {
  const coderally = competitions.find((c) => c.title === "Coderally 2");
  const medical = projects.filter((p) => ["ONCO", "E-Ophthalmologist"].includes(p.name));
  return (
    <Scene scene={scene} className="film-reel">
      <div className="reel">
        <div className="reel__intro">
          <p className="kicker">2019 - 2021 · <b>He didn't give up</b></p>
          <h2 className="big"><span className="line"><span>From morning</span></span><span className="line"><span>till night.</span></span></h2>
          <p className="quote quote--small">“{quotes.morningTillNight.text}”</p>
        </div>
        <article className="card">
          <p className="card__date">Jul 2019</p>
          <h3 className="card__title">My very first HTML file</h3>
          <p>“{quotes.firstHtml.text}.”</p>
        </article>
        <article className="card">
          <p className="card__date">Jan 2020</p>
          <h3 className="card__title">Java, in a two-week break</h3>
          <p>Learned Java between semesters. It <span className="hl">{quotes.java.text}.</span></p>
        </article>
        <article className="card">
          <p className="card__date">Mar 2020</p>
          <h3 className="card__title">A first real project</h3>
          <p>A train ticket booking app for the Denuwara Manike expressway.</p>
        </article>
        <article className="card">
          <p className="card__date">May - Sep 2020</p>
          <p className="card__num">100+</p>
          <h3 className="card__title">Certificates</h3>
          <p>“{quotes.certificates.text}.”</p>
        </article>
        <article className="card">
          <p className="card__date">{coderally.year}</p>
          <p className="card__num">1st</p>
          <h3 className="card__title">{coderally.title}</h3>
          <p>{coderally.result}.</p>
        </article>
        <article className="card">
          <p className="card__date">Mar - May 2021</p>
          <h3 className="card__title">AI for medicine</h3>
          {medical.map((p) => <p key={p.name}><span className="hl">{p.name}</span>: {p.description}</p>)}
        </article>
        <article className="card">
          <p className="card__date">Oct 2020 - Jul 2021</p>
          <h3 className="card__title">First paid code</h3>
          <p>Full-stack developer at Inforwaves, Niftron and The Radiant, alongside university.</p>
          <div className="logos">
            {["inforwaves_logo.png", "niftron_logo.png", "radiant_logo.png"].map((f) => <img key={f} src={logo(f)} alt={f.split("_")[0]} width="44" height="44" loading="lazy" />)}
          </div>
        </article>
      </div>
    </Scene>
  );
}
```

Card facts were checked against the content on 2026-10-13: the Denuwara Manike app is the `Mar 2020` entry, 100+ certificates the `May - Sep 2020` entry, ONCO and E-Ophthalmologist the `Mar - May 2021` entry and `projects`, Coderally 2 is in `competitions`.
Card text that is not a quote must be a paraphrase of a content fact, never a new fact.

- [ ] **Step 4: film.css**

Create `src/film/film.css` by porting `3-story.html` lines 112-155 (title card, cold open, reel, cards) and the phone rules from lines 247-273 that touch them.
Changes: `.scene` gets `position: relative; overflow: hidden;` (eras paint via `base.css`), `.stage` padding top `96px` to clear the top bar, `.card p:not([class])` colour becomes `var(--fg)` at `opacity: 0.85`, logos use `filter: grayscale(1)` and `mix-blend-mode: multiply`.
The `.film` class toggled on `<html>` in the prototype becomes `.is-film` on `<html>`, added by `useFilmMotion` inside the desktop branch.

- [ ] **Step 5: filmMotion.js with scenes 1 and 2**

```js
// src/film/filmMotion.js
import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger, MOTION, DESKTOP } from "../motion.js";

const pin = (stage, length, scrub = 0.6) =>
  gsap.timeline({ scrollTrigger: { trigger: stage, start: "top top", end: `+=${length}%`, pin: true, scrub } });

// Scene builders run in document order; each returns an optional cleanup.
const desktop = {
  "cold-open": (s) => {
    pin(s.querySelector("[data-pin]"), 220)
      .to(s.querySelectorAll(".cold__intro .line > span"), { yPercent: -110, stagger: 0.05, ease: "power2.in", duration: 0.5 })
      .to(s.querySelector(".cold__intro .kicker"), { opacity: 0, duration: 0.2 }, 0)
      .from(s.querySelector(".cold__mark .kicker"), { opacity: 0, y: 20, duration: 0.2 }, 0.45)
      .from(s.querySelector(".score"), { scale: 0.18, opacity: 0, transformOrigin: "left bottom", ease: "power3.out", duration: 0.7 }, 0.45)
      .fromTo(s.querySelector(".pen path"), { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: "power1.inOut", duration: 0.5 }, 1.05)
      .from(s.querySelector(".quote"), { opacity: 0, y: 30, duration: 0.3 }, 1.3)
      .to({}, { duration: 0.3 });
  },
  "learning-fast": (s) => {
    const reel = s.querySelector(".reel");
    const stage = s.querySelector("[data-pin]");
    const dist = () => reel.scrollWidth - innerWidth + parseFloat(getComputedStyle(stage).paddingLeft) * 2;
    gsap
      .timeline({ scrollTrigger: { trigger: stage, start: "top top", end: () => `+=${dist()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true } })
      .to(reel, { x: () => -dist(), ease: "none" });
  },
};

const anySize = {
  title: (s) => {
    gsap.from(s.querySelectorAll(".line > span"), { yPercent: 110, duration: 1.1, ease: "expo.out", stagger: 0.08, delay: 0.1 });
    gsap.from(s.querySelectorAll(".slate, .scroll-cue"), { opacity: 0, y: 12, duration: 0.8, delay: 0.6, stagger: 0.1 });
  },
};

export function useFilmMotion(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    const scenes = [...root.querySelectorAll("section[data-scene]")];
    const run = (builders) => scenes.map((s) => builders[s.id]?.(s)).filter(Boolean);
    const mm = gsap.matchMedia();
    // Pinned scenes first, in document order: ScrollTrigger measures in creation order.
    mm.add(`${MOTION} and ${DESKTOP}`, () => {
      document.documentElement.classList.add("is-film");
      const cleanups = run(desktop);
      return () => {
        cleanups.forEach((fn) => fn());
        document.documentElement.classList.remove("is-film");
      };
    });
    mm.add(MOTION, () => {
      const cleanups = run(anySize);
      return () => cleanups.forEach((fn) => fn());
    });
    return () => mm.revert();
  }, [rootRef]);
}

export { ScrollTrigger };
```

Use the class names `cold__intro` and `cold__mark` in `ColdOpen.jsx` (renamed from the prototype's `s1-intro`, `s1-mark`) and in `film.css`.

- [ ] **Step 6: Home**

```jsx
// src/pages/Home.jsx
import { useRef } from "react";
import { scenes } from "../film/script.js";
import { useFilmMotion } from "../film/filmMotion.js";
import Title from "../film/scenes/Title.jsx";
import ColdOpen from "../film/scenes/ColdOpen.jsx";
import LearningFast from "../film/scenes/LearningFast.jsx";
import "../film/film.css";

const byId = Object.fromEntries(scenes.map((s) => [s.id, s]));

export default function Home() {
  const root = useRef(null);
  useFilmMotion(root);
  return (
    <div ref={root} className="film">
      <Title scene={byId.title} />
      <ColdOpen scene={byId["cold-open"]} />
      <LearningFast scene={byId["learning-fast"]} />
    </div>
  );
}
```

- [ ] **Step 7: Verify**

Run: `yarn test && yarn build && (npx -y serve@14 build -l 4321 >/dev/null 2>&1 &)`.
Screenshots:

```bash
mkdir -p .shots
npx -y playwright@1.64.0 screenshot --viewport-size=1440,900 --wait-for-timeout=1500 http://localhost:4321/ .shots/t8-title.png
npx -y playwright@1.64.0 screenshot --viewport-size=390,844 --wait-for-timeout=1500 --full-page http://localhost:4321/ .shots/t8-phone.png
```

Read both PNGs.
Expected: the title card fills the first viewport on ink with the red full stop; on the phone the scenes stack with no clipped text.
Also scroll-check the cold open in the Playwright MCP browser at 1440: the 65% grows, the pen circle draws, the quote appears.
Add `.shots/` to `.gitignore`.

- [ ] **Step 8: Commit**

```bash
git add -A src tests .gitignore
git commit -m "feat: film script and the first three scenes"
```

---

### Task 9: Research scene with the Forecaster, and Graduation

**Files:**
- Create: `src/instruments/Forecaster.jsx`, `src/film/scenes/Research.jsx`, `src/film/scenes/Graduation.jsx`
- Modify: `src/film/film.css`, `src/film/filmMotion.js`, `src/pages/Home.jsx`

**Interfaces:**
- Consumes: `createForecaster`, `PAST`, `AHEAD` (Task 3); `Screen`, `useCanvas` (Task 7); `Scene` (Task 8).
- Produces: `<Forecaster />` (no props; colours read from CSS variables of its era).

- [ ] **Step 1: Forecaster**

```jsx
// src/instruments/Forecaster.jsx
import { useMemo, useRef, useState } from "react";
import Screen from "./Screen.jsx";
import { useCanvas } from "./useCanvas.js";
import { createForecaster, PAST, AHEAD } from "./forecast.js";

const token = (el, name) => getComputedStyle(el).getPropertyValue(name).trim();

export default function Forecaster() {
  const canvas = useRef(null);
  const model = useMemo(() => createForecaster(), []);
  const [readout, setReadout] = useState(model.state());
  const [noise, setNoise] = useState(35);

  const draw = (ctx, w, h) => {
    const el = canvas.current;
    const [line, text, muted, trace] = ["--screen-line", "--screen-text", "--screen-muted", "--trace"].map((n) => token(el, n));
    const { series, band } = model;
    const { level } = model.state();
    const padT = 54, padB = 22, n = PAST + AHEAD;
    const x = (i) => (i / (n - 1)) * w;
    const lo = Math.min(...series, level - band(AHEAD)), hi = Math.max(...series, level + band(AHEAD));
    const span = Math.max(2, hi - lo) * 1.15, mid = (hi + lo) / 2;
    const y = (v) => padT + (h - padT - padB) * (0.5 - (v - mid) / span);
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = line;
    ctx.lineWidth = 1;
    for (let g = 0; g <= 4; g++) {
      const gy = Math.round(padT + ((h - padT - padB) * g) / 4) + 0.5;
      ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
    }
    const nowX = x(PAST - 1);
    ctx.setLineDash([3, 4]);
    ctx.beginPath(); ctx.moveTo(nowX + 0.5, padT - 10); ctx.lineTo(nowX + 0.5, h - padB + 6); ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    for (let k = 0; k <= AHEAD; k++) ctx.lineTo(x(PAST - 1 + k), y(level + band(k)));
    for (let k = AHEAD; k >= 0; k--) ctx.lineTo(x(PAST - 1 + k), y(level - band(k)));
    ctx.closePath();
    ctx.globalAlpha = 0.2; ctx.fillStyle = trace; ctx.fill(); ctx.globalAlpha = 1;
    ctx.strokeStyle = trace; ctx.setLineDash([6, 5]);
    ctx.beginPath(); ctx.moveTo(nowX, y(level)); ctx.lineTo(x(n - 1), y(level)); ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = text; ctx.lineWidth = 1.6; ctx.lineJoin = "round";
    ctx.beginPath();
    series.forEach((v, i) => (i ? ctx.lineTo(x(i), y(v)) : ctx.moveTo(x(i), y(v))));
    ctx.stroke();
    ctx.fillStyle = trace;
    ctx.beginPath(); ctx.arc(nowX, y(series[series.length - 1]), 4, 0, Math.PI * 2); ctx.fill();
    ctx.font = "500 11px 'IBM Plex Mono', monospace"; ctx.fillStyle = muted;
    ctx.fillText("PAST", 8, h - 7);
    ctx.textAlign = "right"; ctx.fillText("NOW", nowX - 6, h - 7);
    if (w - nowX > 80) ctx.fillText("FORECAST", w - 8, h - 7);
    ctx.textAlign = "left";
  };

  const sync = () => setReadout(model.state());
  const redraw = useCanvas(canvas, {
    height: () => (innerWidth < 860 ? 260 : 340),
    draw,
    tick: () => { model.step(); sync(); },
  });
  // Under reduced motion there is no loop, so each action advances the series itself.
  const act = (fn) => () => {
    fn();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) for (let i = 0; i < 24; i++) model.step();
    sync();
    redraw();
  };
  const shock = act(() => model.shock());

  return (
    <Screen
      title="Forecaster"
      source="After my LTS network, IEEE CCWC 2023"
      label={<><b>Illustration</b>, not the published model</>}
      controls={
        <>
          <button className="btn btn--hot" type="button" onClick={shock}>Inject shock</button>
          <button className="btn" type="button" onClick={act(() => model.calm())}>Calm it down</button>
          <label className="knob">
            Noise
            <input type="range" min="0" max="100" value={noise} onChange={(e) => { setNoise(e.target.value); model.setNoise(e.target.value / 100); }} />
          </label>
        </>
      }
      note="The idea in LTS: when the data turns volatile, the network's time constant shrinks so it adapts faster, then relaxes as things settle. Watch τ drop on a shock and the band widen, then both recover."
    >
      <canvas ref={canvas} onClick={shock} role="img" aria-label="A noisy time series with an 80% forecast band. Use the buttons below to disturb it." />
      <p className="sr-only" aria-live="polite">Forecaster status: {readout.status}</p>
      <p className="readout" aria-hidden="true">
        <span>Volatility <b>{readout.vol.toFixed(2)}</b></span>
        <span>Time constant τ <b className="hot">{readout.tau.toFixed(1)}</b></span>
        <span>Band 80% <b>±{model.band(AHEAD).toFixed(1)}</b></span>
        <span>Status <b>{readout.status}</b></span>
        <span className="readout__hint">Click the screen to shock it</span>
      </p>
    </Screen>
  );
}
```

Check: the note sentence restates the `research.summary` idea; compare with `src/content.js` `research.summary` and `src/cases.js` `lts-network` and reword only if it claims something those do not.
The visual readout updates every 90 ms, so it is hidden from screen readers; the `sr-only` live line only changes text when the status changes, so it is announced once per change.

- [ ] **Step 2: Research and Graduation scenes**

`src/film/scenes/Research.jsx`: port `3-story.html` lines 398-423 inside `<Scene scene={scene} after={<Forecaster />}>`.
Bind: kicker `Oct 2022 · <b>His own thesis</b>`; "LTS"; `research.title`; quote `quotes.daring.text` with cite "On replacing the algorithm he was meant to re-implement"; facts `research.venue`, "Best Final Year Project" (from `competitions` or `degree.points`), NBQSA from `competitions`; links `research.paper`, `research.code`.
Port the illustrative SVG chart (lines 409-414) and its path generator (lines 549-566) into a `useMemo` that returns the two `d` strings using `seeded(7)` from `src/instruments/random.js`.

`src/film/scenes/Graduation.jsx`: port lines 426-450.
Bind: kicker from `degree.period` end year, `degree.title`, `degree.school`, `degree.via`; average `degree.average` rendered as the number plus `<small>%</small>` with `data-avg`; honours rows from `degree.points` and `degree.result`.
Keep the medal SVG ring text "GOLD MEDAL · TOP OF THE BATCH · 2023 ·" (twice).
"Valedictorian" and "94% FYP" only if `grep -n "valedictorian\|94%" src/*.js` finds them in content; otherwise drop the row.

- [ ] **Step 3: Styles**

Append to `film.css` the port of lines 157-188 and the phone rules for `.s4` and `.facts`, renaming `.s3` to `.scene--research` and `.s4` to `.scene--graduation`.
Add `.scene__after { padding: 0 var(--gutter) 96px; }`.

- [ ] **Step 4: Motion**

Add to `desktop` in `filmMotion.js`, after `"learning-fast"`:

```js
  research: (s) => {
    pin(s.querySelector("[data-pin]"), 160)
      .from(s.querySelector(".lts"), { yPercent: 40, opacity: 0, duration: 0.3 })
      .fromTo(s.querySelector(".chart .noisy"), { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: "none", duration: 0.6 }, 0.1)
      .fromTo(s.querySelector(".chart .smooth"), { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: "none", duration: 0.6 }, 0.45)
      .from(s.querySelectorAll(".facts > div"), { opacity: 0, y: 24, stagger: 0.08, duration: 0.25 }, 0.9)
      .to({}, { duration: 0.2 });
  },
  graduation: (s) => {
    const avg = s.querySelector("[data-avg]");
    const target = parseFloat(avg.firstChild.nodeValue);
    const counter = { v: 0 };
    pin(s.querySelector("[data-pin]"), 160)
      .to(counter, { v: target, ease: "power2.out", duration: 0.8, onUpdate: () => (avg.firstChild.nodeValue = counter.v.toFixed(1)) })
      .fromTo(s.querySelector(".medal__ring"), { rotation: -90, svgOrigin: "200 200" }, { rotation: 90, svgOrigin: "200 200", ease: "none", duration: 1.2 }, 0)
      .from(s.querySelector(".medal"), { scale: 0.6, opacity: 0, duration: 0.4 }, 0)
      .from(s.querySelectorAll(".honours li"), { opacity: 0, x: -30, stagger: 0.1, duration: 0.25 }, 0.5);
    return () => (avg.firstChild.nodeValue = target.toFixed(1));
  },
```

- [ ] **Step 5: Mount**

Add `Research` and `Graduation` to `Home.jsx` after `LearningFast`.

- [ ] **Step 6: Deep links**

Add to `useFilmMotion`, after both `mm.add` calls:

```js
    // /#credits (the /contact redirect) and /#research etc. land correctly once pins exist.
    const jump = () => {
      const target = location.hash && root.querySelector(location.hash);
      if (target) scrollTo(0, target.getBoundingClientRect().top + scrollY);
    };
    document.fonts?.ready.then(() => {
      ScrollTrigger.refresh();
      jump();
    });
```

Verify: open `http://localhost:4321/#graduation` at 1440 in the Playwright MCP browser; expected the gold scene is in view (pinned start), not the research scene.

- [ ] **Step 7: Verify**

`yarn test && yarn build`, restart the static server, then in the Playwright MCP browser at 1440:
- Scroll through Research: chart draws, facts appear, then the Forecaster scrolls in below and animates.
- Click "Inject shock": status reads "shock", τ drops, the band widens.
- At 390: the Forecaster fits with no horizontal scroll; buttons wrap.
- With `emulateMedia({ reducedMotion: "reduce" })`: the Forecaster is still; "Inject shock" advances it by 24 steps.
Run the contrast check on the forest era screen text:

```bash
python3 ~/.claude/skills/tastemaker/scripts/check_contrast.py --matrix text=#F2F2EF bg=#141413 muted=#9A9A96 accent=#B8F2D3
```

Expected: text/bg, muted/bg, accent/bg pass AA.

- [ ] **Step 8: Commit**

```bash
git add -A src
git commit -m "feat: research scene with the playable forecaster, and graduation"
```

---

### Task 10: 99x scene with the Segmenter, and the contact center with the Call simulator

**Files:**
- Create: `src/instruments/Segmenter.jsx`, `src/instruments/CallSimulator.jsx`, `src/film/scenes/NinetyNineX.jsx`, `src/film/scenes/ContactCenter.jsx`
- Modify: `src/film/film.css`, `src/film/filmMotion.js`, `src/pages/Home.jsx`

**Interfaces:**
- Consumes: `makeSample`, `blur`, `predict`, `iou`, `W`, `H` (Task 4); `STAGES`, `SAMPLE_CALLS`, `planTimings`, `BUDGET_MS` (Task 5); `Screen` (Task 7).
- Produces: `<Segmenter />`, `<CallSimulator />`.

- [ ] **Step 1: Segmenter**

```jsx
// src/instruments/Segmenter.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import Screen from "./Screen.jsx";
import { W, H, makeSample, blur, predict, iou } from "./segment.js";

const HIT = [255, 59, 48], FALSE = [122, 32, 28], MISSED = [70, 70, 68], EMPTY = [20, 20, 19];

function paint(canvas, colour) {
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  const img = ctx.createImageData(W, H);
  for (let i = 0; i < W * H; i++) img.data.set([...colour(i), 255], i * 4);
  ctx.putImageData(img, 0, 0);
}

export default function Segmenter() {
  const input = useRef(null), output = useRef(null);
  const [sample, setSample] = useState(() => makeSample());
  const [threshold, setThreshold] = useState(30);
  const [smoothing, setSmoothing] = useState(0);
  const pred = useMemo(() => predict(blur(sample.noisy, smoothing), threshold / 100), [sample, threshold, smoothing]);
  const score = iou(pred, sample.truth);

  useEffect(() => {
    paint(input.current, (i) => { const v = sample.noisy[i] * 235; return [v, v * 0.97, v * 0.9]; });
  }, [sample]);
  useEffect(() => {
    paint(output.current, (i) => (pred[i] && sample.truth[i] ? HIT : pred[i] ? FALSE : sample.truth[i] ? MISSED : EMPTY));
  }, [pred, sample]);

  return (
    <Screen
      title="Segmenter"
      source="After the microscopy segmentation work at 99x"
      label={<><b>Illustration</b>, synthetic sample, thresholding instead of a CNN</>}
      controls={
        <>
          <label className="knob">Threshold <input type="range" min="20" max="80" value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} /></label>
          <label className="knob">Smoothing <input type="range" min="0" max="4" value={smoothing} onChange={(e) => setSmoothing(Number(e.target.value))} /></label>
          <button className="btn" type="button" onClick={() => setSample(makeSample())}>New sample</button>
        </>
      }
      note="Here you're the model: pick a threshold, add pre-labeling smoothing, and chase 85% IoU."
    >
      <div className="seg-grid">
        <figure><canvas ref={input} role="img" aria-label="Noisy synthetic micrograph" /><figcaption className="kicker">Input, noisy sample</figcaption></figure>
        <figure><canvas ref={output} role="img" aria-label="Predicted mask compared with the ground truth" /><figcaption className="kicker">Your mask vs ground truth</figcaption></figure>
        <div className="iou">
          <span className="kicker">IoU</span>
          <span className={`iou__value${score >= 0.85 ? " is-pass" : ""}`} aria-live="polite">{Math.round(score * 100)}%</span>
          <span className="iou__meter" aria-hidden="true"><span style={{ width: `${score * 100}%` }} /><i /></span>
          <ul className="legend kicker">
            <li><i style={{ background: `rgb(${HIT})` }} />Hit</li>
            <li><i style={{ background: `rgb(${FALSE})` }} />False grain</li>
            <li><i style={{ background: `rgb(${MISSED})` }} />Missed</li>
          </ul>
        </div>
      </div>
    </Screen>
  );
}
```

Canvases are `W x H` internal pixels scaled by CSS: in `instruments.css` add `.seg-grid canvas { width: 100%; height: auto; image-rendering: pixelated; display: block; }`.
The segmenter has no loop, so reduced motion needs no special case.

- [ ] **Step 2: CallSimulator**

```jsx
// src/instruments/CallSimulator.jsx
import { useEffect, useRef, useState } from "react";
import Screen from "./Screen.jsx";
import { BUDGET_MS, STAGES, SAMPLE_CALLS, planTimings } from "./callSim.js";

const idle = { active: -1, ms: [0, 0, 0], plan: [1, 1, 1], said: "Press \"Place a call\" to start.", answer: "Waiting for audio.", replied: false, mode: "semantic" };

export default function CallSimulator() {
  const [mode, setMode] = useState("semantic");
  const [run, setRun] = useState(idle);
  const busy = useRef(false);
  const which = useRef(0);
  const alive = useRef(true);
  useEffect(() => () => (alive.current = false), []);

  const wait = (ms) => new Promise((r) => setTimeout(r, matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : ms));

  async function place() {
    if (busy.current) return; // one call at a time
    busy.current = true;
    const call = SAMPLE_CALLS[which.current++ % SAMPLE_CALLS.length];
    const usedMode = mode; // a mode change mid-call applies to the next call
    const timings = planTimings();
    const words = call.said.split(" ");
    const reply = call[usedMode].split(" ");
    const ms = [0, 0, 0];
    setRun({ ...idle, said: "", answer: "", active: 0, mode: usedMode, plan: timings });
    for (let i = 0; i < 3; i++) {
      const steps = Math.max(1, Math.round(timings[i] / 40));
      for (let s = 1; s <= steps; s++) {
        await wait(timings[i] / steps);
        if (!alive.current) return;
        ms[i] = Math.round((timings[i] * s) / steps);
        const p = s / steps;
        setRun((r) => ({
          ...r,
          active: i,
          ms: [...ms],
          said: i === 0 ? words.slice(0, Math.ceil(words.length * p)).join(" ") : call.said,
          answer: i === 2 ? reply.slice(0, Math.ceil(reply.length * p)).join(" ") : "",
          replied: i === 2,
        }));
      }
    }
    setRun((r) => ({ ...r, active: 3 }));
    busy.current = false;
  }

  const total = run.ms.reduce((a, b) => a + b, 0);
  return (
    <Screen
      title="Call the AI"
      source="After the real-time AI contact center at SoftSora"
      label={<><b>Simulated</b> timings, <b>sample</b> calls</>}
      controls={
        <>
          <button className="btn btn--hot" type="button" onClick={place} aria-disabled={run.active >= 0 && run.active < 3}>Place a call</button>
          <div className="seg-switch" role="group" aria-label="Matching method">
            {["fuzzy", "semantic"].map((m) => (
              <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}>{m === "fuzzy" ? "Fuzzy match" : "Semantic"}</button>
            ))}
          </div>
        </>
      }
      note="Swapping fuzzy matching for semantic similarity on Bedrock embeddings raised response relevance by 30%+. Flip the switch and call again to see why."
    >
      <div className="pipe">
        {STAGES.map((stage, i) => (
          <div key={stage.title} className={`stage${run.active === i ? " is-on" : run.active > i ? " is-done" : ""}`}>
            <span className="ms">{run.ms[i]} ms</span>
            <h3>{stage.title}</h3>
            <ul>{stage.items.map((item) => <li key={item}>{item}</li>)}</ul>
            <span className="fill" style={{ width: `${Math.min(100, (run.ms[i] / run.plan[i]) * 100)}%` }} />
          </div>
        ))}
      </div>
      <div className="convo">
        <p className="bubble"><span className="kicker">Caller, sample</span>{run.said}</p>
        <p className={`bubble bubble--ai${run.replied ? " is-in" : ""}`}>
          <span className="kicker">{run.mode === "fuzzy" ? "Agent, fuzzy match" : "Agent, semantic match"}</span>
          {run.answer || (run.active >= 0 && run.active < 3 ? <span className="caret" /> : idle.answer)}
        </p>
      </div>
      <div className="budget">
        <div className="budget__track">
          {run.ms.map((m, i) => <span key={i} className="budget__seg" style={{ width: `${(m / BUDGET_MS) * 100}%` }} />)}
          <span className="budget__limit" />
        </div>
        <p className="budget__legend kicker"><span>Latency budget</span><span><b>{total}</b> / {BUDGET_MS} ms</span></p>
      </div>
    </Screen>
  );
}

```

The prototype's pipeline cell class `.stage` is renamed `.pipe__stage` in both JSX and CSS, because `.stage` is the film's scene container: change `className={`stage${...}`}` above to `className={`pipe__stage${...}`}` when writing the file.

- [ ] **Step 3: Scenes**

`src/film/scenes/NinetyNineX.jsx`: port `3-story.html` lines 453-478 inside `<Scene scene={scene} after={<Segmenter />}>`.
Bind the ladder from `work.filter((w) => w.company === "99x")` reversed to oldest first: kicker = first three characters of month + year from `period`, heading = `role`; the last gets `is-top`.
The bar copy and stats come from the Senior role's `metrics` (`<2h` with label "Data labeling, down from 40+ hours", `85%+`, `+50%`).
The quote is `quotes.fyp.text` with the first letter capitalised in render only (`text[0].toUpperCase() + text.slice(1)`).

`src/film/scenes/ContactCenter.jsx`: port lines 481-498 inside `<Scene scene={scene} after={<CallSimulator />}>`.
The heading comes from `cases.find((c) => c.slug === "ai-contact-center")` summary's first clause "A production AI call center" (framing) and the case `title`.
Nodes: Listen, Understand, Respond, with the third kicker "03 · Sub-2s".
Quote: `quotes.longNights.text`.
Stamp: `person.role` and "Since Mar 2026" (the `Mar 2026` journey entry).
Port the waveform canvas (lines 569-591) with `useCanvas` (height 120, `tick` advancing `t`), labelled in a `.kicker` caption "Illustration".

- [ ] **Step 4: Styles and motion**

Port lines 190-221 (99x and night shift) into `film.css`, renaming `.s5` to `.scene--99x` and `.s6` to `.scene--contact-center`, plus their phone rules.
Port the instrument styles for `.pipe`, `.convo`, `.bubble`, `.budget`, `.seg-switch`, `.seg-grid`, `.iou`, `.legend` from `1-playable.html` lines 140-185 into `instruments.css` with the Task 7 mapping, and the `@media (max-width: 860px)` rules at lines 220-223.
Add to `desktop` in `filmMotion.js` after `graduation`:

```js
  "99x": (s) => {
    pin(s.querySelector("[data-pin]"), 180)
      .from(s.querySelectorAll(".step"), { opacity: 0.15, stagger: 0.25, duration: 0.25 })
      .from(s.querySelector(".bar:not(.bar--after)"), { scaleX: 0.05, duration: 0.4 }, 0.8)
      .from(s.querySelector(".bar--after"), { opacity: 0, duration: 0.2 }, 1.15)
      .from(s.querySelectorAll(".stat"), { opacity: 0, y: 30, stagger: 0.1, duration: 0.3 }, 1.2)
      .to({}, { duration: 0.2 });
  },
  "contact-center": (s) => {
    const nodes = [...s.querySelectorAll(".node")];
    const light = (i) => nodes.forEach((n, j) => n.classList.toggle("is-live", j <= i));
    const tl = pin(s.querySelector("[data-pin]"), 180);
    tl.call(() => light(-1), null, 0.01);
    nodes.forEach((_, i) => tl.call(() => light(i), null, 0.15 + i * 0.3));
    tl.from(s.querySelector(".quote"), { opacity: 0, y: 30, duration: 0.3 }, 0.9)
      .from(s.querySelector(".stamp"), { scale: 2.4, opacity: 0, rotation: -14, ease: "back.out(2)", duration: 0.3 }, 1.25)
      .to({}, { duration: 0.2 });
    return () => light(nodes.length - 1);
  },
```

In `film.css`, nodes are lit by default (`.node h3 { color: var(--fg); }`, `.node { border-top-color: var(--accent); }`) and dimmed only under `.is-film .node:not(.is-live)`, so reduced motion and phones show the final state.

- [ ] **Step 5: Verify**

`yarn test && yarn build`, restart the server, then in the Playwright MCP browser at 1440:
- 99x: steps light in order, the 40+ h bar collapses, stats appear; the Segmenter below responds to both sliders and "New sample", and reaching 85% turns the IoU red.
- Contact center: nodes light in order, the stamp lands; "Place a call" streams the caller text, counters run, the total ends under 2000.
- Click "Place a call" three times quickly: only one call runs (the caller text does not restart mid-call).
- Switch to "Fuzzy match" during a call: the running call keeps its original agent label; the next call uses fuzzy.
- At 390: both instruments fit with no horizontal scroll.

- [ ] **Step 6: Commit**

```bash
git add -A src
git commit -m "feat: 99x scene with the segmenter and the contact center with the call simulator"
```

---

### Task 11: Plot twist, Now and the credits

**Files:**
- Create: `src/film/scenes/PlotTwist.jsx`, `src/film/scenes/Now.jsx`, `src/film/Credits.jsx`
- Modify: `src/film/film.css`, `src/film/filmMotion.js`, `src/pages/Home.jsx`

**Interfaces:**
- Consumes: `quotes`, `scenes`; `person`, `socials`, `teaching`, `stack`, `competitions`, `certifications`, `work` from `content.js`; `NoteList` from `src/components/NoteList.jsx`.
- Produces: `<Credits />` rendered as `<section id="credits" data-era="night">`.

- [ ] **Step 1: Scenes**

`PlotTwist.jsx`: port lines 501-510 with `pin={false}`.
The twist text is `quotes.twist.text` with "65%" wrapped in `<s>`: split on `"65%"` and render `before<s>65%</s>after`, then append "." only if the quote does not already end with punctuation.
The duo: `teaching.role` + ", IIT" with "Since " + `teaching.since`, subjects line from `teaching.subjects[0]` ("Applied AI") plus "and a seat on the viva panel." only if `teaching.points` mentions viva (check with grep; else use `teaching.points[0]`); the AWS cell uses the `Sep 2025` journey entry: "AWS Community Day 🏆" and `quotes.awsQuiz.text`.

`Now.jsx`: port lines 513-525 with `pin={false}`.
Bind: portrait from `src/assets/images/portrait.jpg` with `data-shutter`, alt `Portrait of ${person.name}`; heading "Leading a team. Lecturing. Building on the side." (framing of the `Now` entry); quote `quotes.gaps.text` with the first letter capitalised in render; primary button "Follow on LinkedIn" to the LinkedIn entry in `socials`; links GitHub (`person.github`), Notes (`/notes`), Email (`mailto:${person.email}`), CV (`person.resume`).

- [ ] **Step 2: Credits**

```jsx
// src/film/Credits.jsx
import { person, socials, stack, work } from "../content.js";
import { quotes } from "./script.js";
import NoteList from "../components/NoteList.jsx";

const linkedin = socials.find((s) => s.name === "LinkedIn");
const companies = [...new Set(work.filter((w) => !w.period.endsWith("Present")).map((w) => w.company))].filter((c) => c !== "Contract");
const featuring = stack.flatMap((g) => g.tools.slice(0, 3));

export default function Credits() {
  return (
    <section id="credits" className="credits" data-era="night" aria-labelledby="credits-title">
      <h2 id="credits-title" className="kicker">Credits</h2>
      <dl>
        <div><dt>Written by</dt><dd>{person.name}</dd></div>
        <div><dt>Starring</dt><dd>{work.filter((w) => w.period.endsWith("Present")).map((w) => `${w.role}, ${w.lane ?? w.company}`).join(" · ")}</dd></div>
        <div><dt>Previously at</dt><dd>{companies.join(" · ")}</dd></div>
        <div><dt>Featuring</dt><dd>{featuring.join(" · ")}</dd></div>
        <div><dt>Filmed in</dt><dd>{person.city}, Sri Lanka</dd></div>
        <div><dt>Running time</dt><dd>2019 - still going</dd></div>
      </dl>
      <div className="credits__notes">
        <p className="kicker">Latest notes</p>
        <NoteList limit={3} />
      </div>
      <p className="credits__contact">
        <a className="credits__mail" href={`mailto:${person.email}`}>{person.email}</a>
      </p>
      <p className="links">
        <a href={linkedin.link}>LinkedIn</a>
        <a href={person.github}>GitHub</a>
        <a href={person.resume}>CV</a>
        <a href="/archive">The full archive</a>
      </p>
      <p className="fin" aria-hidden="true">Fin.</p>
      <p className="kicker">“{quotes.longWay.text}”</p>
    </section>
  );
}
```

Restyle `NoteList` rows for the night era in `film.css` (`.credits .notes` rows: title in Archivo `wdth` 88, date in mono muted, hairline separators).
External links (`linkedin.link`, `person.github`) get `target="_blank" rel="noreferrer"` and the `.links a::after { content: " ↗"; }` treatment; internal ones use `a[href^="/"]::after { content: " →"; }`.

- [ ] **Step 3: Styles and motion**

Port lines 223-245 into `film.css` (`.scene--plot-twist`, `.scene--now`, `.portrait`, `.now`, `.cta`, `.credits`, `.fin`) plus phone rules.
Add to `anySize` in `filmMotion.js`:

```js
  "plot-twist": (s) => {
    gsap.from(s.querySelector(".twist"), { opacity: 0.1, y: 60, scrollTrigger: { trigger: s, start: "top 75%", end: "top 20%", scrub: 0.5 } });
    gsap.fromTo(s.querySelector(".twist s"), { textDecorationColor: "transparent" }, { textDecorationColor: "#111111", scrollTrigger: { trigger: s, start: "top 30%", end: "top 5%", scrub: true } });
  },
  now: (s) => {
    gsap.fromTo(s.querySelector("[data-shutter]"), { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", ease: "none", scrollTrigger: { trigger: s, start: "top 85%", end: "top 25%", scrub: 0.5 } });
  },
```

and after the scene loop in the `MOTION` branch:

```js
      const credits = root.querySelector("#credits");
      if (credits) gsap.from(credits.querySelectorAll("dl > div, .fin"), { opacity: 0, y: 40, stagger: 0.12, scrollTrigger: { trigger: credits, start: "top 80%", end: "bottom 90%", scrub: 0.5 } });
```

- [ ] **Step 4: Mount and verify**

Add `PlotTwist`, `Now` and `<Credits />` to `Home.jsx`.
`yarn test && yarn build`, restart the server.
At 1440 scroll the whole film in the Playwright MCP browser; check the top bar slate counts 00 to 08 in order and recolours per era, and the progress line reaches the right edge at the bottom.
Open `/#credits`: lands on the credits.
At 390 take a full-page screenshot and read it.

- [ ] **Step 5: Commit**

```bash
git add -A src
git commit -m "feat: plot twist, now and closing credits"
```

---

### Task 12: Archive page

**Files:**
- Create: `src/pages/Archive.jsx`, `src/pages/archive.css`
- Modify: `src/App.jsx`, `src/components/Ledger.jsx` (styles move into `archive.css`)

**Interfaces:**
- Consumes: `work`, `volunteering`, `projects`, `stack`, `degree`, `competitions`, `certifications`, `learningProfiles`, `teaching`, `person` from `content.js`; `Ledger`, `Logo`; `usePageMotion`; `useDocumentTitle`.
- Produces: route `/archive`.

- [ ] **Step 1: Route**

In `src/App.jsx` add `import Archive from "./pages/Archive.jsx";` and `[/^\/archive$/, Archive],` to `routes`.

- [ ] **Step 2: Page**

`Archive.jsx` renders `<div ref={root} data-era="paper" className="archive">` with `useDocumentTitle("Archive")` and `usePageMotion(root)`, and these sections, each `<section className="archive__section" aria-labelledby=...>` with a `.kicker` index and an `h2.big`:
1. "Work": `<Ledger items={work} />`, then "Alongside" `<Ledger items={volunteering} />`.
2. "Projects": the `<ol className="projects">` markup from the old home page (`git show 46399df:src/pages/Home.jsx`) with `Logo` tool chips, plus the "100+ more on GitHub" link.
3. "Stack": the stack groups markup from the old Home.
4. "Recognition": degree block (average with `data-count`), competitions table, certifications table, learning profiles.
5. "Teaching & talks": subjects, points, events table.
Reuse the old Home markup verbatim where it exists (`git show 46399df:src/pages/Home.jsx`), replacing class names only where the new CSS needs them.

- [ ] **Step 3: Styles**

`archive.css`: paper era, 12-column grid like the old `.section` (labels in columns 1-3, content in 4-12, collapsing to one column under 900px), hairlines `1px solid color-mix(in srgb, var(--fg) 18%, transparent)`, section titles `.big` at `clamp(40px, 5vw, 80px)`, tables in Plex Mono for years and Archivo for titles, `Ledger` row and panel styles ported from the old `styles.css` (`git show 46399df:src/styles.css`, the `.ledger` block and `.facts--compact`, `.ledger__tools`) with colours mapped to `--fg`, `--muted`, `--accent`.
Metric values in `.facts--compact dd` use `var(--accent)` (#D6261C on paper passes AA for large text).

- [ ] **Step 4: Verify**

`yarn build`, restart the server, screenshot `/archive` at 1440 and 390 full page, read both.
Open a work row; metrics, bullets and tool chips render; `Escape` is not required.
`yarn test` passes.

- [ ] **Step 5: Commit**

```bash
git add -A src
git commit -m "feat: archive page with the full reference material"
```

---

### Task 13: Journey page in chapters

**Files:**
- Modify: `src/pages/Journey.jsx`
- Create: `src/pages/journey.css`

**Interfaces:**
- Consumes: `journey` (`src/journey.js`), `chapters` (Task 8).

- [ ] **Step 1: Group entries**

```js
// in Journey.jsx
import { chapters } from "../film/script.js";

function groupByChapter(entries) {
  const starts = chapters.map((c) => entries.findIndex((e) => e.date === c.from));
  return chapters.map((c, i) => ({ ...c, entries: entries.slice(starts[i], starts[i + 1] ?? entries.length) }));
}
```

- [ ] **Step 2: Render**

Each chapter is a `<section data-era={c.era} className="chapter">` with a sticky `.kicker` header (`Chapter n · title`, years from first to last entry date) and its entries as the existing list items (date in mono, first paragraph, `<details className="journey__more"><summary>Read more</summary>...rest</details>`).
Keep the page intro (`journey.title`, `journey.description`) in the night era at the top.
Drop the old progress bar and journey line (the top bar progress line covers it).

- [ ] **Step 3: Styles**

`journey.css`: chapters full-bleed with their era; entries in a two-column grid (date column 180px, text max 64ch) collapsing to one column under 900px; `summary` styled as a mono "Read more +" toggle with the accent colour; entry dates in `var(--accent)`.

- [ ] **Step 4: Verify**

`yarn test` (chapter test still passes), `yarn build`, screenshot `/journey` at 1440 and 390 full page; read; open a "Read more" and confirm the page height grows without overlapping.

- [ ] **Step 5: Commit**

```bash
git add -A src
git commit -m "feat: journey page in era chapters"
```

---

### Task 14: Notes and case studies

**Files:**
- Modify: `src/pages/NotesIndex.jsx`, `src/pages/Note.jsx`, `src/components/NoteList.jsx`, `src/pages/CaseStudy.jsx`, `src/pages/NotFound.jsx`
- Create: `src/pages/notes.css`, `src/pages/case.css`
- Delete: `src/components/ForecastFigure.jsx`

**Interfaces:**
- Consumes: `Forecaster`, `Segmenter`, `CallSimulator`.

- [ ] **Step 1: Notes**

Both note pages render inside `data-era="paper"`.
`NotesIndex`: big title "Notes", intro line, `NoteList` without limit.
`Note`: article column `max-width: 68ch` centred-left on the 12-column grid (column 4 / span 7 on desktop), Archivo 19px/1.65 body, `h1.big` title, date and "First published on LinkedIn" link in mono, next-note link at the end.
`notes.css` holds both plus `NoteList` row styles for paper (shared with credits via the same class names, colours from era variables).

- [ ] **Step 2: Case studies**

`CaseStudy.jsx`: `data-era` per case: `ai-contact-center` night, `ml-in-production` paper, `lts-network` forest (a map in the component).
Replace `<ForecastFigure />` with the matching instrument from a map:

```js
const INSTRUMENTS = { "ai-contact-center": CallSimulator, "ml-in-production": Segmenter, "lts-network": Forecaster };
```

Render it after the outcomes, for every case (not only `figure: true`).
Keep `SystemMap`, outcomes (`data-count`), sections, links, stack chips and the next-case link; restyle in `case.css` with the film type scale (`.big` title, `.kicker` labels, outcomes as `.facts` with Archivo `wdth` 62 numbers in `var(--accent)`).
Delete `src/components/ForecastFigure.jsx` and remove `figure: true` handling.

- [ ] **Step 3: 404**

`NotFound.jsx`: `data-era="night"` full-viewport `.stage` with kicker "Scene missing", `h1.mega` "404", a line "This page fell outside the film." and a `.button` "Back to the film" to `/`.

- [ ] **Step 4: Verify**

`yarn test && yarn build`, restart the server; screenshot `/notes`, `/notes/no-time`, each `/work/<slug>` and `/nope` at 1440 and 390; read each.
On each case page, use its instrument once.

- [ ] **Step 5: Commit**

```bash
git add -A src
git commit -m "feat: notes, case studies with their instruments, and the 404 scene"
```

---

### Task 15: Housekeeping, share image and full verification

**Files:**
- Modify: `vercel.json`, `scripts/prerender-meta.mjs`, `public/llms.txt`, `scripts/og/og.html`, `scripts/og/favicon.svg`, `.tastemaker/style-lock.md`, `.tastemaker/decisions.log`
- Regenerate: `public/og.png`, `public/favicon.ico`, `public/favicon-32.png`, `public/apple-touch-icon.png`, `public/icon-512.png`

- [ ] **Step 1: Routes, redirects, meta**

`vercel.json` redirects become:

```json
[
  { "source": "/home", "destination": "/", "permanent": true },
  { "source": "/experience", "destination": "/archive", "permanent": true },
  { "source": "/education", "destination": "/archive", "permanent": true },
  { "source": "/projects", "destination": "/archive", "permanent": true },
  { "source": "/contact", "destination": "/#credits", "permanent": true }
]
```

In `scripts/prerender-meta.mjs` add a route `{ path: "/archive", title: "Archive | Ammar Raneez", description: "Every role, project, tool, award and certificate, in full." }` after `/journey`.
In `public/llms.txt` add `- [Archive](https://ammarraneez.vercel.app/archive): every role, project, tool, award and certificate.` and change the Home line to `- [Home](https://ammarraneez.vercel.app/): a scroll-driven film of the journey, with playable versions of the forecaster, segmentation and real-time call work.`

- [ ] **Step 2: Share image and icons**

Restyle `scripts/og/og.html` as an ink card: narrow Archivo "AMMAR RANEEZ." with the red full stop, kicker "Head of Engineering, SoftSora · IEEE published · Colombo", and a thin red progress line at the bottom.
Render:

```bash
npx -y playwright@1.64.0 screenshot --viewport-size=1200,630 --wait-for-timeout=1500 "file://$PWD/scripts/og/og.html" public/og.png
```

Change `scripts/og/favicon.svg` to an ink square with a narrow white "A" and a red full stop, then regenerate the PNGs with `rsvg-convert` at 32, 180 and 512 and the ICO from the 32px PNG the same way the existing icons were made.
Read `public/og.png` and the 180px icon to check them.

- [ ] **Step 3: Full verification (Review Focus)**

With `yarn build` served on 4321, in the Playwright MCP browser:
1. Resize: load `/` at 1440, scroll to the 99x scene, resize to 390, then back to 1440. Expected: no blank gap, `document.documentElement.scrollWidth <= innerWidth`, the top bar shows the scene in view.
2. Deep links: `/#credits` and `/#graduation` land on those sections.
3. Call simulator spam: covered in Task 10; re-run once on `/work/ai-contact-center`.
4. Keyboard: from the top of `/`, Tab to every instrument control; operate each with Enter/Space and arrow keys; the focus ring is visible on night, paper and forest backgrounds (screenshot each).
5. Reduced motion: `emulateMedia({ reducedMotion: "reduce" })`, reload `/`; expected no pinned sections (`ScrollTrigger.getAll().filter((t) => t.pin).length === 0`), 89.3% visible, labeling bar collapsed, all pipeline nodes lit, 65% struck through, instruments idle.
6. Console: zero errors on every route.
Then:

```bash
python3 ~/.claude/skills/tastemaker/scripts/anti_slop_scan.py src
python3 ~/.claude/skills/tastemaker/scripts/audit_motion.py src
python3 ~/.claude/skills/tastemaker/scripts/check_contrast.py --matrix text=#F2F2EF bg=#0A0A0A muted=#9A9A96 accent=#FF3B30
python3 ~/.claude/skills/tastemaker/scripts/check_contrast.py --matrix text=#111111 bg=#F2F2EF muted=#5E5E5A accent=#D6261C
python3 ~/.claude/skills/tastemaker/scripts/check_contrast.py --matrix text=#E9F2EC bg=#0E3B2E muted=#9FC2B2 accent=#B8F2D3
python3 ~/.claude/skills/tastemaker/scripts/check_contrast.py --matrix text=#141414 bg=#E9B824 muted=#4A3D0E
python3 ~/.claude/skills/tastemaker/scripts/check_contrast.py --matrix text=#111111 bg=#FF3B30 muted=#3B0F0C
```

Expected: no HIGH findings; every text pairing used passes AA.
Run Lighthouse (chrome-devtools MCP `lighthouse_audit`) on `/` and `/archive` with mobile emulation; expected Accessibility 100, SEO 100, LCP under 2.5s; fix what falls short.

- [ ] **Step 4: Style lock**

Rewrite `.tastemaker/style-lock.md` for the film system (eras table, red pen, type, instrument screen, top bar, motion rules, phone behaviour), one sentence per line.
Append to `.tastemaker/decisions.log` a resolved entry: dark lime editorial replaced by the film + instruments direction on 2026-10-13, chosen from four prototypes.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: archive routes and redirects, new share image and icons, film style lock"
```

- [ ] **Step 6: Hand over**

Report to Ammar with screenshots of the film at 1440 and 390, the archive, and one case study; ask for approval to push `master` (which deploys production).
Do not push without that approval.
