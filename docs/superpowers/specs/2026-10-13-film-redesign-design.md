# Film redesign: design spec

Date: 2026-10-13.
Status: approved in conversation, awaiting review of this written spec.

## Goal

Replace the current dark + acid-lime editorial site with a scroll-driven film of Ammar's journey that has playable versions of his real work built into it.
The primary audience is peers and the tech community (personal brand).
Success means visitors remember him, read his notes, and follow him on LinkedIn.
The site should feel exciting and fun while showing the professionalism of what he has learned and built.

## Origin

Four throwaway prototypes were built and compared.
Ammar chose to merge concept 3 ("Cinematic story") with concept 1 ("Playable work").
Both prototypes are kept for reference in `docs/superpowers/prototypes/3-story.html` and `docs/superpowers/prototypes/1-playable.html`.
Their image paths are relative to the original scratch folder, so they render without images from `docs/`.

## Decisions

- Home is the film. Reference material lives in closing credits plus a new `/archive` page.
- Concept 3's look leads: era palettes, narrow Archivo, the red-pen thread.
  Concept 1's playables become dark "instrument screens" inside scenes.
- Phones get one stacked scroll with lighter motion and no pinned sections.
- The light/dark theme toggle is removed, because each era sets its own colours.
- Build inside the existing Vite + React repo with no new dependencies.
- Work happens on `master`, committed locally in stages, and is pushed only when the whole redesign is done and Ammar approves.

## Pages

| Route | Purpose |
|---|---|
| `/` | The film: title card, eight scenes, closing credits. |
| `/archive` | New. Full reference: work history with metrics and tools, projects, stack, all certifications, awards, teaching, learning profiles. |
| `/journey` | All journey entries, laid out per era with the film's palettes, keeping "Read more". |
| `/notes`, `/notes/:slug` | Reading pages in the paper era. |
| `/work/:slug` | Case studies, each featuring its matching playable. |
| 404 | "Scene missing" card in the film's language, served through `build/404.html` as today. |

Kept unchanged: content files as the single source of truth, per-route meta prerender, sitemap, `public/` assets (CV, `ads.txt`, `llms.txt`, icons, share image), AdSense script.
Redirects change: `/experience`, `/projects` and `/education` point to `/archive`; `/contact` points to `/#credits`; `/home` stays `/`.

Removed: lime design and its styles, `Masthead`, `ForecastFigure` (its maths moves into `forecast.js`), the uncommitted `Timeline` component, the theme toggle and its pre-paint script.
Kept from the uncommitted Work stage: the `metrics` and `lane` fields in `content.js`, the merged Niftron bullet, the ScrollTrigger refresh after layout changes, and the tool detection used for role tool chips (moved to wherever the archive needs it).

## Visual system

### Era palettes

Every scene and page declares an era with `data-era`, which sets `--bg`, `--fg`, `--accent` and `--muted`.

| Era | Background | Text | Accent | Muted | Used for |
|---|---|---|---|---|---|
| `night` | `#0A0A0A` | `#F2F2EF` | `#FF3B30` | `#9A9A96` | Title, cold open, contact center, now, credits, 404 |
| `paper` | `#F2F2EF` | `#111111` | `#D6261C` | `#5E5E5A` | Learning fast, 99x, notes, archive |
| `forest` | `#0E3B2E` | `#E9F2EC` | `#B8F2D3` | `#9FC2B2` | Research |
| `gold` | `#E9B824` | `#141414` | `#141414` | `#4A3D0E` | Graduation |
| `red` | `#FF3B30` | `#111111` | `#111111` | `#3B0F0C` | Plot twist |

The paper era also has a marker highlight, `#FFE14D`, used behind ink text only.
All text pairings must pass 4.5:1 in `check_contrast.py --matrix` before the style lock is written.

### Red pen

One recurring mark ties the site together: it circles the 65%, strikes it in the plot twist, underlines links, and draws instrument traces.
It is always the era's accent colour.

### Type

- Display: Archivo variable at width 62 and weight 800 for scene type.
- Body: Archivo at normal width, weight 400 to 500.
- Labels, top bar, readouts, credits: IBM Plex Mono 400 and 500, uppercase with 0.04em tracking for labels.
- Fonts load from Google Fonts with `display=swap` and a narrow system fallback.

### Shape

Square corners, 1px hairlines, no shadows.

### Instrument screen

A shared dark panel (`Screen.jsx`): ink background, hairline border, a Plex Mono readout row along the top, an honesty label ("Illustration" or "Simulated") in a corner, and a controls slot below.
The trace colour follows the era (mint in forest, red elsewhere).

### Top bar

On the film it is a slate fixed to the top: `AMMAR RANEEZ · SC 03 / 08 RESEARCH · 2022 - 2023`, recoloured to the current era.
A red progress line runs along the bottom of the viewport.
On other pages the same bar shows navigation (Film, Archive, Journey, Notes) and the Colombo clock.

## Film scenes

All facts come from the content files at render time.
Scene titles are framing copy; any quoted text must be Ammar's own words from `journey.js` or `notes.js`.

| # | Scene | Era | Content | Source |
|---|---|---|---|---|
| 0 | Title | night | Narrow name with a red full stop, role line, clickable scene index | `person` |
| 1 | Cold open | night | "Chemistry, Physics & Math" lifts away, red 65% grows in, red pen circles it, the "giving up" line | journey 2019 entries |
| 2 | Learning fast | paper | Horizontal card reel on desktop, column on phones: first HTML, Java, Denuwara Manike app, 100+ certificates, Coderally, ONCO and E-Ophthalmologist, first roles with logos | `journey`, `competitions`, `work` |
| 3 | Research | forest | Big "LTS", IEEE CCWC 2023, Best Final Year Project, NBQSA merit, paper and code links, then the Forecaster | `research`, `degree`, `competitions` |
| 4 | Graduation | gold | 89.3% counts up inside a rotating text ring, honours list | `degree`, journey |
| 5 | 99x | paper | Trainee, Software Engineer, Senior steps light in turn, 40+ hours labeling bar collapses to under 2, then the Segmenter | `work` metrics |
| 6 | Contact center | night | Listen, Understand, Respond light up, the long-nights line, "Head of Engineering since Mar 2026" stamp, then the Call simulator | `cases`, journey |
| 7 | Plot twist | red | "Remember the guy who scored 65%" with the strike drawn on scroll, IIT lecturing, AWS Community Day quiz win | journey, `teaching` |
| 8 | Now | night | Portrait shutter, current roles, "Follow on LinkedIn" as primary action | `person`, `socials` |
| - | Credits | night | Roles, "Featuring" the stack, awards, three latest notes, email, CV, socials, link to `/archive` | all content files |

Scenes pin on desktop only (min-width 961px) with scrubbed timelines.
Each playable sits after its scene's pinned section in normal flow, never inside a pin.

## Playables

Each playable is a self-contained component with an `era` prop, a pure logic module, and a text summary for screen readers.

### Forecaster (`Forecaster.jsx`, `forecast.js`)

A volatile series with a forecast band.
Controls: "Inject shock", "Calm it down", noise slider; clicking the screen also injects a shock.
Readouts: volatility, time constant τ, 80% band width, status.
Label: "Illustration, not the published model".
Used in scene 3 and on `/work/lts-network`.

### Call simulator (`CallSimulator.jsx`, `callSim.js`)

"Place a call" streams a sample caller line through Ingest (Kinesis Video Streams, Transcribe), Understand (Bedrock, embeddings, semantic similarity) and Deliver (WebSocket, Redis, live UI), each with a running millisecond counter.
A stacked bar fills against the 2,000 ms budget.
A Fuzzy / Semantic switch changes the agent's answer to illustrate the 30%+ relevance gain.
Labels: "Simulated" on timings, "Sample" on caller lines.
Used in scene 6 and on `/work/ai-contact-center`.

### Segmenter (`Segmenter.jsx`, `segment.js`)

A synthetic noisy micrograph beside the predicted mask, coloured hit, false and missed.
Controls: threshold and smoothing sliders, "New sample".
Readout: live IoU with a tick at 85%.
Label: "Illustration".
Used in scene 5 and on `/work/ml-in-production`.

### Shared behaviour

- Animation loops run on `requestAnimationFrame`, pause via IntersectionObserver when off screen, and stop on unmount.
- Canvas uses the device pixel ratio and redraws on resize.
- A static first frame is drawn before any animation.
- Under reduced motion, loops do not auto-run; the instruments respond only to input.
- All controls are native buttons and range inputs with labels, usable by touch and keyboard.

## Motion

- All scroll motion is scrubbed by ScrollTrigger inside `gsap.matchMedia`, never scroll-jacking or snapping.
- Pinned scene timelines are created first, in document order, because ScrollTrigger measures in creation order.
- `ScrollTrigger.refresh()` runs after fonts load and after layout-changing toggles.
- Reduced motion gets every final state with no pins.
- Initial hidden states are set only by GSAP, so content stays visible if scripts fail.

## Code structure

```
src/
  content.js, journey.js, notes.js, cases.js
  film/
    scenes/Title.jsx ... Now.jsx
    Credits.jsx
    filmMotion.js
  instruments/
    Screen.jsx
    Forecaster.jsx, forecast.js
    CallSimulator.jsx, callSim.js
    Segmenter.jsx, segment.js
  components/Hud.jsx, Footer.jsx, Logo.jsx, NoteList.jsx
  pages/Home.jsx, Archive.jsx, Journey.jsx, NotesIndex.jsx, Note.jsx, CaseStudy.jsx, NotFound.jsx
  styles/base.css
```

Each component keeps its styles in a CSS file next to it, imported by the component.
`styles/base.css` holds reset, tokens, eras, type and shared utilities.

## Data flow

Content files feed scene components, which pass slices of data to instruments.
The top bar tracks the scene in view with an IntersectionObserver on `section[data-era]` and reads `data-title` and `data-year`.

## Error handling

- Invalid content (unparseable period, missing scene field, em dash) throws during build and in tests, not in the visitor's browser silently.
- If canvas is unavailable, the instrument shows its text summary.
- If GSAP or fonts fail, the page remains fully readable.

## Testing

- `yarn test` runs `node --test` on pure modules and content checks:
  - forecast band widens after a shock and relaxes back,
  - IoU is correct on hand-made masks,
  - sample call timings stay under 2,000 ms,
  - every work period parses,
  - no em dash appears in any content file.
- End to end with Playwright at 1440 and 390, with motion and reduced motion: screenshot every scene, credits and archive; assert no horizontal scroll and no console errors; exercise each playable by click and touch.
- Lighthouse on the production build: Accessibility 100, SEO 100, LCP under 2.5s on mobile.
- Tastemaker `anti_slop_scan`, `audit_motion` and the contrast matrix before handover.

## SEO and housekeeping

- `scripts/prerender-meta.mjs` adds `/archive`.
- `vercel.json` redirects updated as listed above.
- `llms.txt` and the sitemap list the archive.
- `.tastemaker/style-lock.md` is rewritten for the film system, and the decision log records the change.
- The share image is regenerated in the new look.

## Out of scope

- Booking link (pending from Ammar).
- Light/dark toggle.
- A phone-specific tap-through stories layout.
- Analytics.
