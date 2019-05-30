import React, { Component } from "react";
import HTMLEx from "./HTMLEx";
import JSEx from "./JSEx";

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
      ],
      javascript: [
        {
          title: "Fortune Teller Game Website",
          href: "https://sklinkusch.github.io/fortune-js/"
        },
        {
          title: "Animal Age Calculator",
          href: "https://sklinkusch.github.io/JS-animal-age/"
        },
        {
          title: "Quote of the Day",
          href: "https://fbw-12.github.io/13-quote-of-the-day-sklinkusch/"
        },
        {
          title: "Tip Calculator",
          href: "https://fbw-12.github.io/14-tip-calculator-sklinkusch/"
        },
        {
          title: "iTunes Search",
          href: "https://fbw-12.github.io/16-the-sounds-of-classes/"
        },
        {
          title: "GithubSearch",
          href: "https://fbw-12.github.io/17-mygithub-sklinkusch/"
        },
        {
          title: "Coming Soon Countdown",
          href:
            "https://fbw-12.github.io/18-coming-soon-landingpage-sklinkusch/"
        },
        {
          title: "New Tab page with Github content",
          href: "https://fbw-12.github.io/19-new-tab-github-sklinkusch/"
        },
        {
          title: "ToDo list page using event handlers",
          href: "https://fbw-12.github.io/architecture-eventlisteners/"
        },
        {
          title:
            "overview of bus and train departures at defined station in Berlin",
          href: "https://sklinkusch.github.io/bvg-test/"
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
          <JSEx data={this.state.javascript} />
        </section>
        <div className="sk-placeholder-tiny" />
      </div>
    );
  }
}
