import React from 'react';
import { Compskill } from './Skills/Compskills';
import { CVContentType } from './CV/CV';
import { ThesesContent } from './Publications/Theses';
import { JournalsContent } from './Publications/Journals';
import { PostersContent } from './Publications/Posters';
import { TalksContent } from './Publications/Talks';
import { ReferenceType } from './References/References';
import { HtmlType } from './Examples/Html';
import { JavascriptType } from './Examples/Javascript';
import { ReactType } from './Examples/React';
import { FooterLinkType } from './Footer/FooterLinks';

const AppContext = React.createContext<AppContextType>({
  skills: [],
  CVTabTitles: [],
  CVContent: [],
  PubTabTitles: [],
  theses: [],
  journals: [],
  posters: [],
  talks: [],
  references: [],
  html: [],
  javascript: [],
  react: [],
  footerLinks: [],
});

export type AppContextType = {
  skills: Compskill[];
  CVTabTitles: string[];
  CVContent: CVContentType;
  PubTabTitles: string[];
  theses: ThesesContent;
  journals: JournalsContent;
  posters: PostersContent;
  talks: TalksContent;
  references: ReferenceType;
  html: HtmlType;
  javascript: JavascriptType;
  react: ReactType;
  footerLinks: FooterLinkType;
};

export default AppContext;
