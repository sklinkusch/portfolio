import React from "react";
import AppContext from "../Context/AppContext";
import CompskillCard from "./CompskillCard";
import "../styles/Compskills.scss";

const Compskills = () => (
  <div className="container sk-bg-white">
    <div className="sk-placeholder-tiny" />
    <section id="compskills">
      <h3> Computer-related Skills</h3>
      <AppContext.Consumer>
        {(context) =>
          context.skills.map((skill, index) => (
            <article key={index}>
              <h4>{skill.title}</h4>
              <div className="row album">
                {skill.content.map((singleSkill, index) => (
                  <CompskillCard skill={singleSkill} key={index} />
                ))}
              </div>
            </article>
          ))
        }
      </AppContext.Consumer>
    </section>
    <div className="sk-placeholder-tiny" />
  </div>
);

export default Compskills;
