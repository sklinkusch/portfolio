import React from "react";
import { TabPane } from "reactstrap";
import AppContext from "../Context/AppContext";

const Journals = () => {
  const number = 1;
  const space = " ";
  return (
    <TabPane tabId={number}>
      <ol reversed>
        <AppContext.Consumer>
          {context =>
            context.journals.map((journal, index) => {
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
            })
          }
        </AppContext.Consumer>
      </ol>
    </TabPane>
  );
};

export default Journals;
