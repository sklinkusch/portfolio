/** @jsxImportSource theme-ui  */
import '@fortawesome/fontawesome-free/css/all.css';
import AppContext from '../Context/AppContext';

type Link = {
  href: string;
  icon: string;
  color: string;
  hoverColor: string;
};

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="container" sx={{ backgroundColor: 'wwhite', opacity: 0.95, borderRadius: '10px' }}>
      <footer>
        <div sx={{ textAlign: 'center', fontSize: '1.5rem' }}>
          <AppContext.Consumer>
            {
              (context) =>
                'footerLinks' in context &&
                Array.isArray(context.footerLinks) &&
                context.footerLinks.length > 0 &&
                context.footerLinks.map((link: Link, index: number) => (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    sx={{ textDecoration: 'none' }}
                  >
                    <i className={link.icon} sx={{ color: link.color, '&:hover': { color: link.hoverColor } }} />
                  </a>
                ))
              // .reduce((prev, curr) => [prev, '  ', curr])
            }
          </AppContext.Consumer>
        </div>
        <p sx={{ textAlign: 'center' }}>
          <span>&copy;</span>
          <span>{` Stefan Klinkusch, 2019-${year}`}</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
