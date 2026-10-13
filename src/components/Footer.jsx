import { person } from "../content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {person.name}
      </span>
      <span>
        {person.city}, Sri Lanka
      </span>
      <a href="#main">Back to top</a>
    </footer>
  );
}
