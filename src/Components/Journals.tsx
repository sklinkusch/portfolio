/** @jsxImportSource theme-ui */
import { TabPane } from 'reactstrap';
import AppContext from '../Context/AppContext';

type Journal = {
  authors: string;
  title: string;
  href: string;
  journal: string;
  edition: string;
  pages: string;
  year: string;
};

const Journals = () => {
  const number = 1;
  const space = ' ';
  return (
    <TabPane tabId={number}>
      <ol reversed>
        <AppContext.Consumer>
          {(context) =>
            'journals' in context &&
            Array.isArray(context.journals) &&
            context.journals.length > 0 &&
            context.journals.map((journal: Journal, index: number) => {
              const { authors, title, href, journal: publ, edition, pages, year } = journal;
              return (
                <li key={index}>
                  <span className="authors">{authors}</span>,{space}
                  <q sx={{ fontStyle: 'italic' }}>{title}</q>,{space}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'ggrey', backgroundColor: '#ddd', textDecoration: 'none' }}
                  >
                    <span sx={{ fontStyle: 'italic' }}>{publ}</span>
                    {space}
                    <span sx={{ fontWeight: 'bold' }}>{edition}</span>,{space}
                    <span className="jpages">{pages}</span>
                    {space}
                    <span>({year})</span>
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

export default Journals;
