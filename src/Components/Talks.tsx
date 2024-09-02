import { TabPane } from 'reactstrap';
import AppContext from '../Context/AppContext';

type Talk = {
  title: HTMLQuoteElement;
  article: HTMLSpanElement | null;
  place: HTMLSpanElement;
  date: HTMLSpanElement;
};

const Talks = () => {
  const number = 3;
  const space = ' ';
  return (
    <TabPane tabId={number}>
      <ol reversed>
        <AppContext.Consumer>
          {(context) =>
            'talks' in context &&
            Array.isArray(context.talks) &&
            context.talks.length > 0 &&
            context.talks.map((talk: Talk, index: number) => {
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
            })
          }
        </AppContext.Consumer>
      </ol>
    </TabPane>
  );
};

export default Talks;
