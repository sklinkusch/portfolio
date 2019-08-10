import React from "react";

const Buttons = props => (
  <div className="sk-buttons-group">
    <button type="submit" className="btn btn-success">
      Send message
    </button>
    <button className="btn btn-danger" onClick={props.deleteAll}>
      Discard changes
    </button>
  </div>
);

export default Buttons;
