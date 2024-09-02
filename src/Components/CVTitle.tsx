import { NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  activeTab: number;
  number: number;
  setTab: Dispatch<SetStateAction<number>>;
  title: string;
};

const CVTitle = (props: Props) => {
  return (
    <NavItem>
      <NavLink
        className={classnames({ active: props.activeTab === props.number })}
        onClick={() => props.setTab(props.number)}
      >
        {props.title}
      </NavLink>
    </NavItem>
  );
};

export default CVTitle;
