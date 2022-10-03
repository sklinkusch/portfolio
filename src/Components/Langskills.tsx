/** @jsxImportSource theme-ui */
import React from "react";
import { Progress } from "reactstrap";

const Langskills = () => (
  <div className="container" id="langskills" sx={{ backgroundColor: "white", borderRadius: "10px" }}>
    <div sx={{ height: "1vh" }} />
    <section sx={{ margin: "30px 0" }}>
      <h3 sx={{ mb: "1rem" }}>Language Skills</h3>
      <Progress multi sx={{ my: "20px" }}>
        <Progress bar value="33.3" style={{ paddingLeft: "15px" }} barStyle={{ backgroundColor: "#000000" }}>
          <span sx={{ display: "none", fontWeight: "bold", color: "wwhite", "@media screen and (min-width: 451px)": { display: "inline" }}}>German (native)</span>
          <span sx={{ display: "inline", fontWeight: "bold", color: "wwhite", "@media screen and (min-width: 451px)": { display: "none" }}}>German</span>
        </Progress>
        <Progress bar value="33.3" barStyle={{ backgroundColor: "#FF0000" }}>
          <span sx={{ display: "inline", fontWeight: "bold", color: "wwhite", "@media screen and (min-width: 451px)": { display: "none" }}}>(native)</span>
        </Progress>
        <Progress bar value="33.4" barStyle={{ backgroundColor: "#FFCC00" }} />
      </Progress>
      <Progress multi sx={{ my: "20px" }}>
        <Progress bar value="28" style={{ paddingLeft: "15px" }} barStyle={{ backgroundColor: "#00247D" }} >
          <span sx={{ fontWeight: "bold", color: "wwhite" }}>English</span>
        </Progress>
        <Progress bar value="28" barStyle={{ backgroundColor: "#CF142B" }} />
        <Progress bar value="28" barStyle={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid black", borderRight: "1px solid black", borderTop: "1px solid black" }} />
      </Progress>
      <Progress multi sx={{ my: "20px" }}>
        <Progress bar value="25" style={{ paddingLeft: "15px" }} barStyle={{ backgroundColor: "#000091" }}>
          <span sx={{ fontWeight: "bold", color: "wwhite" }}>French</span>
        </Progress>
        <Progress bar value="25" barStyle={{ backgroundColor: "#FFFFFF", borderTop: "1px solid black", borderBottom: "1px solid black" }} />
        <Progress bar value="25" barStyle={{ backgroundColor: "#E1000F" }} />
      </Progress>
      <Progress multi sx={{ my: "20px" }}>
        <Progress bar value="30" style={{ paddingLeft: "15px" }} barStyle={{ backgroundColor: "yellow", borderTop: "1px solid black", borderLeft: "1px solid black", borderBottom: "1px solid black" }}>
          <span sx={{ color: "black", fontWeight: "bold" }}>Latin</span>
        </Progress>
        <Progress bar value="30" style={{ paddingLeft: "15px" }} barStyle={{ backgroundColor: "white", borderTop: "1px solid black", borderRight: "1px solid black", borderBottom: "1px solid black" }} />
      </Progress>
    </section>
    <div sx={{ height: "1vh" }} />
  </div>
);

export default Langskills;
