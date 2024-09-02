/** @jsxImportSource theme-ui */
import { useState } from 'react';
import CVTitles from './CVTitles';
import CVContent from './CVContent';

const CV = () => {
  const [activeTab, setTab] = useState(0);
  return (
    <div className="container" sx={{ backgroundColor: 'wwhite', opacity: 0.95, borderRadius: '10px' }}>
      <div sx={{ height: '1vh' }} />
      <section id="cv" sx={{ margin: '30px 0' }}>
        <h3 sx={{ mb: '1rem' }}>My Curriculum Vitae</h3>
        <CVTitles setTab={setTab} activeTab={activeTab} />
        <CVContent activeTab={activeTab} />
      </section>
      <div sx={{ height: '1vh' }} />
    </div>
  );
};

export default CV;
