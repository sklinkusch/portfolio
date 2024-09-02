import React from 'react';
import { Compskill } from './Skills/Compskills';
import { CVContentType } from './CV/CV';
import { ThesesType } from './Publications/Theses';
import { JournalsType } from './Publications/Journals';
import { PostersType } from './Publications/Posters';
import { TalksType } from './Publications/Talks';
import { ReferenceType } from './References/References';
import { HtmlType } from './Examples/Html';
import { JavascriptType } from './Examples/Javascript';
import { ReactType } from './Examples/React';
import { FooterLinkType } from './Footer/FooterLinks';

const AppContext = React.createContext<AppContextType>({});

export type AppContextType =
  | {
      skills: Compskill[];
      CVTabTitles: string[];
      CVContent: CVContentType;
      PubTabTitles: string[];
      theses: ThesesType;
      journals: JournalsType;
      posters: PostersType;
      talks: TalksType;
      references: ReferenceType;
      html: HtmlType;
      javascript: JavascriptType;
      react: ReactType;
      footerLinks: FooterLinkType;
    }
  | object;

export default AppContext;
