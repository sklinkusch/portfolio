/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { TabContent } from 'reactstrap';
import PubTitles from './PubTitles';
import Theses from './Theses';
import Journals from './Journals';
import Posters from './Posters';
import Talks from './Talks';

const Publications = () => {
  const [activeTab, setTab] = useState<number>(0);
  return (
    <div className="container" sx={{ pb: '16px', backgroundColor: 'wwhite', opacity: 0.95, borderRadius: '10px' }}>
      <div sx={{ height: '1vh' }} />
      <section id="pubs" sx={{ margin: '30px 0' }}>
        <h3 sx={{ mb: '1rem' }}>Publications</h3>
        <PubTitles setTab={setTab} activeTab={activeTab} />
        <TabContent activeTab={activeTab}>
          <Theses />
          <Journals />
          <Posters />
          <Talks />
        </TabContent>
      </section>
    </div>
  );
};

export default Publications;
