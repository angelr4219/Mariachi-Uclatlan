// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file for styling
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Please fill out the form below:</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
