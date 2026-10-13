# Style lock: Ammar Raneez portfolio

Established: 2026-10-13, revised the same day. Source: reference board (viewed) for structure; palette hand-picked and verified with `check_contrast.py --matrix`.
Mood: technical / live-data, dark-first. (Revised 2026-10-13: the first pass, paper + Bodoni + vermilion, was rejected for reading like Anthropic/Claude's own brand.)

## Palette (dark, default)
- Background `#0B0C0B`, Surface `#151714`, Text `#ECEEE8`, Muted `#8F948A`, Border `#2A2D28`, Accent `#C6F432` (acid lime), On-accent `#0B0C0B`.
- Lime marks what is live or primary: the chart forecast and "now" dot, section index numbers, the hero's accented word, primary buttons, big figures.

## Palette (light, via toggle)
- Background `#F3F4F1` (cool, not cream), Surface `#E8EAE5`, Text `#0E0F0D`, Muted `#585D53`, Border `#D2D5CD`, Accent `#3F5C00` (deep lime, readable as text), On-accent `#FFFFFF`.
- Dark mode: runtime toggle, both modes ship. Dark is the default regardless of system setting; a saved toggle choice wins.

## Color contract
Both modes, from `check_contrast.py --matrix`:
- Text-safe: text/bg, text/surface, muted/bg, muted/surface, accent/bg, accent/surface, accent/on-accent, accent/border.
- Decorative only: text next to accent, muted next to accent, bg/border, surface/border, bg/surface.

## Typography
- Display: Geist 500 with tight tracking (-0.035em to -0.055em). No serif anywhere.
- Body: Geist 400/500.
- Labels, dates, data: Geist Mono 400/500, uppercase, 0.04em tracking. Never for paragraphs.

## Shape language
- Corner radius: 0 everywhere.
- Shadows: none. Separation is 1px hairlines; ink-colour rule on top of each list.

## Density & spacing
- Tokens: 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Sections: 96px top / 128px bottom on desktop, 64 / 96 below 960px.
- 12-column grid, gutter clamp(16px, 3vw, 40px); section labels in columns 1-3, content in 4-12.

## Motion
- GSAP + ScrollTrigger in `src/motion.js`, all inside `gsap.matchMedia`. Reduced motion gets the fully static page; held (pinned) sections are desktop only (min-width 961px).
- Scroll-linked effects use `scrub` and never take over scroll speed or snap.
- Desktop: hero holds while the headline lifts and the chart widens to full width and grows taller; the system map in case studies holds while stages and arrows light up in order; a sticky year tracks the work row in view; a lime line draws down the journey.
- Everywhere: word-by-word statement reveal, figures count up (`data-count`), portrait shutter reveal (`data-shutter`), fade-up entrances (`data-reveal`).
- Pinned triggers are created first because ScrollTrigger measures in creation order.
- UI transitions 160-280ms, `cubic-bezier(0.22, 1, 0.36, 1)`, hover gated by `(hover: hover) and (pointer: fine)`.

## Assets
- Portrait: `src/assets/images/portrait.jpg` (from OneDrive "Professional New.png", 880px JPEG), natural colour, 4:5 crop with a hairline offset frame.
- Brand marks: Simple Icons via Iconify, monochrome, tinted with currentColor through CSS mask (`src/assets/logos`).
- Company logos: existing PNGs, grayscale, shown only inside expanded work rows.
- No illustrations: the forecast figure is the only bespoke visual. unDraw library not used.
