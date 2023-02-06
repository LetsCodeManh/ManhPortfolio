import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import FadeInOnIntersect from "../Effects/AnimationOnScroll";
import "./index.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mnqyjweb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to send form");
      }
      setFormData({ name: "", email: "", message: "" });
      alert("I will get in touch with you soon!");
    } catch (error) {
      console.error(error);
      alert("Failed to send form. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact">
      <FadeInOnIntersect className="contact__form">
        <h1 className="contact__header">Contact Me!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact__form__input"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact__form__input"
            required
          />
          <textarea
            placeholder="Your message"
            name="message"
            rows={2}
            value={formData.message}
            onChange={handleChange}
            className="contact__form__input"
            required
          />
          <button type="submit" className="button__normal">
            <a href="#contact" aria-label="Send messages to Manh">Let's get in touch!</a>
          </button>
          <div className="contact__social__links">
            <a
              href="https://github.com/LetsCodeManh"
              target="_blank"
              className="icon__hover"
              aria-label="GitHub Account"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                style={{ color: "#171515" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/manh-nguyen-0a094524b/"
              target="_blank"
              className="icon__hover"
              aria-label="LinkenIn Account"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
                style={{ color: "#0077B5" }}
              />
            </a>
          </div>
        </form>
      </FadeInOnIntersect>
      <FadeInOnIntersect className="about__info__container">
        <p>
          Thank you for visiting my portfolio. I hope you like it. My resume is
          available if desired.
        </p>
        <button className="button__normal">
          <a href="#" target="_blank" aria-label="Download Resume">
            Download CV!
          </a>
        </button>
      </FadeInOnIntersect>
      <div className="circle contact__circle__one" />
    </section>
  );
};

export default Contact;
