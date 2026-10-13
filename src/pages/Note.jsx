import { useRef } from "react";
import NotFound from "./NotFound.jsx";
import { usePageMotion } from "../motion.js";
import { formatDate, useDocumentTitle } from "../pageMeta.js";
import { notes } from "../notes.js";
import { socials } from "../content.js";
import "./notes.css";

const linkedin = socials.find((s) => s.name === "LinkedIn").link;

export default function Note({ slug }) {
  const root = useRef(null);
  const index = notes.findIndex((n) => n.slug === slug);
  const note = notes[index];
  usePageMotion(root);
  useDocumentTitle(note?.title);

  if (!note) return <NotFound />;
  const next = notes[(index + 1) % notes.length];

  return (
    <article ref={root} className="page article" data-era="paper">
      <header className="article__head">
        <p className="kicker">
          <b>Note</b> · <time dateTime={note.date}>{formatDate(note.date)}</time>
        </p>
        <h1 className="big article__title">{note.title}</h1>
      </header>

      <div className="article__body prose">
        {note.body.map((block, i) =>
          Array.isArray(block) ? (
            <ul key={i}>
              {block.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p key={i}>{block}</p>
          ),
        )}
      </div>

      <footer className="article__foot">
        <p className="links">
          <a href={linkedin} target="_blank" rel="noreferrer">
            First published on LinkedIn
          </a>
          <a href="/notes">All notes</a>
        </p>
        {next !== note && (
          <a className="article__next" href={`/notes/${next.slug}`}>
            <span className="kicker">Next note</span>
            <span className="article__next-title">{next.title}</span>
          </a>
        )}
      </footer>
    </article>
  );
}
