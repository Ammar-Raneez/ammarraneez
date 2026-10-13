import { person, socials, stack, work } from "../content.js";
import NoteList from "../components/NoteList.jsx";
import { quotes } from "./script.js";

const linkedin = socials.find((s) => s.name === "LinkedIn");
const current = work.filter((w) => w.period.endsWith("Present"));
const previously = [...new Set(work.filter((w) => !w.period.endsWith("Present")).map((w) => w.company))].filter(
  (c) => c !== "Contract",
);
// A short billing from the Stack section; anything not listed there is dropped.
const FEATURED = ["Python", "TypeScript", "TensorFlow", "AWS", "React", "FastAPI", "Kubernetes"];
const featuring = stack.flatMap((g) => g.tools).filter((t) => FEATURED.includes(t));

// Each billing item stays whole, with its separator attached, so lines never start with "·".
function Billing({ items }) {
  return items.map((item) => (
    <span key={item} className="credits__item">
      {item}
    </span>
  ));
}

export default function Credits() {
  return (
    <section id="credits" className="credits" data-era="night" aria-labelledby="credits-title">
      <h2 id="credits-title" className="kicker">
        Credits
      </h2>
      <dl className="credits__list">
        <div>
          <dt>Written by</dt>
          <dd>{person.name}</dd>
        </div>
        <div>
          <dt>Starring</dt>
          <dd className="credits__stacked">
            <Billing items={current.map((w) => `${w.role}, ${w.lane ?? w.company}`)} />
          </dd>
        </div>
        <div>
          <dt>Previously at</dt>
          <dd>
            <Billing items={previously} />
          </dd>
        </div>
        <div>
          <dt>Featuring</dt>
          <dd>
            <Billing items={featuring} />
          </dd>
        </div>
        <div>
          <dt>Filmed in</dt>
          <dd>{person.city}, Sri Lanka</dd>
        </div>
        <div>
          <dt>Running time</dt>
          <dd>2019 - still going</dd>
        </div>
      </dl>
      <div className="credits__notes">
        <p className="kicker">Latest notes</p>
        <NoteList limit={3} />
      </div>
      <a className="credits__mail" href={`mailto:${person.email}`}>
        {person.email}
      </a>
      <p className="links">
        <a href={linkedin.link} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={person.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={person.resume} target="_blank" rel="noreferrer">
          CV
        </a>
        <a href="/archive">The full archive</a>
      </p>
      <p className="fin" aria-hidden="true">
        Fin.
      </p>
      <p className="kicker">“{quotes.longWay.text}”</p>
    </section>
  );
}
