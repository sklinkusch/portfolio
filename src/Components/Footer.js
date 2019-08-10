import React from "react";
import "../styles/Footer.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import AppContext from "../Context/AppContext";

const Footer = () => (
  <div className="container sk-bg-white">
    <footer>
      <div className="links">
        <AppContext.Consumer>
          {context =>
            context.footerLinks
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
              .reduce((prev, curr) => [prev, "  ", curr])
          }
        </AppContext.Consumer>
      </div>
      <p className="copyright">&copy; Stefan Klinkusch, 2019</p>
    </footer>
  </div>
);

export default Footer;
