import React from "react";
import { TabContent } from "reactstrap";
import CVTab from "./CVTab";

export default function CVContent(props) {
  const content = [
    {
      list: [
        {
          time: <span>1989-1995</span>,
          desc: <span>Primary school in Berlin, Germany</span>
        },
        {
          time: <span>1995-2002</span>,
          desc: <span>Grammar school in Berlin, Germany</span>
        },
        {
          time: <span>2002-2008</span>,
          desc: (
            <span>Studies of chemistry at University of Potsdam, Germany</span>
          )
        },
        {
          time: <span>2007-2008</span>,
          desc: (
            <span>
              Diploma thesis in the group of Prof. P. Saalfrank at University of
              Potsdam, Germany
            </span>
          )
        },
        {
          time: <span>2008-2011</span>,
          desc: (
            <span>
              Ph.D thesis in the group of Prof. P. Saalfrank at University of
              Potsdam, Germany
            </span>
          )
        },
        {
          time: <span>2016</span>,
          desc: <span>Educating class at Works gGmbH in Berlin, Germany</span>
        },
        {
          time: <span>since 2018</span>,
          desc: (
            <span>
              Web development class at Digital Career Institute in Berlin,
              Germany
            </span>
          )
        }
      ]
    },
    {
      list: [
        {
          time: <span>2002</span>,
          desc: (
            <span>
              University entry exam (<span className="italic">Abitur</span>),
              mark 1.5 (1.0 best, 4,0 just passed, 6.0 worst)
            </span>
          )
        },
        {
          time: <span>2008</span>,
          desc: (
            <span>
              Diploma in chemistry, mark 1.8 (1.0 best, 4.0 just passed, 5.0
              worst)
            </span>
          )
        },
        {
          time: <span>2011</span>,
          desc: (
            <span>
              Ph.D in science (<span className="italic">Dr. rer. nat.</span>)
              mark <span className="italic">magna cum laude</span>
            </span>
          )
        },
        {
          time: <span>2016</span>,
          desc: (
            <span>
              Educator's qualification certificate according to the German Order
              for the educator's qualification (
              <abbr title="Ausbilder-Eignungsverordnung">AEVO</abbr>)
            </span>
          )
        }
      ]
    },
    {
      list: [
        {
          time: <span>2008-2011</span>,
          desc: (
            <span>
              Scientific coworker in the group of Prof. P. Saalfrank at
              University of Potsdam, Germany
            </span>
          )
        },
        {
          time: <span>2014-2016</span>,
          desc: (
            <span>
              Scientific coworker in the group of Dr. J. C. Tremblay at Free
              University of Berlin, Germany
            </span>
          )
        }
      ]
    }
  ];
  return (
    <TabContent activeTab={props.activeTab}>
      {content.map((tab, index) => (
        <CVTab key={index} data={tab} number={index} />
      ))}
    </TabContent>
  );
}
