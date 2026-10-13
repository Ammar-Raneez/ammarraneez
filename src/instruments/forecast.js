// A toy "liquid" forecaster for illustration, not the published LTS model: an exponentially
// weighted level and volatility whose time constant tau shrinks when the last error is a
// surprise (adapt fast) and relaxes back toward 12 when things are calm.
import { gaussian } from "./random.js";

export const PAST = 160;
export const AHEAD = 36;
const SHOCK_STEPS = 22;

export function createForecaster({ random = Math.random, noise = 0.35 } = {}) {
  const normal = gaussian(random);
  const series = [];
  let level = 0, vol = 0.6, tau = 8, shockLeft = 0, calm = false;

  function next() {
    const prev = series.length ? series[series.length - 1] : 0;
    const base = noise * 1.6 + 0.15;
    const sigma = (calm ? 0.12 : base) * (shockLeft > 0 ? 3.2 : 1);
    if (shockLeft > 0) shockLeft--;
    return prev * 0.985 + sigma * normal();
  }

  // Volatility tracks one-step changes; only changes beyond 1.5 sigma count as a surprise,
  // so ordinary noise lets tau relax to steady while a shock shrinks it.
  function learn(x, prev) {
    const change = x - prev;
    const surprise = Math.min(4, Math.max(0, Math.abs(change) / (vol + 1e-6) - 1.5));
    tau = Math.max(1.5, Math.min(12, tau + (12 - tau) * 0.04 - surprise * 3 + 0.1));
    const a = 1 / tau;
    level += a * (x - level);
    vol = Math.sqrt((1 - a) * vol * vol + a * change * change);
  }

  function step() {
    const prev = series.length ? series[series.length - 1] : 0;
    const x = next();
    series.push(x);
    learn(x, prev);
    if (series.length > PAST) series.shift();
  }

  for (let i = 0; i < PAST; i++) step();

  return {
    series,
    step,
    shock() {
      shockLeft = SHOCK_STEPS;
      calm = false;
    },
    calm() {
      calm = true;
      shockLeft = 0;
    },
    setNoise(v) {
      noise = Math.min(1, Math.max(0, v));
      calm = false;
    },
    // 80% band, widening sub-linearly with horizon k.
    band: (k) => 1.28 * vol * Math.max(k, 1e-4) ** 0.4,
    state: () => ({ level, vol, tau, status: shockLeft > 0 ? "shock" : tau < 6 ? "adapting" : "steady" }),
  };
}
