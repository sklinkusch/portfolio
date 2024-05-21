import react from '../../images/React.png';
import gatsby from '../../images/Gatsby.png';
import angularjs from '../../images/AngularJS.svg';
import nextjs from '../../images/nextjs.png';

const frontend = {
  title: 'Frontend Frameworks',
  content: [
    {
      name: 'React',
      imageSrc: react,
      imageId: 'react',
      link: 'https://reactjs.org/',
      imgStyles: {
        width: '250px',
      },
    },
    {
      name: 'Gatsby',
      imageSrc: gatsby,
      imageId: 'gatsby',
      link: 'https://www.gatsbyjs.com/',
      imgStyles: {
        width: '200px',
      },
    },
    {
      name: 'AngularJS',
      imageSrc: angularjs,
      imageId: 'angularjs',
      link: 'http://www.angularjs.org/',
      imgStyle: {
        width: '150px',
      },
    },
    {
      name: 'NextJS',
      imageSrc: nextjs,
      imageId: 'nextjs',
      link: 'https://nextjs.org',
      imgStyle: {
        width: '150px',
      },
    },
  ],
};

export default frontend;
