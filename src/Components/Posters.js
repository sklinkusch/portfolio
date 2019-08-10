import React from "react";
import { TabPane } from "reactstrap";
import AppContext from "../Context/AppContext";

const Posters = () => {
  const number = 2;
  const space = " ";
  return (
    <TabPane tabId={number}>
      <ol reversed>
        <AppContext.Consumer>
          {context =>
            context.posters.map((poster, index) => {
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
            })
          }
        </AppContext.Consumer>
      </ol>
    </TabPane>
  );
};

export default Posters;
