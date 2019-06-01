import React from "react";
import FormElement from "./FormElement";
import TextArea from "./TextArea";

export default function ContactForm() {
  return (
    <form
      name="contactform"
      action="mailto:stefan.klinkusch@googlemail.com"
      method="post"
    >
      <FormElement
        id="name"
        type="text"
        label="Name"
        placeholder="Your name, e.g. John Doe"
      />
      <FormElement
        id="email"
        type="email"
        label="Email address"
        placeholder="Your email address, e.g. john.doe@example.com"
      />
      <FormElement
        id="subject"
        type="text"
        label="Subject"
        placeholder="Subject of your message"
      />
      <TextArea id="message" label="Message" placeholder="Your message" />
    </form>
  );
}
