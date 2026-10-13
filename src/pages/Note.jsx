import { useRef } from "react";
import NotFound from "./NotFound.jsx";
import { usePageMotion } from "../motion.js";
import { formatDate, useDocumentTitle } from "../pageMeta.js";
import { notes } from "../notes.js";
import { socials } from "../content.js";

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
    <article ref={root} className="page article">
      <header className="page__intro">
        <p className="label" data-intro>
          <span className="label__index">Note</span>
          <time dateTime={note.date}>{formatDate(note.date)}</time>
        </p>
        <h1 className="article__title" data-intro>
          {note.title}
        </h1>
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

      <footer className="article__footer">
        <p className="muted">
          First published on{" "}
          <a className="arrow-link" href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
        {next !== note && (
          <a className="article__next" href={`/notes/${next.slug}`}>
            <span className="label">Next note</span>
            <span className="article__next-title">{next.title}</span>
          </a>
        )}
      </footer>
    </article>
  );
}
