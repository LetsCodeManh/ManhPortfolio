import { useRef } from "react";
import useParallax from "../../Effects/useParallax";
import "./index.css";

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
    github: "#",
    liveLink: "#",
    live: "",
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
    liveLink: "#",
    live: "",
  },
  {
    title: "MeetApp",
    technologies: "React | Google API | Jest",
    github: "https://github.com/LetsCodeManh/MeetApp",
    liveLink: "#",
    live: "",
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
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
