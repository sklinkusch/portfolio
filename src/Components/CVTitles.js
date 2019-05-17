import React from "react";
import CVTitle from "./CVTitle";

export default function CVTitles() {
  const tabs = [
    {
      title: "Education",
      controls: "education",
      href: "#edu",
      id: "edu-tab",
      active: true
    },
    {
      title: "Certificates",
      controls: "certificates",
      href: "#certs",
      id: "cert-tab",
      active: false
    },
    {
      title: "Work Experience",
      controls: "work-experience",
      href: "#work",
      id: "work-tab",
      active: false
    }
  ];
  return (
    <ul className="nav nav-tabs" id="cvTab" role="tablist">
      {tabs.map((tab, index) => (
        <CVTitle
          active={tab.active}
          id={tab.id}
          href={tab.href}
          controls={tab.controls}
          title={tab.title}
          key={index}
        />
      ))}
    </ul>
  );
}
