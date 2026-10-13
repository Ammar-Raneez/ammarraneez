import { useRef } from "react";
import { scenes } from "../film/script.js";
import { useFilmMotion } from "../film/filmMotion.js";
import Title from "../film/scenes/Title.jsx";
import ColdOpen from "../film/scenes/ColdOpen.jsx";
import LearningFast from "../film/scenes/LearningFast.jsx";
import Research from "../film/scenes/Research.jsx";
import Graduation from "../film/scenes/Graduation.jsx";
import NinetyNineX from "../film/scenes/NinetyNineX.jsx";
import ContactCenter from "../film/scenes/ContactCenter.jsx";
import PlotTwist from "../film/scenes/PlotTwist.jsx";
import Now from "../film/scenes/Now.jsx";
import Credits from "../film/Credits.jsx";
import "../film/film.css";

const byId = Object.fromEntries(scenes.map((s) => [s.id, s]));

export default function Home() {
  const root = useRef(null);
  useFilmMotion(root);
  return (
    <div ref={root} className="film">
      <Title scene={byId.title} />
      <ColdOpen scene={byId["cold-open"]} />
      <LearningFast scene={byId["learning-fast"]} />
      <Research scene={byId.research} />
      <Graduation scene={byId.graduation} />
      <NinetyNineX scene={byId["99x"]} />
      <ContactCenter scene={byId["contact-center"]} />
      <PlotTwist scene={byId["plot-twist"]} />
      <Now scene={byId.now} />
      <Credits />
    </div>
  );
}
