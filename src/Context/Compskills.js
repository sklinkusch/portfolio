import markup from "./Markup";
import styling from "./Styling";
import versioning from "./Versioning";
import scripting from "./Scripting";
import programming from "./Programming";
import frontend from "./Frontend";
import mobile from "./Mobile";
import state from "./State";
import nodejs from "../images/Node.js_logo.svg";
import express from "../images/Expressjs.png";
import graphql from "../images/480px-GraphQL_Logo.svg.png";
import sanity from "../images/Sanity.png";
import mongodb from "../images/MongoDB.png";
import handlebars from "../images/handlebars.png";
import liquid from "../images/Shopify-liquid.jpg";
import slack from "../images/Slack.svg";
import asana from "../images/Asana.png";
import gcalendar from "../images/Google-Calendar.png";
import gdrive from "../images/google-drive.png";
import dropbox from "../images/Dropbox.png";
import vscode from "../images/Visual_Studio_Code_1.35_icon.svg";
import brackets from "../images/Brackets.png";
import linux from "../images/Linux.svg";
import ubuntu from "../images/Ubuntu.svg";
import opensuse from "../images/OpenSUSE.svg";

const skills = [
  markup,
  styling,
  versioning,
  scripting,
  programming,
  frontend,
  mobile,
  state,
  {
    title: "Backend",
    content: [
      {
        name: "Node.js",
        imageSrc: nodejs,
        imageId: "nodejs",
      },
      {
        name: "Express.js",
        imageSrc: express,
        imageId: "express",
      },
      {
        name: "GraphQL",
        imageSrc: graphql,
        imageId: "graphql",
      },
    ],
  },
  {
    title: "Content Management Systems",
    content: [
      {
        name: "Sanity",
        imageSrc: sanity,
        imageId: "sanity",
      },
    ],
  },
  {
    title: "Databases",
    content: [
      {
        name: "MongoDB",
        imageSrc: mongodb,
        imageId: "mongodb",
      },
    ],
  },
  {
    title: "Template Languages",
    content: [
      {
        name: "Handlebars",
        imageSrc: handlebars,
        imageId: "handlebars",
      },
      {
        name: "Shopify Liquid",
        imageSrc: liquid,
        imageId: "liquid",
      },
      {
        name: "PHP",
        imageSrc:
          "https://cdn-1.wp.nginx.com/wp-content/uploads/2016/03/PHP-logo.svg_.png",
        imageId: "php",
      },
    ],
  },
  {
    title: "Team Communication and Organization",
    content: [
      {
        name: "Slack",
        imageSrc: slack,
        imageId: "slack",
      },
      {
        name: "Asana",
        imageSrc: asana,
        imageId: "asana",
      },
      {
        name: "Google Calendar",
        imageSrc: gcalendar,
        imageId: "gcalendar",
      },
    ],
  },
  {
    title: "File Sharing",
    content: [
      {
        name: "Google Drive",
        imageSrc: gdrive,
        imageId: "gdrive",
      },
      {
        name: "Dropbox",
        imageSrc: dropbox,
        imageId: "dropbox",
      },
    ],
  },
  {
    title: "Editors",
    content: [
      {
        name: "VS Code",
        imageSrc: vscode,
        imageId: "vscode",
      },
      {
        name: "Brackets",
        imageSrc: brackets,
        imageId: "brackets",
      },
    ],
  },
  {
    title: "Operating Systems",
    content: [
      {
        name: "Linux",
        imageSrc: linux,
        imageId: "linux",
      },
      {
        name: "Ubuntu",
        imageSrc: ubuntu,
        imageId: "ubuntu",
      },
      {
        name: "openSUSE",
        imageSrc: opensuse,
        imageId: "opensuse",
      },
    ],
  },
];

export default skills;
