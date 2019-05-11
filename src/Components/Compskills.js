import React from "react";
import CompskillCard from "./CompskillCard";
import "../styles/Compskills.scss";

export default class Compskills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          name: "HTML5",
          imageSrc: "images/HTML5_logo_and_wordmark.svg",
          imageId: "html"
        },
        {
          name: "CSS3",
          imageSrc: "images/CSS.3.svg.png",
          imageId: "css"
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
