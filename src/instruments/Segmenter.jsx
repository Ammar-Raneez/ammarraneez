import { useEffect, useMemo, useRef, useState } from "react";
import Screen from "./Screen.jsx";
import { W, H, makeSample, blur, predict, iou } from "./segment.js";

const HIT = [255, 59, 48];
const FALSE = [122, 32, 28];
const MISSED = [70, 70, 68];
const EMPTY = [20, 20, 19];
const rgb = (c) => `rgb(${c.join(",")})`;

function paint(canvas, colour) {
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  const img = ctx.createImageData(W, H);
  for (let i = 0; i < W * H; i++) img.data.set([...colour(i), 255], i * 4);
  ctx.putImageData(img, 0, 0);
}

export default function Segmenter() {
  const input = useRef(null);
  const output = useRef(null);
  const [sample, setSample] = useState(() => makeSample());
  const [threshold, setThreshold] = useState(30);
  const [smoothing, setSmoothing] = useState(0);
  const pred = useMemo(() => predict(blur(sample.noisy, smoothing), threshold / 100), [sample, threshold, smoothing]);
  const score = iou(pred, sample.truth);

  useEffect(() => {
    paint(input.current, (i) => {
      const v = sample.noisy[i] * 235;
      return [v, v * 0.97, v * 0.9];
    });
  }, [sample]);
  useEffect(() => {
    paint(output.current, (i) => (pred[i] && sample.truth[i] ? HIT : pred[i] ? FALSE : sample.truth[i] ? MISSED : EMPTY));
  }, [pred, sample]);

  return (
    <Screen
      title="Segmenter"
      source="After the microscopy segmentation work at 99x"
      label={
        <>
          <b>Illustration</b>, synthetic sample, thresholding instead of a CNN
        </>
      }
      controls={
        <>
          <label className="knob">
            Threshold
            <input type="range" min="20" max="80" value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} />
          </label>
          <label className="knob">
            Smoothing
            <input type="range" min="0" max="4" value={smoothing} onChange={(e) => setSmoothing(Number(e.target.value))} />
          </label>
          <button className="btn" type="button" onClick={() => setSample(makeSample())}>
            New sample
          </button>
        </>
      }
      note="Here you're the model: pick a threshold, add pre-labeling smoothing, and chase 85% IoU."
    >
      <div className="seg-grid">
        <figure>
          <canvas ref={input} role="img" aria-label="Noisy synthetic micrograph" />
          <figcaption className="kicker">Input, noisy sample</figcaption>
        </figure>
        <figure>
          <canvas ref={output} role="img" aria-label="Predicted mask compared with the ground truth" />
          <figcaption className="kicker">Your mask vs ground truth</figcaption>
        </figure>
        <div className="iou">
          <span className="kicker">IoU</span>
          <span className={`iou__value${score >= 0.85 ? " is-pass" : ""}`} aria-live="polite">
            {Math.round(score * 100)}%
          </span>
          <span className="iou__meter" aria-hidden="true">
            <span style={{ width: `${score * 100}%` }} />
            <i />
          </span>
          <span className="kicker">Red tick: the 85% line</span>
          <ul className="legend kicker">
            <li>
              <i style={{ background: rgb(HIT) }} />
              Hit
            </li>
            <li>
              <i style={{ background: rgb(FALSE) }} />
              False grain
            </li>
            <li>
              <i style={{ background: rgb(MISSED) }} />
              Missed
            </li>
          </ul>
        </div>
      </div>
    </Screen>
  );
}
