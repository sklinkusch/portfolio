import { Dispatch, SetStateAction } from 'react';
import { Nav } from 'reactstrap';
import CVTitle from './CVTitle';
import AppContext from '../Context/AppContext';

type Props = {
  activeTab: number;
  setTab: Dispatch<SetStateAction<number>>;
};

const PubTitles = (props: Props) => (
  <Nav tabs>
    <AppContext.Consumer>
      {(context) =>
        'PubTabTitles' in context &&
        Array.isArray(context.PubTabTitles) &&
        context.PubTabTitles.length > 0 &&
        context.PubTabTitles.map((title: string, index: number) => (
          <CVTitle activeTab={props.activeTab} title={title} number={index} setTab={props.setTab} key={index} />
        ))
      }
    </AppContext.Consumer>
  </Nav>
);

export default PubTitles;
