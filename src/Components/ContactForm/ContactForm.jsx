import React, { useEffect, useRef } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const contactRef = useRef(null);

  // Landing animation on scroll
  useEffect(() => {
    const contactElement = contactRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contactElement.classList.add("visible");
          } else {
            contactElement.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 },
    );

    if (contactElement) observer.observe(contactElement);

    return () => {
      if (contactElement) observer.unobserve(contactElement);
    };
  }, []);

  return (
    <section className="contact" id="contact" ref={contactRef}>
      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="right-mg">
            <h1 className="contact-title Moda">CONTACT US</h1>
            <p className="contact-desc">
              Our showroom is open Monday to Saturday from 8am – 5pm and Sundays
              from 11am to 5pm, or for appointment only if required. Please feel
              free to give us a call or send us an enquiry through this contact
              form and we’d be delighted to speak with you.
            </p>
            <div className="contact-details">
              <h3 className="company-name Moda">OAK FOREST</h3>
              <p className="Moda">Unit 10 Cooper Ln</p>
              <p className="Moda">Great Horton Industrial Estate</p>
              <p className="Moda">Bradford</p>
              <p className="Moda">West Yorkshire</p>
              <p className="Moda">BD6 3ND</p>
              <p className="contact-phone">
                <a href="tel:+441274576908">TEL: 01274 576 908</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form
            action="https://formsubmit.co/oakforestofyorkshire@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                className="Moda"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="Moda"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <input
              type="text"
              className="Moda"
              name="phone"
              placeholder="Phone"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="Moda"
              rows="4"
              required
            ></textarea>

            {/* Hidden Inputs for Extra Configuration */}
            {/* <input
              type="hidden"
              name="_next"
              value="https://"
            />
            <input type="hidden" name="_captcha" value="false" /> */}

            <button type="submit" className="contact-button Moda">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
