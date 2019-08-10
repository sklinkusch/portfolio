import React from "react";
import AppContext from "../Context/AppContext";
import CompskillCard from "./CompskillCard";
import "../styles/Compskills.scss";

const Compskills = () => (
  <div className="container sk-bg-white">
    <div className="sk-placeholder-tiny" />
    <section id="compskills">
      <h3> Computer-related Skills</h3>
      <div className="row album">
        <AppContext.Consumer>
          {context =>
            context.skills.map((skill, index) => (
              <CompskillCard skill={skill} key={index} />
            ))
          }
        </AppContext.Consumer>
      </div>
    </section>
    <div className="sk-placeholder-tiny" />
  </div>
);

export default Compskills;
