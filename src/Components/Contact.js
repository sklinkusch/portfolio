/** @jsxImportSource theme-ui */
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
    <div className="container" sx={{ backgroundColor: "white", borderRadius: "10px" }}>
      <section id="contact" sx={{ margin: "30px 0" }}>
        <div sx={{ height: "1vh" }} />
        <h3 sx={{ mb: "1rem" }}>Contact</h3>
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
        <div sx={{ height: "1vh" }} />
      </section>
    </div>
  );
};

export default Contact;
