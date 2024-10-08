/** @jsxImportSource theme-ui */

const certificates = {
  title: {
    title: 'Certificates',
  },
  content: {
    list: [
      {
        time: <span>2002</span>,
        desc: (
          <span>
            University entry exam (<span sx={{ fontStyle: 'italic' }}>Abitur</span>
            ), mark 1.5 (1.0 best, 4,0 just passed, 6.0 worst)
          </span>
        ),
      },
      {
        time: <span>2008</span>,
        desc: <span>Diploma in chemistry, mark 1.8 (1.0 best, 4.0 just passed, 5.0 worst)</span>,
      },
      {
        time: <span>2011</span>,
        desc: (
          <span>
            Ph.D in science (<span sx={{ fontStyle: 'italic' }}>Dr. rer. nat.</span>) mark{' '}
            <span sx={{ fontStyle: 'italic' }}>magna cum laude</span>
          </span>
        ),
      },
      {
        time: <span>2016</span>,
        desc: (
          <span>
            Educator&apos;s qualification certificate according to the German Order for the educator&apos;s
            qualification (<abbr title="Ausbilder-Eignungsverordnung">AEVO</abbr>)
          </span>
        ),
      },
      {
        time: <span>2019</span>,
        desc: <span>Web development certificate</span>,
      },
    ],
  },
};

export default certificates;
