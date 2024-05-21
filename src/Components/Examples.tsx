/** @jsxImportSource theme-ui */
import React from 'react';
import ExampleSec from './ExampleSec';
import AppContext from '../Context/AppContext';

const Examples = () => (
  <div className="container" sx={{ backgroundColor: 'wwhite', opacity: 0.95, borderRadius: '10px' }}>
    <div sx={{ height: '1vh' }} />
    <AppContext.Consumer>
      {(context) => (
        <section id="examples" sx={{ margin: '30px 0' }}>
          <h3 sx={{ mb: '1rem' }}>Examples of my work</h3>
          <ExampleSec title="Examples using HTML, CSS/SCSS, and Bootstrap" data={context.html} />
          <ExampleSec title="Examples using vanilla JavaScript" data={context.javascript} />
          <ExampleSec title="Examples using React.js" data={context.react} />
        </section>
      )}
    </AppContext.Consumer>
    <div sx={{ height: '1vh' }} />
  </div>
);

export default Examples;
