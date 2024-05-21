import React from 'react';
import { TabContent } from 'reactstrap';
import CVTab from './CVTab';
import AppContext from '../Context/AppContext';

type Props = {
  activeTab: number;
};

type Tab = {
  list: {
    time: string;
    desc: string;
  }[];
};

const CVContent = (props: Props) => (
  <TabContent activeTab={props.activeTab}>
    <AppContext.Consumer>
      {(context) => context.CVContent.map((tab: Tab, index: number) => <CVTab key={index} data={tab} number={index} />)}
    </AppContext.Consumer>
  </TabContent>
);

export default CVContent;
