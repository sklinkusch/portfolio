import handlebars from '../../images/handlebars.png';
import php from '../../images/PHP-logo.svg';
import liquid from '../../images/Shopify-liquid.jpg';

const template = {
  title: 'Template Languages',
  content: [
    {
      name: 'Handlebars',
      imageSrc: handlebars,
      imageId: 'handlebars',
      link: 'https://handlebarsjs.com/',
    },
    {
      name: 'PHP',
      imageSrc: php,
      imageId: 'php',
      link: 'https://www.php.net/',
    },
    {
      name: 'Shopify Liquid',
      imageSrc: liquid,
      imageId: 'liquid',
      link: 'https://shopify.github.io/liquid/',
    },
  ],
};

export default template;
