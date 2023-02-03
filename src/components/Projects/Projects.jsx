import { useRef } from "react";
import useParallax from "../Effects/useParallax";
import "./index.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "./projectsData";
import FadeInOnIntersect from "../Effects/AnimationOnScroll";

const Projects = () => {
  const circleOneRef = useRef(null);
  const circleTwoRef = useRef(null);
  useParallax(circleOneRef, 0.2);
  useParallax(circleTwoRef, 0.4);

  return (
    <section id="projects" className="projects">
      <h1 className="projects__header">My Projects</h1>
      <div className="projects__container">
        {projects.map((project, index) => (
          <FadeInOnIntersect
            key={index}
            className="projects__card"
            onClick={() => handleOpenModal(project)}
          >
            <div className="projects__card__content">
              <h3>{project.title}</h3>
              <p>{project.technologies}</p>
              <div className="projects__card__links">
                <a href={project.github} target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2xl"
                    style={{ color: "#fafafa" }}
                  />
                </a>
                {project.live && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="projects__card__liveLink"
                  >
                    {project.live}
                  </a>
                )}
              </div>
            </div>
          </FadeInOnIntersect>
        ))}
      </div>
      <div ref={circleOneRef} className="circle projects__circle__one" />
      <div ref={circleTwoRef} className="circle projects__circle__two" />
    </section>
  );
};

export default Projects;
