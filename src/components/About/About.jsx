import fillerPicture from "../../assets/Filler.jpg";
import "./index.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__me">
        <img
          className="about__image"
          src={fillerPicture}
          alt="My face should be here."
        />
        <div className="about__content">
          <h1 className="about__header">About Me</h1>
          <h2 className="about__subheader">Hi there!</h2>
          <p className="about__text">
            My name is Manh Nguyen and I'm a Web Developer based in Germany. As
            a web developer with a passion for learning new technologies and
            business, I bring both technical expertise and innovative ideas to
            the table. With experience in various programming languages and a
            desire to continuously expand my skill set, I am confident in my
            ability to bring your vision to life and exceed your expectations.
            Let's work together and make it happen!
          </p>
          <div className="about__button__group">
            <button className="button__normal">
              <a href="#contact">Contact Me!</a>
            </button>
            <button className="button__normal">
              <a href="#">Download CV!</a>
            </button>
          </div>
        </div>
      </div>
      <div className="about__skills">
        <p>Hello</p>
      </div>
    </section>
  );
};

export default About;
