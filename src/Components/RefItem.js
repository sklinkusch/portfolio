import React from "react";

const RefItem = props => {
  const { data } = props;
  const subs = "subitems" in data && data.subitems.length > 0 ? true : false;
  return (
    <React.Fragment>
      <li>
        <a
          href={data.href}
          target="_blank"
          rel="noopener noreferrer"
          className="exlink"
        >
          {data.title}
        </a>
      </li>
      {subs && (
        <ul>
          {data.subitems.map((subitem, index) => (
            <RefItem key={index} data={subitem} />
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default RefItem;
