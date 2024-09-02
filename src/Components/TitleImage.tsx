/** @jsxImportSource theme-ui */
import stefan from '../images/Stefan.jpg';
import background from '../images/photo-1505685296765-3a2736de412f.jpeg';

const TitleImage = () => (
  <div
    sx={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '60vw',
    }}
  >
    <div
      sx={{
        width: ['39vw', '26vw', '19.5vw'],
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: ['45vw', '30vw', '22.5vw'],
        marginBottom: ['3.5vw', '3vw', '2.5vw', '2vw'],
        marginRight: [
          0,
          'calc((100vw - 540px)/2)',
          'calc((100vw - 720px)/2)',
          'calc((100vw - 960px)/2)',
          'calc((100vw - 1140px)/2)',
        ],
        overflow: 'hidden',
      }}
    >
      <img src={stefan} alt="Dr. Stefan Klinkusch" sx={{ width: '100%', height: '100%', opacity: 1, zIndex: 5 }} />
    </div>
  </div>
);

export default TitleImage;
