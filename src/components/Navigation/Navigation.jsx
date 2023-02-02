import { useState } from "react";
import TextRandomizer from "../Randomizer/TextRandomizer";
import "./index.css";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const handleNavigationClick = () => {
    setIsActive(false);
  };

  return (
    <header className="nagivation">
      <button
        className={`navigation__hamburger ${isActive ? "is-active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <svg
          fill="none"
          className="hamburger"
          viewBox="-10 -10 120 120"
          width="50"
        >
          <path
            className="line"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
          ></path>
        </svg>
      </button>

      <div
        className={`navigation__background ${isActive ? "is-active" : ""}`}
      ></div>

      <nav className={`navigation__nav ${isActive ? "is-active" : ""}`}>
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href="#home"
              className="navigation__link"
              onClick={handleNavigationClick}
            >
              <TextRandomizer text="Home" />
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#about"
              className="navigation__link"
              onClick={handleNavigationClick}
            >
              <TextRandomizer text="About Me" />
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#projects"
              className="navigation__link"
              onClick={handleNavigationClick}
            >
              <TextRandomizer text="Projects" />
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#contact"
              className="navigation__link"
              onClick={handleNavigationClick}
            >
              <TextRandomizer text="Contact" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
