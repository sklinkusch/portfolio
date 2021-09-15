import React, { useState } from "react"
import AppContext from "../Context/AppContext"
import CompskillCard from "./CompskillCard"
import Accordion from "react-bootstrap/Accordion"
// import Button from "react-bootstrap/Button"
import "../styles/Compskills.scss"
import { useAccordionToggle } from "react-bootstrap"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const CustomToggle = ({ children, eventKey, activeKey }) => {
  const onClickHandler = useAccordionToggle(eventKey, () => {
    // console.log("Totally custom")
  })
  return (
    <div className="sk-flex sk-row sk-jc-sb sk-ai-c">
      <h4 onClick={onClickHandler}>{children}</h4>
      {eventKey === activeKey ? <FaChevronUp /> : <FaChevronDown />}
    </div>
  )
}

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
  const [activeKey, setActiveKey] = useState(null)
  return (
    <Accordion
      id="compskills"
      className="d-block d-md-none"
      activeKey={activeKey}
      onSelect={(e) => setActiveKey(e)}
    >
      <h3> Computer-related Skills</h3>
      <AppContext.Consumer>
        {(context) =>
          context.skills.map((skill, oindex) => (
            <article key={oindex}>
              <CustomToggle eventKey={`${oindex}`} activeKey={activeKey}>
                {/* <h4> */}
                {skill.title} ({skill.content.length}){/* </h4> */}
              </CustomToggle>
              <Accordion.Collapse eventKey={`${oindex}`}>
                <div className="row album">
                  {skill.content.map((singleSkill, index) => (
                    <CompskillCard skill={singleSkill} key={index} />
                  ))}
                </div>
              </Accordion.Collapse>
            </article>
          ))
        }
      </AppContext.Consumer>
    </Accordion>
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
