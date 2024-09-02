import education from './Education';
import certificates from './Certificates';
import work from './Work';

const titles = [education, certificates, work].map((item) => item.title.title);
const content = [education, certificates, work].map((item) => item.content);
type CVContentType = typeof content;

export { titles, content, CVContentType };
