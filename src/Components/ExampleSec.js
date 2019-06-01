import React from "react";
import Example from "./Example";

export default function ExampleSec(props) {
  const { title, data } = props;
  const printdata = data.filter(
    item => "src" in item && "href" in item && "title" in item
  );
  return (
    <section>
      <h4>{title}</h4>
      <div className="sk-flex-row sk-flex-wrap sk-jc-spa sk-w-mc">
        {printdata.map((item, index) => (
          <Example key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
