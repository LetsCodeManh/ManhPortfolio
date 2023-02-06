import "./index.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "./projectsData";
import FadeInOnIntersect from "../Effects/AnimationOnScroll";

const Projects = () => {
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
              <h2>{project.title}</h2>
              <div>{project.technologies}</div>
              <div className="projects__card__links">
                <a
                  href={project.github}
                  target="_blank"
                  className="icon__hover"
                  aria-label={`${project.title} GitHub Repository`}
                >
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
                    className="projects__card__liveLink icon__hover"
                    aria-label={`${project.title} Live Link`}
                  >
                    {project.live}
                  </a>
                )}
              </div>
            </div>
          </FadeInOnIntersect>
        ))}
      </div>
      <div className="circle projects__circle__one" />
      <div className="circle projects__circle__two" />
    </section>
  );
};

export default Projects;
