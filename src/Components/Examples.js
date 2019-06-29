import React, { Component } from "react";
import "../styles/Examples.scss";
import ExampleSec from "./ExampleSec";

export default class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: [
        {
          title: "Fake birdwatching site with structural HTML elements",
          href: "https://sklinkusch.github.io/01-Structuring-the-Web/",
          src:
            "https://github.com/sklinkusch/01-Structuring-the-Web/raw/master/structuring-the-web.png"
        },
        {
          title: "Basic information about myself",
          href: "https://sklinkusch.github.io/02-css-basics/index.html",
          src:
            "https://github.com/sklinkusch/02-css-basics/raw/master/css-basics.png"
        },
        {
          title: "Fake letter layout",
          href: "https://sklinkusch.github.io/03-letter-layout/letter.html",
          src:
            "https://github.com/sklinkusch/03-letter-layout/raw/master/letter-layout.png"
        },
        {
          title: "Page layout such as in a book or pdf file",
          href: "https://sklinkusch.github.io/04-page-layout/",
          src:
            "https://github.com/sklinkusch/04-page-layout/raw/master/page-layout.png"
        },
        {
          title: "Fake blog page with blogposts",
          href: "https://sklinkusch.github.io/06-blog-headlines/blog.html",
          src:
            "https://github.com/sklinkusch/06-blog-headlines/raw/master/Screenshot.png"
        },
        {
          title: "Fake instagram profile page",
          href: "https://sklinkusch.github.io/07-instagram-flexbox/",
          src:
            "https://github.com/sklinkusch/07-instagram-flexbox/raw/master/Screenshot.png"
        },
        {
          title: "Webpage with a mega menu",
          href: "https://sklinkusch.github.io/08-mega-menu/",
          src:
            "https://github.com/sklinkusch/08-mega-menu/raw/master/Screenshot.png"
        },
        {
          title: "Website with a responsive layout",
          href: "https://sklinkusch.github.io/09-responsive-design/",
          src: "https://github.com/sklinkusch/09-responsive-design/raw/master/Screenshot.png"
        },
        {
          title: "Post-it notes on a dark background",
          href: "https://sklinkusch.github.io/post-it/",
          src: "https://github.com/sklinkusch/post-it/raw/master/Screenshot.png"
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
          href: "https://sklinkusch.github.io/Github-search/",
          src:
            "https://github.com/sklinkusch/Github-search/raw/master/Screenshot.png"
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
          title: "Country information based on a search for the calling code",
          href: "https://sklinkusch.github.io/country-codes/",
          src:
            "https://github.com/sklinkusch/country-codes/raw/master/Screenshot.png"
        },
        {
          title: "World weather page consuming data from DarkSky API",
          href: "https://sklinkusch.github.io/JS-weather/",
          src:
            "https://github.com/sklinkusch/JS-weather/raw/master/Screenshot.png"
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
          <ExampleSec
            title="Examples using HTML, CSS/SCSS, and Bootstrap"
            data={this.state.html}
          />
          <ExampleSec
            title="Examples using vanilla JavaScript"
            data={this.state.javascript}
          />
          <ExampleSec title="Examples using React.js" data={this.state.react} />
        </section>
        <div className="sk-placeholder-tiny" />
      </div>
    );
  }
}
