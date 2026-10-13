// Post-build: give every route its own index.html with the right <title>, description,
// canonical URL and Open Graph tags, and write sitemap.xml.
// Link-preview crawlers (LinkedIn, Slack, WhatsApp) don't run JavaScript, so without this
// every shared link would show the home page's card. Vercel serves these files before
// falling back to the SPA rewrite.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { notes } from "../src/notes.js";
import { cases } from "../src/cases.js";

const SITE = "https://ammarraneez.vercel.app";
const OUT = new URL("../build/", import.meta.url);
const template = readFileSync(new URL("index.html", OUT), "utf8");
const today = new Date().toISOString().slice(0, 10);

const routes = [
  { path: "/" },
  {
    path: "/journey",
    title: "Journey | Ammar Raneez",
    description: "From a 65% on my first Python assignment in 2019 to head of engineering: the long version.",
  },
  {
    path: "/notes",
    title: "Notes | Ammar Raneez",
    description: "Short essays on engineering, AI and the way we work.",
  },
  ...notes.map((n) => ({
    path: `/notes/${n.slug}`,
    title: `${n.title} | Ammar Raneez`,
    description: n.summary,
    type: "article",
    lastmod: n.date,
  })),
  ...cases.map((c) => ({
    path: `/work/${c.slug}`,
    title: `${c.title} | Ammar Raneez`,
    description: c.summary,
    type: "article",
  })),
];

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"[\\s\\S]*?content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`index.html is missing <meta ${attr}="${key}">`);
  return html.replace(re, `$1${escape(value)}$2`);
}

for (const route of routes) {
  if (route.path === "/") continue;
  const url = `${SITE}${route.path}`;
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(route.title)}</title>`);
  html = setMeta(html, "name", "description", route.description);
  html = setMeta(html, "property", "og:title", route.title);
  html = setMeta(html, "property", "og:description", route.description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:type", route.type ?? "website");
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

  // `/notes/no-time` -> build/notes/no-time.html, served extensionless via vercel.json `cleanUrls`.
  const file = new URL(`.${route.path}.html`, OUT);
  mkdirSync(new URL(".", file), { recursive: true });
  writeFileSync(file, html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${SITE}${r.path}</loc><lastmod>${r.lastmod ?? today}</lastmod></url>`).join("\n")}
</urlset>
`;
writeFileSync(new URL("sitemap.xml", OUT), sitemap);

console.log(`prerender-meta: ${routes.length - 1} route pages and sitemap.xml written`);
