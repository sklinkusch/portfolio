import React from "react";
import Example from "./Example";

export default function JSEx(props) {
  const { data } = props;
  return (
    <section>
      <h4>Examples using vanilla JavaScript</h4>
      <div className="sk-flex-row sk-flex-wrap sk-jc-spa sk-w-mc">
        {data.map((item, index) => (
          <Example data={item} key={index} />
        ))}
      </div>
    </section>
  );
}
