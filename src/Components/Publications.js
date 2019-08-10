import React, { useState } from "react";
import { TabContent } from "reactstrap";
import PubTitles from "./PubTitles";
import Theses from "./Theses";
import Journals from "./Journals";
import Posters from "./Posters";
import Talks from "./Talks";

const Publications = () => {
  const [activeTab, setTab] = useState(0);
  const toggle = tab => {
    if (activeTab !== tab) {
      setTab(tab);
    }
  };
  return (
    <div className="container sk-bg-white">
      <div className="sk-placeholder-tiny" />
      <section id="pubs">
        <h3>Publications</h3>
        <PubTitles toggle={toggle} activeTab={activeTab} />
        <TabContent activeTab={activeTab}>
          <Theses />
          <Journals />
          <Posters />
          <Talks />
        </TabContent>
      </section>
    </div>
  );
};

export default Publications;
