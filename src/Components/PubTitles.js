import React from "react";
import { Nav } from "reactstrap";
import CVTitle from "./CVTitle";
import AppContext from "../Context/AppContext";

const PubTitles = props => {
  return (
    <Nav tabs>
      <AppContext.Consumer>
        {context =>
          context.PubTabTitles.map((tab, index) => (
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

export default PubTitles;
