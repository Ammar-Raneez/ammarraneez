import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MOTION = "(prefers-reduced-motion: no-preference)";
export const DESKTOP = "(min-width: 900px)";

// Fonts change line heights, and opening rows or "Read more" changes the page height below
// them, so every trigger is re-measured after those.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
document.addEventListener("transitionend", (e) => e.propertyName === "grid-template-rows" && ScrollTrigger.refresh());
document.addEventListener("toggle", () => ScrollTrigger.refresh(), true);

// Content is visible by default; these only add motion, so a failed script leaves a readable page.
function reveals(root) {
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
