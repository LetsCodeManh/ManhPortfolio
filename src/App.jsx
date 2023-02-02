import About from "./components/About/about";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
