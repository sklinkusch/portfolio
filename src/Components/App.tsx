/** @jsxImportSource theme-ui */
import MyNavbar from './MyNavbar';
import TitleImage from './TitleImage';
import Welcome from './Welcome';
import Blockquote from './Blockquote';
import Compskills from './Compskills';
import Langskills from './Langskills';
import CV from './CV';
import Publications from './Publications';
import References from './References';
import Examples from './Examples';
import Contact from './Contact';
import Footer from './Footer';
import background from '../images/photo-1515524738708-327f6b0037a7.jpeg';

const App = () => {
  return (
    <div
      className="App"
      sx={{
        fontFamily: 'body',
        backgroundImage: `url(${background})`,
        margin: 0,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >
      <MyNavbar />
      <TitleImage />
      <Welcome />
      <div sx={{ height: '3vh' }} />
      <Blockquote />
      <div sx={{ height: '3vh' }} />
      <Compskills />
      <div sx={{ height: '3vh' }} />
      <Langskills />
      <div sx={{ height: '3vh' }} />
      <CV />
      <div sx={{ height: '3vh' }} />
      <Publications />
      <div sx={{ height: '3vh' }} />
      <References />
      <div sx={{ height: '3vh' }} />
      <Examples />
      <div sx={{ height: '3vh' }} />
      <Contact />
      <div sx={{ height: '3vh' }} />
      <Footer />
    </div>
  );
};

export default App;
