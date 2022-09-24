import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_jk6d7qi", e.target, "3tiVo6RDCaIqlXk8J")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact-form" id="contact">
      <h3 className="contact-title">Contact Me.</h3>
      <hr></hr>
      <br></br>
      <form onSubmit={sendEmail}>
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
}
