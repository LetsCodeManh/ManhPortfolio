import TextRandomizer from "../Randomizer/TextRandomizer";
import "./index.css";

const Hero = () => {
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
      <div className="home__button_group">
        <button className="home__button">
          <a href="#about">More About Me!</a>
        </button>
        <button className="home__button">
          <a href="#d">Download CV</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
