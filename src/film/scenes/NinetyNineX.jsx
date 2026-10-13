import { work } from "../../content.js";
import Segmenter from "../../instruments/Segmenter.jsx";
import { quotes, sentence } from "../script.js";
import Scene from "./Scene.jsx";

const roles = work.filter((w) => w.company === "99x").reverse();
const senior = roles[roles.length - 1];
const metric = (value) => senior.metrics.find((m) => m.value === value);

export default function NinetyNineX({ scene }) {
  const stats = [metric("85%+"), metric("+50%")];
  return (
    <Scene scene={scene} after={<Segmenter />}>
      <div>
        <p className="kicker">
          {roles[0].period.slice(0, 8)} - {senior.period.slice(-8)} · <b>99x, four years</b>
        </p>
        <h2 className="big ninety__title">
          <span className="line">
            <span>Intern to senior.</span>
          </span>
        </h2>
      </div>
      <ol className="ladder">
        {roles.map((r, i) => (
          <li key={r.role} className={`step${i === roles.length - 1 ? " is-top" : ""}`}>
            <span className="kicker">{r.period.slice(0, 8)}</span>
            <h3>{r.role}</h3>
          </li>
        ))}
      </ol>
      <div className="prod">
        <div className="bar-wrap">
          <p className="kicker">Data labeling, with an OpenCV pre-labeling workflow</p>
          <div className="bar-row">
            <span className="kicker">Before</span>
            <div className="bar">40+ h</div>
          </div>
          <div className="bar-row">
            <span className="kicker">After</span>
            <div className="bar bar--after" />
          </div>
          <p className="kicker">
            <b>Under 2 hours</b>
          </p>
        </div>
        <dl className="stats">
          {stats.map((m) => (
            <div key={m.label} className="stat">
              <dt className="kicker">{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="quote">“{sentence(quotes.fyp.text)}”</p>
    </Scene>
  );
}
