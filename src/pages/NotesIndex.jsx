import { useRef } from "react";
import NoteList from "../components/NoteList.jsx";
import { usePageMotion } from "../motion.js";
import { useDocumentTitle } from "../pageMeta.js";

export default function NotesIndex() {
  const root = useRef(null);
  usePageMotion(root);
  useDocumentTitle("Notes");

  return (
    <div ref={root} className="page">
      <header className="page__intro">
        <p className="label" data-intro>
          <span className="label__index">08</span> Notes
        </p>
        <h1 className="hero__title page__title">
          <span data-line>
            <span>Notes.</span>
          </span>
        </h1>
        <p className="lede" data-intro>
          Short essays on engineering, AI and the way we work. First published on LinkedIn.
        </p>
      </header>
      <div className="page__body">
        <NoteList />
      </div>
    </div>
  );
}
