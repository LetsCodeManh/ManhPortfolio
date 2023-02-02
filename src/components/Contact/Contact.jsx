import { useState } from "react";
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
          "Content-Type": "aplication/json",
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
      <form onSubmit={handleSubmit} className="contact__form">
        <h1 className="contact__header">Contact Me!</h1>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contact__form__input"
        />
        <input
          type="email"
          placeholder="Your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contact__form__input"
        />
        <textarea
          placeholder="Your message"
          name="message"
          rows={2}
          value={formData.message}
          onChange={handleChange}
          className="contact__form__input"
        />
        <button type="submit" className="button__normal">
          Let's get in touch!
        </button>
      </form>
      <div className="about__info__container">
        <p>
          Thank you for visting my portfolio. I hope you like it so far. The
          last thing I give is my resume, if you want of course.
        </p>
        <button className="button__normal">Download CV!</button>
      </div>
    </section>
  );
};

export default Contact;
