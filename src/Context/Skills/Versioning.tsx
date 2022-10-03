import git from "../../images/Git-logo.png";
import github from "../../images/Github.png";
import bitbucket from "../../images/bitbucket.png";
import gitlab from "../../images/GitLab.svg";

const versioning = {
  title: "Versioning",
  content: [
    {
      name: "git",
      imageSrc: git,
      imageId: "git",
      link: "https://git-scm.com/",
      imgStyles: {
        width: "200px",
      },
    },
    {
      name: "GitHub",
      imageSrc: github,
      imageId: "github",
      link: "https://github.com",
      imgStyles: {
        width: "200px",
      },
    },
    {
      name: "Atlassian Bitbucket",
      imageSrc: bitbucket,
      imageId: "bitbucket",
      link: "https://www.atlassian.com/",
      imgStyles: {
        width: "200px",
      },
    },
    {
      name: "GitLab",
      imageSrc: gitlab,
      imageId: "gitlab",
      link: "https://gitlab.com/",
      imgStyles: {
        width: "250px",
      },
    },
  ],
};

export default versioning;
