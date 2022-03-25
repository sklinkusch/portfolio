/** @jsxImportSource theme-ui */
import React, { useRef, useState, useEffect } from "react"
import MyNavbar from "./MyNavbar"
import TitleImage from "./TitleImage"
import Welcome from "./Welcome"
import Blockquote from "./Blockquote"
import Compskills from "./Compskills"
import Langskills from "./Langskills"
import CV from "./CV"
import Publications from "./Publications"
import References from "./References"
import Examples from "./Examples"
import Contact from "./Contact"
import Footer from "./Footer"
import background from "../images/photo-1515524738708-327f6b0037a7.jpeg"
/* eslint-disable react-hooks/exhaustive-deps */

const App = () => {
  const AppRef = useRef()
  const [height, setHeight] = useState(null)
  const postDimensions = () => {
    if (height !== AppRef.current.offsetHeight) {
      const myHeight = Math.max(
        height,
        AppRef.current.offsetHeight,
        AppRef.current.scrollHeight
      )
      setHeight(myHeight)
      window.parent.postMessage({ frameHeight: myHeight }, "*")
      /*console.log(myHeight);*/
    }
  }
  useEffect(() => {
    postDimensions()
  }, [])
  window.onload = () => postDimensions()
  window.onresize = () => postDimensions()
  return (
    <div className="App" ref={AppRef} sx={{ fontFamily: "body", backgroundImage: `url(${background})`, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>
      <MyNavbar />
      <TitleImage />
      <Welcome />
      <div sx={{ height: "3vh" }} />
      <Blockquote />
      <div sx={{ height: "3vh" }} />
      <Compskills />
      <div sx={{ height: "3vh" }} />
      <Langskills />
      <div sx={{ height: "3vh" }} />
      <CV />
      <div sx={{ height: "3vh" }} />
      <Publications />
      <div sx={{ height: "3vh" }} />
      <References />
      <div sx={{ height: "3vh" }} />
      <Examples />
      <div sx={{ height: "3vh" }} />
      <Contact />
      <div sx={{ height: "3vh" }} />
      <Footer />
    </div>
  )
}

export default App
