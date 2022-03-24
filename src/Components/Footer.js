/** @jsxImportSource theme-ui  */
import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import AppContext from "../Context/AppContext";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="container sk-bg-white">
      <footer>
        <div sx={{ textAlign: "center", fontSize: "1.5rem" }}>
          <AppContext.Consumer>
            {(context) =>
              context.footerLinks
                .map((link, index) => (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    sx={{ textDecoration: "none" }}
                  >
                    <i className={link.icon} sx={{ color: link.color, '&:hover': { color: link.hoverColor }}} />
                  </a>
                ))
                .reduce((prev, curr) => [prev, "  ", curr])
            }
          </AppContext.Consumer>
        </div>
        <p sx={{ textAlign: "center" }}>
          <span>&copy;</span>
          <span>{` Stefan Klinkusch, 2019-${year}`}</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
