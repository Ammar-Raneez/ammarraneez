import { useRef } from "react";
import { usePageMotion } from "../motion.js";
import { journey } from "../journey.js";
import { chapters } from "../film/script.js";
import "./journey.css";

// Splits the entries into the film's chapters; each chapter runs until the next one starts.
function groupByChapter(entries) {
  const starts = chapters.map((c) => entries.findIndex((e) => e.date === c.from));
  return chapters.map((c, i) => ({ ...c, entries: entries.slice(starts[i], starts[i + 1] ?? entries.length), offset: starts[i] }));
}

const grouped = groupByChapter(journey.completeJourney);

export default function Journey() {
  const root = useRef(null);
  usePageMotion(root);

  return (
    <div ref={root} className="journey">
      <header className="journey__intro page" data-era="night">
        <p className="kicker">
          <b>Journey</b> · Jun 2019 to now, in {journey.completeJourney.length} entries
        </p>
        <h1 className="mega">{journey.title}.</h1>
        <p className="quote">{journey.description}</p>
        <nav className="journey__index kicker" aria-label="Chapters">
          {grouped.map((c, i) => (
            <a key={c.title} href={`#chapter-${i + 1}`}>
              {String(i + 1).padStart(2, "0")} {c.title}
            </a>
          ))}
        </nav>
      </header>

      {grouped.map((chapter, ci) => (
        <section
          key={chapter.title}
          id={`chapter-${ci + 1}`}
          className="chapter"
          data-era={chapter.era}
          aria-labelledby={`chapter-${ci + 1}-title`}
        >
          <header className="chapter__head">
            <p className="kicker">
              Chapter {String(ci + 1).padStart(2, "0")} · {chapter.entries.length} {chapter.entries.length === 1 ? "entry" : "entries"}
            </p>
            <h2 className="big chapter__title" id={`chapter-${ci + 1}-title`}>
              {chapter.title}
            </h2>
          </header>
          <ol className="chapter__entries">
            {chapter.entries.map((entry, i) => (
              <li className="entry" key={`${entry.date}-${i}`} data-reveal>
                <h3 className="entry__date">
                  <span className="entry__num">{String(chapter.offset + i + 1).padStart(2, "0")}</span>
                  {entry.date}
                </h3>
                <div className="entry__text">
                  <p>{entry.description[0]}</p>
                  {entry.description.length > 1 && (
                    <details className="entry__more">
                      <summary>Read more</summary>
                      {entry.description.slice(1).map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                      ))}
                    </details>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <p className="journey__end page" data-era="night">
        <a className="button" href="/#credits">
          Get in touch
        </a>
        <span className="links">
          <a href="/">Watch the film</a>
        </span>
      </p>
    </div>
  );
}
