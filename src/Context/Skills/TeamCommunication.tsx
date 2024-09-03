import slack from '../../images/Slack.png';
import rocketchat from '../../images/RocketChat.png';
import teams from '../../images/Teams.svg';

const teamcommunication = {
  title: 'Team Communication',
  content: [
    {
      name: 'Microsoft Teams',
      imageSrc: teams,
      imageId: 'teams',
      link: 'https://www.microsoft.com/de-de/microsoft-teams/log-in',
      imgStyles: {
        width: '180px',
      },
    },
    {
      name: 'RocketChat',
      imageSrc: rocketchat,
      imageId: 'rocketchat',
      link: 'https://www.rocket.chat',
      imgStyles: {
        width: '180px',
      },
    },
    {
      name: 'Slack',
      imageSrc: slack,
      imageId: 'slack',
      link: 'https://slack.com/',
      imgStyles: {
        width: '190px',
      },
    },
  ],
};

export default teamcommunication;
