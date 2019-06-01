import React, { Component } from "react";
import ContactForm from "./ContactForm";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.nameField = React.createRef();
    this.mailField = React.createRef();
    this.subjField = React.createRef();
    this.messField = React.createRef();
  }
  deleteAll = () => {
    this.nameField.current.value = "";
    this.mailField.current.value = "";
    this.subjField.current.value = "";
    this.messField.current.value = "";
  };
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
          <ContactForm
            nameField={this.nameField}
            mailField={this.mailField}
            subjField={this.subjField}
            messField={this.messField}
            deleteAll={this.deleteAll}
          />
          <div className="sk-placeholder-tiny" />
        </section>
      </div>
    );
  }
}
