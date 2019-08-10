import React, { useRef } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const nameField = useRef(null);
  const mailField = useRef(null);
  const messField = useRef(null);
  const deleteAll = event => {
    event.preventDefault();
    nameField.current.value = "";
    mailField.current.value = "";
    messField.current.value = "";
  };
  return (
    <div className="container sk-bg-white">
      <section id="contact">
        <div className="sk-placeholder-tiny" />
        <h3>Contact</h3>
        <p>
          If you would like to come in contact with me, feel free to write me a
          message here.
        </p>
        <ContactForm
          nameField={nameField}
          mailField={mailField}
          messField={messField}
          deleteAll={deleteAll}
        />
        <div className="sk-placeholder-tiny" />
      </section>
    </div>
  );
};

export default Contact;
