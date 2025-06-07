const footerLinks = [
  {
    href: 'https://github.com/sklinkusch',
    class: 'github',
    icon: 'fab fa-github-square',
    color: 'ggrey',
    hoverColor: 'ddarkgreen',
  },
  {
    href: 'https://www.linkedin.com/in/stefan-klinkusch',
    class: 'linkedin',
    icon: 'fab fa-linkedin',
    color: 'ggrey',
    hoverColor: 'bblue',
  },
  {
    href: 'https://xing.to/StefanKlinkusch',
    class: 'xing',
    icon: 'fab fa-xing-square',
    color: 'ggrey',
    hoverColor: 'bblue',
  },
  {
    href: 'mailto:stefan.klinkusch@googlemail.com',
    class: 'mail',
    icon: 'fas fa-envelope',
    color: 'ggrey',
    hoverColor: 'oorange',
  },
];

type FooterLinkType = typeof footerLinks;
export type { FooterLinkType };

export default footerLinks;
