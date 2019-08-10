import React, { useState } from "react";
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
  DropdownItem
} from "reactstrap";

const MyNavbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
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
            <DropdownMenu right>
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
  );
};

export default MyNavbar;
