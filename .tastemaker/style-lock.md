# Style lock: Ammar Raneez portfolio

Established: 2026-10-13 (third direction).
Source: chosen from four prototypes; merges concept 3 (cinematic story) with concept 1 (playable work).
Mood: cinematic, editorial, technical.
The home page is a scroll-driven film of the journey with playable instruments inside it.

## Eras

Every scene and page declares `data-era`, which sets `--bg`, `--fg`, `--accent`, `--muted` and `--trace`.

| Era | Background | Text | Accent | Muted | Used for |
|---|---|---|---|---|---|
| night | `#0A0A0A` | `#F2F2EF` | `#FF3B30` | `#9A9A96` | Title, cold open, contact center, now, credits, journey intro, 404 |
| paper | `#F2F2EF` | `#111111` | `#D6261C` | `#5E5E5A` | Learning fast, 99x, archive, notes, ML case study |
| forest | `#0E3B2E` | `#E9F2EC` | `#B8F2D3` | `#9FC2B2` | Research, LTS case study |
| gold | `#E9B824` | `#141414` | `#141414` | `#4A3D0E` | Graduation |
| red | `#FF3B30` | `#111111` | `#111111` | `#3B0F0C` | Plot twist |

The paper era also has a marker highlight `#FFE14D`, behind ink text only.

## Color contract

Checked with `check_contrast.py --matrix` on 2026-10-13.
- Text-safe in every era: text/bg, muted/bg, and accent/bg where an accent is used as text.
- Instrument screens (`#141413`): text, muted and trace (red `#FF3B30` or mint `#B8F2D3`) all pass AA.
- Decorative only: text next to accent, muted next to accent, rules at 18% of the text colour.

## The red pen

One recurring mark: it circles the 65%, strikes it in the plot twist, underlines links and draws instrument traces.
It is always the era's accent.

## Typography

- Display: Archivo variable, width 62 and weight 800 for scene type; width 70 to 75 for headings.
- Body: Archivo at width 100, 17 to 19px.
- Labels, top bar, readouts, credits: IBM Plex Mono 500, uppercase, 0.06 to 0.08em tracking.
- No serif anywhere; nothing from the earlier Geist and lime look.

## Shape

Square corners, 1px hairlines, 2px rules on top of lists and strips, no shadows.

## Instruments

Dark screen panels with a mono readout row, an honesty label ("Illustration", "Simulated", "Sample") and controls below.
Forecaster in Research and the LTS case study, segmenter in 99x and the ML case study, call simulator in the contact center scene and its case study.
Loops run only on screen and never under reduced motion.

## Motion

- GSAP + ScrollTrigger inside `gsap.matchMedia`; scrub only, never scroll-jacking or snapping.
- Scenes hold (pin) only on desktop (min-width 900px) with motion allowed; phones get one stacked scroll.
- Pinned timelines are created first, in document order.
- Held scenes must fit one screen: type uses `min(vw, vh)` sizes.
- Reduced motion shows every final state.
- Crossing the breakpoint keeps the reader on the same scene.

## Layout

- Top bar: a film slate on the home page, plain navigation elsewhere, plus a red progress line.
- Archive, journey chapters and case studies: labels in a left column, content in the right, one column on phones.

## Assets

- Portrait: `src/assets/images/portrait.jpg`, shown grayscale.
- Brand marks: Simple Icons through a CSS mask, tinted with the text colour.
- Share image and icons: rendered from `scripts/og/og.html` and `scripts/og/icon.html`.
