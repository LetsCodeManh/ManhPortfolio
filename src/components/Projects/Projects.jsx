import { useRef } from "react";
import useParallax from "../../Effects/useParallax";
import "./index.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projects = [
  {
    title: "Hyrule Compendium App",
    technologies: "HTML | CSS | JS",
    github: "https://github.com/LetsCodeManh/Hyrule-Compendium-js-app",
    liveLink: "https://letscodemanh.github.io/Hyrule-Compendium-js-app/",
    live: "LIVE",
  },
  {
    title: "Manh's Portfolio",
    technologies: "React | Vite | CSS",
    github: "https://github.com/LetsCodeManh/ManhPortfolio",
    liveLink: "https://letscodemanh.github.io/ManhPortfolio/",
    live: "LIVE",
  },
  {
    title: "Olga Website",
    technologies: "React | Vite | TailwindCSS",
    github: "https://github.com/LetsCodeManh/OlgaWebsite",
    liveLink: "https://LetsCodeManh.github.io/OlgaWebsite/",
    live: "LIVE",
  },
  {
    title: "myFlix Server",
    technologies: "Node | Express | MongoDB",
    github: "https://github.com/LetsCodeManh/myFlix-server",
    liveLink: "#",
    live: "",
  },
  {
    title: "myFlix Client",
    technologies: "React | Redux | Bootstrap",
    github: "https://github.com/LetsCodeManh/myFlix-client",
    liveLink: "https://myflix-test-website.netlify.app/",
    live: "LIVE",
  },
  {
    title: "MeetApp",
    technologies: "React | Google API | Jest",
    github: "https://github.com/LetsCodeManh/MeetApp",
    liveLink: "https://letscodemanh.github.io/MeetApp/",
    live: "LIVE",
  },
  {
    title: "ChatApp",
    technologies: "React Native | Expo | Firebase",
    github: "https://github.com/LetsCodeManh/ChatApp",
    liveLink: "#",
    live: "",
  },
  {
    title: "myFlixAngular",
    technologies: "Angular | TypeScript | SCSS",
    github: "https://github.com/LetsCodeManh/myFlix-Angular-Client",
    liveLink: "https://letscodemanh.github.io/myFlix-Angular-Client/",
    live: "LIVE",
  },
];

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
          <div key={index} className="projects__card">
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
          </div>
        ))}
      </div>
      <div ref={circleOneRef} className="circle projects__circle__one" />
      <div ref={circleTwoRef} className="circle projects__circle__two" />
    </section>
  );
};

export default Projects;
