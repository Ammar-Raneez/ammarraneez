import { useMemo, useRef, useState } from "react";
import Screen from "./Screen.jsx";
import { useCanvas } from "./useCanvas.js";
import { createForecaster, PAST, AHEAD } from "./forecast.js";

const token = (el, name) => getComputedStyle(el).getPropertyValue(name).trim();
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Forecaster() {
  const canvas = useRef(null);
  const model = useMemo(() => createForecaster(), []);
  const [readout, setReadout] = useState(model.state);
  const [noise, setNoise] = useState(35);

  const draw = (ctx, w, h) => {
    const el = canvas.current;
    const [line, text, muted, trace] = ["--screen-line", "--screen-text", "--screen-muted", "--trace"].map((n) => token(el, n));
    const { series, band } = model;
    const { level } = model.state();
    const padT = 54, padB = 22, n = PAST + AHEAD;
    const x = (i) => (i / (n - 1)) * w;
    const lo = Math.min(...series, level - band(AHEAD));
    const hi = Math.max(...series, level + band(AHEAD));
    const span = Math.max(2, hi - lo) * 1.15, mid = (hi + lo) / 2;
    const y = (v) => padT + (h - padT - padB) * (0.5 - (v - mid) / span);

    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = line;
    ctx.lineWidth = 1;
    for (let g = 0; g <= 4; g++) {
      const gy = Math.round(padT + ((h - padT - padB) * g) / 4) + 0.5;
      ctx.beginPath();
      ctx.moveTo(0, gy);
      ctx.lineTo(w, gy);
      ctx.stroke();
    }
    const nowX = Math.round(x(PAST - 1)) + 0.5;
    ctx.setLineDash([3, 4]);
    ctx.beginPath();
    ctx.moveTo(nowX, padT - 10);
    ctx.lineTo(nowX, h - padB + 6);
    ctx.stroke();
    ctx.setLineDash([]);

    // Forecast band and median.
    ctx.beginPath();
    for (let k = 0; k <= AHEAD; k++) ctx.lineTo(x(PAST - 1 + k), y(level + band(k)));
    for (let k = AHEAD; k >= 0; k--) ctx.lineTo(x(PAST - 1 + k), y(level - band(k)));
    ctx.closePath();
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = trace;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = trace;
    ctx.setLineDash([6, 5]);
    ctx.beginPath();
    ctx.moveTo(nowX, y(level));
    ctx.lineTo(x(n - 1), y(level));
    ctx.stroke();
    ctx.setLineDash([]);

    // Series and the "now" dot.
    ctx.strokeStyle = text;
    ctx.lineWidth = 1.6;
    ctx.lineJoin = "round";
    ctx.beginPath();
    series.forEach((v, i) => (i ? ctx.lineTo(x(i), y(v)) : ctx.moveTo(x(i), y(v))));
    ctx.stroke();
    ctx.fillStyle = trace;
    ctx.beginPath();
    ctx.arc(nowX, y(series[series.length - 1]), 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = "500 11px 'IBM Plex Mono', monospace";
    ctx.fillStyle = muted;
    ctx.fillText("PAST", 8, h - 7);
    ctx.textAlign = "right";
    ctx.fillText("NOW", nowX - 6, h - 7);
    if (w - nowX > 80) ctx.fillText("FORECAST", w - 8, h - 7);
    ctx.textAlign = "left";
  };

  const sync = () => setReadout(model.state());
  const redraw = useCanvas(canvas, {
    height: () => (innerWidth < 860 ? 260 : 340),
    draw,
    tick: () => {
      model.step();
      sync();
    },
  });
  // Under reduced motion there is no loop, so each action advances the series itself.
  const act = (fn) => () => {
    fn();
    if (reduced()) for (let i = 0; i < 24; i++) model.step();
    sync();
    redraw();
  };
  const shock = act(() => model.shock());

  return (
    <Screen
      title="Forecaster"
      source={`After my LTS network, IEEE CCWC 2023`}
      label={
        <>
          <b>Illustration</b>, not the published model
        </>
      }
      controls={
        <>
          <button className="btn btn--hot" type="button" onClick={shock}>
            Inject shock
          </button>
          <button className="btn" type="button" onClick={act(() => model.calm())}>
            Calm it down
          </button>
          <label className="knob">
            Noise
            <input
              type="range"
              min="0"
              max="100"
              value={noise}
              onChange={(e) => {
                setNoise(e.target.value);
                model.setNoise(e.target.value / 100);
              }}
            />
          </label>
        </>
      }
      note="The idea behind LTS: give the network more flexibility and faster adaptation, so it copes with noisy data. Here, a shock shrinks the time constant τ so the forecast adapts faster and the band widens, then both relax as things settle."
    >
      <canvas
        ref={canvas}
        onClick={shock}
        role="img"
        aria-label="A noisy time series with an 80% forecast band. Use the buttons below to disturb it."
      />
      <p className="sr-only" aria-live="polite">
        Forecaster status: {readout.status}
      </p>
      <p className="readout" aria-hidden="true">
        <span>
          Volatility <b>{readout.vol.toFixed(2)}</b>
        </span>
        <span>
          Time constant <span className="greek">τ</span> <b className="hot">{readout.tau.toFixed(1)}</b>
        </span>
        <span>
          Band 80% <b>±{model.band(AHEAD).toFixed(1)}</b>
        </span>
        <span>
          Status <b>{readout.status}</b>
        </span>
        <span className="readout__hint">Click the screen to shock it</span>
      </p>
    </Screen>
  );
}
