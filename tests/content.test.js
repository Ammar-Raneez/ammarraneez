import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { work, volunteering } from "../src/content.js";
import { journey } from "../src/journey.js";

const PERIOD = /^([A-Z][a-z]{2}) (\d{4}) - (?:([A-Z][a-z]{2}) (\d{4})|Present)$/;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

test("every work and volunteering period parses and runs forward", () => {
  for (const item of [...work, ...volunteering]) {
    const m = item.period.match(PERIOD);
    assert.ok(m, `bad period "${item.period}" on ${item.role}`);
    assert.ok(MONTHS.includes(m[1]), `bad month in "${item.period}"`);
    if (m[3]) {
      const start = Number(m[2]) * 12 + MONTHS.indexOf(m[1]);
      const end = Number(m[4]) * 12 + MONTHS.indexOf(m[3]);
      assert.ok(end >= start, `period ends before it starts: "${item.period}"`);
    }
  }
});

test("no em dash in any content or film file", () => {
  const files = ["content.js", "journey.js", "notes.js", "cases.js", "film/script.js"];
  for (const f of files) {
    let text;
    try {
      text = readFileSync(new URL(`../src/${f}`, import.meta.url), "utf8");
    } catch {
      continue; // film/script.js arrives with the film scenes
    }
    assert.ok(!text.includes("—"), `em dash in src/${f}`);
  }
});

test("film quotes are verbatim from the journey entry they cite", async () => {
  const { quotes } = await import("../src/film/script.js");
  for (const [key, q] of Object.entries(quotes)) {
    const entry = journey.completeJourney.find((e) => e.date === q.from);
    assert.ok(entry, `quote "${key}" cites missing journey date "${q.from}"`);
    assert.ok(entry.description.join(" ").includes(q.text), `quote "${key}" is not verbatim from ${q.from}`);
  }
});

test("journey chapters start at real entry dates, in order", async () => {
  const { chapters } = await import("../src/film/script.js");
  const dates = journey.completeJourney.map((e) => e.date);
  let last = -1;
  for (const c of chapters) {
    const at = dates.indexOf(c.from);
    assert.ok(at > last, `chapter "${c.title}" starts at "${c.from}", which is missing or out of order`);
    last = at;
  }
  assert.equal(chapters[0].from, dates[0]);
});
