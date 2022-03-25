import nodejs from "../../images/Node.js_logo.svg";
import express from "../../images/Expressjs.png";
import graphql from "../../images/480px-GraphQL_Logo.svg.png";

const backend = {
  title: "Backend",
  content: [
    {
      name: "Node.js",
      imageSrc: nodejs,
      imageId: "nodejs",
      link: "https://nodejs.org/",
      imgStyles: {
        width: "190px",
      },
    },
    {
      name: "Express.js",
      imageSrc: express,
      imageId: "express",
      link: "http://expressjs.com/",
      imgStyles: {
        width: "190px",
      },
    },
    {
      name: "GraphQL",
      imageSrc: graphql,
      imageId: "graphql",
      link: "https://graphql.org/",
      imgStyles: {
        width: "150px",
      },
    },
  ],
};

export default backend;
