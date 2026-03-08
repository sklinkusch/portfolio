import { JSX } from 'react';
import { TabPane } from 'reactstrap';
import { useAppContext } from '../Hooks/useAppContext';

type Poster = {
  authors: string;
  title: JSX.Element;
  event: JSX.Element;
  place: JSX.Element;
  year: JSX.Element;
};

const Posters = () => {
  const { posters } = useAppContext();
  const number = 2;
  const space = ' ';
  return (
    <TabPane tabId={number}>
      <ol reversed>
        {posters.length > 0 &&
          posters.map((poster: Poster, index: number) => {
            const { authors, title, event, place, year } = poster;
            return (
              <li key={index}>
                <>
                  <span className="authors">{authors}</span>,{space}
                  {title},{space}
                  {event},{space}
                  {place},{space}
                  {year}
                </>
              </li>
            );
          })}
      </ol>
    </TabPane>
  );
};

export default Posters;
