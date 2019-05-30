import React from "react";
import Example from "./Example";

export default function HTMLEx(props) {
  const { data } = props;
  return (
    <section>
      <h4>Examples using HTML, CSS/SCSS, and Bootstrap</h4>
      <div className="sk-flex-row sk-flex-wrap sk-jc-spa sk-w-mc">
        {data.map((item, index) => (
          <Example data={item} key={index} />
        ))}
      </div>
    </section>
  );
}
