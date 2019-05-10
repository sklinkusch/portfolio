import React, { Component } from "react";
import NavbarToggler from "./NavbarToggler";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarItems: [
        {
          name: "Home",
          href: "./index.html",
          class: "nav-item active",
          anchorClass: "nav-link sk-col-black",
          children: [<span className="sr-only">(current)</span>]
        },
        {
          name: "Skills",
          href: "./index.html#",
          class: "nav-item dropdown",
          anchorClass: "nav-link sk-col-grey dropdown-toggle",
          anchorId: "skills-dd",
          dropdown: (
            <div className="dropdown-menu" aria-labelledby="skills-dd">
              <a href="#compskills" className="dropdown-item">
                Computer-related skills
              </a>
              <a href="#langskills" className="dropdown-item">
                Language skills
              </a>
            </div>
          )
        },
        {
          name: "CV",
          href: "#cv",
          class: "nav-item",
          anchorClass: "nav-link sk-col-grey"
        },
        {
          name: "Publications",
          href: "#pubs",
          class: "nav-item",
          anchorClass: "nav-link sk-col-grey"
        },
        {
          name: "References",
          href: "#refs",
          class: "nav-item",
          anchorClass: "nav-link sk-col-grey"
        },
        {
          name: "Contact",
          href: "#contact",
          class: "nav-item",
          anchorClass: "nav-link sk-col-grey"
        }
      ]
    };
  }
  render() {
    return (
      <nav
        className="nav-main navbar navbar-expand-lg sk-bg-ccc navbar-fixed-top"
        role="navigation"
      >
        <div className="container sk-bg-ccc sk-col-black navbar-light">
          <a className="navbar-brand sk-col-black" href="./index-html#">
            Dr. Stefan Klinkusch
          </a>
          <NavbarToggler />
        </div>
      </nav>
    );
  }
}
