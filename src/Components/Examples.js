import React from "react";
import "../styles/Examples.scss";
import ExampleSec from "./ExampleSec";
import AppContext from "../Context/AppContext";

const Examples = () => (
  <div className="container sk-bg-white">
    <div className="sk-placeholder-tiny" />
    <AppContext.Consumer>
      {context => (
        <section id="examples">
          <h3>Examples of my work</h3>
          <ExampleSec
            title="Examples using HTML, CSS/SCSS, and Bootstrap"
            data={context.html}
          />
          <ExampleSec
            title="Examples using vanilla JavaScript"
            data={context.javascript}
          />
          <ExampleSec title="Examples using React.js" data={context.react} />
        </section>
      )}
    </AppContext.Consumer>
    <div className="sk-placeholder-tiny" />
  </div>
);

export default Examples;
