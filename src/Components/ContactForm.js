import React from "react";
import FormElement from "./FormElement";
import TextArea from "./TextArea";
import Buttons from "./Buttons";

const ContactForm = props => (
  <form
    className="gform"
    name="contactform"
    method="POST"
    data-email="stefan.klinkusch@googlemail.com"
    action="https://script.google.com/macros/s/AKfycbym7tLzfVpSgrTC8D88lGqh163RMXwfP9m3FGqYZGyY99UrY5M/exec"
  >
    <FormElement
      id="name"
      type="text"
      label="Name"
      name="name"
      placeholder="Your name, e.g. John Doe"
      fieldRef={props.nameField}
    />
    <FormElement
      id="email"
      type="email"
      label="Email address"
      name="email"
      placeholder="Your email address, e.g. john.doe@example.com"
      fieldRef={props.mailField}
    />
    <TextArea
      id="message"
      label="Message"
      name="message"
      placeholder="Your message"
      fieldRef={props.messField}
    />
    <Buttons deleteAll={props.deleteAll} />
    <div style={{ display: "none" }} className="thankyou_message">
      <h4>
        <em>Thank you for contacting me! I will reply to you soon!</em>
      </h4>
    </div>
  </form>
);

export default ContactForm;
