import React, { useState } from "react"
import Headroom from "react-headroom"
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

const MyNavbar = () => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!isOpen)
  }
  return (
    <Headroom
      style={{
        transition: "all 0.5s ease-in-out",
        WebkitTransition: "all 0.5s ease-in-out",
        MozTransition: "all 0.5s ease-in-out",
        OTransition: "all 0.5s ease-in-out",
      }}
    >
      <Navbar color="light" light expand="lg">
        <NavbarBrand href="#">Dr. Stefan Klinkusch</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="./index.html" className="active">
                Home
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Skills
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem href="#compskills">
                  Computer-related skills
                </DropdownItem>
                <DropdownItem href="#langskills">Language skills</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#cv">CV</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#pubs">Publications</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#refs">References</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#examples">Examples</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Headroom>
  )
}

export default MyNavbar
