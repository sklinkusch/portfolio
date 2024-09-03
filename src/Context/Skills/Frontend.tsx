import react from '../../images/React.png';
import gatsby from '../../images/Gatsby.png';
import angularjs from '../../images/AngularJS.svg';
import nextjs from '../../images/nextjs.png';
import angular from '../../images/Angular.svg';
import vite from '../../images/vite.svg';

const frontend = {
  title: 'Frontend Frameworks',
  content: [
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
      name: 'Angular',
      imageSrc: angular,
      imageId: 'angular',
      link: 'https://angular.dev/',
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
      name: 'NextJS',
      imageSrc: nextjs,
      imageId: 'nextjs',
      link: 'https://nextjs.org',
      imgStyle: {
        width: '150px',
      },
    },
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
      name: 'ViteJS',
      imageSrc: vite,
      imageId: 'vite',
      link: 'https://vitejs.dev',
    },
  ],
};

export default frontend;
