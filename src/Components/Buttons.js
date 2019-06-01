import React from "react";

export default function Buttons(props) {
  return (
    <div className="sk-buttons-group">
      <button type="submit" className="btn btn-success">
        Send message
      </button>
      <button className="btn btn-danger" onClick={props.deleteAll}>
        Discard changes
      </button>
    </div>
  );
}
