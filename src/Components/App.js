import React from "react";
import "../styles/App.scss";
import MyNavbar from "./MyNavbar";
import TitleImage from "./TitleImage";
import Welcome from "./Welcome";
import Blockquote from "./Blockquote";
import Compskills from "./Compskills";
import Langskills from "./Langskills";
import CV from "./CV";
import Publications from "./Publications";
import References from "./References";
import Examples from "./Examples";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => (
  <div className="App">
    <MyNavbar />
    <TitleImage />
    <Welcome />
    <div className="sk-placeholder" />
    <Blockquote />
    <div className="sk-placeholder" />
    <Compskills />
    <div className="sk-placeholder" />
    <Langskills />
    <div className="sk-placeholder" />
    <CV />
    <div className="sk-placeholder" />
    <Publications />
    <div className="sk-placeholder" />
    <References />
    <div className="sk-placeholder" />
    <Examples />
    <div className="sk-placeholder" />
    <Contact />
    <div className="sk-placeholder" />
    <Footer />
  </div>
);

export default App;
