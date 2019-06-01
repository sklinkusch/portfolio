import React from "react";
import "../styles/Footer.scss";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Footer() {
  return (
    <div className="container sk-bg-white">
      <footer>
        <div className="links">
          <a
            href="https://github.com/sklinkusch/"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square" />
          </a>
          <span>{"  "}</span>
          <a
            href="https://www.linkedin.com/in/stefan-klinkusch-b0595216a"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
          <span>{"  "}</span>
          <a
            href="mailto:stefan.klinkusch@googlemail.com"
            className="mail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope" />
          </a>
        </div>
        <p className="copyright">&copy; Stefan Klinkusch, 2019</p>
      </footer>
    </div>
  );
}
