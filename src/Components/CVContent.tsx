import { TabContent } from 'reactstrap';
import CVTab from './CVTab';
import { useAppContext } from '../Hooks/useAppContext';
import type { JSX } from 'react';

type Props = {
  activeTab: number;
};

type Tab = {
  list: {
    time: JSX.Element;
    desc: JSX.Element;
  }[];
};

const CVContent = (props: Props) => {
  const { CVContent } = useAppContext();
  return (
    <TabContent activeTab={props.activeTab}>
      {CVContent.length > 0 &&
        CVContent.map((tab: Tab, index: number) => <CVTab key={index} data={tab} number={index} />)}
    </TabContent>
  );
};

export default CVContent;
