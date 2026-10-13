import { useRef } from "react";
import { cases } from "../../cases.js";
import { person } from "../../content.js";
import CallSimulator from "../../instruments/CallSimulator.jsx";
import { useCanvas } from "../../instruments/useCanvas.js";
import { quotes } from "../script.js";
import Scene from "./Scene.jsx";

const study = cases.find((c) => c.slug === "ai-contact-center");
const NODES = [
  ["01", "Listen"],
  ["02", "Understand"],
  ["03 · Sub-2s", "Respond"],
];

// Decorative audio line; the last third is "the reply", in the era's accent.
function Wave() {
  const canvas = useRef(null);
  const t = useRef(0);
  useCanvas(canvas, {
    height: () => (innerHeight < 820 ? 72 : 104),
    tick: () => (t.current += 0.05),
    interval: 50,
    draw: (ctx, w, h) => {
      const styles = getComputedStyle(canvas.current);
      const [fg, accent] = ["--fg", "--accent"].map((n) => styles.getPropertyValue(n).trim());
      ctx.clearRect(0, 0, w, h);
      const bars = Math.floor(w / 6);
      for (let i = 0; i < bars; i++) {
        const reply = i > bars * 0.66;
        const env = Math.abs(Math.sin(i / 23 + t.current * 0.7)) * Math.abs(Math.sin(i / 7 - t.current * 1.3)) * 0.85 + 0.06;
        const bh = Math.max(2, env * h);
        ctx.globalAlpha = reply ? 1 : 0.5;
        ctx.fillStyle = reply ? accent : fg;
        ctx.fillRect(i * 6, (h - bh) / 2, 3, bh);
      }
      ctx.globalAlpha = 1;
    },
  });
  return (
    <figure className="wave">
      <canvas ref={canvas} aria-hidden="true" />
      <figcaption className="kicker">Illustration</figcaption>
    </figure>
  );
}

export default function ContactCenter({ scene }) {
  return (
    <Scene
      scene={scene}
      after={
        <>
          <p className="links scene__link">
            <a href={`/work/${study.slug}`}>Read the case study</a>
          </p>
          <CallSimulator />
        </>
      }
    >
      <div>
        <p className="kicker">
          May 2025 · {study.org} · <b>The contact center project</b>
        </p>
        <h2 className="big contact__title">{study.title}</h2>
      </div>
      <Wave />
      <ol className="pipeline">
        {NODES.map(([num, title]) => (
          <li key={title} className="node">
            <span className="kicker">{num}</span>
            <h3>{title}</h3>
          </li>
        ))}
      </ol>
      <div className="night-foot">
        <p className="quote">“{quotes.longNights.text}”</p>
        <p className="stamp">
          {person.role}
          <small>Since Mar 2026</small>
        </p>
      </div>
    </Scene>
  );
}
