import React from "react";
import RefItem from "./RefItem";

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
      ),
      href: "http://users.physik.fu-berlin.de/~abt/sfb450/english.html",
      subitems: []
    }
  ];
  return (
    <div className="container sk-bg-white">
      <div className="sk-placeholder-tiny" />
      <section id="refs">
        <h3>References</h3>
        <ul>
          {references.map((reference, index) => (
            <RefItem key={index} data={reference} />
          ))}
        </ul>
      </section>
      <div className="sk-placeholder-tiny" />
    </div>
  );
}
