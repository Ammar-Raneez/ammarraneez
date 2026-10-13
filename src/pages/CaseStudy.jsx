import { useRef } from "react";
import NotFound from "./NotFound.jsx";
import Logo from "../components/Logo.jsx";
import CallSimulator from "../instruments/CallSimulator.jsx";
import Forecaster from "../instruments/Forecaster.jsx";
import Segmenter from "../instruments/Segmenter.jsx";
import { usePageMotion } from "../motion.js";
import { useDocumentTitle } from "../pageMeta.js";
import { cases } from "../cases.js";
import "./notes.css";
import "./case.css";

// Each case study reads in the era of its film scene and ends on its matching playable.
const ERA = { "ai-contact-center": "night", "ml-in-production": "paper", "lts-network": "forest" };
const INSTRUMENT = { "ai-contact-center": CallSimulator, "ml-in-production": Segmenter, "lts-network": Forecaster };

function SystemMap({ diagram }) {
  return (
    <figure className="system" data-reveal>
      <ol className="system__stages">
        {diagram.stages.map((stage, i) => (
          <li key={stage.title} className="system__stage">
            <span className="kicker">
              <b>{String(i + 1).padStart(2, "0")}</b> {stage.title}
            </span>
            <ul>
              {stage.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <div className="system__platform">
        <span className="kicker">{diagram.platform.title}</span>
        <ul>
          {diagram.platform.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <figcaption className="kicker">Fig. 1 · {diagram.caption}</figcaption>
    </figure>
  );
}

function Body({ blocks }) {
  return blocks.map((block, i) =>
    Array.isArray(block) ? (
      <ul key={i}>
        {block.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ) : (
      <p key={i}>{block}</p>
    ),
  );
}

export default function CaseStudy({ slug }) {
  const root = useRef(null);
  const index = cases.findIndex((c) => c.slug === slug);
  const study = cases[index];
  usePageMotion(root);
  useDocumentTitle(study?.title);

  if (!study) return <NotFound />;
  const next = cases[(index + 1) % cases.length];
  const Instrument = INSTRUMENT[study.slug];

  return (
    <article ref={root} className="page article case" data-era={ERA[study.slug] ?? "paper"}>
      <header className="article__head">
        <p className="kicker">
          <b>Case study</b> · {study.org}, {study.period}
        </p>
        <h1 className="big article__title">{study.title}</h1>
        <p className="quote case__summary">{study.summary}</p>
        <p className="kicker">Role: {study.role}</p>
      </header>

      <dl className="facts case__outcomes" data-reveal>
        {study.outcomes.map((o) => (
          <div key={o.label}>
            <dt className="kicker">{o.label}</dt>
            <dd data-count>{o.value}</dd>
          </div>
        ))}
      </dl>

      {study.diagram && <SystemMap diagram={study.diagram} />}

      <div className="article__body prose">
        {study.sections.map((section) => (
          <section key={section.heading} data-reveal>
            <h2>{section.heading}</h2>
            <Body blocks={section.body} />
          </section>
        ))}
      </div>

      {Instrument && (
        <div className="case__instrument">
          <Instrument />
        </div>
      )}

      <div className="case__meta">
        {study.links && (
          <p className="links">
            {study.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </p>
        )}
        <p className="case__stack">
          <span className="kicker">Stack</span>
          {study.stack.map((tool) => (
            <span key={tool} className="case__tool">
              <Logo name={tool} />
              {tool}
            </span>
          ))}
        </p>
      </div>

      <footer className="article__foot">
        <a className="article__next" href={`/work/${next.slug}`}>
          <span className="kicker">Next case study</span>
          <span className="article__next-title">{next.title}</span>
        </a>
      </footer>
    </article>
  );
}
