import "./instruments.css";

// Shared dark instrument panel: a head row with an honesty label, the screen, controls below.
export default function Screen({ title, source, label, controls, note, children }) {
  return (
    <figure className="instrument">
      <figcaption className="instrument__head kicker">
        <span className="instrument__title">{title}</span>
        <span>{source}</span>
        <span className="instrument__spacer" />
        <span className="instrument__label">{label}</span>
      </figcaption>
      <div className="screen">{children}</div>
      {controls && <div className="controls">{controls}</div>}
      {note && <p className="instrument__note">{note}</p>}
    </figure>
  );
}
