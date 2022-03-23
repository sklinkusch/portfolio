import React from "react";
import "../styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";
import AppContext from "../Context/AppContext";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="container sk-bg-white">
      <footer>
        <div className="links">
          <AppContext.Consumer>
            {(context) =>
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
        <p className="copyright">
          <span>&copy;</span>
          <span>{` Stefan Klinkusch, 2019-${year}`}</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
