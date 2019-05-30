import React, { Component } from "react";
import HTMLEx from "./HTMLEx";
import JSEx from "./JSEx";
import ReactEx from "./ReactEx";
import "../styles/Examples.scss";

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
          href: "https://sklinkusch.github.io/fortune-js/",
          src:
            "https://github.com/sklinkusch/fortune-js/raw/master/Screenshot_en.png"
        },
        {
          title: "Animal Age Calculator",
          href: "https://sklinkusch.github.io/JS-animal-age/",
          src:
            "https://github.com/sklinkusch/JS-animal-age/raw/master/Screenshot.png"
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
          href: "https://sklinkusch.github.io/architecture-eventlisteners/",
          src:
            "https://github.com/sklinkusch/architecture-eventlisteners/raw/master/Screenshot.png"
        },
        {
          title:
            "overview of bus and train departures at defined station in Berlin",
          href: "https://sklinkusch.github.io/bvg-test/",
          src:
            "https://raw.githubusercontent.com/sklinkusch/bvg-test/master/Screenshot.png"
        }
      ],
      react: [
        {
          title: "information about many countries and dependent territories",
          href: "https://countrydb.sklinkusch.now.sh/",
          src:
            "https://raw.githubusercontent.com/sklinkusch/country-db/master/Screenshot.png"
        },
        {
          title: "chat mockup using React components",
          href: "https://sklinkusch.github.io/nice-chat",
          src:
            "https://raw.githubusercontent.com/sklinkusch/nice-chat/master/Screenshot.png"
        },
        {
          title: "small clock tutorial with React",
          href: "https://sklinkusch.github.io/react-clock",
          src:
            "https://raw.githubusercontent.com/sklinkusch/react-clock/master/Screenshot.png"
        },
        {
          title:
            "dashboard with a clock, a to-do-list, and a random background image",
          href: "https://sklinkusch.github.io/react-dashboard",
          src:
            "https://raw.githubusercontent.com/sklinkusch/react-dashboard/master/Screenshot.png"
        },
        {
          title: "markdown editor page using React",
          href: "https://sklinkusch.github.io/react-markdown-editor",
          src:
            "https://raw.githubusercontent.com/sklinkusch/react-markdown-editor/master/Screenshot.png"
        },
        {
          title: "a simple memo-list using React",
          href: "https://sklinkusch.github.io/react-memolist",
          src:
            "https://raw.githubusercontent.com/sklinkusch/react-memolist/master/Screenshot.png"
        },
        {
          title: "a world weather page using React and Context",
          href: "https://react-weather.sklinkusch.now.sh/",
          src:
            "https://raw.githubusercontent.com/sklinkusch/react-weather/master/Screenshot.png"
        },
        {
          title: "iTunes search using React",
          href: "https://sound-of-react.sklinkusch.now.sh/",
          src:
            "https://raw.githubusercontent.com/sklinkusch/sound-of-react/master/Screenshot.png"
        },
        {
          title: "VBB timetable page using React",
          href: "https://sklinkusch.github.io/VBB",
          src: "https://github.com/sklinkusch/VBB/raw/master/Screenshot.png"
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
          <ReactEx data={this.state.react} />
        </section>
        <div className="sk-placeholder-tiny" />
      </div>
    );
  }
}
