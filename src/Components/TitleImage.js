import React from "react";
import stefan from "../images/Stefan.jpg";

const TitleImage = () => (
  <div className="sk-img-container sk-w100vw sk-h60vw sk-flex-col sk-jc-end sk-ai-end">
    <div className="sk-small-img">
      <img src={stefan} alt="Dr. Stefan Klinkusch" />
    </div>
  </div>
);

export default TitleImage;
