import { person, socials } from "../content.js";

const linkedin = socials.find((s) => s.name === "LinkedIn");

export default function Footer() {
  return (
    <footer className="footer kicker" data-era="night">
      <span>
        © {new Date().getFullYear()} {person.name}
      </span>
      <span>{person.city}, Sri Lanka</span>
      <p className="links">
        <a href={person.resume} target="_blank" rel="noreferrer">
          CV
        </a>
        <a href={linkedin.link} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={person.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
}
