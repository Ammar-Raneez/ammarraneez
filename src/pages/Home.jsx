import { useRef } from "react";
import { scenes } from "../film/script.js";
import { useFilmMotion } from "../film/filmMotion.js";
import Title from "../film/scenes/Title.jsx";
import ColdOpen from "../film/scenes/ColdOpen.jsx";
import LearningFast from "../film/scenes/LearningFast.jsx";
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
    </div>
  );
}
