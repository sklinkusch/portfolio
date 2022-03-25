import html from "../../images/HTML5_logo_and_wordmark.svg";
import markdown from "../../images/markdown.png";
import latex from "../../images/220px-LaTeX_logo.svg.png";

const markup = {
  title: "Markup Languages",
  content: [
    {
      name: "HTML5",
      imageSrc: html,
      imageId: "html",
      link: "https://www.w3.org/html/",
      imgStyles: {
        width: "220px",
      },
    },
    {
      name: "Markdown",
      imageSrc: markdown,
      imageId: "markdown",
      link: "https://daringfireball.net/projects/markdown/"
    },
    {
      name: "LaTeX",
      imageSrc: latex,
      imageId: "latex",
      link: "https://www.latex-project.org/",
      imgStyles: {
        width: "200px",
      },
    },
  ],
};

export default markup;
