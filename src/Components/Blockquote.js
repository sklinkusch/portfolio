/** @jsxImportSource theme-ui */
import React from "react"

const Blockquote = () => (
  <div className="container" sx={{ backgroundColor: "wwhite", opacity: 0.95, borderRadius: "10px" }}>
    <div sx={{ height: "1vh" }} />
    <blockquote sx={{ my: "30px", ml: "20px", pl: "20px", borderLeft: "4px solid #efefef" }}>
      <p className="mb-0">
        Amat Fortuna parum cordatos, amat audaciores et quibus iliud placet:
        &Pi;&alpha;&sigmaf; &epsilon;&rho;&rho;&iota;&phi;&theta;&omega;
        &kappa;&upsilon;&beta;&omicron;&sigmaf;
      </p>
      <p className="mb-0 small">
        (Fortuna loves the less reasonable people, she loves the courageous
        people and the people who love the sentence: Each dice is thrown.)
      </p>
      <footer className="blockquote-footer" sx={{ mt: "8px" }}>
        Erasmus of Rotterdam (Dutch humanist, 1466-1536)
      </footer>
    </blockquote>
    <div sx={{ height: "0.01px" }} />
  </div>
)

export default Blockquote
