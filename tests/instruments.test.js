import { test } from "node:test";
import assert from "node:assert/strict";
import { seeded } from "../src/instruments/random.js";
import { createForecaster, PAST, AHEAD } from "../src/instruments/forecast.js";
import { W, H, makeSample, blur, predict, iou } from "../src/instruments/segment.js";

test("seeded random is deterministic and in range", () => {
  const a = seeded(42), b = seeded(42);
  for (let i = 0; i < 100; i++) {
    const x = a();
    assert.equal(x, b());
    assert.ok(x >= 0 && x < 1);
  }
});

test("forecaster starts full and steady", () => {
  const f = createForecaster({ random: seeded(1) });
  assert.equal(f.series.length, PAST);
  assert.equal(f.state().status, "steady");
});

test("a shock widens the band and shrinks tau, calm brings them back", () => {
  const f = createForecaster({ random: seeded(7) });
  for (let i = 0; i < 200; i++) f.step();
  const before = { band: f.band(AHEAD), tau: f.state().tau };
  f.shock();
  for (let i = 0; i < 8; i++) f.step();
  assert.ok(f.band(AHEAD) > before.band * 1.5, "band should widen after a shock");
  assert.ok(f.state().tau < before.tau, "tau should drop after a shock");
  f.calm();
  for (let i = 0; i < 400; i++) f.step();
  assert.ok(f.band(AHEAD) < before.band, "calm should narrow the band below its pre-shock width");
  assert.equal(f.state().status, "steady");
});

test("series length stays at PAST", () => {
  const f = createForecaster({ random: seeded(3) });
  for (let i = 0; i < 1000; i++) f.step();
  assert.equal(f.series.length, PAST);
});

test("iou on hand-made masks", () => {
  const a = Uint8Array.from([1, 1, 0, 0]);
  assert.equal(iou(a, a), 1);
  assert.equal(iou(a, Uint8Array.from([0, 0, 1, 1])), 0);
  assert.equal(iou(a, Uint8Array.from([1, 0, 1, 0])), 1 / 3);
  assert.equal(iou(new Uint8Array(4), new Uint8Array(4)), 0);
});

test("blur with radius 0 returns the same field", () => {
  const { noisy } = makeSample(seeded(5));
  assert.equal(blur(noisy, 0), noisy);
  assert.equal(blur(noisy, 2).length, W * H);
});

test("the segmentation game is winnable but not by default", () => {
  for (const seed of [1, 2, 3]) {
    const { truth, noisy } = makeSample(seeded(seed));
    let best = 0;
    for (let r = 0; r <= 4; r++) {
      const field = blur(noisy, r);
      for (let t = 20; t <= 80; t++) best = Math.max(best, iou(predict(field, t / 100), truth));
    }
    assert.ok(best >= 0.85, `seed ${seed}: best IoU ${best.toFixed(3)} should reach 85%`);
    assert.ok(iou(predict(noisy, 0.3), truth) < 0.85, `seed ${seed}: the default settings should not already win`);
  }
});
