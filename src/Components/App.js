import React from "react";
import "../styles/App.scss";
import MyNavbar from "./MyNavbar";
import TitleImage from "./TitleImage";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <TitleImage />
      <Welcome />
    </div>
  );
}

export default App;
