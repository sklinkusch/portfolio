import React from "react";
import { TabContent } from "reactstrap";
import CVTab from "./CVTab";

export default function CVContent(props) {
  const content = [
    {
      list: [
        {
          time: "1989-1995",
          desc: "Primary school in Berlin, Germany"
        },
        {
          time: "1995-2002",
          desc: "Grammar school in Berlin, Germany"
        },
        {
          time: "2002-2008",
          desc: "Studies of chemistry at University of Potsdam, Germany"
        },
        {
          time: "2007-2008",
          desc:
            "Diploma thesis in the group of Prof. P. Saalfrank at University of Potsdam, Germany"
        },
        {
          time: "2008-2011",
          desc:
            "Ph.D thesis in the group of Prof. P. Saalfrank at University of Potsdam, Germany"
        },
        {
          time: "2016",
          desc: "Educating class at Works gGmbH in Berlin, Germany"
        },
        {
          time: "since 2018",
          desc:
            "Web development class at Digital Career Institute in Berlin, Germany"
        }
      ]
    },
    {
      list: [
        {
          time: "2002",
          desc:
            "University entry exam (Abitur), mark 1.5 (1.0 best, 4,0 just passed, 6.0 worst)"
        },
        {
          time: "2008",
          desc:
            "Diploma in chemistry, mark 1.8 (1.0 best, 4.0 just passed, 5.0 worst)"
        },
        {
          time: "2011",
          desc: "Ph.D in science (Dr. rer. nat.) mark magna cum laude"
        },
        {
          time: "2016",
          desc:
            "Educator's qualification certificate according to the German Order for the educator's qualification (Ausbilder-Eignungsverordnung, AEVO)"
        }
      ]
    },
    {
      list: [
        {
          time: "2008-2011",
          desc:
            "Scientific coworker in the group of Prof. P. Saalfrank at University of Potsdam, Germany"
        },
        {
          time: "2014-2016",
          desc:
            "Scientific coworker in the group of Dr. J. C. Tremblay at Free University of Berlin, Germany"
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
