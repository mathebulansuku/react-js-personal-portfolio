import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uufnecr", //service ID
        "template_m7nks9t", //template ID
        form.current,
        "yxIBSC4GO92RWnKtK" //public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="Contact" className="contact-section">
      <div>
        <p className="sub-title">Get In Touch</p>
        <h2>Email: info@techwithmanny.com</h2>
      </div>
      <form ref={form} className="contact-form-container" onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact-input text md"
              name="first_name" // Match EmailJS template variable
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact-label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact-input text md"
              name="last_name" // Match EmailJS template variable
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact-label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact-input text md"
              name="email" // Match EmailJS template variable
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact-label">
            <span className="text-md">Phone-number</span>
            <input
              type="number"
              className="contact-input text md"
              name="phone_number" // Match EmailJS template variable
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact-label">
          <span className="text-md">Choose Topic</span>
          <select
            id="choose-topic"
            className="contact-input text-md"
            name="subject"
          >
            <option>Select</option>
            <option>DevOps Engineering</option>
            <option>Web development</option>
            <option>Cloud Engineer</option>
          </select>
        </label>
        <label htmlFor="message" className="contact-label">
          <span className="text-md">Message</span>
          <textarea
            className="contact-input text md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            name="message" // Match EmailJS template variable
          />
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact-form-btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
