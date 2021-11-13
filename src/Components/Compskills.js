import React from "react"
import AppContext from "../Context/AppContext"
import CompskillCard from "./CompskillCard"
import "../styles/Compskills.scss"

const CompskillsMediumLarge = () => (
  <section id="compskills" className="d-none d-md-block">
    <h3> Computer-related Skills</h3>
    <AppContext.Consumer>
      {(context) =>
        context.skills.map((skill, index) => (
          <article key={index}>
            <h4>{skill.title}</h4>
            <div className="row album">
              {skill.content.map((singleSkill, index) => (
                <CompskillCard skill={singleSkill} key={index} />
              ))}
            </div>
          </article>
        ))
      }
    </AppContext.Consumer>
  </section>
)

const CompskillsSmall = () => {
  return (
    <section
      id="compskills"
      className="d-block d-md-none"
    >
      <h3> Computer-related Skills</h3>
      <AppContext.Consumer>
        {(context) =>
          context.skills.map((skill, oindex) => (
            <details key={oindex}>
              <summary>
                {/* <h4> */}
                {skill.title} ({skill.content.length}){/* </h4> */}
              </summary>
              <div className="row album">
                {skill.content.map((singleSkill, index) => (
                  <CompskillCard skill={singleSkill} key={index} />
                ))}
              </div>
            </details>
          ))
        }
      </AppContext.Consumer>
    </section>
  )
}

const Compskills = () => (
  <div className="container sk-bg-white">
    <div className="sk-placeholder-tiny" />
    <CompskillsMediumLarge />
    <CompskillsSmall />
    <div className="sk-placeholder-tiny" />
  </div>
)

export default Compskills
