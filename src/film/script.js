// Framing copy for the film. Facts come from the content files; every quote here must be
// verbatim from the journey entry it cites (tests/content.test.js enforces this).

export const scenes = [
  { id: "title", num: "00", era: "night", title: "Title", year: "2019 - Now" },
  { id: "cold-open", num: "01", era: "night", title: "Cold open", year: "2019" },
  { id: "learning-fast", num: "02", era: "paper", title: "Learning fast", year: "2019 - 2021" },
  { id: "research", num: "03", era: "forest", title: "Research", year: "2022 - 2023" },
  { id: "graduation", num: "04", era: "gold", title: "Graduation", year: "Nov 2023" },
  { id: "99x", num: "05", era: "paper", title: "99x", year: "2021 - 2025" },
  { id: "contact-center", num: "06", era: "night", title: "The contact center", year: "2025 - 2026" },
  { id: "plot-twist", num: "07", era: "red", title: "Plot twist", year: "2023 - Now" },
  { id: "now", num: "08", era: "night", title: "Now", year: "Now" },
];

export const quotes = {
  givingUp: {
    from: "Dec 2019",
    text: "As someone who had previously experienced academic success, this score was disheartening, and I contemplated the idea of giving up.",
  },
  morningTillNight: {
    from: "May - Sep 2020",
    text: "From morning till night, I immersed myself in my laptop, embarking on a relentless pursuit of knowledge.",
  },
  firstHtml: { from: "Jul 2019", text: "I found it fascinating to see the immediate results" },
  java: { from: "Jan 2020", text: "made a world of a difference" },
  certificates: { from: "May - Sep 2020", text: "100+ certificates, showcasing the breadth and depth of my learning journey" },
  daring: { from: "Nov 2022 - April 2023", text: "for some unknown reason, I made the daring choice to take it a step further." },
  fyp: { from: "Jul 2024", text: "time series forecasting all over again. Apparently my FYP was not done with me 😝" },
  longNights: { from: "2025", text: "This was the season of crazy long nights, and more than a few overnights at the office 🥲" },
  twist: { from: "Jul 2023", text: "Remember the guy who scored 65% on his first Python assignment? He now marks assignments" },
  awsQuiz: { from: "Sep 2025", text: "All those late nights in the AWS console finally paid off in a very unexpected way 😝" },
  gaps: {
    from: "Now",
    text: "it is not about being exceptional. It is about not waiting for the perfect block of time, and using the gaps.",
  },
  longWay: { from: "Now", text: "I still have a long way to go :)" },
};

// Journey page chapters: each starts at an existing entry date and runs until the next one.
export const chapters = [
  { from: "Jun 2019", era: "night", title: "Cold open" },
  { from: "Jan 2020", era: "paper", title: "Learning fast" },
  { from: "Jul 2022", era: "forest", title: "Research" },
  { from: "Jul 2023", era: "red", title: "Plot twist" },
  { from: "Oct - Nov 2023", era: "gold", title: "Graduation" },
  { from: "Jul 2024", era: "paper", title: "99x" },
  { from: "May - Jun 2025", era: "night", title: "SoftSora" },
];

// Capitalises a mid-sentence quote for display, without changing the quoted words.
export const sentence = (text) => text[0].toUpperCase() + text.slice(1);
