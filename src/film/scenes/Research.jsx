import { useMemo } from "react";
import { competitions, research } from "../../content.js";
import { seeded } from "../../instruments/random.js";
import Forecaster from "../../instruments/Forecaster.jsx";
import { quotes, sentence } from "../script.js";
import Scene from "./Scene.jsx";

// Illustrative only: a seeded noisy series and a smoothed line drawn through it.
function chartPaths() {
  const rand = seeded(7);
  const n = 160, pts = [];
  let level = 120;
  for (let i = 0; i < n; i++) {
    level += Math.sin(i / 14) * 1.6 + (rand() - 0.5) * 6;
    const shock = rand() < 0.06 ? (rand() - 0.5) * 120 : 0;
    pts.push(level + (rand() - 0.5) * 46 + shock);
  }
  const smooth = [];
  let s = pts[0];
  for (const p of pts) smooth.push((s += (p - s) * 0.12));
  const lo = Math.min(...pts), hi = Math.max(...pts);
  const y = (v) => 228 - ((v - lo) / (hi - lo)) * 216;
  const d = (arr) => arr.map((v, i) => `${i ? "L" : "M"}${((i / (n - 1)) * 1000).toFixed(1)},${y(v).toFixed(1)}`).join("");
  return { noisy: d(pts), smooth: d(smooth) };
}

export default function Research({ scene }) {
  const paths = useMemo(chartPaths, []);
  const award = (title) => competitions.find((c) => c.title === title);
  const facts = [
    ["Published", research.venue],
    ["Award", award("Best Final Year Project").title],
    ["Then", `${award("NBQSA '23").title} merit`],
  ];

  return (
    <Scene scene={scene} after={<Forecaster />}>
      <div className="research__head">
        <div>
          <p className="kicker">
            2022 - 2023 · <b>His own thesis</b>
          </p>
          <p className="lts" aria-hidden="true">
            LTS
          </p>
          <h2 className="big research__title">{research.title}</h2>
        </div>
        <blockquote className="quote">
          “{sentence(quotes.daring.text)}”<cite>On replacing the algorithm he was meant to re-implement</cite>
        </blockquote>
      </div>
      <figure>
        <svg className="chart" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
          <line className="axis" x1="0" y1="239" x2="1000" y2="239" />
          <path className="noisy" pathLength="1" d={paths.noisy} />
          <path className="smooth" pathLength="1" d={paths.smooth} />
        </svg>
        <figcaption className="kicker chart-legend">
          <span>Noisy data stream</span>
          <span>A network built to cope with it</span>
          <span>Illustration</span>
        </figcaption>
      </figure>
      <dl className="facts">
        {facts.map(([label, value]) => (
          <div key={label}>
            <dt className="kicker">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <p className="links">
        <a href={research.paper} target="_blank" rel="noreferrer">
          The paper
        </a>
        <a href={research.code} target="_blank" rel="noreferrer">
          The code
        </a>
        <a href="/work/lts-network">The case study</a>
      </p>
    </Scene>
  );
}
