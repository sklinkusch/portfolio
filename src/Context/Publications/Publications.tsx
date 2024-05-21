import myTheses from './Theses';
import myJournals from './Journals';
import myPosters from './Posters';
import myTalks from './Talks';

const titles = [myTheses, myJournals, myPosters, myTalks].map((item) => item.title);

const { content: theses } = myTheses;
const { content: journals } = myJournals;
const { content: posters } = myPosters;
const { content: talks } = myTalks;

export { titles, theses, journals, posters, talks };
