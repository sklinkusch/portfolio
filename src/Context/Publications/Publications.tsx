import { theses as myTheses } from './Theses';
import { journals as myJournals } from './Journals';
import { posters as myPosters } from './Posters';
import { talks as myTalks } from './Talks';

const titles = [myTheses, myJournals, myPosters, myTalks].map((item) => item.title.title);

const { content: theses } = myTheses;
const { content: journals } = myJournals;
const { content: posters } = myPosters;
const { content: talks } = myTalks;

export { titles, theses, journals, posters, talks };
