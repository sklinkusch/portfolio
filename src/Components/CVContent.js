import React from "react";
import { TabContent } from "reactstrap";
import CVTab from "./CVTab";
import AppContext from "../Context/AppContext";

const CVContent = props => (
  <TabContent activeTab={props.activeTab}>
    <AppContext.Consumer>
      {context =>
        context.CVContent.map((tab, index) => (
          <CVTab key={index} data={tab} number={index} />
        ))
      }
    </AppContext.Consumer>
  </TabContent>
);

export default CVContent;
