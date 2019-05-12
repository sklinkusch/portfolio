import React from "react";
import "../styles/Langskills.scss";

export default function Langskills() {
  return (
    <div className="container sk-bg-white" id="langskills">
      <div className="sk-placeholder-tiny" />
      <section>
        <h3>Language Skills</h3>
        <div className="progress">
          <div
            className="progress-bar sk-bg-black sk-col-white sk-w33 sk-al bold sk-pl15"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span className="gboth sk-col-white bold">German (native)</span>
            <span className="german sk-col-white bold">German</span>
          </div>
          <div
            className="progress-bar sk-bg-red sk-col-white bold sk-w33"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span className="rnative">(native)</span>
          </div>
          <div
            className="progress-bar sk-bg-gold sk-w33"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </section>
      <div className="sk-placeholder-tiny" />
    </div>
  );
}
