import { competitions, projects } from "../../content.js";
import { quotes } from "../script.js";
import Scene from "./Scene.jsx";

const logos = import.meta.glob("../../assets/images/*_logo.png", { eager: true, query: "?url", import: "default" });
const FIRST_JOBS = [
  ["inforwaves_logo.png", "Inforwaves"],
  ["niftron_logo.png", "Niftron"],
  ["radiant_logo.png", "The Radiant"],
];

export default function LearningFast({ scene }) {
  const coderally = competitions.find((c) => c.title === "Coderally 2");
  const medical = projects.filter((p) => ["ONCO", "E-Ophthalmologist"].includes(p.name));

  return (
    <Scene scene={scene} className="reel-scene">
      <div className="reel">
        <div className="reel__intro">
          <p className="kicker">
            2019 - 2021 · <b>He didn't give up</b>
          </p>
          <h2 className="big">
            <span className="line">
              <span>From morning</span>
            </span>
            <span className="line">
              <span>till night.</span>
            </span>
          </h2>
          <p className="quote quote--small">“{quotes.morningTillNight.text}”</p>
        </div>
        <article className="card">
          <p className="card__date">Jul 2019</p>
          <h3 className="card__title">My very first HTML file</h3>
          <p>“{quotes.firstHtml.text}.”</p>
        </article>
        <article className="card">
          <p className="card__date">Jan 2020</p>
          <h3 className="card__title">Java, in a two-week break</h3>
          <p>
            Learned Java between semesters. It <span className="hl">{quotes.java.text}.</span>
          </p>
        </article>
        <article className="card">
          <p className="card__date">Mar 2020</p>
          <h3 className="card__title">A first real project</h3>
          <p>A train ticket booking app for the Denuwara Manike expressway.</p>
        </article>
        <article className="card">
          <p className="card__date">May - Sep 2020</p>
          <p className="card__num">100+</p>
          <h3 className="card__title">Certificates</h3>
          <p>“{quotes.certificates.text}.”</p>
        </article>
        <article className="card">
          <p className="card__date">{coderally.year}</p>
          <p className="card__num">1st</p>
          <h3 className="card__title">{coderally.title}</h3>
          <p>{coderally.result}.</p>
        </article>
        <article className="card">
          <p className="card__date">Mar - May 2021</p>
          <h3 className="card__title">AI for medicine</h3>
          {medical.map((p) => (
            <p key={p.name}>
              <span className="hl">{p.name}</span>: {p.description}
            </p>
          ))}
        </article>
        <article className="card">
          <p className="card__date">Oct 2020 - Jul 2021</p>
          <h3 className="card__title">First paid code</h3>
          <p>Full-stack developer at Inforwaves, Niftron and The Radiant, alongside university.</p>
          <div className="logos">
            {FIRST_JOBS.map(([file, name]) => (
              <img key={file} src={logos[`../../assets/images/${file}`]} alt={name} width="44" height="44" loading="lazy" />
            ))}
          </div>
        </article>
      </div>
    </Scene>
  );
}
