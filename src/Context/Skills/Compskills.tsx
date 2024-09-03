import markup from './Markup';
import styling from './Styling';
import versioning from './Versioning';
import scripting from './Scripting';
import programming from './Programming';
import frontend from './Frontend';
import felibraries from './FELibraries';
import mobile from './Mobile';
import state from './State';
import backend from './Backend';
import automation from './Automation';
import contentmanagement from './ContentManagement';
import databases from './Databases';
import template from './Template';
import shop from './Shop';
import teamcommunication from './TeamCommunication';
import organization from './Organization';
import documentation from './Documentation';
import filesharing from './FileSharing';
import editors from './Editors';
import operating from './Operating';

export type Compskill = {
  title: string;
  content: CompskillContent[];
};

type CompskillContent = {
  name: string;
  imageSrc: string | undefined;
  imageId: string;
  link: string | undefined;
  imgStyles?: { [key: string]: string };
};

const skills: Compskill[] = [
  markup,
  styling,
  versioning,
  scripting,
  programming,
  frontend,
  felibraries,
  mobile,
  state,
  backend,
  automation,
  contentmanagement,
  databases,
  template,
  shop,
  teamcommunication,
  organization,
  documentation,
  filesharing,
  editors,
  operating,
];

export default skills;
