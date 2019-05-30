import React from "react";
import Example from "./Example";

export default function ReactEx(props) {
  const { data } = props;
  return (
    <section>
      <h4>Examples using React.js</h4>
      <div className="sk-flex-row sk-flex-wrap sk-jc-spa sk-w-mc">
        {data.map((item, index) => (
          <Example data={item} key={index} />
        ))}
      </div>
    </section>
  );
}
