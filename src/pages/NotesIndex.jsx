import { useRef } from "react";
import NoteList from "../components/NoteList.jsx";
import { usePageMotion } from "../motion.js";
import { useDocumentTitle } from "../pageMeta.js";
import "./notes.css";

export default function NotesIndex() {
  const root = useRef(null);
  usePageMotion(root);
  useDocumentTitle("Notes");

  return (
    <div ref={root} className="page notes-page" data-era="paper">
      <header className="notes-page__intro">
        <p className="kicker">
          <b>Notes</b> · First published on LinkedIn
        </p>
        <h1 className="mega">Notes.</h1>
        <p className="quote">Short essays on engineering, AI and the way we work.</p>
      </header>
      <NoteList />
    </div>
  );
}
