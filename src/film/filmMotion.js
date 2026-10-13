import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger, MOTION, DESKTOP } from "../motion.js";

// Scrub only: the reader's scroll speed always drives the film, nothing is hijacked or snapped.
const pin = (stage, length, scrub = 0.6) =>
  gsap.timeline({ scrollTrigger: { trigger: stage, start: "top top", end: `+=${length}%`, pin: true, scrub } });

// Desktop scene builders, keyed by scene id. They run in document order because ScrollTrigger
// measures pins in creation order. Each may return a cleanup.
const desktop = {
  "cold-open": (s) => {
    pin(s.querySelector("[data-pin]"), 220)
      .to(s.querySelectorAll(".cold__intro .line > span"), { yPercent: -110, stagger: 0.05, ease: "power2.in", duration: 0.5 })
      .to(s.querySelector(".cold__intro .kicker"), { opacity: 0, duration: 0.2 }, 0)
      .from(s.querySelector(".cold__mark .kicker"), { opacity: 0, y: 20, duration: 0.2 }, 0.45)
      .from(s.querySelector(".score"), { scale: 0.18, opacity: 0, transformOrigin: "left bottom", ease: "power3.out", duration: 0.7 }, 0.45)
      .fromTo(s.querySelector(".pen path"), { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: "power1.inOut", duration: 0.5 }, 1.05)
      .from(s.querySelector(".cold__mark .quote"), { opacity: 0, y: 30, duration: 0.3 }, 1.3)
      .to({}, { duration: 0.3 });
  },
  "learning-fast": (s) => {
    const reel = s.querySelector(".reel");
    const stage = s.querySelector("[data-pin]");
    const dist = () => reel.scrollWidth - innerWidth + parseFloat(getComputedStyle(stage).paddingLeft) * 2;
    // Only this timeline re-measures on refresh: its distance depends on the reel's width.
    gsap
      .timeline({ scrollTrigger: { trigger: stage, start: "top top", end: () => `+=${dist()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true } })
      .to(reel, { x: () => -dist(), ease: "none" });
  },
};

// Entrances for every screen size with motion allowed.
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
