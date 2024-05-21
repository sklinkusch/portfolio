/** @jsxImportSource theme-ui */
import React, { useRef } from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  const nameField = useRef<HTMLInputElement>(null);
  const mailField = useRef<HTMLInputElement>(null);
  const messField = useRef<HTMLTextAreaElement>(null);
  const deleteAll = (event: { preventDefault: Function }) => {
    event.preventDefault();
    const nameCurrent = nameField.current as HTMLInputElement;
    nameCurrent.value = '';
    const mailCurrent = mailField.current as HTMLInputElement;
    mailCurrent.value = '';
    const messCurrent = messField.current as HTMLTextAreaElement;
    messCurrent.value = '';
  };
  return (
    <div className="container" sx={{ backgroundColor: 'white', borderRadius: '10px' }}>
      <section id="contact" sx={{ margin: '30px 0' }}>
        <div sx={{ height: '1vh' }} />
        <h3 sx={{ mb: '1rem' }}>Contact</h3>
        <p>If you would like to come in contact with me, feel free to write me a message here.</p>
        <ContactForm nameField={nameField} mailField={mailField} messField={messField} deleteAll={deleteAll} />
        <div sx={{ height: '1vh' }} />
      </section>
    </div>
  );
};

export default Contact;
