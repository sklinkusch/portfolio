import React, { useRef, useState, useEffect } from "react";
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

const App = () => {
  const AppRef = useRef();
  const [height, setHeight] = useState(null);
  const postDimensions = () => {
    if (height !== AppRef.current.offsetHeight) {
      const myHeight = Math.max(
        height,
        AppRef.current.offsetHeight,
        AppRef.current.scrollHeight
      );
      setHeight(myHeight);
      window.parent.postMessage({ frameHeight: myHeight },"*");
      /*console.log(myHeight);*/
    }
  };
  useEffect(() => {
    postDimensions();
  },[]);
  window.onload = () => postDimensions();
  window.onresize = () => postDimensions();
  return (
    <div className="App" ref={AppRef}>
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
};

export default App;
