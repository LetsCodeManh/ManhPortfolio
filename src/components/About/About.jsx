import { useRef } from "react";
import fillerPicture from "../../assets/Filler.jpg";
import useParallax from "../../Effects/useParallax";
import "./index.css";

const About = () => {
  const circleOneRef = useRef(null);
  const circleTwoRef = useRef(null);
  const circleThreeRef = useRef(null);
  useParallax(circleOneRef, 0.2);
  useParallax(circleTwoRef, 0.4);
  useParallax(circleThreeRef, 0.3);

  return (
    <section id="about" className="about">
      <div className="about__me">
        <img
          className="about__image"
          src={fillerPicture}
          alt="My face should be here."
        />
        <div className="about__content">
          <h1 className="about__header">About Me...</h1>
          <p className="about__text">
            I just wrote the my about me like this. Can you check? Hi, I'm Manh,
            a motivated and dedicated individual with a passion for web
            development and business. I have completed a full-stack web
            developer bootcamp, which give me a comprehensive understanding of
            the latest web development technologies. And I am eager to apply my
            skills to a new challenge as a web developer and I am confident that
            I will be a valuable addition to any organization.
          </p>

          <button className="button__normal about__button">
            <a href="#contact">Contact Me!</a>
          </button>
        </div>
        <div ref={circleOneRef} className="circle about__circle__one" />
        <div ref={circleTwoRef} className="circle about__circle__two" />
      </div>
    </section>
  );
};

export default About;
