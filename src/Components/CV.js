import React, { useState } from "react";
import CVTitles from "./CVTitles";
import CVContent from "./CVContent";

const CV = () => {
  const [activeTab, setTab] = useState(0);
  const toggle = tab => {
    if (activeTab !== tab) {
      setTab(tab);
    }
  };
  return (
    <div className="container sk-bg-white">
      <div className="sk-placeholder-tiny" />
      <section id="cv">
        <h3>My Curriculum Vitae</h3>
        <CVTitles toggle={toggle} activeTab={activeTab} />
        <CVContent activeTab={activeTab} />
      </section>
      <div className="sk-placeholder-tiny" />
    </div>
  );
};

export default CV;
