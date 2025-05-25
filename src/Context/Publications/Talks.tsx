/** @jsxImportSource theme-ui */

const talks = {
  title: {
    title: 'Talks',
  },
  content: [
    {
      title: (
        <q sx={{ fontStyle: 'italic' }}>
          Laser-driven electron dynamics in molecules using time-dependent configuration interaction methods
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
        <q sx={{ fontStyle: 'italic' }}>
          Time-resolved photoelectron spectra using explicitly time-dependent{' '}
          <abbr title="configuration interaction">CI</abbr> varitaions
        </q>
      ),
      article: null,
      place: <span>Presentation Domino, Free University of Berlin, Germany</span>,
      date: (
        <span>
          January 16<sup>th</sup>, 2016
        </span>
      ),
    },
    {
      title: (
        <q sx={{ fontStyle: 'italic' }}>
          Laser-driven electron dynamics in molecules using time-dependent configuration interaction methods
        </q>
      ),
      article: null,
      place: <span>Theoretical Chemistry Group Seminar, Humboldt University of Berlin, Germany</span>,
      date: (
        <span>
          October 11<sup>th</sup>, 2012
        </span>
      ),
    },
    {
      title: <q sx={{ fontStyle: 'italic' }}>Lasergetriebene Vielelektronendynamik in molekularen Systemen</q>,
      article: null,
      place: <span>Ph.D disputation, University of Potsdam, Germany</span>,
      date: (
        <span>
          October 20<sup>th</sup>, 2011
        </span>
      ),
    },
    {
      title: <q sx={{ fontStyle: 'italic' }}>Electron Dynamics: photoionization, dissipation, and nuclear modes</q>,
      article: null,
      place: <span>Theoretical Chemistry Group Seminar, University of Potsdam, Germany</span>,
      date: (
        <span>
          June 30<sup>th</sup>, 2010
        </span>
      ),
    },
    {
      title: (
        <q sx={{ fontStyle: 'italic' }}>
          A heuristic model describing effects of photoionization as an extension to time-dependent configuration
          interaction methods
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
        <q sx={{ fontStyle: 'italic' }}>
          A rough model describing effects of photoionization as an extension to{' '}
          <abbr title="time-dependent configuration interaction singles">TD-CIS</abbr>
        </q>
      ),
      article: null,
      place: <span>Theoretical Chemistry Group Seminar, University of Potsdam, Germany</span>,
      date: (
        <span>
          May 6<sup>th</sup>, 2009
        </span>
      ),
    },
    {
      title: (
        <q sx={{ fontStyle: 'italic' }}>
          First-order simultaneous optimization of molecular geometry and electronic wave function
        </q>
      ),
      article: (
        <span>
          (<span className="authors">Moss and Li</span>,{' '}
          <span sx={{ fontStyle: 'italic' }}>The Journal of Chemical Physics</span>{' '}
          <span sx={{ fontWeight: 'bold' }}>129</span>, <span className="jpages">114102</span> <span>(2008)</span>)
        </span>
      ),
      place: <span>Journal Club, Theoretical Chemistry Group Seminar, University of Potsdam, Germany</span>,
      date: (
        <span>
          November 5<sup>th</sup>, 2008
        </span>
      ),
    },
    {
      title: <q sx={{ fontStyle: 'italic' }}>Pseudospectral time-dependent density functional theory</q>,
      article: (
        <span>
          (<span className="authors">Ko et al.</span>,{' '}
          <span sx={{ fontStyle: 'italic' }}>The Journal of Chemical Physics</span>{' '}
          <span sx={{ fontWeight: 'bold' }}>128</span>, <span className="jpages">104103</span> <span>(2008)</span>)
        </span>
      ),
      place: <span>Journal Club, Theoretical Chemistry Group Seminar, University of Potsdam, Germany</span>,
      date: (
        <span>
          May 28<sup>th</sup>, 2008
        </span>
      ),
    },
    {
      title: (
        <q sx={{ fontStyle: 'italic' }}>
          Theorie des femtosekundenlaserinduzierten intermolekularen Elektronentransfers mittels zeitabhängiger
          Konfigurationswechselwirkungs-Methoden
        </q>
      ),
      article: null,
      place: <span>Diploma Candidates&apos; Talks, Institute of Chemistry Seminar, University of Potsdam</span>,
      date: (
        <span>
          May 7<sup>th</sup>, 2008
        </span>
      ),
    },
    {
      title: (
        <q sx={{ fontStyle: 'italic' }}>
          Laser-induced Intermolecular Electron Transfer by using{' '}
          <abbr title="time-dependent configuration interaction singles">TD-CIS</abbr>
        </q>
      ),
      article: null,
      place: <span>Theoretical Chemistry Group Seminar, University of Potsdam, Germany</span>,
      date: (
        <span>
          January 28<sup>th</sup>, 2008
        </span>
      ),
    },
    {
      title: <q sx={{ fontStyle: 'italic' }}>Preparation and Excitation of Wave Packets for Cs@Cu (111)</q>,
      article: null,
      place: <span>Theoretical Chemistry Group Seminar, University of Potsdam, Germany</span>,
      date: (
        <span>
          March 8<sup>th</sup>, 2007
        </span>
      ),
    },
  ],
};

type TalksType = typeof talks;
export type { TalksType };
export { talks };
