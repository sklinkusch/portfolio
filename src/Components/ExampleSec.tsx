/** @jsxImportSource theme-ui */
import React from "react";
import Example from "./Example";

type Props = {
  title: string,
  data: {
    src: string,
    href: string,
    title: string
  }[]
}

const ExampleSec = (props: Props) => {
  const { title, data } = props;
  const printdata = data.filter(
    item => "src" in item && "href" in item && "title" in item
  );
  return (
    <section sx={{ margin: "30px 0" }}>
      <h4>{title}</h4>
      <div className="sk-w-mc" sx={{ justifyContent: "space-around", flexWrap: "wrap", display: "flex", flexDirection: "row" }}>
        {printdata.map((item, index) => (
          <Example key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default ExampleSec;
