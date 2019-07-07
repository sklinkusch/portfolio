import React, { useState } from "react";
import "../styles/Footer.scss";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Footer() {
  const [links] = useState([
    {
      href: "https://github.com/sklinkusch",
      class: "github",
      icon: "fab fa-github-square"
    },
    {
      href: "https://www.linkedin.com/in/stefan-klinkusch",
      class: "linkedin",
      icon: "fab fa-linkedin"
    },
    {
      href: "https://xing.to/StefanKlinkusch",
      class: "xing",
      icon: "fab fa-xing-square"
    },
    {
      href: "mailto:stefan.klinkusch@googlemail.com",
      class: "mail",
      icon: "fas fa-envelope"
    }
  ]);
  return (
    <div className="container sk-bg-white">
      <footer>
        <div className="links">
          {links
            .map((link, index) => (
              <a
                href={link.href}
                className={link.class}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <i className={link.icon} />
              </a>
            ))
            .reduce((prev, curr) => [prev, "  ", curr])}
        </div>
        <p className="copyright">&copy; Stefan Klinkusch, 2019</p>
      </footer>
    </div>
  );
}
