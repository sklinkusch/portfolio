import javascript from "../../images/ES6LOGO.svg";
import perl from "../../images/Perl.png";
import bash from "../../images/Bash.svg";

const scripting = {
  title: "Scripting Languages",
  content: [
    {
      name: "ECMAScript 6",
      imageSrc: javascript,
      imageId: "ecmascript",
      imgStyles: {
        width: "150px",
      },
    },
    {
      name: "Perl",
      imageSrc: perl,
      imageId: "perl",
      imgStyles: {
        minHeight: "210px",
        maxWidth: "250px",
        maxHeight: "250px",
        width: "auto",
      }
    },
    {
      name: "Bourne-Again Shell",
      imageSrc: bash,
      imageId: "bash",
      imgStyles: {
        maxHeight: "200px",
      },
    },
  ],
};

export default scripting;
