import { useId, useState } from "react";
import { stack } from "../content.js";
import Logo from "./Logo.jsx";

const logos = import.meta.glob("../assets/images/*.png", { eager: true, query: "?url", import: "default" });

// Tools from the Stack section that a role's own bullets mention, in Stack order.
// Longest names match first and are blanked out, so "Tailwind CSS" doesn't also count as "CSS".
const known = stack.flatMap((group) => group.tools);
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function toolsIn(points) {
  let text = points.join(" ");
  const found = new Set();
  for (const tool of [...known].sort((a, b) => b.length - a.length)) {
    const pattern = new RegExp(`\\b${escape(tool)}(?!\\w|\\.\\w)`, "g");
    if (pattern.test(text)) found.add(tool);
    text = text.replace(pattern, " ");
  }
  return known.filter((tool) => found.has(tool));
}

function Row({ item, index, track }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const logo = logos[`../assets/images/${item.logo}`];
  const tools = toolsIn(item.points);

  return (
    <li
      className={`ledger__row${open ? " is-open" : ""}`}
      data-reveal
      data-year={track ? item.period.match(/\d{4}/)[0] : undefined}
      data-key={track ? index : undefined}
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
          {item.metrics && (
            <dl className="facts facts--compact">
              {item.metrics.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <ul>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {tools.length > 0 && (
            <p className="ledger__tools">
              {tools.map((tool) => (
                <span key={tool} className="project__tool">
                  <Logo name={tool} />
                  {tool}
                </span>
              ))}
            </p>
          )}
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
      {items.map((item, index) => (
        <Row key={`${item.role}-${item.company}-${item.period}`} item={item} index={index} track={track} />
      ))}
    </ol>
  );
}
