import React from "react";
import { Button } from "reactstrap";

const Welcome = () => (
  <div className="container sk-bg-white">
    <div className="sk-placeholder-tiny" />
    <section id="jumbotron">
      <div class="jumbotron">
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
    <div className="sk-placeholder-verytiny" />
  </div>
);

export default Welcome;
