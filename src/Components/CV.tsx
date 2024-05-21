/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import CVTitles from './CVTitles';
import CVContent from './CVContent';

const CV = () => {
  const [activeTab, setTab] = useState(0);
  const toggle = (tab: number) => {
    if (activeTab !== tab) {
      setTab(tab);
    }
  };
  return (
    <div className="container" sx={{ backgroundColor: 'wwhite', opacity: 0.95, borderRadius: '10px' }}>
      <div sx={{ height: '1vh' }} />
      <section id="cv" sx={{ margin: '30px 0' }}>
        <h3 sx={{ mb: '1rem' }}>My Curriculum Vitae</h3>
        <CVTitles toggle={toggle} activeTab={activeTab} />
        <CVContent activeTab={activeTab} />
      </section>
      <div sx={{ height: '1vh' }} />
    </div>
  );
};

export default CV;
