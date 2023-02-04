import { useRef } from "react";
import useParallax from "../Effects/useParallax";
import TextRandomizer from "../Randomizer/TextRandomizer";
import "./index.css";

const Hero = () => {
  const circleOneRef = useRef(null);
  const circleTwoRef = useRef(null);
  useParallax(circleOneRef, 0.2);
  useParallax(circleTwoRef, 0.4);

  return (
    <section id="home" className="home">
      <h2 className="home__subheader">Welcome to my portfolio!</h2>
      <h1 className="home__header">
        I'm Manh Nguyen, <br />
        <TextRandomizer text="a web developer" />.
      </h1>
      <p className="home__text">
        Take a look around to see what I can offer, and let's bring your vision
        to life.
      </p>
      <div className="home__button__group">
        <button className="button__normal">
          <a href="#about">About Me!</a>
        </button>
        <button className="button__normal">
          <a href="#contact">Contact Me!</a>
        </button>
      </div>
      <div ref={circleOneRef} className="circle home__circle__one" />
      <div ref={circleTwoRef} className="circle home__circle__two" />
    </section>
  );
};

export default Hero;