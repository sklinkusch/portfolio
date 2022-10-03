import React from "react";
import { Nav } from "reactstrap";
import CVTitle from "./CVTitle";
import AppContext from "../Context/AppContext";

type Props = {
  activeTab: number,
  toggle: Function
}

type Tab = {
  title: string
}

const PubTitles = (props: Props) => (
  <Nav tabs>
    <AppContext.Consumer>
      {context =>
        context.PubTabTitles.map((tab: Tab, index: number) => (
          <CVTitle
            activeTab={props.activeTab}
            title={tab.title}
            number={index}
            toggle={(i: number) => props.toggle(i)}
            key={index}
          />
        ))
      }
    </AppContext.Consumer>
  </Nav>
);

export default PubTitles;
