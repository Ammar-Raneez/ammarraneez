import { notes } from "../notes.js";
import { formatDate } from "../pageMeta.js";

export default function NoteList({ limit }) {
  return (
    <ol className="notes">
      {notes.slice(0, limit).map((note) => (
        <li key={note.slug} data-reveal>
          <a className="note-row" href={`/notes/${note.slug}`}>
            <time className="note-row__date" dateTime={note.date}>
              {formatDate(note.date)}
            </time>
            <span className="note-row__title">{note.title}</span>
            <span className="note-row__summary">{note.summary}</span>
            <span className="note-row__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </li>
      ))}
    </ol>
  );
}
