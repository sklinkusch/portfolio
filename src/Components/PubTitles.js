import React from "react";
import { Nav } from "reactstrap";
import CVTitle from "./CVTitle";

export default function PubTitles(props) {
  const tabs = [
    {
      title: "Theses"
    },
    {
      title: "Journals"
    },
    {
      title: "Posters"
    },
    {
      title: "Talks"
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
