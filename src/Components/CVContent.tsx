import { TabContent } from 'reactstrap';
import CVTab from './CVTab';
import AppContext from '../Context/AppContext';

type Props = {
  activeTab: number;
};

type Tab = {
  list: {
    time: JSX.Element;
    desc: JSX.Element;
  }[];
};

const CVContent = (props: Props) => (
  <TabContent activeTab={props.activeTab}>
    <AppContext.Consumer>
      {(context) =>
        'CVContent' in context &&
        Array.isArray(context.CVContent) &&
        context.CVContent.length > 0 &&
        context.CVContent.map((tab: Tab, index: number) => <CVTab key={index} data={tab} number={index} />)
      }
    </AppContext.Consumer>
  </TabContent>
);

export default CVContent;
