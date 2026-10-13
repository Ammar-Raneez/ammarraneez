import { useId, useState } from "react";

const logos = import.meta.glob("../assets/images/*.png", { eager: true, query: "?url", import: "default" });

function Row({ item, track }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const logo = logos[`../assets/images/${item.logo}`];

  return (
    <li
      className={`ledger__row${open ? " is-open" : ""}`}
      data-reveal
      data-year={track ? item.period.match(/\d{4}/)[0] : undefined}
    >
      <button
        type="button"
        className="ledger__head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        <span className="ledger__period">{item.period}</span>
        <span className="ledger__role">{item.role}</span>
        <span className="ledger__company">
          {item.company}
          {item.caseStudy && <span className="ledger__badge">Case study</span>}
        </span>
        <span className="ledger__toggle" aria-hidden="true" />
      </button>
      <div className="ledger__panel" id={panelId} role="region" aria-label={`${item.role}, ${item.company}`}>
        <div className="ledger__body">
          {logo && <img className="ledger__logo" src={logo} alt="" width="40" height="40" loading="lazy" />}
          <ul>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {item.caseStudy && (
            <a className="arrow-link" href={`/work/${item.caseStudy}`}>
              Read the case study
            </a>
          )}
          {item.link && (
            <a className="arrow-link" href={item.link} target="_blank" rel="noreferrer">
              {item.company}
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Ledger({ items, track }) {
  return (
    <ol className="ledger">
      {items.map((item) => (
        <Row key={`${item.role}-${item.company}-${item.period}`} item={item} track={track} />
      ))}
    </ol>
  );
}
