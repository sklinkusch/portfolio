import React, { Component } from "react";
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

export default class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Navbar color="light" light expand="lg">
        <NavbarBrand href="#">Dr. Stefan Klinkusch</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
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
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
