import { useEffect, useState } from "react";
import { person } from "../content.js";

const links = [
  ["Work", "work"],
  ["Research", "research"],
  ["Projects", "projects"],
  ["Stack", "stack"],
  ["Recognition", "recognition"],
  ["Contact", "contact"],
];

const clock = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: person.timeZone,
});

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode: the choice just won't persist.
    }
    setTheme(next);
  };
  return [theme, toggle];
}

export default function Masthead({ path }) {
  const [theme, toggleTheme] = useTheme();
  const [now, setNow] = useState(() => clock.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setNow(clock.format(new Date())), 15_000);
    return () => clearInterval(id);
  }, []);

  // Section anchors live on the home page.
  const base = path === "/" ? "" : "/";
  const current = (prefix) => (path === prefix || path.startsWith(`${prefix}/`) ? "page" : undefined);

  return (
    <header className="masthead">
      <a className="masthead__name" href="/">
        {person.name}
      </a>
      <nav className="masthead__nav" aria-label="Sections">
        {links.map(([label, id]) => (
          <a key={id} href={`${base}#${id}`}>
            {label}
          </a>
        ))}
        <a href="/notes" aria-current={current("/notes")}>
          Notes
        </a>
        <a href="/journey" aria-current={current("/journey")}>
          Journey
        </a>
      </nav>
      <div className="masthead__meta">
        <span className="masthead__clock">
          {person.city} <time>{now}</time>
        </span>
        <button
          type="button"
          className="masthead__theme"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}
