import React from "react";
import { NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

export default function CVTitle(props) {
  return (
    <NavItem>
      <NavLink
        className={classnames({ active: props.activeTab === props.number })}
        onClick={() => props.toggle(props.number)}
      >
        {props.title}
      </NavLink>
    </NavItem>
  );
}
