import { JSX } from 'react';
import { TabPane } from 'reactstrap';
import { useAppContext } from '../Hooks/useAppContext';

type Talk = {
  title: JSX.Element;
  article: JSX.Element | null;
  place: JSX.Element;
  date: JSX.Element;
};

const Talks = () => {
  const { talks } = useAppContext();
  const number = 3;
  const space = ' ';
  return (
    <TabPane tabId={number}>
      <ol reversed>
        {talks.length > 0 &&
          talks.map((talk: Talk, index: number) => {
            const { title, article, place, date } = talk;
            return (
              <li key={index}>
                <>
                  <span className="authors">Stefan Klinkusch</span>,{space}
                  {title}
                  {article !== null && (
                    <>
                      {space}
                      {article},
                    </>
                  )}
                  {space}
                  {place},{space}
                  {date}
                </>
              </li>
            );
          })}
      </ol>
    </TabPane>
  );
};

export default Talks;
