import portrait from "../../assets/images/portrait.jpg";
import { person, socials } from "../../content.js";
import { quotes, sentence } from "../script.js";
import Scene from "./Scene.jsx";

const linkedin = socials.find((s) => s.name === "LinkedIn");

export default function Now({ scene }) {
  return (
    <Scene scene={scene} pin={false}>
      <figure className="portrait">
        <img src={portrait} alt={`Portrait of ${person.name}`} width="880" height="880" loading="lazy" data-shutter />
        <figcaption className="kicker">SC 08 / Now</figcaption>
      </figure>
      <div className="now">
        <p className="kicker">
          Now · <b>Still rolling</b>
        </p>
        <h2 className="big">Leading a team. Lecturing. Building on the side.</h2>
        <p className="quote">“{sentence(quotes.gaps.text)}”</p>
        <div className="cta">
          <a className="button" href={linkedin.link} target="_blank" rel="noreferrer">
            Follow on LinkedIn
          </a>
          <p className="links">
            <a href={person.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="/notes">Notes</a>
            <a href={`mailto:${person.email}`}>Email</a>
            <a href={person.resume} target="_blank" rel="noreferrer">
              CV
            </a>
          </p>
        </div>
      </div>
    </Scene>
  );
}
