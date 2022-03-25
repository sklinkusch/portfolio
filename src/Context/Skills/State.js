import redux from "../../images/redux-logo.png";
import react from "../../images/React.svg";

const state = {
  title: "State Management",
  content: [
    {
      name: "Redux",
      imageSrc: redux,
      imageId: "redux",
      link: "https://redux.js.org/",
      imgStyles: {
        width: "150px",
      },
    },
    {
      name: "Context API",
      imageSrc: react,
      imageId: "react",
      link: "https://reactjs.org/docs/context.html",
      imgStyles: {
        width: "250px",
      },
    },
  ],
};

export default state;
