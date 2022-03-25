/** @jsxImportSource theme-ui */
import React from "react";

const Langskills = () => (
  <div className="container" id="langskills" sx={{ backgroundColor: "white", borderRadius: "10px" }}>
    <div sx={{ height: "1vh" }} />
    <section sx={{ margin: "30px 0" }}>
      <h3 sx={{ mb: "1rem" }}>Language Skills</h3>
      <div className="progress" sx={{ height: "2.5rem" }}>
        <div
          className="progress-bar"
          sx={{ paddingLeft: "15px", textAlign: "left !important", width: "33.33%", backgroundColor: "black", height: "1.5rem", fontWeight: "bold", color: "wwhite" }}
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span sx={{ display: "none", fontWeight: "bold", color: "wwhite", '@media screen and (min-width: 451px)': { display: "inline" }}}>German (native)</span>
          <span sx={{ display: "inline", fontWeight: "bold", color: "wwhite", '@media screen and (min-width: 451px)': { display: "none" }}}>German</span>
        </div>
        <div
          className="progress-bar"
          sx={{ width: "33.33%", backgroundColor: "red", height: "1.5rem", fontWeight: "bold", color: "wwhite" }}
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span sx={{ display: "inline", '@media screen and (min-width: 451px)': { display: "none" }}}>(native)</span>
        </div>
        <div
          className="progress-bar"
          sx={{ width: "33.33%", backgroundColor: "gold", height: "1.5rem" }}
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <div className="progress" sx={{ height: "2.5rem"}}>
        <div
          className="progress-bar"
          sx={{ paddingLeft: "15px", textAlign: "left !important", width: "28%", backgroundColor: "blue", height: "1.5rem", fontWeight: "bold", color: "wwhite" }}
          role="progressbar"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          English
        </div>
        <div
          className="progress-bar"
          sx={{ width: "28%", backgroundColor: "red", height: "1.5rem" }}
          role="progressbar"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        />
        <div
          className="progress-bar"
          sx={{ borderTop: "1px solid black", borderRight: "1px solid black", borderBottom: "1px solid black", width: "28%", backgroundColor: "white", height: "1.5rem" }}
          role="progressbar"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <div className="progress" sx={{ height: "2.5rem" }}>
        <div
          className="progress-bar"
          sx={{ paddingLeft: "15px", textAlign: "left !important", widh: "25%", backgroundColor: "blue", height: "1.5rem", fontWeight: "bold", color: "wwhite" }}
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          French
        </div>
        <div
          className="progress-bar"
          sx={{ borderTop: "1px solid black", borderBottom: "1px solid black", width: "25%", backgroundColor: "white", height: "1.5rem" }}
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        />
        <div
          className="progress-bar"
          sx={{ width: "25%", backgroundColor: "red", height: "1.5rem" }}
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <div className="progress" sx={{ height: "2.5rem" }}>
        <div
          className="progress-bar"
          sx={{ borderTop: "1px solid black", borderLeft: "1px solid black", borderBottom: "1px solid black", paddingLeft: "15px", textAlign: "left !important", width: "30%", backgroundColor: "yellow", height: "1.5rem", fontWeight: "bold", color: "black" }}
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Latin
        </div>
        <div
          className="progress-bar"
          sx={{ borderTop: "1px solid black", borderRight: "1px solid black", borderBottom: "1px solid black", width: "30%", backgroundColor: "white", height: "1.5rem" }}
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </section>
    <div sx={{ height: "1vh" }} />
  </div>
);

export default Langskills;
