import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fonts change line heights, so re-measure every trigger once they're in.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
// Opening a work row or a journey "Read more" changes the page height below it, which would
// leave every later trigger (sticky year, journey line) measured against the old layout.
document.addEventListener("transitionend", (e) => e.propertyName === "grid-template-rows" && ScrollTrigger.refresh());
document.addEventListener("toggle", () => ScrollTrigger.refresh(), true);

const MOTION = "(prefers-reduced-motion: no-preference)";
const DESKTOP = "(min-width: 961px)";
const MASTHEAD = 44;

// Scroll-linked motion follows the scrollbar (scrub) and never takes over scroll speed.
// Everything is visible without it: reduced-motion users and a failed script get the static page.
function entrances(root) {
  // Hero lines rise out of their own clip boxes; 130% clears ascenders above the tight line box.
  const lines = root.querySelectorAll("[data-line] > span");
  if (lines.length) gsap.from(lines, { yPercent: 130, duration: 1.1, ease: "expo.out", stagger: 0.08, delay: 0.1 });

  const intro = root.querySelectorAll("[data-intro]");
  if (intro.length) gsap.from(intro, { opacity: 0, y: 16, duration: 0.8, ease: "power3.out", stagger: 0.08, delay: 0.5 });

  root.querySelectorAll("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    });
  });
}

// 4. Figures count up from zero, keeping their prefix, suffix and decimals ("<2s", "89.3%").
function counters(root) {
  const restore = [];
  root.querySelectorAll("[data-count]").forEach((el) => {
    const text = el.textContent;
    const match = text.match(/-?\d+(\.\d+)?/);
    if (!match) return;
    const [number, fraction = ""] = match;
    const places = Math.max(0, fraction.length - 1);
    const [before, after] = [text.slice(0, match.index), text.slice(match.index + number.length)];
    const render = (value) => (el.textContent = before + value.toFixed(places) + after);
    const state = { value: 0 };
    el.setAttribute("aria-label", text);
    render(0);
    restore.push(() => (el.textContent = text));
    gsap.to(state, {
      value: parseFloat(number),
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => render(state.value),
    });
  });
  // Text isn't something gsap reverts, so put the real figures back on teardown.
  return () => restore.forEach((fn) => fn());
}

// 2. Words light up one by one as the statement scrolls through the viewport.
function wordReveal(root) {
  root.querySelectorAll("[data-words]").forEach((el) => {
    gsap.fromTo(
      el.querySelectorAll(".word"),
      { opacity: 0.18 },
      {
        opacity: 1,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: 0.4 },
      },
    );
  });
}

// 6. Portrait opens like a shutter while settling from a slight zoom.
function shutters(root) {
  root.querySelectorAll("[data-shutter]").forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: "inset(100% 0% 0% 0%)", scale: 1.12 },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 90%", end: "top 35%", scrub: 0.5 },
      },
    );
  });
}

// 1. Desktop hero: pinned while the headline lifts away and the chart takes the full width.
function heroHandOff(root) {
  const hero = root.querySelector(".hero");
  if (!hero) return;
  const figure = hero.querySelector(".hero__figure");
  const title = hero.querySelector(".hero__title");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: hero,
        start: `top ${MASTHEAD}px`,
        end: "+=90%",
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    })
    .to(hero.querySelectorAll("[data-line]"), { yPercent: -60, opacity: 0, stagger: 0.06, ease: "power2.in" }, 0)
    .to(hero.querySelector(".hero__aside"), { opacity: 0, x: 40, ease: "power2.in", duration: 0.5 }, 0)
    .to(figure, { width: "100%", ease: "power2.inOut", duration: 1 }, 0.15)
    // The canvas re-renders on resize, so growing it stays crisp (no transform scaling).
    .fromTo(
      figure,
      { "--chart-h": () => `${figure.querySelector("canvas").offsetHeight}px` },
      { "--chart-h": () => `${Math.round(window.innerHeight * 0.48)}px`, ease: "power2.inOut", duration: 1 },
      0.15,
    )
    .to(figure, { y: () => -(title.offsetHeight * 0.85), ease: "power2.inOut", duration: 1 }, 0.15);
}

// 3. Desktop work list: a sticky year tracks the role currently in view.
function yearTrack(root) {
  const display = root.querySelector("[data-year-display]");
  if (!display) return;
  const initial = display.textContent;
  const state = { year: Number(initial) };
  const setYear = (year) =>
    gsap.to(state, {
      year,
      duration: 0.6,
      ease: "power2.out",
      overwrite: true,
      onUpdate: () => (display.textContent = Math.round(state.year)),
    });

  root.querySelectorAll("[data-year]").forEach((row) => {
    ScrollTrigger.create({
      trigger: row,
      start: "top 55%",
      end: "bottom 55%",
      onToggle: (self) => {
        row.classList.toggle("is-current", self.isActive);
        if (self.isActive) setYear(Number(row.dataset.year));
      },
    });
  });
  return () => {
    display.textContent = initial;
    root.querySelectorAll(".is-current").forEach((el) => el.classList.remove("is-current"));
  };
}

// 5. Desktop case study: the system map holds while each stage lights up in order.
function systemBuild(root) {
  const system = root.querySelector(".system");
  if (!system) return;
  const stages = system.querySelectorAll(".system__stage");
  const arrows = system.querySelectorAll(".system__arrow");
  const platform = system.querySelector(".system__platform");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: system,
      start: "center 55%",
      end: "+=120%",
      pin: true,
      scrub: 0.6,
    },
  });
  tl.set([stages, platform], { opacity: 0.15 }).set(arrows, { scaleX: 0 });
  stages.forEach((stage, i) => {
    tl.to(stage, { opacity: 1, duration: 1 });
    if (arrows[i]) tl.to(arrows[i], { scaleX: 1, duration: 0.6 });
  });
  tl.to(platform, { opacity: 1, duration: 1 });
}

// 7. Desktop journey: a line draws down the timeline as you read.
function journeyLine(root) {
  const line = root.querySelector(".journey__line");
  if (!line) return;
  gsap.fromTo(
    line,
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: "none",
      scrollTrigger: { trigger: line.parentElement, start: "top 60%", end: "bottom 60%", scrub: 0.3 },
    },
  );
}

export function usePageMotion(rootRef, extra) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    const mm = gsap.matchMedia();
    // Pinned sections go first: ScrollTrigger measures in creation order, and a pin near
    // the top shifts every trigger below it.
    mm.add(`${MOTION} and ${DESKTOP}`, () => {
      heroHandOff(root);
      systemBuild(root);
      journeyLine(root);
      return yearTrack(root);
    });
    mm.add(MOTION, () => {
      entrances(root);
      wordReveal(root);
      shutters(root);
      extra?.(root);
      return counters(root);
    });
    return () => mm.revert();
  }, [rootRef, extra]);
}

export { gsap };
