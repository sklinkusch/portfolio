import React from "react";
import { TabPane } from "reactstrap";

export default function CVTab(props) {
  const { list } = props.data;
  return (
    <TabPane tabId={props.number}>
      <dl>
        {list.map((item, index) => (
          <React.Fragment key={index}>
            <dt>{item.time}</dt>
            <dd>{item.desc}</dd>
          </React.Fragment>
        ))}
      </dl>
    </TabPane>
  );
}
