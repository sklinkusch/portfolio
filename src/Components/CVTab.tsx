import React from 'react';
import { TabPane } from 'reactstrap';

type Props = {
  data: {
    list: {
      time: string;
      desc: string;
    }[];
  };
  number: number;
};

const CVTab = (props: Props) => {
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
};

export default CVTab;
