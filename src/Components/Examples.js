import React, { Component } from "react";
import HTMLEx from "./HTMLEx";

export default class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: [
        {
          title: "Post-it notes on a dark background",
          href: "https://sklinkusch.github.io/post-it/"
        },
        {
          title: "Layout of an article from https://medium.com",
          href: "https://sklinkusch.github.io/article-layout"
        }
      ]
    };
  }
  render() {
    return (
      <div className="container sk-bg-white">
        <div className="sk-placeholder-tiny" />
        <section id="examples">
          <h3>Examples of my work</h3>
          <HTMLEx data={this.state.html} />
        </section>
        <div className="sk-placeholder-tiny" />
      </div>
    );
  }
}
