import React, { useState } from "react";
import AppContext from "./AppContext";
import compskills from "./Compskills";

const AppProvider = (props) => {
  const [state] = useState({
    skills: compskills,
    CVTabTitles: [
      {
        title: "Education",
      },
      {
        title: "Certificates",
      },
      {
        title: "Work Experience",
      },
    ],
    CVContent: [
      {
        list: [
          {
            time: <span>1989-1995</span>,
            desc: <span>Primary school in Berlin, Germany</span>,
          },
          {
            time: <span>1995-2002</span>,
            desc: <span>Grammar school in Berlin, Germany</span>,
          },
          {
            time: <span>2002-2008</span>,
            desc: (
              <span>
                Studies of chemistry at University of Potsdam, Germany
              </span>
            ),
          },
          {
            time: <span>2007-2008</span>,
            desc: (
              <span>
                Diploma thesis in the group of Prof. P. Saalfrank at University
                of Potsdam, Germany
              </span>
            ),
          },
          {
            time: <span>2008-2011</span>,
            desc: (
              <span>
                Ph.D thesis in the group of Prof. P. Saalfrank at University of
                Potsdam, Germany
              </span>
            ),
          },
          {
            time: <span>2016</span>,
            desc: (
              <span>Educating class at Works gGmbH in Berlin, Germany</span>
            ),
          },
          {
            time: <span>2018-2019</span>,
            desc: (
              <span>
                Web development class at Digital Career Institute in Berlin,
                Germany
              </span>
            ),
          },
        ],
      },
      {
        list: [
          {
            time: <span>2002</span>,
            desc: (
              <span>
                University entry exam (<span className="italic">Abitur</span>
                ), mark 1.5 (1.0 best, 4,0 just passed, 6.0 worst)
              </span>
            ),
          },
          {
            time: <span>2008</span>,
            desc: (
              <span>
                Diploma in chemistry, mark 1.8 (1.0 best, 4.0 just passed, 5.0
                worst)
              </span>
            ),
          },
          {
            time: <span>2011</span>,
            desc: (
              <span>
                Ph.D in science (<span className="italic">Dr. rer. nat.</span>)
                mark <span className="italic">magna cum laude</span>
              </span>
            ),
          },
          {
            time: <span>2016</span>,
            desc: (
              <span>
                Educator's qualification certificate according to the German
                Order for the educator's qualification (
                <abbr title="Ausbilder-Eignungsverordnung">AEVO</abbr>)
              </span>
            ),
          },
          {
            time: <span>2019</span>,
            desc: <span>Web development certificate</span>,
          },
        ],
      },
      {
        list: [
          {
            time: <span>2008-2011</span>,
            desc: (
              <span>
                Scientific coworker in the group of Prof. P. Saalfrank at
                University of Potsdam, Germany
              </span>
            ),
          },
          {
            time: <span>2014-2016</span>,
            desc: (
              <span>
                Scientific coworker in the group of Dr. J. C. Tremblay at Free
                University of Berlin, Germany
              </span>
            ),
          },
          {
            time: <span>2019</span>,
            desc: (
              <span>
                Internship in web development at Daizu GmbH/sleep.ink in Berlin,
                Germany
              </span>
            ),
          },
          {
            time: <span>since 2020</span>,
            desc: (
              <span>
                Web developer at Daizu GmbH/sleep.ink in Berlin, Germany
              </span>
            ),
          },
        ],
      },
    ],
    PubTabTitles: [
      {
        title: "Theses",
      },
      {
        title: "Journals",
      },
      {
        title: "Posters",
      },
      {
        title: "Talks",
      },
    ],
    theses: [
      {
        authors: "Stefan Klinkusch",
        title:
          "Simulations of laser-driven correlated many-electron dynamics in molecular systems",
        translated: null,
        type: "Dissertation",
        school: "University of Potsdam, Germany",
        year: 2011,
      },
      {
        authors: "Stefan Klinkusch",
        title:
          "Theorie des femtosekundenlaserinduzierten intermolekularen Elektronentransfers mittels zeitabhängiger Konfigurationswechselwirkungs-Methoden",
        translated:
          "Theory of femtosecond laser-induced intermolecular electron transfer by means of time-dependent configuration interaction methods",
        type: "Diploma thesis",
        school: "University of Potsdam, Germany",
        year: 2008,
      },
    ],
    journals: [
      {
        authors: "Stefan Klinkusch and Jean Christophe Tremblay",
        title:
          "Resolution-of-identity stochastic time-dependent configuration interaction for dissipative electron dynamics in strong fields",
        href: "http://dx.doi.org/10.1063/1.4948646",
        journal: "The Journal of Chemical Physics",
        edition: "144",
        pages: "184108",
        year: "2016",
      },
      {
        authors: "Stefan Klinkusch and Tillmann Klamroth",
        title:
          "Simulations of pump-probe excitations of electronic wave packets for a large quasi-rigid molecular systems by means of an extension to the time-dependent configuration interaction singles method",
        href: "http://dx.doi.org/10.1142/S0219633613500053",
        journal: "Journal of Theoretical and Computational Chemistry",
        edition: "12",
        pages: "1350005",
        year: "2013",
      },
      {
        authors:
          "Jean Christophe Tremblay, Stefan Klinkusch, Tillmann Klamroth, and Peter Saalfrank",
        title: "Dissipative many-electron dynamics of ionizing systems",
        href: "http://dx.doi.org/10.1063/1.3532410",
        journal: "The Journal of Chemical Physics",
        edition: "134",
        pages: "044311",
        year: "2011",
      },
      {
        authors: "Stefan Klinkusch, Peter Saalfrank, and Tillmann Klamroth",
        title:
          "Laser-induced electron dynamics including photoionization: A heuristic model within time-dependent configuration interaction theory",
        href: "http://dx.doi.org/1.3218847",
        journal: "The Journal of Chemical Physics",
        edition: "131",
        pages: "114304",
        year: "2009",
      },
      {
        authors: "Stefan Klinkusch, Tillmann Klamroth, and Peter Saalfrank",
        title:
          "Long-range intermolecular charge transfer induced by laser pulses: an explicitly time-dependent configuration interaction approach",
        href: "http://dx.doi.org/10.1039/b817873a",
        journal: "Physical Chemistry Chemical Physics",
        edition: "11",
        pages: "3875-3884",
        year: "2009",
      },
      {
        authors: "Dominik Kröner, Stefan Klinkusch, and Tillmann Klamroth",
        title:
          "Enhanced photodesorption by vibrational pre-excitation: Quantum model simulations for Cs/Cu (111)",
        href: "http://dx.doi.org/10.1016/j.susc.2007.04.260",
        journal: "Surface Science",
        edition: "602",
        pages: "3148-3152",
        year: "2008",
      },
    ],
    posters: [
      {
        authors: "Stefan Klinkusch and Jean Christophe Tremblay",
        title: (
          <q className="arttitle">
            Simulations of time-resolved photoelectron spectra using extended
            time-dependent configuration interaction methods
          </q>
        ),
        event: <span>Symposium for Theoretical Chemistry</span>,
        place: <span>Potsdam, Germany</span>,
        year: <span>2015</span>,
      },
      {
        authors: "Stefan Klinkusch, Tillmann Klamroth, and Peter Saalfrank",
        title: (
          <q className="arttitle">
            Laser-induced electron dynamics including photoionization: A
            heuristic model within time-dependent configuration interaction
            theory
          </q>
        ),
        event: (
          <span>
            Symposium of the Priority Program 1145 of the{" "}
            <abbr title="German Research Foundation (Deutsche Forschungsgemeinschaft)">
              DFG
            </abbr>
            :{" "}
            <span className="jtitle">
              Modern and Universal First-Principles Methods for Many-Electron
              Systems in Chemistry and Physics
            </span>
          </span>
        ),
        place: <span>Bad Herrenalb, Germany</span>,
        year: <span>2010</span>,
      },
      {
        authors: "Stefan Klinkusch, Tillmann Klamroth, and Peter Saalfrank",
        title: (
          <q className="arttitle">
            Laser-induced intermolecular electron transfer by means of{" "}
            <abbr title="time-dependent configuration interaction singles">
              TD-CIS
            </abbr>
          </q>
        ),
        event: <span>Symposium for Theoretical Chemistry</span>,
        place: <span>Ramsau am Dachstein, Austria</span>,
        year: <span>2008</span>,
      },
    ],
    talks: [
      {
        title: (
          <q className="arttitle">
            Laser-driven electron dynamics in molecules using time-dependent
            configuration interaction methods
          </q>
        ),
        article: null,
        place: <span>Bundesinstitut für Risikobewertung, Berlin, Germany</span>,
        date: (
          <span>
            April 22<sup>nd</sup>, 2018
          </span>
        ),
      },
      {
        title: (
          <q className="arttitle">
            Time-resolved photoelectron spectra using explicitly time-dependent{" "}
            <abbr title="configuration interaction">CI</abbr> varitaions
          </q>
        ),
        article: null,
        place: (
          <span>Presentation Domino, Free University of Berlin, Germany</span>
        ),
        date: (
          <span>
            January 16<sup>th</sup>, 2016
          </span>
        ),
      },
      {
        title: (
          <q className="arttitle">
            Laser-driven electron dynamics in molecules using time-dependent
            configuration interaction methods
          </q>
        ),
        article: null,
        place: (
          <span>
            Theoretical Chemistry Group Seminar, Humboldt University of Berlin,
            Germany
          </span>
        ),
        date: (
          <span>
            October 11<sup>th</sup>, 2012
          </span>
        ),
      },
      {
        title: (
          <q className="arttitle">
            Lasergetriebene Vielelektronendynamik in molekularen Systemen
          </q>
        ),
        article: null,
        place: <span>Ph.D disputation, University of Potsdam, Germany</span>,
        date: (
          <span>
            October 20<sup>th</sup>, 2011
          </span>
        ),
      },
      {
        title: (
          <q className="arttitle">
            Electron Dynamics: photoionization, dissipation, and nuclear modes
          </q>
        ),
        article: null,
        place: (
          <span>
            Theoretical Chemistry Group Seminar, University of Potsdam, Germany
          </span>
        ),
        date: (
          <span>
            June 30<sup>th</sup>, 2010
          </span>
        ),
      },
      {
        title: (
          <q className="arttitle">
            A heuristic model describing effects of photoionization as an
            extension to time-dependent configuration interaction methods
          </q>
        ),
        article: null,
        place: <span>Tag der Chemie, Free University of Berlin, Germany</span>,
        date: (
          <span>
            June 16<sup>th</sup>, 2010
          </span>
        ),
      },
      {
        title: (
          <q className="arttitle">
            A rough model describing effects of photoionization as an extension
            to{" "}
            <abbr title="time-dependent configuration interaction singles">
              TD-CIS
            </abbr>
          </q>
        ),
        article: null,
        place: (
          <span>
            Theoretical Chemistry Group Seminar, University of Potsdam, Germany
          </span>
        ),
        date: (
          <span>
            May 6<sup>th</sup>, 2009
          </span>
        ),
      },
      {
        title: (
          <q className="arttitle">
            First-order simultaneous optimization of molecular geometry and
            electronic wave function
          </q>
        ),
        article: (
          <span>
            (<span className="authors">Moss and Li</span>,{" "}
            <span className="jtitle">The Journal of Chemical Physics</span>{" "}
            <span className="jedition">129</span>,{" "}
            <span className="jpages">114102</span>{" "}
            <span className="pubyear">2008</span>)
          </span>
        ),
        place: (
          <span>
            Journal Club, Theoretical Chemistry Group Seminar, University of
            Potsdam, Germany
          </span>
        ),
        date: (
          <span>
            November 5<sup>th</sup>, 2008
          </span>
        ),
      },
      {
        title: (
          <q className="arttitle">
            Pseudospectral time-dependent density functional theory
          </q>
        ),
        article: (
          <span>
            (<span className="authors">Ko et al.</span>,{" "}
            <span className="jtitle">The Journal of Chemical Physics</span>{" "}
            <span className="jedition">128</span>,{" "}
            <span className="jpages">104103</span>{" "}
            <span className="pubyear">2008</span>)
          </span>
        ),
        place: (
          <span>
            Journal Club, Theoretical Chemistry Group Seminar, University of
            Potsdam, Germany
          </span>
        ),
        date: (
          <span>
            May 28<sup>th</sup>, 2008
          </span>
        ),
      },
      {
        title: (
          <q className="arttitle">
            Theorie des femtosekundenlaserinduzierten intermolekularen
            Elektronentransfers mittels zeitabhängiger
            Konfigurationswechselwirkungs-Methoden
          </q>
        ),
        article: null,
        place: (
          <span>
            Diploma Candidates' Talks, Institute of Chemistry Seminar,
            University of Potsdam
          </span>
        ),
        date: (
          <span>
            May 7<sup>th</sup>, 2008
          </span>
        ),
      },
      {
        title: (
          <q className="arttitle">
            Laser-induced Intermolecular Electron Transfer by using{" "}
            <abbr title="time-dependent configuration interaction singles">
              TD-CIS
            </abbr>
          </q>
        ),
        article: null,
        place: (
          <span>
            Theoretical Chemistry Group Seminar, University of Potsdam, Germany
          </span>
        ),
        date: (
          <span>
            January 28<sup>th</sup>, 2008
          </span>
        ),
      },
      {
        title: (
          <q className="arttitle">
            Preparation and Excitation of Wave Packets for Cs@Cu (111)
          </q>
        ),
        article: null,
        place: (
          <span>
            Theoretical Chemistry Group Seminar, University of Potsdam, Germany
          </span>
        ),
        date: (
          <span>
            March 8<sup>th</sup>, 2007
          </span>
        ),
      },
    ],
    references: [
      {
        title: (
          <span>Workgroup of Prof. P. Saalfrank at University of Potsdam</span>
        ),
        href: "https://www.uni-potsdam.de/theochem/index.html",
        subitems: [
          {
            title: <span>Prof. Dr. Peter Saalfrank</span>,
            href:
              "https://tcb16.chem.uni-potsdam.de/saalfrank/curric_saal.html",
          },
          {
            title: <span>Priv.-Doz. Dr. habil. Tillmann Klamroth</span>,
            href: "https://tcb16.chem.uni-potsdam.de/klamroth/",
          },
          {
            title: <span>Priv.-Doz. Dr. habil. Dominik Kröner</span>,
            href: "https://tcb16.chem.uni-potsdam.de/kroener/",
          },
          {
            title: <span>Priv.-Doz. Jean Christophe Tremblay, Ph.D</span>,
            href: "https://jctremblay.userpage.fu-berlin.de/webpage/home.html",
          },
        ],
      },
      {
        title: (
          <span>
            Workgroup of Priv.-Doz. Jean Christophe Tremblay, Ph.D at Free
            University of Berlin
          </span>
        ),
        href: "https://jctremblay.userpage.fu-berlin.de/webpage/home.html",
        subitems: [
          {
            title: <span>Priv.-Doz. Jean Christophe Tremblay, Ph.D</span>,
            href: "https://jctremblay.userpage.fu-berlin.de/webpage/home.html",
          },
        ],
      },
      {
        title: (
          <span>
            Special Research Area{" "}
            <span className="italic">(Sonderforschungsbereich)</span> Sfb450 for
            funding
          </span>
        ),
        href: "http://users.physik.fu-berlin.de/~abt/sfb450/english.html",
        subitems: [],
      },
    ],
    html: [
      {
        title: "Fake birdwatching site with structural HTML elements",
        href: "https://sklinkusch.github.io/01-Structuring-the-Web/",
        src:
          "https://github.com/sklinkusch/01-Structuring-the-Web/raw/master/structuring-the-web.png",
      },
      {
        title: "Basic information about myself",
        href: "https://sklinkusch.github.io/02-css-basics/index.html",
        src:
          "https://github.com/sklinkusch/02-css-basics/raw/master/css-basics.png",
      },
      {
        title: "Fake letter layout",
        href: "https://sklinkusch.github.io/03-letter-layout/letter.html",
        src:
          "https://github.com/sklinkusch/03-letter-layout/raw/master/letter-layout.png",
      },
      {
        title: "Page layout such as in a book or pdf file",
        href: "https://sklinkusch.github.io/04-page-layout/",
        src:
          "https://github.com/sklinkusch/04-page-layout/raw/master/page-layout.png",
      },
      {
        title: "Fake blog page with blogposts",
        href: "https://sklinkusch.github.io/06-blog-headlines/blog.html",
        src:
          "https://github.com/sklinkusch/06-blog-headlines/raw/master/Screenshot.png",
      },
      {
        title: "Fake instagram profile page",
        href: "https://sklinkusch.github.io/07-instagram-flexbox/",
        src:
          "https://github.com/sklinkusch/07-instagram-flexbox/raw/master/Screenshot.png",
      },
      {
        title: "Webpage with a mega menu",
        href: "https://sklinkusch.github.io/08-mega-menu/",
        src:
          "https://github.com/sklinkusch/08-mega-menu/raw/master/Screenshot.png",
      },
      {
        title: "Website with a responsive layout",
        href: "https://sklinkusch.github.io/09-responsive-design/",
        src:
          "https://github.com/sklinkusch/09-responsive-design/raw/master/Screenshot.png",
      },
      {
        title: "Post-it notes on a dark background",
        href: "https://sklinkusch.github.io/post-it/",
        src: "https://github.com/sklinkusch/post-it/raw/master/Screenshot.png",
      },
      {
        title: "Layout of an article from https://medium.com",
        href: "https://sklinkusch.github.io/article-layout",
      },
    ],
    javascript: [
      {
        title: "Fortune Teller Game Website",
        href: "https://sklinkusch.github.io/fortune-js/",
        src:
          "https://github.com/sklinkusch/fortune-js/raw/master/Screenshot_en.png",
      },
      {
        title: "Animal Age Calculator",
        href: "https://sklinkusch.github.io/JS-animal-age/",
        src:
          "https://github.com/sklinkusch/JS-animal-age/raw/master/Screenshot.png",
      },
      {
        title: "Quote of the Day",
        href: "https://fbw-12.github.io/13-quote-of-the-day-sklinkusch/",
      },
      {
        title: "Tip Calculator",
        href: "https://fbw-12.github.io/14-tip-calculator-sklinkusch/",
      },
      {
        title: "iTunes Search",
        href: "https://fbw-12.github.io/16-the-sounds-of-classes/",
      },
      {
        title: "GithubSearch",
        href: "https://sklinkusch.github.io/Github-search/",
        src:
          "https://github.com/sklinkusch/Github-search/raw/master/Screenshot.png",
      },
      {
        title: "Coming Soon Countdown",
        href: "https://fbw-12.github.io/18-coming-soon-landingpage-sklinkusch/",
      },
      {
        title: "New Tab page with Github content",
        href: "https://fbw-12.github.io/19-new-tab-github-sklinkusch/",
      },
      {
        title: "Country information based on a search for the calling code",
        href: "https://sklinkusch.github.io/country-codes/",
        src:
          "https://github.com/sklinkusch/country-codes/raw/master/Screenshot.png",
      },
      {
        title: "World weather page consuming data from DarkSky API",
        href: "https://sklinkusch.github.io/JS-weather/",
        src:
          "https://github.com/sklinkusch/JS-weather/raw/master/Screenshot.png",
      },
      {
        title: "ToDo list page using event handlers",
        href: "https://sklinkusch.github.io/architecture-eventlisteners/",
        src:
          "https://github.com/sklinkusch/architecture-eventlisteners/raw/master/Screenshot.png",
      },
      {
        title:
          "overview of bus and train departures at defined station in Berlin",
        href: "https://sklinkusch.github.io/bvg-test/",
        src:
          "https://raw.githubusercontent.com/sklinkusch/bvg-test/master/Screenshot.png",
      },
    ],
    react: [
      {
        title: "information about many countries and dependent territories",
        href: "https://countrydb.sklinkusch.now.sh/",
        src:
          "https://raw.githubusercontent.com/sklinkusch/country-db/master/Screenshot.png",
      },
      {
        title: "chat mockup using React components",
        href: "https://sklinkusch.github.io/nice-chat",
        src:
          "https://raw.githubusercontent.com/sklinkusch/nice-chat/master/Screenshot.png",
      },
      {
        title: "small clock tutorial with React",
        href: "https://sklinkusch.github.io/react-clock",
        src:
          "https://raw.githubusercontent.com/sklinkusch/react-clock/master/Screenshot.png",
      },
      {
        title:
          "dashboard with a clock, a to-do-list, and a random background image",
        href: "https://sklinkusch.github.io/react-dashboard",
        src:
          "https://raw.githubusercontent.com/sklinkusch/react-dashboard/master/Screenshot.png",
      },
      {
        title: "markdown editor page using React",
        href: "https://sklinkusch.github.io/react-markdown-editor",
        src:
          "https://raw.githubusercontent.com/sklinkusch/react-markdown-editor/master/Screenshot.png",
      },
      {
        title: "a simple memo-list using React",
        href: "https://sklinkusch.github.io/react-memolist",
        src:
          "https://raw.githubusercontent.com/sklinkusch/react-memolist/master/Screenshot.png",
      },
      {
        title: "a world weather page using React and Context",
        href: "https://react-weather.sklinkusch.now.sh/",
        src:
          "https://raw.githubusercontent.com/sklinkusch/react-weather/master/Screenshot.png",
      },
      {
        title: "iTunes search using React",
        href: "https://sound-of-react.sklinkusch.now.sh/",
        src:
          "https://raw.githubusercontent.com/sklinkusch/sound-of-react/master/Screenshot.png",
      },
      {
        title: "VBB timetable page using React",
        href: "https://sklinkusch.github.io/VBB",
        src: "https://github.com/sklinkusch/VBB/raw/master/Screenshot.png",
      },
    ],
    footerLinks: [
      {
        href: "https://github.com/sklinkusch",
        class: "github",
        icon: "fab fa-github-square",
      },
      {
        href: "https://www.linkedin.com/in/stefan-klinkusch",
        class: "linkedin",
        icon: "fab fa-linkedin",
      },
      {
        href: "https://xing.to/StefanKlinkusch",
        class: "xing",
        icon: "fab fa-xing-square",
      },
      {
        href: "mailto:stefan.klinkusch@googlemail.com",
        class: "mail",
        icon: "fas fa-envelope",
      },
    ],
  });
  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
