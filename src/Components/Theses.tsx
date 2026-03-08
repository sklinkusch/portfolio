/** @jsxImportSource theme-ui */
import { TabPane } from 'reactstrap';
import { useAppContext } from '../Hooks/useAppContext';

type Thesis = {
  authors: string;
  title: string;
  translated: string | null;
  type: string;
  school: string;
  year: number;
  href: string;
};

const Theses = () => {
  const { theses } = useAppContext();
  const number = 0;
  const space = ' ';
  return (
    <TabPane tabId={number}>
      <ol reversed>
        {theses.length > 0 &&
          theses.map((thesis: Thesis, index: number) => {
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
          })}
      </ol>
    </TabPane>
  );
};

export default Theses;
