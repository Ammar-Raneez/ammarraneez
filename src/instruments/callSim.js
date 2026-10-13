// Toy version of the SoftSora real-time contact center path. Timings are random within a
// made-up range and always labelled "Simulated"; caller lines are labelled "Sample".
import { cases } from "../cases.js";

export const BUDGET_MS = 2000;

// The pipeline stages are the real component map from the ai-contact-center case study.
export const STAGES = cases.find((c) => c.slug === "ai-contact-center").diagram.stages;

export const SAMPLE_CALLS = [
  {
    said: "Hi, I moved last week and need my parcels to go to the new place.",
    fuzzy: "Sorry, I can't help with lost parcels.",
    semantic: "Sure, I can update your delivery address. What's the new one?",
  },
  {
    said: "My card got charged twice for the same thing.",
    fuzzy: "Your card balance is shown in the app.",
    semantic: "Let me check that duplicate charge and start a refund for you.",
  },
  {
    said: "Can someone call me back after six? I'm in meetings till then.",
    fuzzy: "Our opening hours are nine to five.",
    semantic: "Done, I've booked a callback for after 6 pm.",
  },
];

// Worst case 600 + 680 + 440 = 1720 ms, so every simulated call fits the budget.
export function planTimings(random = Math.random) {
  return [380 + random() * 220, 420 + random() * 260, 260 + random() * 180].map(Math.round);
}
