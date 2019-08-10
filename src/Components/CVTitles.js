import React from "react";
import CVTitle from "./CVTitle";
import AppContext from "../Context/AppContext";
import { Nav } from "reactstrap";

const CVTitles = props => {
  return (
    <Nav tabs>
      <AppContext.Consumer>
        {context =>
          context.CVTabTitles.map((tab, index) => (
            <CVTitle
              activeTab={props.activeTab}
              title={tab.title}
              number={index}
              toggle={i => props.toggle(i)}
              key={index}
            />
          ))
        }
      </AppContext.Consumer>
    </Nav>
  );
};

export default CVTitles;
