/** @jsxImportSource theme-ui */
import React from "react";
import RefItem from "./RefItem";
import AppContext from "../Context/AppContext";

const References = () => (
  <div className="container" sx={{ backgroundColor: "wwhite", opacity: 0.95, borderRadius: "10px" }}>
    <div sx={{ height: "1vh" }} />
    <section id="refs" sx={{ margin: "30px 0" }}>
      <h3 sx={{ mb: "1rem" }}>References</h3>
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
    <div sx={{ height: "1vh" }} />
  </div>
);

export default References;
