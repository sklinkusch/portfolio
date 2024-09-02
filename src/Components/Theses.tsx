/** @jsxImportSource theme-ui */
import { TabPane } from 'reactstrap';
import AppContext from '../Context/AppContext';

type Thesis = {
  authors: string;
  title: string;
  translated?: string;
  type: string;
  school: string;
  year: string;
  href: string;
};

const Theses = () => {
  const number = 0;
  const space = ' ';
  return (
    <TabPane tabId={number}>
      <ol reversed>
        <AppContext.Consumer>
          {(context) =>
            'theses' in context &&
            Array.isArray(context.theses) &&
            context.theses.length > 0 &&
            context.theses.map((thesis: Thesis, index: number) => {
              const { authors, title, translated, type, school, year, href } = thesis;
              return (
                <li key={index}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'ggrey', backgroundColor: '#eee', textDecoration: 'none' }}
                  >
                    <span className="authors">{authors}</span>,{space}
                    <q sx={{ fontStyle: 'italic' }}>{title}</q>
                    {space}
                    {translated && (
                      <span sx={{ fontStyle: 'italic' }}>
                        (<q sx={{ fontStyle: 'italic' }}>{translated}</q>)
                      </span>
                    )}
                    , {type}, {school}, {year}
                  </a>
                </li>
              );
            })
          }
        </AppContext.Consumer>
      </ol>
    </TabPane>
  );
};

export default Theses;
