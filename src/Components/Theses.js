import React from "react";
import { TabPane } from "reactstrap";

export default function Theses() {
  const number = 0;
  const space = " ";
  const theses = [
    {
      authors: "Stefan Klinkusch",
      title:
        "Simulations of laser-driven correlated many-electron dynamics in molecular systems",
      translated: null,
      type: "Dissertation",
      school: "University of Potsdam, Germany",
      year: 2011
    },
    {
      authors: "Stefan Klinkusch",
      title:
        "Theorie des femtosekundenlaserinduzierten intermolekularen Elektronentransfers mittels zeitabhängiger Konfigurationswechselwirkungs-Methoden",
      translated:
        "Theory of femtosecond laser-induced intermolecular electron transfer by means of time-dependent configuration interaction methods",
      type: "Diploma thesis",
      school: "University of Potsdam, Germany",
      year: 2008
    }
  ];
  return (
    <TabPane tabId={number}>
      <ol reversed>
        {theses.map((thesis, index) => {
          const { authors, title, translated, type, school, year } = thesis;
          return (
            <li key={index}>
              <span className="authors">{authors}</span>,{space}
              <q className="arttitle">{title}</q>
              {space}
              {translated && (
                <span className="italic">
                  (<q className="arttitle">{translated}</q>)
                </span>
              )}
              , {type}, {school}, {year}
            </li>
          );
        })}
      </ol>
    </TabPane>
  );
}
