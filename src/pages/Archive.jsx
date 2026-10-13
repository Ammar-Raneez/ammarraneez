import { useRef } from "react";
import Ledger from "../components/Ledger.jsx";
import Logo from "../components/Logo.jsx";
import { usePageMotion } from "../motion.js";
import { useDocumentTitle } from "../pageMeta.js";
import {
  certifications,
  competitions,
  degree,
  learningProfiles,
  person,
  projects,
  stack,
  teaching,
  volunteering,
  work,
} from "../content.js";
import "./archive.css";

const SECTIONS = [
  ["work", "Work"],
  ["projects", "Projects"],
  ["stack", "Stack"],
  ["recognition", "Recognition"],
  ["teaching", "Teaching & talks"],
];

function Section({ id, index, title, children }) {
  return (
    <section className="archive__section" aria-labelledby={id}>
      <header className="archive__head" data-reveal>
        <p className="kicker">
          <b>{String(index).padStart(2, "0")}</b> {SECTIONS[index - 1][1]}
        </p>
        <h2 className="big archive__title" id={id}>
          {title}
        </h2>
      </header>
      <div className="archive__body">{children}</div>
    </section>
  );
}

// A table row that links out when there's a public page, and is plain text otherwise.
function Row({ href, internal, children }) {
  if (!href) return <div className="table__row">{children}</div>;
  const external = internal ? {} : { target: "_blank", rel: "noreferrer" };
  return (
    <a className="table__row" href={href} {...external}>
      {children}
    </a>
  );
}

export default function Archive() {
  const root = useRef(null);
  useDocumentTitle("Archive");
  usePageMotion(root);

  return (
    <div ref={root} className="archive" data-era="paper">
      <header className="archive__intro page">
        <p className="kicker">
          <b>Archive</b> · Every role, project, tool and certificate
        </p>
        <h1 className="mega">The full record.</h1>
        <nav className="archive__index kicker" aria-label="Archive sections">
          {SECTIONS.map(([id, label], i) => (
            <a key={id} href={`#${id}`}>
              {String(i + 1).padStart(2, "0")} {label}
            </a>
          ))}
        </nav>
      </header>

      <Section id="work" index={1} title="From freelance builds to head of engineering.">
        <Ledger items={work} />
        <h3 className="kicker archive__subhead">Alongside</h3>
        <Ledger items={volunteering} />
      </Section>

      <Section id="projects" index={2} title="Repositories, old and new.">
        <ol className="projects">
          {projects.map((project, i) => (
            <li key={project.name} data-reveal>
              <a className="project" href={project.url} target="_blank" rel="noreferrer">
                <span className="project__index">{String(i + 1).padStart(2, "0")}</span>
                <span className="project__name">{project.name}</span>
                <span className="project__desc">{project.description}</span>
                <span className="project__stack">
                  {project.stack.map((tool) => (
                    <span key={tool} className="project__tool">
                      <Logo name={tool} />
                      {tool}
                    </span>
                  ))}
                </span>
                <span className="project__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ol>
        <p className="links">
          <a href={person.github} target="_blank" rel="noreferrer">
            100+ more on GitHub
          </a>
        </p>
      </Section>

      <Section id="stack" index={3} title="What I reach for.">
        {stack.map((group) => (
          <div className="stack__group" key={group.title} data-reveal>
            <h3 className="stack__title">{group.title}</h3>
            <ul className="stack__points">
              {group.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="stack__tools">
              {group.tools.map((tool) => (
                <li key={tool}>
                  <Logo name={tool} />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section id="recognition" index={4} title="Degree, awards and certificates.">
        <div className="degree" data-reveal>
          <p className="degree__average" data-count>
            {degree.average}
          </p>
          <p className="kicker">Cumulative average</p>
          <h3 className="degree__title">
            {degree.title}, {degree.result}
          </h3>
          <p className="muted">
            <a href={degree.link} target="_blank" rel="noreferrer">
              {degree.school}
            </a>{" "}
            via {degree.via}, {degree.period}
          </p>
          <ul className="degree__points">
            {degree.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="muted">Also: {degree.also}</p>
        </div>

        <h3 className="kicker archive__subhead">Awards, competitions & publications</h3>
        <ul className="table" data-reveal>
          {competitions.map((c) => (
            <li key={c.title}>
              <Row href={c.link}>
                <span className="table__year">{c.year ?? ""}</span>
                <span className="table__title">{c.title}</span>
                <span className="table__meta">{c.result}</span>
              </Row>
            </li>
          ))}
        </ul>

        <h3 className="kicker archive__subhead">Certifications</h3>
        <ul className="table table--cols" data-reveal>
          {certifications.map((c) => (
            <li key={c.title}>
              <Row href={c.link}>
                <span className="table__title">{c.title}</span>
                <span className="table__meta">{c.issuer}</span>
              </Row>
            </li>
          ))}
        </ul>
        <p className="profiles">
          <span className="kicker">Learning profiles</span>
          <span className="links">
            {learningProfiles.map((p) => (
              <a key={p.name} href={p.link} target="_blank" rel="noreferrer">
                {p.name}
              </a>
            ))}
          </span>
        </p>
      </Section>

      <Section id="teaching" index={5} title="On the other side of the viva table.">
        <div className="teaching" data-reveal>
          <p className="kicker">
            {teaching.role}, {teaching.place}, since {teaching.since}
          </p>
          <ul className="teaching__subjects">
            {teaching.subjects.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
          <ul className="degree__points">
            {teaching.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <h3 className="kicker archive__subhead">Talks, sessions & community</h3>
        <ul className="table" data-reveal>
          {teaching.events.map((e) => (
            <li key={e.title}>
              <Row href={e.note ? `/notes/${e.note}` : e.link} internal={Boolean(e.note)}>
                <span className="table__year">{e.date}</span>
                <span className="table__title">{e.title}</span>
                <span className="table__meta">{e.detail}</span>
              </Row>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
