import React from "react";

type Props = {
  id: string,
  label: string,
  type: string,
  name: string,
  placeholder: string,
  fieldRef: React.Ref<HTMLInputElement>
}

const FormElement = (props: Props) => (
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
