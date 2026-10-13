import { useRef } from "react";
import ForecastFigure from "../components/ForecastFigure.jsx";
import Ledger from "../components/Ledger.jsx";
import Logo from "../components/Logo.jsx";
import NoteList from "../components/NoteList.jsx";
import { usePageMotion } from "../motion.js";
import {
  certifications,
  competitions,
  degree,
  learningProfiles,
  person,
  projects,
  research,
  socials,
  stack,
  teaching,
  volunteering,
  work,
} from "../content.js";
import { journey } from "../journey.js";
import portrait from "../assets/images/portrait.jpg";

function SectionHead({ index, label, title, id }) {
  return (
    <header className="section__head" data-reveal>
      <p className="label">
        <span className="label__index">{index}</span> {label}
      </p>
      <h2 className="section__title" id={id}>
        {title}
      </h2>
    </header>
  );
}

function External({ href, children, className = "arrow-link" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

// A table row that links out when there's a public page, and is plain text otherwise.
function Row({ href, internal, children }) {
  const external = internal ? {} : { target: "_blank", rel: "noreferrer" };
  return href ? (
    <a className="table__row" href={href} {...external}>
      {children}
    </a>
  ) : (
    <div className="table__row">{children}</div>
  );
}

const statement = {
  text: "LLMs are an incredible co\u2011pilot. But you still need to know how to fly the plane.",
  note: "logical-thinking",
};

export default function Home() {
  const root = useRef(null);
  usePageMotion(root);

  return (
    <div ref={root}>
      <section className="hero" aria-labelledby="hero-title">
        <p className="label hero__label" data-intro>
          <span className="label__index">01</span> {person.role}, {person.company}, {person.city}
        </p>
        <h1 className="hero__title" id="hero-title">
          <span data-line>
            <span>I architect</span>
          </span>{" "}
          <span data-line>
            <span>
              <em>real-time</em> AI,
            </span>
          </span>{" "}
          <span data-line>
            <span>from the model</span>
          </span>{" "}
          <span data-line>
            <span>to the stack around it.</span>
          </span>
        </h1>
        <div className="hero__aside">
          <p data-intro>
            I'm {person.name} ({person.nickname} to most people), {person.role} at {person.company} and a visiting
            lecturer in applied AI at IIT. Before that, four years at 99x across machine learning, full-stack
            product and AWS. My LTS network for volatile time series was published at IEEE CCWC 2023.
          </p>
          <div className="hero__actions" data-intro>
            <a className="button" href="#work">
              See the work
            </a>
            <a className="arrow-link" href={`mailto:${person.email}`}>
              Email me
            </a>
          </div>
        </div>
        <div className="hero__figure">
          <div data-intro>
            <ForecastFigure />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="work">
        <SectionHead index="02" label="Work" title="From freelance builds to head of engineering." id="work" />
        <p className="work__year" aria-hidden="true">
          <span className="label">Since</span>
          <span data-year-display>{work[0].period.match(/\d{4}/)[0]}</span>
        </p>
        <div className="section__body">
          <Ledger items={work} track />
          <h3 className="subhead" data-reveal>
            Alongside
          </h3>
          <Ledger items={volunteering} />
        </div>
      </section>

      <section className="section" aria-labelledby="research">
        <SectionHead index="03" label="Research" title={research.title} id="research" />
        <div className="section__body research">
          <p className="research__venue label" data-reveal>
            {research.venue}, published
          </p>
          <p className="lede" data-reveal>
            {research.summary}
          </p>
          <dl className="facts" data-reveal>
            <div>
              <dt>Venue</dt>
              <dd>CCWC</dd>
              <dd className="facts__note">IEEE, 2023</dd>
            </div>
            <div>
              <dt>Final-year project</dt>
              <dd>Best</dd>
              <dd className="facts__note">Best Final Year Project, IIT 2023</dd>
            </div>
            <div>
              <dt>Read more</dt>
              <dd className="facts__links">
                <External href={research.paper}>The paper on IEEE Xplore</External>
                <External href={research.code}>Reference implementation</External>
                <External href={research.appliedIn.url}>Applied in {research.appliedIn.name}</External>
                <a className="arrow-link" href="/work/lts-network">
                  Read the case study
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="projects">
        <SectionHead index="04" label="Projects" title="Repositories, old and new." id="projects" />
        <div className="section__body">
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
          <External href={person.github}>100+ more on GitHub</External>
        </div>
      </section>

      <section className="section" aria-labelledby="stack">
        <SectionHead index="05" label="Stack" title="What I reach for." id="stack" />
        <div className="section__body stack">
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
        </div>
      </section>

      <section className="section" aria-labelledby="recognition">
        <SectionHead index="06" label="Recognition" title="Degree, awards and certificates." id="recognition" />
        <div className="section__body recognition">
          <div className="degree" data-reveal>
            <p className="degree__average" data-count>
              {degree.average}
            </p>
            <p className="label">Cumulative average</p>
            <h3 className="degree__title">
              {degree.title}, {degree.result}
            </h3>
            <p className="muted">
              <External href={degree.link}>{degree.school}</External> via {degree.via}, {degree.period}
            </p>
            <ul className="degree__points">
              {degree.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="muted">Also: {degree.also}</p>
          </div>

          <div className="table-block" data-reveal>
            <h3 className="subhead">Awards, competitions & publications</h3>
            <ul className="table">
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
          </div>

          <div className="table-block table-block--wide" data-reveal>
            <h3 className="subhead">Certifications</h3>
            <ul className="table table--cols">
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
              <span className="label">Learning profiles</span>
              {learningProfiles.map((p) => (
                <External key={p.name} href={p.link}>
                  {p.name}
                </External>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="teaching">
        <SectionHead index="07" label="Teaching & talks" title="Three years on the other side of the viva table." id="teaching" />
        <div className="section__body teaching">
          <div className="teaching__feature" data-reveal>
            <p className="label">
              {teaching.role}, {teaching.place}
            </p>
            <p className="teaching__since">
              <span className="label">Lecturing since {teaching.since}</span>
              {teaching.since.slice(-4)}
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
          <div className="table-block" data-reveal>
            <h3 className="subhead">Talks, sessions & community</h3>
            <ul className="table">
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
          </div>
        </div>
      </section>

      <section className="statement" aria-label="From my notes">
        <p className="statement__text" data-words>
          {statement.text.split(" ").map((word, i) => (
            <span className="word" key={i}>
              {word}{" "}
            </span>
          ))}
        </p>
        <a className="arrow-link statement__source" href={`/notes/${statement.note}`}>
          From the note “Logical thinking is in decline”
        </a>
      </section>

      <section className="section" aria-labelledby="notes">
        <SectionHead index="08" label="Notes" title="Things I keep telling engineers." id="notes" />
        <div className="section__body">
          <NoteList limit={3} />
          <a className="arrow-link" href="/notes">
            All notes
          </a>
        </div>
      </section>

      <section className="teaser" aria-labelledby="journey-teaser">
        <img className="teaser__portrait" src={portrait} alt={`Portrait of ${person.name} in a navy suit`} width="880" height="880" loading="lazy" data-shutter />
        <div className="teaser__copy" data-reveal>
          <p className="label">
            <span className="label__index">09</span> Journey
          </p>
          <h2 className="teaser__title" id="journey-teaser">
            From 65% on my first Python assignment to head of engineering.
          </h2>
          <p className="muted">
            Jun 2019 to now, in {journey.completeJourney.length} entries. Hackathons, two medical AI apps, a gold
            medal, a lot of overnights at the office, and a few emojis.
          </p>
          <a className="button" href="/journey">
            Read the journey
          </a>
        </div>
      </section>

      <section className="section contact" aria-labelledby="contact">
        <SectionHead index="10" label="Contact" title="Have something volatile to model?" id="contact" />
        <div className="section__body">
          <a className="contact__email" href={`mailto:${person.email}`} data-reveal>
            {person.email}
          </a>
          <p className="contact__call" data-reveal>
            {person.booking ? (
              <a className="button" href={person.booking} target="_blank" rel="noreferrer">
                Book a call
              </a>
            ) : (
              <a className="button" href={`mailto:${person.email}?subject=${encodeURIComponent("A quick call")}`}>
                Ask for a call
              </a>
            )}
          </p>
          <ul className="contact__links" data-reveal>
            {socials.map((s) => (
              <li key={s.name}>
                <External href={s.link}>{s.name}</External>
              </li>
            ))}
            <li>
              <External href={person.resume}>CV (PDF)</External>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
