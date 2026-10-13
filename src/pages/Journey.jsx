import { useCallback, useRef } from "react";
import { gsap, usePageMotion } from "../motion.js";
import { journey } from "../journey.js";

export default function Journey() {
  const root = useRef(null);

  const progress = useCallback((el) => {
    gsap.fromTo(
      el.querySelector(".journey__progress"),
      { scaleX: 0 },
      { scaleX: 1, ease: "none", scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 0.3 } },
    );
  }, []);
  usePageMotion(root, progress);

  return (
    <div ref={root} className="journey">
      <div className="journey__progress" aria-hidden="true" />
      <header className="page__intro">
        <p className="label" data-intro>
          <span className="label__index">09</span> Journey, Jun 2019 to now
        </p>
        <h1 className="hero__title page__title">
          <span data-line>
            <span>{journey.title}.</span>
          </span>
        </h1>
        <p className="lede" data-intro>
          {journey.description}
        </p>
      </header>

      <div className="journey__track">
        <span className="journey__line" aria-hidden="true" />
        <ol className="journey__list">
        {journey.completeJourney.map((entry, i) => (
          <li className="journey__entry" key={`${entry.date}-${i}`}>
            <h2 className="journey__date">
              <span className="journey__num">{String(i + 1).padStart(2, "0")}</span>
              {entry.date}
            </h2>
            <div className="journey__text" data-reveal>
              <p>{entry.description[0]}</p>
              {entry.description.length > 1 && (
                <details className="journey__more">
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
      </div>

      <p className="journey__end">
        <a className="button" href="/#contact">
          Get in touch
        </a>
        <a className="arrow-link" href="/">
          Back to the home page
        </a>
      </p>
    </div>
  );
}
