import redux from "../../images/redux-logo.png";
import react from "../../images/React.svg";

const state = {
  title: "State Management",
  content: [
    {
      name: "Redux",
      imageSrc: redux,
      imageId: "redux",
      imgStyles: {
        width: "150px",
      },
    },
    {
      name: "Context API",
      imageSrc: react,
      imageId: "react",
      imgStyles: {
        width: "250px",
      },
    },
  ],
};

export default state;
