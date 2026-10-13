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

// Runs `update` at most once per frame on scroll and resize.
function useOnScroll(update, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const run = () => {
      raf = 0;
      update();
    };
    const schedule = () => (raf ||= requestAnimationFrame(run));
    run();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    return () => {
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      cancelAnimationFrame(raf);
    };
  }, [update, enabled]);
}

// The film slate follows whichever scene crosses 40% of the viewport and takes its era.
function useScene(enabled) {
  const [scene, setScene] = useState(null);
  const update = useRef(() => {
    const line = innerHeight * 0.4;
    const scenes = [...document.querySelectorAll("section[data-scene]")];
    // Past the last scene (the credits), the slate stays on the last scene, not back at the title.
    const el =
      scenes.find((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= line && r.bottom > line;
      }) ?? (scenes.length && scenes[scenes.length - 1].getBoundingClientRect().bottom <= line ? scenes.at(-1) : scenes[0]);
    if (!el) return;
    const next = { num: el.dataset.scene, title: el.dataset.title, year: el.dataset.year, era: el.dataset.era };
    setScene((prev) => (prev?.num === next.num ? prev : next));
  }).current;
  useOnScroll(update, enabled);
  return scene;
}

export default function Hud({ film, path }) {
  const scene = useScene(film);
  const clock = useClock();
  const bar = useRef(null);
  const progress = useRef(() => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
  }).current;
  useOnScroll(progress);

  return (
    <>
      <header className="hud" data-era={film ? (scene?.era ?? "night") : "night"}>
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
              <a
                key={href}
                href={href}
                aria-current={path === href || (href !== "/" && path.startsWith(href)) ? "page" : undefined}
              >
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
