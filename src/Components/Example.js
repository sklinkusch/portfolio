import React from "react";

export default function Example(props) {
  const { data } = props;
  return (
    <div className="webdev-item col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <a href={data.href} target="_blank" rel="noopener noreferrer">
        <img
          src={data.src}
          alt={data.title}
          title={data.title}
          className="ref-thumbnail"
        />
      </a>
    </div>
  );
}
