import React from "react";

export default function References() {
  const references = [
    {
      title: (
        <span>Workgroup of Prof. P. Saalfrank at University of Potsdam</span>
      ),
      href: "https://www.uni-potsdam.de/theochem/index.html",
      subitems: [
        {
          title: <span>Prof. Dr. Peter Saalfrank</span>,
          href: "https://tcb16.chem.uni-potsdam.de/saalfrank/curric_saal.html"
        },
        {
          title: <span>Priv.-Doz. Dr. habil. Tillmann Klamroth</span>,
          href: "https://tcb16.chem.uni-potsdam.de/klamroth/"
        },
        {
          title: <span>Priv.-Doz. Dr. habil. Dominik Kröner</span>,
          href: "https://tcb16.chem.uni-potsdam.de/kroener/"
        },
        {
          title: <span>Priv.-Doz. Jean Christophe Tremblay, Ph.D</span>,
          href: "https://jctremblay.userpage.fu-berlin.de/webpage/home.html"
        }
      ]
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
          href: "https://jctremblay.userpage.fu-berlin.de/webpage/home.html"
        }
      ]
    },
    {
      title: (
        <span>
          Special Research Area{" "}
          <span className="italic">(Sonderforschungsbereich)</span> Sfb450 for
          funding
        </span>
      )
    }
  ];
  return (
    <div>
      <h3>References in Chemistry</h3>
      <ul>
        {references.map(reference => {
          const returnvalue =
            reference.subitems.length > 0 ? (
              <>
                <li>
                  <a
                    href={reference.href}
                    className="exlink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {reference.title}
                  </a>
                </li>
                <ul>
                  {reference.subitems.map((subref, index) => (
                    <li>
                      <a
                        href={subref.href}
                        className="exlink"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {subref.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <li>
                <a
                  href={reference.href}
                  className="exlink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {reference.title}
                </a>
              </li>
            );
          return returnvalue;
        })}
      </ul>
    </div>
  );
}
