import React from "react";
import { TabPane } from "reactstrap";
import AppContext from "../Context/AppContext";

const Talks = () => {
  const number = 3;
  const space = " ";
  return (
    <TabPane tabId={number}>
      <ol reversed>
        <AppContext.Consumer>
          {context =>
            context.talks.map((talk, index) => {
              const { title, article, place, date } = talk;
              return (
                <li key={index}>
                  <span className="authors">Stefan Klinkusch</span>,{space}
                  {title}
                  {article !== null && (
                    <>
                      {space}
                      {article},
                    </>
                  )}
                  {space}
                  {place},{space}
                  {date}
                </li>
              );
            })
          }
        </AppContext.Consumer>
      </ol>
    </TabPane>
  );
};

export default Talks;
