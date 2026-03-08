import { Dispatch, SetStateAction } from 'react';
import { Nav } from 'reactstrap';
import CVTitle from './CVTitle';
import { useAppContext } from '../Hooks/useAppContext';

type Props = {
  activeTab: number;
  setTab: Dispatch<SetStateAction<number>>;
};

const PubTitles = ({ activeTab, setTab }: Props) => {
  const { PubTabTitles } = useAppContext();
  return (
    <Nav tabs>
      {PubTabTitles.length > 0 &&
        PubTabTitles.map((title: string, index: number) => (
          <CVTitle activeTab={activeTab} title={title} number={index} setTab={setTab} key={index} />
        ))}
    </Nav>
  );
};

export default PubTitles;
