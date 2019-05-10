import React from "react";
import "../styles/App.scss";
import MyNavbar from "./MyNavbar";
import TitleImage from "./TitleImage";
import Welcome from "./Welcome";
import Blockquote from "./Blockquote";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <TitleImage />
      <Welcome />
      <div className="sk-placeholder" />
      <Blockquote />
    </div>
  );
}

export default App;
