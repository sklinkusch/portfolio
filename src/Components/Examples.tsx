/** @jsxImportSource theme-ui */
import ExampleSec from './ExampleSec';
import { useAppContext } from '../Hooks/useAppContext';

const Examples = () => {
  const { html, javascript, react } = useAppContext();
  return (
    <div className="container" sx={{ backgroundColor: 'wwhite', opacity: 0.95, borderRadius: '10px' }}>
      <div sx={{ height: '1vh' }} />
      <section id="examples" sx={{ margin: '30px 0' }}>
        <h3 sx={{ mb: '1rem' }}>Examples of my work</h3>
        {html.length > 0 && <ExampleSec title="Examples using HTML, CSS/SCSS, and Bootstrap" data={html} />}
        {javascript.length > 0 && <ExampleSec title="Examples using Vanilla JavaScript" data={javascript} />}
        {react.length > 0 && <ExampleSec title="Examples using React.js" data={react} />}
      </section>
      <div sx={{ height: '1vh' }} />
    </div>
  );
};

export default Examples;
