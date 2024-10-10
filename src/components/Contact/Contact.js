import React, { useRef } from "react";
import "./Contact.css";
import { MdLocationOn, MdArrowDownward } from "react-icons/md";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mia9ga2",
        "template_xk3q6qn",
        form.current,
        "ezvhfv54TLDUcU8ud"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
    <div className="contactUs">
      <div className="contactInfo">
        <h2 className="contactHeading">CONNECT WITH US</h2>
        <div className="contactDetails">
          <p className="phoneNumber">
            <strong>Phone:</strong>
          </p>
          <ul className="numberList">
            <li>
              <FaPhoneAlt className="contactIcon" />
              +254 733 823 277
            </li>
            <li>
              <FaPhoneAlt className="contactIcon" />
              +254 713 473 009
            </li>
          </ul>
          <p className="emailAddress">
            <strong>Email Address:</strong>
          </p>
          <ul className="emailList">
            <li>
              <FaEnvelope className="contactIcon" />
              deltacoolingsystemsltd@gmail.com
            </li>
            <li>
              <FaEnvelope className="contactIcon" />
              delta.cooling@yahoo.com
            </li>
            <li>
              <FaEnvelope className="contactIcon" />
              info@deltacooling.co.ke
            </li>
          </ul>
          <p className="website">
            <strong>Website:</strong>
          </p>
          <p>
            <FaGlobe className="contactIcon" />
            <a href="http://www.deltacooling.co.ke" className="web-link">
              www.deltacooling.co.ke
            </a>
          </p>
        </div>
        <div className="contact-Location">
          <h3>Office Location</h3>
          <p>CRYSTAL ALUMINIUM COMPLEX (GODOWN NO.2)</p>
          <p>BEHIND BASCO PAINT FACTORY, OLD AIRPORT NORTH ROAD</p>
          <p>OFF MOMBASA ROAD.</p>
          <p>P.O BOX 12915 – 00100</p>
          <p>NAIROBI.</p>
        </div>
      </div>
      <div className="contactForm">
        <form className="contactFrm" ref={form} onSubmit={sendEmail}>
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            name="your_name"
            required
          />
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="+254 733 823 277"
            name="phone_number"
            required
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="example@email.com"
            name="your_email"
            required
          />
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            name="message"
            rows="6"
            placeholder="Type your message here"
            required
          ></textarea>
          <div className="submit">
            <button className="submitBtn" type="submit">
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
      <div className="mapLocation">
          <a
            href="https://www.google.com/maps/place/Delta+Cooling+Systems/@-1.3199582,36.9025354,17z/data=!3m1!4b1!4m6!3m5!1s0x182f11a9c4b7c3cd:0xda99cee89922afc1!8m2!3d-1.3199582!4d36.9025354!16s%2Fg%2F11j7dcqc5q!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-link"
          >
            <div className="locationIconMain">
              <MdLocationOn className="locationIcon1" />
              <MdArrowDownward className="locationIcon2" />
            </div>
            <p>Click For Directions</p>
          </a>
          {/* Embed Google Map iframe to show the route */}
          <iframe
            title="Google Map of Delta Cooling Systems"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.01869914294!2d36.9025354!3d-1.3199582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11a9c4b7c3cd%3A0xda99cee89922afc1!2sDelta%20Cooling%20Systems!5e0!3m2!1sen!2ske!4v1696957163419!5m2!1sen!2ske"
            width="95%"
            height="400px"
            style={{ border: 0, 
                     borderRadius: '15px',
                     overflow: 'hidden' 
             }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </section>
  );
};

export default Contact;
