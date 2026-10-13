import { test } from "node:test";
import assert from "node:assert/strict";
import { seeded } from "../src/instruments/random.js";
import { createForecaster, PAST, AHEAD } from "../src/instruments/forecast.js";

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
