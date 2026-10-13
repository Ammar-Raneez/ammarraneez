import { useRef } from "react";
import NotFound from "./NotFound.jsx";
import ForecastFigure from "../components/ForecastFigure.jsx";
import Logo from "../components/Logo.jsx";
import { usePageMotion } from "../motion.js";
import { useDocumentTitle } from "../pageMeta.js";
import { cases } from "../cases.js";

function SystemMap({ diagram }) {
  return (
    <figure className="system" data-reveal>
      <ol className="system__stages">
        {diagram.stages.map((stage, i) => (
          <li key={stage.title} className="system__stage">
            {i > 0 && <span className="system__arrow" aria-hidden="true" />}
            <span className="label">
              <span className="label__index">{String(i + 1).padStart(2, "0")}</span> {stage.title}
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
        <span className="label">{diagram.platform.title}</span>
        <ul>
          {diagram.platform.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <figcaption className="forecast__caption">
        <span className="label">Fig. 1</span>
        <span>{diagram.caption}</span>
      </figcaption>
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

  return (
    <article ref={root} className="page article case">
      <header className="page__intro">
        <p className="label" data-intro>
          <span className="label__index">Case study</span>
          {study.org}, {study.period}
        </p>
        <h1 className="article__title" data-intro>
          {study.title}
        </h1>
        <p className="lede" data-intro>
          {study.summary}
        </p>
        <p className="label case__role" data-intro>
          Role: <span>{study.role}</span>
        </p>
      </header>

      <dl className="facts case__outcomes" data-reveal>
        {study.outcomes.map((o) => (
          <div key={o.label}>
            <dt>{o.label}</dt>
            <dd data-count>{o.value}</dd>
          </div>
        ))}
      </dl>

      <div className="case__figure">
        {study.diagram && <SystemMap diagram={study.diagram} />}
        {study.figure && <ForecastFigure />}
      </div>

      <div className="article__body prose">
        {study.sections.map((section) => (
          <section key={section.heading} className="case__section" data-reveal>
            <h2 className="case__heading">{section.heading}</h2>
            <Body blocks={section.body} />
          </section>
        ))}

        {study.links && (
          <p className="case__links">
            {study.links.map((l) => (
              <a key={l.href} className="arrow-link" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </p>
        )}

        <p className="case__stack">
          <span className="label">Stack</span>
          {study.stack.map((tool) => (
            <span key={tool} className="project__tool">
              <Logo name={tool} />
              {tool}
            </span>
          ))}
        </p>
      </div>

      <footer className="article__footer">
        <a className="article__next" href={`/work/${next.slug}`}>
          <span className="label">Next case study</span>
          <span className="article__next-title">{next.title}</span>
        </a>
      </footer>
    </article>
  );
}
