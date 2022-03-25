/** @jsxImportSource theme-ui */
import React from "react";
import { Button } from "reactstrap";

const Welcome = () => (
  <div className="container" sx={{ backgroundColor: "wwhite", opacity: 0.95, borderRadius: "10px" }}>
    <div sx={{ height: "1vh" }} />
    <section id="jumbotron" sx={{ margin: "30px 0" }}>
      <div class="jumbotron" sx={{ padding: "2rem", borderRadius: "6px" }}>
        <h1>Welcome to my page!</h1>
        <p>
          I am a computational chemist and frontend web developer based in
          Berlin, Germany. If you want me to create your new webpage or to do an
          upgrade for it, then write me a message. I am looking forward to
          meeting you soon.
        </p>
        <Button
          href="#contact"
          className="btn btn-lg"
          role="button"
          color="primary"
        >
          Contact me
        </Button>
      </div>
    </section>
    <div sx={{ height: "0.01px" }} />
  </div>
);

export default Welcome;
