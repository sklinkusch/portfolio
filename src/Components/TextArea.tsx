import React from "react";

type Props = {
  id: string,
  label: string,
  name: string,
  placeholder: string,
  fieldRef: React.Ref<HTMLTextAreaElement>
}

const TextArea = (props: Props) => (
  <div className="form-group">
    <label htmlFor={props.id}>{props.label}</label>
    <textarea
      className="form-control"
      id={props.id}
      rows={6}
      name={props.name}
      placeholder={props.placeholder}
      ref={props.fieldRef}
      required
    />
  </div>
);

export default TextArea;
