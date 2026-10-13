// Monochrome brand marks from Simple Icons, tinted with currentColor via CSS mask.

const files = import.meta.glob("../assets/logos/*.svg", { eager: true, query: "?url", import: "default" });

const slugs = {
  "scikit-learn": "scikitlearn",
  "Vue": "vuedotjs",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  "DynamoDB": "amazondynamodb",
  "AWS": "amazonwebservices",
  "GCP": "googlecloud",
  "Azure": "microsoftazure",
  "Lambda": "awslambda",
  "Play": "playframework",
  "VS Code": "visualstudiocode",
  "React Native": "react",
  "Java": "openjdk",
};

function urlFor(name) {
  const slug = slugs[name] ?? name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return files[`../assets/logos/${slug}.svg`];
}

export default function Logo({ name }) {
  const url = urlFor(name);
  if (!url) return null;
  return <span className="logo" style={{ "--logo": `url("${url}")` }} aria-hidden="true" />;
}
