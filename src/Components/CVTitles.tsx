import { Dispatch, SetStateAction } from 'react';
import CVTitle from './CVTitle';
import { useAppContext } from '../Hooks/useAppContext';
import { Nav } from 'reactstrap';

type Props = {
  activeTab: number;
  setTab: Dispatch<SetStateAction<number>>;
};

const CVTitles = ({ activeTab, setTab }: Props) => {
  const { CVTabTitles } = useAppContext();
  return (
    <Nav tabs>
      {CVTabTitles.length > 0 &&
        CVTabTitles.map((title: string, index: number) => (
          <CVTitle activeTab={activeTab} title={title} number={index} setTab={setTab} key={index} />
        ))}
    </Nav>
  );
};

export default CVTitles;
