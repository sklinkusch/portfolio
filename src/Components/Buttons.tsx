/** @jsxImportSource theme-ui */
import React, { MouseEventHandler } from "react";

type Props = {
  deleteAll: MouseEventHandler
}

const Buttons = (props: Props) => (
  <div sx={{ textAlign: "center" }}>
    <button type="submit" className="btn btn-success">
      Send message
    </button>
    <button className="btn btn-danger" onClick={props.deleteAll}>
      Discard changes
    </button>
  </div>
);

export default Buttons;
