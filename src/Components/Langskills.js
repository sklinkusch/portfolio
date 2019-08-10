import React from "react";
import "../styles/Langskills.scss";

const Langskills = () => (
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
      <div className="progress">
        <div
          className="progress-bar sk-w28 sk-col-white sk-pl15 sk-bg-blue bold sk-al"
          role="progressbar"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          English
        </div>
        <div
          className="progress-bar sk-w28 sk-bg-red"
          role="progressbar"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        />
        <div
          className="progress-bar sk-bg-white sk-w28 sk-bt-black sk-br-black sk-bb-black"
          role="progressbar"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <div className="progress">
        <div
          className="progress-bar sk-bg-blue sk-col-white sk-w25 sk-al sk-pl15 bold"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          French
        </div>
        <div
          className="progress-bar sk-bg-white sk-w25 sk-bt-black sk-bb-black"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        />
        <div
          className="progress-bar sk-bg-red sk-w25"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <div className="progress">
        <div
          className="progress-bar sk-w30 sk-bg-yellow sk-bl-black sk-bt-black sk-bb-black sk-col-black bold sk-al sk-pl15"
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Latin
        </div>
        <div
          className="progress-bar sk-w30 sk-bg-white sk-bt-black sk-bb-black sk-br-black"
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </section>
    <div className="sk-placeholder-tiny" />
  </div>
);

export default Langskills;
