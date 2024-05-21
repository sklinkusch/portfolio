import React from 'react';
import CVTitle from './CVTitle';
import AppContext from '../Context/AppContext';
import { Nav } from 'reactstrap';

type Props = {
  activeTab: number;
  toggle: Function;
};

type Tab = {
  title: string;
};

const CVTitles = (props: Props) => (
  <Nav tabs>
    <AppContext.Consumer>
      {(context) =>
        context.CVTabTitles.map((tab: Tab, index: number) => (
          <CVTitle
            activeTab={props.activeTab}
            title={tab.title}
            number={index}
            toggle={(i: number) => props.toggle(i)}
            key={index}
          />
        ))
      }
    </AppContext.Consumer>
  </Nav>
);

export default CVTitles;
