import React from "react";
import { TabPane } from "reactstrap";

export default function Posters() {
  const number = 2;
  const space = " ";
  const posters = [
    {
      authors: "Stefan Klinkusch and Jean Christophe Tremblay",
      title: (
        <q className="arttitle">
          Simulations of time-resolved photoelectron spectra using extended
          time-dependent configuration interaction methods
        </q>
      ),
      event: <span>Symposium for Theoretical Chemistry</span>,
      place: <span>Potsdam, Germany</span>,
      year: <span>2015</span>
    },
    {
      authors: "Stefan Klinkusch, Tillmann Klamroth, and Peter Saalfrank",
      title: (
        <q className="arttitle">
          Laser-induced electron dynamics including photoionization: A heuristic
          model within time-dependent configuration interaction theory
        </q>
      ),
      event: (
        <span>
          Symposium of the Priority Program 1145 of the{" "}
          <abbr title="German Research Foundation (Deutsche Forschungsgemeinschaft)">
            DFG
          </abbr>
          :{" "}
          <span className="jtitle">
            Modern and Universal First-Principles Methods for Many-Electron
            Systems in Chemistry and Physics
          </span>
        </span>
      ),
      place: <span>Bad Herrenalb, Germany</span>,
      year: <span>2010</span>
    },
    {
      authors: "Stefan Klinkusch, Tillmann Klamroth, and Peter Saalfrank",
      title: (
        <q className="arttitle">
          Laser-induced intermolecular electron transfer by means of{" "}
          <abbr title="time-dependent configuration interaction singles">
            TD-CIS
          </abbr>
        </q>
      ),
      event: <span>Symposium for Theoretical Chemistry</span>,
      place: <span>Ramsau am Dachstein, Austria</span>,
      year: <span>2008</span>
    }
  ];
  return (
    <TabPane tabId={number}>
      <ol reversed>
        {posters.map((poster, index) => {
          const { authors, title, event, place, year } = poster;
          return (
            <li key={index}>
              <span className="authors">{authors}</span>,{space}
              {title},{space}
              {event},{space}
              {place},{space}
              {year}
            </li>
          );
        })}
      </ol>
    </TabPane>
  );
}
