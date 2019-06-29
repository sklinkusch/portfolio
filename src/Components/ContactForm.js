import React from "react";
import FormElement from "./FormElement";
import TextArea from "./TextArea";
import Buttons from "./Buttons";

export default function ContactForm(props) {
  return (
    <form
      name="contactform"
      action="../PHP/mail.php"
      //method="post"
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
      <FormElement
        id="subject"
        type="text"
        label="Subject"
        name="subject"
        placeholder="Subject of your message"
        fieldRef={props.subjField}
      />
      <TextArea
        id="message"
        label="Message"
        name="message"
        placeholder="Your message"
        fieldRef={props.messField}
      />
      <Buttons deleteAll={props.deleteAll} />
    </form>
  );
}
