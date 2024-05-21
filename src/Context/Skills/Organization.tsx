import asana from '../../images/Asana.png';
import jira from '../../images/Jira.svg';
import gcalendar from '../../images/Google-Calendar.png';

const organization = {
  title: 'Team Organization',
  content: [
    {
      name: 'Asana',
      imageSrc: asana,
      imageId: 'asana',
      link: 'https://asana.com/',
    },
    {
      name: 'Jira',
      imageSrc: jira,
      imageId: 'jira',
      link: 'https://www.atlassian.com/software/jira',
      imgStyles: {
        width: '180px',
      },
    },
    {
      name: 'Google Calendar',
      imageSrc: gcalendar,
      imageId: 'gcalendar',
      link: 'https://workspace.google.com/products/calendar/',
      imgStyles: {
        width: '200px',
      },
    },
  ],
};

export default organization;
