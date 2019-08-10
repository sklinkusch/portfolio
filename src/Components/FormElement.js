import React from "react";

const FormElement = props => (
  <div className="form-group">
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type}
      className="form-control"
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      ref={props.fieldRef}
      required
    />
  </div>
);

export default FormElement;
