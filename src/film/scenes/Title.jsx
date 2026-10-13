import { person, teaching } from "../../content.js";
import { scenes } from "../script.js";
import Scene from "./Scene.jsx";

export default function Title({ scene }) {
  return (
    <Scene scene={scene} className="title-card" pin={false}>
      <p className="kicker">A story in eight scenes</p>
      <h1 className="mega title-card__name">
        <span className="line">
          <span>Ammar</span>
        </span>
        <span className="line">
          <span>
            Raneez<span className="title-card__dot">.</span>
          </span>
        </span>
      </h1>
      <p className="slate kicker">
        <span>
          {person.role}, {person.company}
        </span>
        <span>{teaching.role}, IIT</span>
        <span>IEEE published</span>
        <span>{person.city}, Sri Lanka</span>
      </p>
      <p className="kicker scroll-cue">Scroll to roll</p>
      <nav className="chapters kicker" aria-label="Scenes">
        <ol>
          {scenes.slice(1).map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>
                {s.num} {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </Scene>
  );
}
