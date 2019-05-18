import React, { Component } from "react";
import { TabContent } from "reactstrap";
import PubTitles from "./PubTitles";
import Theses from "./Theses";
import Journals from "./Journals";

export default class Publications extends Component {
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
        <section id="pubs">
          <h3>Publications</h3>
          <PubTitles toggle={this.toggle} activeTab={this.state.activeTab} />
          <TabContent activeTab={this.state.activeTab}>
            <Theses />
            <Journals />
          </TabContent>
        </section>
      </div>
    );
  }
}
