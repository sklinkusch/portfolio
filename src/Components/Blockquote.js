import React from "react"

const Blockquote = () => (
  <div className="container sk-bg-white">
    <div className="sk-placeholder-tiny" />
    <blockquote className="blockquote" id="blockquote">
      <p className="mb-0">
        Amat Fortuna parum cordatos, amat audaciores et quibus iliud placet:
        &Pi;&alpha;&sigmaf; &epsilon;&rho;&rho;&iota;&phi;&theta;&omega;
        &kappa;&upsilon;&beta;&omicron;&sigmaf;
      </p>
      <p className="mb-0 small">
        (Fortuna loves the less reasonable people, she loves the courageous
        people and the people who love the sentence: Each dice is thrown.)
      </p>
      <footer className="blockquote-footer sk-mt-8px">
        Erasmus of Rotterdam (Dutch humanist, 1466-1536)
      </footer>
    </blockquote>
    <div className="sk-placeholder-verytiny" />
  </div>
)

export default Blockquote
