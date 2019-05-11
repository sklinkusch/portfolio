import React from "react";
import "../styles/App.scss";
import MyNavbar from "./MyNavbar";
import TitleImage from "./TitleImage";
import Welcome from "./Welcome";
import Blockquote from "./Blockquote";
import Compskills from "./Compskills";

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
    </div>
  );
}

export default App;
