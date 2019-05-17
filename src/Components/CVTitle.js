import React from "react";

export default function CVTitle(props) {
  return (
    <li className="nav-item">
      {props.active && (
        <a
          className="nav-link active"
          id={props.id}
          data-toggle="tab"
          href={props.href}
          role="tab"
          aria-controls={props.controls}
          aria-selected="true"
        >
          {props.title}
        </a>
      )}
      {!props.active && (
        <a
          className="nav-link"
          id={props.id}
          data-toggle="tab"
          href={props.href}
          role="tab"
          aria-controls={props.controls}
          aria-selected="false"
        >
          {props.title}
        </a>
      )}
    </li>
  );
}
