import React, { Component } from "react";
import ContactForm from "./ContactForm";

export default class Contact extends Component {
  render() {
    return (
      <div className="container sk-bg-white">
        <section id="contact">
          <div className="sk-placeholder-tiny" />
          <h3>Contact</h3>
          <p>
            If you would like to come in contact with me, feel free to write me
            a message here.
          </p>
          <ContactForm />
          <div className="sk-placeholder-tiny" />
        </section>
      </div>
    );
  }
}
