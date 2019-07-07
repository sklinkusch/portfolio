import React from "react";
import CompskillCard from "./CompskillCard";
import "../styles/Compskills.scss";
import html from "../images/HTML5_logo_and_wordmark.svg";
import css from "../images/CSS.3.svg.png";
import sass from "../images/Sass_Logo_Color.svg";
import git from "../images/Git-logo.svg";
import bootstrap from "../images/Boostrap_logo.svg";
import javascript from "../images/ES6LOGO.svg";
import react from "../images/React.svg";
import redux from "../images/redux-logo.png";
import graphql from "../images/480px-GraphQL_Logo.svg.png";
import nodejs from "../images/Node.js_logo.svg";
import cplusplus from "../images/ISO_C++_Logo.svg";
import fortran from "../images/f90-300x212.png";
import perl from "../images/Perl.png";
import bash from "../images/Bash.svg";
import latex from "../images/220px-LaTeX_logo.svg.png";
import vscode from "../images/Visual_Studio_Code_1.35_icon.svg";
import brackets from "../images/Brackets.png";
import linux from "../images/Linux.svg";

export default class Compskills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          name: "HTML5",
          imageSrc: html,
          imageId: "html"
        },
        {
          name: "CSS3",
          imageSrc: css,
          imageId: "css"
        },
        {
          name: "Sass/SCSS",
          imageSrc: sass,
          imageId: "sass"
        },
        {
          name: "git",
          imageSrc: git,
          imageId: "git"
        },
        {
          name: "Bootstrap 4",
          imageSrc: bootstrap,
          imageId: "bootstrap"
        },
        {
          name: "ECMAScript 6",
          imageSrc: javascript,
          imageId: "ecmascript"
        },
        {
          name: "React",
          imageSrc: react,
          imageId: "react"
        },
        {
          name: "Redux",
          imageSrc: redux,
          imageId: "redux"
        },
        {
          name: "GraphQL",
          imageSrc: graphql,
          imageId: "graphql"
        },
        {
          name: "Node.js",
          imageSrc: nodejs,
          imageId: "nodejs"
        },
        {
          name: "C++",
          imageSrc: cplusplus,
          imageId: "cplusplus"
        },
        {
          name: "Fortran 90",
          imageSrc: fortran,
          imageId: "fortran"
        },
        {
          name: "Perl",
          imageSrc: perl,
          imageId: "perl"
        },
        {
          name: "Bourne-Again Shell",
          imageSrc: bash,
          imageId: "bash"
        },
        {
          name: "LaTeX",
          imageSrc: latex,
          imageId: "latex"
        },
        {
          name: "VS Code",
          imageSrc: vscode,
          imageId: "vscode"
        },
        {
          name: "Brackets",
          imageSrc: brackets,
          imageId: "brackets"
        },
        {
          name: "Linux",
          imageSrc: linux,
          imageId: "linux"
        }
      ]
    };
  }
  render() {
    return (
      <div className="container sk-bg-white">
        <div className="sk-placeholder-tiny" />
        <section id="compskills">
          <h3> Computer-related Skills</h3>
          <div className="row album">
            {this.state.skills.map((skill, index) => (
              <CompskillCard skill={skill} key={index} />
            ))}
          </div>
        </section>
        <div className="sk-placeholder-tiny" />
      </div>
    );
  }
}
