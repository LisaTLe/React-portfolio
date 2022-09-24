import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9wcguoo",
        "template_jk6d7qi",
        form.current,
        "qopLzuQao9jBpM-Ff"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="contact-form" id="contact">
      <h3 className="contact-title">Contact Me.</h3>
      <hr></hr>
      <br></br>
      <form ref={form} onSubmit={sendEmail}>
        <label>Subject: </label>
        <input type="text" name="Subject" placeholder="Subject" />
        <label>Name: </label>
        <input type="text" name="Name" placeholder="Name" />
        <label>Email: </label>
        <input type="email" name="Email" placeholder="Email" />
        <label>Message:</label>
        <textarea name="Message" placeholder="Message" />
        <br></br>
        <br></br>
        <input className="button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUs;
