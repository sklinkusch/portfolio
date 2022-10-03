import education from "./Education";
import certificates from "./Certificates";
import work from "./Work";

const titles = [education, certificates, work].map((item) => item.title);
const content = [education, certificates, work].map((item) => item.content);

export { titles, content };
