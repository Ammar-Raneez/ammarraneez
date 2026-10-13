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
    tl.from(s.querySelector(".night-foot .quote"), { opacity: 0, y: 30, duration: 0.3 }, 0.9)
      .from(s.querySelector(".stamp"), { scale: 2.4, opacity: 0, rotation: -14, ease: "back.out(2)", duration: 0.3 }, 1.25)
      .to({}, { duration: 0.2 });
    return () => light(nodes.length - 1);
  },
};

// Entrances for every screen size with motion allowed.
const anySize = {
  title: (s) => {
    gsap.from(s.querySelectorAll(".line > span"), { yPercent: 110, duration: 1.1, ease: "expo.out", stagger: 0.08, delay: 0.1 });
    gsap.from(s.querySelectorAll(".slate, .scroll-cue"), { opacity: 0, y: 12, duration: 0.8, delay: 0.6, stagger: 0.1 });
  },
  "plot-twist": (s) => {
    gsap.from(s.querySelector(".twist"), { y: 80, scrollTrigger: { trigger: s, start: "top 75%", end: "top 20%", scrub: 0.5 } });
    // The red pen strikes the 65% as you read.
    gsap.fromTo(
      s.querySelector(".twist s"),
      { textDecorationColor: "rgba(17, 17, 17, 0)" },
      { textDecorationColor: "rgba(17, 17, 17, 1)", scrollTrigger: { trigger: s, start: "top 30%", end: "top 5%", scrub: true } },
    );
  },
  now: (s) => {
    gsap.fromTo(
      s.querySelector("[data-shutter]"),
      { clipPath: "inset(100% 0% 0% 0%)", scale: 1.1 },
      { clipPath: "inset(0% 0% 0% 0%)", scale: 1, ease: "none", scrollTrigger: { trigger: s, start: "top 85%", end: "top 25%", scrub: 0.5 } },
    );
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
      const credits = root.querySelector("#credits");
      if (credits) {
        gsap.from(credits.querySelectorAll(".credits__list > div, .fin"), {
          opacity: 0,
          y: 40,
          stagger: 0.12,
          scrollTrigger: { trigger: credits, start: "top 80%", end: "center 60%", scrub: 0.5 },
        });
      }
      return () => cleanups.forEach((fn) => fn());
    });
    // Crossing the desktop breakpoint adds or removes pins, which changes every scroll offset.
    // Keep the reader on the scene they were watching instead of wherever the old offset lands.
    let current = null;
    let raf = 0;
    const track = () => {
      raf = 0;
      const line = innerHeight * 0.4;
      const s = scenes.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= line && r.bottom > line;
      });
      if (s) current = s.id;
    };
    const onScroll = () => (raf ||= requestAnimationFrame(track));
    addEventListener("scroll", onScroll, { passive: true });
    const wide = matchMedia(DESKTOP);
    const keepPlace = () => {
      const keep = current;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          const el = keep && document.getElementById(keep);
          if (el) scrollTo(0, el.getBoundingClientRect().top + scrollY);
        }),
      );
    };
    wide.addEventListener("change", keepPlace);

    // /#credits (the /contact redirect) and /#research etc. land correctly once pins exist.
    const jump = () => {
      // getElementById, not querySelector: "#99x" is not a valid CSS selector.
      const target = location.hash.length > 1 && document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) scrollTo(0, target.getBoundingClientRect().top + scrollY);
    };
    document.fonts?.ready.then(() => {
      ScrollTrigger.refresh();
      jump();
    });
    return () => {
      removeEventListener("scroll", onScroll);
      wide.removeEventListener("change", keepPlace);
      cancelAnimationFrame(raf);
      mm.revert();
    };
  }, [rootRef]);
}

export { ScrollTrigger };
