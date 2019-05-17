import React from "react";
import CVTitles from "./CVTitles";

export default function CV() {
  return (
    <div className="container sk-bg-white">
      <div className="sk-placeholder-tiny" />
      <section id="cv">
        <h3>My Curriculum Vitae</h3>
        <CVTitles />
      </section>
    </div>
  );
}
