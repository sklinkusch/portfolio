import React from "react";

export default function TextArea(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        className="form-control"
        id={props.id}
        rows="6"
        placeholder={props.placeholder}
        required
      />
    </div>
  );
}