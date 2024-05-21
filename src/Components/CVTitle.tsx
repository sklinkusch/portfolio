import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

type Props = {
  activeTab: number;
  number: number;
  toggle: Function;
  title: string;
};

const CVTitle = (props: Props) => (
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
