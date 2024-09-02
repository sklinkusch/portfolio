/** @jsxImportSource theme-ui */
import ExampleSec from './ExampleSec';
import AppContext from '../Context/AppContext';

const Examples = () => (
  <div className="container" sx={{ backgroundColor: 'wwhite', opacity: 0.95, borderRadius: '10px' }}>
    <div sx={{ height: '1vh' }} />
    <AppContext.Consumer>
      {(context) => (
        <section id="examples" sx={{ margin: '30px 0' }}>
          <h3 sx={{ mb: '1rem' }}>Examples of my work</h3>
          {'html' in context && Array.isArray(context.html) && context.html.length && (
            <ExampleSec title="Examples using HTML, CSS/SCSS, and Bootstrap" data={context.html} />
          )}
          {'javascript' in context && Array.isArray(context.javascript) && context.javascript.length && (
            <ExampleSec title="Examples using vanilla JavaScript" data={context.javascript} />
          )}
          {'react' in context && Array.isArray(context.react) && context.react.length && (
            <ExampleSec title="Examples using React.js" data={context.react} />
          )}
        </section>
      )}
    </AppContext.Consumer>
    <div sx={{ height: '1vh' }} />
  </div>
);

export default Examples;
