import { useEffect, useRef } from "react";

// A live, simulated volatile series with a forecast band, drawn on canvas.
// It illustrates the kind of data the LTS network models. It is not real data.

const PAST = 150; // observed points in view
const AHEAD = 36; // forecast horizon
const TICK_MS = 650; // one new observation per tick

function rng(seed) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
}

function makeSeries(seed) {
  const rand = rng(seed);
  const gauss = () => Math.sqrt(-2 * Math.log(rand() || 1e-9)) * Math.cos(2 * Math.PI * rand());
  let x = 0;
  let vol = 0.6;
  // Volatility clusters: calm stretches broken by shocks.
  return () => {
    vol = 0.94 * vol + 0.06 * 0.6 + (rand() < 0.03 ? 1.6 * rand() : 0);
    x += 0.04 + vol * gauss() - 0.015 * x;
    return x;
  };
}

function forecast(points) {
  // Damped trend from the recent slope; the band widens with sqrt(horizon).
  const recent = points.slice(-24);
  const slope = (recent.at(-1) - recent[0]) / (recent.length - 1);
  const diffs = recent.slice(1).map((v, i) => v - recent[i]);
  const sigma = Math.sqrt(diffs.reduce((s, d) => s + (d - slope) ** 2, 0) / diffs.length) || 0.5;
  const last = points.at(-1);
  const out = [];
  let level = last;
  let trend = slope;
  for (let h = 1; h <= AHEAD; h++) {
    trend *= 0.93;
    level += trend;
    // ponytail: sqrt-ish growth with a 0.4 exponent keeps the band readable; swap in real model intervals if this ever shows real data.
    const spread = 1.28 * sigma * h ** 0.4;
    out.push({ mid: level, lo: level - spread, hi: level + spread });
  }
  return out;
}

function readTokens(el) {
  const css = getComputedStyle(el);
  const v = (name) => css.getPropertyValue(name).trim();
  return { text: v("--text"), bg: v("--bg"), accent: v("--accent"), border: v("--border"), muted: v("--muted"), mono: v("--mono") };
}

export default function ForecastFigure() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const next = makeSeries(20230501);
    const series = Array.from({ length: PAST }, next);

    let width = 0;
    let height = 0;
    let lastTick = performance.now();
    let introStart = performance.now();
    let visible = true;
    let frame = 0;
    let tokens = readTokens(canvas);
    const range = { min: null, max: null };
    let pointerX = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now) => {
      const intro = still ? 1 : Math.min(1, (now - introStart) / 1800);
      const ease = 1 - (1 - intro) ** 3;
      const shift = still ? 0 : Math.min(1, (now - lastTick) / TICK_MS);
      const band = forecast(series);

      // Ease the y-range toward its target so new extremes don't make the chart jump.
      const all = series.concat(band.flatMap((b) => [b.lo, b.hi]));
      const k = still || range.min === null ? 1 : 0.06;
      range.min = range.min === null ? Math.min(...all) : range.min + (Math.min(...all) - range.min) * k;
      range.max = range.max === null ? Math.max(...all) : range.max + (Math.max(...all) - range.max) * k;
      const { min, max } = range;
      const pad = 18;
      const step = width / (PAST + AHEAD - 1);
      const x = (i) => (i - shift) * step;
      const y = (v) => pad + (1 - (v - min) / (max - min || 1)) * (height - pad * 2 - 14);
      const nowX = x(PAST - 1);

      ctx.clearRect(0, 0, width, height);

      // Baseline grid.
      ctx.strokeStyle = tokens.border;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let g = 0; g <= 3; g++) {
        const gy = Math.round(pad + (g / 3) * (height - pad * 2 - 14)) + 0.5;
        ctx.moveTo(0, gy);
        ctx.lineTo(width, gy);
      }
      ctx.stroke();

      // Observed series, revealed left to right during the intro.
      const shown = Math.max(2, Math.floor(PAST * ease));
      ctx.strokeStyle = tokens.text;
      ctx.lineWidth = 1.5;
      ctx.lineJoin = "round";
      ctx.beginPath();
      for (let i = 0; i < shown; i++) {
        const px = x(i);
        i === 0 ? ctx.moveTo(px, y(series[i])) : ctx.lineTo(px, y(series[i]));
      }
      ctx.stroke();

      if (ease > 0.85) {
        // Clamp: canvas silently ignores globalAlpha > 1 (float error at ease = 1).
        const fade = Math.min(1, (ease - 0.85) / 0.15);
        ctx.globalAlpha = fade;

        // Forecast band.
        ctx.fillStyle = tokens.accent;
        ctx.globalAlpha *= 0.12;
        ctx.beginPath();
        ctx.moveTo(nowX, y(series.at(-1)));
        band.forEach((b, h) => ctx.lineTo(x(PAST + h), y(b.hi)));
        for (let h = AHEAD - 1; h >= 0; h--) ctx.lineTo(x(PAST + h), y(band[h].lo));
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = fade;

        // Forecast median.
        ctx.strokeStyle = tokens.accent;
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(nowX, y(series.at(-1)));
        band.forEach((b, h) => ctx.lineTo(x(PAST + h), y(b.mid)));
        ctx.stroke();

        // "Now" marker.
        ctx.strokeStyle = tokens.muted;
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 3]);
        ctx.beginPath();
        ctx.moveTo(Math.round(nowX) + 0.5, pad - 8);
        ctx.lineTo(Math.round(nowX) + 0.5, height - 14);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = tokens.accent;
        ctx.beginPath();
        ctx.arc(nowX, y(series.at(-1)), 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = tokens.muted;
        ctx.font = `11px ${tokens.mono}`;
        ctx.textBaseline = "bottom";
        ctx.fillText("now", Math.round(nowX) + 6, height);
        ctx.fillText(`t+${AHEAD}`, width - 30, height);
        ctx.fillText(`t-${PAST}`, 0, height);
        ctx.globalAlpha = 1;
      }

      // Hover readout over the observed series. Values are simulated, so only the step and a
      // unitless reading are shown.
      if (pointerX !== null && ease === 1) {
        const i = Math.max(0, Math.min(PAST - 1, Math.round(pointerX / step + shift)));
        const px = x(i);
        const py = y(series[i]);
        ctx.strokeStyle = tokens.text;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(Math.round(px) + 0.5, pad - 8);
        ctx.lineTo(Math.round(px) + 0.5, height - 14);
        ctx.stroke();
        ctx.fillStyle = tokens.text;
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fill();
        const label = `t-${PAST - 1 - i}  ${series[i].toFixed(2)}`;
        ctx.font = `11px ${tokens.mono}`;
        ctx.textBaseline = "top";
        const w = ctx.measureText(label).width + 12;
        const lx = Math.min(width - w, Math.max(0, px + 8));
        ctx.fillStyle = tokens.bg;
        ctx.fillRect(lx, 0, w, 18);
        ctx.fillStyle = tokens.text;
        ctx.fillText(label, lx + 6, 4);
      }
    };

    const loop = (now) => {
      if (!still && now - lastTick >= TICK_MS) {
        series.push(next());
        series.shift();
        lastTick = now;
      }
      draw(now);
      if (visible && !still) frame = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !document.hidden;
      if (visible) start();
    });
    io.observe(canvas);

    // Repaint with the new palette when the theme flips.
    const mo = new MutationObserver(() => {
      tokens = readTokens(canvas);
      draw(performance.now());
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const onVisibility = () => {
      visible = !document.hidden;
      if (visible) {
        lastTick = performance.now();
        start();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onPointer = (event) => {
      pointerX = event.type === "pointerleave" ? null : event.offsetX;
      if (still) draw(performance.now());
    };
    canvas.addEventListener("pointermove", onPointer);
    canvas.addEventListener("pointerleave", onPointer);

    resize();
    introStart = performance.now();
    start();

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("pointerleave", onPointer);
    };
  }, []);

  return (
    <figure className="forecast">
      <canvas
        ref={canvasRef}
        className="forecast__canvas"
        role="img"
        aria-label="A line chart of a volatile series that updates live, with a dashed forecast and a shaded uncertainty band that widens into the future."
      />
      <figcaption className="forecast__caption">
        <span className="label">Fig. 1</span>
        <span>
          A simulated volatile series and a forecast with its 80% band. Illustrative, not real data.
        </span>
        <span className="forecast__legend" aria-hidden="true">
          <i className="key key--observed" /> Observed
          <i className="key key--forecast" /> Forecast
        </span>
      </figcaption>
    </figure>
  );
}
