import { quotes } from "../script.js";
import Scene from "./Scene.jsx";

export default function ColdOpen({ scene }) {
  return (
    <Scene scene={scene}>
      <div className="cold__intro">
        <p className="kicker">Jun 2019</p>
        <h2 className="big">
          <span className="line">
            <span>Chemistry, Physics</span>
          </span>
          <span className="line">
            <span>&amp; Math.</span>
          </span>
          <span className="line">
            <span>Not a single line</span>
          </span>
          <span className="line">
            <span>of code.</span>
          </span>
        </h2>
      </div>
      <div className="cold__mark">
        <p className="kicker">
          Dec 2019 · Programming Principles I · <b>first Python assignment</b>
        </p>
        <div className="score">
          <span className="score__num">65%</span>
          <svg className="pen" viewBox="0 0 600 300" preserveAspectRatio="none" aria-hidden="true">
            <path pathLength="1" d="M318 22 C470 12 588 70 584 152 C580 242 430 290 280 286 C122 282 14 232 18 146 C22 70 142 20 342 34" />
          </svg>
        </div>
        <blockquote className="quote">
          “{quotes.givingUp.text}”<cite>Ammar, on his first Python assignment</cite>
        </blockquote>
      </div>
    </Scene>
  );
}
