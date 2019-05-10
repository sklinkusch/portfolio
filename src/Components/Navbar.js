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
          class: "nav-link sk-col-black",
          children: [<span className="sr-only">(current)</span>]
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
