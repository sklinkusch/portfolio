import React from "react";
import "../styles/App.scss";
import MyNavbar from "./MyNavbar";
import TitleImage from "./TitleImage";
import Welcome from "./Welcome";
import Blockquote from "./Blockquote";
import Compskills from "./Compskills";
import Langskills from "./Langskills";
import CV from "./CV";

function App() {
  return (
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
    </div>
  );
}

export default App;
