import React from "react";
import CVTitle from "./CVTitle";
import { Nav } from "reactstrap";

export default function CVTitles(props) {
  const tabs = [
    {
      title: "Education"
    },
    {
      title: "Certificates"
    },
    {
      title: "Work Experience"
    }
  ];
  return (
    <Nav tabs>
      {tabs.map((tab, index) => (
        <CVTitle
          activeTab={props.activeTab}
          title={tab.title}
          number={index}
          toggle={i => props.toggle(i)}
          key={index}
        />
      ))}
    </Nav>
  );
}
