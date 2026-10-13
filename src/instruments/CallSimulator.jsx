import { useEffect, useRef, useState } from "react";
import Screen from "./Screen.jsx";
import { BUDGET_MS, STAGES, SAMPLE_CALLS, planTimings } from "./callSim.js";

const IDLE = {
  active: -1,
  ms: [0, 0, 0],
  plan: [1, 1, 1],
  said: 'Press "Place a call" to start.',
  answer: "",
  replied: false,
  mode: "semantic",
};
const wait = (ms) => new Promise((r) => setTimeout(r, matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : ms));

export default function CallSimulator() {
  const [mode, setMode] = useState("semantic");
  const [run, setRun] = useState(IDLE);
  const busy = useRef(false);
  const which = useRef(0);
  const alive = useRef(true);
  useEffect(() => {
    alive.current = true;
    return () => (alive.current = false);
  }, []);

  async function place() {
    if (busy.current) return; // one call at a time
    busy.current = true;
    const call = SAMPLE_CALLS[which.current++ % SAMPLE_CALLS.length];
    const usedMode = mode; // a mode change mid-call applies to the next call
    const plan = planTimings();
    const words = call.said.split(" ");
    const reply = call[usedMode].split(" ");
    const ms = [0, 0, 0];
    setRun({ ...IDLE, said: "", active: 0, mode: usedMode, plan });
    for (let i = 0; i < 3; i++) {
      const steps = Math.max(1, Math.round(plan[i] / 40));
      for (let s = 1; s <= steps; s++) {
        await wait(plan[i] / steps);
        if (!alive.current) return;
        ms[i] = Math.round((plan[i] * s) / steps);
        const p = s / steps;
        setRun((r) => ({
          ...r,
          active: i,
          ms: [...ms],
          said: i === 0 ? words.slice(0, Math.ceil(words.length * p)).join(" ") : call.said,
          answer: i === 2 ? reply.slice(0, Math.ceil(reply.length * p)).join(" ") : "",
          replied: i === 2,
        }));
      }
    }
    setRun((r) => ({ ...r, active: 3 }));
    busy.current = false;
  }

  const running = run.active >= 0 && run.active < 3;
  const total = run.ms.reduce((a, b) => a + b, 0);
  return (
    <Screen
      title="Call the AI"
      source="After the real-time AI contact center at SoftSora"
      label={
        <>
          <b>Simulated</b> timings, <b>sample</b> calls
        </>
      }
      controls={
        <>
          <button className="btn btn--hot" type="button" onClick={place} aria-disabled={running}>
            {running ? "On a call" : "Place a call"}
          </button>
          <div className="seg-switch" role="group" aria-label="Matching method">
            {["fuzzy", "semantic"].map((m) => (
              <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}>
                {m === "fuzzy" ? "Fuzzy match" : "Semantic"}
              </button>
            ))}
          </div>
        </>
      }
      note="Swapping fuzzy matching for semantic similarity on Bedrock embeddings raised response relevance by 30%+. Flip the switch and call again to see why."
    >
      <div className="pipe">
        {STAGES.map((stage, i) => (
          <div key={stage.title} className={`pipe__stage${run.active === i ? " is-on" : run.active > i ? " is-done" : ""}`}>
            <span className="ms">{run.ms[i]} ms</span>
            <h3>{stage.title}</h3>
            <ul>
              {stage.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span className="fill" style={{ width: `${Math.min(100, (run.ms[i] / run.plan[i]) * 100)}%` }} />
          </div>
        ))}
      </div>
      <div className="convo">
        <p className="bubble">
          <span className="kicker">Caller, sample</span>
          {run.said}
        </p>
        <p className={`bubble bubble--ai${run.replied ? " is-in" : ""}`}>
          <span className="kicker">{run.mode === "fuzzy" ? "Agent, fuzzy match" : "Agent, semantic match"}</span>
          {run.answer || (running ? <span className="caret" /> : "Waiting for audio.")}
        </p>
      </div>
      <div className="budget">
        <div className="budget__track">
          {run.ms.map((m, i) => (
            <span key={i} className="budget__seg" style={{ width: `${(m / BUDGET_MS) * 100}%` }} />
          ))}
          <span className="budget__limit" />
        </div>
        <p className="budget__legend kicker">
          <span>Latency budget</span>
          <span>
            <b>{total}</b> / {BUDGET_MS} ms
          </span>
        </p>
      </div>
    </Screen>
  );
}
