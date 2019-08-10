import React from "react";
import { TabPane } from "reactstrap";
import AppContext from "../Context/AppContext";

const Theses = () => {
  const number = 0;
  const space = " ";
  return (
    <TabPane tabId={number}>
      <ol reversed>
        <AppContext.Consumer>
          {context =>
            context.theses.map((thesis, index) => {
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
            })
          }
        </AppContext.Consumer>
      </ol>
    </TabPane>
  );
};

export default Theses;
