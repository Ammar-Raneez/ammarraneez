import { degree } from "../../content.js";
import Scene from "./Scene.jsx";

const year = degree.period.split(" - ").pop();
const [average] = degree.average.match(/[\d.]+/);

export default function Graduation({ scene }) {
  const honours = [
    ["Dr. Gamini Wikramasinghe Gold Medal", "Top of the batch"],
    [degree.result, degree.title],
    ["Best Final Year Project", "Highest FYP mark"],
    ["Valedictorian", `Class of ${year}`],
  ];
  return (
    <Scene scene={scene}>
      <div>
        <p className="kicker">
          Nov {year} · {degree.title} · <b>{degree.school} via IIT</b>
        </p>
        <p className="avg" data-avg aria-label={degree.average}>
          {average}
          <small>%</small>
        </p>
        <p className="kicker avg__label">Cumulative average. Top of the batch.</p>
        <ul className="honours">
          {honours.map(([title, note]) => (
            <li key={title}>
              <span>{title}</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="medal" aria-hidden="true">
        <svg viewBox="0 0 400 400">
          <defs>
            <path id="medal-ring" d="M200,200 m-170,0 a170,170 0 1,1 340,0 a170,170 0 1,1 -340,0" />
          </defs>
          <g className="medal__ring">
            <circle cx="200" cy="200" r="196" fill="none" stroke="currentColor" strokeWidth="2" />
            <text>
              <textPath href="#medal-ring">
                GOLD MEDAL · TOP OF THE BATCH · {year} · GOLD MEDAL · TOP OF THE BATCH · {year} ·
              </textPath>
            </text>
          </g>
        </svg>
        <div className="medal__core">
          <b>Gold</b>
          <span>
            Four years after
            <br />
            the first HTML file
          </span>
        </div>
      </div>
    </Scene>
  );
}
