import Hud from "./components/Hud.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Journey from "./pages/Journey.jsx";
import NotesIndex from "./pages/NotesIndex.jsx";
import Note from "./pages/Note.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import NotFound from "./pages/NotFound.jsx";

// A handful of pages does not need a router: Vercel rewrites every path to index.html.
const routes = [
  [/^\/$/, Home],
  [/^\/journey$/, Journey],
  [/^\/notes$/, NotesIndex],
  [/^\/notes\/([\w-]+)$/, Note],
  [/^\/work\/([\w-]+)$/, CaseStudy],
];

function resolve(path) {
  for (const [pattern, Page] of routes) {
    const match = path.match(pattern);
    if (match) return [Page, match[1]];
  }
  return [NotFound];
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const [Page, slug] = resolve(path);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Hud film={Page === Home} path={path} />
      <main id="main">
        <Page slug={slug} />
      </main>
      <Footer />
    </>
  );
}
