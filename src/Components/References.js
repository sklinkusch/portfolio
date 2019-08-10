import React from "react";
import RefItem from "./RefItem";
import AppContext from "../Context/AppContext";

const References = () => (
  <div className="container sk-bg-white">
    <div className="sk-placeholder-tiny" />
    <section id="refs">
      <h3>References</h3>
      <ul>
        <AppContext.Consumer>
          {context =>
            context.references.map((reference, index) => (
              <RefItem key={index} data={reference} />
            ))
          }
        </AppContext.Consumer>
      </ul>
    </section>
    <div className="sk-placeholder-tiny" />
  </div>
);

export default References;
