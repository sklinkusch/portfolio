import React from "react";
import { TabPane } from "reactstrap";

export default function Journals() {
  const number = 1;
  const space = " ";
  const journals = [
    {
      authors: "Stefan Klinkusch and Jean Christophe Tremblay",
      title:
        "Resolution-of-identity stochastic time-dependent configuration interaction for dissipative electron dynamics in strong fields",
      href: "http://dx.doi.org/10.1063/1.4948646",
      journal: "The Journal of Chemical Physics",
      edition: "144",
      pages: "184108",
      year: "2016"
    },
    {
      authors: "Stefan Klinkusch and Tillmann Klamroth",
      title:
        "Simulations of pump-probe excitations of electronic wave packets for a large quasi-rigid molecular systems by means of an extension to the time-dependent configuration interaction singles method",
      href: "http://dx.doi.org/10.1142/S0219633613500053",
      journal: "Journal of Theoretical and Computational Chemistry",
      edition: "12",
      pages: "1350005",
      year: "2013"
    },
    {
      authors:
        "Jean Christophe Tremblay, Stefan Klinkusch, Tillmann Klamroth, and Peter Saalfrank",
      title: "Dissipative many-electron dynamics of ionizing systems",
      href: "http://dx.doi.org/10.1063/1.3532410",
      journal: "The Journal of Chemical Physics",
      edition: "134",
      pages: "044311",
      year: "2011"
    },
    {
      authors: "Stefan Klinkusch, Peter Saalfrank, and Tillmann Klamroth",
      title:
        "Laser-induced electron dynamics including photoionization: A heuristic model within time-dependent configuration interaction theory",
      href: "http://dx.doi.org/1.3218847",
      journal: "The Journal of Chemical Physics",
      edition: "131",
      pages: "114304",
      year: "2009"
    },
    {
      authors: "Stefan Klinkusch, Tillmann Klamroth, and Peter Saalfrank",
      title:
        "Long-range intermolecular charge transfer induced by laser pulses: an explicitly time-dependent configuration interaction approach",
      href: "http://dx.doi.org/10.1039/b817873a",
      journal: "Physical Chemistry Chemical Physics",
      edition: "11",
      pages: "3875-3884",
      year: "2009"
    },
    {
      authors: "Dominik Kröner, Stefan Klinkusch, and Tillmann Klamroth",
      title:
        "Enhanced photodesorption by vibrational pre-excitation: Quantum model simulations for Cs/Cu (111)",
      href: "http://dx.doi.org/10.1016/j.susc.2007.04.260",
      journal: "Surface Science",
      edition: "602",
      pages: "3148-3152",
      year: "2008"
    }
  ];
  return (
    <TabPane tabId={number}>
      <ol reversed>
        {journals.map((journal, index) => {
          const {
            authors,
            title,
            href,
            journal: publ,
            edition,
            pages,
            year
          } = journal;
          return (
            <li key={index}>
              <span className="authors">{authors}</span>,{space}
              <q className="arttitle">{title}</q>,{space}
              <a
                href={href}
                className="journal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="jtitle">{publ}</span>
                {space}
                <span className="jedition">{edition}</span>,{space}
                <span className="jpages">{pages}</span>
                {space}
                <span className="pubyear">{year}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </TabPane>
  );
}
