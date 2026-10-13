import { teaching } from "../../content.js";
import { quotes } from "../script.js";
import Scene from "./Scene.jsx";

const [before, after] = quotes.twist.text.split("65%");

export default function PlotTwist({ scene }) {
  return (
    <Scene scene={scene} pin={false}>
      <p className="kicker">
        {teaching.since} · <b>Plot twist</b>
      </p>
      <p className="twist">
        {before}
        <s>65%</s>
        {after}.
      </p>
      <div className="duo">
        <div>
          <span className="kicker">Since {teaching.since}</span>
          <strong>{teaching.role}, IIT</strong>
          <span>{teaching.subjects[0]}, and a seat on the viva panel.</span>
        </div>
        <div>
          <span className="kicker">Sep 2025</span>
          <strong>AWS Community Day 🏆</strong>
          <span>Won the quiz. “{quotes.awsQuiz.text}”</span>
        </div>
      </div>
    </Scene>
  );
}
