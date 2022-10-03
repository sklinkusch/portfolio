import javascript from "../../images/ES6LOGO.png";
import typescript from "../../images/TypeScript.svg"
import perl from "../../images/Perl.png";
import bash from "../../images/Bash.png";

const scripting = {
  title: "Scripting Languages",
  content: [
    {
      name: "ECMAScript 6",
      imageSrc: javascript,
      imageId: "ecmascript",
      link: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
      imgStyles: {
        width: "150px",
      },
    },
    {
      name: "TypeScript",
      imageSrc: typescript,
      imageId: "typescript",
      link: "https://www.typescriptlang.org/",
      imgStyles: {
        width: "150px",
      },
    },
    {
      name: "Perl",
      imageSrc: perl,
      imageId: "perl",
      link: "https://www.perl.org/",
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
      link: "https://www.gnu.org/software/bash/",
      imgStyles: {
        maxHeight: "200px",
        width: "100%"
      },
    },
  ],
};

export default scripting;
