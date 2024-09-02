import { ReactNode, useState } from 'react';
import AppContext from './AppContext';
import compskills from './Skills/Compskills';
import { titles as CVTabTitles, content as CVContent } from './CV/CV';
import { titles as PubTabTitles, theses, journals, posters, talks } from './Publications/Publications';
import references from './References/References';
import html from './Examples/Html';
import javascript from './Examples/Javascript';
import react from './Examples/React';
import footerLinks from './Footer/FooterLinks';

const AppProvider = (props: { children: ReactNode; [key: string]: unknown }) => {
  const [state] = useState({
    skills: compskills,
    CVTabTitles,
    CVContent,
    PubTabTitles,
    theses,
    journals,
    posters,
    talks,
    references,
    html,
    javascript,
    react,
    footerLinks,
  });
  return <AppContext.Provider value={state}>{props.children}</AppContext.Provider>;
};

export default AppProvider;
