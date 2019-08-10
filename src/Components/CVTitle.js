import React from "react";
import { NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const CVTitle = props => (
  <NavItem>
    <NavLink
      className={classnames({ active: props.activeTab === props.number })}
      onClick={() => props.toggle(props.number)}
    >
      {props.title}
    </NavLink>
  </NavItem>
);

export default CVTitle;
