import slack from "../../images/Slack.png";
import asana from "../../images/Asana.png";
import gcalendar from "../../images/Google-Calendar.png";

const teamcommunication = {
  title: "Team Communication and Organization",
  content: [
    {
      name: "Slack",
      imageSrc: slack,
      imageId: "slack",
      link: "https://slack.com/",
      imgStyles: {
        width: "190px",
      },
    },
    {
      name: "Asana",
      imageSrc: asana,
      imageId: "asana",
      link: "https://asana.com/",
    },
    {
      name: "Google Calendar",
      imageSrc: gcalendar,
      imageId: "gcalendar",
      link: "https://workspace.google.com/products/calendar/",
      imgStyles: {
        width: "200px",
      },
    },
  ],
};

export default teamcommunication;
