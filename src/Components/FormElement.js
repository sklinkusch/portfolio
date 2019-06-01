import React from "react";

export default function FormElement(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        ref={props.fieldRef}
        required
      />
    </div>
  );
}
