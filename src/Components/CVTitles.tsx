import { Dispatch, SetStateAction } from 'react';
import CVTitle from './CVTitle';
import AppContext from '../Context/AppContext';
import { Nav } from 'reactstrap';

type Props = {
  activeTab: number;
  setTab: Dispatch<SetStateAction<number>>;
};

const CVTitles = (props: Props) => (
  <Nav tabs>
    <AppContext.Consumer>
      {(context) =>
        'CVTabTitles' in context &&
        Array.isArray(context.CVTabTitles) &&
        context.CVTabTitles.length > 0 &&
        context.CVTabTitles.map((title: string, index: number) => (
          <CVTitle activeTab={props.activeTab} title={title} number={index} setTab={props.setTab} key={index} />
        ))
      }
    </AppContext.Consumer>
  </Nav>
);

export default CVTitles;
