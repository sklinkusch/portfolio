import React from "react";
import CVTitles from "./CVTitles";
import CVContent from "./CVContent";

export default class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };
  render() {
    return (
      <div className="container sk-bg-white">
        <div className="sk-placeholder-tiny" />
        <section id="cv">
          <h3>My Curriculum Vitae</h3>
          <CVTitles toggle={this.toggle} activeTab={this.state.activeTab} />
          <CVContent activeTab={this.state.activeTab} />
        </section>
        <div className="sk-placeholder-tiny" />
      </div>
    );
  }
}
